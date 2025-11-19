(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();function hg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jc={exports:{}},Aa={};var np;function I0(){if(np)return Aa;np=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(u,o,s){var f=null;if(s!==void 0&&(f=""+s),o.key!==void 0&&(f=""+o.key),"key"in o){s={};for(var m in o)m!=="key"&&(s[m]=o[m])}else s=o;return o=s.ref,{$$typeof:n,type:u,key:f,ref:o!==void 0?o:null,props:s}}return Aa.Fragment=a,Aa.jsx=i,Aa.jsxs=i,Aa}var lp;function $0(){return lp||(lp=1,Jc.exports=I0()),Jc.exports}var k=$0(),Ic={exports:{}},ge={};var ip;function P0(){if(ip)return ge;ip=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,O={};function N(A,X,E){this.props=A,this.context=X,this.refs=O,this.updater=E||w}N.prototype.isReactComponent={},N.prototype.setState=function(A,X){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,X,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function H(){}H.prototype=N.prototype;function B(A,X,E){this.props=A,this.context=X,this.refs=O,this.updater=E||w}var ne=B.prototype=new H;ne.constructor=B,_(ne,N.prototype),ne.isPureReactComponent=!0;var ie=Array.isArray;function V(){}var P={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function oe(A,X,E){var W=E.ref;return{$$typeof:n,type:A,key:X,ref:W!==void 0?W:null,props:E}}function U(A,X){return oe(A.type,X,A.props)}function ee(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function te(A){var X={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(E){return X[E]})}var Se=/\/+/g;function ae(A,X){return typeof A=="object"&&A!==null&&A.key!=null?te(""+A.key):X.toString(36)}function I(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(V,V):(A.status="pending",A.then(function(X){A.status==="pending"&&(A.status="fulfilled",A.value=X)},function(X){A.status==="pending"&&(A.status="rejected",A.reason=X)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function L(A,X,E,W,de){var ce=typeof A;(ce==="undefined"||ce==="boolean")&&(A=null);var Ce=!1;if(A===null)Ce=!0;else switch(ce){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(A.$$typeof){case n:case a:Ce=!0;break;case b:return Ce=A._init,L(Ce(A._payload),X,E,W,de)}}if(Ce)return de=de(A),Ce=W===""?"."+ae(A,0):W,ie(de)?(E="",Ce!=null&&(E=Ce.replace(Se,"$&/")+"/"),L(de,X,E,"",function(Gt){return Gt})):de!=null&&(ee(de)&&(de=U(de,E+(de.key==null||A&&A.key===de.key?"":(""+de.key).replace(Se,"$&/")+"/")+Ce)),X.push(de)),1;Ce=0;var Fe=W===""?".":W+":";if(ie(A))for(var Ue=0;Ue<A.length;Ue++)W=A[Ue],ce=Fe+ae(W,Ue),Ce+=L(W,X,E,ce,de);else if(Ue=x(A),typeof Ue=="function")for(A=Ue.call(A),Ue=0;!(W=A.next()).done;)W=W.value,ce=Fe+ae(W,Ue++),Ce+=L(W,X,E,ce,de);else if(ce==="object"){if(typeof A.then=="function")return L(I(A),X,E,W,de);throw X=String(A),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function K(A,X,E){if(A==null)return A;var W=[],de=0;return L(A,W,"","",function(ce){return X.call(E,ce,de++)}),W}function ue(A){if(A._status===-1){var X=A._result;X=X(),X.then(function(E){(A._status===0||A._status===-1)&&(A._status=1,A._result=E)},function(E){(A._status===0||A._status===-1)&&(A._status=2,A._result=E)}),A._status===-1&&(A._status=0,A._result=X)}if(A._status===1)return A._result.default;throw A._result}var ve=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},T={map:K,forEach:function(A,X,E){K(A,function(){X.apply(this,arguments)},E)},count:function(A){var X=0;return K(A,function(){X++}),X},toArray:function(A){return K(A,function(X){return X})||[]},only:function(A){if(!ee(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ge.Activity=g,ge.Children=T,ge.Component=N,ge.Fragment=i,ge.Profiler=o,ge.PureComponent=B,ge.StrictMode=u,ge.Suspense=d,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ge.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},ge.cache=function(A){return function(){return A.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(A,X,E){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var W=_({},A.props),de=A.key;if(X!=null)for(ce in X.key!==void 0&&(de=""+X.key),X)!he.call(X,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&X.ref===void 0||(W[ce]=X[ce]);var ce=arguments.length-2;if(ce===1)W.children=E;else if(1<ce){for(var Ce=Array(ce),Fe=0;Fe<ce;Fe++)Ce[Fe]=arguments[Fe+2];W.children=Ce}return oe(A.type,de,W)},ge.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:s,_context:A},A},ge.createElement=function(A,X,E){var W,de={},ce=null;if(X!=null)for(W in X.key!==void 0&&(ce=""+X.key),X)he.call(X,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(de[W]=X[W]);var Ce=arguments.length-2;if(Ce===1)de.children=E;else if(1<Ce){for(var Fe=Array(Ce),Ue=0;Ue<Ce;Ue++)Fe[Ue]=arguments[Ue+2];de.children=Fe}if(A&&A.defaultProps)for(W in Ce=A.defaultProps,Ce)de[W]===void 0&&(de[W]=Ce[W]);return oe(A,ce,de)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(A){return{$$typeof:m,render:A}},ge.isValidElement=ee,ge.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:ue}},ge.memo=function(A,X){return{$$typeof:p,type:A,compare:X===void 0?null:X}},ge.startTransition=function(A){var X=P.T,E={};P.T=E;try{var W=A(),de=P.S;de!==null&&de(E,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(V,ve)}catch(ce){ve(ce)}finally{X!==null&&E.types!==null&&(X.types=E.types),P.T=X}},ge.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ge.use=function(A){return P.H.use(A)},ge.useActionState=function(A,X,E){return P.H.useActionState(A,X,E)},ge.useCallback=function(A,X){return P.H.useCallback(A,X)},ge.useContext=function(A){return P.H.useContext(A)},ge.useDebugValue=function(){},ge.useDeferredValue=function(A,X){return P.H.useDeferredValue(A,X)},ge.useEffect=function(A,X){return P.H.useEffect(A,X)},ge.useEffectEvent=function(A){return P.H.useEffectEvent(A)},ge.useId=function(){return P.H.useId()},ge.useImperativeHandle=function(A,X,E){return P.H.useImperativeHandle(A,X,E)},ge.useInsertionEffect=function(A,X){return P.H.useInsertionEffect(A,X)},ge.useLayoutEffect=function(A,X){return P.H.useLayoutEffect(A,X)},ge.useMemo=function(A,X){return P.H.useMemo(A,X)},ge.useOptimistic=function(A,X){return P.H.useOptimistic(A,X)},ge.useReducer=function(A,X,E){return P.H.useReducer(A,X,E)},ge.useRef=function(A){return P.H.useRef(A)},ge.useState=function(A){return P.H.useState(A)},ge.useSyncExternalStore=function(A,X,E){return P.H.useSyncExternalStore(A,X,E)},ge.useTransition=function(){return P.H.useTransition()},ge.version="19.2.0",ge}var ap;function Ms(){return ap||(ap=1,Ic.exports=P0()),Ic.exports}var Y=Ms(),$c={exports:{}},za={},Pc={exports:{}},Wc={};var rp;function W0(){return rp||(rp=1,(function(n){function a(L,K){var ue=L.length;L.push(K);e:for(;0<ue;){var ve=ue-1>>>1,T=L[ve];if(0<o(T,K))L[ve]=K,L[ue]=T,ue=ve;else break e}}function i(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var K=L[0],ue=L.pop();if(ue!==K){L[0]=ue;e:for(var ve=0,T=L.length,A=T>>>1;ve<A;){var X=2*(ve+1)-1,E=L[X],W=X+1,de=L[W];if(0>o(E,ue))W<T&&0>o(de,E)?(L[ve]=de,L[W]=ue,ve=W):(L[ve]=E,L[X]=ue,ve=X);else if(W<T&&0>o(de,ue))L[ve]=de,L[W]=ue,ve=W;else break e}}return K}function o(L,K){var ue=L.sortIndex-K.sortIndex;return ue!==0?ue:L.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var d=[],p=[],b=1,g=null,S=3,x=!1,w=!1,_=!1,O=!1,N=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function ne(L){for(var K=i(p);K!==null;){if(K.callback===null)u(p);else if(K.startTime<=L)u(p),K.sortIndex=K.expirationTime,a(d,K);else break;K=i(p)}}function ie(L){if(_=!1,ne(L),!w)if(i(d)!==null)w=!0,V||(V=!0,te());else{var K=i(p);K!==null&&I(ie,K.startTime-L)}}var V=!1,P=-1,he=5,oe=-1;function U(){return O?!0:!(n.unstable_now()-oe<he)}function ee(){if(O=!1,V){var L=n.unstable_now();oe=L;var K=!0;try{e:{w=!1,_&&(_=!1,H(P),P=-1),x=!0;var ue=S;try{t:{for(ne(L),g=i(d);g!==null&&!(g.expirationTime>L&&U());){var ve=g.callback;if(typeof ve=="function"){g.callback=null,S=g.priorityLevel;var T=ve(g.expirationTime<=L);if(L=n.unstable_now(),typeof T=="function"){g.callback=T,ne(L),K=!0;break t}g===i(d)&&u(d),ne(L)}else u(d);g=i(d)}if(g!==null)K=!0;else{var A=i(p);A!==null&&I(ie,A.startTime-L),K=!1}}break e}finally{g=null,S=ue,x=!1}K=void 0}}finally{K?te():V=!1}}}var te;if(typeof B=="function")te=function(){B(ee)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ae=Se.port2;Se.port1.onmessage=ee,te=function(){ae.postMessage(null)}}else te=function(){N(ee,0)};function I(L,K){P=N(function(){L(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(L){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var ue=S;S=K;try{return L()}finally{S=ue}},n.unstable_requestPaint=function(){O=!0},n.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ue=S;S=L;try{return K()}finally{S=ue}},n.unstable_scheduleCallback=function(L,K,ue){var ve=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ve+ue:ve):ue=ve,L){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=ue+T,L={id:b++,callback:K,priorityLevel:L,startTime:ue,expirationTime:T,sortIndex:-1},ue>ve?(L.sortIndex=ue,a(p,L),i(d)===null&&L===i(p)&&(_?(H(P),P=-1):_=!0,I(ie,ue-ve))):(L.sortIndex=T,a(d,L),w||x||(w=!0,V||(V=!0,te()))),L},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(L){var K=S;return function(){var ue=S;S=K;try{return L.apply(this,arguments)}finally{S=ue}}}})(Wc)),Wc}var up;function eb(){return up||(up=1,Pc.exports=W0()),Pc.exports}var es={exports:{}},dt={};var op;function tb(){if(op)return dt;op=1;var n=Ms();function a(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(d,p,b){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:d,containerInfo:p,implementation:b}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,dt.createPortal=function(d,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return s(d,p,null,b)},dt.flushSync=function(d){var p=f.T,b=u.p;try{if(f.T=null,u.p=2,d)return d()}finally{f.T=p,u.p=b,u.d.f()}},dt.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(d,p))},dt.prefetchDNS=function(d){typeof d=="string"&&u.d.D(d)},dt.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var b=p.as,g=m(b,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?u.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:x}):b==="script"&&u.d.X(d,{crossOrigin:g,integrity:S,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},dt.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=m(p.as,p.crossOrigin);u.d.M(d,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(d)},dt.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,g=m(b,p.crossOrigin);u.d.L(d,b,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},dt.preloadModule=function(d,p){if(typeof d=="string")if(p){var b=m(p.as,p.crossOrigin);u.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(d)},dt.requestFormReset=function(d){u.d.r(d)},dt.unstable_batchedUpdates=function(d,p){return d(p)},dt.useFormState=function(d,p,b){return f.H.useFormState(d,p,b)},dt.useFormStatus=function(){return f.H.useHostTransitionStatus()},dt.version="19.2.0",dt}var cp;function nb(){if(cp)return es.exports;cp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),es.exports=tb(),es.exports}var sp;function lb(){if(sp)return za;sp=1;var n=eb(),a=Ms(),i=nb();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(u(188))}function p(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(u(188));return t!==e?null:e}for(var l=e,r=t;;){var c=l.return;if(c===null)break;var h=c.alternate;if(h===null){if(r=c.return,r!==null){l=r;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===l)return d(c),e;if(h===r)return d(c),t;h=h.sibling}throw Error(u(188))}if(l.return!==r.return)l=c,r=h;else{for(var y=!1,v=c.child;v;){if(v===l){y=!0,l=c,r=h;break}if(v===r){y=!0,r=c,l=h;break}v=v.sibling}if(!y){for(v=h.child;v;){if(v===l){y=!0,l=h,r=c;break}if(v===r){y=!0,r=h,l=c;break}v=v.sibling}if(!y)throw Error(u(189))}}if(l.alternate!==r)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),B=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case N:return"Profiler";case O:return"StrictMode";case ie:return"Suspense";case V:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case B:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var I=Array.isArray,L=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},ve=[],T=-1;function A(e){return{current:e}}function X(e){0>T||(e.current=ve[T],ve[T]=null,T--)}function E(e,t){T++,ve[T]=e.current,e.current=t}var W=A(null),de=A(null),ce=A(null),Ce=A(null);function Fe(e,t){switch(E(ce,t),E(de,e),E(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Td(t),e=Cd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(W),E(W,e)}function Ue(){X(W),X(de),X(ce)}function Gt(e){e.memoizedState!==null&&E(Ce,e);var t=W.current,l=Cd(t,e.type);t!==l&&(E(de,e),E(W,l))}function gn(e){de.current===e&&(X(W),X(de)),Ce.current===e&&(X(Ce),Ea._currentValue=ue)}var Mi,Za;function yn(e){if(Mi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Mi=t&&t[1]||"",Za=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mi+e+Za}var Ll=!1;function Ul(e,t){if(!e||Ll)return"";Ll=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(q){var j=q}Reflect.construct(e,[],F)}else{try{F.call()}catch(q){j=q}e.call(F.prototype)}}else{try{throw Error()}catch(q){j=q}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),y=h[0],v=h[1];if(y&&v){var C=y.split(`
`),M=v.split(`
`);for(c=r=0;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;for(;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;if(r===C.length||c===M.length)for(r=C.length-1,c=M.length-1;1<=r&&0<=c&&C[r]!==M[c];)c--;for(;1<=r&&0<=c;r--,c--)if(C[r]!==M[c]){if(r!==1||c!==1)do if(r--,c--,0>c||C[r]!==M[c]){var G=`
`+C[r].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=r&&0<=c);break}}}finally{Ll=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?yn(l):""}function Fa(e,t){switch(e.tag){case 26:case 27:case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return e.child!==t&&t!==null?yn("Suspense Fallback"):yn("Suspense");case 19:return yn("SuspenseList");case 0:case 15:return Ul(e.type,!1);case 11:return Ul(e.type.render,!1);case 1:return Ul(e.type,!0);case 31:return yn("Activity");default:return""}}function Ka(e){try{var t="",l=null;do t+=Fa(e,l),l=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Bl=Object.prototype.hasOwnProperty,Hl=n.unstable_scheduleCallback,ji=n.unstable_cancelCallback,Ru=n.unstable_shouldYield,Mu=n.unstable_requestPaint,yt=n.unstable_now,ju=n.unstable_getCurrentPriorityLevel,Q=n.unstable_ImmediatePriority,$=n.unstable_UserBlockingPriority,pe=n.unstable_NormalPriority,ke=n.unstable_LowPriority,Me=n.unstable_IdlePriority,Ot=n.log,bn=n.unstable_setDisableYieldValue,bt=null,at=null;function kt(e){if(typeof Ot=="function"&&bn(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(bt,e)}catch{}}var Ye=Math.clz32?Math.clz32:Ly,Yn=Math.log,tn=Math.LN2;function Ly(e){return e>>>=0,e===0?32:31-(Yn(e)/tn|0)|0}var Ja=256,Ia=262144,$a=4194304;function dl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pa(e,t,l){var r=e.pendingLanes;if(r===0)return 0;var c=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var v=r&134217727;return v!==0?(r=v&~h,r!==0?c=dl(r):(y&=v,y!==0?c=dl(y):l||(l=v&~e,l!==0&&(c=dl(l))))):(v=r&~h,v!==0?c=dl(v):y!==0?c=dl(y):l||(l=r&~e,l!==0&&(c=dl(l)))),c===0?0:t!==0&&t!==c&&(t&h)===0&&(h=c&-c,l=t&-t,h>=l||h===32&&(l&4194048)!==0)?t:c}function Li(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(){var e=$a;return $a<<=1,($a&62914560)===0&&($a=4194304),e}function Lu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ui(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function By(e,t,l,r,c,h){var y=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var v=e.entanglements,C=e.expirationTimes,M=e.hiddenUpdates;for(l=y&~l;0<l;){var G=31-Ye(l),F=1<<G;v[G]=0,C[G]=-1;var j=M[G];if(j!==null)for(M[G]=null,G=0;G<j.length;G++){var q=j[G];q!==null&&(q.lane&=-536870913)}l&=~F}r!==0&&uf(e,r,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~t))}function uf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|l&261930}function of(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var r=31-Ye(l),c=1<<r;c&t|e[r]&t&&(e[r]|=t),l&=~c}}function cf(e,t){var l=t&-t;return l=(l&42)!==0?1:Uu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Uu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sf(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Jd(e.type))}function ff(e,t){var l=K.p;try{return K.p=e,t()}finally{K.p=l}}var Vn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Vn,Et="__reactProps$"+Vn,ql="__reactContainer$"+Vn,Hu="__reactEvents$"+Vn,Hy="__reactListeners$"+Vn,qy="__reactHandles$"+Vn,hf="__reactResources$"+Vn,Bi="__reactMarker$"+Vn;function qu(e){delete e[ct],delete e[Et],delete e[Hu],delete e[Hy],delete e[qy]}function Yl(e){var t=e[ct];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ql]||l[ct]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Rd(e);e!==null;){if(l=e[ct])return l;e=Rd(e)}return t}e=l,l=e.parentNode}return null}function Vl(e){if(e=e[ct]||e[ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Gl(e){var t=e[hf];return t||(t=e[hf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[Bi]=!0}var mf=new Set,df={};function pl(e,t){Xl(e,t),Xl(e+"Capture",t)}function Xl(e,t){for(df[e]=t,e=0;e<t.length;e++)mf.add(t[e])}var Yy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pf={},gf={};function Vy(e){return Bl.call(gf,e)?!0:Bl.call(pf,e)?!1:Yy.test(e)?gf[e]=!0:(pf[e]=!0,!1)}function Wa(e,t,l){if(Vy(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function er(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function xn(e,t,l,r){if(r===null)e.removeAttribute(l);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+r)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gy(e,t,l){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){l=""+y,h.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yu(e){if(!e._valueTracker){var t=yf(e)?"checked":"value";e._valueTracker=Gy(e,t,""+e[t])}}function bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),r="";return e&&(r=yf(e)?e.checked?"true":"false":e.value),e=r,e!==l?(t.setValue(e),!0):!1}function tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xy=/[\n"\\]/g;function Qt(e){return e.replace(Xy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vu(e,t,l,r,c,h,y,v){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?Gu(e,y,Xt(t)):l!=null?Gu(e,y,Xt(l)):r!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Xt(v):e.removeAttribute("name")}function xf(e,t,l,r,c,h,y,v){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||l!=null){if(!(h!=="submit"&&h!=="reset"||t!=null)){Yu(e);return}l=l!=null?""+Xt(l):"",t=t!=null?""+Xt(t):l,v||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=v?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Yu(e)}function Gu(e,t,l){t==="number"&&tr(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Ql(e,t,l,r){if(e=e.options,t){t={};for(var c=0;c<l.length;c++)t["$"+l[c]]=!0;for(l=0;l<e.length;l++)c=t.hasOwnProperty("$"+e[l].value),e[l].selected!==c&&(e[l].selected=c),c&&r&&(e[l].defaultSelected=!0)}else{for(l=""+Xt(l),t=null,c=0;c<e.length;c++){if(e[c].value===l){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function vf(e,t,l){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Xt(l):""}function Sf(e,t,l,r){if(t==null){if(r!=null){if(l!=null)throw Error(u(92));if(I(r)){if(1<r.length)throw Error(u(93));r=r[0]}l=r}l==null&&(l=""),t=l}l=Xt(t),e.defaultValue=l,r=e.textContent,r===l&&r!==""&&r!==null&&(e.value=r),Yu(e)}function Zl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Qy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kf(e,t,l){var r=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,l):typeof l!="number"||l===0||Qy.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Ef(e,t,l){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,l!=null){for(var r in l)!l.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&l[c]!==r&&kf(e,c,r)}else for(var h in t)t.hasOwnProperty(h)&&kf(e,h,t[h])}function Xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nr(e){return Fy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vn(){}var Qu=null;function Zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,Kl=null;function wf(e){var t=Vl(e);if(t&&(e=t.stateNode)){var l=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var r=l[t];if(r!==e&&r.form===e.form){var c=r[Et]||null;if(!c)throw Error(u(90));Vu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<l.length;t++)r=l[t],r.form===e.form&&bf(r)}break e;case"textarea":vf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Ql(e,!!l.multiple,t,!1)}}}var Fu=!1;function Tf(e,t,l){if(Fu)return e(t,l);Fu=!0;try{var r=e(t);return r}finally{if(Fu=!1,(Fl!==null||Kl!==null)&&(Gr(),Fl&&(t=Fl,e=Kl,Kl=Fl=null,wf(t),e)))for(t=0;t<e.length;t++)wf(e[t])}}function qi(e,t){var l=e.stateNode;if(l===null)return null;var r=l[Et]||null;if(r===null)return null;l=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,t,typeof l));return l}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=!1;if(Sn)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{Ku=!1}var Gn=null,Ju=null,lr=null;function Cf(){if(lr)return lr;var e,t=Ju,l=t.length,r,c="value"in Gn?Gn.value:Gn.textContent,h=c.length;for(e=0;e<l&&t[e]===c[e];e++);var y=l-e;for(r=1;r<=y&&t[l-r]===c[h-r];r++);return lr=c.slice(e,1<r?1-r:void 0)}function ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Af(){return!1}function wt(e){function t(l,r,c,h,y){this._reactName=l,this._targetInst=c,this.type=r,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(l=e[v],this[v]=l?l(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ar:Af,this.isPropagationStopped=Af,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=wt(gl),Vi=g({},gl,{view:0,detail:0}),Ky=wt(Vi),Iu,$u,Gi,ur=g({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gi&&(Gi&&e.type==="mousemove"?(Iu=e.screenX-Gi.screenX,$u=e.screenY-Gi.screenY):$u=Iu=0,Gi=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),zf=wt(ur),Jy=g({},ur,{dataTransfer:0}),Iy=wt(Jy),$y=g({},Vi,{relatedTarget:0}),Pu=wt($y),Py=g({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=wt(Py),e1=g({},gl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t1=wt(e1),n1=g({},gl,{data:0}),Nf=wt(n1),l1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=a1[e])?!!t[e]:!1}function Wu(){return r1}var u1=g({},Vi,{key:function(e){if(e.key){var t=l1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o1=wt(u1),c1=g({},ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=wt(c1),s1=g({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),f1=wt(s1),h1=g({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=wt(h1),d1=g({},ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p1=wt(d1),g1=g({},gl,{newState:0,oldState:0}),y1=wt(g1),b1=[9,13,27,32],eo=Sn&&"CompositionEvent"in window,Xi=null;Sn&&"documentMode"in document&&(Xi=document.documentMode);var x1=Sn&&"TextEvent"in window&&!Xi,_f=Sn&&(!eo||Xi&&8<Xi&&11>=Xi),Of=" ",Rf=!1;function Mf(e,t){switch(e){case"keyup":return b1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jl=!1;function v1(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(Rf=!0,Of);case"textInput":return e=t.data,e===Of&&Rf?null:e;default:return null}}function S1(e,t){if(Jl)return e==="compositionend"||!eo&&Mf(e,t)?(e=Cf(),lr=Ju=Gn=null,Jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k1[e.type]:t==="textarea"}function Uf(e,t,l,r){Fl?Kl?Kl.push(r):Kl=[r]:Fl=r,t=Ir(t,"onChange"),0<t.length&&(l=new rr("onChange","change",null,l,r),e.push({event:l,listeners:t}))}var Qi=null,Zi=null;function E1(e){xd(e,0)}function or(e){var t=Hi(e);if(bf(t))return e}function Bf(e,t){if(e==="change")return t}var Hf=!1;if(Sn){var to;if(Sn){var no="oninput"in document;if(!no){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),no=typeof qf.oninput=="function"}to=no}else to=!1;Hf=to&&(!document.documentMode||9<document.documentMode)}function Yf(){Qi&&(Qi.detachEvent("onpropertychange",Vf),Zi=Qi=null)}function Vf(e){if(e.propertyName==="value"&&or(Zi)){var t=[];Uf(t,Zi,e,Zu(e)),Tf(E1,t)}}function w1(e,t,l){e==="focusin"?(Yf(),Qi=t,Zi=l,Qi.attachEvent("onpropertychange",Vf)):e==="focusout"&&Yf()}function T1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(Zi)}function C1(e,t){if(e==="click")return or(t)}function A1(e,t){if(e==="input"||e==="change")return or(t)}function z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:z1;function Fi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),r=Object.keys(t);if(l.length!==r.length)return!1;for(r=0;r<l.length;r++){var c=l[r];if(!Bl.call(t,c)||!Rt(e[c],t[c]))return!1}return!0}function Gf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xf(e,t){var l=Gf(e);e=0;for(var r;l;){if(l.nodeType===3){if(r=e+l.textContent.length,e<=t&&r>=t)return{node:l,offset:t-e};e=r}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Gf(l)}}function Qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tr(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=tr(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var N1=Sn&&"documentMode"in document&&11>=document.documentMode,Il=null,io=null,Ki=null,ao=!1;function Ff(e,t,l){var r=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ao||Il==null||Il!==tr(r)||(r=Il,"selectionStart"in r&&lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ki&&Fi(Ki,r)||(Ki=r,r=Ir(io,"onSelect"),0<r.length&&(t=new rr("onSelect","select",null,t,l),e.push({event:t,listeners:r}),t.target=Il)))}function yl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var $l={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionrun:yl("Transition","TransitionRun"),transitionstart:yl("Transition","TransitionStart"),transitioncancel:yl("Transition","TransitionCancel"),transitionend:yl("Transition","TransitionEnd")},ro={},Kf={};Sn&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete $l.animationend.animation,delete $l.animationiteration.animation,delete $l.animationstart.animation),"TransitionEvent"in window||delete $l.transitionend.transition);function bl(e){if(ro[e])return ro[e];if(!$l[e])return e;var t=$l[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Kf)return ro[e]=t[l];return e}var Jf=bl("animationend"),If=bl("animationiteration"),$f=bl("animationstart"),D1=bl("transitionrun"),_1=bl("transitionstart"),O1=bl("transitioncancel"),Pf=bl("transitionend"),Wf=new Map,uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uo.push("scrollEnd");function nn(e,t){Wf.set(e,t),pl(t,[e])}var cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],Pl=0,oo=0;function sr(){for(var e=Pl,t=oo=Pl=0;t<e;){var l=Zt[t];Zt[t++]=null;var r=Zt[t];Zt[t++]=null;var c=Zt[t];Zt[t++]=null;var h=Zt[t];if(Zt[t++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}h!==0&&eh(l,c,h)}}function fr(e,t,l,r){Zt[Pl++]=e,Zt[Pl++]=t,Zt[Pl++]=l,Zt[Pl++]=r,oo|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function co(e,t,l,r){return fr(e,t,l,r),hr(e)}function xl(e,t){return fr(e,null,null,t),hr(e)}function eh(e,t,l){e.lanes|=l;var r=e.alternate;r!==null&&(r.lanes|=l);for(var c=!1,h=e.return;h!==null;)h.childLanes|=l,r=h.alternate,r!==null&&(r.childLanes|=l),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&t!==null&&(c=31-Ye(l),e=h.hiddenUpdates,r=e[c],r===null?e[c]=[t]:r.push(t),t.lane=l|536870912),h):null}function hr(e){if(50<ga)throw ga=0,xc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wl={};function R1(e,t,l,r){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,l,r){return new R1(e,t,l,r)}function so(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var l=e.alternate;return l===null?(l=Mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function th(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mr(e,t,l,r,c,h){var y=0;if(r=e,typeof e=="function")so(e)&&(y=1);else if(typeof e=="string")y=B0(e,l,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=Mt(31,l,t,c),e.elementType=oe,e.lanes=h,e;case _:return vl(l.children,c,h,t);case O:y=8,c|=24;break;case N:return e=Mt(12,l,t,c|2),e.elementType=N,e.lanes=h,e;case ie:return e=Mt(13,l,t,c),e.elementType=ie,e.lanes=h,e;case V:return e=Mt(19,l,t,c),e.elementType=V,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:y=10;break e;case H:y=9;break e;case ne:y=11;break e;case P:y=14;break e;case he:y=16,r=null;break e}y=29,l=Error(u(130,e===null?"null":typeof e,"")),r=null}return t=Mt(y,l,t,c),t.elementType=e,t.type=r,t.lanes=h,t}function vl(e,t,l,r){return e=Mt(7,e,r,t),e.lanes=l,e}function fo(e,t,l){return e=Mt(6,e,null,t),e.lanes=l,e}function nh(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function ho(e,t,l){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lh=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var l=lh.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ka(t)},lh.set(e,t),t)}return{value:e,source:t,stack:Ka(t)}}var ei=[],ti=0,dr=null,Ji=0,Kt=[],Jt=0,Xn=null,on=1,cn="";function En(e,t){ei[ti++]=Ji,ei[ti++]=dr,dr=e,Ji=t}function ih(e,t,l){Kt[Jt++]=on,Kt[Jt++]=cn,Kt[Jt++]=Xn,Xn=e;var r=on;e=cn;var c=32-Ye(r)-1;r&=~(1<<c),l+=1;var h=32-Ye(t)+c;if(30<h){var y=c-c%5;h=(r&(1<<y)-1).toString(32),r>>=y,c-=y,on=1<<32-Ye(t)+c|l<<c|r,cn=h+e}else on=1<<h|l<<c|r,cn=e}function mo(e){e.return!==null&&(En(e,1),ih(e,1,0))}function po(e){for(;e===dr;)dr=ei[--ti],ei[ti]=null,Ji=ei[--ti],ei[ti]=null;for(;e===Xn;)Xn=Kt[--Jt],Kt[Jt]=null,cn=Kt[--Jt],Kt[Jt]=null,on=Kt[--Jt],Kt[Jt]=null}function ah(e,t){Kt[Jt++]=on,Kt[Jt++]=cn,Kt[Jt++]=Xn,on=t.id,cn=t.overflow,Xn=e}var st=null,Qe=null,Ne=!1,Qn=null,It=!1,go=Error(u(519));function Zn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ii(Ft(t,e)),go}function rh(e){var t=e.stateNode,l=e.type,r=e.memoizedProps;switch(t[ct]=e,t[Et]=r,l){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(l=0;l<ba.length;l++)we(ba[l],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),xf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),Sf(t,r.value,r.defaultValue,r.children)}l=r.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||r.suppressHydrationWarning===!0||Ed(t.textContent,l)?(r.popover!=null&&(we("beforetoggle",t),we("toggle",t)),r.onScroll!=null&&we("scroll",t),r.onScrollEnd!=null&&we("scrollend",t),r.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||Zn(e,!0)}function uh(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:st=st.return}}function ni(e){if(e!==st)return!1;if(!Ne)return uh(e),Ne=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Mc(e.type,e.memoizedProps)),l=!l),l&&Qe&&Zn(e),uh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Qe=Od(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Qe=Od(e)}else t===27?(t=Qe,rl(e.type)?(e=Hc,Hc=null,Qe=e):Qe=t):Qe=st?Pt(e.stateNode.nextSibling):null;return!0}function Sl(){Qe=st=null,Ne=!1}function yo(){var e=Qn;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),Qn=null),e}function Ii(e){Qn===null?Qn=[e]:Qn.push(e)}var bo=A(null),kl=null,wn=null;function Fn(e,t,l){E(bo,t._currentValue),t._currentValue=l}function Tn(e){e._currentValue=bo.current,X(bo)}function xo(e,t,l){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===l)break;e=e.return}}function vo(e,t,l,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;e:for(;h!==null;){var v=h;h=c;for(var C=0;C<t.length;C++)if(v.context===t[C]){h.lanes|=l,v=h.alternate,v!==null&&(v.lanes|=l),xo(h.return,l,e),r||(y=null);break e}h=v.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(u(341));y.lanes|=l,h=y.alternate,h!==null&&(h.lanes|=l),xo(y,l,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function li(e,t,l,r){e=null;for(var c=t,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(u(387));if(y=y.memoizedProps,y!==null){var v=c.type;Rt(c.pendingProps.value,y.value)||(e!==null?e.push(v):e=[v])}}else if(c===Ce.current){if(y=c.alternate,y===null)throw Error(u(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ea):e=[Ea])}c=c.return}e!==null&&vo(t,e,l,r),t.flags|=262144}function pr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function El(e){kl=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return oh(kl,e)}function gr(e,t){return kl===null&&El(e),oh(e,t)}function oh(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},wn===null){if(e===null)throw Error(u(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return l}var M1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},j1=n.unstable_scheduleCallback,L1=n.unstable_NormalPriority,et={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function So(){return{controller:new M1,data:new Map,refCount:0}}function $i(e){e.refCount--,e.refCount===0&&j1(L1,function(){e.controller.abort()})}var Pi=null,ko=0,ii=0,ai=null;function U1(e,t){if(Pi===null){var l=Pi=[];ko=0,ii=Tc(),ai={status:"pending",value:void 0,then:function(r){l.push(r)}}}return ko++,t.then(ch,ch),t}function ch(){if(--ko===0&&Pi!==null){ai!==null&&(ai.status="fulfilled");var e=Pi;Pi=null,ii=0,ai=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function B1(e,t){var l=[],r={status:"pending",value:null,reason:null,then:function(c){l.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<l.length;c++)(0,l[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<l.length;c++)(0,l[c])(void 0)}),r}var sh=L.S;L.S=function(e,t){Fm=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&U1(e,t),sh!==null&&sh(e,t)};var wl=A(null);function Eo(){var e=wl.current;return e!==null?e:Ve.pooledCache}function yr(e,t){t===null?E(wl,wl.current):E(wl,t.pool)}function fh(){var e=Eo();return e===null?null:{parent:et._currentValue,pool:e}}var ri=Error(u(460)),wo=Error(u(474)),br=Error(u(542)),xr={then:function(){}};function hh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mh(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(vn,vn),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ph(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ph(e),e}throw Cl=t,ri}}function Tl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Cl=l,ri):l}}var Cl=null;function dh(){if(Cl===null)throw Error(u(459));var e=Cl;return Cl=null,e}function ph(e){if(e===ri||e===br)throw Error(u(483))}var ui=null,Wi=0;function vr(e){var t=Wi;return Wi+=1,ui===null&&(ui=[]),mh(ui,e,t)}function ea(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===S?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gh(e){function t(D,z){if(e){var R=D.deletions;R===null?(D.deletions=[z],D.flags|=16):R.push(z)}}function l(D,z){if(!e)return null;for(;z!==null;)t(D,z),z=z.sibling;return null}function r(D){for(var z=new Map;D!==null;)D.key!==null?z.set(D.key,D):z.set(D.index,D),D=D.sibling;return z}function c(D,z){return D=kn(D,z),D.index=0,D.sibling=null,D}function h(D,z,R){return D.index=R,e?(R=D.alternate,R!==null?(R=R.index,R<z?(D.flags|=67108866,z):R):(D.flags|=67108866,z)):(D.flags|=1048576,z)}function y(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function v(D,z,R,Z){return z===null||z.tag!==6?(z=fo(R,D.mode,Z),z.return=D,z):(z=c(z,R),z.return=D,z)}function C(D,z,R,Z){var se=R.type;return se===_?G(D,z,R.props.children,Z,R.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===he&&Tl(se)===z.type)?(z=c(z,R.props),ea(z,R),z.return=D,z):(z=mr(R.type,R.key,R.props,null,D.mode,Z),ea(z,R),z.return=D,z)}function M(D,z,R,Z){return z===null||z.tag!==4||z.stateNode.containerInfo!==R.containerInfo||z.stateNode.implementation!==R.implementation?(z=ho(R,D.mode,Z),z.return=D,z):(z=c(z,R.children||[]),z.return=D,z)}function G(D,z,R,Z,se){return z===null||z.tag!==7?(z=vl(R,D.mode,Z,se),z.return=D,z):(z=c(z,R),z.return=D,z)}function F(D,z,R){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=fo(""+z,D.mode,R),z.return=D,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case x:return R=mr(z.type,z.key,z.props,null,D.mode,R),ea(R,z),R.return=D,R;case w:return z=ho(z,D.mode,R),z.return=D,z;case he:return z=Tl(z),F(D,z,R)}if(I(z)||te(z))return z=vl(z,D.mode,R,null),z.return=D,z;if(typeof z.then=="function")return F(D,vr(z),R);if(z.$$typeof===B)return F(D,gr(D,z),R);Sr(D,z)}return null}function j(D,z,R,Z){var se=z!==null?z.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return se!==null?null:v(D,z,""+R,Z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===se?C(D,z,R,Z):null;case w:return R.key===se?M(D,z,R,Z):null;case he:return R=Tl(R),j(D,z,R,Z)}if(I(R)||te(R))return se!==null?null:G(D,z,R,Z,null);if(typeof R.then=="function")return j(D,z,vr(R),Z);if(R.$$typeof===B)return j(D,z,gr(D,R),Z);Sr(D,R)}return null}function q(D,z,R,Z,se){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return D=D.get(R)||null,v(z,D,""+Z,se);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return D=D.get(Z.key===null?R:Z.key)||null,C(z,D,Z,se);case w:return D=D.get(Z.key===null?R:Z.key)||null,M(z,D,Z,se);case he:return Z=Tl(Z),q(D,z,R,Z,se)}if(I(Z)||te(Z))return D=D.get(R)||null,G(z,D,Z,se,null);if(typeof Z.then=="function")return q(D,z,R,vr(Z),se);if(Z.$$typeof===B)return q(D,z,R,gr(z,Z),se);Sr(z,Z)}return null}function le(D,z,R,Z){for(var se=null,_e=null,re=z,be=z=0,ze=null;re!==null&&be<R.length;be++){re.index>be?(ze=re,re=null):ze=re.sibling;var Oe=j(D,re,R[be],Z);if(Oe===null){re===null&&(re=ze);break}e&&re&&Oe.alternate===null&&t(D,re),z=h(Oe,z,be),_e===null?se=Oe:_e.sibling=Oe,_e=Oe,re=ze}if(be===R.length)return l(D,re),Ne&&En(D,be),se;if(re===null){for(;be<R.length;be++)re=F(D,R[be],Z),re!==null&&(z=h(re,z,be),_e===null?se=re:_e.sibling=re,_e=re);return Ne&&En(D,be),se}for(re=r(re);be<R.length;be++)ze=q(re,D,be,R[be],Z),ze!==null&&(e&&ze.alternate!==null&&re.delete(ze.key===null?be:ze.key),z=h(ze,z,be),_e===null?se=ze:_e.sibling=ze,_e=ze);return e&&re.forEach(function(fl){return t(D,fl)}),Ne&&En(D,be),se}function me(D,z,R,Z){if(R==null)throw Error(u(151));for(var se=null,_e=null,re=z,be=z=0,ze=null,Oe=R.next();re!==null&&!Oe.done;be++,Oe=R.next()){re.index>be?(ze=re,re=null):ze=re.sibling;var fl=j(D,re,Oe.value,Z);if(fl===null){re===null&&(re=ze);break}e&&re&&fl.alternate===null&&t(D,re),z=h(fl,z,be),_e===null?se=fl:_e.sibling=fl,_e=fl,re=ze}if(Oe.done)return l(D,re),Ne&&En(D,be),se;if(re===null){for(;!Oe.done;be++,Oe=R.next())Oe=F(D,Oe.value,Z),Oe!==null&&(z=h(Oe,z,be),_e===null?se=Oe:_e.sibling=Oe,_e=Oe);return Ne&&En(D,be),se}for(re=r(re);!Oe.done;be++,Oe=R.next())Oe=q(re,D,be,Oe.value,Z),Oe!==null&&(e&&Oe.alternate!==null&&re.delete(Oe.key===null?be:Oe.key),z=h(Oe,z,be),_e===null?se=Oe:_e.sibling=Oe,_e=Oe);return e&&re.forEach(function(J0){return t(D,J0)}),Ne&&En(D,be),se}function qe(D,z,R,Z){if(typeof R=="object"&&R!==null&&R.type===_&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:e:{for(var se=R.key;z!==null;){if(z.key===se){if(se=R.type,se===_){if(z.tag===7){l(D,z.sibling),Z=c(z,R.props.children),Z.return=D,D=Z;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===he&&Tl(se)===z.type){l(D,z.sibling),Z=c(z,R.props),ea(Z,R),Z.return=D,D=Z;break e}l(D,z);break}else t(D,z);z=z.sibling}R.type===_?(Z=vl(R.props.children,D.mode,Z,R.key),Z.return=D,D=Z):(Z=mr(R.type,R.key,R.props,null,D.mode,Z),ea(Z,R),Z.return=D,D=Z)}return y(D);case w:e:{for(se=R.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===R.containerInfo&&z.stateNode.implementation===R.implementation){l(D,z.sibling),Z=c(z,R.children||[]),Z.return=D,D=Z;break e}else{l(D,z);break}else t(D,z);z=z.sibling}Z=ho(R,D.mode,Z),Z.return=D,D=Z}return y(D);case he:return R=Tl(R),qe(D,z,R,Z)}if(I(R))return le(D,z,R,Z);if(te(R)){if(se=te(R),typeof se!="function")throw Error(u(150));return R=se.call(R),me(D,z,R,Z)}if(typeof R.then=="function")return qe(D,z,vr(R),Z);if(R.$$typeof===B)return qe(D,z,gr(D,R),Z);Sr(D,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,z!==null&&z.tag===6?(l(D,z.sibling),Z=c(z,R),Z.return=D,D=Z):(l(D,z),Z=fo(R,D.mode,Z),Z.return=D,D=Z),y(D)):l(D,z)}return function(D,z,R,Z){try{Wi=0;var se=qe(D,z,R,Z);return ui=null,se}catch(re){if(re===ri||re===br)throw re;var _e=Mt(29,re,null,D.mode);return _e.lanes=Z,_e.return=D,_e}finally{}}}var Al=gh(!0),yh=gh(!1),Kn=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function In(e,t,l){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=hr(e),eh(e,null,l),t}return fr(e,r,t,l),hr(e)}function ta(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,l|=r,t.lanes=l,of(e,l)}}function Ao(e,t){var l=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,l===r)){var c=null,h=null;if(l=l.firstBaseUpdate,l!==null){do{var y={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,l=l.next}while(l!==null);h===null?c=h=t:h=h.next=t}else c=h=t;l={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var zo=!1;function na(){if(zo){var e=ai;if(e!==null)throw e}}function la(e,t,l,r){zo=!1;var c=e.updateQueue;Kn=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var C=v,M=C.next;C.next=null,y===null?h=M:y.next=M,y=C;var G=e.alternate;G!==null&&(G=G.updateQueue,v=G.lastBaseUpdate,v!==y&&(v===null?G.firstBaseUpdate=M:v.next=M,G.lastBaseUpdate=C))}if(h!==null){var F=c.baseState;y=0,G=M=C=null,v=h;do{var j=v.lane&-536870913,q=j!==v.lane;if(q?(Ae&j)===j:(r&j)===j){j!==0&&j===ii&&(zo=!0),G!==null&&(G=G.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var le=e,me=v;j=t;var qe=l;switch(me.tag){case 1:if(le=me.payload,typeof le=="function"){F=le.call(qe,F,j);break e}F=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=me.payload,j=typeof le=="function"?le.call(qe,F,j):le,j==null)break e;F=g({},F,j);break e;case 2:Kn=!0}}j=v.callback,j!==null&&(e.flags|=64,q&&(e.flags|=8192),q=c.callbacks,q===null?c.callbacks=[j]:q.push(j))}else q={lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null},G===null?(M=G=q,C=F):G=G.next=q,y|=j;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;q=v,v=q.next,q.next=null,c.lastBaseUpdate=q,c.shared.pending=null}}while(!0);G===null&&(C=F),c.baseState=C,c.firstBaseUpdate=M,c.lastBaseUpdate=G,h===null&&(c.shared.lanes=0),tl|=y,e.lanes=y,e.memoizedState=F}}function bh(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function xh(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)bh(l[e],t)}var oi=A(null),kr=A(0);function vh(e,t){e=Mn,E(kr,e),E(oi,t),Mn=e|t.baseLanes}function No(){E(kr,Mn),E(oi,oi.current)}function Do(){Mn=kr.current,X(oi),X(kr)}var jt=A(null),$t=null;function $n(e){var t=e.alternate;E(Pe,Pe.current&1),E(jt,e),$t===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&($t=e)}function _o(e){E(Pe,Pe.current),E(jt,e),$t===null&&($t=e)}function Sh(e){e.tag===22?(E(Pe,Pe.current),E(jt,e),$t===null&&($t=e)):Pn()}function Pn(){E(Pe,Pe.current),E(jt,jt.current)}function Lt(e){X(jt),$t===e&&($t=null),X(Pe)}var Pe=A(0);function Er(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Uc(l)||Bc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cn=0,ye=null,Be=null,tt=null,wr=!1,ci=!1,zl=!1,Tr=0,ia=0,si=null,H1=0;function Ie(){throw Error(u(321))}function Oo(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Rt(e[l],t[l]))return!1;return!0}function Ro(e,t,l,r,c,h){return Cn=h,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?im:Ko,zl=!1,h=l(r,c),zl=!1,ci&&(h=Eh(t,l,r,c)),kh(e),h}function kh(e){L.H=ua;var t=Be!==null&&Be.next!==null;if(Cn=0,tt=Be=ye=null,wr=!1,ia=0,si=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&pr(e)&&(nt=!0))}function Eh(e,t,l,r){ye=e;var c=0;do{if(ci&&(si=null),ia=0,ci=!1,25<=c)throw Error(u(301));if(c+=1,tt=Be=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}L.H=am,h=t(l,r)}while(ci);return h}function q1(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?aa(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ye.flags|=1024),t}function Mo(){var e=Tr!==0;return Tr=0,e}function jo(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Lo(e){if(wr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wr=!1}Cn=0,tt=Be=ye=null,ci=!1,ia=Tr=0,si=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ye.memoizedState=tt=e:tt=tt.next=e,tt}function We(){if(Be===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=tt===null?ye.memoizedState:tt.next;if(t!==null)tt=t,Be=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},tt===null?ye.memoizedState=tt=e:tt=tt.next=e}return tt}function Cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function aa(e){var t=ia;return ia+=1,si===null&&(si=[]),e=mh(si,e,t),t=ye,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?im:Ko),e}function Ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return aa(e);if(e.$$typeof===B)return ft(e)}throw Error(u(438,String(e)))}function Uo(e){var t=null,l=ye.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var r=ye.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Cr(),ye.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),r=0;r<e;r++)l[r]=U;return t.index++,l}function An(e,t){return typeof t=="function"?t(e):t}function zr(e){var t=We();return Bo(t,Be,e)}function Bo(e,t,l){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=l;var c=e.baseQueue,h=r.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}t.baseQueue=c=h,r.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{t=c.next;var v=y=null,C=null,M=t,G=!1;do{var F=M.lane&-536870913;if(F!==M.lane?(Ae&F)===F:(Cn&F)===F){var j=M.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),F===ii&&(G=!0);else if((Cn&j)===j){M=M.next,j===ii&&(G=!0);continue}else F={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(v=C=F,y=h):C=C.next=F,ye.lanes|=j,tl|=j;F=M.action,zl&&l(h,F),h=M.hasEagerState?M.eagerState:l(h,F)}else j={lane:F,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(v=C=j,y=h):C=C.next=j,ye.lanes|=F,tl|=F;M=M.next}while(M!==null&&M!==t);if(C===null?y=h:C.next=v,!Rt(h,e.memoizedState)&&(nt=!0,G&&(l=ai,l!==null)))throw l;e.memoizedState=h,e.baseState=y,e.baseQueue=C,r.lastRenderedState=h}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=We(),l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var r=l.dispatch,c=l.pending,h=t.memoizedState;if(c!==null){l.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);Rt(h,t.memoizedState)||(nt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),l.lastRenderedState=h}return[h,r]}function wh(e,t,l){var r=ye,c=We(),h=Ne;if(h){if(l===void 0)throw Error(u(407));l=l()}else l=t();var y=!Rt((Be||c).memoizedState,l);if(y&&(c.memoizedState=l,nt=!0),c=c.queue,Vo(Ah.bind(null,r,c,e),[e]),c.getSnapshot!==t||y||tt!==null&&tt.memoizedState.tag&1){if(r.flags|=2048,fi(9,{destroy:void 0},Ch.bind(null,r,c,l,t),null),Ve===null)throw Error(u(349));h||(Cn&127)!==0||Th(r,t,l)}return l}function Th(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ye.updateQueue,t===null?(t=Cr(),ye.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Ch(e,t,l,r){t.value=l,t.getSnapshot=r,zh(t)&&Nh(e)}function Ah(e,t,l){return l(function(){zh(t)&&Nh(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Rt(e,l)}catch{return!0}}function Nh(e){var t=xl(e,2);t!==null&&Nt(t,e,2)}function qo(e){var t=xt();if(typeof e=="function"){var l=e;if(e=l(),zl){kt(!0);try{l()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function Dh(e,t,l,r){return e.baseState=l,Bo(e,Be,typeof r=="function"?r:An)}function Y1(e,t,l,r,c){if(_r(e))throw Error(u(485));if(e=t.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};L.T!==null?l(!0):h.isTransition=!1,r(h),l=t.pending,l===null?(h.next=t.pending=h,_h(t,h)):(h.next=l.next,t.pending=l.next=h)}}function _h(e,t){var l=t.action,r=t.payload,c=e.state;if(t.isTransition){var h=L.T,y={};L.T=y;try{var v=l(c,r),C=L.S;C!==null&&C(y,v),Oh(e,t,v)}catch(M){Yo(e,t,M)}finally{h!==null&&y.types!==null&&(h.types=y.types),L.T=h}}else try{h=l(c,r),Oh(e,t,h)}catch(M){Yo(e,t,M)}}function Oh(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(r){Rh(e,t,r)},function(r){return Yo(e,t,r)}):Rh(e,t,l)}function Rh(e,t,l){t.status="fulfilled",t.value=l,Mh(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,_h(e,l)))}function Yo(e,t,l){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=l,Mh(t),t=t.next;while(t!==r)}e.action=null}function Mh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jh(e,t){return t}function Lh(e,t){if(Ne){var l=Ve.formState;if(l!==null){e:{var r=ye;if(Ne){if(Qe){t:{for(var c=Qe,h=It;c.nodeType!==8;){if(!h){c=null;break t}if(c=Pt(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Qe=Pt(c.nextSibling),r=c.data==="F!";break e}}Zn(r)}r=!1}r&&(t=l[0])}}return l=xt(),l.memoizedState=l.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jh,lastRenderedState:t},l.queue=r,l=tm.bind(null,ye,r),r.dispatch=l,r=qo(!1),h=Fo.bind(null,ye,!1,r.queue),r=xt(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,l=Y1.bind(null,ye,c,h,l),c.dispatch=l,r.memoizedState=e,[t,l,!1]}function Uh(e){var t=We();return Bh(t,Be,e)}function Bh(e,t,l){if(t=Bo(e,t,jh)[0],e=zr(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=aa(t)}catch(y){throw y===ri?br:y}else r=t;t=We();var c=t.queue,h=c.dispatch;return l!==t.memoizedState&&(ye.flags|=2048,fi(9,{destroy:void 0},V1.bind(null,c,l),null)),[r,h,e]}function V1(e,t){e.action=t}function Hh(e){var t=We(),l=Be;if(l!==null)return Bh(t,l,e);We(),t=t.memoizedState,l=We();var r=l.queue.dispatch;return l.memoizedState=e,[t,r,!1]}function fi(e,t,l,r){return e={tag:e,create:l,deps:r,inst:t,next:null},t=ye.updateQueue,t===null&&(t=Cr(),ye.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(r=l.next,l.next=e,e.next=r,t.lastEffect=e),e}function qh(){return We().memoizedState}function Nr(e,t,l,r){var c=xt();ye.flags|=e,c.memoizedState=fi(1|t,{destroy:void 0},l,r===void 0?null:r)}function Dr(e,t,l,r){var c=We();r=r===void 0?null:r;var h=c.memoizedState.inst;Be!==null&&r!==null&&Oo(r,Be.memoizedState.deps)?c.memoizedState=fi(t,h,l,r):(ye.flags|=e,c.memoizedState=fi(1|t,h,l,r))}function Yh(e,t){Nr(8390656,8,e,t)}function Vo(e,t){Dr(2048,8,e,t)}function G1(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=Cr(),ye.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Vh(e){var t=We().memoizedState;return G1({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Gh(e,t){return Dr(4,2,e,t)}function Xh(e,t){return Dr(4,4,e,t)}function Qh(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zh(e,t,l){l=l!=null?l.concat([e]):null,Dr(4,4,Qh.bind(null,t,e),l)}function Go(){}function Fh(e,t){var l=We();t=t===void 0?null:t;var r=l.memoizedState;return t!==null&&Oo(t,r[1])?r[0]:(l.memoizedState=[e,t],e)}function Kh(e,t){var l=We();t=t===void 0?null:t;var r=l.memoizedState;if(t!==null&&Oo(t,r[1]))return r[0];if(r=e(),zl){kt(!0);try{e()}finally{kt(!1)}}return l.memoizedState=[r,t],r}function Xo(e,t,l){return l===void 0||(Cn&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Jm(),ye.lanes|=e,tl|=e,l)}function Jh(e,t,l,r){return Rt(l,t)?l:oi.current!==null?(e=Xo(e,l,r),Rt(e,t)||(nt=!0),e):(Cn&42)===0||(Cn&1073741824)!==0&&(Ae&261930)===0?(nt=!0,e.memoizedState=l):(e=Jm(),ye.lanes|=e,tl|=e,t)}function Ih(e,t,l,r,c){var h=K.p;K.p=h!==0&&8>h?h:8;var y=L.T,v={};L.T=v,Fo(e,!1,t,l);try{var C=c(),M=L.S;if(M!==null&&M(v,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=B1(C,r);ra(e,t,G,Ht(e))}else ra(e,t,r,Ht(e))}catch(F){ra(e,t,{then:function(){},status:"rejected",reason:F},Ht())}finally{K.p=h,y!==null&&v.types!==null&&(y.types=v.types),L.T=y}}function X1(){}function Qo(e,t,l,r){if(e.tag!==5)throw Error(u(476));var c=$h(e).queue;Ih(e,c,t,ue,l===null?X1:function(){return Ph(e),l(r)})}function $h(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ue},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ph(e){var t=$h(e);t.next===null&&(t=e.alternate.memoizedState),ra(e,t.next.queue,{},Ht())}function Zo(){return ft(Ea)}function Wh(){return We().memoizedState}function em(){return We().memoizedState}function Q1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Ht();e=Jn(l);var r=In(t,e,l);r!==null&&(Nt(r,t,l),ta(r,t,l)),t={cache:So()},e.payload=t;return}t=t.return}}function Z1(e,t,l){var r=Ht();l={lane:r,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_r(e)?nm(t,l):(l=co(e,t,l,r),l!==null&&(Nt(l,e,r),lm(l,t,r)))}function tm(e,t,l){var r=Ht();ra(e,t,l,r)}function ra(e,t,l,r){var c={lane:r,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(_r(e))nm(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var y=t.lastRenderedState,v=h(y,l);if(c.hasEagerState=!0,c.eagerState=v,Rt(v,y))return fr(e,t,c,0),Ve===null&&sr(),!1}catch{}finally{}if(l=co(e,t,c,r),l!==null)return Nt(l,e,r),lm(l,t,r),!0}return!1}function Fo(e,t,l,r){if(r={lane:2,revertLane:Tc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_r(e)){if(t)throw Error(u(479))}else t=co(e,l,r,2),t!==null&&Nt(t,e,2)}function _r(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function nm(e,t){ci=wr=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function lm(e,t,l){if((l&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,l|=r,t.lanes=l,of(e,l)}}var ua={readContext:ft,use:Ar,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};ua.useEffectEvent=Ie;var im={readContext:ft,use:Ar,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Yh,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Nr(4194308,4,Qh.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){Nr(4,2,e,t)},useMemo:function(e,t){var l=xt();t=t===void 0?null:t;var r=e();if(zl){kt(!0);try{e()}finally{kt(!1)}}return l.memoizedState=[r,t],r},useReducer:function(e,t,l){var r=xt();if(l!==void 0){var c=l(t);if(zl){kt(!0);try{l(t)}finally{kt(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Z1.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,l=tm.bind(null,ye,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Go,useDeferredValue:function(e,t){var l=xt();return Xo(l,e,t)},useTransition:function(){var e=qo(!1);return e=Ih.bind(null,ye,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var r=ye,c=xt();if(Ne){if(l===void 0)throw Error(u(407));l=l()}else{if(l=t(),Ve===null)throw Error(u(349));(Ae&127)!==0||Th(r,t,l)}c.memoizedState=l;var h={value:l,getSnapshot:t};return c.queue=h,Yh(Ah.bind(null,r,h,e),[e]),r.flags|=2048,fi(9,{destroy:void 0},Ch.bind(null,r,h,l,t),null),l},useId:function(){var e=xt(),t=Ve.identifierPrefix;if(Ne){var l=cn,r=on;l=(r&~(1<<32-Ye(r)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Tr++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=H1++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:Lh,useActionState:Lh,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Fo.bind(null,ye,!0,l),l.dispatch=t,[e,t]},useMemoCache:Uo,useCacheRefresh:function(){return xt().memoizedState=Q1.bind(null,ye)},useEffectEvent:function(e){var t=xt(),l={impl:e};return t.memoizedState=l,function(){if((Re&2)!==0)throw Error(u(440));return l.impl.apply(void 0,arguments)}}},Ko={readContext:ft,use:Ar,useCallback:Fh,useContext:ft,useEffect:Vo,useImperativeHandle:Zh,useInsertionEffect:Gh,useLayoutEffect:Xh,useMemo:Kh,useReducer:zr,useRef:qh,useState:function(){return zr(An)},useDebugValue:Go,useDeferredValue:function(e,t){var l=We();return Jh(l,Be.memoizedState,e,t)},useTransition:function(){var e=zr(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:aa(e),t]},useSyncExternalStore:wh,useId:Wh,useHostTransitionStatus:Zo,useFormState:Uh,useActionState:Uh,useOptimistic:function(e,t){var l=We();return Dh(l,Be,e,t)},useMemoCache:Uo,useCacheRefresh:em};Ko.useEffectEvent=Vh;var am={readContext:ft,use:Ar,useCallback:Fh,useContext:ft,useEffect:Vo,useImperativeHandle:Zh,useInsertionEffect:Gh,useLayoutEffect:Xh,useMemo:Kh,useReducer:Ho,useRef:qh,useState:function(){return Ho(An)},useDebugValue:Go,useDeferredValue:function(e,t){var l=We();return Be===null?Xo(l,e,t):Jh(l,Be.memoizedState,e,t)},useTransition:function(){var e=Ho(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:aa(e),t]},useSyncExternalStore:wh,useId:Wh,useHostTransitionStatus:Zo,useFormState:Hh,useActionState:Hh,useOptimistic:function(e,t){var l=We();return Be!==null?Dh(l,Be,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Uo,useCacheRefresh:em};am.useEffectEvent=Vh;function Jo(e,t,l,r){t=e.memoizedState,l=l(r,t),l=l==null?t:g({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Io={enqueueSetState:function(e,t,l){e=e._reactInternals;var r=Ht(),c=Jn(r);c.payload=t,l!=null&&(c.callback=l),t=In(e,c,r),t!==null&&(Nt(t,e,r),ta(t,e,r))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var r=Ht(),c=Jn(r);c.tag=1,c.payload=t,l!=null&&(c.callback=l),t=In(e,c,r),t!==null&&(Nt(t,e,r),ta(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ht(),r=Jn(l);r.tag=2,t!=null&&(r.callback=t),t=In(e,r,l),t!==null&&(Nt(t,e,l),ta(t,e,l))}};function rm(e,t,l,r,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,y):t.prototype&&t.prototype.isPureReactComponent?!Fi(l,r)||!Fi(c,h):!0}function um(e,t,l,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function Nl(e,t){var l=t;if("ref"in t){l={};for(var r in t)r!=="ref"&&(l[r]=t[r])}if(e=e.defaultProps){l===t&&(l=g({},l));for(var c in e)l[c]===void 0&&(l[c]=e[c])}return l}function om(e){cr(e)}function cm(e){console.error(e)}function sm(e){cr(e)}function Or(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function fm(e,t,l){try{var r=e.onCaughtError;r(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $o(e,t,l){return l=Jn(l),l.tag=3,l.payload={element:null},l.callback=function(){Or(e,t)},l}function hm(e){return e=Jn(e),e.tag=3,e}function mm(e,t,l,r){var c=l.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;e.payload=function(){return c(h)},e.callback=function(){fm(t,l,r)}}var y=l.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){fm(t,l,r),typeof c!="function"&&(nl===null?nl=new Set([this]):nl.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function F1(e,t,l,r,c){if(l.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=l.alternate,t!==null&&li(t,l,c,!0),l=jt.current,l!==null){switch(l.tag){case 31:case 13:return $t===null?Xr():l.alternate===null&&$e===0&&($e=3),l.flags&=-257,l.flags|=65536,l.lanes=c,r===xr?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([r]):t.add(r),kc(e,r,c)),!1;case 22:return l.flags|=65536,r===xr?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([r]):l.add(r)),kc(e,r,c)),!1}throw Error(u(435,l.tag))}return kc(e,r,c),Xr(),!1}if(Ne)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==go&&(e=Error(u(422),{cause:r}),Ii(Ft(e,l)))):(r!==go&&(t=Error(u(423),{cause:r}),Ii(Ft(t,l))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ft(r,l),c=$o(e.stateNode,r,c),Ao(e,c),$e!==4&&($e=2)),!1;var h=Error(u(520),{cause:r});if(h=Ft(h,l),pa===null?pa=[h]:pa.push(h),$e!==4&&($e=2),t===null)return!0;r=Ft(r,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=c&-c,l.lanes|=e,e=$o(l.stateNode,r,e),Ao(l,e),!1;case 1:if(t=l.type,h=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(nl===null||!nl.has(h))))return l.flags|=65536,c&=-c,l.lanes|=c,c=hm(c),mm(c,e,l,r),Ao(l,c),!1}l=l.return}while(l!==null);return!1}var Po=Error(u(461)),nt=!1;function ht(e,t,l,r){t.child=e===null?yh(t,null,l,r):Al(t,e.child,l,r)}function dm(e,t,l,r,c){l=l.render;var h=t.ref;if("ref"in r){var y={};for(var v in r)v!=="ref"&&(y[v]=r[v])}else y=r;return El(t),r=Ro(e,t,l,y,h,c),v=Mo(),e!==null&&!nt?(jo(e,t,c),zn(e,t,c)):(Ne&&v&&mo(t),t.flags|=1,ht(e,t,r,c),t.child)}function pm(e,t,l,r,c){if(e===null){var h=l.type;return typeof h=="function"&&!so(h)&&h.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=h,gm(e,t,h,r,c)):(e=mr(l.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!rc(e,c)){var y=h.memoizedProps;if(l=l.compare,l=l!==null?l:Fi,l(y,r)&&e.ref===t.ref)return zn(e,t,c)}return t.flags|=1,e=kn(h,r),e.ref=t.ref,e.return=t,t.child=e}function gm(e,t,l,r,c){if(e!==null){var h=e.memoizedProps;if(Fi(h,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=h,rc(e,c))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,zn(e,t,c)}return Wo(e,t,l,r,c)}function ym(e,t,l,r){var c=r.children,h=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(h=h!==null?h.baseLanes|l:l,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~h}else r=0,t.child=null;return bm(e,t,h,l,r)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yr(t,h!==null?h.cachePool:null),h!==null?vh(t,h):No(),Sh(t);else return r=t.lanes=536870912,bm(e,t,h!==null?h.baseLanes|l:l,l,r)}else h!==null?(yr(t,h.cachePool),vh(t,h),Pn(),t.memoizedState=null):(e!==null&&yr(t,null),No(),Pn());return ht(e,t,c,l),t.child}function oa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bm(e,t,l,r,c){var h=Eo();return h=h===null?null:{parent:et._currentValue,pool:h},t.memoizedState={baseLanes:l,cachePool:h},e!==null&&yr(t,null),No(),Sh(t),e!==null&&li(e,t,r,!0),t.childLanes=c,null}function Rr(e,t){return t=jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xm(e,t,l){return Al(t,e.child,null,l),e=Rr(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function K1(e,t,l){var r=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(r.mode==="hidden")return e=Rr(t,r),t.lanes=536870912,oa(null,e);if(_o(t),(e=Qe)?(e=_d(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:on,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},l=nh(e),l.return=t,t.child=l,st=t,Qe=null)):e=null,e===null)throw Zn(t);return t.lanes=536870912,null}return Rr(t,r)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(_o(t),c)if(t.flags&256)t.flags&=-257,t=xm(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(nt||li(e,t,l,!1),c=(l&e.childLanes)!==0,nt||c){if(r=Ve,r!==null&&(y=cf(r,l),y!==0&&y!==h.retryLane))throw h.retryLane=y,xl(e,y),Nt(r,e,y),Po;Xr(),t=xm(e,t,l)}else e=h.treeContext,Qe=Pt(y.nextSibling),st=t,Ne=!0,Qn=null,It=!1,e!==null&&ah(t,e),t=Rr(t,r),t.flags|=4096;return t}return e=kn(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mr(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Wo(e,t,l,r,c){return El(t),l=Ro(e,t,l,r,void 0,c),r=Mo(),e!==null&&!nt?(jo(e,t,c),zn(e,t,c)):(Ne&&r&&mo(t),t.flags|=1,ht(e,t,l,c),t.child)}function vm(e,t,l,r,c,h){return El(t),t.updateQueue=null,l=Eh(t,r,l,c),kh(e),r=Mo(),e!==null&&!nt?(jo(e,t,h),zn(e,t,h)):(Ne&&r&&mo(t),t.flags|=1,ht(e,t,l,h),t.child)}function Sm(e,t,l,r,c){if(El(t),t.stateNode===null){var h=Wl,y=l.contextType;typeof y=="object"&&y!==null&&(h=ft(y)),h=new l(r,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Io,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=r,h.state=t.memoizedState,h.refs={},To(t),y=l.contextType,h.context=typeof y=="object"&&y!==null?ft(y):Wl,h.state=t.memoizedState,y=l.getDerivedStateFromProps,typeof y=="function"&&(Jo(t,l,y,r),h.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Io.enqueueReplaceState(h,h.state,null),la(t,r,h,c),na(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){h=t.stateNode;var v=t.memoizedProps,C=Nl(l,v);h.props=C;var M=h.context,G=l.contextType;y=Wl,typeof G=="object"&&G!==null&&(y=ft(G));var F=l.getDerivedStateFromProps;G=typeof F=="function"||typeof h.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,G||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v||M!==y)&&um(t,h,r,y),Kn=!1;var j=t.memoizedState;h.state=j,la(t,r,h,c),na(),M=t.memoizedState,v||j!==M||Kn?(typeof F=="function"&&(Jo(t,l,F,r),M=t.memoizedState),(C=Kn||rm(t,l,C,r,j,M,y))?(G||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=M),h.props=r,h.state=M,h.context=y,r=C):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{h=t.stateNode,Co(e,t),y=t.memoizedProps,G=Nl(l,y),h.props=G,F=t.pendingProps,j=h.context,M=l.contextType,C=Wl,typeof M=="object"&&M!==null&&(C=ft(M)),v=l.getDerivedStateFromProps,(M=typeof v=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==F||j!==C)&&um(t,h,r,C),Kn=!1,j=t.memoizedState,h.state=j,la(t,r,h,c),na();var q=t.memoizedState;y!==F||j!==q||Kn||e!==null&&e.dependencies!==null&&pr(e.dependencies)?(typeof v=="function"&&(Jo(t,l,v,r),q=t.memoizedState),(G=Kn||rm(t,l,G,r,j,q,C)||e!==null&&e.dependencies!==null&&pr(e.dependencies))?(M||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,q,C),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,q,C)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=q),h.props=r,h.state=q,h.context=C,r=G):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return h=r,Mr(e,t),r=(t.flags&128)!==0,h||r?(h=t.stateNode,l=r&&typeof l.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&r?(t.child=Al(t,e.child,null,c),t.child=Al(t,null,l,c)):ht(e,t,l,c),t.memoizedState=h.state,e=t.child):e=zn(e,t,c),e}function km(e,t,l,r){return Sl(),t.flags|=256,ht(e,t,l,r),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(e){return{baseLanes:e,cachePool:fh()}}function nc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Bt),e}function Em(e,t,l){var r=t.pendingProps,c=!1,h=(t.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(c?$n(t):Pn(),(e=Qe)?(e=_d(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:on,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},l=nh(e),l.return=t,t.child=l,st=t,Qe=null)):e=null,e===null)throw Zn(t);return Bc(e)?t.lanes=32:t.lanes=536870912,null}var v=r.children;return r=r.fallback,c?(Pn(),c=t.mode,v=jr({mode:"hidden",children:v},c),r=vl(r,c,l,null),v.return=t,r.return=t,v.sibling=r,t.child=v,r=t.child,r.memoizedState=tc(l),r.childLanes=nc(e,y,l),t.memoizedState=ec,oa(null,r)):($n(t),lc(t,v))}var C=e.memoizedState;if(C!==null&&(v=C.dehydrated,v!==null)){if(h)t.flags&256?($n(t),t.flags&=-257,t=ic(e,t,l)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),v=r.fallback,c=t.mode,r=jr({mode:"visible",children:r.children},c),v=vl(v,c,l,null),v.flags|=2,r.return=t,v.return=t,r.sibling=v,t.child=r,Al(t,e.child,null,l),r=t.child,r.memoizedState=tc(l),r.childLanes=nc(e,y,l),t.memoizedState=ec,t=oa(null,r));else if($n(t),Bc(v)){if(y=v.nextSibling&&v.nextSibling.dataset,y)var M=y.dgst;y=M,r=Error(u(419)),r.stack="",r.digest=y,Ii({value:r,source:null,stack:null}),t=ic(e,t,l)}else if(nt||li(e,t,l,!1),y=(l&e.childLanes)!==0,nt||y){if(y=Ve,y!==null&&(r=cf(y,l),r!==0&&r!==C.retryLane))throw C.retryLane=r,xl(e,r),Nt(y,e,r),Po;Uc(v)||Xr(),t=ic(e,t,l)}else Uc(v)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Qe=Pt(v.nextSibling),st=t,Ne=!0,Qn=null,It=!1,e!==null&&ah(t,e),t=lc(t,r.children),t.flags|=4096);return t}return c?(Pn(),v=r.fallback,c=t.mode,C=e.child,M=C.sibling,r=kn(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&65011712,M!==null?v=kn(M,v):(v=vl(v,c,l,null),v.flags|=2),v.return=t,r.return=t,r.sibling=v,t.child=r,oa(null,r),r=t.child,v=e.child.memoizedState,v===null?v=tc(l):(c=v.cachePool,c!==null?(C=et._currentValue,c=c.parent!==C?{parent:C,pool:C}:c):c=fh(),v={baseLanes:v.baseLanes|l,cachePool:c}),r.memoizedState=v,r.childLanes=nc(e,y,l),t.memoizedState=ec,oa(e.child,r)):($n(t),l=e.child,e=l.sibling,l=kn(l,{mode:"visible",children:r.children}),l.return=t,l.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=l,t.memoizedState=null,l)}function lc(e,t){return t=jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function ic(e,t,l){return Al(t,e.child,null,l),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wm(e,t,l){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xo(e.return,t,l)}function ac(e,t,l,r,c,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:l,tailMode:c,treeForkCount:h}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=l,y.tailMode=c,y.treeForkCount=h)}function Tm(e,t,l){var r=t.pendingProps,c=r.revealOrder,h=r.tail;r=r.children;var y=Pe.current,v=(y&2)!==0;if(v?(y=y&1|2,t.flags|=128):y&=1,E(Pe,y),ht(e,t,r,l),r=Ne?Ji:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,l,t);else if(e.tag===19)wm(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(l=t.child,c=null;l!==null;)e=l.alternate,e!==null&&Er(e)===null&&(c=l),l=l.sibling;l=c,l===null?(c=t.child,t.child=null):(c=l.sibling,l.sibling=null),ac(t,!1,c,l,h,r);break;case"backwards":case"unstable_legacy-backwards":for(l=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Er(e)===null){t.child=c;break}e=c.sibling,c.sibling=l,l=c,c=e}ac(t,!0,l,null,h,r);break;case"together":ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function zn(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(li(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,l=kn(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=kn(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pr(e)))}function J1(e,t,l){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),Fn(t,et,e.memoizedState.cache),Sl();break;case 27:case 5:Gt(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_o(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?($n(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Em(e,t,l):($n(t),e=zn(e,t,l),e!==null?e.sibling:null);$n(t);break;case 19:var c=(e.flags&128)!==0;if(r=(l&t.childLanes)!==0,r||(li(e,t,l,!1),r=(l&t.childLanes)!==0),c){if(r)return Tm(e,t,l);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),E(Pe,Pe.current),r)break;return null;case 22:return t.lanes=0,ym(e,t,l,t.pendingProps);case 24:Fn(t,et,e.memoizedState.cache)}return zn(e,t,l)}function Cm(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!rc(e,l)&&(t.flags&128)===0)return nt=!1,J1(e,t,l);nt=(e.flags&131072)!==0}else nt=!1,Ne&&(t.flags&1048576)!==0&&ih(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Tl(t.elementType),t.type=e,typeof e=="function")so(e)?(r=Nl(e,r),t.tag=1,t=Sm(null,t,e,r,l)):(t.tag=0,t=Wo(null,t,e,r,l));else{if(e!=null){var c=e.$$typeof;if(c===ne){t.tag=11,t=dm(null,t,e,r,l);break e}else if(c===P){t.tag=14,t=pm(null,t,e,r,l);break e}}throw t=ae(e)||e,Error(u(306,t,""))}}return t;case 0:return Wo(e,t,t.type,t.pendingProps,l);case 1:return r=t.type,c=Nl(r,t.pendingProps),Sm(e,t,r,c,l);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));r=t.pendingProps;var h=t.memoizedState;c=h.element,Co(e,t),la(t,r,null,l);var y=t.memoizedState;if(r=y.cache,Fn(t,et,r),r!==h.cache&&vo(t,[et],l,!0),na(),r=y.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=km(e,t,r,l);break e}else if(r!==c){c=Ft(Error(u(424)),t),Ii(c),t=km(e,t,r,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=Pt(e.firstChild),st=t,Ne=!0,Qn=null,It=!0,l=yh(t,null,r,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Sl(),r===c){t=zn(e,t,l);break e}ht(e,t,r,l)}t=t.child}return t;case 26:return Mr(e,t),e===null?(l=Ud(t.type,null,t.pendingProps,null))?t.memoizedState=l:Ne||(l=t.type,e=t.pendingProps,r=$r(ce.current).createElement(l),r[ct]=t,r[Et]=e,mt(r,l,e),ut(r),t.stateNode=r):t.memoizedState=Ud(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gt(t),e===null&&Ne&&(r=t.stateNode=Md(t.type,t.pendingProps,ce.current),st=t,It=!0,c=Qe,rl(t.type)?(Hc=c,Qe=Pt(r.firstChild)):Qe=c),ht(e,t,t.pendingProps.children,l),Mr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((c=r=Qe)&&(r=T0(r,t.type,t.pendingProps,It),r!==null?(t.stateNode=r,st=t,Qe=Pt(r.firstChild),It=!1,c=!0):c=!1),c||Zn(t)),Gt(t),c=t.type,h=t.pendingProps,y=e!==null?e.memoizedProps:null,r=h.children,Mc(c,h)?r=null:y!==null&&Mc(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Ro(e,t,q1,null,null,l),Ea._currentValue=c),Mr(e,t),ht(e,t,r,l),t.child;case 6:return e===null&&Ne&&((e=l=Qe)&&(l=C0(l,t.pendingProps,It),l!==null?(t.stateNode=l,st=t,Qe=null,e=!0):e=!1),e||Zn(t)),null;case 13:return Em(e,t,l);case 4:return Fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Al(t,null,r,l):ht(e,t,r,l),t.child;case 11:return dm(e,t,t.type,t.pendingProps,l);case 7:return ht(e,t,t.pendingProps,l),t.child;case 8:return ht(e,t,t.pendingProps.children,l),t.child;case 12:return ht(e,t,t.pendingProps.children,l),t.child;case 10:return r=t.pendingProps,Fn(t,t.type,r.value),ht(e,t,r.children,l),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,El(t),c=ft(c),r=r(c),t.flags|=1,ht(e,t,r,l),t.child;case 14:return pm(e,t,t.type,t.pendingProps,l);case 15:return gm(e,t,t.type,t.pendingProps,l);case 19:return Tm(e,t,l);case 31:return K1(e,t,l);case 22:return ym(e,t,l,t.pendingProps);case 24:return El(t),r=ft(et),e===null?(c=Eo(),c===null&&(c=Ve,h=So(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=l),c=h),t.memoizedState={parent:r,cache:c},To(t),Fn(t,et,c)):((e.lanes&l)!==0&&(Co(e,t),la(t,null,null,l),na()),c=e.memoizedState,h=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Fn(t,et,r)):(r=h.cache,Fn(t,et,r),r!==c.cache&&vo(t,[et],l,!0))),ht(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Nn(e){e.flags|=4}function uc(e,t,l,r,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Wm())e.flags|=8192;else throw Cl=xr,wo}else e.flags&=-16777217}function Am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t))if(Wm())e.flags|=8192;else throw Cl=xr,wo}function Lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rf():536870912,e.lanes|=t,pi|=t)}function ca(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var r=null;l!==null;)l.alternate!==null&&(r=l),l=l.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,r=0;if(t)for(var c=e.child;c!==null;)l|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)l|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=l,t}function I1(e,t,l){var r=t.pendingProps;switch(po(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return l=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Tn(et),Ue(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ni(t)?Nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yo())),Ze(t),null;case 26:var c=t.type,h=t.memoizedState;return e===null?(Nn(t),h!==null?(Ze(t),Am(t,h)):(Ze(t),uc(t,c,null,r,l))):h?h!==e.memoizedState?(Nn(t),Ze(t),Am(t,h)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Nn(t),Ze(t),uc(t,c,e,r,l)),null;case 27:if(gn(t),l=ce.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nn(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}e=W.current,ni(t)?rh(t):(e=Md(c,r,l),t.stateNode=e,Nn(t))}return Ze(t),null;case 5:if(gn(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nn(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}if(h=W.current,ni(t))rh(t);else{var y=$r(ce.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}h[ct]=t,h[Et]=r;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=h;e:switch(mt(h,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Nn(t)}}return Ze(t),uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(e=ce.current,ni(t)){if(e=t.stateNode,l=t.memoizedProps,r=null,c=st,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[ct]=t,e=!!(e.nodeValue===l||r!==null&&r.suppressHydrationWarning===!0||Ed(e.nodeValue,l)),e||Zn(t,!0)}else e=$r(e).createTextNode(r),e[ct]=t,t.stateNode=e}return Ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(r=ni(t),l!==null){if(e===null){if(!r)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ct]=t}else Sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else l=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ze(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(u(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[ct]=t}else Sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else c=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=r!==null,e=e!==null&&e.memoizedState!==null,l&&(r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==c&&(r.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Lr(t,t.updateQueue),Ze(t),null);case 4:return Ue(),e===null&&Nc(t.stateNode.containerInfo),Ze(t),null;case 10:return Tn(t.type),Ze(t),null;case 19:if(X(Pe),r=t.memoizedState,r===null)return Ze(t),null;if(c=(t.flags&128)!==0,h=r.rendering,h===null)if(c)ca(r,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Er(e),h!==null){for(t.flags|=128,ca(r,!1),e=h.updateQueue,t.updateQueue=e,Lr(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)th(l,e),l=l.sibling;return E(Pe,Pe.current&1|2),Ne&&En(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&yt()>Yr&&(t.flags|=128,c=!0,ca(r,!1),t.lanes=4194304)}else{if(!c)if(e=Er(h),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Lr(t,e),ca(r,!0),r.tail===null&&r.tailMode==="hidden"&&!h.alternate&&!Ne)return Ze(t),null}else 2*yt()-r.renderingStartTime>Yr&&l!==536870912&&(t.flags|=128,c=!0,ca(r,!1),t.lanes=4194304);r.isBackwards?(h.sibling=t.child,t.child=h):(e=r.last,e!==null?e.sibling=h:t.child=h,r.last=h)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=yt(),e.sibling=null,l=Pe.current,E(Pe,c?l&1|2:l&1),Ne&&En(t,r.treeForkCount),e):(Ze(t),null);case 22:case 23:return Lt(t),Do(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(l&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),l=t.updateQueue,l!==null&&Lr(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==l&&(t.flags|=2048),e!==null&&X(wl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Tn(et),Ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $1(e,t){switch(po(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(et),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gn(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(u(340));Sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Pe),null;case 4:return Ue(),null;case 10:return Tn(t.type),null;case 22:case 23:return Lt(t),Do(),e!==null&&X(wl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(et),null;case 25:return null;default:return null}}function zm(e,t){switch(po(t),t.tag){case 3:Tn(et),Ue();break;case 26:case 27:case 5:gn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:X(Pe);break;case 10:Tn(t.type);break;case 22:case 23:Lt(t),Do(),e!==null&&X(wl);break;case 24:Tn(et)}}function sa(e,t){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){r=void 0;var h=l.create,y=l.inst;r=h(),y.destroy=r}l=l.next}while(l!==c)}}catch(v){Le(t,t.return,v)}}function Wn(e,t,l){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){var y=r.inst,v=y.destroy;if(v!==void 0){y.destroy=void 0,c=t;var C=l,M=v;try{M()}catch(G){Le(c,C,G)}}}r=r.next}while(r!==h)}}catch(G){Le(t,t.return,G)}}function Nm(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{xh(t,l)}catch(r){Le(e,e.return,r)}}}function Dm(e,t,l){l.props=Nl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(r){Le(e,t,r)}}function fa(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof l=="function"?e.refCleanup=l(r):l.current=r}}catch(c){Le(e,t,c)}}function sn(e,t){var l=e.ref,r=e.refCleanup;if(l!==null)if(typeof r=="function")try{r()}catch(c){Le(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(c){Le(e,t,c)}else l.current=null}function _m(e){var t=e.type,l=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break e;case"img":l.src?r.src=l.src:l.srcSet&&(r.srcset=l.srcSet)}}catch(c){Le(e,e.return,c)}}function oc(e,t,l){try{var r=e.stateNode;x0(r,e.type,l,t),r[Et]=t}catch(c){Le(e,e.return,c)}}function Om(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rl(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,l){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=vn));else if(r!==4&&(r===27&&rl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(sc(e,t,l),e=e.sibling;e!==null;)sc(e,t,l),e=e.sibling}function Ur(e,t,l){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(r!==4&&(r===27&&rl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ur(e,t,l),e=e.sibling;e!==null;)Ur(e,t,l),e=e.sibling}function Rm(e){var t=e.stateNode,l=e.memoizedProps;try{for(var r=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);mt(t,r,l),t[ct]=e,t[Et]=l}catch(h){Le(e,e.return,h)}}var Dn=!1,lt=!1,fc=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,ot=null;function P1(e,t){if(e=e.containerInfo,Oc=iu,e=Zf(e),lo(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var r=l.getSelection&&l.getSelection();if(r&&r.rangeCount!==0){l=r.anchorNode;var c=r.anchorOffset,h=r.focusNode;r=r.focusOffset;try{l.nodeType,h.nodeType}catch{l=null;break e}var y=0,v=-1,C=-1,M=0,G=0,F=e,j=null;t:for(;;){for(var q;F!==l||c!==0&&F.nodeType!==3||(v=y+c),F!==h||r!==0&&F.nodeType!==3||(C=y+r),F.nodeType===3&&(y+=F.nodeValue.length),(q=F.firstChild)!==null;)j=F,F=q;for(;;){if(F===e)break t;if(j===l&&++M===c&&(v=y),j===h&&++G===r&&(C=y),(q=F.nextSibling)!==null)break;F=j,j=F.parentNode}F=q}l=v===-1||C===-1?null:{start:v,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Rc={focusedElem:e,selectionRange:l},iu=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,h=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)c=e[l],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,l=t,c=h.memoizedProps,h=h.memoizedState,r=l.stateNode;try{var le=Nl(l.type,c);e=r.getSnapshotBeforeUpdate(le,h),r.__reactInternalSnapshotBeforeUpdate=e}catch(me){Le(l,l.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Lc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function jm(e,t,l){var r=l.flags;switch(l.tag){case 0:case 11:case 15:On(e,l),r&4&&sa(5,l);break;case 1:if(On(e,l),r&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(y){Le(l,l.return,y)}else{var c=Nl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Le(l,l.return,y)}}r&64&&Nm(l),r&512&&fa(l,l.return);break;case 3:if(On(e,l),r&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{xh(e,t)}catch(y){Le(l,l.return,y)}}break;case 27:t===null&&r&4&&Rm(l);case 26:case 5:On(e,l),t===null&&r&4&&_m(l),r&512&&fa(l,l.return);break;case 12:On(e,l);break;case 31:On(e,l),r&4&&Bm(e,l);break;case 13:On(e,l),r&4&&Hm(e,l),r&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=u0.bind(null,l),A0(e,l))));break;case 22:if(r=l.memoizedState!==null||Dn,!r){t=t!==null&&t.memoizedState!==null||lt,c=Dn;var h=lt;Dn=r,(lt=t)&&!h?Rn(e,l,(l.subtreeFlags&8772)!==0):On(e,l),Dn=c,lt=h}break;case 30:break;default:On(e,l)}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Tt=!1;function _n(e,t,l){for(l=l.child;l!==null;)Um(e,t,l),l=l.sibling}function Um(e,t,l){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(bt,l)}catch{}switch(l.tag){case 26:lt||sn(l,t),_n(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:lt||sn(l,t);var r=Ke,c=Tt;rl(l.type)&&(Ke=l.stateNode,Tt=!1),_n(e,t,l),va(l.stateNode),Ke=r,Tt=c;break;case 5:lt||sn(l,t);case 6:if(r=Ke,c=Tt,Ke=null,_n(e,t,l),Ke=r,Tt=c,Ke!==null)if(Tt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(l.stateNode)}catch(h){Le(l,t,h)}else try{Ke.removeChild(l.stateNode)}catch(h){Le(l,t,h)}break;case 18:Ke!==null&&(Tt?(e=Ke,Nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ei(e)):Nd(Ke,l.stateNode));break;case 4:r=Ke,c=Tt,Ke=l.stateNode.containerInfo,Tt=!0,_n(e,t,l),Ke=r,Tt=c;break;case 0:case 11:case 14:case 15:Wn(2,l,t),lt||Wn(4,l,t),_n(e,t,l);break;case 1:lt||(sn(l,t),r=l.stateNode,typeof r.componentWillUnmount=="function"&&Dm(l,t,r)),_n(e,t,l);break;case 21:_n(e,t,l);break;case 22:lt=(r=lt)||l.memoizedState!==null,_n(e,t,l),lt=r;break;default:_n(e,t,l)}}function Bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(l){Le(t,t.return,l)}}}function Hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(l){Le(t,t.return,l)}}function W1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mm),t;default:throw Error(u(435,e.tag))}}function Br(e,t){var l=W1(e);t.forEach(function(r){if(!l.has(r)){l.add(r);var c=o0.bind(null,e,r);r.then(c,c)}})}function Ct(e,t){var l=t.deletions;if(l!==null)for(var r=0;r<l.length;r++){var c=l[r],h=e,y=t,v=y;e:for(;v!==null;){switch(v.tag){case 27:if(rl(v.type)){Ke=v.stateNode,Tt=!1;break e}break;case 5:Ke=v.stateNode,Tt=!1;break e;case 3:case 4:Ke=v.stateNode.containerInfo,Tt=!0;break e}v=v.return}if(Ke===null)throw Error(u(160));Um(h,y,c),Ke=null,Tt=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qm(t,e),t=t.sibling}var ln=null;function qm(e,t){var l=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),At(e),r&4&&(Wn(3,e,e.return),sa(3,e),Wn(5,e,e.return));break;case 1:Ct(t,e),At(e),r&512&&(lt||l===null||sn(l,l.return)),r&64&&Dn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?r:l.concat(r))));break;case 26:var c=ln;if(Ct(t,e),At(e),r&512&&(lt||l===null||sn(l,l.return)),r&4){var h=l!==null?l.memoizedState:null;if(r=e.memoizedState,l===null)if(r===null)if(e.stateNode===null){e:{r=e.type,l=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Bi]||h[ct]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(r),c.head.insertBefore(h,c.querySelector("head > title"))),mt(h,r,l),h[ct]=e,ut(h),r=h;break e;case"link":var y=qd("link","href",c).get(r+(l.href||""));if(y){for(var v=0;v<y.length;v++)if(h=y[v],h.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&h.getAttribute("rel")===(l.rel==null?null:l.rel)&&h.getAttribute("title")===(l.title==null?null:l.title)&&h.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){y.splice(v,1);break t}}h=c.createElement(r),mt(h,r,l),c.head.appendChild(h);break;case"meta":if(y=qd("meta","content",c).get(r+(l.content||""))){for(v=0;v<y.length;v++)if(h=y[v],h.getAttribute("content")===(l.content==null?null:""+l.content)&&h.getAttribute("name")===(l.name==null?null:l.name)&&h.getAttribute("property")===(l.property==null?null:l.property)&&h.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&h.getAttribute("charset")===(l.charSet==null?null:l.charSet)){y.splice(v,1);break t}}h=c.createElement(r),mt(h,r,l),c.head.appendChild(h);break;default:throw Error(u(468,r))}h[ct]=e,ut(h),r=h}e.stateNode=r}else Yd(c,e.type,e.stateNode);else e.stateNode=Hd(c,r,e.memoizedProps);else h!==r?(h===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):h.count--,r===null?Yd(c,e.type,e.stateNode):Hd(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&oc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ct(t,e),At(e),r&512&&(lt||l===null||sn(l,l.return)),l!==null&&r&4&&oc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ct(t,e),At(e),r&512&&(lt||l===null||sn(l,l.return)),e.flags&32){c=e.stateNode;try{Zl(c,"")}catch(le){Le(e,e.return,le)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,oc(e,c,l!==null?l.memoizedProps:c)),r&1024&&(fc=!0);break;case 6:if(Ct(t,e),At(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,l=e.stateNode;try{l.nodeValue=r}catch(le){Le(e,e.return,le)}}break;case 3:if(eu=null,c=ln,ln=Pr(t.containerInfo),Ct(t,e),ln=c,At(e),r&4&&l!==null&&l.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(le){Le(e,e.return,le)}fc&&(fc=!1,Ym(e));break;case 4:r=ln,ln=Pr(e.stateNode.containerInfo),Ct(t,e),At(e),ln=r;break;case 12:Ct(t,e),At(e);break;case 31:Ct(t,e),At(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Br(e,r)));break;case 13:Ct(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(qr=yt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Br(e,r)));break;case 22:c=e.memoizedState!==null;var C=l!==null&&l.memoizedState!==null,M=Dn,G=lt;if(Dn=M||c,lt=G||C,Ct(t,e),lt=G,Dn=M,At(e),r&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(l===null||C||Dn||lt||Dl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){C=l=t;try{if(h=C.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{v=C.stateNode;var F=C.memoizedProps.style,j=F!=null&&F.hasOwnProperty("display")?F.display:null;v.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(le){Le(C,C.return,le)}}}else if(t.tag===6){if(l===null){C=t;try{C.stateNode.nodeValue=c?"":C.memoizedProps}catch(le){Le(C,C.return,le)}}}else if(t.tag===18){if(l===null){C=t;try{var q=C.stateNode;c?Dd(q,!0):Dd(C.stateNode,!1)}catch(le){Le(C,C.return,le)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(l=r.retryQueue,l!==null&&(r.retryQueue=null,Br(e,l))));break;case 19:Ct(t,e),At(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Br(e,r)));break;case 30:break;case 21:break;default:Ct(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var l,r=e.return;r!==null;){if(Om(r)){l=r;break}r=r.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var c=l.stateNode,h=cc(e);Ur(e,h,c);break;case 5:var y=l.stateNode;l.flags&32&&(Zl(y,""),l.flags&=-33);var v=cc(e);Ur(e,v,y);break;case 3:case 4:var C=l.stateNode.containerInfo,M=cc(e);sc(e,M,C);break;default:throw Error(u(161))}}catch(G){Le(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ym(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function On(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jm(e,t.alternate,t),t=t.sibling}function Dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Dl(t);break;case 1:sn(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Dm(t,t.return,l),Dl(t);break;case 27:va(t.stateNode);case 26:case 5:sn(t,t.return),Dl(t);break;case 22:t.memoizedState===null&&Dl(t);break;case 30:Dl(t);break;default:Dl(t)}e=e.sibling}}function Rn(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,h=t,y=h.flags;switch(h.tag){case 0:case 11:case 15:Rn(c,h,l),sa(4,h);break;case 1:if(Rn(c,h,l),r=h,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(M){Le(r,r.return,M)}if(r=h,c=r.updateQueue,c!==null){var v=r.stateNode;try{var C=c.shared.hiddenCallbacks;if(C!==null)for(c.shared.hiddenCallbacks=null,c=0;c<C.length;c++)bh(C[c],v)}catch(M){Le(r,r.return,M)}}l&&y&64&&Nm(h),fa(h,h.return);break;case 27:Rm(h);case 26:case 5:Rn(c,h,l),l&&r===null&&y&4&&_m(h),fa(h,h.return);break;case 12:Rn(c,h,l);break;case 31:Rn(c,h,l),l&&y&4&&Bm(c,h);break;case 13:Rn(c,h,l),l&&y&4&&Hm(c,h);break;case 22:h.memoizedState===null&&Rn(c,h,l),fa(h,h.return);break;case 30:break;default:Rn(c,h,l)}t=t.sibling}}function hc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&$i(l))}function mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e))}function an(e,t,l,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vm(e,t,l,r),t=t.sibling}function Vm(e,t,l,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,l,r),c&2048&&sa(9,t);break;case 1:an(e,t,l,r);break;case 3:an(e,t,l,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e)));break;case 12:if(c&2048){an(e,t,l,r),e=t.stateNode;try{var h=t.memoizedProps,y=h.id,v=h.onPostCommit;typeof v=="function"&&v(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Le(t,t.return,C)}}else an(e,t,l,r);break;case 31:an(e,t,l,r);break;case 13:an(e,t,l,r);break;case 23:break;case 22:h=t.stateNode,y=t.alternate,t.memoizedState!==null?h._visibility&2?an(e,t,l,r):ha(e,t):h._visibility&2?an(e,t,l,r):(h._visibility|=2,hi(e,t,l,r,(t.subtreeFlags&10256)!==0||!1)),c&2048&&hc(y,t);break;case 24:an(e,t,l,r),c&2048&&mc(t.alternate,t);break;default:an(e,t,l,r)}}function hi(e,t,l,r,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var h=e,y=t,v=l,C=r,M=y.flags;switch(y.tag){case 0:case 11:case 15:hi(h,y,v,C,c),sa(8,y);break;case 23:break;case 22:var G=y.stateNode;y.memoizedState!==null?G._visibility&2?hi(h,y,v,C,c):ha(h,y):(G._visibility|=2,hi(h,y,v,C,c)),c&&M&2048&&hc(y.alternate,y);break;case 24:hi(h,y,v,C,c),c&&M&2048&&mc(y.alternate,y);break;default:hi(h,y,v,C,c)}t=t.sibling}}function ha(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,r=t,c=r.flags;switch(r.tag){case 22:ha(l,r),c&2048&&hc(r.alternate,r);break;case 24:ha(l,r),c&2048&&mc(r.alternate,r);break;default:ha(l,r)}t=t.sibling}}var ma=8192;function mi(e,t,l){if(e.subtreeFlags&ma)for(e=e.child;e!==null;)Gm(e,t,l),e=e.sibling}function Gm(e,t,l){switch(e.tag){case 26:mi(e,t,l),e.flags&ma&&e.memoizedState!==null&&H0(l,ln,e.memoizedState,e.memoizedProps);break;case 5:mi(e,t,l);break;case 3:case 4:var r=ln;ln=Pr(e.stateNode.containerInfo),mi(e,t,l),ln=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ma,ma=16777216,mi(e,t,l),ma=r):mi(e,t,l));break;default:mi(e,t,l)}}function Xm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function da(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var r=t[l];ot=r,Zm(r,e)}Xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:da(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:da(e);break;case 12:da(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hr(e)):da(e);break;default:da(e)}}function Hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var r=t[l];ot=r,Zm(r,e)}Xm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Hr(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Hr(t));break;default:Hr(t)}e=e.sibling}}function Zm(e,t){for(;ot!==null;){var l=ot;switch(l.tag){case 0:case 11:case 15:Wn(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var r=l.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$i(l.memoizedState.cache)}if(r=l.child,r!==null)r.return=l,ot=r;else e:for(l=e;ot!==null;){r=ot;var c=r.sibling,h=r.return;if(Lm(r),r===l){ot=null;break e}if(c!==null){c.return=h,ot=c;break e}ot=h}}}var e0={getCacheForType:function(e){var t=ft(et),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return ft(et).controller.signal}},t0=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ve=null,Ee=null,Ae=0,je=0,Ut=null,el=!1,di=!1,dc=!1,Mn=0,$e=0,tl=0,_l=0,pc=0,Bt=0,pi=0,pa=null,zt=null,gc=!1,qr=0,Fm=0,Yr=1/0,Vr=null,nl=null,rt=0,ll=null,gi=null,jn=0,yc=0,bc=null,Km=null,ga=0,xc=null;function Ht(){return(Re&2)!==0&&Ae!==0?Ae&-Ae:L.T!==null?Tc():sf()}function Jm(){if(Bt===0)if((Ae&536870912)===0||Ne){var e=Ia;Ia<<=1,(Ia&3932160)===0&&(Ia=262144),Bt=e}else Bt=536870912;return e=jt.current,e!==null&&(e.flags|=32),Bt}function Nt(e,t,l){(e===Ve&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(yi(e,0),il(e,Ae,Bt,!1)),Ui(e,l),((Re&2)===0||e!==Ve)&&(e===Ve&&((Re&2)===0&&(_l|=l),$e===4&&il(e,Ae,Bt,!1)),fn(e))}function Im(e,t,l){if((Re&6)!==0)throw Error(u(327));var r=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Li(e,t),c=r?i0(e,t):Sc(e,t,!0),h=r;do{if(c===0){di&&!r&&il(e,t,0,!1);break}else{if(l=e.current.alternate,h&&!n0(l)){c=Sc(e,t,!1),h=!1;continue}if(c===2){if(h=t,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var v=e;c=pa;var C=v.current.memoizedState.isDehydrated;if(C&&(yi(v,y).flags|=256),y=Sc(v,y,!1),y!==2){if(dc&&!C){v.errorRecoveryDisabledLanes|=h,_l|=h,c=4;break e}h=zt,zt=c,h!==null&&(zt===null?zt=h:zt.push.apply(zt,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){yi(e,0),il(e,t,0,!0);break}e:{switch(r=e,h=c,h){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:il(r,t,Bt,!el);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(c=qr+300-yt(),10<c)){if(il(r,t,Bt,!el),Pa(r,0,!0)!==0)break e;jn=t,r.timeoutHandle=Ad($m.bind(null,r,l,zt,Vr,gc,t,Bt,_l,pi,el,h,"Throttled",-0,0),c);break e}$m(r,l,zt,Vr,gc,t,Bt,_l,pi,el,h,null,-0,0)}}break}while(!0);fn(e)}function $m(e,t,l,r,c,h,y,v,C,M,G,F,j,q){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},Gm(t,h,F);var le=(h&62914560)===h?qr-yt():(h&4194048)===h?Fm-yt():0;if(le=q0(F,le),le!==null){jn=h,e.cancelPendingCommit=le(ad.bind(null,e,t,h,l,r,c,y,v,C,G,F,null,j,q)),il(e,h,y,!M);return}}ad(e,t,h,l,r,c,y,v,C)}function n0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var r=0;r<l.length;r++){var c=l[r],h=c.getSnapshot;c=c.value;try{if(!Rt(h(),c))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function il(e,t,l,r){t&=~pc,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var h=31-Ye(c),y=1<<h;r[h]=-1,c&=~y}l!==0&&uf(e,l,t)}function Gr(){return(Re&6)===0?(ya(0),!1):!0}function vc(){if(Ee!==null){if(je===0)var e=Ee.return;else e=Ee,wn=kl=null,Lo(e),ui=null,Wi=0,e=Ee;for(;e!==null;)zm(e.alternate,e),e=e.return;Ee=null}}function yi(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,k0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),jn=0,vc(),Ve=e,Ee=l=kn(e.current,null),Ae=t,je=0,Ut=null,el=!1,di=Li(e,t),dc=!1,pi=Bt=pc=_l=tl=$e=0,zt=pa=null,gc=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-Ye(r),h=1<<c;t|=e[c],r&=~h}return Mn=t,sr(),l}function Pm(e,t){ye=null,L.H=ua,t===ri||t===br?(t=dh(),je=3):t===wo?(t=dh(),je=4):je=t===Po?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,Ee===null&&($e=1,Or(e,Ft(t,e.current)))}function Wm(){var e=jt.current;return e===null?!0:(Ae&4194048)===Ae?$t===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===$t:!1}function ed(){var e=L.H;return L.H=ua,e===null?ua:e}function td(){var e=L.A;return L.A=e0,e}function Xr(){$e=4,el||(Ae&4194048)!==Ae&&jt.current!==null||(di=!0),(tl&134217727)===0&&(_l&134217727)===0||Ve===null||il(Ve,Ae,Bt,!1)}function Sc(e,t,l){var r=Re;Re|=2;var c=ed(),h=td();(Ve!==e||Ae!==t)&&(Vr=null,yi(e,t)),t=!1;var y=$e;e:do try{if(je!==0&&Ee!==null){var v=Ee,C=Ut;switch(je){case 8:vc(),y=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var M=je;if(je=0,Ut=null,bi(e,v,C,M),l&&di){y=0;break e}break;default:M=je,je=0,Ut=null,bi(e,v,C,M)}}l0(),y=$e;break}catch(G){Pm(e,G)}while(!0);return t&&e.shellSuspendCounter++,wn=kl=null,Re=r,L.H=c,L.A=h,Ee===null&&(Ve=null,Ae=0,sr()),y}function l0(){for(;Ee!==null;)nd(Ee)}function i0(e,t){var l=Re;Re|=2;var r=ed(),c=td();Ve!==e||Ae!==t?(Vr=null,Yr=yt()+500,yi(e,t)):di=Li(e,t);e:do try{if(je!==0&&Ee!==null){t=Ee;var h=Ut;t:switch(je){case 1:je=0,Ut=null,bi(e,t,h,1);break;case 2:case 9:if(hh(h)){je=0,Ut=null,ld(t);break}t=function(){je!==2&&je!==9||Ve!==e||(je=7),fn(e)},h.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:hh(h)?(je=0,Ut=null,ld(t)):(je=0,Ut=null,bi(e,t,h,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var v=Ee;if(y?Vd(y):v.stateNode.complete){je=0,Ut=null;var C=v.sibling;if(C!==null)Ee=C;else{var M=v.return;M!==null?(Ee=M,Qr(M)):Ee=null}break t}}je=0,Ut=null,bi(e,t,h,5);break;case 6:je=0,Ut=null,bi(e,t,h,6);break;case 8:vc(),$e=6;break e;default:throw Error(u(462))}}a0();break}catch(G){Pm(e,G)}while(!0);return wn=kl=null,L.H=r,L.A=c,Re=l,Ee!==null?0:(Ve=null,Ae=0,sr(),$e)}function a0(){for(;Ee!==null&&!Ru();)nd(Ee)}function nd(e){var t=Cm(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?Qr(e):Ee=t}function ld(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=vm(l,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=vm(l,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Lo(t);default:zm(l,t),t=Ee=th(t,Mn),t=Cm(l,t,Mn)}e.memoizedProps=e.pendingProps,t===null?Qr(e):Ee=t}function bi(e,t,l,r){wn=kl=null,Lo(t),ui=null,Wi=0;var c=t.return;try{if(F1(e,c,t,l,Ae)){$e=1,Or(e,Ft(l,e.current)),Ee=null;return}}catch(h){if(c!==null)throw Ee=c,h;$e=1,Or(e,Ft(l,e.current)),Ee=null;return}t.flags&32768?(Ne||r===1?e=!0:di||(Ae&536870912)!==0?e=!1:(el=e=!0,(r===2||r===9||r===3||r===6)&&(r=jt.current,r!==null&&r.tag===13&&(r.flags|=16384))),id(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){id(t,el);return}e=t.return;var l=I1(t.alternate,t,Mn);if(l!==null){Ee=l;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function id(e,t){do{var l=$1(e.alternate,e);if(l!==null){l.flags&=32767,Ee=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=l}while(e!==null);$e=6,Ee=null}function ad(e,t,l,r,c,h,y,v,C){e.cancelPendingCommit=null;do Zr();while(rt!==0);if((Re&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(h=t.lanes|t.childLanes,h|=oo,By(e,l,h,y,v,C),e===Ve&&(Ee=Ve=null,Ae=0),gi=t,ll=e,jn=l,yc=h,bc=c,Km=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c0(pe,function(){return sd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=K.p,K.p=2,y=Re,Re|=4;try{P1(e,t,l)}finally{Re=y,K.p=c,L.T=r}}rt=1,rd(),ud(),od()}}function rd(){if(rt===1){rt=0;var e=ll,t=gi,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=L.T,L.T=null;var r=K.p;K.p=2;var c=Re;Re|=4;try{qm(t,e);var h=Rc,y=Zf(e.containerInfo),v=h.focusedElem,C=h.selectionRange;if(y!==v&&v&&v.ownerDocument&&Qf(v.ownerDocument.documentElement,v)){if(C!==null&&lo(v)){var M=C.start,G=C.end;if(G===void 0&&(G=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(G,v.value.length);else{var F=v.ownerDocument||document,j=F&&F.defaultView||window;if(j.getSelection){var q=j.getSelection(),le=v.textContent.length,me=Math.min(C.start,le),qe=C.end===void 0?me:Math.min(C.end,le);!q.extend&&me>qe&&(y=qe,qe=me,me=y);var D=Xf(v,me),z=Xf(v,qe);if(D&&z&&(q.rangeCount!==1||q.anchorNode!==D.node||q.anchorOffset!==D.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var R=F.createRange();R.setStart(D.node,D.offset),q.removeAllRanges(),me>qe?(q.addRange(R),q.extend(z.node,z.offset)):(R.setEnd(z.node,z.offset),q.addRange(R))}}}}for(F=[],q=v;q=q.parentNode;)q.nodeType===1&&F.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<F.length;v++){var Z=F[v];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}iu=!!Oc,Rc=Oc=null}finally{Re=c,K.p=r,L.T=l}}e.current=t,rt=2}}function ud(){if(rt===2){rt=0;var e=ll,t=gi,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=L.T,L.T=null;var r=K.p;K.p=2;var c=Re;Re|=4;try{jm(e,t.alternate,t)}finally{Re=c,K.p=r,L.T=l}}rt=3}}function od(){if(rt===4||rt===3){rt=0,Mu();var e=ll,t=gi,l=jn,r=Km;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,gi=ll=null,cd(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(nl=null),Bu(l),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=L.T,c=K.p,K.p=2,L.T=null;try{for(var h=e.onRecoverableError,y=0;y<r.length;y++){var v=r[y];h(v.value,{componentStack:v.stack})}}finally{L.T=t,K.p=c}}(jn&3)!==0&&Zr(),fn(e),c=e.pendingLanes,(l&261930)!==0&&(c&42)!==0?e===xc?ga++:(ga=0,xc=e):ga=0,ya(0)}}function cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$i(t)))}function Zr(){return rd(),ud(),od(),sd()}function sd(){if(rt!==5)return!1;var e=ll,t=yc;yc=0;var l=Bu(jn),r=L.T,c=K.p;try{K.p=32>l?32:l,L.T=null,l=bc,bc=null;var h=ll,y=jn;if(rt=0,gi=ll=null,jn=0,(Re&6)!==0)throw Error(u(331));var v=Re;if(Re|=4,Qm(h.current),Vm(h,h.current,y,l),Re=v,ya(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(bt,h)}catch{}return!0}finally{K.p=c,L.T=r,cd(e,t)}}function fd(e,t,l){t=Ft(l,t),t=$o(e.stateNode,t,2),e=In(e,t,2),e!==null&&(Ui(e,2),fn(e))}function Le(e,t,l){if(e.tag===3)fd(e,e,l);else for(;t!==null;){if(t.tag===3){fd(t,e,l);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nl===null||!nl.has(r))){e=Ft(l,e),l=hm(2),r=In(t,l,2),r!==null&&(mm(l,r,t,e),Ui(r,2),fn(r));break}}t=t.return}}function kc(e,t,l){var r=e.pingCache;if(r===null){r=e.pingCache=new t0;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(l)||(dc=!0,c.add(l),e=r0.bind(null,e,t,l),t.then(e,e))}function r0(e,t,l){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ve===e&&(Ae&l)===l&&($e===4||$e===3&&(Ae&62914560)===Ae&&300>yt()-qr?(Re&2)===0&&yi(e,0):pc|=l,pi===Ae&&(pi=0)),fn(e)}function hd(e,t){t===0&&(t=rf()),e=xl(e,t),e!==null&&(Ui(e,t),fn(e))}function u0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),hd(e,l)}function o0(e,t){var l=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(l=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(t),hd(e,l)}function c0(e,t){return Hl(e,t)}var Fr=null,xi=null,Ec=!1,Kr=!1,wc=!1,al=0;function fn(e){e!==xi&&e.next===null&&(xi===null?Fr=xi=e:xi=xi.next=e),Kr=!0,Ec||(Ec=!0,f0())}function ya(e,t){if(!wc&&Kr){wc=!0;do for(var l=!1,r=Fr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var h=0;else{var y=r.suspendedLanes,v=r.pingedLanes;h=(1<<31-Ye(42|e)+1)-1,h&=c&~(y&~v),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(l=!0,gd(r,h))}else h=Ae,h=Pa(r,r===Ve?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||Li(r,h)||(l=!0,gd(r,h));r=r.next}while(l);wc=!1}}function s0(){md()}function md(){Kr=Ec=!1;var e=0;al!==0&&S0()&&(e=al);for(var t=yt(),l=null,r=Fr;r!==null;){var c=r.next,h=dd(r,t);h===0?(r.next=null,l===null?Fr=c:l.next=c,c===null&&(xi=l)):(l=r,(e!==0||(h&3)!==0)&&(Kr=!0)),r=c}rt!==0&&rt!==5||ya(e),al!==0&&(al=0)}function dd(e,t){for(var l=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Ye(h),v=1<<y,C=c[y];C===-1?((v&l)===0||(v&r)!==0)&&(c[y]=Uy(v,t)):C<=t&&(e.expiredLanes|=v),h&=~v}if(t=Ve,l=Ae,l=Pa(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,l===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ji(r),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Li(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(r!==null&&ji(r),Bu(l)){case 2:case 8:l=$;break;case 32:l=pe;break;case 268435456:l=Me;break;default:l=pe}return r=pd.bind(null,e),l=Hl(l,r),e.callbackPriority=t,e.callbackNode=l,t}return r!==null&&r!==null&&ji(r),e.callbackPriority=2,e.callbackNode=null,2}function pd(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Zr()&&e.callbackNode!==l)return null;var r=Ae;return r=Pa(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Im(e,r,t),dd(e,yt()),e.callbackNode!=null&&e.callbackNode===l?pd.bind(null,e):null)}function gd(e,t){if(Zr())return null;Im(e,t,!0)}function f0(){E0(function(){(Re&6)!==0?Hl(Q,s0):md()})}function Tc(){if(al===0){var e=ii;e===0&&(e=Ja,Ja<<=1,(Ja&261888)===0&&(Ja=256)),al=e}return al}function yd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nr(""+e)}function bd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function h0(e,t,l,r,c){if(t==="submit"&&l&&l.stateNode===c){var h=yd((c[Et]||null).action),y=r.submitter;y&&(t=(t=y[Et]||null)?yd(t.formAction):y.getAttribute("formAction"),t!==null&&(h=t,y=null));var v=new rr("action","action",null,r,c);e.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(al!==0){var C=y?bd(c,y):new FormData(c);Qo(l,{pending:!0,data:C,method:c.method,action:h},null,C)}}else typeof h=="function"&&(v.preventDefault(),C=y?bd(c,y):new FormData(c),Qo(l,{pending:!0,data:C,method:c.method,action:h},h,C))},currentTarget:c}]})}}for(var Cc=0;Cc<uo.length;Cc++){var Ac=uo[Cc],m0=Ac.toLowerCase(),d0=Ac[0].toUpperCase()+Ac.slice(1);nn(m0,"on"+d0)}nn(Jf,"onAnimationEnd"),nn(If,"onAnimationIteration"),nn($f,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(D1,"onTransitionRun"),nn(_1,"onTransitionStart"),nn(O1,"onTransitionCancel"),nn(Pf,"onTransitionEnd"),Xl("onMouseEnter",["mouseout","mouseover"]),Xl("onMouseLeave",["mouseout","mouseover"]),Xl("onPointerEnter",["pointerout","pointerover"]),Xl("onPointerLeave",["pointerout","pointerover"]),pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pl("onBeforeInput",["compositionend","keypress","textInput","paste"]),pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function xd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var r=e[l],c=r.event;r=r.listeners;e:{var h=void 0;if(t)for(var y=r.length-1;0<=y;y--){var v=r[y],C=v.instance,M=v.currentTarget;if(v=v.listener,C!==h&&c.isPropagationStopped())break e;h=v,c.currentTarget=M;try{h(c)}catch(G){cr(G)}c.currentTarget=null,h=C}else for(y=0;y<r.length;y++){if(v=r[y],C=v.instance,M=v.currentTarget,v=v.listener,C!==h&&c.isPropagationStopped())break e;h=v,c.currentTarget=M;try{h(c)}catch(G){cr(G)}c.currentTarget=null,h=C}}}}function we(e,t){var l=t[Hu];l===void 0&&(l=t[Hu]=new Set);var r=e+"__bubble";l.has(r)||(vd(t,e,2,!1),l.add(r))}function zc(e,t,l){var r=0;t&&(r|=4),vd(l,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Nc(e){if(!e[Jr]){e[Jr]=!0,mf.forEach(function(l){l!=="selectionchange"&&(p0.has(l)||zc(l,!1,e),zc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,zc("selectionchange",!1,t))}}function vd(e,t,l,r){switch(Jd(t)){case 2:var c=G0;break;case 8:c=X0;break;default:c=Xc}l=c.bind(null,t,l,e),c=void 0,!Ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,l,{capture:!0,passive:c}):e.addEventListener(t,l,!0):c!==void 0?e.addEventListener(t,l,{passive:c}):e.addEventListener(t,l,!1)}function Dc(e,t,l,r,c){var h=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var v=r.stateNode.containerInfo;if(v===c)break;if(y===4)for(y=r.return;y!==null;){var C=y.tag;if((C===3||C===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;v!==null;){if(y=Yl(v),y===null)return;if(C=y.tag,C===5||C===6||C===26||C===27){r=h=y;continue e}v=v.parentNode}}r=r.return}Tf(function(){var M=h,G=Zu(l),F=[];e:{var j=Wf.get(e);if(j!==void 0){var q=rr,le=e;switch(e){case"keypress":if(ir(l)===0)break e;case"keydown":case"keyup":q=o1;break;case"focusin":le="focus",q=Pu;break;case"focusout":le="blur",q=Pu;break;case"beforeblur":case"afterblur":q=Pu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=f1;break;case Jf:case If:case $f:q=Wy;break;case Pf:q=m1;break;case"scroll":case"scrollend":q=Ky;break;case"wheel":q=p1;break;case"copy":case"cut":case"paste":q=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Df;break;case"toggle":case"beforetoggle":q=y1}var me=(t&4)!==0,qe=!me&&(e==="scroll"||e==="scrollend"),D=me?j!==null?j+"Capture":null:j;me=[];for(var z=M,R;z!==null;){var Z=z;if(R=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||R===null||D===null||(Z=qi(z,D),Z!=null&&me.push(xa(z,Z,R))),qe)break;z=z.return}0<me.length&&(j=new q(j,le,null,l,G),F.push({event:j,listeners:me}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",j&&l!==Qu&&(le=l.relatedTarget||l.fromElement)&&(Yl(le)||le[ql]))break e;if((q||j)&&(j=G.window===G?G:(j=G.ownerDocument)?j.defaultView||j.parentWindow:window,q?(le=l.relatedTarget||l.toElement,q=M,le=le?Yl(le):null,le!==null&&(qe=s(le),me=le.tag,le!==qe||me!==5&&me!==27&&me!==6)&&(le=null)):(q=null,le=M),q!==le)){if(me=zf,Z="onMouseLeave",D="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(me=Df,Z="onPointerLeave",D="onPointerEnter",z="pointer"),qe=q==null?j:Hi(q),R=le==null?j:Hi(le),j=new me(Z,z+"leave",q,l,G),j.target=qe,j.relatedTarget=R,Z=null,Yl(G)===M&&(me=new me(D,z+"enter",le,l,G),me.target=R,me.relatedTarget=qe,Z=me),qe=Z,q&&le)t:{for(me=g0,D=q,z=le,R=0,Z=D;Z;Z=me(Z))R++;Z=0;for(var se=z;se;se=me(se))Z++;for(;0<R-Z;)D=me(D),R--;for(;0<Z-R;)z=me(z),Z--;for(;R--;){if(D===z||z!==null&&D===z.alternate){me=D;break t}D=me(D),z=me(z)}me=null}else me=null;q!==null&&Sd(F,j,q,me,!1),le!==null&&qe!==null&&Sd(F,qe,le,me,!0)}}e:{if(j=M?Hi(M):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var _e=Bf;else if(Lf(j))if(Hf)_e=A1;else{_e=T1;var re=w1}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?M&&Xu(M.elementType)&&(_e=Bf):_e=C1;if(_e&&(_e=_e(e,M))){Uf(F,_e,l,G);break e}re&&re(e,j,M),e==="focusout"&&M&&j.type==="number"&&M.memoizedProps.value!=null&&Gu(j,"number",j.value)}switch(re=M?Hi(M):window,e){case"focusin":(Lf(re)||re.contentEditable==="true")&&(Il=re,io=M,Ki=null);break;case"focusout":Ki=io=Il=null;break;case"mousedown":ao=!0;break;case"contextmenu":case"mouseup":case"dragend":ao=!1,Ff(F,l,G);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":Ff(F,l,G)}var be;if(eo)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Jl?Mf(e,l)&&(ze="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ze="onCompositionStart");ze&&(_f&&l.locale!=="ko"&&(Jl||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Jl&&(be=Cf()):(Gn=G,Ju="value"in Gn?Gn.value:Gn.textContent,Jl=!0)),re=Ir(M,ze),0<re.length&&(ze=new Nf(ze,e,null,l,G),F.push({event:ze,listeners:re}),be?ze.data=be:(be=jf(l),be!==null&&(ze.data=be)))),(be=x1?v1(e,l):S1(e,l))&&(ze=Ir(M,"onBeforeInput"),0<ze.length&&(re=new Nf("onBeforeInput","beforeinput",null,l,G),F.push({event:re,listeners:ze}),re.data=be)),h0(F,e,M,l,G)}xd(F,t)})}function xa(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ir(e,t){for(var l=t+"Capture",r=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=qi(e,l),c!=null&&r.unshift(xa(e,c,h)),c=qi(e,t),c!=null&&r.push(xa(e,c,h))),e.tag===3)return r;e=e.return}return[]}function g0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sd(e,t,l,r,c){for(var h=t._reactName,y=[];l!==null&&l!==r;){var v=l,C=v.alternate,M=v.stateNode;if(v=v.tag,C!==null&&C===r)break;v!==5&&v!==26&&v!==27||M===null||(C=M,c?(M=qi(l,h),M!=null&&y.unshift(xa(l,M,C))):c||(M=qi(l,h),M!=null&&y.push(xa(l,M,C)))),l=l.return}y.length!==0&&e.push({event:t,listeners:y})}var y0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function kd(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(b0,"")}function Ed(e,t){return t=kd(t),kd(e)===t}function He(e,t,l,r,c,h){switch(l){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Zl(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Zl(e,""+r);break;case"className":er(e,"class",r);break;case"tabIndex":er(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":er(e,l,r);break;case"style":Ef(e,r,h);break;case"data":if(t!=="object"){er(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(l);break}r=nr(""+r),e.setAttribute(l,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(l==="formAction"?(t!=="input"&&He(e,t,"name",c.name,c,null),He(e,t,"formEncType",c.formEncType,c,null),He(e,t,"formMethod",c.formMethod,c,null),He(e,t,"formTarget",c.formTarget,c,null)):(He(e,t,"encType",c.encType,c,null),He(e,t,"method",c.method,c,null),He(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(l);break}r=nr(""+r),e.setAttribute(l,r);break;case"onClick":r!=null&&(e.onclick=vn);break;case"onScroll":r!=null&&we("scroll",e);break;case"onScrollEnd":r!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(l=r.__html,l!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}l=nr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(l,""+r):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":r===!0?e.setAttribute(l,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(l,r):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(l,r):e.removeAttribute(l);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(l):e.setAttribute(l,r);break;case"popover":we("beforetoggle",e),we("toggle",e),Wa(e,"popover",r);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wa(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Zy.get(l)||l,Wa(e,l,r))}}function _c(e,t,l,r,c,h){switch(l){case"style":Ef(e,r,h);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(l=r.__html,l!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof r=="string"?Zl(e,r):(typeof r=="number"||typeof r=="bigint")&&Zl(e,""+r);break;case"onScroll":r!=null&&we("scroll",e);break;case"onScrollEnd":r!=null&&we("scrollend",e);break;case"onClick":r!=null&&(e.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!df.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(c=l.endsWith("Capture"),t=l.slice(2,c?l.length-7:void 0),h=e[Et]||null,h=h!=null?h[l]:null,typeof h=="function"&&e.removeEventListener(t,h,c),typeof r=="function")){typeof h!="function"&&h!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,r,c);break e}l in e?e[l]=r:r===!0?e.setAttribute(l,""):Wa(e,l,r)}}}function mt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var r=!1,c=!1,h;for(h in l)if(l.hasOwnProperty(h)){var y=l[h];if(y!=null)switch(h){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,h,y,l,null)}}c&&He(e,t,"srcSet",l.srcSet,l,null),r&&He(e,t,"src",l.src,l,null);return;case"input":we("invalid",e);var v=h=y=c=null,C=null,M=null;for(r in l)if(l.hasOwnProperty(r)){var G=l[r];if(G!=null)switch(r){case"name":c=G;break;case"type":y=G;break;case"checked":C=G;break;case"defaultChecked":M=G;break;case"value":h=G;break;case"defaultValue":v=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:He(e,t,r,G,l,null)}}xf(e,h,v,C,M,y,c,!1);return;case"select":we("invalid",e),r=y=h=null;for(c in l)if(l.hasOwnProperty(c)&&(v=l[c],v!=null))switch(c){case"value":h=v;break;case"defaultValue":y=v;break;case"multiple":r=v;default:He(e,t,c,v,l,null)}t=h,l=y,e.multiple=!!r,t!=null?Ql(e,!!r,t,!1):l!=null&&Ql(e,!!r,l,!0);return;case"textarea":we("invalid",e),h=c=r=null;for(y in l)if(l.hasOwnProperty(y)&&(v=l[y],v!=null))switch(y){case"value":r=v;break;case"defaultValue":c=v;break;case"children":h=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:He(e,t,y,v,l,null)}Sf(e,r,c,h);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(r=l[C],r!=null))switch(C){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(e,t,C,r,l,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(r=0;r<ba.length;r++)we(ba[r],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in l)if(l.hasOwnProperty(M)&&(r=l[M],r!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:He(e,t,M,r,l,null)}return;default:if(Xu(t)){for(G in l)l.hasOwnProperty(G)&&(r=l[G],r!==void 0&&_c(e,t,G,r,l,void 0));return}}for(v in l)l.hasOwnProperty(v)&&(r=l[v],r!=null&&He(e,t,v,r,l,null))}function x0(e,t,l,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,v=null,C=null,M=null,G=null;for(q in l){var F=l[q];if(l.hasOwnProperty(q)&&F!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":C=F;default:r.hasOwnProperty(q)||He(e,t,q,null,r,F)}}for(var j in r){var q=r[j];if(F=l[j],r.hasOwnProperty(j)&&(q!=null||F!=null))switch(j){case"type":h=q;break;case"name":c=q;break;case"checked":M=q;break;case"defaultChecked":G=q;break;case"value":y=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,t));break;default:q!==F&&He(e,t,j,q,r,F)}}Vu(e,y,v,C,M,G,h,c);return;case"select":q=y=v=j=null;for(h in l)if(C=l[h],l.hasOwnProperty(h)&&C!=null)switch(h){case"value":break;case"multiple":q=C;default:r.hasOwnProperty(h)||He(e,t,h,null,r,C)}for(c in r)if(h=r[c],C=l[c],r.hasOwnProperty(c)&&(h!=null||C!=null))switch(c){case"value":j=h;break;case"defaultValue":v=h;break;case"multiple":y=h;default:h!==C&&He(e,t,c,h,r,C)}t=v,l=y,r=q,j!=null?Ql(e,!!l,j,!1):!!r!=!!l&&(t!=null?Ql(e,!!l,t,!0):Ql(e,!!l,l?[]:"",!1));return;case"textarea":q=j=null;for(v in l)if(c=l[v],l.hasOwnProperty(v)&&c!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:He(e,t,v,null,r,c)}for(y in r)if(c=r[y],h=l[y],r.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":j=c;break;case"defaultValue":q=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:c!==h&&He(e,t,y,c,r,h)}vf(e,j,q);return;case"option":for(var le in l)if(j=l[le],l.hasOwnProperty(le)&&j!=null&&!r.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:He(e,t,le,null,r,j)}for(C in r)if(j=r[C],q=l[C],r.hasOwnProperty(C)&&j!==q&&(j!=null||q!=null))switch(C){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:He(e,t,C,j,r,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in l)j=l[me],l.hasOwnProperty(me)&&j!=null&&!r.hasOwnProperty(me)&&He(e,t,me,null,r,j);for(M in r)if(j=r[M],q=l[M],r.hasOwnProperty(M)&&j!==q&&(j!=null||q!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,t));break;default:He(e,t,M,j,r,q)}return;default:if(Xu(t)){for(var qe in l)j=l[qe],l.hasOwnProperty(qe)&&j!==void 0&&!r.hasOwnProperty(qe)&&_c(e,t,qe,void 0,r,j);for(G in r)j=r[G],q=l[G],!r.hasOwnProperty(G)||j===q||j===void 0&&q===void 0||_c(e,t,G,j,r,q);return}}for(var D in l)j=l[D],l.hasOwnProperty(D)&&j!=null&&!r.hasOwnProperty(D)&&He(e,t,D,null,r,j);for(F in r)j=r[F],q=l[F],!r.hasOwnProperty(F)||j===q||j==null&&q==null||He(e,t,F,j,r,q)}function wd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),r=0;r<l.length;r++){var c=l[r],h=c.transferSize,y=c.initiatorType,v=c.duration;if(h&&v&&wd(y)){for(y=0,v=c.responseEnd,r+=1;r<l.length;r++){var C=l[r],M=C.startTime;if(M>v)break;var G=C.transferSize,F=C.initiatorType;G&&wd(F)&&(C=C.responseEnd,y+=G*(C<v?1:(v-M)/(C-M)))}if(--r,t+=8*(h+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Oc=null,Rc=null;function $r(e){return e.nodeType===9?e:e.ownerDocument}function Td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=null;function S0(){var e=window.event;return e&&e.type==="popstate"?e===jc?!1:(jc=e,!0):(jc=null,!1)}var Ad=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(w0)}:Ad;function w0(e){setTimeout(function(){throw e})}function rl(e){return e==="head"}function Nd(e,t){var l=t,r=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"||l==="/&"){if(r===0){e.removeChild(c),Ei(t);return}r--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")r++;else if(l==="html")va(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,va(l);for(var h=l.firstChild;h;){var y=h.nextSibling,v=h.nodeName;h[Bi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&h.rel.toLowerCase()==="stylesheet"||l.removeChild(h),h=y}}else l==="body"&&va(e.ownerDocument.body);l=c}while(l);Ei(t)}function Dd(e,t){var l=e;e=0;do{var r=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),r&&r.nodeType===8)if(l=r.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=r}while(l)}function Lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Lc(l),qu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function T0(e,t,l,r){for(;e.nodeType===1;){var c=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Bi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function C0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Pt(e.nextSibling),e===null))return null;return e}function _d(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Uc(e){return e.data==="$?"||e.data==="$~"}function Bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var r=function(){t(),l.removeEventListener("DOMContentLoaded",r)};l.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hc=null;function Od(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Pt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Md(e,t,l){switch(t=$r(l),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function va(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qu(e)}var Wt=new Map,jd=new Set;function Pr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ln=K.d;K.d={f:z0,r:N0,D:D0,C:_0,L:O0,m:R0,X:j0,S:M0,M:L0};function z0(){var e=Ln.f(),t=Gr();return e||t}function N0(e){var t=Vl(e);t!==null&&t.tag===5&&t.type==="form"?Ph(t):Ln.r(e)}var vi=typeof document>"u"?null:document;function Ld(e,t,l){var r=vi;if(r&&typeof t=="string"&&t){var c=Qt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof l=="string"&&(c+='[crossorigin="'+l+'"]'),jd.has(c)||(jd.add(c),e={rel:e,crossOrigin:l,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),mt(t,"link",e),ut(t),r.head.appendChild(t)))}}function D0(e){Ln.D(e),Ld("dns-prefetch",e,null)}function _0(e,t){Ln.C(e,t),Ld("preconnect",e,t)}function O0(e,t,l){Ln.L(e,t,l);var r=vi;if(r&&e&&t){var c='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(c+='[imagesrcset="'+Qt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(c+='[imagesizes="'+Qt(l.imageSizes)+'"]')):c+='[href="'+Qt(e)+'"]';var h=c;switch(t){case"style":h=Si(e);break;case"script":h=ki(e)}Wt.has(h)||(e=g({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Wt.set(h,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(Sa(h))||t==="script"&&r.querySelector(ka(h))||(t=r.createElement("link"),mt(t,"link",e),ut(t),r.head.appendChild(t)))}}function R0(e,t){Ln.m(e,t);var l=vi;if(l&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Qt(r)+'"][href="'+Qt(e)+'"]',h=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ki(e)}if(!Wt.has(h)&&(e=g({rel:"modulepreload",href:e},t),Wt.set(h,e),l.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ka(h)))return}r=l.createElement("link"),mt(r,"link",e),ut(r),l.head.appendChild(r)}}}function M0(e,t,l){Ln.S(e,t,l);var r=vi;if(r&&e){var c=Gl(r).hoistableStyles,h=Si(e);t=t||"default";var y=c.get(h);if(!y){var v={loading:0,preload:null};if(y=r.querySelector(Sa(h)))v.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Wt.get(h))&&qc(e,l);var C=y=r.createElement("link");ut(C),mt(C,"link",e),C._p=new Promise(function(M,G){C.onload=M,C.onerror=G}),C.addEventListener("load",function(){v.loading|=1}),C.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Wr(y,t,r)}y={type:"stylesheet",instance:y,count:1,state:v},c.set(h,y)}}}function j0(e,t){Ln.X(e,t);var l=vi;if(l&&e){var r=Gl(l).hoistableScripts,c=ki(e),h=r.get(c);h||(h=l.querySelector(ka(c)),h||(e=g({src:e,async:!0},t),(t=Wt.get(c))&&Yc(e,t),h=l.createElement("script"),ut(h),mt(h,"link",e),l.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function L0(e,t){Ln.M(e,t);var l=vi;if(l&&e){var r=Gl(l).hoistableScripts,c=ki(e),h=r.get(c);h||(h=l.querySelector(ka(c)),h||(e=g({src:e,async:!0,type:"module"},t),(t=Wt.get(c))&&Yc(e,t),h=l.createElement("script"),ut(h),mt(h,"link",e),l.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function Ud(e,t,l,r){var c=(c=ce.current)?Pr(c):null;if(!c)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Si(l.href),l=Gl(c).hoistableStyles,r=l.get(t),r||(r={type:"style",instance:null,count:0,state:null},l.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Si(l.href);var h=Gl(c).hoistableStyles,y=h.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=c.querySelector(Sa(e)))&&!h._p&&(y.instance=h,y.state.loading=5),Wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wt.set(e,l),h||U0(c,e,l,y.state))),t&&r===null)throw Error(u(528,""));return y}if(t&&r!==null)throw Error(u(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ki(l),l=Gl(c).hoistableScripts,r=l.get(t),r||(r={type:"script",instance:null,count:0,state:null},l.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Si(e){return'href="'+Qt(e)+'"'}function Sa(e){return'link[rel="stylesheet"]['+e+"]"}function Bd(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function U0(e,t,l,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),mt(t,"link",l),ut(t),e.head.appendChild(t))}function ki(e){return'[src="'+Qt(e)+'"]'}function ka(e){return"script[async]"+e}function Hd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Qt(l.href)+'"]');if(r)return t.instance=r,ut(r),r;var c=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ut(r),mt(r,"style",c),Wr(r,l.precedence,e),t.instance=r;case"stylesheet":c=Si(l.href);var h=e.querySelector(Sa(c));if(h)return t.state.loading|=4,t.instance=h,ut(h),h;r=Bd(l),(c=Wt.get(c))&&qc(r,c),h=(e.ownerDocument||e).createElement("link"),ut(h);var y=h;return y._p=new Promise(function(v,C){y.onload=v,y.onerror=C}),mt(h,"link",r),t.state.loading|=4,Wr(h,l.precedence,e),t.instance=h;case"script":return h=ki(l.src),(c=e.querySelector(ka(h)))?(t.instance=c,ut(c),c):(r=l,(c=Wt.get(h))&&(r=g({},l),Yc(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),ut(c),mt(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Wr(r,l.precedence,e));return t.instance}function Wr(e,t,l){for(var r=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,h=c,y=0;y<r.length;y++){var v=r[y];if(v.dataset.precedence===t)h=v;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eu=null;function qd(e,t,l){if(eu===null){var r=new Map,c=eu=new Map;c.set(l,r)}else c=eu,r=c.get(l),r||(r=new Map,c.set(l,r));if(r.has(e))return r;for(r.set(e,null),l=l.getElementsByTagName(e),c=0;c<l.length;c++){var h=l[c];if(!(h[Bi]||h[ct]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(t)||"";y=e+y;var v=r.get(y);v?v.push(h):r.set(y,[h])}}return r}function Yd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function B0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function H0(e,t,l,r){if(l.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var c=Si(r.href),h=t.querySelector(Sa(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=h,ut(h);return}h=t.ownerDocument||t,r=Bd(r),(c=Wt.get(c))&&qc(r,c),h=h.createElement("link"),ut(h);var y=h;y._p=new Promise(function(v,C){y.onload=v,y.onerror=C}),mt(h,"link",r),l.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=tu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Vc=0;function q0(e,t){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var r=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+t);0<e.imgBytes&&Vc===0&&(Vc=62500*v0());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Vc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nu=null;function lu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nu=new Map,t.forEach(Y0,e),nu=null,tu.call(e))}function Y0(e,t){if(!(t.state.loading&4)){var l=nu.get(e);if(l)var r=l.get(null);else{l=new Map,nu.set(e,l);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(l.set(y.dataset.precedence,y),r=y)}r&&l.set(null,r)}c=t.instance,y=c.getAttribute("data-precedence"),h=l.get(y)||r,h===r&&l.set(null,c),l.set(y,c),this.count++,r=tu.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Ea={$$typeof:B,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function V0(e,t,l,r,c,h,y,v,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.hiddenUpdates=Lu(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Gd(e,t,l,r,c,h,y,v,C,M,G,F){return e=new V0(e,t,l,y,C,M,G,F,v),t=1,h===!0&&(t|=24),h=Mt(3,null,null,t),e.current=h,h.stateNode=e,t=So(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:r,isDehydrated:l,cache:t},To(h),e}function Xd(e){return e?(e=Wl,e):Wl}function Qd(e,t,l,r,c,h){c=Xd(c),r.context===null?r.context=c:r.pendingContext=c,r=Jn(t),r.payload={element:l},h=h===void 0?null:h,h!==null&&(r.callback=h),l=In(e,r,t),l!==null&&(Nt(l,e,t),ta(l,e,t))}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Gc(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function Fd(e){if(e.tag===13||e.tag===31){var t=xl(e,67108864);t!==null&&Nt(t,e,67108864),Gc(e,67108864)}}function Kd(e){if(e.tag===13||e.tag===31){var t=Ht();t=Uu(t);var l=xl(e,t);l!==null&&Nt(l,e,t),Gc(e,t)}}var iu=!0;function G0(e,t,l,r){var c=L.T;L.T=null;var h=K.p;try{K.p=2,Xc(e,t,l,r)}finally{K.p=h,L.T=c}}function X0(e,t,l,r){var c=L.T;L.T=null;var h=K.p;try{K.p=8,Xc(e,t,l,r)}finally{K.p=h,L.T=c}}function Xc(e,t,l,r){if(iu){var c=Qc(r);if(c===null)Dc(e,t,r,au,l),Id(e,r);else if(Z0(c,e,t,l,r))r.stopPropagation();else if(Id(e,r),t&4&&-1<Q0.indexOf(e)){for(;c!==null;){var h=Vl(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=dl(h.pendingLanes);if(y!==0){var v=h;for(v.pendingLanes|=2,v.entangledLanes|=2;y;){var C=1<<31-Ye(y);v.entanglements[1]|=C,y&=~C}fn(h),(Re&6)===0&&(Yr=yt()+500,ya(0))}}break;case 31:case 13:v=xl(h,2),v!==null&&Nt(v,h,2),Gr(),Gc(h,2)}if(h=Qc(r),h===null&&Dc(e,t,r,au,l),h===c)break;c=h}c!==null&&r.stopPropagation()}else Dc(e,t,r,null,l)}}function Qc(e){return e=Zu(e),Zc(e)}var au=null;function Zc(e){if(au=null,e=Yl(e),e!==null){var t=s(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=f(t),e!==null)return e;e=null}else if(l===31){if(e=m(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return au=e,null}function Jd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ju()){case Q:return 2;case $:return 8;case pe:case ke:return 32;case Me:return 268435456;default:return 32}default:return 32}}var Fc=!1,ul=null,ol=null,cl=null,wa=new Map,Ta=new Map,sl=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Id(e,t){switch(e){case"focusin":case"focusout":ul=null;break;case"dragenter":case"dragleave":ol=null;break;case"mouseover":case"mouseout":cl=null;break;case"pointerover":case"pointerout":wa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(t.pointerId)}}function Ca(e,t,l,r,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:l,eventSystemFlags:r,nativeEvent:h,targetContainers:[c]},t!==null&&(t=Vl(t),t!==null&&Fd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Z0(e,t,l,r,c){switch(t){case"focusin":return ul=Ca(ul,e,t,l,r,c),!0;case"dragenter":return ol=Ca(ol,e,t,l,r,c),!0;case"mouseover":return cl=Ca(cl,e,t,l,r,c),!0;case"pointerover":var h=c.pointerId;return wa.set(h,Ca(wa.get(h)||null,e,t,l,r,c)),!0;case"gotpointercapture":return h=c.pointerId,Ta.set(h,Ca(Ta.get(h)||null,e,t,l,r,c)),!0}return!1}function $d(e){var t=Yl(e.target);if(t!==null){var l=s(t);if(l!==null){if(t=l.tag,t===13){if(t=f(l),t!==null){e.blockedOn=t,ff(e.priority,function(){Kd(l)});return}}else if(t===31){if(t=m(l),t!==null){e.blockedOn=t,ff(e.priority,function(){Kd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ru(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Qc(e.nativeEvent);if(l===null){l=e.nativeEvent;var r=new l.constructor(l.type,l);Qu=r,l.target.dispatchEvent(r),Qu=null}else return t=Vl(l),t!==null&&Fd(t),e.blockedOn=l,!1;t.shift()}return!0}function Pd(e,t,l){ru(e)&&l.delete(t)}function F0(){Fc=!1,ul!==null&&ru(ul)&&(ul=null),ol!==null&&ru(ol)&&(ol=null),cl!==null&&ru(cl)&&(cl=null),wa.forEach(Pd),Ta.forEach(Pd)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,F0)))}var ou=null;function Wd(e){ou!==e&&(ou=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ou===e&&(ou=null);for(var t=0;t<e.length;t+=3){var l=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(Zc(r||l)===null)continue;break}var h=Vl(l);h!==null&&(e.splice(t,3),t-=3,Qo(h,{pending:!0,data:c,method:l.method,action:r},r,c))}}))}function Ei(e){function t(C){return uu(C,e)}ul!==null&&uu(ul,e),ol!==null&&uu(ol,e),cl!==null&&uu(cl,e),wa.forEach(t),Ta.forEach(t);for(var l=0;l<sl.length;l++){var r=sl[l];r.blockedOn===e&&(r.blockedOn=null)}for(;0<sl.length&&(l=sl[0],l.blockedOn===null);)$d(l),l.blockedOn===null&&sl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(r=0;r<l.length;r+=3){var c=l[r],h=l[r+1],y=c[Et]||null;if(typeof h=="function")y||Wd(l);else if(y){var v=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[Et]||null)v=y.formAction;else if(Zc(c)!==null)continue}else v=y.action;typeof v=="function"?l[r+1]=v:(l.splice(r,3),r-=3),Wd(l)}}}function ep(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),r||setTimeout(l,20)}function l(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Kc(e){this._internalRoot=e}cu.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var l=t.current,r=Ht();Qd(l,r,e,t,null,null)},cu.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qd(e.current,2,null,e,null,null),Gr(),t[ql]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<sl.length&&t!==0&&t<sl[l].priority;l++);sl.splice(l,0,e),l===0&&$d(e)}};var tp=a.version;if(tp!=="19.2.0")throw Error(u(527,tp,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=p(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var K0={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{bt=su.inject(K0),at=su}catch{}}return za.createRoot=function(e,t){if(!o(e))throw Error(u(299));var l=!1,r="",c=om,h=cm,y=sm;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=Gd(e,1,!1,null,null,l,r,null,c,h,y,ep),e[ql]=t.current,Nc(e),new Kc(t)},za.hydrateRoot=function(e,t,l){if(!o(e))throw Error(u(299));var r=!1,c="",h=om,y=cm,v=sm,C=null;return l!=null&&(l.unstable_strictMode===!0&&(r=!0),l.identifierPrefix!==void 0&&(c=l.identifierPrefix),l.onUncaughtError!==void 0&&(h=l.onUncaughtError),l.onCaughtError!==void 0&&(y=l.onCaughtError),l.onRecoverableError!==void 0&&(v=l.onRecoverableError),l.formState!==void 0&&(C=l.formState)),t=Gd(e,1,!0,t,l??null,r,c,C,h,y,v,ep),t.context=Xd(null),l=t.current,r=Ht(),r=Uu(r),c=Jn(r),c.callback=null,In(l,c,r),l=r,t.current.lanes=l,Ui(t,l),fn(t),e[ql]=t.current,Nc(e),new cu(t)},za.version="19.2.0",za}var fp;function ib(){if(fp)return $c.exports;fp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),$c.exports=lb(),$c.exports}var ab=ib();var hp="popstate";function rb(n={}){function a(o,s){let{pathname:f="/",search:m="",hash:d=""}=Ml(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),vs("",{pathname:f,search:m,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(o,s){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let d=o.location.href,p=d.indexOf("#");m=p===-1?d:d.slice(0,p)}return m+"#"+(typeof s=="string"?s:Ua(s))}function u(o,s){Vt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return ob(a,i,u,n)}function Je(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function Vt(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function ub(){return Math.random().toString(36).substring(2,10)}function mp(n,a){return{usr:n.state,key:n.key,idx:a}}function vs(n,a,i=null,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?Ml(a):a,state:i,key:a&&a.key||u||ub()}}function Ua({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Ml(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let u=n.indexOf("?");u>=0&&(a.search=n.substring(u),n=n.substring(0,u)),n&&(a.pathname=n)}return a}function ob(n,a,i,u={}){let{window:o=document.defaultView,v5Compat:s=!1}=u,f=o.history,m="POP",d=null,p=b();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function b(){return(f.state||{idx:null}).idx}function g(){m="POP";let O=b(),N=O==null?null:O-p;p=O,d&&d({action:m,location:_.location,delta:N})}function S(O,N){m="PUSH";let H=vs(_.location,O,N);i&&i(H,O),p=b()+1;let B=mp(H,p),ne=_.createHref(H);try{f.pushState(B,"",ne)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;o.location.assign(ne)}s&&d&&d({action:m,location:_.location,delta:1})}function x(O,N){m="REPLACE";let H=vs(_.location,O,N);i&&i(H,O),p=b();let B=mp(H,p),ne=_.createHref(H);f.replaceState(B,"",ne),s&&d&&d({action:m,location:_.location,delta:0})}function w(O){return cb(O)}let _={get action(){return m},get location(){return n(o,f)},listen(O){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(hp,g),d=O,()=>{o.removeEventListener(hp,g),d=null}},createHref(O){return a(o,O)},createURL:w,encodeLocation(O){let N=w(O);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:S,replace:x,go(O){return f.go(O)}};return _}function cb(n,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Je(i,"No window.location.(origin|href) available to create URL");let u=typeof n=="string"?n:Ua(n);return u=u.replace(/ $/,"%20"),!a&&u.startsWith("//")&&(u=i+u),new URL(u,i)}function mg(n,a,i="/"){return sb(n,a,i,!1)}function sb(n,a,i,u){let o=typeof a=="string"?Ml(a):a,s=Bn(o.pathname||"/",i);if(s==null)return null;let f=dg(n);fb(f);let m=null;for(let d=0;m==null&&d<f.length;++d){let p=kb(s);m=vb(f[d],p,u)}return m}function dg(n,a=[],i=[],u="",o=!1){let s=(f,m,d=o,p)=>{let b={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(u)&&d)return;Je(b.relativePath.startsWith(u),`Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(u.length)}let g=Un([u,b.relativePath]),S=i.concat(b);f.children&&f.children.length>0&&(Je(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),dg(f.children,a,S,g,d)),!(f.path==null&&!f.index)&&a.push({path:g,score:bb(g,f.index),routesMeta:S})};return n.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))s(f,m);else for(let d of pg(f.path))s(f,m,!0,d)}),a}function pg(n){let a=n.split("/");if(a.length===0)return[];let[i,...u]=a,o=i.endsWith("?"),s=i.replace(/\?$/,"");if(u.length===0)return o?[s,""]:[s];let f=pg(u.join("/")),m=[];return m.push(...f.map(d=>d===""?s:[s,d].join("/"))),o&&m.push(...f),m.map(d=>n.startsWith("/")&&d===""?"/":d)}function fb(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:xb(a.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var hb=/^:[\w-]+$/,mb=3,db=2,pb=1,gb=10,yb=-2,dp=n=>n==="*";function bb(n,a){let i=n.split("/"),u=i.length;return i.some(dp)&&(u+=yb),a&&(u+=db),i.filter(o=>!dp(o)).reduce((o,s)=>o+(hb.test(s)?mb:s===""?pb:gb),u)}function xb(n,a){return n.length===a.length&&n.slice(0,-1).every((u,o)=>u===a[o])?n[n.length-1]-a[a.length-1]:0}function vb(n,a,i=!1){let{routesMeta:u}=n,o={},s="/",f=[];for(let m=0;m<u.length;++m){let d=u[m],p=m===u.length-1,b=s==="/"?a:a.slice(s.length)||"/",g=xu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},b),S=d.route;if(!g&&p&&i&&!u[u.length-1].route.index&&(g=xu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},b)),!g)return null;Object.assign(o,g.params),f.push({params:o,pathname:Un([s,g.pathname]),pathnameBase:Ab(Un([s,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(s=Un([s,g.pathnameBase]))}return f}function xu(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,u]=Sb(n.path,n.caseSensitive,n.end),o=a.match(i);if(!o)return null;let s=o[0],f=s.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:u.reduce((p,{paramName:b,isOptional:g},S)=>{if(b==="*"){let w=m[S]||"";f=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=m[S];return g&&!x?p[b]=void 0:p[b]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:f,pattern:n}}function Sb(n,a=!1,i=!0){Vt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,d)=>(u.push({paramName:m,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(u.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,a?void 0:"i"),u]}function kb(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Vt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function Bn(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,u=n.charAt(i);return u&&u!=="/"?null:n.slice(i)||"/"}var Eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wb=n=>Eb.test(n);function Tb(n,a="/"){let{pathname:i,search:u="",hash:o=""}=typeof n=="string"?Ml(n):n,s;if(i)if(wb(i))s=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Vt(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?s=pp(i.substring(1),"/"):s=pp(i,a)}else s=a;return{pathname:s,search:zb(u),hash:Nb(o)}}function pp(n,a){let i=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function ts(n,a,i,u){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cb(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function gg(n){let a=Cb(n);return a.map((i,u)=>u===a.length-1?i.pathname:i.pathnameBase)}function yg(n,a,i,u=!1){let o;typeof n=="string"?o=Ml(n):(o={...n},Je(!o.pathname||!o.pathname.includes("?"),ts("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),ts("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),ts("#","search","hash",o)));let s=n===""||o.pathname==="",f=s?"/":o.pathname,m;if(f==null)m=i;else{let g=a.length-1;if(!u&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),g-=1;o.pathname=S.join("/")}m=g>=0?a[g]:"/"}let d=Tb(o,m),p=f&&f!=="/"&&f.endsWith("/"),b=(s||f===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||b)&&(d.pathname+="/"),d}var Un=n=>n.join("/").replace(/\/\/+/g,"/"),Ab=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),zb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Nb=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Db(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var bg=["POST","PUT","PATCH","DELETE"];new Set(bg);var _b=["GET",...bg];new Set(_b);var _i=Y.createContext(null);_i.displayName="DataRouter";var wu=Y.createContext(null);wu.displayName="DataRouterState";Y.createContext(!1);var xg=Y.createContext({isTransitioning:!1});xg.displayName="ViewTransition";var Ob=Y.createContext(new Map);Ob.displayName="Fetchers";var Rb=Y.createContext(null);Rb.displayName="Await";var mn=Y.createContext(null);mn.displayName="Navigation";var qa=Y.createContext(null);qa.displayName="Location";var dn=Y.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var js=Y.createContext(null);js.displayName="RouteError";function Mb(n,{relative:a}={}){Je(Ya(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=Y.useContext(mn),{hash:o,pathname:s,search:f}=Va(n,{relative:a}),m=s;return i!=="/"&&(m=s==="/"?i:Un([i,s])),u.createHref({pathname:m,search:f,hash:o})}function Ya(){return Y.useContext(qa)!=null}function un(){return Je(Ya(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(qa).location}var vg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sg(n){Y.useContext(mn).static||Y.useLayoutEffect(n)}function Tu(){let{isDataRoute:n}=Y.useContext(dn);return n?Kb():jb()}function jb(){Je(Ya(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(_i),{basename:a,navigator:i}=Y.useContext(mn),{matches:u}=Y.useContext(dn),{pathname:o}=un(),s=JSON.stringify(gg(u)),f=Y.useRef(!1);return Sg(()=>{f.current=!0}),Y.useCallback((d,p={})=>{if(Vt(f.current,vg),!f.current)return;if(typeof d=="number"){i.go(d);return}let b=yg(d,JSON.parse(s),o,p.relative==="path");n==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:Un([a,b.pathname])),(p.replace?i.replace:i.push)(b,p.state,p)},[a,i,s,o,n])}Y.createContext(null);function Lb(){let{matches:n}=Y.useContext(dn),a=n[n.length-1];return a?a.params:{}}function Va(n,{relative:a}={}){let{matches:i}=Y.useContext(dn),{pathname:u}=un(),o=JSON.stringify(gg(i));return Y.useMemo(()=>yg(n,JSON.parse(o),u,a==="path"),[n,o,u,a])}function Ub(n,a){return kg(n,a)}function kg(n,a,i,u,o){Je(Ya(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=Y.useContext(mn),{matches:f}=Y.useContext(dn),m=f[f.length-1],d=m?m.params:{},p=m?m.pathname:"/",b=m?m.pathnameBase:"/",g=m&&m.route;{let H=g&&g.path||"";Eg(p,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let S=un(),x;if(a){let H=typeof a=="string"?Ml(a):a;Je(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),x=H}else x=S;let w=x.pathname||"/",_=w;if(b!=="/"){let H=b.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(H.length).join("/")}let O=mg(n,{pathname:_});Vt(g||O!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Vt(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=Vb(O&&O.map(H=>Object.assign({},H,{params:Object.assign({},d,H.params),pathname:Un([b,s.encodeLocation?s.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:Un([b,s.encodeLocation?s.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),f,i,u,o);return a&&N?Y.createElement(qa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},N):N}function Bb(){let n=Fb(),a=Db(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:u},s={padding:"2px 4px",backgroundColor:u},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:s},"ErrorBoundary")," or"," ",Y.createElement("code",{style:s},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},a),i?Y.createElement("pre",{style:o},i):null,f)}var Hb=Y.createElement(Bb,null),qb=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?Y.createElement(dn.Provider,{value:this.props.routeContext},Y.createElement(js.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yb({routeContext:n,match:a,children:i}){let u=Y.useContext(_i);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),Y.createElement(dn.Provider,{value:n},i)}function Vb(n,a=[],i=null,u=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(a.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let s=n,f=i?.errors;if(f!=null){let b=s.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Je(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),s=s.slice(0,Math.min(s.length,b+1))}let m=!1,d=-1;if(i)for(let b=0;b<s.length;b++){let g=s[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=b),g.route.id){let{loaderData:S,errors:x}=i,w=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||w){m=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}let p=i&&u?(b,g)=>{u(b,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:g})}:void 0;return s.reduceRight((b,g,S)=>{let x,w=!1,_=null,O=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,_=g.route.errorElement||Hb,m&&(d<0&&S===0?(Eg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,O=null):d===S&&(w=!0,O=g.route.hydrateFallbackElement||null)));let N=a.concat(s.slice(0,S+1)),H=()=>{let B;return x?B=_:w?B=O:g.route.Component?B=Y.createElement(g.route.Component,null):g.route.element?B=g.route.element:B=b,Y.createElement(Yb,{match:g,routeContext:{outlet:b,matches:N,isDataRoute:i!=null},children:B})};return i&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?Y.createElement(qb,{location:i.location,revalidation:i.revalidation,component:_,error:x,children:H(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:p}):H()},null)}function Ls(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gb(n){let a=Y.useContext(_i);return Je(a,Ls(n)),a}function Xb(n){let a=Y.useContext(wu);return Je(a,Ls(n)),a}function Qb(n){let a=Y.useContext(dn);return Je(a,Ls(n)),a}function Us(n){let a=Qb(n),i=a.matches[a.matches.length-1];return Je(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function Zb(){return Us("useRouteId")}function Fb(){let n=Y.useContext(js),a=Xb("useRouteError"),i=Us("useRouteError");return n!==void 0?n:a.errors?.[i]}function Kb(){let{router:n}=Gb("useNavigate"),a=Us("useNavigate"),i=Y.useRef(!1);return Sg(()=>{i.current=!0}),Y.useCallback(async(o,s={})=>{Vt(i.current,vg),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:a,...s}))},[n,a])}var gp={};function Eg(n,a,i){!a&&!gp[n]&&(gp[n]=!0,Vt(!1,i))}Y.memo(Jb);function Jb({routes:n,future:a,state:i,unstable_onError:u}){return kg(n,void 0,i,u,a)}function Ci(n){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ib({basename:n="/",children:a=null,location:i,navigationType:u="POP",navigator:o,static:s=!1}){Je(!Ya(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),m=Y.useMemo(()=>({basename:f,navigator:o,static:s,future:{}}),[f,o,s]);typeof i=="string"&&(i=Ml(i));let{pathname:d="/",search:p="",hash:b="",state:g=null,key:S="default"}=i,x=Y.useMemo(()=>{let w=Bn(d,f);return w==null?null:{location:{pathname:w,search:p,hash:b,state:g,key:S},navigationType:u}},[f,d,p,b,g,S,u]);return Vt(x!=null,`<Router basename="${f}"> is not able to match the URL "${d}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:Y.createElement(mn.Provider,{value:m},Y.createElement(qa.Provider,{children:a,value:x}))}function $b({children:n,location:a}){return Ub(Ss(n),a)}function Ss(n,a=[]){let i=[];return Y.Children.forEach(n,(u,o)=>{if(!Y.isValidElement(u))return;let s=[...a,o];if(u.type===Y.Fragment){i.push.apply(i,Ss(u.props.children,s));return}Je(u.type===Ci,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!u.props.index||!u.props.children,"An index route cannot have child routes.");let f={id:u.props.id||s.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=Ss(u.props.children,s)),i.push(f)}),i}var gu="get",yu="application/x-www-form-urlencoded";function Cu(n){return n!=null&&typeof n.tagName=="string"}function Pb(n){return Cu(n)&&n.tagName.toLowerCase()==="button"}function Wb(n){return Cu(n)&&n.tagName.toLowerCase()==="form"}function ex(n){return Cu(n)&&n.tagName.toLowerCase()==="input"}function tx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function nx(n,a){return n.button===0&&(!a||a==="_self")&&!tx(n)}function ks(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((a,i)=>{let u=n[i];return a.concat(Array.isArray(u)?u.map(o=>[i,o]):[[i,u]])},[]))}function lx(n,a){let i=ks(n);return a&&a.forEach((u,o)=>{i.has(o)||a.getAll(o).forEach(s=>{i.append(o,s)})}),i}var fu=null;function ix(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var ax=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ns(n){return n!=null&&!ax.has(n)?(Vt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yu}"`),null):n}function rx(n,a){let i,u,o,s,f;if(Wb(n)){let m=n.getAttribute("action");u=m?Bn(m,a):null,i=n.getAttribute("method")||gu,o=ns(n.getAttribute("enctype"))||yu,s=new FormData(n)}else if(Pb(n)||ex(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=n.getAttribute("formaction")||m.getAttribute("action");if(u=d?Bn(d,a):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||gu,o=ns(n.getAttribute("formenctype"))||ns(m.getAttribute("enctype"))||yu,s=new FormData(m,n),!ix()){let{name:p,type:b,value:g}=n;if(b==="image"){let S=p?`${p}.`:"";s.append(`${S}x`,"0"),s.append(`${S}y`,"0")}else p&&s.append(p,g)}}else{if(Cu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=gu,u=null,o=yu,f=n}return s&&o==="text/plain"&&(f=s,s=void 0),{action:u,method:i.toLowerCase(),encType:o,formData:s,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bs(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function ux(n,a,i){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return u.pathname==="/"?u.pathname=`_root.${i}`:a&&Bn(u.pathname,a)==="/"?u.pathname=`${a.replace(/\/$/,"")}/_root.${i}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${i}`,u}async function ox(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sx(n,a,i){let u=await Promise.all(n.map(async o=>{let s=a.routes[o.route.id];if(s){let f=await ox(s,i);return f.links?f.links():[]}return[]}));return dx(u.flat(1).filter(cx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function yp(n,a,i,u,o,s){let f=(d,p)=>i[p]?d.route.id!==i[p].route.id:!0,m=(d,p)=>i[p].pathname!==d.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==d.params["*"];return s==="assets"?a.filter((d,p)=>f(d,p)||m(d,p)):s==="data"?a.filter((d,p)=>{let b=u.routes[d.route.id];if(!b||!b.hasLoader)return!1;if(f(d,p)||m(d,p))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function fx(n,a,{includeHydrateFallback:i}={}){return hx(n.map(u=>{let o=a.routes[u.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function hx(n){return[...new Set(n)]}function mx(n){let a={},i=Object.keys(n).sort();for(let u of i)a[u]=n[u];return a}function dx(n,a){let i=new Set;return new Set(a),n.reduce((u,o)=>{let s=JSON.stringify(mx(o));return i.has(s)||(i.add(s),u.push({key:s,link:o})),u},[])}function wg(){let n=Y.useContext(_i);return Bs(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function px(){let n=Y.useContext(wu);return Bs(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Hs=Y.createContext(void 0);Hs.displayName="FrameworkContext";function Tg(){let n=Y.useContext(Hs);return Bs(n,"You must render this element inside a <HydratedRouter> element"),n}function gx(n,a){let i=Y.useContext(Hs),[u,o]=Y.useState(!1),[s,f]=Y.useState(!1),{onFocus:m,onBlur:d,onMouseEnter:p,onMouseLeave:b,onTouchStart:g}=a,S=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let _=N=>{N.forEach(H=>{f(H.isIntersecting)})},O=new IntersectionObserver(_,{threshold:.5});return S.current&&O.observe(S.current),()=>{O.disconnect()}}},[n]),Y.useEffect(()=>{if(u){let _=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(_)}}},[u]);let x=()=>{o(!0)},w=()=>{o(!1),f(!1)};return i?n!=="intent"?[s,S,{}]:[s,S,{onFocus:Na(m,x),onBlur:Na(d,w),onMouseEnter:Na(p,x),onMouseLeave:Na(b,w),onTouchStart:Na(g,x)}]:[!1,S,{}]}function Na(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function yx({page:n,...a}){let{router:i}=wg(),u=Y.useMemo(()=>mg(i.routes,n,i.basename),[i.routes,n,i.basename]);return u?Y.createElement(xx,{page:n,matches:u,...a}):null}function bx(n){let{manifest:a,routeModules:i}=Tg(),[u,o]=Y.useState([]);return Y.useEffect(()=>{let s=!1;return sx(n,a,i).then(f=>{s||o(f)}),()=>{s=!0}},[n,a,i]),u}function xx({page:n,matches:a,...i}){let u=un(),{manifest:o,routeModules:s}=Tg(),{basename:f}=wg(),{loaderData:m,matches:d}=px(),p=Y.useMemo(()=>yp(n,a,d,o,u,"data"),[n,a,d,o,u]),b=Y.useMemo(()=>yp(n,a,d,o,u,"assets"),[n,a,d,o,u]),g=Y.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let w=new Set,_=!1;if(a.forEach(N=>{let H=o.routes[N.route.id];!H||!H.hasLoader||(!p.some(B=>B.route.id===N.route.id)&&N.route.id in m&&s[N.route.id]?.shouldRevalidate||H.hasClientLoader?_=!0:w.add(N.route.id))}),w.size===0)return[];let O=ux(n,f,"data");return _&&w.size>0&&O.searchParams.set("_routes",a.filter(N=>w.has(N.route.id)).map(N=>N.route.id).join(",")),[O.pathname+O.search]},[f,m,u,o,p,a,n,s]),S=Y.useMemo(()=>fx(b,o),[b,o]),x=bx(b);return Y.createElement(Y.Fragment,null,g.map(w=>Y.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),S.map(w=>Y.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),x.map(({key:w,link:_})=>Y.createElement("link",{key:w,nonce:i.nonce,..._})))}function vx(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cg&&(window.__reactRouterVersion="7.9.6")}catch{}function Sx({basename:n,children:a,window:i}){let u=Y.useRef();u.current==null&&(u.current=rb({window:i,v5Compat:!0}));let o=u.current,[s,f]=Y.useState({action:o.action,location:o.location}),m=Y.useCallback(d=>{Y.startTransition(()=>f(d))},[f]);return Y.useLayoutEffect(()=>o.listen(m),[o,m]),Y.createElement(Ib,{basename:n,children:a,location:s.location,navigationType:s.action,navigator:o})}var Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,St=Y.forwardRef(function({onClick:a,discover:i="render",prefetch:u="none",relative:o,reloadDocument:s,replace:f,state:m,target:d,to:p,preventScrollReset:b,viewTransition:g,...S},x){let{basename:w}=Y.useContext(mn),_=typeof p=="string"&&Ag.test(p),O,N=!1;if(typeof p=="string"&&_&&(O=p,Cg))try{let oe=new URL(window.location.href),U=p.startsWith("//")?new URL(oe.protocol+p):new URL(p),ee=Bn(U.pathname,w);U.origin===oe.origin&&ee!=null?p=ee+U.search+U.hash:N=!0}catch{Vt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=Mb(p,{relative:o}),[B,ne,ie]=gx(u,S),V=Tx(p,{replace:f,state:m,target:d,preventScrollReset:b,relative:o,viewTransition:g});function P(oe){a&&a(oe),oe.defaultPrevented||V(oe)}let he=Y.createElement("a",{...S,...ie,href:O||H,onClick:N||s?a:P,ref:vx(x,ne),target:d,"data-discover":!_&&i==="render"?"true":void 0});return B&&!_?Y.createElement(Y.Fragment,null,he,Y.createElement(yx,{page:H})):he});St.displayName="Link";var kx=Y.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:u="",end:o=!1,style:s,to:f,viewTransition:m,children:d,...p},b){let g=Va(f,{relative:p.relative}),S=un(),x=Y.useContext(wu),{navigator:w,basename:_}=Y.useContext(mn),O=x!=null&&_x(g)&&m===!0,N=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,H=S.pathname,B=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(H=H.toLowerCase(),B=B?B.toLowerCase():null,N=N.toLowerCase()),B&&_&&(B=Bn(B,_)||B);const ne=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let ie=H===N||!o&&H.startsWith(N)&&H.charAt(ne)==="/",V=B!=null&&(B===N||!o&&B.startsWith(N)&&B.charAt(N.length)==="/"),P={isActive:ie,isPending:V,isTransitioning:O},he=ie?a:void 0,oe;typeof u=="function"?oe=u(P):oe=[u,ie?"active":null,V?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let U=typeof s=="function"?s(P):s;return Y.createElement(St,{...p,"aria-current":he,className:oe,ref:b,style:U,to:f,viewTransition:m},typeof d=="function"?d(P):d)});kx.displayName="NavLink";var Ex=Y.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:u,replace:o,state:s,method:f=gu,action:m,onSubmit:d,relative:p,preventScrollReset:b,viewTransition:g,...S},x)=>{let w=Nx(),_=Dx(m,{relative:p}),O=f.toLowerCase()==="get"?"get":"post",N=typeof m=="string"&&Ag.test(m),H=B=>{if(d&&d(B),B.defaultPrevented)return;B.preventDefault();let ne=B.nativeEvent.submitter,ie=ne?.getAttribute("formmethod")||f;w(ne||B.currentTarget,{fetcherKey:a,method:ie,navigate:i,replace:o,state:s,relative:p,preventScrollReset:b,viewTransition:g})};return Y.createElement("form",{ref:x,method:O,action:_,onSubmit:u?d:H,...S,"data-discover":!N&&n==="render"?"true":void 0})});Ex.displayName="Form";function wx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zg(n){let a=Y.useContext(_i);return Je(a,wx(n)),a}function Tx(n,{target:a,replace:i,state:u,preventScrollReset:o,relative:s,viewTransition:f}={}){let m=Tu(),d=un(),p=Va(n,{relative:s});return Y.useCallback(b=>{if(nx(b,a)){b.preventDefault();let g=i!==void 0?i:Ua(d)===Ua(p);m(n,{replace:g,state:u,preventScrollReset:o,relative:s,viewTransition:f})}},[d,m,p,i,u,a,n,o,s,f])}function Cx(n){Vt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=Y.useRef(ks(n)),i=Y.useRef(!1),u=un(),o=Y.useMemo(()=>lx(u.search,i.current?null:a.current),[u.search]),s=Tu(),f=Y.useCallback((m,d)=>{const p=ks(typeof m=="function"?m(new URLSearchParams(o)):m);i.current=!0,s("?"+p,d)},[s,o]);return[o,f]}var Ax=0,zx=()=>`__${String(++Ax)}__`;function Nx(){let{router:n}=zg("useSubmit"),{basename:a}=Y.useContext(mn),i=Zb();return Y.useCallback(async(u,o={})=>{let{action:s,method:f,encType:m,formData:d,body:p}=rx(u,a);if(o.navigate===!1){let b=o.fetcherKey||zx();await n.fetch(b,i,o.action||s,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await n.navigate(o.action||s,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,a,i])}function Dx(n,{relative:a}={}){let{basename:i}=Y.useContext(mn),u=Y.useContext(dn);Je(u,"useFormAction must be used inside a RouteContext");let[o]=u.matches.slice(-1),s={...Va(n||".",{relative:a})},f=un();if(n==null){s.search=f.search;let m=new URLSearchParams(s.search),d=m.getAll("index");if(d.some(b=>b==="")){m.delete("index"),d.filter(g=>g).forEach(g=>m.append("index",g));let b=m.toString();s.search=b?`?${b}`:""}}return(!n||n===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(s.pathname=s.pathname==="/"?i:Un([i,s.pathname])),Ua(s)}function _x(n,{relative:a}={}){let i=Y.useContext(xg);Je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=zg("useViewTransitionState"),o=Va(n,{relative:a});if(!i.isTransitioning)return!1;let s=Bn(i.currentLocation.pathname,u)||i.currentLocation.pathname,f=Bn(i.nextLocation.pathname,u)||i.nextLocation.pathname;return xu(o.pathname,f)!=null||xu(o.pathname,s)!=null}const Ox=()=>{const{pathname:n}=un();return Y.useEffect(()=>{window.scrollTo(0,0)},[n]),null},Rx=()=>k.jsx("div",{className:"fixed inset-0 pointer-events-none opacity-[0.08] z-50 mix-blend-overlay",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}});const Mx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jx=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,i,u)=>u?u.toUpperCase():i.toLowerCase()),bp=n=>{const a=jx(n);return a.charAt(0).toUpperCase()+a.slice(1)},Ng=(...n)=>n.filter((a,i,u)=>!!a&&a.trim()!==""&&u.indexOf(a)===i).join(" ").trim(),Lx=n=>{for(const a in n)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};var Ux={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Bx=Y.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:o="",children:s,iconNode:f,...m},d)=>Y.createElement("svg",{ref:d,...Ux,width:a,height:a,stroke:n,strokeWidth:u?Number(i)*24/Number(a):i,className:Ng("lucide",o),...!s&&!Lx(m)&&{"aria-hidden":"true"},...m},[...f.map(([p,b])=>Y.createElement(p,b)),...Array.isArray(s)?s:[s]]));const Hn=(n,a)=>{const i=Y.forwardRef(({className:u,...o},s)=>Y.createElement(Bx,{ref:s,iconNode:a,className:Ng(`lucide-${Mx(bp(n))}`,`lucide-${n}`,u),...o}));return i.displayName=bp(n),i};const Hx=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Au=Hn("arrow-left",Hx);const qx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Yx=Hn("arrow-right",qx);const Vx=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Gx=Hn("arrow-up-right",Vx);const Xx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Qx=Hn("circle-question-mark",Xx);const Zx=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Fx=Hn("download",Zx);const Kx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Jx=Hn("file-text",Kx);const Ix=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Dg=Hn("search",Ix);const $x=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Px=Hn("user",$x);const Wx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_g=Hn("x",Wx),ev=({statusText:n=" ",brand:a="solarist",year:i="2025",onSearchClick:u,onHelpClick:o})=>{const s=un();return k.jsxs("header",{className:"fixed top-0 left-0 w-full border-b border-black bg-white z-40 flex justify-between items-center px-2 py-1 font-mono text-[10px] uppercase tracking-wider",children:[k.jsxs("div",{className:"flex gap-4 items-center",children:[k.jsx("span",{children:n}),k.jsxs("button",{onClick:u,className:"flex items-center gap-1 hover:bg-black hover:text-white px-2 py-1 transition-all group",title:"Press Ctrl+K to search",children:[k.jsx(Dg,{className:"w-3 h-3"}),k.jsx("span",{className:"hidden md:inline",children:"SEARCH"}),k.jsx("span",{className:"hidden lg:inline ml-1 text-[8px] opacity-50 group-hover:opacity-100",children:"⌘K"})]}),k.jsxs("button",{onClick:o,className:"flex items-center gap-1 hover:bg-black hover:text-white px-2 py-1 transition-all group",title:"Press ? for keyboard shortcuts",children:[k.jsx(Qx,{className:"w-3 h-3"}),k.jsx("span",{className:"hidden md:inline",children:"HELP"}),k.jsx("span",{className:"hidden lg:inline ml-1 text-[8px] opacity-50 group-hover:opacity-100",children:"?"})]})]}),k.jsxs("nav",{className:"flex items-center gap-3",children:[k.jsx(St,{to:"/",className:`hover:bg-black hover:text-white px-2 py-1 transition-all ${s.pathname==="/"?"bg-black text-white":""}`,children:"HOME"}),k.jsx(St,{to:"/archive",className:`hover:bg-black hover:text-white px-2 py-1 transition-all ${s.pathname==="/archive"?"bg-black text-white":""}`,children:"ARCHIVE"}),k.jsx(St,{to:"/about",className:`hover:bg-black hover:text-white px-2 py-1 transition-all ${s.pathname==="/about"?"bg-black text-white":""}`,children:"ABOUT"})]}),k.jsx("div",{className:"flex items-center gap-2",children:k.jsxs("span",{className:"hidden md:inline text-gray-400",children:["©",i," ",a]})})]})},tv=()=>k.jsxs("div",{className:"fixed left-0 top-0 bottom-0 w-12 border-r border-black flex flex-col justify-between items-center py-16 z-30 bg-white hidden md:flex",children:[k.jsx("div",{className:"w-[1px] h-full bg-black/10 relative",children:k.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black"})}),k.jsx("div",{className:"writing-mode-vertical rotate-180 font-mono text-xs tracking-[0.5em] uppercase bg-white py-4 z-10"}),k.jsx("div",{className:"w-[1px] h-full bg-black/10 relative",children:k.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black"})})]}),nv=({isOpen:n,onClose:a,posts:i})=>{const[u,o]=Y.useState(""),[s,f]=Y.useState([]),[m,d]=Y.useState(0),p=Tu(),b=Y.useRef(null);Y.useEffect(()=>{n&&b.current&&(b.current.focus(),o(""),f([]),d(0))},[n]),Y.useEffect(()=>{if(!u.trim()){f([]),d(0);return}const x=u.toLowerCase(),w=i.filter(_=>{const O=_.title.toLowerCase().includes(x),N=_.tag?.toLowerCase().includes(x),H=_.content?.toLowerCase().includes(x);return O||N||H});f(w.slice(0,10)),d(0)},[u,i]),Y.useEffect(()=>{if(!n)return;const x=w=>{if((w.ctrlKey||w.metaKey)&&w.key==="k")return w.preventDefault(),w.stopPropagation(),!1;w.key==="Escape"?(w.preventDefault(),a()):w.key==="ArrowDown"?(w.preventDefault(),d(_=>Math.min(_+1,s.length-1))):w.key==="ArrowUp"?(w.preventDefault(),d(_=>Math.max(_-1,0))):w.key==="Enter"&&s.length>0&&(w.preventDefault(),g(s[m]))};return window.addEventListener("keydown",x,!0),()=>window.removeEventListener("keydown",x,!0)},[n,s,m,a]);const g=x=>{p(`/post/${x.id}`),a()},S=(x,w)=>w.trim()?x.split(new RegExp(`(${w})`,"gi")).map((O,N)=>O.toLowerCase()===w.toLowerCase()?k.jsx("mark",{className:"bg-black text-white",children:O},N):O):x;return n?k.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-[20vh] px-4",onClick:a,children:k.jsxs("div",{className:"w-full max-w-2xl bg-white border-4 border-black",onClick:x=>x.stopPropagation(),children:[k.jsxs("div",{className:"flex items-center border-b-2 border-black p-4",children:[k.jsx(Dg,{className:"w-5 h-5 mr-3"}),k.jsx("input",{ref:b,type:"text",value:u,onChange:x=>o(x.target.value),placeholder:"SEARCH ARTICLES...",className:"flex-1 bg-transparent outline-none font-mono text-lg uppercase placeholder:text-gray-400"}),k.jsx("button",{onClick:a,className:"ml-3 p-1 hover:bg-black hover:text-white transition-all",children:k.jsx(_g,{className:"w-5 h-5"})})]}),k.jsxs("div",{className:"px-4 py-2 bg-gray-50 border-b border-black font-mono text-xs text-gray-500",children:[k.jsx("span",{children:"↑↓ NAVIGATE"}),k.jsx("span",{className:"mx-4",children:"↵ SELECT"}),k.jsx("span",{children:"ESC CLOSE"})]}),k.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:u.trim()===""?k.jsx("div",{className:"p-8 text-center font-mono text-sm text-gray-500",children:"START TYPING TO SEARCH..."}):s.length===0?k.jsxs("div",{className:"p-8 text-center",children:[k.jsx("div",{className:"font-black text-2xl mb-2",children:"NO RESULTS"}),k.jsx("div",{className:"font-mono text-sm text-gray-500",children:"Try different keywords"})]}):k.jsx("div",{children:s.map((x,w)=>k.jsx("div",{onClick:()=>g(x),onMouseEnter:()=>d(w),className:`p-4 border-b border-black cursor-pointer transition-all ${w===m?"bg-black text-white":"hover:bg-gray-50"}`,children:k.jsxs("div",{className:"flex items-start justify-between gap-4",children:[k.jsxs("div",{className:"flex-1 min-w-0",children:[k.jsx("h3",{className:"font-black text-lg uppercase mb-1 break-words",children:S(x.title,u)}),k.jsxs("div",{className:"font-mono text-xs opacity-70 space-x-3",children:[k.jsx("span",{children:x.tag}),x.date&&k.jsx("span",{children:new Date(x.date).toISOString().split("T")[0]})]})]}),k.jsx(Yx,{className:"w-5 h-5 flex-shrink-0"})]})},x.id))})}),s.length>0&&k.jsxs("div",{className:"px-4 py-2 border-t-2 border-black bg-gray-50 font-mono text-xs text-gray-500",children:[s.length," RESULT",s.length!==1?"S":""," FOUND"]})]})}):null},lv=({isOpen:n,onClose:a})=>{if(!n)return null;const i=[{key:"↑ / ↓",description:"Navigate through articles"},{key:"Enter",description:"Open selected article"},{key:"Ctrl + K",description:"Open search (⌘K on Mac)"},{key:"H",description:"Go to home page"},{key:"A",description:"Go to archive page"},{key:"B",description:"Go to about page"},{key:"?",description:"Toggle this help menu"},{key:"Esc",description:"Close modals"}];return k.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4",onClick:a,children:k.jsxs("div",{className:"w-full max-w-xl bg-white border-4 border-black",onClick:u=>u.stopPropagation(),children:[k.jsxs("div",{className:"flex items-center justify-between border-b-2 border-black p-4 bg-gray-50",children:[k.jsx("h2",{className:"font-black text-2xl uppercase",children:"KEYBOARD SHORTCUTS"}),k.jsx("button",{onClick:a,className:"p-1 hover:bg-black hover:text-white transition-all",children:k.jsx(_g,{className:"w-5 h-5"})})]}),k.jsx("div",{className:"p-6",children:k.jsx("div",{className:"space-y-3",children:i.map((u,o)=>k.jsxs("div",{className:"flex items-center justify-between p-3 border-2 border-black hover:bg-gray-50 transition-all",children:[k.jsx("kbd",{className:"font-mono text-sm font-black px-3 py-1 bg-black text-white",children:u.key}),k.jsx("span",{className:"font-mono text-sm flex-1 ml-4",children:u.description})]},o))})}),k.jsx("div",{className:"border-t-2 border-black p-4 bg-gray-50",children:k.jsx("p",{className:"font-mono text-xs text-gray-500 text-center",children:"PRESS ESC OR ? TO CLOSE THIS MENU"})})]})})},iv=`---\r
title: archive\r
tag: 1, 2, 3\r
---\r
\r
# test\r
\r
`,av=`---\r
title: CV\r
special: true\r
type: default\r
---\r
\r
# Your Name\r
\r
**Position:** Software Engineer / Designer  \r
**Location:** Your City, Country  \r
**Email:** your-email@example.com  \r
**GitHub:** github.com/yourusername\r
\r
## Summary\r
\r
Brief professional summary. Describe your expertise, experience, and what you're passionate about.\r
\r
## Experience\r
\r
### Senior Developer\r
**Company Name** | 2022 - Present | City, Country\r
\r
- Key achievement or responsibility\r
- Another important accomplishment\r
- Technical skills utilized\r
\r
### Developer\r
**Previous Company** | 2020 - 2022 | City, Country\r
\r
- Key achievement or responsibility\r
- Another important accomplishment\r
\r
## Education\r
\r
**Degree Name**  \r
University Name | 2016 - 2020 | City, Country\r
\r
## Skills\r
\r
**Technical:**\r
- JavaScript / TypeScript\r
- React / Vue / Node.js\r
- Python / Go\r
- SQL / MongoDB\r
\r
**Tools:**\r
- Git / Docker\r
- AWS / GCP\r
- Design Systems\r
- Agile / Scrum\r
\r
## Projects\r
\r
### Project Name\r
Brief description of the project, your role, and the technologies used.\r
\r
**Tech:** React, Node.js, PostgreSQL\r
`,rv=`---\r
title: 文学示例\r
tags: essay, literature\r
type: literary\r
date: 2025-11-18\r
---\r
\r
# 春江花月夜\r
\r
春江潮水连海平，海上明月共潮生。\r
\r
滟滟随波千万里，何处春江无月明！\r
\r
这是一个使用文学样式的示例文章。使用 \`type: literary\` 会应用优雅的衬线字体和更大的行距。\r
\r
## 特点\r
\r
文学样式适合散文、诗歌等文艺作品，提供更加舒适的阅读体验。\r
\r
> 引用也会使用更优雅的样式，适合文学摘录。\r
`,uv=`---\r
title: 再别康桥\r
tags: poetry, 徐志摩\r
type: poetry\r
date: 1928-11-06\r
---\r
\r
# 再别康桥\r
\r
轻轻的我走了，\r
\r
正如我轻轻的来；\r
\r
我轻轻的招手，\r
\r
作别西天的云彩。\r
\r
那河畔的金柳，\r
\r
是夕阳中的新娘；\r
\r
波光里的艳影，\r
\r
在我的心头荡漾。\r
\r
软泥上的青荇，\r
\r
油油的在水底招摇；\r
\r
在康河的柔波里，\r
\r
我甘心做一条水草！\r
\r
那榆荫下的一潭，\r
\r
不是清泉，是天上虹；\r
\r
揉碎在浮藻间，\r
\r
沉淀着彩虹似的梦。\r
\r
寻梦？撑一支长篙，\r
\r
向青草更青处漫溯；\r
\r
满载一船星辉，\r
\r
在星辉斑斓里放歌。\r
\r
但我不能放歌，\r
\r
悄悄是别离的笙箫；\r
\r
夏虫也为我沉默，\r
\r
沉默是今晚的康桥！\r
\r
悄悄的我走了，\r
\r
正如我悄悄的来；\r
\r
我挥一挥衣袖，\r
\r
不带走一片云彩。\r
\r
---\r
\r
*作者：徐志摩*\r
\r
*写于1928年*\r
`,ov=`\r
# 一级标题\r
## 二级标题\r
### 三级标题\r
#### 四级标题\r
\r
---\r
\r
## 段落 / 换行\r
这是一个普通段落。  \r
这是一个带手动换行的段落（上行末尾有两个空格）。\r
\r
---\r
\r
## 字体样式\r
**粗体**  \r
*斜体*  \r
***粗斜体***  \r
~~删除线~~  \r
\`行内代码\`  \r
\r
---\r
\r
## 列表\r
### 无序列表\r
- 苹果\r
- 香蕉\r
- 葡萄\r
\r
### 有序列表\r
1. 第一项\r
2. 第二项\r
3. 第三项\r
\r
### 任务列表\r
- [x] 已完成  \r
- [ ] 未完成  \r
- [ ] 再来一个  \r
\r
---\r
\r
## 引用\r
> 这是一个引用段落  \r
> 可以多行  \r
>> 也可以嵌套引用\r
\r
---\r
\r
## 代码块\r
\r
\`\`\`js\r
function hello() {\r
  console.log("Hello Markdown!");\r
}\r
\`\`\`\r
\r
\`\`\`python\r
import math\r
print(math.pi)\r
\`\`\`\r
\r
---\r
\r
## 表格\r
\r
| 名称 | 数值  | 备注        |\r
| -- | --- | --------- |\r
| A  | 123 | 测试        |\r
| B  | 456 | **粗体也可以** |\r
| C  | 789 | *斜体也OK*   |\r
\r
---\r
\r
## 图片\r
\r
![测试图片-随机](https://picsum.photos/600/300)\r
\r
---\r
\r
## 超链接\r
\r
[访问 OpenAI](https://openai.com)\r
[https://example.com](https://example.com)\r
\r
---\r
\r
## 折叠内容（details）\r
\r
<details>\r
<summary>点击展开 / 折叠</summary>\r
\r
这是折叠内部的内容。\r
\r
* 支持列表\r
* 支持图片\r
* 支持代码块\r
\r
\`\`\`json\r
{ "msg": "hello" }\r
\`\`\`\r
\r
</details>\r
\r
---\r
\r
## 脚注示例\r
\r
Markdown 可以添加脚注[^1]，写起来很方便。\r
\r
[^1]: 这是脚注的内容。\r
\r
---\r
\r
## Mermaid 图示例\r
\r
\`\`\`mermaid\r
flowchart TD\r
    A[开始] --> B{条件?}\r
    B -->|是| C[执行 1]\r
    B -->|否| D[执行 2]\r
    C --> E[结束]\r
    D --> E[结束]\r
\`\`\`\r
\r
---\r
\r
## 数学公式（MathJax）\r
\r
行内： $E = mc^2$\r
块级：\r
\r
$$\r
\\int_0^\\infty x^2 e^{-x} , dx = 2\r
$$\r
\r
---\r
\r
## 水平分割线\r
\r
---\r
\r
\r
`,cv=`---\r
title: Test\r
tags: test, demo\r
type: technical\r
date: 2025-11-19\r
---\r
\r
# this is a test\r
\r
test\r
\r
能否实时更新？\r
\r
这是一个技术文档示例，使用了 \`type: technical\` 样式。`,sv=`---
title: "中华人民共和国仲裁法_中国人大网"
source: "http://www.npc.gov.cn/npc/c2/c30834/202509/t20250912_447762.html"
author:
published:
created: 2025-11-16
description:
tags:
  - "clippings"
type: legal
---
当前位置： [首页](http://www.npc.gov.cn/npc/ "首页")

## 中华人民共和国仲裁法

来源： 中国人大网 浏览字号： [大](http://www.npc.gov.cn/npc/c2/c30834/202509/#) [中](http://www.npc.gov.cn/npc/c2/c30834/202509/#) [小](http://www.npc.gov.cn/npc/c2/c30834/202509/#) 2025年09月12日 20:13

（1994年8月31日第八届全国人民代表大会常务委员会第九次会议通过　根据2009年8月27日第十一届全国人民代表大会常务委员会第十次会议《关于修改部分法律的决定》第一次修正　根据2017年9月1日第十二届全国人民代表大会常务委员会第二十九次会议《关于修改〈中华人民共和国法官法〉等八部法律的决定》第二次修正　2025年9月12日第十四届全国人民代表大会常务委员会第十七次会议修订）

目　　录

　　第一章　总　　则

　　第二章　仲裁机构、仲裁员和仲裁协会

　　第三章　仲裁协议

　　第四章　仲裁程序

第一节　申请和受理

第二节　仲裁庭的组成

第三节　开庭和裁决

　　第五章　申请撤销裁决

　　第六章　执　　行

　　第七章　涉外仲裁的特别规定

　　第八章　附　　则

第一章　总　　则

第一条 　为了保证公正、及时仲裁经济纠纷，保护当事人的合法权益，保障社会主义市场经济健康发展，制定本法。

第二条 　仲裁事业的发展贯彻落实中国共产党和国家的路线方针政策、决策部署，服务国家高质量发展和高水平对外开放，营造市场化、法治化、国际化营商环境，发挥化解经济纠纷的作用。

第三条 　平等主体的自然人、法人、非法人组织之间发生的合同纠纷和其他财产权益纠纷，可以仲裁。

　　下列纠纷不能仲裁：

　　（一）婚姻、收养、监护、扶养、继承纠纷；

　　（二）依法应当由行政机关处理的行政争议。

第四条 　当事人选择仲裁方式解决纠纷，应当遵循自愿原则，达成仲裁协议。没有仲裁协议，一方申请仲裁的，仲裁机构不予受理。

第五条 　当事人达成仲裁协议，一方向人民法院提起诉讼的，人民法院不予受理，但仲裁协议无效或者法律另有规定的除外。

第六条 　仲裁机构应当由当事人协议选定。

　　仲裁不实行级别管辖和地域管辖。

第七条 　仲裁应当根据事实，符合法律规定，公平合理地解决纠纷。

第八条 　仲裁应当遵循诚信原则。

第九条 　仲裁依法独立进行，不受行政机关、社会团体和个人的干涉。

第十条 　仲裁实行一裁终局的制度。裁决作出后，当事人就同一纠纷再申请仲裁或者向人民法院提起诉讼的，仲裁机构或者人民法院不予受理。

　　裁决被人民法院依法裁定撤销或者不予执行的，当事人就该纠纷可以根据双方重新达成的仲裁协议申请仲裁，也可以向人民法院提起诉讼。

第十一条 　仲裁活动可以通过信息网络在线进行，但当事人明确表示不同意的除外。

　　仲裁活动通过信息网络在线进行的，与线下仲裁活动具有同等法律效力。

第十二条 　国家支持仲裁机构加强与境外仲裁机构和有关国际组织的交流合作，积极参与国际仲裁规则的制定。

第二章　仲裁机构、仲裁员和仲裁协会

第十三条 　仲裁机构可以在直辖市和省、自治区人民政府所在地的市设立，也可以根据需要在其他设区的市设立，不按行政区划层层设立。

　　仲裁机构由前款规定的市的人民政府组织有关部门和商会统一组建，属于公益性非营利法人。

第十四条 　依据本法第十三条设立的仲裁机构，应当经省、自治区、直辖市人民政府司法行政部门登记。

　　经国务院批准由中国国际商会组织设立的仲裁机构向国务院司法行政部门备案。

　　仲裁机构登记管理的具体办法由国务院制定。

第十五条 　仲裁机构应当具备下列条件：

　　（一）有自己的名称、住所和章程；

　　（二）有必要的财产；

　　（三）有符合本法规定的组成人员；

　　（四）有聘任的仲裁员。

　　仲裁机构的章程应当依照本法制定。

第十六条 　仲裁机构变更名称、住所、章程、法定代表人、组成人员的，应当提出申请，依法办理变更登记。

　第十七条 　仲裁机构终止的，依法办理注销登记。

第十八条 　仲裁机构的组成人员包括主任一人、副主任二至四人和委员七至十一人。

　　仲裁机构的组成人员由法律、经济贸易、科学技术专家和有实际工作经验的人员担任。仲裁机构的组成人员中，法律、经济贸易、科学技术专家不得少于三分之二。

　　仲裁机构的组成人员每届任期五年，任期届满的应当依法换届，更换不少于三分之一的组成人员。

　第十九条 　仲裁机构应当依照法律法规和章程规定，建立健全内部治理结构，明确决策、执行、监督等方面的职责权限和程序。

　　仲裁机构应当建立健全民主议事、人员管理、收费与财务管理、文件管理、投诉处理等制度。

　　仲裁机构应当加强对组成人员、工作人员及仲裁员的监督，对其在仲裁活动中的违法违纪行为及时依法调查处理；需要追究法律责任的，及时移送有关机关予以处理。

第二十条 　仲裁机构应当建立信息公开制度，及时向社会公开章程、登记备案、仲裁规则、仲裁员名册、服务流程、收费标准、年度业务报告和财务报告等信息，主动接受社会监督。

第二十一条 　仲裁机构聘任的仲裁员应当公道正派，具备良好的专业素质，勤勉尽责，清正廉明，恪守职业道德。

第二十二条 　仲裁员应当符合下列条件之一：

　　（一）通过国家统一法律职业资格考试取得法律职业资格，从事仲裁工作满八年的；

　　（二）律师执业满八年的；

　　（三）曾任法官、检察官满八年的；

　　（四）从事法律研究、教学工作并具有高级职称的；

　　（五）具有法律知识，从事法律、经济贸易、海事海商、科学技术等专业工作，并具有高级职称或者具有同等专业水平的。

　　《中华人民共和国监察官法》、《中华人民共和国法官法》、《中华人民共和国检察官法》等法律规定有关公职人员不得兼任仲裁员的，依照其规定；其他公职人员兼任仲裁员的，应当遵守有关规定。

　　仲裁机构可以从具有法律、经济贸易、海事海商、科学技术等专门知识的境外人士中聘任仲裁员。

第二十三条 　仲裁机构按照不同专业设仲裁员名册。

　　仲裁员有被开除公职、吊销律师执业证书或者被撤销高级职称等不再具备担任仲裁员条件情形的，仲裁机构应当将其除名。

第二十四条 　仲裁机构独立于行政机关，与行政机关没有隶属关系。

　　仲裁机构之间没有隶属关系。

第二十五条 　中国仲裁协会是社会团体法人。仲裁机构是中国仲裁协会的会员。中国仲裁协会的章程由全国会员大会制定。

　　中国仲裁协会是仲裁机构的自律性组织，根据章程对仲裁机构及其组成人员、工作人员，以及仲裁员在仲裁活动中的行为进行监督。

　　中国仲裁协会依照本法和《中华人民共和国民事诉讼法》的有关规定制定示范仲裁规则。

第二十六条 　国务院司法行政部门依法指导、监督全国仲裁工作，完善相关工作制度，统筹规划仲裁事业发展。

　　省、自治区、直辖市人民政府司法行政部门依法指导、监督本行政区域内仲裁工作。

第三章　仲裁协议

第二十七条 　仲裁协议包括合同中订立的仲裁条款和以其他书面方式在纠纷发生前或者纠纷发生后达成的请求仲裁的协议。

　　仲裁协议应当具有下列内容：

　　（一）请求仲裁的意思表示；

　　（二）仲裁事项；

　　（三）选定的仲裁机构。

　　一方当事人在申请仲裁时主张有仲裁协议，另一方当事人在首次开庭前不予否认的，经仲裁庭提示并记录，视为当事人之间存在仲裁协议。

第二十八条 　有下列情形之一的，仲裁协议无效：

　　（一）约定的仲裁事项超出法律规定的仲裁范围；

　　（二）无民事行为能力人或者限制民事行为能力人订立的仲裁协议；

　　（三）一方采取胁迫手段，迫使对方订立仲裁协议。

第二十九条 　仲裁协议对仲裁事项或者仲裁机构没有约定或者约定不明确的，当事人可以补充协议；达不成补充协议的，仲裁协议无效。

第三十条 　仲裁协议独立存在。合同是否成立及其变更、不生效、终止、被撤销或者无效，不影响已经达成的仲裁协议的效力。

　　仲裁庭有权确认合同的效力。

第三十一条 　当事人对仲裁协议的效力有异议的，可以请求仲裁机构或者仲裁庭作出决定，也可以请求人民法院作出裁定。一方请求仲裁机构或者仲裁庭作出决定，另一方请求人民法院作出裁定的，由人民法院裁定。

　　当事人对仲裁协议的效力有异议，应当在仲裁庭首次开庭前提出。

第四章　仲裁程序

第一节　申请和受理

第三十二条 　当事人申请仲裁应当符合下列条件：

　　（一）有仲裁协议；

　　（二）有具体的仲裁请求和事实、理由；

　　（三）属于仲裁机构的受理范围。

第三十三条 　当事人申请仲裁，应当向仲裁机构递交仲裁协议、仲裁申请书及副本。

第三十四条 　仲裁申请书应当载明下列事项：

　　（一）当事人的姓名、性别、年龄、职业、工作单位、住所、联系方式，法人或者非法人组织的名称、住所和法定代表人或者主要负责人的姓名、职务、联系方式；

　　（二）仲裁请求和所根据的事实与理由；

　　（三）证据和证据来源，证人姓名和住所。

第三十五条 　仲裁机构收到仲裁申请书之日起五日内，认为符合受理条件的，应当受理，并通知申请人；认为不符合受理条件的，应当书面通知申请人不予受理，并说明理由。

第三十六条 　仲裁机构受理仲裁申请后，应当在仲裁规则规定的期限内将仲裁规则和仲裁员名册送达申请人，并将仲裁申请书副本和仲裁规则、仲裁员名册送达被申请人。

　　被申请人收到仲裁申请书副本后，应当在仲裁规则规定的期限内向仲裁机构提交答辩书。仲裁机构收到答辩书后，应当在仲裁规则规定的期限内将答辩书副本送达申请人。被申请人未提交答辩书的，不影响仲裁程序的进行。

第三十七条 　当事人达成仲裁协议，一方向人民法院提起诉讼未声明有仲裁协议，人民法院受理后，另一方在首次开庭前提交仲裁协议的，人民法院应当驳回起诉，但仲裁协议无效或者法律另有规定的除外；另一方在首次开庭前未对人民法院受理该案提出异议的，视为放弃仲裁协议，人民法院应当继续审理。

第三十八条 　申请人可以放弃或者变更仲裁请求。被申请人可以承认或者反驳仲裁请求，有权提出反请求。

第三十九条 　一方当事人因另一方当事人的行为或者其他原因，可能使裁决难以执行或者造成当事人其他损害的，可以申请财产保全、请求责令另一方当事人作出一定行为或者禁止其作出一定行为。当事人申请保全的，仲裁机构应当将当事人的申请依照《中华人民共和国民事诉讼法》的有关规定提交人民法院，人民法院应当依法及时处理。

　　因情况紧急，仲裁协议的当事人可以在申请仲裁前依照《中华人民共和国民事诉讼法》的有关规定向人民法院申请财产保全、请求责令另一方当事人作出一定行为或者禁止其作出一定行为。当事人申请保全的，人民法院应当依法及时处理。

　　申请有错误的，申请人应当赔偿被申请人因保全所遭受的损失。

第四十条 　当事人、法定代理人可以委托律师和其他代理人进行仲裁活动。委托律师和其他代理人进行仲裁活动的，应当向仲裁机构提交授权委托书。

第四十一条 　仲裁文件应当以当事人约定的合理方式送达；当事人没有约定或者约定不明确的，按照仲裁规则规定的方式送达。

第二节　仲裁庭的组成

第四十二条 　仲裁庭可以由三名仲裁员或者一名仲裁员组成。由三名仲裁员组成的，设首席仲裁员。

第四十三条 　当事人约定由三名仲裁员组成仲裁庭的，应当各自选定或者各自委托仲裁机构主任按照仲裁规则确定的程序指定一名仲裁员；第三名仲裁员由当事人共同选定，也可以由当事人共同委托仲裁机构主任按照仲裁规则确定的程序指定。当事人约定第三名仲裁员由其各自选定的仲裁员共同选定的，从其约定。第三名仲裁员是首席仲裁员。

　　当事人约定由一名仲裁员成立仲裁庭的，仲裁员由当事人共同选定，也可以由当事人共同委托仲裁机构主任按照仲裁规则确定的程序指定。

第四十四条 　当事人没有在仲裁规则规定的期限内约定仲裁庭的组成方式或者选定仲裁员的，由仲裁机构主任按照仲裁规则确定的程序确定或者指定。

第四十五条 　仲裁员存在可能导致当事人对其独立性、公正性产生合理怀疑情形的，该仲裁员应当及时向仲裁机构书面披露。

　　仲裁机构应当将仲裁员书面披露情况、仲裁庭的组成情况书面通知当事人。

第四十六条 　仲裁员有下列情形之一的，必须回避，当事人也有权提出回避申请：

　　（一）是本案当事人、代理人，或者当事人、代理人的近亲属；

　　（二）与本案有利害关系；

　　（三）与本案当事人、代理人有其他关系，可能影响公正仲裁；

　　（四）私自会见当事人、代理人，或者接受当事人、代理人的请客送礼。

第四十七条 　当事人提出回避申请，应当说明理由，在首次开庭前提出。回避事由在首次开庭后知道的，可以在最后一次开庭终结前提出。

第四十八条 　仲裁员是否回避，由仲裁机构主任决定；仲裁机构主任担任仲裁员时，其是否回避由仲裁机构的其他组成人员集体决定。

第四十九条 　仲裁员因回避或者其他原因不能履行职责的，应当依照本法规定重新选定或者指定仲裁员。

　　因回避而重新选定或者指定仲裁员后，当事人可以请求已进行的仲裁程序重新进行，是否准许，由仲裁庭决定；仲裁庭也可以自行决定已进行的仲裁程序是否重新进行。

第五十条 　仲裁员有本法第四十六条第四项规定的情形，情节严重的，或者有本法第七十一条第一款第六项规定的情形的，应当依法承担法律责任，仲裁机构应当将其除名。

第三节　开庭和裁决

第五十一条 　仲裁应当开庭进行。当事人协议不开庭的，仲裁庭可以根据仲裁申请书、答辩书以及其他材料作出裁决。

第五十二条 　仲裁不公开进行。当事人协议公开的，可以公开进行，但涉及国家秘密、他人的商业秘密或者个人隐私的除外。

第五十三条 　仲裁机构应当在仲裁规则规定的期限内将开庭日期通知双方当事人。当事人有正当理由的，可以在仲裁规则规定的期限内请求延期开庭。是否延期，由仲裁庭决定。

第五十四条 　申请人经书面通知，无正当理由不到庭或者未经仲裁庭许可中途退庭的，可以视为撤回仲裁申请。

　　被申请人经书面通知，无正当理由不到庭或者未经仲裁庭许可中途退庭的，可以缺席裁决。

第五十五条 　当事人应当对自己的主张提供证据。

　　仲裁庭认为有必要收集的证据，可以自行收集；必要时，可以请求有关方面依法予以协助。

第五十六条 　当事人可以就查明事实的专门性问题向仲裁庭申请鉴定。仲裁庭根据当事人的申请或者自行判断认为对专门性问题需要鉴定的，可以交由当事人约定的鉴定人鉴定，也可以由仲裁庭指定的鉴定人鉴定。

　　根据当事人的请求或者仲裁庭的要求，经仲裁庭通知，鉴定人应当参加开庭。当事人经仲裁庭许可，可以向鉴定人提问。

第五十七条 　证据应当在开庭时出示，当事人可以质证。

第五十八条 　在证据可能灭失或者以后难以取得的情况下，当事人可以申请证据保全。当事人申请证据保全的，仲裁机构应当将当事人的申请提交证据所在地的基层人民法院，人民法院应当依法及时处理。

　　因情况紧急，仲裁协议的当事人可以在申请仲裁前依照《中华人民共和国民事诉讼法》的有关规定向人民法院申请证据保全。当事人申请证据保全的，人民法院应当依法及时处理。

第五十九条 　当事人在仲裁过程中有权进行辩论。辩论终结时，首席仲裁员或者独任仲裁员应当征询当事人的最后意见。

第六十条 　仲裁庭应当将开庭情况记入笔录。当事人和其他仲裁参与人认为对自己陈述的记录有遗漏或者差错的，有权申请补正。如果不予补正，应当记录该申请。

　　笔录由仲裁员、记录人员、当事人和其他仲裁参与人签名或者盖章。

第六十一条 　仲裁庭发现当事人单方捏造基本事实申请仲裁或者当事人之间恶意串通，企图通过仲裁方式侵害国家利益、社会公共利益或者他人合法权益的，应当驳回其仲裁请求。

第六十二条 　当事人申请仲裁后，可以自行和解。达成和解协议的，可以请求仲裁庭根据和解协议作出裁决书，也可以撤回仲裁申请。

第六十三条 　当事人达成和解协议，撤回仲裁申请后反悔的，可以根据仲裁协议申请仲裁。

第六十四条 　仲裁庭在作出裁决前，可以先行调解。当事人自愿调解的，仲裁庭应当调解。调解不成的，应当及时作出裁决。

　　调解达成协议的，仲裁庭应当制作调解书或者根据协议的结果制作裁决书。调解书与裁决书具有同等法律效力。

第六十五条 　调解书应当写明仲裁请求和当事人协议的结果。调解书由仲裁员签名，加盖仲裁机构印章，送达双方当事人。

　　调解书经双方当事人签收后，即发生法律效力。

　　在调解书签收前当事人反悔的，仲裁庭应当及时作出裁决。

第六十六条 　裁决应当按照多数仲裁员的意见作出，少数仲裁员的不同意见可以记入笔录。仲裁庭不能形成多数意见时，裁决应当按照首席仲裁员的意见作出。

第六十七条 　裁决书应当写明仲裁请求、争议事实、裁决理由、裁决结果、仲裁费用的负担和裁决日期。当事人协议不愿写明争议事实和裁决理由的，可以不写。裁决书由仲裁员签名，加盖仲裁机构印章。对裁决持不同意见的仲裁员，可以签名，也可以不签名。

第六十八条 　仲裁庭仲裁纠纷时，其中一部分事实已经清楚，可以就该部分先行裁决。

第六十九条 　对裁决书中的文字、计算错误或者仲裁庭已经裁决但在裁决书中遗漏的事项，仲裁庭应当补正；当事人自收到裁决书之日起三十日内，可以请求仲裁庭补正。

第七十条 　裁决书自作出之日起发生法律效力。

第五章　申请撤销裁决

第七十一条 　当事人提出证据证明裁决有下列情形之一的，可以向仲裁机构所在地的中级人民法院申请撤销裁决：

　　（一）没有仲裁协议；

　　（二）裁决的事项不属于仲裁协议的范围或者仲裁机构无权仲裁；

　　（三）仲裁庭的组成或者仲裁的程序违反法定程序；

　　（四）裁决所根据的证据是伪造的；

　　（五）对方当事人隐瞒了足以影响公正裁决的证据；

　　（六）仲裁员在仲裁该案时有索贿受贿、徇私舞弊、枉法裁决行为。

　　人民法院经组成合议庭审查核实裁决有前款规定情形之一的，应当裁定撤销。

　　人民法院认定该裁决违背公共利益的，应当裁定撤销。

第七十二条 　当事人申请撤销裁决的，应当自收到裁决书之日起三个月内提出。

第七十三条 　人民法院应当在受理撤销裁决申请之日起两个月内作出撤销裁决或者驳回申请的裁定。

第七十四条 　人民法院受理撤销裁决的申请后，认为可以由仲裁庭重新仲裁的，通知仲裁庭在一定期限内重新仲裁，并裁定中止撤销程序。仲裁庭开始重新仲裁的，人民法院应当裁定终结撤销程序。仲裁庭拒绝重新仲裁的，人民法院应当裁定恢复撤销程序。

第六章　执　　行

第七十五条 　当事人应当履行裁决。一方当事人不履行的，另一方当事人可以依照《中华人民共和国民事诉讼法》的有关规定向人民法院申请执行。受申请的人民法院应当执行。

第七十六条 　被申请人提出证据证明裁决有本法第七十一条第一款规定的情形之一的，经人民法院组成合议庭审查核实，裁定不予执行。

　　人民法院认定执行该裁决违背公共利益的，应当裁定不予执行。

第七十七条 　一方当事人申请执行裁决，另一方当事人申请撤销裁决的，人民法院应当裁定中止执行。

　　人民法院裁定撤销裁决的，应当裁定终结执行。撤销裁决的申请被裁定驳回的，人民法院应当裁定恢复执行。

第七章　涉外仲裁的特别规定

第七十八条 　涉外经济贸易、运输、海事纠纷以及其他涉外纠纷的仲裁，适用本章规定；本章没有规定的，适用本法其他有关规定。

第七十九条 　涉外仲裁的当事人申请证据保全的，仲裁机构应当将当事人的申请提交证据所在地的中级人民法院，人民法院应当依法及时处理。

第八十条 　涉外仲裁的仲裁庭可以将开庭情况记入笔录，或者作出笔录要点，笔录要点可以由当事人和其他仲裁参与人签名或者盖章。

第八十一条 　当事人可以书面约定仲裁地。除当事人对仲裁程序的适用法另有约定外，以仲裁地作为仲裁程序的适用法及司法管辖法院的确定依据。仲裁裁决视为在仲裁地作出。

　　当事人对仲裁地没有约定或者约定不明确的，根据当事人约定的仲裁规则确定仲裁地；仲裁规则没有规定的，由仲裁庭根据案件情况，按照便利争议解决的原则确定仲裁地。

第八十二条 　涉外海事纠纷或者在经国务院批准设立的自由贸易试验区、海南自由贸易港以及国家规定的其他区域内设立登记的企业之间发生的涉外纠纷，当事人书面约定仲裁的，可以选择由仲裁机构进行；也可以选择以中华人民共和国为仲裁地，由符合本法规定条件的人员组成仲裁庭按照约定的仲裁规则进行，该仲裁庭应当在组庭后三个工作日内将当事人名称、仲裁地、仲裁庭的组成情况、仲裁规则向仲裁协会备案。

　　当事人申请财产保全、证据保全、请求责令另一方当事人作出一定行为或者禁止其作出一定行为的，仲裁庭应当依法将当事人的申请提交人民法院，人民法院应当依法及时处理。

第八十三条 　当事人提出证据证明涉外仲裁裁决有下列情形之一的，经人民法院组成合议庭审查核实，裁定撤销：

　　（一）没有仲裁协议；

　　（二）被申请人没有得到指定仲裁员或者进行仲裁程序的通知，或者由于其他不属于被申请人负责的原因未能陈述意见；

　　（三）仲裁庭的组成或者仲裁的程序与仲裁规则不符；

　　（四）裁决的事项不属于仲裁协议的范围或者仲裁机构无权仲裁。

　　人民法院认定该裁决违背公共利益的，应当裁定撤销。

第八十四条 　被申请人提出证据证明涉外仲裁裁决有本法第八十三条第一款规定的情形之一的，经人民法院组成合议庭审查核实，裁定不予执行。

　　人民法院认定执行该裁决违背公共利益的，应当裁定不予执行。

第八十五条 　在中华人民共和国领域内作出的发生法律效力的仲裁裁决，当事人请求执行的，如果被执行人或者其财产不在中华人民共和国领域内，当事人可以直接向有管辖权的外国法院申请承认和执行。

第八十六条 　支持仲裁机构到中华人民共和国境外设立业务机构，开展仲裁活动。

　　根据经济社会发展和改革开放需要，可以允许境外仲裁机构在国务院批准设立的自由贸易试验区、海南自由贸易港等区域内依照国家有关规定设立业务机构，开展涉外仲裁活动。

第八十七条 　鼓励涉外仲裁当事人选择中华人民共和国（包括特别行政区）的仲裁机构、约定中华人民共和国（包括特别行政区）作为仲裁地进行仲裁。

第八十八条 　在中华人民共和国领域外作出的发生法律效力的仲裁裁决，需要人民法院承认和执行的，当事人可以直接向被执行人住所地或者其财产所在地的中级人民法院申请。被执行人住所地或者其财产不在中华人民共和国领域内的，当事人可以向申请人住所地或者与裁决的纠纷有适当联系的地点的中级人民法院申请。人民法院应当依照中华人民共和国缔结或者参加的国际条约，或者按照互惠原则办理。

　　外国仲裁机构对中华人民共和国的公民、法人和其他组织的合法权益加以限制、歧视的，中华人民共和国有关机构有权对该国公民、企业和其他组织实行对等原则。

第八章　附　　则

第八十九条 　本法所称的仲裁机构包括依法设立的仲裁委员会、仲裁院等机构。

第九十条 　法律对仲裁时效有规定的，依照其规定；没有规定的，适用诉讼时效的规定。

第九十一条 　仲裁机构依照本法和《中华人民共和国民事诉讼法》的有关规定，可以参照中国仲裁协会制定的示范仲裁规则制定仲裁规则。

第九十二条 　当事人应当按照规定交纳仲裁费用。

　　仲裁机构根据国家有关规定，制定收取仲裁费用的办法。

第九十三条 　劳动争议仲裁、农村土地承包经营纠纷仲裁和体育仲裁等，适用《中华人民共和国劳动争议调解仲裁法》、《中华人民共和国农村土地承包经营纠纷调解仲裁法》、《中华人民共和国体育法》等有关法律的规定。

第九十四条 　仲裁机构、仲裁庭可以依照有关国际投资条约、协定关于将投资争端提交仲裁的规定，按照争议双方约定的仲裁规则办理国际投资仲裁案件。

第九十五条 　违反仲裁机构登记管理规定的，依照有关法律、行政法规的规定处理。

第九十六条 　本法自2026年3月1日起施行。

编 辑： 夏红真

责 编： 于浩

[按回车键在新窗口打开无障碍说明页面,按Ctrl+~键打开导盲模式。](http://www.npc.gov.cn/npc/c2/c30834/202509/)`,fv=`---
title: "中华人民共和国刑事诉讼法_中国人大网"
source: "http://www.npc.gov.cn/npc/c2/c12435/201905/t20190521_276591.html"
author:
published:
created: 2025-11-10
description:
tags:
  - "clippings"
---
当前位置： [首页](http://www.npc.gov.cn/npc/ "首页") > [权威发布](http://www.npc.gov.cn/npc/c2/c12435/ "权威发布")

## 中华人民共和国刑事诉讼法

来源： 中国人大网 浏览字号： [大](http://www.npc.gov.cn/npc/c2/c12435/201905/#) [中](http://www.npc.gov.cn/npc/c2/c12435/201905/#) [小](http://www.npc.gov.cn/npc/c2/c12435/201905/#) 2018年11月05日 16:25

（1979年7月1日第五届全国人民代表大会第二次会议通过　根据1996年3月17日第八届全国人民代表大会第四次会议《关于修改〈中华人民共和国刑事诉讼法〉的决定》第一次修正　根据2012年3月14日第十一届全国人民代表大会第五次会议《关于修改〈中华人民共和国刑事诉讼法〉的决定》第二次修正　根据2018年10月26日第十三届全国人民代表大会常务委员会第六次会议《关于修改〈中华人民共和国刑事诉讼法〉的决定》第三次修正）

目 录

第一编　总　　则

　　第一章　任务和基本原则

　　第二章　管　　辖

　　第三章　回　　避

　　第四章　辩护与代理

　　第五章　证　　据

　　第六章　强制措施

　　第七章　附带民事诉讼

　　第八章　期间、送达

　　第九章　其他规定

第二编　立案、侦查和提起公诉

　　第一章　立案

　　第二章　侦查

　　　　第一节　一般规定

　　　　第二节　讯问犯罪嫌疑人

　　　　第三节　询问证人

　　　　第四节　勘验、检查

　　　　第五节　搜　　查

　　　　第六节　查封、扣押物证、书证

　　　　第七节　鉴　　定

　　　　第八节　技术侦查措施

　　　　第九节　通　　缉

　　　　第十节　侦查终结

　　　　第十一节　人民检察院对直接受理的案件的侦查

　　第三章　提起公诉

第三编　审　　判

　　第一章　审判组织

　　第二章　第一审程序

　　　　第一节　公诉案件

　　　　第二节　自诉案件

　　　　第三节　简易程序

　　　　第四节　速裁程序

　　第三章　第二审程序

　　第四章　死刑复核程序

　　第五章　审判监督程序

第四编　执　　行

第五编　特别程序

　　第一章　未成年人刑事案件诉讼程序

　　第二章　当事人和解的公诉案件诉讼程序

　　第三章　缺席审判程序

　　第四章　犯罪嫌疑人、被告人逃匿、死亡案件违法所得的没收程序

　　第五章　依法不负刑事责任的精神病人的强制医疗程序

附　　则

第一编　总　　则

第一章　任务和基本原则

第一条 　为了保证刑法的正确实施，惩罚犯罪，保护人民，保障国家安全和社会公共安全，维护社会主义社会秩序，根据宪法，制定本法。

第二条 　中华人民共和国刑事诉讼法的任务，是保证准确、及时地查明犯罪事实，正确应用法律，惩罚犯罪分子，保障无罪的人不受刑事追究，教育公民自觉遵守法律，积极同犯罪行为作斗争，维护社会主义法制，尊重和保障人权，保护公民的人身权利、财产权利、民主权利和其他权利，保障社会主义建设事业的顺利进行。

第三条 　对刑事案件的侦查、拘留、执行逮捕、预审，由公安机关负责。检察、批准逮捕、检察机关直接受理的案件的侦查、提起公诉，由人民检察院负责。审判由人民法院负责。除法律特别规定的以外，其他任何机关、团体和个人都无权行使这些权力。

人民法院、人民检察院和公安机关进行刑事诉讼，必须严格遵守本法和其他法律的有关规定。

第四条 　国家安全机关依照法律规定，办理危害国家安全的刑事案件，行使与公安机关相同的职权。

第五条 　人民法院依照法律规定独立行使审判权，人民检察院依照法律规定独立行使检察权，不受行政机关、社会团体和个人的干涉。

第六条 　人民法院、人民检察院和公安机关进行刑事诉讼，必须依靠群众，必须以事实为根据，以法律为准绳。对于一切公民，在适用法律上一律平等，在法律面前，不允许有任何特权。

第七条 　人民法院、人民检察院和公安机关进行刑事诉讼，应当分工负责，互相配合，互相制约，以保证准确有效地执行法律。

第八条 　人民检察院依法对刑事诉讼实行法律监督。

第九条 　各民族公民都有用本民族语言文字进行诉讼的权利。人民法院、人民检察院和公安机关对于不通晓当地通用的语言文字的诉讼参与人，应当为他们翻译。

在少数民族聚居或者多民族杂居的地区，应当用当地通用的语言进行审讯，用当地通用的文字发布判决书、布告和其他文件。

第十条 　人民法院审判案件，实行两审终审制。

第十一条 　人民法院审判案件，除本法另有规定的以外，一律公开进行。被告人有权获得辩护，人民法院有义务保证被告人获得辩护。

第十二条 　未经人民法院依法判决，对任何人都不得确定有罪。

第十三条 　人民法院审判案件，依照本法实行人民陪审员陪审的制度。

第十四条 　人民法院、人民检察院和公安机关应当保障犯罪嫌疑人、被告人和其他诉讼参与人依法享有的辩护权和其他诉讼权利。

诉讼参与人对于审判人员、检察人员和侦查人员侵犯公民诉讼权利和人身侮辱的行为，有权提出控告。

第十五条 　犯罪嫌疑人、被告人自愿如实供述自己的罪行，承认指控的犯罪事实，愿意接受处罚的，可以依法从宽处理。

第十六条 　有下列情形之一的，不追究刑事责任，已经追究的，应当撤销案件，或者不起诉，或者终止审理，或者宣告无罪：

（一）情节显著轻微、危害不大，不认为是犯罪的；

（二）犯罪已过追诉时效期限的；

（三）经特赦令免除刑罚的；

（四）依照刑法告诉才处理的犯罪，没有告诉或者撤回告诉的；

（五）犯罪嫌疑人、被告人死亡的；

（六）其他法律规定免予追究刑事责任的。

第十七条 对于外国人犯罪应当追究刑事责任的，适用本法的规定。

对于享有外交特权和豁免权的外国人犯罪应当追究刑事责任的，通过外交途径解决。

第十八条 根据中华人民共和国缔结或者参加的国际条约，或者按照互惠原则，我国司法机关和外国司法机关可以相互请求刑事司法协助。

第二章　管　　辖 ^k51k0i

第十九条 　刑事案件的侦查由公安机关进行，法律另有规定的除外。

人民检察院在对诉讼活动实行法律监督中发现的司法工作人员利用职权实施的非法拘禁、刑讯逼供、非法搜查等侵犯公民权利、损害司法公正的犯罪，可以由人民检察院立案侦查。对于公安机关管辖的国家机关工作人员利用职权实施的重大犯罪案件，需要由人民检察院直接受理的时候，经省级以上人民检察院决定，可以由人民检察院立案侦查。

自诉案件，由人民法院直接受理。

第二十条 　基层人民法院管辖第一审普通刑事案件，但是依照本法由上级人民法院管辖的除外。

第二十一条 　中级人民法院管辖下列第一审刑事案件：

（一）危害国家安全、恐怖活动案件；

（二）可能判处无期徒刑、死刑的案件。

第二十二条 　高级人民法院管辖的第一审刑事案件，是全省（自治区、直辖市）性的重大刑事案件。

第二十三条 　最高人民法院管辖的第一审刑事案件，是全国性的重大刑事案件。

第二十四条 　上级人民法院在必要的时候，可以审判下级人民法院管辖的第一审刑事案件；下级人民法院认为案情重大、复杂需要由上级人民法院审判的第一审刑事案件，可以请求移送上一级人民法院审判。

第二十五条 　刑事案件由犯罪地的人民法院管辖。如果由被告人居住地的人民法院审判更为适宜的，可以由被告人居住地的人民法院管辖。

第二十六条 　几个同级人民法院都有权管辖的案件，由最初受理的人民法院审判。在必要的时候，可以移送主要犯罪地的人民法院审判。

第二十七条 　上级人民法院可以指定下级人民法院审判管辖不明的案件，也可以指定下级人民法院将案件移送其他人民法院审判。

第二十八条 　专门人民法院案件的管辖另行规定。

第三章　回　　避

第二十九条 　审判人员、检察人员、侦查人员有下列情形之一的，应当自行回避，当事人及其法定代理人也有权要求他们回避：

（一）是本案的当事人或者是当事人的近亲属的；

（二）本人或者他的近亲属和本案有利害关系的；

（三）担任过本案的证人、鉴定人、辩护人、诉讼代理人的；

（四）与本案当事人有其他关系，可能影响公正处理案件的。

第三十条 　审判人员、检察人员、侦查人员不得接受当事人及其委托的人的请客送礼，不得违反规定会见当事人及其委托的人。

审判人员、检察人员、侦查人员违反前款规定的，应当依法追究法律责任。当事人及其法定代理人有权要求他们回避。

第三十一条 　审判人员、检察人员、侦查人员的回避，应当分别由院长、检察长、公安机关负责人决定；院长的回避，由本院审判委员会决定；检察长和公安机关负责人的回避，由同级人民检察院检察委员会决定。

对侦查人员的回避作出决定前，侦查人员不能停止对案件的侦查。

对驳回申请回避的决定，当事人及其法定代理人可以申请复议一次。

第三十二条 　本章关于回避的规定适用于书记员、翻译人员和鉴定人。

辩护人、诉讼代理人可以依照本章的规定要求回避、申请复议。

第四章　辩护与代理

第三十三条 　犯罪嫌疑人、被告人除自己行使辩护权以外，还可以委托一至二人作为辩护人。下列的人可以被委托为辩护人：

（一）律师；

（二）人民团体或者犯罪嫌疑人、被告人所在单位推荐的人；

（三）犯罪嫌疑人、被告人的监护人、亲友。

正在被执行刑罚或者依法被剥夺、限制人身自由的人，不得担任辩护人。

被开除公职和被吊销律师、公证员执业证书的人，不得担任辩护人，但系犯罪嫌疑人、被告人的监护人、近亲属的除外。

第三十四条 　犯罪嫌疑人自被侦查机关第一次讯问或者采取强制措施之日起，有权委托辩护人；在侦查期间，只能委托律师作为辩护人。被告人有权随时委托辩护人。

侦查机关在第一次讯问犯罪嫌疑人或者对犯罪嫌疑人采取强制措施的时候，应当告知犯罪嫌疑人有权委托辩护人。人民检察院自收到移送审查起诉的案件材料之日起三日以内，应当告知犯罪嫌疑人有权委托辩护人。人民法院自受理案件之日起三日以内，应当告知被告人有权委托辩护人。犯罪嫌疑人、被告人在押期间要求委托辩护人的，人民法院、人民检察院和公安机关应当及时转达其要求。

犯罪嫌疑人、被告人在押的，也可以由其监护人、近亲属代为委托辩护人。

辩护人接受犯罪嫌疑人、被告人委托后，应当及时告知办理案件的机关。

第三十五条 　犯罪嫌疑人、被告人因经济困难或者其他原因没有委托辩护人的，本人及其近亲属可以向法律援助机构提出申请。对符合法律援助条件的，法律援助机构应当指派律师为其提供辩护。

犯罪嫌疑人、被告人是盲、聋、哑人，或者是尚未完全丧失辨认或者控制自己行为能力的精神病人，没有委托辩护人的，人民法院、人民检察院和公安机关应当通知法律援助机构指派律师为其提供辩护。

犯罪嫌疑人、被告人可能被判处无期徒刑、死刑，没有委托辩护人的，人民法院、人民检察院和公安机关应当通知法律援助机构指派律师为其提供辩护。

第三十六条 　法律援助机构可以在人民法院、看守所等场所派驻值班律师。犯罪嫌疑人、被告人没有委托辩护人，法律援助机构没有指派律师为其提供辩护的，由值班律师为犯罪嫌疑人、被告人提供法律咨询、程序选择建议、申请变更强制措施、对案件处理提出意见等法律帮助。

人民法院、人民检察院、看守所应当告知犯罪嫌疑人、被告人有权约见值班律师，并为犯罪嫌疑人、被告人约见值班律师提供便利。

第三十七条 　辩护人的责任是根据事实和法律，提出犯罪嫌疑人、被告人无罪、罪轻或者减轻、免除其刑事责任的材料和意见，维护犯罪嫌疑人、被告人的诉讼权利和其他合法权益。

第三十八条 　辩护律师在侦查期间可以为犯罪嫌疑人提供法律帮助；代理申诉、控告；申请变更强制措施；向侦查机关了解犯罪嫌疑人涉嫌的罪名和案件有关情况，提出意见。

第三十九条 　辩护律师可以同在押的犯罪嫌疑人、被告人会见和通信。其他辩护人经人民法院、人民检察院许可，也可以同在押的犯罪嫌疑人、被告人会见和通信。

辩护律师持律师执业证书、律师事务所证明和委托书或者法律援助公函要求会见在押的犯罪嫌疑人、被告人的，看守所应当及时安排会见，至迟不得超过四十八小时。

危害国家安全犯罪、恐怖活动犯罪案件，在侦查期间辩护律师会见在押的犯罪嫌疑人，应当经侦查机关许可。上述案件，侦查机关应当事先通知看守所。

辩护律师会见在押的犯罪嫌疑人、被告人，可以了解案件有关情况，提供法律咨询等；自案件移送审查起诉之日起，可以向犯罪嫌疑人、被告人核实有关证据。辩护律师会见犯罪嫌疑人、被告人时不被监听。

辩护律师同被监视居住的犯罪嫌疑人、被告人会见、通信，适用第一款、第三款、第四款的规定。

第四十条 　辩护律师自人民检察院对案件审查起诉之日起，可以查阅、摘抄、复制本案的案卷材料。其他辩护人经人民法院、人民检察院许可，也可以查阅、摘抄、复制上述材料。

第四十一条 　辩护人认为在侦查、审查起诉期间公安机关、人民检察院收集的证明犯罪嫌疑人、被告人无罪或者罪轻的证据材料未提交的，有权申请人民检察院、人民法院调取。

第四十二条 　辩护人收集的有关犯罪嫌疑人不在犯罪现场、未达到刑事责任年龄、属于依法不负刑事责任的精神病人的证据，应当及时告知公安机关、人民检察院。

第四十三条 　辩护律师经证人或者其他有关单位和个人同意，可以向他们收集与本案有关的材料，也可以申请人民检察院、人民法院收集、调取证据，或者申请人民法院通知证人出庭作证。

辩护律师经人民检察院或者人民法院许可，并且经被害人或者其近亲属、被害人提供的证人同意，可以向他们收集与本案有关的材料。

第四十四条 　辩护人或者其他任何人，不得帮助犯罪嫌疑人、被告人隐匿、毁灭、伪造证据或者串供，不得威胁、引诱证人作伪证以及进行其他干扰司法机关诉讼活动的行为。

违反前款规定的，应当依法追究法律责任，辩护人涉嫌犯罪的，应当由办理辩护人所承办案件的侦查机关以外的侦查机关办理。辩护人是律师的，应当及时通知其所在的律师事务所或者所属的律师协会。

第四十五条 　在审判过程中，被告人可以拒绝辩护人继续为他辩护，也可以另行委托辩护人辩护。

第四十六条 　公诉案件的被害人及其法定代理人或者近亲属，附带民事诉讼的当事人及其法定代理人，自案件移送审查起诉之日起，有权委托诉讼代理人。自诉案件的自诉人及其法定代理人，附带民事诉讼的当事人及其法定代理人，有权随时委托诉讼代理人。

人民检察院自收到移送审查起诉的案件材料之日起三日以内，应当告知被害人及其法定代理人或者其近亲属、附带民事诉讼的当事人及其法定代理人有权委托诉讼代理人。人民法院自受理自诉案件之日起三日以内，应当告知自诉人及其法定代理人、附带民事诉讼的当事人及其法定代理人有权委托诉讼代理人。

第四十七条 　委托诉讼代理人，参照本法第三十三条的规定执行。

第四十八条 　辩护律师对在执业活动中知悉的委托人的有关情况和信息，有权予以保密。但是，辩护律师在执业活动中知悉委托人或者其他人，准备或者正在实施危害国家安全、公共安全以及严重危害他人人身安全的犯罪的，应当及时告知司法机关。

第四十九条 　辩护人、诉讼代理人认为公安机关、人民检察院、人民法院及其工作人员阻碍其依法行使诉讼权利的，有权向同级或者上一级人民检察院申诉或者控告。人民检察院对申诉或者控告应当及时进行审查，情况属实的，通知有关机关予以纠正。

第五章　证　　据

第五十条 　可以用于证明案件事实的材料，都是证据。

证据包括：

（一）物证；

（二）书证；

（三）证人证言；

（四）被害人陈述；

（五）犯罪嫌疑人、被告人供述和辩解；

（六）鉴定意见；

（七）勘验、检查、辨认、侦查实验等笔录；

（八）视听资料、电子数据。

证据必须经过查证属实，才能作为定案的根据。

第五十一条 　公诉案件中被告人有罪的举证责任由人民检察院承担，自诉案件中被告人有罪的举证责任由自诉人承担。

第五十二条 　审判人员、检察人员、侦查人员必须依照法定程序，收集能够证实犯罪嫌疑人、被告人有罪或者无罪、犯罪情节轻重的各种证据。严禁刑讯逼供和以威胁、引诱、欺骗以及其他非法方法收集证据，不得强迫任何人证实自己有罪。必须保证一切与案件有关或者了解案情的公民，有客观地充分地提供证据的条件，除特殊情况外，可以吸收他们协助调查。

第五十三条 　公安机关提请批准逮捕书、人民检察院起诉书、人民法院判决书，必须忠实于事实真象。故意隐瞒事实真象的，应当追究责任。

第五十四条 　人民法院、人民检察院和公安机关有权向有关单位和个人收集、调取证据。有关单位和个人应当如实提供证据。

行政机关在行政执法和查办案件过程中收集的物证、书证、视听资料、电子数据等证据材料，在刑事诉讼中可以作为证据使用。

对涉及国家秘密、商业秘密、个人隐私的证据，应当保密。

凡是伪造证据、隐匿证据或者毁灭证据的，无论属于何方，必须受法律追究。

第五十五条 　对一切案件的判处都要重证据，重调查研究，不轻信口供。只有被告人供述，没有其他证据的，不能认定被告人有罪和处以刑罚；没有被告人供述，证据确实、充分的，可以认定被告人有罪和处以刑罚。

证据确实、充分，应当符合以下条件：

（一）定罪量刑的事实都有证据证明；

（二）据以定案的证据均经法定程序查证属实；

（三）综合全案证据，对所认定事实已排除合理怀疑。

第五十六条 　采用刑讯逼供等非法方法收集的犯罪嫌疑人、被告人供述和采用暴力、威胁等非法方法收集的证人证言、被害人陈述，应当予以排除。收集物证、书证不符合法定程序，可能严重影响司法公正的，应当予以补正或者作出合理解释；不能补正或者作出合理解释的，对该证据应当予以排除。

在侦查、审查起诉、审判时发现有应当排除的证据的，应当依法予以排除，不得作为起诉意见、起诉决定和判决的依据。

第五十七条 　人民检察院接到报案、控告、举报或者发现侦查人员以非法方法收集证据的，应当进行调查核实。对于确有以非法方法收集证据情形的，应当提出纠正意见；构成犯罪的，依法追究刑事责任。

第五十八条 　法庭审理过程中，审判人员认为可能存在本法第五十六条规定的以非法方法收集证据情形的，应当对证据收集的合法性进行法庭调查。

当事人及其辩护人、诉讼代理人有权申请人民法院对以非法方法收集的证据依法予以排除。申请排除以非法方法收集的证据的，应当提供相关线索或者材料。

第五十九条 　在对证据收集的合法性进行法庭调查的过程中，人民检察院应当对证据收集的合法性加以证明。

现有证据材料不能证明证据收集的合法性的，人民检察院可以提请人民法院通知有关侦查人员或者其他人员出庭说明情况；人民法院可以通知有关侦查人员或者其他人员出庭说明情况。有关侦查人员或者其他人员也可以要求出庭说明情况。经人民法院通知，有关人员应当出庭。

第六十条 　对于经过法庭审理，确认或者不能排除存在本法第五十六条规定的以非法方法收集证据情形的，对有关证据应当予以排除。

第六十一条 　证人证言必须在法庭上经过公诉人、被害人和被告人、辩护人双方质证并且查实以后，才能作为定案的根据。法庭查明证人有意作伪证或者隐匿罪证的时候，应当依法处理。

第六十二条 　凡是知道案件情况的人，都有作证的义务。

生理上、精神上有缺陷或者年幼，不能辨别是非、不能正确表达的人，不能作证人。

第六十三条 　人民法院、人民检察院和公安机关应当保障证人及其近亲属的安全。

对证人及其近亲属进行威胁、侮辱、殴打或者打击报复，构成犯罪的，依法追究刑事责任；尚不够刑事处罚的，依法给予治安管理处罚。

第六十四条 　对于危害国家安全犯罪、恐怖活动犯罪、黑社会性质的组织犯罪、毒品犯罪等案件，证人、鉴定人、被害人因在诉讼中作证，本人或者其近亲属的人身安全面临危险的，人民法院、人民检察院和公安机关应当采取以下一项或者多项保护措施：

（一）不公开真实姓名、住址和工作单位等个人信息；

（二）采取不暴露外貌、真实声音等出庭作证措施；

（三）禁止特定的人员接触证人、鉴定人、被害人及其近亲属；

（四）对人身和住宅采取专门性保护措施；

（五）其他必要的保护措施。

证人、鉴定人、被害人认为因在诉讼中作证，本人或者其近亲属的人身安全面临危险的，可以向人民法院、人民检察院、公安机关请求予以保护。

人民法院、人民检察院、公安机关依法采取保护措施，有关单位和个人应当配合。

第六十五条 　证人因履行作证义务而支出的交通、住宿、就餐等费用，应当给予补助。证人作证的补助列入司法机关业务经费，由同级政府财政予以保障。

有工作单位的证人作证，所在单位不得克扣或者变相克扣其工资、奖金及其他福利待遇。

第六章强制措施

第六十六条 　人民法院、人民检察院和公安机关根据案件情况，对犯罪嫌疑人、被告人可以拘传、取保候审或者监视居住。

第六十七条 　人民法院、人民检察院和公安机关对有下列情形之一的犯罪嫌疑人、被告人，可以取保候审：

（一）可能判处管制、拘役或者独立适用附加刑的；

（二）可能判处有期徒刑以上刑罚，采取取保候审不致发生社会危险性的；

（三）患有严重疾病、生活不能自理，怀孕或者正在哺乳自己婴儿的妇女，采取取保候审不致发生社会危险性的；

（四）羁押期限届满，案件尚未办结，需要采取取保候审的。

取保候审由公安机关执行。

第六十八条 　人民法院、人民检察院和公安机关决定对犯罪嫌疑人、被告人取保候审，应当责令犯罪嫌疑人、被告人提出保证人或者交纳保证金。

第六十九条 　保证人必须符合下列条件：

（一）与本案无牵连；

（二）有能力履行保证义务；

（三）享有政治权利，人身自由未受到限制；

（四）有固定的住处和收入。

第七十条 　保证人应当履行以下义务：

（一）监督被保证人遵守本法第七十一条的规定；

（二）发现被保证人可能发生或者已经发生违反本法第七十一条规定的行为的，应当及时向执行机关报告。

被保证人有违反本法第七十一条规定的行为，保证人未履行保证义务的，对保证人处以罚款，构成犯罪的，依法追究刑事责任。

第七十一条 　被取保候审的犯罪嫌疑人、被告人应当遵守以下规定：

（一）未经执行机关批准不得离开所居住的市、县；

（二）住址、工作单位和联系方式发生变动的，在二十四小时以内向执行机关报告；

（三）在传讯的时候及时到案；

（四）不得以任何形式干扰证人作证；

（五）不得毁灭、伪造证据或者串供。

人民法院、人民检察院和公安机关可以根据案件情况，责令被取保候审的犯罪嫌疑人、被告人遵守以下一项或者多项规定：

（一）不得进入特定的场所；

（二）不得与特定的人员会见或者通信；

（三）不得从事特定的活动；

（四）将护照等出入境证件、驾驶证件交执行机关保存。

被取保候审的犯罪嫌疑人、被告人违反前两款规定，已交纳保证金的，没收部分或者全部保证金，并且区别情形，责令犯罪嫌疑人、被告人具结悔过，重新交纳保证金、提出保证人，或者监视居住、予以逮捕。

对违反取保候审规定，需要予以逮捕的，可以对犯罪嫌疑人、被告人先行拘留。

第七十二条 　取保候审的决定机关应当综合考虑保证诉讼活动正常进行的需要，被取保候审人的社会危险性，案件的性质、情节，可能判处刑罚的轻重，被取保候审人的经济状况等情况，确定保证金的数额。

提供保证金的人应当将保证金存入执行机关指定银行的专门账户。

第七十三条 　犯罪嫌疑人、被告人在取保候审期间未违反本法第七十一条规定的，取保候审结束的时候，凭解除取保候审的通知或者有关法律文书到银行领取退还的保证金。

第七十四条 　人民法院、人民检察院和公安机关对符合逮捕条件，有下列情形之一的犯罪嫌疑人、被告人，可以监视居住：

（一）患有严重疾病、生活不能自理的；

（二）怀孕或者正在哺乳自己婴儿的妇女；

（三）系生活不能自理的人的唯一扶养人；

（四）因为案件的特殊情况或者办理案件的需要，采取监视居住措施更为适宜的；

（五）羁押期限届满，案件尚未办结，需要采取监视居住措施的。

对符合取保候审条件，但犯罪嫌疑人、被告人不能提出保证人，也不交纳保证金的，可以监视居住。

监视居住由公安机关执行。

第七十五条 　监视居住应当在犯罪嫌疑人、被告人的住处执行；无固定住处的，可以在指定的居所执行。对于涉嫌危害国家安全犯罪、恐怖活动犯罪，在住处执行可能有碍侦查的，经上一级公安机关批准，也可以在指定的居所执行。但是，不得在羁押场所、专门的办案场所执行。

指定居所监视居住的，除无法通知的以外，应当在执行监视居住后二十四小时以内，通知被监视居住人的家属。

被监视居住的犯罪嫌疑人、被告人委托辩护人，适用本法第三十四条的规定。

人民检察院对指定居所监视居住的决定和执行是否合法实行监督。

第七十六条 　指定居所监视居住的期限应当折抵刑期。被判处管制的，监视居住一日折抵刑期一日；被判处拘役、有期徒刑的，监视居住二日折抵刑期一日。

第七十七条 　被监视居住的犯罪嫌疑人、被告人应当遵守以下规定：

（一）未经执行机关批准不得离开执行监视居住的处所；

（二）未经执行机关批准不得会见他人或者通信；

（三）在传讯的时候及时到案；

（四）不得以任何形式干扰证人作证；

（五）不得毁灭、伪造证据或者串供；

（六）将护照等出入境证件、身份证件、驾驶证件交执行机关保存。

被监视居住的犯罪嫌疑人、被告人违反前款规定，情节严重的，可以予以逮捕；需要予以逮捕的，可以对犯罪嫌疑人、被告人先行拘留。

第七十八条 　执行机关对被监视居住的犯罪嫌疑人、被告人，可以采取电子监控、不定期检查等监视方法对其遵守监视居住规定的情况进行监督；在侦查期间，可以对被监视居住的犯罪嫌疑人的通信进行监控。

第七十九条 　人民法院、人民检察院和公安机关对犯罪嫌疑人、被告人取保候审最长不得超过十二个月，监视居住最长不得超过六个月。

在取保候审、监视居住期间，不得中断对案件的侦查、起诉和审理。对于发现不应当追究刑事责任或者取保候审、监视居住期限届满的，应当及时解除取保候审、监视居住。解除取保候审、监视居住，应当及时通知被取保候审、监视居住人和有关单位。

第八十条 　逮捕犯罪嫌疑人、被告人，必须经过人民检察院批准或者人民法院决定，由公安机关执行。

第八十一条 　对有证据证明有犯罪事实，可能判处徒刑以上刑罚的犯罪嫌疑人、被告人，采取取保候审尚不足以防止发生下列社会危险性的，应当予以逮捕：

（一）可能实施新的犯罪的；

（二）有危害国家安全、公共安全或者社会秩序的现实危险的；

（三）可能毁灭、伪造证据，干扰证人作证或者串供的；

（四）可能对被害人、举报人、控告人实施打击报复的；

（五）企图自杀或者逃跑的。

批准或者决定逮捕，应当将犯罪嫌疑人、被告人涉嫌犯罪的性质、情节，认罪认罚等情况，作为是否可能发生社会危险性的考虑因素。

对有证据证明有犯罪事实，可能判处十年有期徒刑以上刑罚的，或者有证据证明有犯罪事实，可能判处徒刑以上刑罚，曾经故意犯罪或者身份不明的，应当予以逮捕。

被取保候审、监视居住的犯罪嫌疑人、被告人违反取保候审、监视居住规定，情节严重的，可以予以逮捕。

第八十二条 　公安机关对于现行犯或者重大嫌疑分子，如果有下列情形之一的，可以先行拘留：

（一）正在预备犯罪、实行犯罪或者在犯罪后即时被发觉的；

（二）被害人或者在场亲眼看见的人指认他犯罪的；

（三）在身边或者住处发现有犯罪证据的；

（四）犯罪后企图自杀、逃跑或者在逃的；

（五）有毁灭、伪造证据或者串供可能的；

（六）不讲真实姓名、住址，身份不明的；

（七）有流窜作案、多次作案、结伙作案重大嫌疑的。

第八十三条 　公安机关在异地执行拘留、逮捕的时候，应当通知被拘留、逮捕人所在地的公安机关，被拘留、逮捕人所在地的公安机关应当予以配合。

第八十四条 　对于有下列情形的人，任何公民都可以立即扭送公安机关、人民检察院或者人民法院处理：

（一）正在实行犯罪或者在犯罪后即时被发觉的；

（二）通缉在案的；

（三）越狱逃跑的；

（四）正在被追捕的。

第八十五条 　公安机关拘留人的时候，必须出示拘留证。

拘留后，应当立即将被拘留人送看守所羁押，至迟不得超过二十四小时。除无法通知或者涉嫌危害国家安全犯罪、恐怖活动犯罪通知可能有碍侦查的情形以外，应当在拘留后二十四小时以内，通知被拘留人的家属。有碍侦查的情形消失以后，应当立即通知被拘留人的家属。

第八十六条 　公安机关对被拘留的人，应当在拘留后的二十四小时以内进行讯问。在发现不应当拘留的时候，必须立即释放，发给释放证明。

第八十七条 　公安机关要求逮捕犯罪嫌疑人的时候，应当写出提请批准逮捕书，连同案卷材料、证据，一并移送同级人民检察院审查批准。必要的时候，人民检察院可以派人参加公安机关对于重大案件的讨论。

第八十八条 　人民检察院审查批准逮捕，可以讯问犯罪嫌疑人；有下列情形之一的，应当讯问犯罪嫌疑人：

（一）对是否符合逮捕条件有疑问的；

（二）犯罪嫌疑人要求向检察人员当面陈述的；

（三）侦查活动可能有重大违法行为的。

人民检察院审查批准逮捕，可以询问证人等诉讼参与人，听取辩护律师的意见；辩护律师提出要求的，应当听取辩护律师的意见。

第八十九条 　人民检察院审查批准逮捕犯罪嫌疑人由检察长决定。重大案件应当提交检察委员会讨论决定。

第九十条 　人民检察院对于公安机关提请批准逮捕的案件进行审查后，应当根据情况分别作出批准逮捕或者不批准逮捕的决定。对于批准逮捕的决定，公安机关应当立即执行，并且将执行情况及时通知人民检察院。对于不批准逮捕的，人民检察院应当说明理由，需要补充侦查的，应当同时通知公安机关。

第九十一条 　公安机关对被拘留的人，认为需要逮捕的，应当在拘留后的三日以内，提请人民检察院审查批准。在特殊情况下，提请审查批准的时间可以延长一日至四日。

对于流窜作案、多次作案、结伙作案的重大嫌疑分子，提请审查批准的时间可以延长至三十日。

人民检察院应当自接到公安机关提请批准逮捕书后的七日以内，作出批准逮捕或者不批准逮捕的决定。人民检察院不批准逮捕的，公安机关应当在接到通知后立即释放，并且将执行情况及时通知人民检察院。对于需要继续侦查，并且符合取保候审、监视居住条件的，依法取保候审或者监视居住。

第九十二条 　公安机关对人民检察院不批准逮捕的决定，认为有错误的时候，可以要求复议，但是必须将被拘留的人立即释放。如果意见不被接受，可以向上一级人民检察院提请复核。上级人民检察院应当立即复核，作出是否变更的决定，通知下级人民检察院和公安机关执行。

第九十三条 　公安机关逮捕人的时候，必须出示逮捕证。

逮捕后，应当立即将被逮捕人送看守所羁押。除无法通知的以外，应当在逮捕后二十四小时以内，通知被逮捕人的家属。

第九十四条 　人民法院、人民检察院对于各自决定逮捕的人，公安机关对于经人民检察院批准逮捕的人，都必须在逮捕后的二十四小时以内进行讯问。在发现不应当逮捕的时候，必须立即释放，发给释放证明。

第九十五条 　犯罪嫌疑人、被告人被逮捕后，人民检察院仍应当对羁押的必要性进行审查。对不需要继续羁押的，应当建议予以释放或者变更强制措施。有关机关应当在十日以内将处理情况通知人民检察院。

第九十六条 　人民法院、人民检察院和公安机关如果发现对犯罪嫌疑人、被告人采取强制措施不当的，应当及时撤销或者变更。公安机关释放被逮捕的人或者变更逮捕措施的，应当通知原批准的人民检察院。

第九十七条 　犯罪嫌疑人、被告人及其法定代理人、近亲属或者辩护人有权申请变更强制措施。人民法院、人民检察院和公安机关收到申请后，应当在三日以内作出决定；不同意变更强制措施的，应当告知申请人，并说明不同意的理由。

第九十八条 　犯罪嫌疑人、被告人被羁押的案件，不能在本法规定的侦查羁押、审查起诉、一审、二审期限内办结的，对犯罪嫌疑人、被告人应当予以释放；需要继续查证、审理的，对犯罪嫌疑人、被告人可以取保候审或者监视居住。

第九十九条 　人民法院、人民检察院或者公安机关对被采取强制措施法定期限届满的犯罪嫌疑人、被告人，应当予以释放、解除取保候审、监视居住或者依法变更强制措施。犯罪嫌疑人、被告人及其法定代理人、近亲属或者辩护人对于人民法院、人民检察院或者公安机关采取强制措施法定期限届满的，有权要求解除强制措施。

第一百条 　人民检察院在审查批准逮捕工作中，如果发现公安机关的侦查活动有违法情况，应当通知公安机关予以纠正，公安机关应当将纠正情况通知人民检察院。

第七章　附带民事诉讼

第一百零一条 　被害人由于被告人的犯罪行为而遭受物质损失的，在刑事诉讼过程中，有权提起附带民事诉讼。被害人死亡或者丧失行为能力的，被害人的法定代理人、近亲属有权提起附带民事诉讼。

如果是国家财产、集体财产遭受损失的，人民检察院在提起公诉的时候，可以提起附带民事诉讼。

第一百零二条 　人民法院在必要的时候，可以采取保全措施，查封、扣押或者冻结被告人的财产。附带民事诉讼原告人或者人民检察院可以申请人民法院采取保全措施。人民法院采取保全措施，适用民事诉讼法的有关规定。

第一百零三条 　人民法院审理附带民事诉讼案件，可以进行调解，或者根据物质损失情况作出判决、裁定。

第一百零四条 　附带民事诉讼应当同刑事案件一并审判，只有为了防止刑事案件审判的过分迟延，才可以在刑事案件审判后，由同一审判组织继续审理附带民事诉讼。

第八章　期间、送达

第一百零五条 　期间以时、日、月计算。

期间开始的时和日不算在期间以内。

法定期间不包括路途上的时间。上诉状或者其他文件在期满前已经交邮的，不算过期。

期间的最后一日为节假日的，以节假日后的第一日为期满日期，但犯罪嫌疑人、被告人或者罪犯在押期间，应当至期满之日为止，不得因节假日而延长。

第一百零六条 　当事人由于不能抗拒的原因或者有其他正当理由而耽误期限的，在障碍消除后五日以内，可以申请继续进行应当在期满以前完成的诉讼活动。

前款申请是否准许，由人民法院裁定。

第一百零七条 　送达传票、通知书和其他诉讼文件应当交给收件人本人；如果本人不在，可以交给他的成年家属或者所在单位的负责人员代收。

收件人本人或者代收人拒绝接收或者拒绝签名、盖章的时候，送达人可以邀请他的邻居或者其他见证人到场，说明情况，把文件留在他的住处，在送达证上记明拒绝的事由、送达的日期，由送达人签名，即认为已经送达。

第九章　其他规定

第一百零八条 　本法下列用语的含意是：

（一）“侦查”是指公安机关、人民检察院对于刑事案件，依照法律进行的收集证据、查明案情的工作和有关的强制性措施；

（二）“当事人”是指被害人、自诉人、犯罪嫌疑人、被告人、附带民事诉讼的原告人和被告人；

（三）“法定代理人”是指被代理人的父母、养父母、监护人和负有保护责任的机关、团体的代表；

（四）“诉讼参与人”是指当事人、法定代理人、诉讼代理人、辩护人、证人、鉴定人和翻译人员；

（五）“诉讼代理人”是指公诉案件的被害人及其法定代理人或者近亲属、自诉案件的自诉人及其法定代理人委托代为参加诉讼的人和附带民事诉讼的当事人及其法定代理人委托代为参加诉讼的人；

（六）“近亲属”是指夫、妻、父、母、子、女、同胞兄弟姊妹。

第二编　立案、侦查和提起公诉

第一章　立　　案

第一百零九条 　公安机关或者人民检察院发现犯罪事实或者犯罪嫌疑人，应当按照管辖范围，立案侦查。

第一百一十条 　任何单位和个人发现有犯罪事实或者犯罪嫌疑人，有权利也有义务向公安机关、人民检察院或者人民法院报案或者举报。

被害人对侵犯其人身、财产权利的犯罪事实或者犯罪嫌疑人，有权向公安机关、人民检察院或者人民法院报案或者控告。

公安机关、人民检察院或者人民法院对于报案、控告、举报，都应当接受。对于不属于自己管辖的，应当移送主管机关处理，并且通知报案人、控告人、举报人；对于不属于自己管辖而又必须采取紧急措施的，应当先采取紧急措施，然后移送主管机关。

犯罪人向公安机关、人民检察院或者人民法院自首的，适用第三款规定。

第一百一十一条 　报案、控告、举报可以用书面或者口头提出。接受口头报案、控告、举报的工作人员，应当写成笔录，经宣读无误后，由报案人、控告人、举报人签名或者盖章。

接受控告、举报的工作人员，应当向控告人、举报人说明诬告应负的法律责任。但是，只要不是捏造事实，伪造证据，即使控告、举报的事实有出入，甚至是错告的，也要和诬告严格加以区别。

公安机关、人民检察院或者人民法院应当保障报案人、控告人、举报人及其近亲属的安全。报案人、控告人、举报人如果不愿公开自己的姓名和报案、控告、举报的行为，应当为他保守秘密。

第一百一十二条 　人民法院、人民检察院或者公安机关对于报案、控告、举报和自首的材料，应当按照管辖范围，迅速进行审查，认为有犯罪事实需要追究刑事责任的时候，应当立案；认为没有犯罪事实，或者犯罪事实显著轻微，不需要追究刑事责任的时候，不予立案，并且将不立案的原因通知控告人。控告人如果不服，可以申请复议。

第一百一十三条 　人民检察院认为公安机关对应当立案侦查的案件而不立案侦查的，或者被害人认为公安机关对应当立案侦查的案件而不立案侦查，向人民检察院提出的，人民检察院应当要求公安机关说明不立案的理由。人民检察院认为公安机关不立案理由不能成立的，应当通知公安机关立案，公安机关接到通知后应当立案。

第一百一十四条 　对于自诉案件，被害人有权向人民法院直接起诉。被害人死亡或者丧失行为能力的，被害人的法定代理人、近亲属有权向人民法院起诉。人民法院应当依法受理。

第二章　侦　　查

第一节　一般规定

第一百一十五条 　公安机关对已经立案的刑事案件，应当进行侦查，收集、调取犯罪嫌疑人有罪或者无罪、罪轻或者罪重的证据材料。对现行犯或者重大嫌疑分子可以依法先行拘留，对符合逮捕条件的犯罪嫌疑人，应当依法逮捕。

第一百一十六条 　公安机关经过侦查，对有证据证明有犯罪事实的案件，应当进行预审，对收集、调取的证据材料予以核实。

第一百一十七条 　当事人和辩护人、诉讼代理人、利害关系人对于司法机关及其工作人员有下列行为之一的，有权向该机关申诉或者控告：

（一）采取强制措施法定期限届满，不予以释放、解除或者变更的；

（二）应当退还取保候审保证金不退还的；

（三）对与案件无关的财物采取查封、扣押、冻结措施的；

（四）应当解除查封、扣押、冻结不解除的；

（五）贪污、挪用、私分、调换、违反规定使用查封、扣押、冻结的财物的。

受理申诉或者控告的机关应当及时处理。对处理不服的，可以向同级人民检察院申诉；人民检察院直接受理的案件，可以向上一级人民检察院申诉。人民检察院对申诉应当及时进行审查，情况属实的，通知有关机关予以纠正。

第二节　讯问犯罪嫌疑人

第一百一十八条 　讯问犯罪嫌疑人必须由人民检察院或者公安机关的侦查人员负责进行。讯问的时候，侦查人员不得少于二人。

犯罪嫌疑人被送交看守所羁押以后，侦查人员对其进行讯问，应当在看守所内进行。

第一百一十九条 　对不需要逮捕、拘留的犯罪嫌疑人，可以传唤到犯罪嫌疑人所在市、县内的指定地点或者到他的住处进行讯问，但是应当出示人民检察院或者公安机关的证明文件。对在现场发现的犯罪嫌疑人，经出示工作证件，可以口头传唤，但应当在讯问笔录中注明。

传唤、拘传持续的时间不得超过十二小时；案情特别重大、复杂，需要采取拘留、逮捕措施的，传唤、拘传持续的时间不得超过二十四小时。

不得以连续传唤、拘传的形式变相拘禁犯罪嫌疑人。传唤、拘传犯罪嫌疑人，应当保证犯罪嫌疑人的饮食和必要的休息时间。

第一百二十条 　侦查人员在讯问犯罪嫌疑人的时候，应当首先讯问犯罪嫌疑人是否有犯罪行为，让他陈述有罪的情节或者无罪的辩解，然后向他提出问题。犯罪嫌疑人对侦查人员的提问，应当如实回答。但是对与本案无关的问题，有拒绝回答的权利。

侦查人员在讯问犯罪嫌疑人的时候，应当告知犯罪嫌疑人享有的诉讼权利，如实供述自己罪行可以从宽处理和认罪认罚的法律规定。

第一百二十一条 　讯问聋、哑的犯罪嫌疑人，应当有通晓聋、哑手势的人参加，并且将这种情况记明笔录。

第一百二十二条 　讯问笔录应当交犯罪嫌疑人核对，对于没有阅读能力的，应当向他宣读。如果记载有遗漏或者差错，犯罪嫌疑人可以提出补充或者改正。犯罪嫌疑人承认笔录没有错误后，应当签名或者盖章。侦查人员也应当在笔录上签名。犯罪嫌疑人请求自行书写供述的，应当准许。必要的时候，侦查人员也可以要犯罪嫌疑人亲笔书写供词。

第一百二十三条 　侦查人员在讯问犯罪嫌疑人的时候，可以对讯问过程进行录音或者录像；对于可能判处无期徒刑、死刑的案件或者其他重大犯罪案件，应当对讯问过程进行录音或者录像。

录音或者录像应当全程进行，保持完整性。

第三节　询问证人

第一百二十四条 　侦查人员询问证人，可以在现场进行，也可以到证人所在单位、住处或者证人提出的地点进行，在必要的时候，可以通知证人到人民检察院或者公安机关提供证言。在现场询问证人，应当出示工作证件，到证人所在单位、住处或者证人提出的地点询问证人，应当出示人民检察院或者公安机关的证明文件。

询问证人应当个别进行。

第一百二十五条 　询问证人，应当告知他应当如实地提供证据、证言和有意作伪证或者隐匿罪证要负的法律责任。

第一百二十六条 　本法第一百二十二条的规定，也适用于询问证人。

第一百二十七条 　询问被害人，适用本节各条规定。

第四节　勘验、检查

第一百二十八 　条侦查人员对于与犯罪有关的场所、物品、人身、尸体应当进行勘验或者检查。在必要的时候，可以指派或者聘请具有专门知识的人，在侦查人员的主持下进行勘验、检查。

第一百二十九条 　任何单位和个人，都有义务保护犯罪现场，并且立即通知公安机关派员勘验。

第一百三十条 　侦查人员执行勘验、检查，必须持有人民检察院或者公安机关的证明文件。

第一百三十一条 　对于死因不明的尸体，公安机关有权决定解剖，并且通知死者家属到场。

第一百三十二条 　为了确定被害人、犯罪嫌疑人的某些特征、伤害情况或者生理状态，可以对人身进行检查，可以提取指纹信息，采集血液、尿液等生物样本。

犯罪嫌疑人如果拒绝检查，侦查人员认为必要的时候，可以强制检查。

检查妇女的身体，应当由女工作人员或者医师进行。

第一百三十三条 　勘验、检查的情况应当写成笔录，由参加勘验、检查的人和见证人签名或者盖章。

第一百三十四条 　人民检察院审查案件的时候，对公安机关的勘验、检查，认为需要复验、复查时，可以要求公安机关复验、复查，并且可以派检察人员参加。

第一百三十五条 　为了查明案情，在必要的时候，经公安机关负责人批准，可以进行侦查实验。

侦查实验的情况应当写成笔录，由参加实验的人签名或者盖章。

侦查实验，禁止一切足以造成危险、侮辱人格或者有伤风化的行为。

第五节　搜　　查

第一百三十六条 　为了收集犯罪证据、查获犯罪人，侦查人员可以对犯罪嫌疑人以及可能隐藏罪犯或者犯罪证据的人的身体、物品、住处和其他有关的地方进行搜查。

第一百三十七条 　任何单位和个人，有义务按照人民检察院和公安机关的要求，交出可以证明犯罪嫌疑人有罪或者无罪的物证、书证、视听资料等证据。

第一百三十八条 　进行搜查，必须向被搜查人出示搜查证。

在执行逮捕、拘留的时候，遇有紧急情况，不另用搜查证也可以进行搜查。

第一百三十九条 　在搜查的时候，应当有被搜查人或者他的家属，邻居或者其他见证人在场。

搜查妇女的身体，应当由女工作人员进行。

第一百四十条 　搜查的情况应当写成笔录，由侦查人员和被搜查人或者他的家属，邻居或者其他见证人签名或者盖章。如果被搜查人或者他的家属在逃或者拒绝签名、盖章，应当在笔录上注明。

第六节　查封、扣押物证、书证

第一百四十一条 　在侦查活动中发现的可用以证明犯罪嫌疑人有罪或者无罪的各种财物、文件，应当查封、扣押；与案件无关的财物、文件，不得查封、扣押。

对查封、扣押的财物、文件，要妥善保管或者封存，不得使用、调换或者损毁。

第一百四十二条 　对查封、扣押的财物、文件，应当会同在场见证人和被查封、扣押财物、文件持有人查点清楚，当场开列清单一式二份，由侦查人员、见证人和持有人签名或者盖章，一份交给持有人，另一份附卷备查。

第一百四十三条 　侦查人员认为需要扣押犯罪嫌疑人的邮件、电报的时候，经公安机关或者人民检察院批准，即可通知邮电机关将有关的邮件、电报检交扣押。

不需要继续扣押的时候，应即通知邮电机关。

第一百四十四条 　人民检察院、公安机关根据侦查犯罪的需要，可以依照规定查询、冻结犯罪嫌疑人的存款、汇款、债券、股票、基金份额等财产。有关单位和个人应当配合。

犯罪嫌疑人的存款、汇款、债券、股票、基金份额等财产已被冻结的，不得重复冻结。

第一百四十五条 　对查封、扣押的财物、文件、邮件、电报或者冻结的存款、汇款、债券、股票、基金份额等财产，经查明确实与案件无关的，应当在三日以内解除查封、扣押、冻结，予以退还。

第七节　鉴　　定

第一百四十六条 　为了查明案情，需要解决案件中某些专门性问题的时候，应当指派、聘请有专门知识的人进行鉴定。

第一百四十七条 　鉴定人进行鉴定后，应当写出鉴定意见，并且签名。

鉴定人故意作虚假鉴定的，应当承担法律责任。

第一百四十八条 　侦查机关应当将用作证据的鉴定意见告知犯罪嫌疑人、被害人。如果犯罪嫌疑人、被害人提出申请，可以补充鉴定或者重新鉴定。

第一百四十九条 　对犯罪嫌疑人作精神病鉴定的期间不计入办案期限。

第八节　技术侦查措施

第一百五十条 　公安机关在立案后，对于危害国家安全犯罪、恐怖活动犯罪、黑社会性质的组织犯罪、重大毒品犯罪或者其他严重危害社会的犯罪案件，根据侦查犯罪的需要，经过严格的批准手续，可以采取技术侦查措施。

人民检察院在立案后，对于利用职权实施的严重侵犯公民人身权利的重大犯罪案件，根据侦查犯罪的需要，经过严格的批准手续，可以采取技术侦查措施，按照规定交有关机关执行。

追捕被通缉或者批准、决定逮捕的在逃的犯罪嫌疑人、被告人，经过批准，可以采取追捕所必需的技术侦查措施。

第一百五十一条 　批准决定应当根据侦查犯罪的需要，确定采取技术侦查措施的种类和适用对象。批准决定自签发之日起三个月以内有效。对于不需要继续采取技术侦查措施的，应当及时解除；对于复杂、疑难案件，期限届满仍有必要继续采取技术侦查措施的，经过批准，有效期可以延长，每次不得超过三个月。

第一百五十二条 　采取技术侦查措施，必须严格按照批准的措施种类、适用对象和期限执行。

侦查人员对采取技术侦查措施过程中知悉的国家秘密、商业秘密和个人隐私，应当保密；对采取技术侦查措施获取的与案件无关的材料，必须及时销毁。

采取技术侦查措施获取的材料，只能用于对犯罪的侦查、起诉和审判，不得用于其他用途。

公安机关依法采取技术侦查措施，有关单位和个人应当配合，并对有关情况予以保密。

第一百五十三条 　为了查明案情，在必要的时候，经公安机关负责人决定，可以由有关人员隐匿其身份实施侦查。但是，不得诱使他人犯罪，不得采用可能危害公共安全或者发生重大人身危险的方法。

对涉及给付毒品等违禁品或者财物的犯罪活动，公安机关根据侦查犯罪的需要，可以依照规定实施控制下交付。

第一百五十四条 　依照本节规定采取侦查措施收集的材料在刑事诉讼中可以作为证据使用。如果使用该证据可能危及有关人员的人身安全，或者可能产生其他严重后果的，应当采取不暴露有关人员身份、技术方法等保护措施，必要的时候，可以由审判人员在庭外对证据进行核实。

第九节　通　　缉

第一百五十五条 　应当逮捕的犯罪嫌疑人如果在逃，公安机关可以发布通缉令，采取有效措施，追捕归案。

各级公安机关在自己管辖的地区以内，可以直接发布通缉令；超出自己管辖的地区，应当报请有权决定的上级机关发布。

第十节　侦查终结

第一百五十六条 　对犯罪嫌疑人逮捕后的侦查羁押期限不得超过二个月。案情复杂、期限届满不能终结的案件，可以经上一级人民检察院批准延长一个月。

第一百五十七条 　因为特殊原因，在较长时间内不宜交付审判的特别重大复杂的案件，由最高人民检察院报请全国人民代表大会常务委员会批准延期审理。

第一百五十八条 　下列案件在本法第一百五十六条规定的期限届满不能侦查终结的，经省、自治区、直辖市人民检察院批准或者决定，可以延长二个月：

（一）交通十分不便的边远地区的重大复杂案件；

（二）重大的犯罪集团案件；

（三）流窜作案的重大复杂案件；

（四）犯罪涉及面广，取证困难的重大复杂案件。

第一百五十九条 　对犯罪嫌疑人可能判处十年有期徒刑以上刑罚，依照本法第一百五十八条规定延长期限届满，仍不能侦查终结的，经省、自治区、直辖市人民检察院批准或者决定，可以再延长二个月。

第一百六十条 　在侦查期间，发现犯罪嫌疑人另有重要罪行的，自发现之日起依照本法第一百五十六条的规定重新计算侦查羁押期限。

犯罪嫌疑人不讲真实姓名、住址，身份不明的，应当对其身份进行调查，侦查羁押期限自查清其身份之日起计算，但是不得停止对其犯罪行为的侦查取证。对于犯罪事实清楚，证据确实、充分，确实无法查明其身份的，也可以按其自报的姓名起诉、审判。

第一百六十一条 　在案件侦查终结前，辩护律师提出要求的，侦查机关应当听取辩护律师的意见，并记录在案。辩护律师提出书面意见的，应当附卷。

第一百六十二条 　公安机关侦查终结的案件，应当做到犯罪事实清楚，证据确实、充分，并且写出起诉意见书，连同案卷材料、证据一并移送同级人民检察院审查决定；同时将案件移送情况告知犯罪嫌疑人及其辩护律师。

犯罪嫌疑人自愿认罪的，应当记录在案，随案移送，并在起诉意见书中写明有关情况。

第一百六十三条 　在侦查过程中，发现不应对犯罪嫌疑人追究刑事责任的，应当撤销案件；犯罪嫌疑人已被逮捕的，应当立即释放，发给释放证明，并且通知原批准逮捕的人民检察院。

第十一节　人民检察院对直接受理的案件的侦查

第一百六十四条 　人民检察院对直接受理的案件的侦查适用本章规定。

第一百六十五条 　人民检察院直接受理的案件中符合本法第八十一条、第八十二条第四项、第五项规定情形，需要逮捕、拘留犯罪嫌疑人的，由人民检察院作出决定，由公安机关执行。

第一百六十六条 　人民检察院对直接受理的案件中被拘留的人，应当在拘留后的二十四小时以内进行讯问。在发现不应当拘留的时候，必须立即释放，发给释放证明。

第一百六十七条 　人民检察院对直接受理的案件中被拘留的人，认为需要逮捕的，应当在十四日以内作出决定。在特殊情况下，决定逮捕的时间可以延长一日至三日。对不需要逮捕的，应当立即释放；对需要继续侦查，并且符合取保候审、监视居住条件的，依法取保候审或者监视居住。

第一百六十八条 　人民检察院侦查终结的案件，应当作出提起公诉、不起诉或者撤销案件的决定。

第三章　提起公诉

第一百六十九条 　凡需要提起公诉的案件，一律由人民检察院审查决定。

第一百七十条 　人民检察院对于监察机关移送起诉的案件，依照本法和监察法的有关规定进行审查。人民检察院经审查，认为需要补充核实的，应当退回监察机关补充调查，必要时可以自行补充侦查。

对于监察机关移送起诉的已采取留置措施的案件，人民检察院应当对犯罪嫌疑人先行拘留，留置措施自动解除。人民检察院应当在拘留后的十日以内作出是否逮捕、取保候审或者监视居住的决定。在特殊情况下，决定的时间可以延长一日至四日。人民检察院决定采取强制措施的期间不计入审查起诉期限。

第一百七十一条 　人民检察院审查案件的时候，必须查明：

（一）犯罪事实、情节是否清楚，证据是否确实、充分，犯罪性质和罪名的认定是否正确；

（二）有无遗漏罪行和其他应当追究刑事责任的人；

（三）是否属于不应追究刑事责任的；

（四）有无附带民事诉讼；

（五）侦查活动是否合法。

第一百七十二条 　人民检察院对于监察机关、公安机关移送起诉的案件，应当在一个月以内作出决定，重大、复杂的案件，可以延长十五日；犯罪嫌疑人认罪认罚，符合速裁程序适用条件的，应当在十日以内作出决定，对可能判处的有期徒刑超过一年的，可以延长至十五日。

人民检察院审查起诉的案件，改变管辖的，从改变后的人民检察院收到案件之日起计算审查起诉期限。

第一百七十三条 　人民检察院审查案件，应当讯问犯罪嫌疑人，听取辩护人或者值班律师、被害人及其诉讼代理人的意见，并记录在案。辩护人或者值班律师、被害人及其诉讼代理人提出书面意见的，应当附卷。

犯罪嫌疑人认罪认罚的，人民检察院应当告知其享有的诉讼权利和认罪认罚的法律规定，听取犯罪嫌疑人、辩护人或者值班律师、被害人及其诉讼代理人对下列事项的意见，并记录在案：

（一）涉嫌的犯罪事实、罪名及适用的法律规定；

（二）从轻、减轻或者免除处罚等从宽处罚的建议；

（三）认罪认罚后案件审理适用的程序；

（四）其他需要听取意见的事项。

人民检察院依照前两款规定听取值班律师意见的，应当提前为值班律师了解案件有关情况提供必要的便利。

第一百七十四条 　犯罪嫌疑人自愿认罪，同意量刑建议和程序适用的，应当在辩护人或者值班律师在场的情况下签署认罪认罚具结书。

犯罪嫌疑人认罪认罚，有下列情形之一的，不需要签署认罪认罚具结书：

（一）犯罪嫌疑人是盲、聋、哑人，或者是尚未完全丧失辨认或者控制自己行为能力的精神病人的；

（二）未成年犯罪嫌疑人的法定代理人、辩护人对未成年人认罪认罚有异议的；

（三）其他不需要签署认罪认罚具结书的情形。

第一百七十五条 　人民检察院审查案件，可以要求公安机关提供法庭审判所必需的证据材料；认为可能存在本法第五十六条规定的以非法方法收集证据情形的，可以要求其对证据收集的合法性作出说明。

人民检察院审查案件，对于需要补充侦查的，可以退回公安机关补充侦查，也可以自行侦查。

对于补充侦查的案件，应当在一个月以内补充侦查完毕。补充侦查以二次为限。补充侦查完毕移送人民检察院后，人民检察院重新计算审查起诉期限。

对于二次补充侦查的案件，人民检察院仍然认为证据不足，不符合起诉条件的，应当作出不起诉的决定。

第一百七十六条 　人民检察院认为犯罪嫌疑人的犯罪事实已经查清，证据确实、充分，依法应当追究刑事责任的，应当作出起诉决定，按照审判管辖的规定，向人民法院提起公诉，并将案卷材料、证据移送人民法院。

犯罪嫌疑人认罪认罚的，人民检察院应当就主刑、附加刑、是否适用缓刑等提出量刑建议，并随案移送认罪认罚具结书等材料。

第一百七十七条 　犯罪嫌疑人没有犯罪事实，或者有本法第十六条规定的情形之一的，人民检察院应当作出不起诉决定。

对于犯罪情节轻微，依照刑法规定不需要判处刑罚或者免除刑罚的，人民检察院可以作出不起诉决定。

人民检察院决定不起诉的案件，应当同时对侦查中查封、扣押、冻结的财物解除查封、扣押、冻结。对被不起诉人需要给予行政处罚、处分或者需要没收其违法所得的，人民检察院应当提出检察意见，移送有关主管机关处理。有关主管机关应当将处理结果及时通知人民检察院。

第一百七十八条 　不起诉的决定，应当公开宣布，并且将不起诉决定书送达被不起诉人和他的所在单位。如果被不起诉人在押，应当立即释放。

第一百七十九条 　对于公安机关移送起诉的案件，人民检察院决定不起诉的，应当将不起诉决定书送达公安机关。公安机关认为不起诉的决定有错误的时候，可以要求复议，如果意见不被接受，可以向上一级人民检察院提请复核。

第一百八十条 　对于有被害人的案件，决定不起诉的，人民检察院应当将不起诉决定书送达被害人。被害人如果不服，可以自收到决定书后七日以内向上一级人民检察院申诉，请求提起公诉。人民检察院应当将复查决定告知被害人。对人民检察院维持不起诉决定的，被害人可以向人民法院起诉。被害人也可以不经申诉，直接向人民法院起诉。人民法院受理案件后，人民检察院应当将有关案件材料移送人民法院。

第一百八十一条 　对于人民检察院依照本法第一百七十七条第二款规定作出的不起诉决定，被不起诉人如果不服，可以自收到决定书后七日以内向人民检察院申诉。人民检察院应当作出复查决定，通知被不起诉的人，同时抄送公安机关。

第一百八十二条 　犯罪嫌疑人自愿如实供述涉嫌犯罪的事实，有重大立功或者案件涉及国家重大利益的，经最高人民检察院核准，公安机关可以撤销案件，人民检察院可以作出不起诉决定，也可以对涉嫌数罪中的一项或者多项不起诉。

根据前款规定不起诉或者撤销案件的，人民检察院、公安机关应当及时对查封、扣押、冻结的财物及其孳息作出处理。

第三编　审　　判

第一章　审判组织

第一百八十三条 　基层人民法院、中级人民法院审判第一审案件，应当由审判员三人或者由审判员和人民陪审员共三人或者七人组成合议庭进行，但是基层人民法院适用简易程序、速裁程序的案件可以由审判员一人独任审判。

高级人民法院审判第一审案件，应当由审判员三人至七人或者由审判员和人民陪审员共三人或者七人组成合议庭进行。

最高人民法院审判第一审案件，应当由审判员三人至七人组成合议庭进行。

人民法院审判上诉和抗诉案件，由审判员三人或者五人组成合议庭进行。

合议庭的成员人数应当是单数。

第一百八十四条 　合议庭进行评议的时候，如果意见分歧，应当按多数人的意见作出决定，但是少数人的意见应当写入笔录。评议笔录由合议庭的组成人员签名。

第一百八十五条 　合议庭开庭审理并且评议后，应当作出判决。对于疑难、复杂、重大的案件，合议庭认为难以作出决定的，由合议庭提请院长决定提交审判委员会讨论决定。审判委员会的决定，合议庭应当执行。

第二章　第一审程序

第一节　公诉案件

第一百八十六条 　人民法院对提起公诉的案件进行审查后，对于起诉书中有明确的指控犯罪事实的，应当决定开庭审判。

第一百八十七条 　人民法院决定开庭审判后，应当确定合议庭的组成人员，将人民检察院的起诉书副本至迟在开庭十日以前送达被告人及其辩护人。

在开庭以前，审判人员可以召集公诉人、当事人和辩护人、诉讼代理人，对回避、出庭证人名单、非法证据排除等与审判相关的问题，了解情况，听取意见。

人民法院确定开庭日期后，应当将开庭的时间、地点通知人民检察院，传唤当事人，通知辩护人、诉讼代理人、证人、鉴定人和翻译人员，传票和通知书至迟在开庭三日以前送达。公开审判的案件，应当在开庭三日以前先期公布案由、被告人姓名、开庭时间和地点。

上述活动情形应当写入笔录，由审判人员和书记员签名。

第一百八十八条 　人民法院审判第一审案件应当公开进行。但是有关国家秘密或者个人隐私的案件，不公开审理；涉及商业秘密的案件，当事人申请不公开审理的，可以不公开审理。

不公开审理的案件，应当当庭宣布不公开审理的理由。

第一百八十九条 　人民法院审判公诉案件，人民检察院应当派员出席法庭支持公诉。

第一百九十条 　开庭的时候，审判长查明当事人是否到庭，宣布案由；宣布合议庭的组成人员、书记员、公诉人、辩护人、诉讼代理人、鉴定人和翻译人员的名单；告知当事人有权对合议庭组成人员、书记员、公诉人、鉴定人和翻译人员申请回避；告知被告人享有辩护权利。

被告人认罪认罚的，审判长应当告知被告人享有的诉讼权利和认罪认罚的法律规定，审查认罪认罚的自愿性和认罪认罚具结书内容的真实性、合法性。

第一百九十一条 　公诉人在法庭上宣读起诉书后，被告人、被害人可以就起诉书指控的犯罪进行陈述，公诉人可以讯问被告人。

被害人、附带民事诉讼的原告人和辩护人、诉讼代理人，经审判长许可，可以向被告人发问。

审判人员可以讯问被告人。

第一百九十二条 　公诉人、当事人或者辩护人、诉讼代理人对证人证言有异议，且该证人证言对案件定罪量刑有重大影响，人民法院认为证人有必要出庭作证的，证人应当出庭作证。

人民警察就其执行职务时目击的犯罪情况作为证人出庭作证，适用前款规定。

公诉人、当事人或者辩护人、诉讼代理人对鉴定意见有异议，人民法院认为鉴定人有必要出庭的，鉴定人应当出庭作证。经人民法院通知，鉴定人拒不出庭作证的，鉴定意见不得作为定案的根据。

第一百九十三条 　经人民法院通知，证人没有正当理由不出庭作证的，人民法院可以强制其到庭，但是被告人的配偶、父母、子女除外。

证人没有正当理由拒绝出庭或者出庭后拒绝作证的，予以训诫，情节严重的，经院长批准，处以十日以下的拘留。被处罚人对拘留决定不服的，可以向上一级人民法院申请复议。复议期间不停止执行。

第一百九十四条 　证人作证，审判人员应当告知他要如实地提供证言和有意作伪证或者隐匿罪证要负的法律责任。公诉人、当事人和辩护人、诉讼代理人经审判长许可，可以对证人、鉴定人发问。审判长认为发问的内容与案件无关的时候，应当制止。

审判人员可以询问证人、鉴定人。

第一百九十五条 　公诉人、辩护人应当向法庭出示物证，让当事人辨认，对未到庭的证人的证言笔录、鉴定人的鉴定意见、勘验笔录和其他作为证据的文书，应当当庭宣读。审判人员应当听取公诉人、当事人和辩护人、诉讼代理人的意见。

第一百九十六条 　法庭审理过程中，合议庭对证据有疑问的，可以宣布休庭，对证据进行调查核实。

人民法院调查核实证据，可以进行勘验、检查、查封、扣押、鉴定和查询、冻结。

第一百九十七条 　法庭审理过程中，当事人和辩护人、诉讼代理人有权申请通知新的证人到庭，调取新的物证，申请重新鉴定或者勘验。

公诉人、当事人和辩护人、诉讼代理人可以申请法庭通知有专门知识的人出庭，就鉴定人作出的鉴定意见提出意见。

法庭对于上述申请，应当作出是否同意的决定。

第二款规定的有专门知识的人出庭，适用鉴定人的有关规定。

第一百九十八条 　法庭审理过程中，对与定罪、量刑有关的事实、证据都应当进行调查、辩论。

经审判长许可，公诉人、当事人和辩护人、诉讼代理人可以对证据和案件情况发表意见并且可以互相辩论。

审判长在宣布辩论终结后，被告人有最后陈述的权利。

第一百九十九条 　在法庭审判过程中，如果诉讼参与人或者旁听人员违反法庭秩序，审判长应当警告制止。对不听制止的，可以强行带出法庭；情节严重的，处以一千元以下的罚款或者十五日以下的拘留。罚款、拘留必须经院长批准。被处罚人对罚款、拘留的决定不服的，可以向上一级人民法院申请复议。复议期间不停止执行。

对聚众哄闹、冲击法庭或者侮辱、诽谤、威胁、殴打司法工作人员或者诉讼参与人，严重扰乱法庭秩序，构成犯罪的，依法追究刑事责任。

第二百条 　在被告人最后陈述后，审判长宣布休庭，合议庭进行评议，根据已经查明的事实、证据和有关的法律规定，分别作出以下判决：

（一）案件事实清楚，证据确实、充分，依据法律认定被告人有罪的，应当作出有罪判决；

（二）依据法律认定被告人无罪的，应当作出无罪判决；

（三）证据不足，不能认定被告人有罪的，应当作出证据不足、指控的犯罪不能成立的无罪判决。

第二百零一条 　对于认罪认罚案件，人民法院依法作出判决时，一般应当采纳人民检察院指控的罪名和量刑建议，但有下列情形的除外：

（一）被告人的行为不构成犯罪或者不应当追究其刑事责任的；

（二）被告人违背意愿认罪认罚的；

（三）被告人否认指控的犯罪事实的；

（四）起诉指控的罪名与审理认定的罪名不一致的；

（五）其他可能影响公正审判的情形。

人民法院经审理认为量刑建议明显不当，或者被告人、辩护人对量刑建议提出异议的，人民检察院可以调整量刑建议。人民检察院不调整量刑建议或者调整量刑建议后仍然明显不当的，人民法院应当依法作出判决。

第二百零二条 　宣告判决，一律公开进行。

当庭宣告判决的，应当在五日以内将判决书送达当事人和提起公诉的人民检察院；定期宣告判决的，应当在宣告后立即将判决书送达当事人和提起公诉的人民检察院。判决书应当同时送达辩护人、诉讼代理人。

第二百零三条 　判决书应当由审判人员和书记员署名，并且写明上诉的期限和上诉的法院。

第二百零四条 　在法庭审判过程中，遇有下列情形之一，影响审判进行的，可以延期审理：

（一）需要通知新的证人到庭，调取新的物证，重新鉴定或者勘验的；

（二）检察人员发现提起公诉的案件需要补充侦查，提出建议的；

（三）由于申请回避而不能进行审判的。

第二百零五条 　依照本法第二百零四条第二项的规定延期审理的案件，人民检察院应当在一个月以内补充侦查完毕。

第二百零六条 　在审判过程中，有下列情形之一，致使案件在较长时间内无法继续审理的，可以中止审理：

（一）被告人患有严重疾病，无法出庭的；

（二）被告人脱逃的；

（三）自诉人患有严重疾病，无法出庭，未委托诉讼代理人出庭的；

（四）由于不能抗拒的原因。

中止审理的原因消失后，应当恢复审理。中止审理的期间不计入审理期限。

第二百零七条 　法庭审判的全部活动，应当由书记员写成笔录，经审判长审阅后，由审判长和书记员签名。

法庭笔录中的证人证言部分，应当当庭宣读或者交给证人阅读。证人在承认没有错误后，应当签名或者盖章。

法庭笔录应当交给当事人阅读或者向他宣读。当事人认为记载有遗漏或者差错的，可以请求补充或者改正。当事人承认没有错误后，应当签名或者盖章。

第二百零八条 　人民法院审理公诉案件，应当在受理后二个月以内宣判，至迟不得超过三个月。对于可能判处死刑的案件或者附带民事诉讼的案件，以及有本法第一百五十八条规定情形之一的，经上一级人民法院批准，可以延长三个月；因特殊情况还需要延长的，报请最高人民法院批准。

人民法院改变管辖的案件，从改变后的人民法院收到案件之日起计算审理期限。

人民检察院补充侦查的案件，补充侦查完毕移送人民法院后，人民法院重新计算审理期限。

第二百零九条 　人民检察院发现人民法院审理案件违反法律规定的诉讼程序，有权向人民法院提出纠正意见。

第二节　自诉案件

第二百一十条 　自诉案件包括下列案件：

（一）告诉才处理的案件；

（二）被害人有证据证明的轻微刑事案件；

（三）被害人有证据证明对被告人侵犯自己人身、财产权利的行为应当依法追究刑事责任，而公安机关或者人民检察院不予追究被告人刑事责任的案件。

第二百一十一条 　人民法院对于自诉案件进行审查后，按照下列情形分别处理：

（一）犯罪事实清楚，有足够证据的案件，应当开庭审判；

（二）缺乏罪证的自诉案件，如果自诉人提不出补充证据，应当说服自诉人撤回自诉，或者裁定驳回。

自诉人经两次依法传唤，无正当理由拒不到庭的，或者未经法庭许可中途退庭的，按撤诉处理。

法庭审理过程中，审判人员对证据有疑问，需要调查核实的，适用本法第一百九十六条的规定。

第二百一十二条 　人民法院对自诉案件，可以进行调解；自诉人在宣告判决前，可以同被告人自行和解或者撤回自诉。本法第二百一十条第三项规定的案件不适用调解。

人民法院审理自诉案件的期限，被告人被羁押的，适用本法第二百零八条第一款、第二款的规定；未被羁押的，应当在受理后六个月以内宣判。

第二百一十三条 　自诉案件的被告人在诉讼过程中，可以对自诉人提起反诉。反诉适用自诉的规定。

第三节　简易程序

第二百一十四条 　基层人民法院管辖的案件，符合下列条件的，可以适用简易程序审判：

（一）案件事实清楚、证据充分的；

（二）被告人承认自己所犯罪行，对指控的犯罪事实没有异议的；

（三）被告人对适用简易程序没有异议的。

人民检察院在提起公诉的时候，可以建议人民法院适用简易程序。

第二百一十五条 　有下列情形之一的，不适用简易程序：

（一）被告人是盲、聋、哑人，或者是尚未完全丧失辨认或者控制自己行为能力的精神病人的；

（二）有重大社会影响的；

（三）共同犯罪案件中部分被告人不认罪或者对适用简易程序有异议的；

（四）其他不宜适用简易程序审理的。

第二百一十六条 　适用简易程序审理案件，对可能判处三年有期徒刑以下刑罚的，可以组成合议庭进行审判，也可以由审判员一人独任审判；对可能判处的有期徒刑超过三年的，应当组成合议庭进行审判。

适用简易程序审理公诉案件，人民检察院应当派员出席法庭。

第二百一十七条 　适用简易程序审理案件，审判人员应当询问被告人对指控的犯罪事实的意见，告知被告人适用简易程序审理的法律规定，确认被告人是否同意适用简易程序审理。

第二百一十八条 　适用简易程序审理案件，经审判人员许可，被告人及其辩护人可以同公诉人、自诉人及其诉讼代理人互相辩论。

第二百一十九条 　适用简易程序审理案件，不受本章第一节关于送达期限、讯问被告人、询问证人、鉴定人、出示证据、法庭辩论程序规定的限制。但在判决宣告前应当听取被告人的最后陈述意见。

第二百二十条 　适用简易程序审理案件，人民法院应当在受理后二十日以内审结；对可能判处的有期徒刑超过三年的，可以延长至一个半月。

第二百二十一条 　人民法院在审理过程中，发现不宜适用简易程序的，应当按照本章第一节或者第二节的规定重新审理。

第四节　速裁程序

第二百二十二条 　基层人民法院管辖的可能判处三年有期徒刑以下刑罚的案件，案件事实清楚，证据确实、充分，被告人认罪认罚并同意适用速裁程序的，可以适用速裁程序，由审判员一人独任审判。

人民检察院在提起公诉的时候，可以建议人民法院适用速裁程序。

第二百二十三条 　有下列情形之一的，不适用速裁程序：

（一）被告人是盲、聋、哑人，或者是尚未完全丧失辨认或者控制自己行为能力的精神病人的；

（二）被告人是未成年人的；

（三）案件有重大社会影响的；

（四）共同犯罪案件中部分被告人对指控的犯罪事实、罪名、量刑建议或者适用速裁程序有异议的；

（五）被告人与被害人或者其法定代理人没有就附带民事诉讼赔偿等事项达成调解或者和解协议的；

（六）其他不宜适用速裁程序审理的。

第二百二十四条 　适用速裁程序审理案件，不受本章第一节规定的送达期限的限制，一般不进行法庭调查、法庭辩论，但在判决宣告前应当听取辩护人的意见和被告人的最后陈述意见。

适用速裁程序审理案件，应当当庭宣判。

第二百二十五条 　适用速裁程序审理案件，人民法院应当在受理后十日以内审结；对可能判处的有期徒刑超过一年的，可以延长至十五日。

第二百二十六条 　人民法院在审理过程中，发现有被告人的行为不构成犯罪或者不应当追究其刑事责任、被告人违背意愿认罪认罚、被告人否认指控的犯罪事实或者其他不宜适用速裁程序审理的情形的，应当按照本章第一节或者第三节的规定重新审理。

第三章　第二审程序

第二百二十七条 　被告人、自诉人和他们的法定代理人，不服地方各级人民法院第一审的判决、裁定，有权用书状或者口头向上一级人民法院上诉。被告人的辩护人和近亲属，经被告人同意，可以提出上诉。

附带民事诉讼的当事人和他们的法定代理人，可以对地方各级人民法院第一审的判决、裁定中的附带民事诉讼部分，提出上诉。

对被告人的上诉权，不得以任何借口加以剥夺。

第二百二十八条 　地方各级人民检察院认为本级人民法院第一审的判决、裁定确有错误的时候，应当向上一级人民法院提出抗诉。

第二百二十九条 　被害人及其法定代理人不服地方各级人民法院第一审的判决的，自收到判决书后五日以内，有权请求人民检察院提出抗诉。人民检察院自收到被害人及其法定代理人的请求后五日以内，应当作出是否抗诉的决定并且答复请求人。

第二百三十条 　不服判决的上诉和抗诉的期限为十日，不服裁定的上诉和抗诉的期限为五日，从接到判决书、裁定书的第二日起算。

第二百三十一条 　被告人、自诉人、附带民事诉讼的原告人和被告人通过原审人民法院提出上诉的，原审人民法院应当在三日以内将上诉状连同案卷、证据移送上一级人民法院，同时将上诉状副本送交同级人民检察院和对方当事人。

被告人、自诉人、附带民事诉讼的原告人和被告人直接向第二审人民法院提出上诉的，第二审人民法院应当在三日以内将上诉状交原审人民法院送交同级人民检察院和对方当事人。

第二百三十二条 　地方各级人民检察院对同级人民法院第一审判决、裁定的抗诉，应当通过原审人民法院提出抗诉书，并且将抗诉书抄送上一级人民检察院。原审人民法院应当将抗诉书连同案卷、证据移送上一级人民法院，并且将抗诉书副本送交当事人。

上级人民检察院如果认为抗诉不当，可以向同级人民法院撤回抗诉，并且通知下级人民检察院。

第二百三十三条 　第二审人民法院应当就第一审判决认定的事实和适用法律进行全面审查，不受上诉或者抗诉范围的限制。

共同犯罪的案件只有部分被告人上诉的，应当对全案进行审查，一并处理。

第二百三十四条 　第二审人民法院对于下列案件，应当组成合议庭，开庭审理：

（一）被告人、自诉人及其法定代理人对第一审认定的事实、证据提出异议，可能影响定罪量刑的上诉案件；

（二）被告人被判处死刑的上诉案件；

（三）人民检察院抗诉的案件；

（四）其他应当开庭审理的案件。

第二审人民法院决定不开庭审理的，应当讯问被告人，听取其他当事人、辩护人、诉讼代理人的意见。

第二审人民法院开庭审理上诉、抗诉案件，可以到案件发生地或者原审人民法院所在地进行。

第二百三十五条 　人民检察院提出抗诉的案件或者第二审人民法院开庭审理的公诉案件，同级人民检察院都应当派员出席法庭。第二审人民法院应当在决定开庭审理后及时通知人民检察院查阅案卷。人民检察院应当在一个月以内查阅完毕。人民检察院查阅案卷的时间不计入审理期限。

第二百三十六条 　第二审人民法院对不服第一审判决的上诉、抗诉案件，经过审理后，应当按照下列情形分别处理：

（一）原判决认定事实和适用法律正确、量刑适当的，应当裁定驳回上诉或者抗诉，维持原判；

（二）原判决认定事实没有错误，但适用法律有错误，或者量刑不当的，应当改判；

（三）原判决事实不清楚或者证据不足的，可以在查清事实后改判；也可以裁定撤销原判，发回原审人民法院重新审判。

原审人民法院对于依照前款第三项规定发回重新审判的案件作出判决后，被告人提出上诉或者人民检察院提出抗诉的，第二审人民法院应当依法作出判决或者裁定，不得再发回原审人民法院重新审判。

第二百三十七条 　第二审人民法院审理被告人或者他的法定代理人、辩护人、近亲属上诉的案件，不得加重被告人的刑罚。第二审人民法院发回原审人民法院重新审判的案件，除有新的犯罪事实，人民检察院补充起诉的以外，原审人民法院也不得加重被告人的刑罚。

人民检察院提出抗诉或者自诉人提出上诉的，不受前款规定的限制。

第二百三十八条 　第二审人民法院发现第一审人民法院的审理有下列违反法律规定的诉讼程序的情形之一的，应当裁定撤销原判，发回原审人民法院重新审判：

（一）违反本法有关公开审判的规定的；

（二）违反回避制度的；

（三）剥夺或者限制了当事人的法定诉讼权利，可能影响公正审判的；

（四）审判组织的组成不合法的；

（五）其他违反法律规定的诉讼程序，可能影响公正审判的。

第二百三十九条 　原审人民法院对于发回重新审判的案件，应当另行组成合议庭，依照第一审程序进行审判。对于重新审判后的判决，依照本法第二百二十七条、第二百二十八条、第二百二十九条的规定可以上诉、抗诉。

第二百四十条 　第二审人民法院对不服第一审裁定的上诉或者抗诉，经过审查后，应当参照本法第二百三十六条、第二百三十八条和第二百三十九条的规定，分别情形用裁定驳回上诉、抗诉，或者撤销、变更原裁定。

第二百四十一条 　第二审人民法院发回原审人民法院重新审判的案件，原审人民法院从收到发回的案件之日起，重新计算审理期限。

第二百四十二条 　第二审人民法院审判上诉或者抗诉案件的程序，除本章已有规定的以外，参照第一审程序的规定进行。

第二百四十三条 　第二审人民法院受理上诉、抗诉案件，应当在二个月以内审结。对于可能判处死刑的案件或者附带民事诉讼的案件，以及有本法第一百五十八条规定情形之一的，经省、自治区、直辖市高级人民法院批准或者决定，可以延长二个月；因特殊情况还需要延长的，报请最高人民法院批准。

最高人民法院受理上诉、抗诉案件的审理期限，由最高人民法院决定。

第二百四十四条 　第二审的判决、裁定和最高人民法院的判决、裁定，都是终审的判决、裁定。

第二百四十五条 　公安机关、人民检察院和人民法院对查封、扣押、冻结的犯罪嫌疑人、被告人的财物及其孳息，应当妥善保管，以供核查，并制作清单，随案移送。任何单位和个人不得挪用或者自行处理。对被害人的合法财产，应当及时返还。对违禁品或者不宜长期保存的物品，应当依照国家有关规定处理。

对作为证据使用的实物应当随案移送，对不宜移送的，应当将其清单、照片或者其他证明文件随案移送。

人民法院作出的判决，应当对查封、扣押、冻结的财物及其孳息作出处理。

人民法院作出的判决生效以后，有关机关应当根据判决对查封、扣押、冻结的财物及其孳息进行处理。对查封、扣押、冻结的赃款赃物及其孳息，除依法返还被害人的以外，一律上缴国库。

司法工作人员贪污、挪用或者私自处理查封、扣押、冻结的财物及其孳息的，依法追究刑事责任；不构成犯罪的，给予处分。

第四章死刑复核程序

第二百四十六条 　死刑由最高人民法院核准。

第二百四十七条 　中级人民法院判处死刑的第一审案件，被告人不上诉的，应当由高级人民法院复核后，报请最高人民法院核准。高级人民法院不同意判处死刑的，可以提审或者发回重新审判。

高级人民法院判处死刑的第一审案件被告人不上诉的，和判处死刑的第二审案件，都应当报请最高人民法院核准。

第二百四十八条 　中级人民法院判处死刑缓期二年执行的案件，由高级人民法院核准。

第二百四十九条 　最高人民法院复核死刑案件，高级人民法院复核死刑缓期执行的案件，应当由审判员三人组成合议庭进行。

第二百五十条 　最高人民法院复核死刑案件，应当作出核准或者不核准死刑的裁定。对于不核准死刑的，最高人民法院可以发回重新审判或者予以改判。

第二百五十一条 　最高人民法院复核死刑案件，应当讯问被告人，辩护律师提出要求的，应当听取辩护律师的意见。

在复核死刑案件过程中，最高人民检察院可以向最高人民法院提出意见。最高人民法院应当将死刑复核结果通报最高人民检察院。

第五章　审判监督程序

第二百五十二条 　当事人及其法定代理人、近亲属，对已经发生法律效力的判决、裁定，可以向人民法院或者人民检察院提出申诉，但是不能停止判决、裁定的执行。

第二百五十三条 　当事人及其法定代理人、近亲属的申诉符合下列情形之一的，人民法院应当重新审判：

（一）有新的证据证明原判决、裁定认定的事实确有错误，可能影响定罪量刑的；

（二）据以定罪量刑的证据不确实、不充分、依法应当予以排除，或者证明案件事实的主要证据之间存在矛盾的；

（三）原判决、裁定适用法律确有错误的；

（四）违反法律规定的诉讼程序，可能影响公正审判的；

（五）审判人员在审理该案件的时候，有贪污受贿，徇私舞弊，枉法裁判行为的。

第二百五十四条 　各级人民法院院长对本院已经发生法律效力的判决和裁定，如果发现在认定事实上或者在适用法律上确有错误，必须提交审判委员会处理。

最高人民法院对各级人民法院已经发生法律效力的判决和裁定，上级人民法院对下级人民法院已经发生法律效力的判决和裁定，如果发现确有错误，有权提审或者指令下级人民法院再审。

最高人民检察院对各级人民法院已经发生法律效力的判决和裁定，上级人民检察院对下级人民法院已经发生法律效力的判决和裁定，如果发现确有错误，有权按照审判监督程序向同级人民法院提出抗诉。

人民检察院抗诉的案件，接受抗诉的人民法院应当组成合议庭重新审理，对于原判决事实不清楚或者证据不足的，可以指令下级人民法院再审。

第二百五十五条 　上级人民法院指令下级人民法院再审的，应当指令原审人民法院以外的下级人民法院审理；由原审人民法院审理更为适宜的，也可以指令原审人民法院审理。

第二百五十六条 　人民法院按照审判监督程序重新审判的案件，由原审人民法院审理的，应当另行组成合议庭进行。如果原来是第一审案件，应当依照第一审程序进行审判，所作的判决、裁定，可以上诉、抗诉；如果原来是第二审案件，或者是上级人民法院提审的案件，应当依照第二审程序进行审判，所作的判决、裁定，是终审的判决、裁定。

人民法院开庭审理的再审案件，同级人民检察院应当派员出席法庭。

第二百五十七条 　人民法院决定再审的案件，需要对被告人采取强制措施的，由人民法院依法决定；人民检察院提出抗诉的再审案件，需要对被告人采取强制措施的，由人民检察院依法决定。

人民法院按照审判监督程序审判的案件，可以决定中止原判决、裁定的执行。

第二百五十八条 　人民法院按照审判监督程序重新审判的案件，应当在作出提审、再审决定之日起三个月以内审结，需要延长期限的，不得超过六个月。

接受抗诉的人民法院按照审判监督程序审判抗诉的案件，审理期限适用前款规定；对需要指令下级人民法院再审的，应当自接受抗诉之日起一个月以内作出决定，下级人民法院审理案件的期限适用前款规定。

第四编　执　　行

第二百五十九条 　判决和裁定在发生法律效力后执行。

下列判决和裁定是发生法律效力的判决和裁定：

（一）已过法定期限没有上诉、抗诉的判决和裁定；

（二）终审的判决和裁定；

（三）最高人民法院核准的死刑的判决和高级人民法院核准的死刑缓期二年执行的判决。

第二百六十条 　第一审人民法院判决被告人无罪、免除刑事处罚的，如果被告人在押，在宣判后应当立即释放。

第二百六十一条 　最高人民法院判处和核准的死刑立即执行的判决，应当由最高人民法院院长签发执行死刑的命令。

被判处死刑缓期二年执行的罪犯，在死刑缓期执行期间，如果没有故意犯罪，死刑缓期执行期满，应当予以减刑的，由执行机关提出书面意见，报请高级人民法院裁定；如果故意犯罪，情节恶劣，查证属实，应当执行死刑的，由高级人民法院报请最高人民法院核准；对于故意犯罪未执行死刑的，死刑缓期执行的期间重新计算，并报最高人民法院备案。

第二百六十二条 　下级人民法院接到最高人民法院执行死刑的命令后，应当在七日以内交付执行。但是发现有下列情形之一的，应当停止执行，并且立即报告最高人民法院，由最高人民法院作出裁定：

（一）在执行前发现判决可能有错误的；

（二）在执行前罪犯揭发重大犯罪事实或者有其他重大立功表现，可能需要改判的；

（三）罪犯正在怀孕。

前款第一项、第二项停止执行的原因消失后，必须报请最高人民法院院长再签发执行死刑的命令才能执行；由于前款第三项原因停止执行的，应当报请最高人民法院依法改判。

第二百六十三条 　人民法院在交付执行死刑前，应当通知同级人民检察院派员临场监督。

死刑采用枪决或者注射等方法执行。

死刑可以在刑场或者指定的羁押场所内执行。

指挥执行的审判人员，对罪犯应当验明正身，讯问有无遗言、信札，然后交付执行人员执行死刑。在执行前，如果发现可能有错误，应当暂停执行，报请最高人民法院裁定。

执行死刑应当公布，不应示众。

执行死刑后，在场书记员应当写成笔录。交付执行的人民法院应当将执行死刑情况报告最高人民法院。

执行死刑后，交付执行的人民法院应当通知罪犯家属。

第二百六十四条 　罪犯被交付执行刑罚的时候，应当由交付执行的人民法院在判决生效后十日以内将有关的法律文书送达公安机关、监狱或者其他执行机关。

对被判处死刑缓期二年执行、无期徒刑、有期徒刑的罪犯，由公安机关依法将该罪犯送交监狱执行刑罚。对被判处有期徒刑的罪犯，在被交付执行刑罚前，剩余刑期在三个月以下的，由看守所代为执行。对被判处拘役的罪犯，由公安机关执行。

对未成年犯应当在未成年犯管教所执行刑罚。

执行机关应当将罪犯及时收押，并且通知罪犯家属。

判处有期徒刑、拘役的罪犯，执行期满，应当由执行机关发给释放证明书。

第二百六十五条 　对被判处有期徒刑或者拘役的罪犯，有下列情形之一的，可以暂予监外执行：

（一）有严重疾病需要保外就医的；

（二）怀孕或者正在哺乳自己婴儿的妇女；

（三）生活不能自理，适用暂予监外执行不致危害社会的。

对被判处无期徒刑的罪犯，有前款第二项规定情形的，可以暂予监外执行。

对适用保外就医可能有社会危险性的罪犯，或者自伤自残的罪犯，不得保外就医。

对罪犯确有严重疾病，必须保外就医的，由省级人民政府指定的医院诊断并开具证明文件。

在交付执行前，暂予监外执行由交付执行的人民法院决定；在交付执行后，暂予监外执行由监狱或者看守所提出书面意见，报省级以上监狱管理机关或者设区的市一级以上公安机关批准。

第二百六十六条 　监狱、看守所提出暂予监外执行的书面意见的，应当将书面意见的副本抄送人民检察院。人民检察院可以向决定或者批准机关提出书面意见。

第二百六十七条 　决定或者批准暂予监外执行的机关应当将暂予监外执行决定抄送人民检察院。人民检察院认为暂予监外执行不当的，应当自接到通知之日起一个月以内将书面意见送交决定或者批准暂予监外执行的机关，决定或者批准暂予监外执行的机关接到人民检察院的书面意见后，应当立即对该决定进行重新核查。

第二百六十八条 　对暂予监外执行的罪犯，有下列情形之一的，应当及时收监：

（一）发现不符合暂予监外执行条件的；

（二）严重违反有关暂予监外执行监督管理规定的；

（三）暂予监外执行的情形消失后，罪犯刑期未满的。

对于人民法院决定暂予监外执行的罪犯应当予以收监的，由人民法院作出决定，将有关的法律文书送达公安机关、监狱或者其他执行机关。

不符合暂予监外执行条件的罪犯通过贿赂等非法手段被暂予监外执行的，在监外执行的期间不计入执行刑期。罪犯在暂予监外执行期间脱逃的，脱逃的期间不计入执行刑期。

罪犯在暂予监外执行期间死亡的，执行机关应当及时通知监狱或者看守所。

第二百六十九条 　对被判处管制、宣告缓刑、假释或者暂予监外执行的罪犯，依法实行社区矫正，由社区矫正机构负责执行。

第二百七十条 　对被判处剥夺政治权利的罪犯，由公安机关执行。执行期满，应当由执行机关书面通知本人及其所在单位、居住地基层组织。

第二百七十一条 　被判处罚金的罪犯，期满不缴纳的，人民法院应当强制缴纳；如果由于遭遇不能抗拒的灾祸等原因缴纳确实有困难的，经人民法院裁定，可以延期缴纳、酌情减少或者免除。

第二百七十二条 　没收财产的判决，无论附加适用或者独立适用，都由人民法院执行；在必要的时候，可以会同公安机关执行。

第二百七十三条 　罪犯在服刑期间又犯罪的，或者发现了判决的时候所没有发现的罪行，由执行机关移送人民检察院处理。

被判处管制、拘役、有期徒刑或者无期徒刑的罪犯，在执行期间确有悔改或者立功表现，应当依法予以减刑、假释的时候，由执行机关提出建议书，报请人民法院审核裁定，并将建议书副本抄送人民检察院。人民检察院可以向人民法院提出书面意见。

第 二百七十四条 　人民检察院认为人民法院减刑、假释的裁定不当，应当在收到裁定书副本后二十日以内，向人民法院提出书面纠正意见。人民法院应当在收到纠正意见后一个月以内重新组成合议庭进行审理，作出最终裁定。

第二百七十五条 　监狱和其他执行机关在刑罚执行中，如果认为判决有错误或者罪犯提出申诉，应当转请人民检察院或者原判人民法院处理。

第二百七十六条 　人民检察院对执行机关执行刑罚的活动是否合法实行监督。如果发现有违法的情况，应当通知执行机关纠正。

第五编　特别程序

第一章　未成年人刑事案件诉讼程序

第二百七十七条 　对犯罪的未成年人实行教育、感化、挽救的方针，坚持教育为主、惩罚为辅的原则。

人民法院、人民检察院和公安机关办理未成年人刑事案件，应当保障未成年人行使其诉讼权利，保障未成年人得到法律帮助，并由熟悉未成年人身心特点的审判人员、检察人员、侦查人员承办。

第二百七十八条 　未成年犯罪嫌疑人、被告人没有委托辩护人的，人民法院、人民检察院、公安机关应当通知法律援助机构指派律师为其提供辩护。

第二百七十九条 　公安机关、人民检察院、人民法院办理未成年人刑事案件，根据情况可以对未成年犯罪嫌疑人、被告人的成长经历、犯罪原因、监护教育等情况进行调查。

第二百八十条 　对未成年犯罪嫌疑人、被告人应当严格限制适用逮捕措施。人民检察院审查批准逮捕和人民法院决定逮捕，应当讯问未成年犯罪嫌疑人、被告人，听取辩护律师的意见。

对被拘留、逮捕和执行刑罚的未成年人与成年人应当分别关押、分别管理、分别教育。

第二百八十一条 　对于未成年人刑事案件，在讯问和审判的时候，应当通知未成年犯罪嫌疑人、被告人的法定代理人到场。无法通知、法定代理人不能到场或者法定代理人是共犯的，也可以通知未成年犯罪嫌疑人、被告人的其他成年亲属，所在学校、单位、居住地基层组织或者未成年人保护组织的代表到场，并将有关情况记录在案。到场的法定代理人可以代为行使未成年犯罪嫌疑人、被告人的诉讼权利。

到场的法定代理人或者其他人员认为办案人员在讯问、审判中侵犯未成年人合法权益的，可以提出意见。讯问笔录、法庭笔录应当交给到场的法定代理人或者其他人员阅读或者向他宣读。

讯问女性未成年犯罪嫌疑人，应当有女工作人员在场。

审判未成年人刑事案件，未成年被告人最后陈述后，其法定代理人可以进行补充陈述。

询问未成年被害人、证人，适用第一款、第二款、第三款的规定。

第二百八十二条 　对于未成年人涉嫌刑法分则第四章、第五章、第六章规定的犯罪，可能判处一年有期徒刑以下刑罚，符合起诉条件，但有悔罪表现的，人民检察院可以作出附条件不起诉的决定。人民检察院在作出附条件不起诉的决定以前，应当听取公安机关、被害人的意见。

对附条件不起诉的决定，公安机关要求复议、提请复核或者被害人申诉的，适用本法第一百七十九条、第一百八十条的规定。

未成年犯罪嫌疑人及其法定代理人对人民检察院决定附条件不起诉有异议的，人民检察院应当作出起诉的决定。

第二百八十三条 　在附条件不起诉的考验期内，由人民检察院对被附条件不起诉的未成年犯罪嫌疑人进行监督考察。未成年犯罪嫌疑人的监护人，应当对未成年犯罪嫌疑人加强管教，配合人民检察院做好监督考察工作。

附条件不起诉的考验期为六个月以上一年以下，从人民检察院作出附条件不起诉的决定之日起计算。

被附条件不起诉的未成年犯罪嫌疑人，应当遵守下列规定：

（一）遵守法律法规，服从监督；

（二）按照考察机关的规定报告自己的活动情况；

（三）离开所居住的市、县或者迁居，应当报经考察机关批准；

（四）按照考察机关的要求接受矫治和教育。

第二百八十四条 　被附条件不起诉的未成年犯罪嫌疑人，在考验期内有下列情形之一的，人民检察院应当撤销附条件不起诉的决定，提起公诉：

（一）实施新的犯罪或者发现决定附条件不起诉以前还有其他犯罪需要追诉的；

（二）违反治安管理规定或者考察机关有关附条件不起诉的监督管理规定，情节严重的。

被附条件不起诉的未成年犯罪嫌疑人，在考验期内没有上述情形，考验期满的，人民检察院应当作出不起诉的决定。

第二百八十五条 　审判的时候被告人不满十八周岁的案件，不公开审理。但是，经未成年被告人及其法定代理人同意，未成年被告人所在学校和未成年人保护组织可以派代表到场。

第二百八十六条 　犯罪的时候不满十八周岁，被判处五年有期徒刑以下刑罚的，应当对相关犯罪记录予以封存。

犯罪记录被封存的，不得向任何单位和个人提供，但司法机关为办案需要或者有关单位根据国家规定进行查询的除外。依法进行查询的单位，应当对被封存的犯罪记录的情况予以保密。

第二百八十七条 　办理未成年人刑事案件，除本章已有规定的以外，按照本法的其他规定进行。

第二章　当事人和解的公诉案件诉讼程序

第二百八十八条 　下列公诉案件，犯罪嫌疑人、被告人真诚悔罪，通过向被害人赔偿损失、赔礼道歉等方式获得被害人谅解，被害人自愿和解的，双方当事人可以和解：

（一）因民间纠纷引起，涉嫌刑法分则第四章、第五章规定的犯罪案件，可能判处三年有期徒刑以下刑罚的；

（二）除渎职犯罪以外的可能判处七年有期徒刑以下刑罚的过失犯罪案件。

犯罪嫌疑人、被告人在五年以内曾经故意犯罪的，不适用本章规定的程序。

第二百八十九条 　双方当事人和解的，公安机关、人民检察院、人民法院应当听取当事人和其他有关人员的意见，对和解的自愿性、合法性进行审查，并主持制作和解协议书。

第二百九十条 　对于达成和解协议的案件，公安机关可以向人民检察院提出从宽处理的建议。人民检察院可以向人民法院提出从宽处罚的建议；对于犯罪情节轻微，不需要判处刑罚的，可以作出不起诉的决定。人民法院可以依法对被告人从宽处罚。

第三章　缺席审判程序

第二百九十一条 　对于贪污贿赂犯罪案件，以及需要及时进行审判，经最高人民检察院核准的严重危害国家安全犯罪、恐怖活动犯罪案件，犯罪嫌疑人、被告人在境外，监察机关、公安机关移送起诉，人民检察院认为犯罪事实已经查清，证据确实、充分，依法应当追究刑事责任的，可以向人民法院提起公诉。人民法院进行审查后，对于起诉书中有明确的指控犯罪事实，符合缺席审判程序适用条件的，应当决定开庭审判。

前款案件，由犯罪地、被告人离境前居住地或者最高人民法院指定的中级人民法院组成合议庭进行审理。

第二百九十二条 　人民法院应当通过有关国际条约规定的或者外交途径提出的司法协助方式，或者被告人所在地法律允许的其他方式，将传票和人民检察院的起诉书副本送达被告人。传票和起诉书副本送达后，被告人未按要求到案的，人民法院应当开庭审理，依法作出判决，并对违法所得及其他涉案财产作出处理。

第二百九十三条 　人民法院缺席审判案件，被告人有权委托辩护人，被告人的近亲属可以代为委托辩护人。被告人及其近亲属没有委托辩护人的，人民法院应当通知法律援助机构指派律师为其提供辩护。

第二百九十四条 　人民法院应当将判决书送达被告人及其近亲属、辩护人。被告人或者其近亲属不服判决的，有权向上一级人民法院上诉。辩护人经被告人或者其近亲属同意，可以提出上诉。

人民检察院认为人民法院的判决确有错误的，应当向上一级人民法院提出抗诉。

第二百九十五条 　在审理过程中，被告人自动投案或者被抓获的，人民法院应当重新审理。

罪犯在判决、裁定发生法律效力后到案的，人民法院应当将罪犯交付执行刑罚。交付执行刑，人民法院应当告知罪犯有权对判决、裁定提出异议。罪犯对判决、裁定提出异议的，人民法院应当重新审理。

依照生效判决、裁定对罪犯的财产进行的处理确有错误的，应当予以返还、赔偿。

第二百九十六条 　因被告人患有严重疾病无法出庭，中止审理超过六个月，被告人仍无法出庭，被告人及其法定代理人、近亲属申请或者同意恢复审理的，人民法院可以在被告人不出庭的情况下缺席审理，依法作出判决。

第二百九十七条 　被告人死亡的，人民法院应当裁定终止审理，但有证据证明被告人无罪，人民法院经缺席审理确认无罪的，应当依法作出判决。

人民法院按照审判监督程序重新审判的案件，被告人死亡的，人民法院可以缺席审理，依法作出判决。

第四章　犯罪嫌疑人、被告人逃匿、死亡案件

违法所得的没收程序

第二百九十八条 　对于贪污贿赂犯罪、恐怖活动犯罪等重大犯罪案件，犯罪嫌疑人、被告人逃匿，在通缉一年后不能到案，或者犯罪嫌疑人、被告人死亡，依照刑法规定应当追缴其违法所得及其他涉案财产的，人民检察院可以向人民法院提出没收违法所得的申请。

公安机关认为有前款规定情形的，应当写出没收违法所得意见书，移送人民检察院。

没收违法所得的申请应当提供与犯罪事实、违法所得相关的证据材料，并列明财产的种类、数量、所在地及查封、扣押、冻结的情况。

人民法院在必要的时候，可以查封、扣押、冻结申请没收的财产。

第二百九十九条 　没收违法所得的申请，由犯罪地或者犯罪嫌疑人、被告人居住地的中级人民法院组成合议庭进行审理。

人民法院受理没收违法所得的申请后，应当发出公告。公告期间为六个月。犯罪嫌疑人、被告人的近亲属和其他利害关系人有权申请参加诉讼，也可以委托诉讼代理人参加诉讼。

人民法院在公告期满后对没收违法所得的申请进行审理。利害关系人参加诉讼的，人民法院应当开庭审理。

第三百条 　人民法院经审理，对经查证属于违法所得及其他涉案财产，除依法返还被害人的以外，应当裁定予以没收；对不属于应当追缴的财产的，应当裁定驳回申请，解除查封、扣押、冻结措施。

对于人民法院依照前款规定作出的裁定，犯罪嫌疑人、被告人的近亲属和其他利害关系人或者人民检察院可以提出上诉、抗诉。

第三百零一条 　在审理过程中，在逃的犯罪嫌疑人、被告人自动投案或者被抓获的，人民法院应当终止审理。

没收犯罪嫌疑人、被告人财产确有错误的，应当予以返还、赔偿。

第五章依法不负刑事责任的精神病人的强制医疗程序

第三百零二条 　实施暴力行为，危害公共安全或者严重危害公民人身安全，经法定程序鉴定依法不负刑事责任的精神病人，有继续危害社会可能的，可以予以强制医疗。

第三百零三条 　根据本章规定对精神病人强制医疗的，由人民法院决定。

公安机关发现精神病人符合强制医疗条件的，应当写出强制医疗意见书，移送人民检察院。对于公安机关移送的或者在审查起诉过程中发现的精神病人符合强制医疗条件的，人民检察院应当向人民法院提出强制医疗的申请。人民法院在审理案件过程中发现被告人符合强制医疗条件的，可以作出强制医疗的决定。

对实施暴力行为的精神病人，在人民法院决定强制医疗前，公安机关可以采取临时的保护性约束措施。

第三百零四条 　人民法院受理强制医疗的申请后，应当组成合议庭进行审理。

人民法院审理强制医疗案件，应当通知被申请人或者被告人的法定代理人到场。被申请人或者被告人没有委托诉讼代理人的，人民法院应当通知法律援助机构指派律师为其提供法律帮助。

第三百零五条 　人民法院经审理，对于被申请人或者被告人符合强制医疗条件的，应当在一个月以内作出强制医疗的决定。

被决定强制医疗的人、被害人及其法定代理人、近亲属对强制医疗决定不服的，可以向上一级人民法院申请复议。

第三百零六条 　强制医疗机构应当定期对被强制医疗的人进行诊断评估。对于已不具有人身危险性，不需要继续强制医疗的，应当及时提出解除意见，报决定强制医疗的人民法院批准。

被强制医疗的人及其近亲属有权申请解除强制医疗。

第三百零七条 　人民检察院对强制医疗的决定和执行实行监督。

附　　则

第三百零八条 　军队保卫部门对军队内部发生的刑事案件行使侦查权。

中国海警局履行海上维权执法职责，对海上发生的刑事案件行使侦查权。

对罪犯在监狱内犯罪的案件由监狱进行侦查。

军队保卫部门、中国海警局、监狱办理刑事案件，适用本法的有关规定。

编 辑： 冯涛

责 编： 张绍敏

[按回车键在新窗口打开无障碍说明页面,按Ctrl+~键打开导盲模式。](http://www.npc.gov.cn/npc/c2/c12435/201905/)`,hv={archive:{created:"2025-11-19T13:33:25.873Z",modified:"2025-11-19T14:49:03.244Z"},cv:{created:"2025-11-19T16:06:22.688Z",modified:"2025-11-19T16:06:22.689Z"},"example-literary":{created:"2025-11-19T15:10:28.846Z",modified:"2025-11-19T15:20:54.283Z"},"example-poetry":{created:"2025-11-19T15:15:42.310Z",modified:"2025-11-19T15:20:54.273Z"},post:{created:"2025-11-19T13:08:44.571Z",modified:"2025-11-19T14:21:34.414Z"},test:{created:"2025-11-19T12:33:46.875Z",modified:"2025-11-19T15:20:54.267Z"},中华人民共和国仲裁法_中国人大网:{created:"2025-11-19T13:38:55.467Z",modified:"2025-11-19T15:10:59.686Z"},中华人民共和国刑事诉讼法_中国人大网:{created:"2025-11-19T13:38:55.463Z",modified:"2025-11-18T06:05:55.000Z"}},mv=[{id:"entropy",title:"ENTROPY",tag:"CHAOS THEORY",content:`
Entropy is not just a measure of disorder; it is the *inevitable direction of time itself*.

## The Illusion of Control

Traditional design seeks to comfort the user. But art is not always about comfort.

> "Every pixel that is out of place is a victory for the organic over the synthetic."

### Design Principles
- Reject perfectionism
- Embrace raw HTML structure
- Use system fonts
    `}],xp=Object.assign({"../posts/archive.md":iv,"../posts/cv.md":av,"../posts/example-literary.md":rv,"../posts/example-poetry.md":uv,"../posts/post.md":ov,"../posts/test.md":cv,"../posts/中华人民共和国仲裁法_中国人大网.md":sv,"../posts/中华人民共和国刑事诉讼法_中国人大网.md":fv}),dv=n=>{if(!n)return{attributes:{},body:""};const a=n.trimStart(),i=/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/,u=a.match(i);if(!u)return{attributes:{},body:n};const o=u[1],s=u[2],f={};let m=null,d=null;return o.split(/\r?\n/).forEach(p=>{const b=p.match(/^\s*-\s*(.+)$/);if(b){if(m&&d){const w=b[1].trim().replace(/^['"](.*)['"]$/,"$1");d.push(w)}return}const g=p.indexOf(":");if(g===-1)return;const S=p.slice(0,g).trim(),x=p.slice(g+1).trim();if(S)if(x===""||x===null)m=S,d=[],f[S]=d;else{const w=x.replace(/^['"](.*)['"]$/,"$1");f[S]=w,m=null,d=null}}),Object.keys(f).forEach(p=>{Array.isArray(f[p])&&(f[p]=f[p].join(", "))}),{attributes:f,body:s}},pv=()=>Object.keys(xp).map(a=>{const i=a.split("/").pop().replace(".md",""),u=xp[a],{attributes:o,body:s}=dv(u),f=hv[i]||{},m=o.date||o.created||o.published||f.created,d=o.modified||f.modified;let p=null;if(m&&d){const b=new Date(m).getTime();new Date(d).getTime()-b>6e4&&(p=d)}return{id:i,title:o.title||i.toUpperCase(),tag:o.tag||o.tags||"UNTAGGED",type:o.type||"default",date:m,modified:p,isSpecialPage:o.special==="true"||o.special===!0,sortTimestamp:m?new Date(m).getTime():0,content:s}}).sort((a,i)=>!a.sortTimestamp&&!i.sortTimestamp?0:a.sortTimestamp?i.sortTimestamp?i.sortTimestamp-a.sortTimestamp:-1:1),vp=pv(),qs=vp.length>0?vp:mv,Ni=qs.filter(n=>!n.isSpecialPage),gv=()=>{const n=new Set;return Ni.forEach(a=>{a.tag&&a.tag!=="UNTAGGED"&&a.tag.split(",").forEach(i=>{const u=i.trim();u&&n.add(u)})}),Array.from(n).sort()},Sp=n=>n?Ni.filter(a=>a.tag?a.tag.split(",").map(u=>u.trim()).includes(n):!1):Ni,yv=({children:n})=>{const[a,i]=Y.useState(!1),[u,o]=Y.useState(!1),s=Tu();return un(),Y.useEffect(()=>{const f=m=>{const d=m.target;if(!(d.tagName==="INPUT"||d.tagName==="TEXTAREA")){if((m.ctrlKey||m.metaKey)&&m.key==="k")return m.preventDefault(),m.stopPropagation(),i(!0),!1;if(m.key==="?"&&!a){m.preventDefault(),o(p=>!p);return}if(m.key==="Escape"){a&&i(!1),u&&o(!1);return}!a&&!u&&(m.key==="h"||m.key==="H"?(m.preventDefault(),s("/")):m.key==="a"||m.key==="A"?(m.preventDefault(),s("/archive")):(m.key==="b"||m.key==="B")&&(m.preventDefault(),s("/about")))}};return window.addEventListener("keydown",f,!0),()=>window.removeEventListener("keydown",f,!0)},[a,u,s]),k.jsxs("div",{className:"min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden",children:[k.jsx(Rx,{}),k.jsx(ev,{onSearchClick:()=>i(!0),onHelpClick:()=>o(!0)}),k.jsx(tv,{}),k.jsx("main",{className:"md:pl-12 pt-8 min-h-screen flex flex-col",children:n}),k.jsx(nv,{isOpen:a,onClose:()=>i(!1),posts:qs}),k.jsx(lv,{isOpen:u,onClose:()=>o(!1)})]})},kp="!@#$%^&*()_+-=[]{}|;:,.<>?/",bv=({text:n,className:a=""})=>{const[i,u]=Y.useState(n),o=()=>{let s=0;const f=setInterval(()=>{u(n.split("").map((m,d)=>d<s?n[d]:kp[Math.floor(Math.random()*kp.length)]).join("")),s>=n.length&&clearInterval(f),s+=1/3},30)};return k.jsx("span",{onMouseEnter:o,className:`cursor-pointer inline-block ${a}`,children:i})},xv=({title:n,id:a,index:i,tag:u,date:o,onHover:s,isFocused:f,disableHover:m})=>{const d=()=>{typeof s=="function"&&!m&&s(i)},p=b=>{if(!b)return null;try{return new Date(b).toISOString().split("T")[0]}catch{return b}};return k.jsx(St,{id:`list-item-${i}`,to:`/post/${a}`,className:"block",onMouseEnter:d,children:k.jsx("div",{className:`group border-b border-black py-8 px-4 relative overflow-hidden transition-colors duration-0 ${f?"bg-black text-white is-focused":m?"":"hover:bg-black hover:text-white"}`,children:k.jsxs("div",{className:"flex justify-between items-start relative z-10",children:[k.jsx("div",{className:`w-12 font-mono text-xs pt-2 ${f?"opacity-100":"opacity-50 group-hover:opacity-100"}`,children:`(00${i+1})`}),k.jsxs("div",{className:"flex-1",children:[k.jsx("h2",{className:`text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter transition-transform duration-100 ease-linear ${f?"translate-x-4":m?"":"group-hover:translate-x-4"}`,children:n}),k.jsxs("div",{className:`mt-2 flex items-center gap-4 font-mono text-xs tracking-widest uppercase ${f?"opacity-100":m?"opacity-0":"opacity-0 group-hover:opacity-100"}`,children:[k.jsx("span",{children:"[ Read Article ]"}),u&&k.jsx("span",{className:"border border-current px-1 rounded-sm",children:u}),o&&k.jsx("span",{className:"opacity-70",children:p(o)})]})]}),k.jsx(Gx,{className:`w-8 h-8 md:w-12 md:h-12 ${f?"opacity-100":m?"opacity-0":"opacity-0 group-hover:opacity-100"}`})]})})})},vv=({posts:n=[]})=>{const[a,i]=Y.useState(-1),[u,o]=Y.useState(!1),s=n.slice(0,10);return Y.useEffect(()=>{if(a<0)return;const f=document.getElementById(`list-item-${a}`);f&&f.scrollIntoView({behavior:"smooth",block:"nearest"})},[a]),Y.useEffect(()=>{const f=d=>{["ArrowUp","ArrowDown","Enter"].includes(d.key)&&s.length&&(["ArrowUp","ArrowDown"].includes(d.key)&&(d.preventDefault(),o(!0)),d.key==="ArrowDown"?i(p=>(p+1)%s.length):d.key==="ArrowUp"?i(p=>(p-1+s.length)%s.length):d.key==="Enter"&&a!==-1&&(window.location.hash=`#/post/${s[a].id}`))},m=()=>{u&&o(!1)};return window.addEventListener("keydown",f),window.addEventListener("mousemove",m),()=>{window.removeEventListener("keydown",f),window.removeEventListener("mousemove",m)}},[a,s,u]),k.jsxs("div",{className:`fade-in-content ${u?"keyboard-mode":""}`,children:[k.jsxs("div",{className:"p-4 md:p-12 border-b border-black min-h-[40vh] flex flex-col justify-end relative",children:[k.jsxs("h1",{className:"text-[12vw] leading-[0.8] font-black tracking-tighter uppercase break-all",children:[k.jsx(bv,{text:"SOLARIST"}),k.jsx("br",{}),k.jsx("span",{className:"outline-text text-transparent stroke-black stroke-2",style:{WebkitTextStroke:"2px black"},children:"ARCHIVE"})]}),k.jsx("div",{className:"flex justify-between items-end mt-8 font-mono text-sm md:w-1/2",children:k.jsxs("p",{children:["KEYBOARD NAVIGATION ENABLED.",k.jsx("br",{}),"PRESS ",k.jsx("kbd",{className:"px-1 bg-black text-white",children:"?"})," FOR SHORTCUTS."]})})]}),k.jsx("div",{className:"p-4 md:px-12 pt-8 pb-4",children:k.jsx("h2",{className:"text-3xl font-black uppercase",children:"RECENT POSTS"})}),k.jsx("div",{className:"flex flex-col border-l border-black ml-0 md:ml-[20%]",children:s.map((f,m)=>k.jsx(xv,{...f,index:m,isFocused:a===m,onHover:u?void 0:i,disableHover:u},f.id))}),n.length>10&&k.jsx("div",{className:"p-4 md:px-12 pb-12 flex justify-center",children:k.jsxs(St,{to:"/archive",className:"group border-2 border-black px-6 py-3 font-mono text-sm uppercase hover:bg-black hover:text-white transition-all",children:["View All ",n.length," Articles →"]})})]})};function Sv(n,a){const i={};return(n[n.length-1]===""?[...n,""]:n).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const kv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ev=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wv={};function Ep(n,a){return(wv.jsx?Ev:kv).test(n)}const Tv=/[ \t\n\f\r]/g;function Cv(n){return typeof n=="object"?n.type==="text"?wp(n.value):!1:wp(n)}function wp(n){return n.replace(Tv,"")===""}class Ga{constructor(a,i,u){this.normal=i,this.property=a,u&&(this.space=u)}}Ga.prototype.normal={};Ga.prototype.property={};Ga.prototype.space=void 0;function Og(n,a){const i={},u={};for(const o of n)Object.assign(i,o.property),Object.assign(u,o.normal);return new Ga(i,u,a)}function Es(n){return n.toLowerCase()}class _t{constructor(a,i){this.attribute=i,this.property=a}}_t.prototype.attribute="";_t.prototype.booleanish=!1;_t.prototype.boolean=!1;_t.prototype.commaOrSpaceSeparated=!1;_t.prototype.commaSeparated=!1;_t.prototype.defined=!1;_t.prototype.mustUseProperty=!1;_t.prototype.number=!1;_t.prototype.overloadedBoolean=!1;_t.prototype.property="";_t.prototype.spaceSeparated=!1;_t.prototype.space=void 0;let Av=0;const xe=jl(),it=jl(),ws=jl(),J=jl(),Xe=jl(),zi=jl(),qt=jl();function jl(){return 2**++Av}const Ts=Object.freeze(Object.defineProperty({__proto__:null,boolean:xe,booleanish:it,commaOrSpaceSeparated:qt,commaSeparated:zi,number:J,overloadedBoolean:ws,spaceSeparated:Xe},Symbol.toStringTag,{value:"Module"})),ls=Object.keys(Ts);class Ys extends _t{constructor(a,i,u,o){let s=-1;if(super(a,i),Tp(this,"space",o),typeof u=="number")for(;++s<ls.length;){const f=ls[s];Tp(this,ls[s],(u&Ts[f])===Ts[f])}}}Ys.prototype.defined=!0;function Tp(n,a,i){i&&(n[a]=i)}function Oi(n){const a={},i={};for(const[u,o]of Object.entries(n.properties)){const s=new Ys(u,n.transform(n.attributes||{},u),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(u)&&(s.mustUseProperty=!0),a[u]=s,i[Es(u)]=u,i[Es(s.attribute)]=u}return new Ga(a,i,n.space)}const Rg=Oi({properties:{ariaActiveDescendant:null,ariaAtomic:it,ariaAutoComplete:null,ariaBusy:it,ariaChecked:it,ariaColCount:J,ariaColIndex:J,ariaColSpan:J,ariaControls:Xe,ariaCurrent:null,ariaDescribedBy:Xe,ariaDetails:null,ariaDisabled:it,ariaDropEffect:Xe,ariaErrorMessage:null,ariaExpanded:it,ariaFlowTo:Xe,ariaGrabbed:it,ariaHasPopup:null,ariaHidden:it,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xe,ariaLevel:J,ariaLive:null,ariaModal:it,ariaMultiLine:it,ariaMultiSelectable:it,ariaOrientation:null,ariaOwns:Xe,ariaPlaceholder:null,ariaPosInSet:J,ariaPressed:it,ariaReadOnly:it,ariaRelevant:null,ariaRequired:it,ariaRoleDescription:Xe,ariaRowCount:J,ariaRowIndex:J,ariaRowSpan:J,ariaSelected:it,ariaSetSize:J,ariaSort:null,ariaValueMax:J,ariaValueMin:J,ariaValueNow:J,ariaValueText:null,role:null},transform(n,a){return a==="role"?a:"aria-"+a.slice(4).toLowerCase()}});function Mg(n,a){return a in n?n[a]:a}function jg(n,a){return Mg(n,a.toLowerCase())}const zv=Oi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zi,acceptCharset:Xe,accessKey:Xe,action:null,allow:null,allowFullScreen:xe,allowPaymentRequest:xe,allowUserMedia:xe,alt:null,as:null,async:xe,autoCapitalize:null,autoComplete:Xe,autoFocus:xe,autoPlay:xe,blocking:Xe,capture:null,charSet:null,checked:xe,cite:null,className:Xe,cols:J,colSpan:null,content:null,contentEditable:it,controls:xe,controlsList:Xe,coords:J|zi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:xe,defer:xe,dir:null,dirName:null,disabled:xe,download:ws,draggable:it,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:xe,formTarget:null,headers:Xe,height:J,hidden:ws,high:J,href:null,hrefLang:null,htmlFor:Xe,httpEquiv:Xe,id:null,imageSizes:null,imageSrcSet:null,inert:xe,inputMode:null,integrity:null,is:null,isMap:xe,itemId:null,itemProp:Xe,itemRef:Xe,itemScope:xe,itemType:Xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:xe,low:J,manifest:null,max:null,maxLength:J,media:null,method:null,min:null,minLength:J,multiple:xe,muted:xe,name:null,nonce:null,noModule:xe,noValidate:xe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:xe,optimum:J,pattern:null,ping:Xe,placeholder:null,playsInline:xe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:xe,referrerPolicy:null,rel:Xe,required:xe,reversed:xe,rows:J,rowSpan:J,sandbox:Xe,scope:null,scoped:xe,seamless:xe,selected:xe,shadowRootClonable:xe,shadowRootDelegatesFocus:xe,shadowRootMode:null,shape:null,size:J,sizes:null,slot:null,span:J,spellCheck:it,src:null,srcDoc:null,srcLang:null,srcSet:null,start:J,step:null,style:null,tabIndex:J,target:null,title:null,translate:null,type:null,typeMustMatch:xe,useMap:null,value:it,width:J,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Xe,axis:null,background:null,bgColor:null,border:J,borderColor:null,bottomMargin:J,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:xe,declare:xe,event:null,face:null,frame:null,frameBorder:null,hSpace:J,leftMargin:J,link:null,longDesc:null,lowSrc:null,marginHeight:J,marginWidth:J,noResize:xe,noHref:xe,noShade:xe,noWrap:xe,object:null,profile:null,prompt:null,rev:null,rightMargin:J,rules:null,scheme:null,scrolling:it,standby:null,summary:null,text:null,topMargin:J,valueType:null,version:null,vAlign:null,vLink:null,vSpace:J,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:xe,disableRemotePlayback:xe,prefix:null,property:null,results:J,security:null,unselectable:null},space:"html",transform:jg}),Nv=Oi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qt,accentHeight:J,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:J,amplitude:J,arabicForm:null,ascent:J,attributeName:null,attributeType:null,azimuth:J,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:J,by:null,calcMode:null,capHeight:J,className:Xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:J,diffuseConstant:J,direction:null,display:null,dur:null,divisor:J,dominantBaseline:null,download:xe,dx:null,dy:null,edgeMode:null,editable:null,elevation:J,enableBackground:null,end:null,event:null,exponent:J,externalResourcesRequired:null,fill:null,fillOpacity:J,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zi,g2:zi,glyphName:zi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:J,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:J,horizOriginX:J,horizOriginY:J,id:null,ideographic:J,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:J,k:J,k1:J,k2:J,k3:J,k4:J,kernelMatrix:qt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:J,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:J,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:J,overlineThickness:J,paintOrder:null,panose1:null,path:null,pathLength:J,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:J,pointsAtY:J,pointsAtZ:J,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qt,rev:qt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qt,requiredFeatures:qt,requiredFonts:qt,requiredFormats:qt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:J,specularExponent:J,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:J,strikethroughThickness:J,string:null,stroke:null,strokeDashArray:qt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:J,strokeOpacity:J,strokeWidth:null,style:null,surfaceScale:J,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qt,tabIndex:J,tableValues:null,target:null,targetX:J,targetY:J,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:J,underlineThickness:J,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:J,values:null,vAlphabetic:J,vMathematical:J,vectorEffect:null,vHanging:J,vIdeographic:J,version:null,vertAdvY:J,vertOriginX:J,vertOriginY:J,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:J,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Mg}),Lg=Oi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,a){return"xlink:"+a.slice(5).toLowerCase()}}),Ug=Oi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:jg}),Bg=Oi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,a){return"xml:"+a.slice(3).toLowerCase()}}),Dv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},_v=/[A-Z]/g,Cp=/-[a-z]/g,Ov=/^data[-\w.:]+$/i;function Rv(n,a){const i=Es(a);let u=a,o=_t;if(i in n.normal)return n.property[n.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&Ov.test(a)){if(a.charAt(4)==="-"){const s=a.slice(5).replace(Cp,jv);u="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=a.slice(4);if(!Cp.test(s)){let f=s.replace(_v,Mv);f.charAt(0)!=="-"&&(f="-"+f),a="data"+f}}o=Ys}return new o(u,a)}function Mv(n){return"-"+n.toLowerCase()}function jv(n){return n.charAt(1).toUpperCase()}const Lv=Og([Rg,zv,Lg,Ug,Bg],"html"),Vs=Og([Rg,Nv,Lg,Ug,Bg],"svg");function Uv(n){return n.join(" ").trim()}var wi={},is,Ap;function Bv(){if(Ap)return is;Ap=1;var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,i=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,m=/^\s+|\s+$/g,d=`
`,p="/",b="*",g="",S="comment",x="declaration";function w(O,N){if(typeof O!="string")throw new TypeError("First argument must be a string");if(!O)return[];N=N||{};var H=1,B=1;function ne(ae){var I=ae.match(a);I&&(H+=I.length);var L=ae.lastIndexOf(d);B=~L?ae.length-L:B+ae.length}function ie(){var ae={line:H,column:B};return function(I){return I.position=new V(ae),oe(),I}}function V(ae){this.start=ae,this.end={line:H,column:B},this.source=N.source}V.prototype.content=O;function P(ae){var I=new Error(N.source+":"+H+":"+B+": "+ae);if(I.reason=ae,I.filename=N.source,I.line=H,I.column=B,I.source=O,!N.silent)throw I}function he(ae){var I=ae.exec(O);if(I){var L=I[0];return ne(L),O=O.slice(L.length),I}}function oe(){he(i)}function U(ae){var I;for(ae=ae||[];I=ee();)I!==!1&&ae.push(I);return ae}function ee(){var ae=ie();if(!(p!=O.charAt(0)||b!=O.charAt(1))){for(var I=2;g!=O.charAt(I)&&(b!=O.charAt(I)||p!=O.charAt(I+1));)++I;if(I+=2,g===O.charAt(I-1))return P("End of comment missing");var L=O.slice(2,I-2);return B+=2,ne(L),O=O.slice(I),B+=2,ae({type:S,comment:L})}}function te(){var ae=ie(),I=he(u);if(I){if(ee(),!he(o))return P("property missing ':'");var L=he(s),K=ae({type:x,property:_(I[0].replace(n,g)),value:L?_(L[0].replace(n,g)):g});return he(f),K}}function Se(){var ae=[];U(ae);for(var I;I=te();)I!==!1&&(ae.push(I),U(ae));return ae}return oe(),Se()}function _(O){return O?O.replace(m,g):g}return is=w,is}var zp;function Hv(){if(zp)return wi;zp=1;var n=wi&&wi.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(wi,"__esModule",{value:!0}),wi.default=i;const a=n(Bv());function i(u,o){let s=null;if(!u||typeof u!="string")return s;const f=(0,a.default)(u),m=typeof o=="function";return f.forEach(d=>{if(d.type!=="declaration")return;const{property:p,value:b}=d;m?o(p,b,d):b&&(s=s||{},s[p]=b)}),s}return wi}var Da={},Np;function qv(){if(Np)return Da;Np=1,Object.defineProperty(Da,"__esModule",{value:!0}),Da.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,i=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,s=function(p){return!p||i.test(p)||n.test(p)},f=function(p,b){return b.toUpperCase()},m=function(p,b){return"".concat(b,"-")},d=function(p,b){return b===void 0&&(b={}),s(p)?p:(p=p.toLowerCase(),b.reactCompat?p=p.replace(o,m):p=p.replace(u,m),p.replace(a,f))};return Da.camelCase=d,Da}var _a,Dp;function Yv(){if(Dp)return _a;Dp=1;var n=_a&&_a.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},a=n(Hv()),i=qv();function u(o,s){var f={};return!o||typeof o!="string"||(0,a.default)(o,function(m,d){m&&d&&(f[(0,i.camelCase)(m,s)]=d)}),f}return u.default=u,_a=u,_a}var Vv=Yv();const Gv=hg(Vv),Hg=qg("end"),Gs=qg("start");function qg(n){return a;function a(i){const u=i&&i.position&&i.position[n]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Xv(n){const a=Gs(n),i=Hg(n);if(a&&i)return{start:a,end:i}}function Ma(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?_p(n.position):"start"in n||"end"in n?_p(n):"line"in n||"column"in n?Cs(n):""}function Cs(n){return Op(n&&n.line)+":"+Op(n&&n.column)}function _p(n){return Cs(n&&n.start)+"-"+Cs(n&&n.end)}function Op(n){return n&&typeof n=="number"?n:1}class gt extends Error{constructor(a,i,u){super(),typeof i=="string"&&(u=i,i=void 0);let o="",s={},f=!1;if(i&&("line"in i&&"column"in i?s={place:i}:"start"in i&&"end"in i?s={place:i}:"type"in i?s={ancestors:[i],place:i.position}:s={...i}),typeof a=="string"?o=a:!s.cause&&a&&(f=!0,o=a.message,s.cause=a),!s.ruleId&&!s.source&&typeof u=="string"){const d=u.indexOf(":");d===-1?s.ruleId=u:(s.source=u.slice(0,d),s.ruleId=u.slice(d+1))}if(!s.place&&s.ancestors&&s.ancestors){const d=s.ancestors[s.ancestors.length-1];d&&(s.place=d.position)}const m=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=m?m.line:void 0,this.name=Ma(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=f&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}gt.prototype.file="";gt.prototype.name="";gt.prototype.reason="";gt.prototype.message="";gt.prototype.stack="";gt.prototype.column=void 0;gt.prototype.line=void 0;gt.prototype.ancestors=void 0;gt.prototype.cause=void 0;gt.prototype.fatal=void 0;gt.prototype.place=void 0;gt.prototype.ruleId=void 0;gt.prototype.source=void 0;const Xs={}.hasOwnProperty,Qv=new Map,Zv=/[A-Z]/g,Fv=new Set(["table","tbody","thead","tfoot","tr"]),Kv=new Set(["td","th"]),Yg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Jv(n,a){if(!a||a.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=a.filePath||void 0;let u;if(a.development){if(typeof a.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=lS(i,a.jsxDEV)}else{if(typeof a.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof a.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=nS(i,a.jsx,a.jsxs)}const o={Fragment:a.Fragment,ancestors:[],components:a.components||{},create:u,elementAttributeNameCase:a.elementAttributeNameCase||"react",evaluater:a.createEvaluater?a.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:a.ignoreInvalidStyle||!1,passKeys:a.passKeys!==!1,passNode:a.passNode||!1,schema:a.space==="svg"?Vs:Lv,stylePropertyNameCase:a.stylePropertyNameCase||"dom",tableCellAlignToStyle:a.tableCellAlignToStyle!==!1},s=Vg(o,n,void 0);return s&&typeof s!="string"?s:o.create(n,o.Fragment,{children:s||void 0},void 0)}function Vg(n,a,i){if(a.type==="element")return Iv(n,a,i);if(a.type==="mdxFlowExpression"||a.type==="mdxTextExpression")return $v(n,a);if(a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement")return Wv(n,a,i);if(a.type==="mdxjsEsm")return Pv(n,a);if(a.type==="root")return eS(n,a,i);if(a.type==="text")return tS(n,a)}function Iv(n,a,i){const u=n.schema;let o=u;a.tagName.toLowerCase()==="svg"&&u.space==="html"&&(o=Vs,n.schema=o),n.ancestors.push(a);const s=Xg(n,a.tagName,!1),f=iS(n,a);let m=Zs(n,a);return Fv.has(a.tagName)&&(m=m.filter(function(d){return typeof d=="string"?!Cv(d):!0})),Gg(n,f,s,a),Qs(f,m),n.ancestors.pop(),n.schema=u,n.create(a,s,f,i)}function $v(n,a){if(a.data&&a.data.estree&&n.evaluater){const u=a.data.estree.body[0];return u.type,n.evaluater.evaluateExpression(u.expression)}Ba(n,a.position)}function Pv(n,a){if(a.data&&a.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(a.data.estree);Ba(n,a.position)}function Wv(n,a,i){const u=n.schema;let o=u;a.name==="svg"&&u.space==="html"&&(o=Vs,n.schema=o),n.ancestors.push(a);const s=a.name===null?n.Fragment:Xg(n,a.name,!0),f=aS(n,a),m=Zs(n,a);return Gg(n,f,s,a),Qs(f,m),n.ancestors.pop(),n.schema=u,n.create(a,s,f,i)}function eS(n,a,i){const u={};return Qs(u,Zs(n,a)),n.create(a,n.Fragment,u,i)}function tS(n,a){return a.value}function Gg(n,a,i,u){typeof i!="string"&&i!==n.Fragment&&n.passNode&&(a.node=u)}function Qs(n,a){if(a.length>0){const i=a.length>1?a:a[0];i&&(n.children=i)}}function nS(n,a,i){return u;function u(o,s,f,m){const p=Array.isArray(f.children)?i:a;return m?p(s,f,m):p(s,f)}}function lS(n,a){return i;function i(u,o,s,f){const m=Array.isArray(s.children),d=Gs(u);return a(o,s,f,m,{columnNumber:d?d.column-1:void 0,fileName:n,lineNumber:d?d.line:void 0},void 0)}}function iS(n,a){const i={};let u,o;for(o in a.properties)if(o!=="children"&&Xs.call(a.properties,o)){const s=rS(n,o,a.properties[o]);if(s){const[f,m]=s;n.tableCellAlignToStyle&&f==="align"&&typeof m=="string"&&Kv.has(a.tagName)?u=m:i[f]=m}}if(u){const s=i.style||(i.style={});s[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return i}function aS(n,a){const i={};for(const u of a.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&n.evaluater){const s=u.data.estree.body[0];s.type;const f=s.expression;f.type;const m=f.properties[0];m.type,Object.assign(i,n.evaluater.evaluateExpression(m.argument))}else Ba(n,a.position);else{const o=u.name;let s;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&n.evaluater){const m=u.value.data.estree.body[0];m.type,s=n.evaluater.evaluateExpression(m.expression)}else Ba(n,a.position);else s=u.value===null?!0:u.value;i[o]=s}return i}function Zs(n,a){const i=[];let u=-1;const o=n.passKeys?new Map:Qv;for(;++u<a.children.length;){const s=a.children[u];let f;if(n.passKeys){const d=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(d){const p=o.get(d)||0;f=d+"-"+p,o.set(d,p+1)}}const m=Vg(n,s,f);m!==void 0&&i.push(m)}return i}function rS(n,a,i){const u=Rv(n.schema,a);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=u.commaSeparated?Sv(i):Uv(i)),u.property==="style"){let o=typeof i=="object"?i:uS(n,String(i));return n.stylePropertyNameCase==="css"&&(o=oS(o)),["style",o]}return[n.elementAttributeNameCase==="react"&&u.space?Dv[u.property]||u.property:u.attribute,i]}}function uS(n,a){try{return Gv(a,{reactCompat:!0})}catch(i){if(n.ignoreInvalidStyle)return{};const u=i,o=new gt("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=n.filePath||void 0,o.url=Yg+"#cannot-parse-style-attribute",o}}function Xg(n,a,i){let u;if(!i)u={type:"Literal",value:a};else if(a.includes(".")){const o=a.split(".");let s=-1,f;for(;++s<o.length;){const m=Ep(o[s])?{type:"Identifier",name:o[s]}:{type:"Literal",value:o[s]};f=f?{type:"MemberExpression",object:f,property:m,computed:!!(s&&m.type==="Literal"),optional:!1}:m}u=f}else u=Ep(a)&&!/^[a-z]/.test(a)?{type:"Identifier",name:a}:{type:"Literal",value:a};if(u.type==="Literal"){const o=u.value;return Xs.call(n.components,o)?n.components[o]:o}if(n.evaluater)return n.evaluater.evaluateExpression(u);Ba(n)}function Ba(n,a){const i=new gt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:a,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=Yg+"#cannot-handle-mdx-estrees-without-createevaluater",i}function oS(n){const a={};let i;for(i in n)Xs.call(n,i)&&(a[cS(i)]=n[i]);return a}function cS(n){let a=n.replace(Zv,sS);return a.slice(0,3)==="ms-"&&(a="-"+a),a}function sS(n){return"-"+n.toLowerCase()}const as={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},fS={};function Fs(n,a){const i=fS,u=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,o=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return Qg(n,u,o)}function Qg(n,a,i){if(hS(n)){if("value"in n)return n.type==="html"&&!i?"":n.value;if(a&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Rp(n.children,a,i)}return Array.isArray(n)?Rp(n,a,i):""}function Rp(n,a,i){const u=[];let o=-1;for(;++o<n.length;)u[o]=Qg(n[o],a,i);return u.join("")}function hS(n){return!!(n&&typeof n=="object")}const Mp=document.createElement("i");function Ks(n){const a="&"+n+";";Mp.innerHTML=a;const i=Mp.textContent;return i.charCodeAt(i.length-1)===59&&n!=="semi"||i===a?!1:i}function Yt(n,a,i,u){const o=n.length;let s=0,f;if(a<0?a=-a>o?0:o+a:a=a>o?o:a,i=i>0?i:0,u.length<1e4)f=Array.from(u),f.unshift(a,i),n.splice(...f);else for(i&&n.splice(a,i);s<u.length;)f=u.slice(s,s+1e4),f.unshift(a,0),n.splice(...f),s+=1e4,a+=1e4}function en(n,a){return n.length>0?(Yt(n,n.length,0,a),n):a}const jp={}.hasOwnProperty;function Zg(n){const a={};let i=-1;for(;++i<n.length;)mS(a,n[i]);return a}function mS(n,a){let i;for(i in a){const o=(jp.call(n,i)?n[i]:void 0)||(n[i]={}),s=a[i];let f;if(s)for(f in s){jp.call(o,f)||(o[f]=[]);const m=s[f];dS(o[f],Array.isArray(m)?m:m?[m]:[])}}}function dS(n,a){let i=-1;const u=[];for(;++i<a.length;)(a[i].add==="after"?n:u).push(a[i]);Yt(n,0,0,u)}function Fg(n,a){const i=Number.parseInt(n,a);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function rn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vt=ml(/[A-Za-z]/),pt=ml(/[\dA-Za-z]/),pS=ml(/[#-'*+\--9=?A-Z^-~]/);function vu(n){return n!==null&&(n<32||n===127)}const As=ml(/\d/),gS=ml(/[\dA-Fa-f]/),yS=ml(/[!-/:-@[-`{-~]/);function fe(n){return n!==null&&n<-2}function Ge(n){return n!==null&&(n<0||n===32)}function Te(n){return n===-2||n===-1||n===32}const zu=ml(/\p{P}|\p{S}/u),Rl=ml(/\s/);function ml(n){return a;function a(i){return i!==null&&i>-1&&n.test(String.fromCharCode(i))}}function Ri(n){const a=[];let i=-1,u=0,o=0;for(;++i<n.length;){const s=n.charCodeAt(i);let f="";if(s===37&&pt(n.charCodeAt(i+1))&&pt(n.charCodeAt(i+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(f=String.fromCharCode(s));else if(s>55295&&s<57344){const m=n.charCodeAt(i+1);s<56320&&m>56319&&m<57344?(f=String.fromCharCode(s,m),o=1):f="�"}else f=String.fromCharCode(s);f&&(a.push(n.slice(u,i),encodeURIComponent(f)),u=i+o+1,f=""),o&&(i+=o,o=0)}return a.join("")+n.slice(u)}function De(n,a,i,u){const o=u?u-1:Number.POSITIVE_INFINITY;let s=0;return f;function f(d){return Te(d)?(n.enter(i),m(d)):a(d)}function m(d){return Te(d)&&s++<o?(n.consume(d),m):(n.exit(i),a(d))}}const bS={tokenize:xS};function xS(n){const a=n.attempt(this.parser.constructs.contentInitial,u,o);let i;return a;function u(m){if(m===null){n.consume(m);return}return n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),De(n,a,"linePrefix")}function o(m){return n.enter("paragraph"),s(m)}function s(m){const d=n.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=d),i=d,f(m)}function f(m){if(m===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(m);return}return fe(m)?(n.consume(m),n.exit("chunkText"),s):(n.consume(m),f)}}const vS={tokenize:SS},Lp={tokenize:kS};function SS(n){const a=this,i=[];let u=0,o,s,f;return m;function m(B){if(u<i.length){const ne=i[u];return a.containerState=ne[1],n.attempt(ne[0].continuation,d,p)(B)}return p(B)}function d(B){if(u++,a.containerState._closeFlow){a.containerState._closeFlow=void 0,o&&H();const ne=a.events.length;let ie=ne,V;for(;ie--;)if(a.events[ie][0]==="exit"&&a.events[ie][1].type==="chunkFlow"){V=a.events[ie][1].end;break}N(u);let P=ne;for(;P<a.events.length;)a.events[P][1].end={...V},P++;return Yt(a.events,ie+1,0,a.events.slice(ne)),a.events.length=P,p(B)}return m(B)}function p(B){if(u===i.length){if(!o)return S(B);if(o.currentConstruct&&o.currentConstruct.concrete)return w(B);a.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return a.containerState={},n.check(Lp,b,g)(B)}function b(B){return o&&H(),N(u),S(B)}function g(B){return a.parser.lazy[a.now().line]=u!==i.length,f=a.now().offset,w(B)}function S(B){return a.containerState={},n.attempt(Lp,x,w)(B)}function x(B){return u++,i.push([a.currentConstruct,a.containerState]),S(B)}function w(B){if(B===null){o&&H(),N(0),n.consume(B);return}return o=o||a.parser.flow(a.now()),n.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),_(B)}function _(B){if(B===null){O(n.exit("chunkFlow"),!0),N(0),n.consume(B);return}return fe(B)?(n.consume(B),O(n.exit("chunkFlow")),u=0,a.interrupt=void 0,m):(n.consume(B),_)}function O(B,ne){const ie=a.sliceStream(B);if(ne&&ie.push(null),B.previous=s,s&&(s.next=B),s=B,o.defineSkip(B.start),o.write(ie),a.parser.lazy[B.start.line]){let V=o.events.length;for(;V--;)if(o.events[V][1].start.offset<f&&(!o.events[V][1].end||o.events[V][1].end.offset>f))return;const P=a.events.length;let he=P,oe,U;for(;he--;)if(a.events[he][0]==="exit"&&a.events[he][1].type==="chunkFlow"){if(oe){U=a.events[he][1].end;break}oe=!0}for(N(u),V=P;V<a.events.length;)a.events[V][1].end={...U},V++;Yt(a.events,he+1,0,a.events.slice(P)),a.events.length=V}}function N(B){let ne=i.length;for(;ne-- >B;){const ie=i[ne];a.containerState=ie[1],ie[0].exit.call(a,n)}i.length=B}function H(){o.write([null]),s=void 0,o=void 0,a.containerState._closeFlow=void 0}}function kS(n,a,i){return De(n,n.attempt(this.parser.constructs.document,a,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Di(n){if(n===null||Ge(n)||Rl(n))return 1;if(zu(n))return 2}function Nu(n,a,i){const u=[];let o=-1;for(;++o<n.length;){const s=n[o].resolveAll;s&&!u.includes(s)&&(a=s(a,i),u.push(s))}return a}const zs={name:"attention",resolveAll:ES,tokenize:wS};function ES(n,a){let i=-1,u,o,s,f,m,d,p,b;for(;++i<n.length;)if(n[i][0]==="enter"&&n[i][1].type==="attentionSequence"&&n[i][1]._close){for(u=i;u--;)if(n[u][0]==="exit"&&n[u][1].type==="attentionSequence"&&n[u][1]._open&&a.sliceSerialize(n[u][1]).charCodeAt(0)===a.sliceSerialize(n[i][1]).charCodeAt(0)){if((n[u][1]._close||n[i][1]._open)&&(n[i][1].end.offset-n[i][1].start.offset)%3&&!((n[u][1].end.offset-n[u][1].start.offset+n[i][1].end.offset-n[i][1].start.offset)%3))continue;d=n[u][1].end.offset-n[u][1].start.offset>1&&n[i][1].end.offset-n[i][1].start.offset>1?2:1;const g={...n[u][1].end},S={...n[i][1].start};Up(g,-d),Up(S,d),f={type:d>1?"strongSequence":"emphasisSequence",start:g,end:{...n[u][1].end}},m={type:d>1?"strongSequence":"emphasisSequence",start:{...n[i][1].start},end:S},s={type:d>1?"strongText":"emphasisText",start:{...n[u][1].end},end:{...n[i][1].start}},o={type:d>1?"strong":"emphasis",start:{...f.start},end:{...m.end}},n[u][1].end={...f.start},n[i][1].start={...m.end},p=[],n[u][1].end.offset-n[u][1].start.offset&&(p=en(p,[["enter",n[u][1],a],["exit",n[u][1],a]])),p=en(p,[["enter",o,a],["enter",f,a],["exit",f,a],["enter",s,a]]),p=en(p,Nu(a.parser.constructs.insideSpan.null,n.slice(u+1,i),a)),p=en(p,[["exit",s,a],["enter",m,a],["exit",m,a],["exit",o,a]]),n[i][1].end.offset-n[i][1].start.offset?(b=2,p=en(p,[["enter",n[i][1],a],["exit",n[i][1],a]])):b=0,Yt(n,u-1,i-u+3,p),i=u+p.length-b-2;break}}for(i=-1;++i<n.length;)n[i][1].type==="attentionSequence"&&(n[i][1].type="data");return n}function wS(n,a){const i=this.parser.constructs.attentionMarkers.null,u=this.previous,o=Di(u);let s;return f;function f(d){return s=d,n.enter("attentionSequence"),m(d)}function m(d){if(d===s)return n.consume(d),m;const p=n.exit("attentionSequence"),b=Di(d),g=!b||b===2&&o||i.includes(d),S=!o||o===2&&b||i.includes(u);return p._open=!!(s===42?g:g&&(o||!S)),p._close=!!(s===42?S:S&&(b||!g)),a(d)}}function Up(n,a){n.column+=a,n.offset+=a,n._bufferIndex+=a}const TS={name:"autolink",tokenize:CS};function CS(n,a,i){let u=0;return o;function o(x){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(x),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(x){return vt(x)?(n.consume(x),f):x===64?i(x):p(x)}function f(x){return x===43||x===45||x===46||pt(x)?(u=1,m(x)):p(x)}function m(x){return x===58?(n.consume(x),u=0,d):(x===43||x===45||x===46||pt(x))&&u++<32?(n.consume(x),m):(u=0,p(x))}function d(x){return x===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(x),n.exit("autolinkMarker"),n.exit("autolink"),a):x===null||x===32||x===60||vu(x)?i(x):(n.consume(x),d)}function p(x){return x===64?(n.consume(x),b):pS(x)?(n.consume(x),p):i(x)}function b(x){return pt(x)?g(x):i(x)}function g(x){return x===46?(n.consume(x),u=0,b):x===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(x),n.exit("autolinkMarker"),n.exit("autolink"),a):S(x)}function S(x){if((x===45||pt(x))&&u++<63){const w=x===45?S:g;return n.consume(x),w}return i(x)}}const Xa={partial:!0,tokenize:AS};function AS(n,a,i){return u;function u(s){return Te(s)?De(n,o,"linePrefix")(s):o(s)}function o(s){return s===null||fe(s)?a(s):i(s)}}const Kg={continuation:{tokenize:NS},exit:DS,name:"blockQuote",tokenize:zS};function zS(n,a,i){const u=this;return o;function o(f){if(f===62){const m=u.containerState;return m.open||(n.enter("blockQuote",{_container:!0}),m.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(f),n.exit("blockQuoteMarker"),s}return i(f)}function s(f){return Te(f)?(n.enter("blockQuotePrefixWhitespace"),n.consume(f),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),a):(n.exit("blockQuotePrefix"),a(f))}}function NS(n,a,i){const u=this;return o;function o(f){return Te(f)?De(n,s,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):s(f)}function s(f){return n.attempt(Kg,a,i)(f)}}function DS(n){n.exit("blockQuote")}const Jg={name:"characterEscape",tokenize:_S};function _S(n,a,i){return u;function u(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),o}function o(s){return yS(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),a):i(s)}}const Ig={name:"characterReference",tokenize:OS};function OS(n,a,i){const u=this;let o=0,s,f;return m;function m(g){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(g),n.exit("characterReferenceMarker"),d}function d(g){return g===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(g),n.exit("characterReferenceMarkerNumeric"),p):(n.enter("characterReferenceValue"),s=31,f=pt,b(g))}function p(g){return g===88||g===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(g),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,f=gS,b):(n.enter("characterReferenceValue"),s=7,f=As,b(g))}function b(g){if(g===59&&o){const S=n.exit("characterReferenceValue");return f===pt&&!Ks(u.sliceSerialize(S))?i(g):(n.enter("characterReferenceMarker"),n.consume(g),n.exit("characterReferenceMarker"),n.exit("characterReference"),a)}return f(g)&&o++<s?(n.consume(g),b):i(g)}}const Bp={partial:!0,tokenize:MS},Hp={concrete:!0,name:"codeFenced",tokenize:RS};function RS(n,a,i){const u=this,o={partial:!0,tokenize:ie};let s=0,f=0,m;return d;function d(V){return p(V)}function p(V){const P=u.events[u.events.length-1];return s=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,m=V,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),b(V)}function b(V){return V===m?(f++,n.consume(V),b):f<3?i(V):(n.exit("codeFencedFenceSequence"),Te(V)?De(n,g,"whitespace")(V):g(V))}function g(V){return V===null||fe(V)?(n.exit("codeFencedFence"),u.interrupt?a(V):n.check(Bp,_,ne)(V)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),S(V))}function S(V){return V===null||fe(V)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),g(V)):Te(V)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),De(n,x,"whitespace")(V)):V===96&&V===m?i(V):(n.consume(V),S)}function x(V){return V===null||fe(V)?g(V):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),w(V))}function w(V){return V===null||fe(V)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),g(V)):V===96&&V===m?i(V):(n.consume(V),w)}function _(V){return n.attempt(o,ne,O)(V)}function O(V){return n.enter("lineEnding"),n.consume(V),n.exit("lineEnding"),N}function N(V){return s>0&&Te(V)?De(n,H,"linePrefix",s+1)(V):H(V)}function H(V){return V===null||fe(V)?n.check(Bp,_,ne)(V):(n.enter("codeFlowValue"),B(V))}function B(V){return V===null||fe(V)?(n.exit("codeFlowValue"),H(V)):(n.consume(V),B)}function ne(V){return n.exit("codeFenced"),a(V)}function ie(V,P,he){let oe=0;return U;function U(I){return V.enter("lineEnding"),V.consume(I),V.exit("lineEnding"),ee}function ee(I){return V.enter("codeFencedFence"),Te(I)?De(V,te,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):te(I)}function te(I){return I===m?(V.enter("codeFencedFenceSequence"),Se(I)):he(I)}function Se(I){return I===m?(oe++,V.consume(I),Se):oe>=f?(V.exit("codeFencedFenceSequence"),Te(I)?De(V,ae,"whitespace")(I):ae(I)):he(I)}function ae(I){return I===null||fe(I)?(V.exit("codeFencedFence"),P(I)):he(I)}}}function MS(n,a,i){const u=this;return o;function o(f){return f===null?i(f):(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),s)}function s(f){return u.parser.lazy[u.now().line]?i(f):a(f)}}const rs={name:"codeIndented",tokenize:LS},jS={partial:!0,tokenize:US};function LS(n,a,i){const u=this;return o;function o(p){return n.enter("codeIndented"),De(n,s,"linePrefix",5)(p)}function s(p){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(p):i(p)}function f(p){return p===null?d(p):fe(p)?n.attempt(jS,f,d)(p):(n.enter("codeFlowValue"),m(p))}function m(p){return p===null||fe(p)?(n.exit("codeFlowValue"),f(p)):(n.consume(p),m)}function d(p){return n.exit("codeIndented"),a(p)}}function US(n,a,i){const u=this;return o;function o(f){return u.parser.lazy[u.now().line]?i(f):fe(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),o):De(n,s,"linePrefix",5)(f)}function s(f){const m=u.events[u.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?a(f):fe(f)?o(f):i(f)}}const BS={name:"codeText",previous:qS,resolve:HS,tokenize:YS};function HS(n){let a=n.length-4,i=3,u,o;if((n[i][1].type==="lineEnding"||n[i][1].type==="space")&&(n[a][1].type==="lineEnding"||n[a][1].type==="space")){for(u=i;++u<a;)if(n[u][1].type==="codeTextData"){n[i][1].type="codeTextPadding",n[a][1].type="codeTextPadding",i+=2,a-=2;break}}for(u=i-1,a++;++u<=a;)o===void 0?u!==a&&n[u][1].type!=="lineEnding"&&(o=u):(u===a||n[u][1].type==="lineEnding")&&(n[o][1].type="codeTextData",u!==o+2&&(n[o][1].end=n[u-1][1].end,n.splice(o+2,u-o-2),a-=u-o-2,u=o+2),o=void 0);return n}function qS(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function YS(n,a,i){let u=0,o,s;return f;function f(g){return n.enter("codeText"),n.enter("codeTextSequence"),m(g)}function m(g){return g===96?(n.consume(g),u++,m):(n.exit("codeTextSequence"),d(g))}function d(g){return g===null?i(g):g===32?(n.enter("space"),n.consume(g),n.exit("space"),d):g===96?(s=n.enter("codeTextSequence"),o=0,b(g)):fe(g)?(n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),d):(n.enter("codeTextData"),p(g))}function p(g){return g===null||g===32||g===96||fe(g)?(n.exit("codeTextData"),d(g)):(n.consume(g),p)}function b(g){return g===96?(n.consume(g),o++,b):o===u?(n.exit("codeTextSequence"),n.exit("codeText"),a(g)):(s.type="codeTextData",p(g))}}class VS{constructor(a){this.left=a?[...a]:[],this.right=[]}get(a){if(a<0||a>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+a+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return a<this.left.length?this.left[a]:this.right[this.right.length-a+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(a,i){const u=i??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(a,u):a>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-a+this.left.length).reverse():this.left.slice(a).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(a,i,u){const o=i||0;this.setCursor(Math.trunc(a));const s=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return u&&Oa(this.left,u),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(a){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(a)}pushMany(a){this.setCursor(Number.POSITIVE_INFINITY),Oa(this.left,a)}unshift(a){this.setCursor(0),this.right.push(a)}unshiftMany(a){this.setCursor(0),Oa(this.right,a.reverse())}setCursor(a){if(!(a===this.left.length||a>this.left.length&&this.right.length===0||a<0&&this.left.length===0))if(a<this.left.length){const i=this.left.splice(a,Number.POSITIVE_INFINITY);Oa(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-a,Number.POSITIVE_INFINITY);Oa(this.left,i.reverse())}}}function Oa(n,a){let i=0;if(a.length<1e4)n.push(...a);else for(;i<a.length;)n.push(...a.slice(i,i+1e4)),i+=1e4}function $g(n){const a={};let i=-1,u,o,s,f,m,d,p;const b=new VS(n);for(;++i<b.length;){for(;i in a;)i=a[i];if(u=b.get(i),i&&u[1].type==="chunkFlow"&&b.get(i-1)[1].type==="listItemPrefix"&&(d=u[1]._tokenizer.events,s=0,s<d.length&&d[s][1].type==="lineEndingBlank"&&(s+=2),s<d.length&&d[s][1].type==="content"))for(;++s<d.length&&d[s][1].type!=="content";)d[s][1].type==="chunkText"&&(d[s][1]._isInFirstContentOfListItem=!0,s++);if(u[0]==="enter")u[1].contentType&&(Object.assign(a,GS(b,i)),i=a[i],p=!0);else if(u[1]._container){for(s=i,o=void 0;s--;)if(f=b.get(s),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(o&&(b.get(o)[1].type="lineEndingBlank"),f[1].type="lineEnding",o=s);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;o&&(u[1].end={...b.get(o)[1].start},m=b.slice(o,i),m.unshift(u),b.splice(o,i-o+1,m))}}return Yt(n,0,Number.POSITIVE_INFINITY,b.slice(0)),!p}function GS(n,a){const i=n.get(a)[1],u=n.get(a)[2];let o=a-1;const s=[];let f=i._tokenizer;f||(f=u.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const m=f.events,d=[],p={};let b,g,S=-1,x=i,w=0,_=0;const O=[_];for(;x;){for(;n.get(++o)[1]!==x;);s.push(o),x._tokenizer||(b=u.sliceStream(x),x.next||b.push(null),g&&f.defineSkip(x.start),x._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),x._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),g=x,x=x.next}for(x=i;++S<m.length;)m[S][0]==="exit"&&m[S-1][0]==="enter"&&m[S][1].type===m[S-1][1].type&&m[S][1].start.line!==m[S][1].end.line&&(_=S+1,O.push(_),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(f.events=[],x?(x._tokenizer=void 0,x.previous=void 0):O.pop(),S=O.length;S--;){const N=m.slice(O[S],O[S+1]),H=s.pop();d.push([H,H+N.length-1]),n.splice(H,2,N)}for(d.reverse(),S=-1;++S<d.length;)p[w+d[S][0]]=w+d[S][1],w+=d[S][1]-d[S][0]-1;return p}const XS={resolve:ZS,tokenize:FS},QS={partial:!0,tokenize:KS};function ZS(n){return $g(n),n}function FS(n,a){let i;return u;function u(m){return n.enter("content"),i=n.enter("chunkContent",{contentType:"content"}),o(m)}function o(m){return m===null?s(m):fe(m)?n.check(QS,f,s)(m):(n.consume(m),o)}function s(m){return n.exit("chunkContent"),n.exit("content"),a(m)}function f(m){return n.consume(m),n.exit("chunkContent"),i.next=n.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,o}}function KS(n,a,i){const u=this;return o;function o(f){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),De(n,s,"linePrefix")}function s(f){if(f===null||fe(f))return i(f);const m=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?a(f):n.interrupt(u.parser.constructs.flow,i,a)(f)}}function Pg(n,a,i,u,o,s,f,m,d){const p=d||Number.POSITIVE_INFINITY;let b=0;return g;function g(N){return N===60?(n.enter(u),n.enter(o),n.enter(s),n.consume(N),n.exit(s),S):N===null||N===32||N===41||vu(N)?i(N):(n.enter(u),n.enter(f),n.enter(m),n.enter("chunkString",{contentType:"string"}),_(N))}function S(N){return N===62?(n.enter(s),n.consume(N),n.exit(s),n.exit(o),n.exit(u),a):(n.enter(m),n.enter("chunkString",{contentType:"string"}),x(N))}function x(N){return N===62?(n.exit("chunkString"),n.exit(m),S(N)):N===null||N===60||fe(N)?i(N):(n.consume(N),N===92?w:x)}function w(N){return N===60||N===62||N===92?(n.consume(N),x):x(N)}function _(N){return!b&&(N===null||N===41||Ge(N))?(n.exit("chunkString"),n.exit(m),n.exit(f),n.exit(u),a(N)):b<p&&N===40?(n.consume(N),b++,_):N===41?(n.consume(N),b--,_):N===null||N===32||N===40||vu(N)?i(N):(n.consume(N),N===92?O:_)}function O(N){return N===40||N===41||N===92?(n.consume(N),_):_(N)}}function Wg(n,a,i,u,o,s){const f=this;let m=0,d;return p;function p(x){return n.enter(u),n.enter(o),n.consume(x),n.exit(o),n.enter(s),b}function b(x){return m>999||x===null||x===91||x===93&&!d||x===94&&!m&&"_hiddenFootnoteSupport"in f.parser.constructs?i(x):x===93?(n.exit(s),n.enter(o),n.consume(x),n.exit(o),n.exit(u),a):fe(x)?(n.enter("lineEnding"),n.consume(x),n.exit("lineEnding"),b):(n.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||x===91||x===93||fe(x)||m++>999?(n.exit("chunkString"),b(x)):(n.consume(x),d||(d=!Te(x)),x===92?S:g)}function S(x){return x===91||x===92||x===93?(n.consume(x),m++,g):g(x)}}function ey(n,a,i,u,o,s){let f;return m;function m(S){return S===34||S===39||S===40?(n.enter(u),n.enter(o),n.consume(S),n.exit(o),f=S===40?41:S,d):i(S)}function d(S){return S===f?(n.enter(o),n.consume(S),n.exit(o),n.exit(u),a):(n.enter(s),p(S))}function p(S){return S===f?(n.exit(s),d(f)):S===null?i(S):fe(S)?(n.enter("lineEnding"),n.consume(S),n.exit("lineEnding"),De(n,p,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),b(S))}function b(S){return S===f||S===null||fe(S)?(n.exit("chunkString"),p(S)):(n.consume(S),S===92?g:b)}function g(S){return S===f||S===92?(n.consume(S),b):b(S)}}function ja(n,a){let i;return u;function u(o){return fe(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),i=!0,u):Te(o)?De(n,u,i?"linePrefix":"lineSuffix")(o):a(o)}}const JS={name:"definition",tokenize:$S},IS={partial:!0,tokenize:PS};function $S(n,a,i){const u=this;let o;return s;function s(x){return n.enter("definition"),f(x)}function f(x){return Wg.call(u,n,m,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function m(x){return o=rn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),x===58?(n.enter("definitionMarker"),n.consume(x),n.exit("definitionMarker"),d):i(x)}function d(x){return Ge(x)?ja(n,p)(x):p(x)}function p(x){return Pg(n,b,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function b(x){return n.attempt(IS,g,g)(x)}function g(x){return Te(x)?De(n,S,"whitespace")(x):S(x)}function S(x){return x===null||fe(x)?(n.exit("definition"),u.parser.defined.push(o),a(x)):i(x)}}function PS(n,a,i){return u;function u(m){return Ge(m)?ja(n,o)(m):i(m)}function o(m){return ey(n,s,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function s(m){return Te(m)?De(n,f,"whitespace")(m):f(m)}function f(m){return m===null||fe(m)?a(m):i(m)}}const WS={name:"hardBreakEscape",tokenize:e2};function e2(n,a,i){return u;function u(s){return n.enter("hardBreakEscape"),n.consume(s),o}function o(s){return fe(s)?(n.exit("hardBreakEscape"),a(s)):i(s)}}const t2={name:"headingAtx",resolve:n2,tokenize:l2};function n2(n,a){let i=n.length-2,u=3,o,s;return n[u][1].type==="whitespace"&&(u+=2),i-2>u&&n[i][1].type==="whitespace"&&(i-=2),n[i][1].type==="atxHeadingSequence"&&(u===i-1||i-4>u&&n[i-2][1].type==="whitespace")&&(i-=u+1===i?2:4),i>u&&(o={type:"atxHeadingText",start:n[u][1].start,end:n[i][1].end},s={type:"chunkText",start:n[u][1].start,end:n[i][1].end,contentType:"text"},Yt(n,u,i-u+1,[["enter",o,a],["enter",s,a],["exit",s,a],["exit",o,a]])),n}function l2(n,a,i){let u=0;return o;function o(b){return n.enter("atxHeading"),s(b)}function s(b){return n.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(n.consume(b),f):b===null||Ge(b)?(n.exit("atxHeadingSequence"),m(b)):i(b)}function m(b){return b===35?(n.enter("atxHeadingSequence"),d(b)):b===null||fe(b)?(n.exit("atxHeading"),a(b)):Te(b)?De(n,m,"whitespace")(b):(n.enter("atxHeadingText"),p(b))}function d(b){return b===35?(n.consume(b),d):(n.exit("atxHeadingSequence"),m(b))}function p(b){return b===null||b===35||Ge(b)?(n.exit("atxHeadingText"),m(b)):(n.consume(b),p)}}const i2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],qp=["pre","script","style","textarea"],a2={concrete:!0,name:"htmlFlow",resolveTo:o2,tokenize:c2},r2={partial:!0,tokenize:f2},u2={partial:!0,tokenize:s2};function o2(n){let a=n.length;for(;a--&&!(n[a][0]==="enter"&&n[a][1].type==="htmlFlow"););return a>1&&n[a-2][1].type==="linePrefix"&&(n[a][1].start=n[a-2][1].start,n[a+1][1].start=n[a-2][1].start,n.splice(a-2,2)),n}function c2(n,a,i){const u=this;let o,s,f,m,d;return p;function p(E){return b(E)}function b(E){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(E),g}function g(E){return E===33?(n.consume(E),S):E===47?(n.consume(E),s=!0,_):E===63?(n.consume(E),o=3,u.interrupt?a:T):vt(E)?(n.consume(E),f=String.fromCharCode(E),O):i(E)}function S(E){return E===45?(n.consume(E),o=2,x):E===91?(n.consume(E),o=5,m=0,w):vt(E)?(n.consume(E),o=4,u.interrupt?a:T):i(E)}function x(E){return E===45?(n.consume(E),u.interrupt?a:T):i(E)}function w(E){const W="CDATA[";return E===W.charCodeAt(m++)?(n.consume(E),m===W.length?u.interrupt?a:te:w):i(E)}function _(E){return vt(E)?(n.consume(E),f=String.fromCharCode(E),O):i(E)}function O(E){if(E===null||E===47||E===62||Ge(E)){const W=E===47,de=f.toLowerCase();return!W&&!s&&qp.includes(de)?(o=1,u.interrupt?a(E):te(E)):i2.includes(f.toLowerCase())?(o=6,W?(n.consume(E),N):u.interrupt?a(E):te(E)):(o=7,u.interrupt&&!u.parser.lazy[u.now().line]?i(E):s?H(E):B(E))}return E===45||pt(E)?(n.consume(E),f+=String.fromCharCode(E),O):i(E)}function N(E){return E===62?(n.consume(E),u.interrupt?a:te):i(E)}function H(E){return Te(E)?(n.consume(E),H):U(E)}function B(E){return E===47?(n.consume(E),U):E===58||E===95||vt(E)?(n.consume(E),ne):Te(E)?(n.consume(E),B):U(E)}function ne(E){return E===45||E===46||E===58||E===95||pt(E)?(n.consume(E),ne):ie(E)}function ie(E){return E===61?(n.consume(E),V):Te(E)?(n.consume(E),ie):B(E)}function V(E){return E===null||E===60||E===61||E===62||E===96?i(E):E===34||E===39?(n.consume(E),d=E,P):Te(E)?(n.consume(E),V):he(E)}function P(E){return E===d?(n.consume(E),d=null,oe):E===null||fe(E)?i(E):(n.consume(E),P)}function he(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||Ge(E)?ie(E):(n.consume(E),he)}function oe(E){return E===47||E===62||Te(E)?B(E):i(E)}function U(E){return E===62?(n.consume(E),ee):i(E)}function ee(E){return E===null||fe(E)?te(E):Te(E)?(n.consume(E),ee):i(E)}function te(E){return E===45&&o===2?(n.consume(E),L):E===60&&o===1?(n.consume(E),K):E===62&&o===4?(n.consume(E),A):E===63&&o===3?(n.consume(E),T):E===93&&o===5?(n.consume(E),ve):fe(E)&&(o===6||o===7)?(n.exit("htmlFlowData"),n.check(r2,X,Se)(E)):E===null||fe(E)?(n.exit("htmlFlowData"),Se(E)):(n.consume(E),te)}function Se(E){return n.check(u2,ae,X)(E)}function ae(E){return n.enter("lineEnding"),n.consume(E),n.exit("lineEnding"),I}function I(E){return E===null||fe(E)?Se(E):(n.enter("htmlFlowData"),te(E))}function L(E){return E===45?(n.consume(E),T):te(E)}function K(E){return E===47?(n.consume(E),f="",ue):te(E)}function ue(E){if(E===62){const W=f.toLowerCase();return qp.includes(W)?(n.consume(E),A):te(E)}return vt(E)&&f.length<8?(n.consume(E),f+=String.fromCharCode(E),ue):te(E)}function ve(E){return E===93?(n.consume(E),T):te(E)}function T(E){return E===62?(n.consume(E),A):E===45&&o===2?(n.consume(E),T):te(E)}function A(E){return E===null||fe(E)?(n.exit("htmlFlowData"),X(E)):(n.consume(E),A)}function X(E){return n.exit("htmlFlow"),a(E)}}function s2(n,a,i){const u=this;return o;function o(f){return fe(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),s):i(f)}function s(f){return u.parser.lazy[u.now().line]?i(f):a(f)}}function f2(n,a,i){return u;function u(o){return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),n.attempt(Xa,a,i)}}const h2={name:"htmlText",tokenize:m2};function m2(n,a,i){const u=this;let o,s,f;return m;function m(T){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(T),d}function d(T){return T===33?(n.consume(T),p):T===47?(n.consume(T),ie):T===63?(n.consume(T),B):vt(T)?(n.consume(T),he):i(T)}function p(T){return T===45?(n.consume(T),b):T===91?(n.consume(T),s=0,w):vt(T)?(n.consume(T),H):i(T)}function b(T){return T===45?(n.consume(T),x):i(T)}function g(T){return T===null?i(T):T===45?(n.consume(T),S):fe(T)?(f=g,K(T)):(n.consume(T),g)}function S(T){return T===45?(n.consume(T),x):g(T)}function x(T){return T===62?L(T):T===45?S(T):g(T)}function w(T){const A="CDATA[";return T===A.charCodeAt(s++)?(n.consume(T),s===A.length?_:w):i(T)}function _(T){return T===null?i(T):T===93?(n.consume(T),O):fe(T)?(f=_,K(T)):(n.consume(T),_)}function O(T){return T===93?(n.consume(T),N):_(T)}function N(T){return T===62?L(T):T===93?(n.consume(T),N):_(T)}function H(T){return T===null||T===62?L(T):fe(T)?(f=H,K(T)):(n.consume(T),H)}function B(T){return T===null?i(T):T===63?(n.consume(T),ne):fe(T)?(f=B,K(T)):(n.consume(T),B)}function ne(T){return T===62?L(T):B(T)}function ie(T){return vt(T)?(n.consume(T),V):i(T)}function V(T){return T===45||pt(T)?(n.consume(T),V):P(T)}function P(T){return fe(T)?(f=P,K(T)):Te(T)?(n.consume(T),P):L(T)}function he(T){return T===45||pt(T)?(n.consume(T),he):T===47||T===62||Ge(T)?oe(T):i(T)}function oe(T){return T===47?(n.consume(T),L):T===58||T===95||vt(T)?(n.consume(T),U):fe(T)?(f=oe,K(T)):Te(T)?(n.consume(T),oe):L(T)}function U(T){return T===45||T===46||T===58||T===95||pt(T)?(n.consume(T),U):ee(T)}function ee(T){return T===61?(n.consume(T),te):fe(T)?(f=ee,K(T)):Te(T)?(n.consume(T),ee):oe(T)}function te(T){return T===null||T===60||T===61||T===62||T===96?i(T):T===34||T===39?(n.consume(T),o=T,Se):fe(T)?(f=te,K(T)):Te(T)?(n.consume(T),te):(n.consume(T),ae)}function Se(T){return T===o?(n.consume(T),o=void 0,I):T===null?i(T):fe(T)?(f=Se,K(T)):(n.consume(T),Se)}function ae(T){return T===null||T===34||T===39||T===60||T===61||T===96?i(T):T===47||T===62||Ge(T)?oe(T):(n.consume(T),ae)}function I(T){return T===47||T===62||Ge(T)?oe(T):i(T)}function L(T){return T===62?(n.consume(T),n.exit("htmlTextData"),n.exit("htmlText"),a):i(T)}function K(T){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(T),n.exit("lineEnding"),ue}function ue(T){return Te(T)?De(n,ve,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):ve(T)}function ve(T){return n.enter("htmlTextData"),f(T)}}const Js={name:"labelEnd",resolveAll:y2,resolveTo:b2,tokenize:x2},d2={tokenize:v2},p2={tokenize:S2},g2={tokenize:k2};function y2(n){let a=-1;const i=[];for(;++a<n.length;){const u=n[a][1];if(i.push(n[a]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const o=u.type==="labelImage"?4:2;u.type="data",a+=o}}return n.length!==i.length&&Yt(n,0,n.length,i),n}function b2(n,a){let i=n.length,u=0,o,s,f,m;for(;i--;)if(o=n[i][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;n[i][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(f){if(n[i][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=i,o.type!=="labelLink")){u=2;break}}else o.type==="labelEnd"&&(f=i);const d={type:n[s][1].type==="labelLink"?"link":"image",start:{...n[s][1].start},end:{...n[n.length-1][1].end}},p={type:"label",start:{...n[s][1].start},end:{...n[f][1].end}},b={type:"labelText",start:{...n[s+u+2][1].end},end:{...n[f-2][1].start}};return m=[["enter",d,a],["enter",p,a]],m=en(m,n.slice(s+1,s+u+3)),m=en(m,[["enter",b,a]]),m=en(m,Nu(a.parser.constructs.insideSpan.null,n.slice(s+u+4,f-3),a)),m=en(m,[["exit",b,a],n[f-2],n[f-1],["exit",p,a]]),m=en(m,n.slice(f+1)),m=en(m,[["exit",d,a]]),Yt(n,s,n.length,m),n}function x2(n,a,i){const u=this;let o=u.events.length,s,f;for(;o--;)if((u.events[o][1].type==="labelImage"||u.events[o][1].type==="labelLink")&&!u.events[o][1]._balanced){s=u.events[o][1];break}return m;function m(S){return s?s._inactive?g(S):(f=u.parser.defined.includes(rn(u.sliceSerialize({start:s.end,end:u.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(S),n.exit("labelMarker"),n.exit("labelEnd"),d):i(S)}function d(S){return S===40?n.attempt(d2,b,f?b:g)(S):S===91?n.attempt(p2,b,f?p:g)(S):f?b(S):g(S)}function p(S){return n.attempt(g2,b,g)(S)}function b(S){return a(S)}function g(S){return s._balanced=!0,i(S)}}function v2(n,a,i){return u;function u(g){return n.enter("resource"),n.enter("resourceMarker"),n.consume(g),n.exit("resourceMarker"),o}function o(g){return Ge(g)?ja(n,s)(g):s(g)}function s(g){return g===41?b(g):Pg(n,f,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function f(g){return Ge(g)?ja(n,d)(g):b(g)}function m(g){return i(g)}function d(g){return g===34||g===39||g===40?ey(n,p,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):b(g)}function p(g){return Ge(g)?ja(n,b)(g):b(g)}function b(g){return g===41?(n.enter("resourceMarker"),n.consume(g),n.exit("resourceMarker"),n.exit("resource"),a):i(g)}}function S2(n,a,i){const u=this;return o;function o(m){return Wg.call(u,n,s,f,"reference","referenceMarker","referenceString")(m)}function s(m){return u.parser.defined.includes(rn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?a(m):i(m)}function f(m){return i(m)}}function k2(n,a,i){return u;function u(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),o}function o(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),a):i(s)}}const E2={name:"labelStartImage",resolveAll:Js.resolveAll,tokenize:w2};function w2(n,a,i){const u=this;return o;function o(m){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(m),n.exit("labelImageMarker"),s}function s(m){return m===91?(n.enter("labelMarker"),n.consume(m),n.exit("labelMarker"),n.exit("labelImage"),f):i(m)}function f(m){return m===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(m):a(m)}}const T2={name:"labelStartLink",resolveAll:Js.resolveAll,tokenize:C2};function C2(n,a,i){const u=this;return o;function o(f){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(f),n.exit("labelMarker"),n.exit("labelLink"),s}function s(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(f):a(f)}}const us={name:"lineEnding",tokenize:A2};function A2(n,a){return i;function i(u){return n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),De(n,a,"linePrefix")}}const bu={name:"thematicBreak",tokenize:z2};function z2(n,a,i){let u=0,o;return s;function s(p){return n.enter("thematicBreak"),f(p)}function f(p){return o=p,m(p)}function m(p){return p===o?(n.enter("thematicBreakSequence"),d(p)):u>=3&&(p===null||fe(p))?(n.exit("thematicBreak"),a(p)):i(p)}function d(p){return p===o?(n.consume(p),u++,d):(n.exit("thematicBreakSequence"),Te(p)?De(n,m,"whitespace")(p):m(p))}}const Dt={continuation:{tokenize:O2},exit:M2,name:"list",tokenize:_2},N2={partial:!0,tokenize:j2},D2={partial:!0,tokenize:R2};function _2(n,a,i){const u=this,o=u.events[u.events.length-1];let s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,f=0;return m;function m(x){const w=u.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!u.containerState.marker||x===u.containerState.marker:As(x)){if(u.containerState.type||(u.containerState.type=w,n.enter(w,{_container:!0})),w==="listUnordered")return n.enter("listItemPrefix"),x===42||x===45?n.check(bu,i,p)(x):p(x);if(!u.interrupt||x===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),d(x)}return i(x)}function d(x){return As(x)&&++f<10?(n.consume(x),d):(!u.interrupt||f<2)&&(u.containerState.marker?x===u.containerState.marker:x===41||x===46)?(n.exit("listItemValue"),p(x)):i(x)}function p(x){return n.enter("listItemMarker"),n.consume(x),n.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||x,n.check(Xa,u.interrupt?i:b,n.attempt(N2,S,g))}function b(x){return u.containerState.initialBlankLine=!0,s++,S(x)}function g(x){return Te(x)?(n.enter("listItemPrefixWhitespace"),n.consume(x),n.exit("listItemPrefixWhitespace"),S):i(x)}function S(x){return u.containerState.size=s+u.sliceSerialize(n.exit("listItemPrefix"),!0).length,a(x)}}function O2(n,a,i){const u=this;return u.containerState._closeFlow=void 0,n.check(Xa,o,s);function o(m){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,De(n,a,"listItemIndent",u.containerState.size+1)(m)}function s(m){return u.containerState.furtherBlankLines||!Te(m)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(m)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,n.attempt(D2,a,f)(m))}function f(m){return u.containerState._closeFlow=!0,u.interrupt=void 0,De(n,n.attempt(Dt,a,i),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function R2(n,a,i){const u=this;return De(n,o,"listItemIndent",u.containerState.size+1);function o(s){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?a(s):i(s)}}function M2(n){n.exit(this.containerState.type)}function j2(n,a,i){const u=this;return De(n,o,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){const f=u.events[u.events.length-1];return!Te(s)&&f&&f[1].type==="listItemPrefixWhitespace"?a(s):i(s)}}const Yp={name:"setextUnderline",resolveTo:L2,tokenize:U2};function L2(n,a){let i=n.length,u,o,s;for(;i--;)if(n[i][0]==="enter"){if(n[i][1].type==="content"){u=i;break}n[i][1].type==="paragraph"&&(o=i)}else n[i][1].type==="content"&&n.splice(i,1),!s&&n[i][1].type==="definition"&&(s=i);const f={type:"setextHeading",start:{...n[u][1].start},end:{...n[n.length-1][1].end}};return n[o][1].type="setextHeadingText",s?(n.splice(o,0,["enter",f,a]),n.splice(s+1,0,["exit",n[u][1],a]),n[u][1].end={...n[s][1].end}):n[u][1]=f,n.push(["exit",f,a]),n}function U2(n,a,i){const u=this;let o;return s;function s(p){let b=u.events.length,g;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){g=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||g)?(n.enter("setextHeadingLine"),o=p,f(p)):i(p)}function f(p){return n.enter("setextHeadingLineSequence"),m(p)}function m(p){return p===o?(n.consume(p),m):(n.exit("setextHeadingLineSequence"),Te(p)?De(n,d,"lineSuffix")(p):d(p))}function d(p){return p===null||fe(p)?(n.exit("setextHeadingLine"),a(p)):i(p)}}const B2={tokenize:H2};function H2(n){const a=this,i=n.attempt(Xa,u,n.attempt(this.parser.constructs.flowInitial,o,De(n,n.attempt(this.parser.constructs.flow,o,n.attempt(XS,o)),"linePrefix")));return i;function u(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),a.currentConstruct=void 0,i}function o(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),a.currentConstruct=void 0,i}}const q2={resolveAll:ny()},Y2=ty("string"),V2=ty("text");function ty(n){return{resolveAll:ny(n==="text"?G2:void 0),tokenize:a};function a(i){const u=this,o=this.parser.constructs[n],s=i.attempt(o,f,m);return f;function f(b){return p(b)?s(b):m(b)}function m(b){if(b===null){i.consume(b);return}return i.enter("data"),i.consume(b),d}function d(b){return p(b)?(i.exit("data"),s(b)):(i.consume(b),d)}function p(b){if(b===null)return!0;const g=o[b];let S=-1;if(g)for(;++S<g.length;){const x=g[S];if(!x.previous||x.previous.call(u,u.previous))return!0}return!1}}}function ny(n){return a;function a(i,u){let o=-1,s;for(;++o<=i.length;)s===void 0?i[o]&&i[o][1].type==="data"&&(s=o,o++):(!i[o]||i[o][1].type!=="data")&&(o!==s+2&&(i[s][1].end=i[o-1][1].end,i.splice(s+2,o-s-2),o=s+2),s=void 0);return n?n(i,u):i}}function G2(n,a){let i=0;for(;++i<=n.length;)if((i===n.length||n[i][1].type==="lineEnding")&&n[i-1][1].type==="data"){const u=n[i-1][1],o=a.sliceStream(u);let s=o.length,f=-1,m=0,d;for(;s--;){const p=o[s];if(typeof p=="string"){for(f=p.length;p.charCodeAt(f-1)===32;)m++,f--;if(f)break;f=-1}else if(p===-2)d=!0,m++;else if(p!==-1){s++;break}}if(a._contentTypeTextTrailing&&i===n.length&&(m=0),m){const p={type:i===n.length||d||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?f:u.start._bufferIndex+f,_index:u.start._index+s,line:u.end.line,column:u.end.column-m,offset:u.end.offset-m},end:{...u.end}};u.end={...p.start},u.start.offset===u.end.offset?Object.assign(u,p):(n.splice(i,0,["enter",p,a],["exit",p,a]),i+=2)}i++}return n}const X2={42:Dt,43:Dt,45:Dt,48:Dt,49:Dt,50:Dt,51:Dt,52:Dt,53:Dt,54:Dt,55:Dt,56:Dt,57:Dt,62:Kg},Q2={91:JS},Z2={[-2]:rs,[-1]:rs,32:rs},F2={35:t2,42:bu,45:[Yp,bu],60:a2,61:Yp,95:bu,96:Hp,126:Hp},K2={38:Ig,92:Jg},J2={[-5]:us,[-4]:us,[-3]:us,33:E2,38:Ig,42:zs,60:[TS,h2],91:T2,92:[WS,Jg],93:Js,95:zs,96:BS},I2={null:[zs,q2]},$2={null:[42,95]},P2={null:[]},W2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$2,contentInitial:Q2,disable:P2,document:X2,flow:F2,flowInitial:Z2,insideSpan:I2,string:K2,text:J2},Symbol.toStringTag,{value:"Module"}));function ek(n,a,i){let u={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const o={},s=[];let f=[],m=[];const d={attempt:P(ie),check:P(V),consume:H,enter:B,exit:ne,interrupt:P(V,{interrupt:!0})},p={code:null,containerState:{},defineSkip:_,events:[],now:w,parser:n,previous:null,sliceSerialize:S,sliceStream:x,write:g};let b=a.tokenize.call(p,d);return a.resolveAll&&s.push(a),p;function g(ee){return f=en(f,ee),O(),f[f.length-1]!==null?[]:(he(a,0),p.events=Nu(s,p.events,p),p.events)}function S(ee,te){return nk(x(ee),te)}function x(ee){return tk(f,ee)}function w(){const{_bufferIndex:ee,_index:te,line:Se,column:ae,offset:I}=u;return{_bufferIndex:ee,_index:te,line:Se,column:ae,offset:I}}function _(ee){o[ee.line]=ee.column,U()}function O(){let ee;for(;u._index<f.length;){const te=f[u._index];if(typeof te=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<te.length;)N(te.charCodeAt(u._bufferIndex));else N(te)}}function N(ee){b=b(ee)}function H(ee){fe(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,U()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),p.previous=ee}function B(ee,te){const Se=te||{};return Se.type=ee,Se.start=w(),p.events.push(["enter",Se,p]),m.push(Se),Se}function ne(ee){const te=m.pop();return te.end=w(),p.events.push(["exit",te,p]),te}function ie(ee,te){he(ee,te.from)}function V(ee,te){te.restore()}function P(ee,te){return Se;function Se(ae,I,L){let K,ue,ve,T;return Array.isArray(ae)?X(ae):"tokenize"in ae?X([ae]):A(ae);function A(ce){return Ce;function Ce(Fe){const Ue=Fe!==null&&ce[Fe],Gt=Fe!==null&&ce.null,gn=[...Array.isArray(Ue)?Ue:Ue?[Ue]:[],...Array.isArray(Gt)?Gt:Gt?[Gt]:[]];return X(gn)(Fe)}}function X(ce){return K=ce,ue=0,ce.length===0?L:E(ce[ue])}function E(ce){return Ce;function Ce(Fe){return T=oe(),ve=ce,ce.partial||(p.currentConstruct=ce),ce.name&&p.parser.constructs.disable.null.includes(ce.name)?de():ce.tokenize.call(te?Object.assign(Object.create(p),te):p,d,W,de)(Fe)}}function W(ce){return ee(ve,T),I}function de(ce){return T.restore(),++ue<K.length?E(K[ue]):L}}}function he(ee,te){ee.resolveAll&&!s.includes(ee)&&s.push(ee),ee.resolve&&Yt(p.events,te,p.events.length-te,ee.resolve(p.events.slice(te),p)),ee.resolveTo&&(p.events=ee.resolveTo(p.events,p))}function oe(){const ee=w(),te=p.previous,Se=p.currentConstruct,ae=p.events.length,I=Array.from(m);return{from:ae,restore:L};function L(){u=ee,p.previous=te,p.currentConstruct=Se,p.events.length=ae,m=I,U()}}function U(){u.line in o&&u.column<2&&(u.column=o[u.line],u.offset+=o[u.line]-1)}}function tk(n,a){const i=a.start._index,u=a.start._bufferIndex,o=a.end._index,s=a.end._bufferIndex;let f;if(i===o)f=[n[i].slice(u,s)];else{if(f=n.slice(i,o),u>-1){const m=f[0];typeof m=="string"?f[0]=m.slice(u):f.shift()}s>0&&f.push(n[o].slice(0,s))}return f}function nk(n,a){let i=-1;const u=[];let o;for(;++i<n.length;){const s=n[i];let f;if(typeof s=="string")f=s;else switch(s){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=a?" ":"	";break}case-1:{if(!a&&o)continue;f=" ";break}default:f=String.fromCharCode(s)}o=s===-2,u.push(f)}return u.join("")}function lk(n){const u={constructs:Zg([W2,...(n||{}).extensions||[]]),content:o(bS),defined:[],document:o(vS),flow:o(B2),lazy:{},string:o(Y2),text:o(V2)};return u;function o(s){return f;function f(m){return ek(u,s,m)}}}function ik(n){for(;!$g(n););return n}const Vp=/[\0\t\n\r]/g;function ak(){let n=1,a="",i=!0,u;return o;function o(s,f,m){const d=[];let p,b,g,S,x;for(s=a+(typeof s=="string"?s.toString():new TextDecoder(f||void 0).decode(s)),g=0,a="",i&&(s.charCodeAt(0)===65279&&g++,i=void 0);g<s.length;){if(Vp.lastIndex=g,p=Vp.exec(s),S=p&&p.index!==void 0?p.index:s.length,x=s.charCodeAt(S),!p){a=s.slice(g);break}if(x===10&&g===S&&u)d.push(-3),u=void 0;else switch(u&&(d.push(-5),u=void 0),g<S&&(d.push(s.slice(g,S)),n+=S-g),x){case 0:{d.push(65533),n++;break}case 9:{for(b=Math.ceil(n/4)*4,d.push(-2);n++<b;)d.push(-1);break}case 10:{d.push(-4),n=1;break}default:u=!0,n=1}g=S+1}return m&&(u&&d.push(-5),a&&d.push(a),d.push(null)),d}}const rk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function uk(n){return n.replace(rk,ok)}function ok(n,a,i){if(a)return a;if(i.charCodeAt(0)===35){const o=i.charCodeAt(1),s=o===120||o===88;return Fg(i.slice(s?2:1),s?16:10)}return Ks(i)||n}const ly={}.hasOwnProperty;function ck(n,a,i){return typeof a!="string"&&(i=a,a=void 0),sk(i)(ik(lk(i).document().write(ak()(n,a,!0))))}function sk(n){const a={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Bl),autolinkProtocol:oe,autolinkEmail:oe,atxHeading:s(Ll),blockQuote:s(Gt),characterEscape:oe,characterReference:oe,codeFenced:s(gn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:s(gn,f),codeText:s(Mi,f),codeTextData:oe,data:oe,codeFlowValue:oe,definition:s(Za),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:s(yn),hardBreakEscape:s(Ul),hardBreakTrailing:s(Ul),htmlFlow:s(Fa,f),htmlFlowData:oe,htmlText:s(Fa,f),htmlTextData:oe,image:s(Ka),label:f,link:s(Bl),listItem:s(ji),listItemValue:S,listOrdered:s(Hl,g),listUnordered:s(Hl),paragraph:s(Ru),reference:E,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:s(Ll),strong:s(Mu),thematicBreak:s(ju)},exit:{atxHeading:d(),atxHeadingSequence:ie,autolink:d(),autolinkEmail:Ue,autolinkProtocol:Fe,blockQuote:d(),characterEscapeValue:U,characterReferenceMarkerHexadecimal:de,characterReferenceMarkerNumeric:de,characterReferenceValue:ce,characterReference:Ce,codeFenced:d(O),codeFencedFence:_,codeFencedFenceInfo:x,codeFencedFenceMeta:w,codeFlowValue:U,codeIndented:d(N),codeText:d(I),codeTextData:U,data:U,definition:d(),definitionDestinationString:ne,definitionLabelString:H,definitionTitleString:B,emphasis:d(),hardBreakEscape:d(te),hardBreakTrailing:d(te),htmlFlow:d(Se),htmlFlowData:U,htmlText:d(ae),htmlTextData:U,image:d(K),label:ve,labelText:ue,lineEnding:ee,link:d(L),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:W,resourceDestinationString:T,resourceTitleString:A,resource:X,setextHeading:d(he),setextHeadingLineSequence:P,setextHeadingText:V,strong:d(),thematicBreak:d()}};iy(a,(n||{}).mdastExtensions||[]);const i={};return u;function u(Q){let $={type:"root",children:[]};const pe={stack:[$],tokenStack:[],config:a,enter:m,exit:p,buffer:f,resume:b,data:i},ke=[];let Me=-1;for(;++Me<Q.length;)if(Q[Me][1].type==="listOrdered"||Q[Me][1].type==="listUnordered")if(Q[Me][0]==="enter")ke.push(Me);else{const Ot=ke.pop();Me=o(Q,Ot,Me)}for(Me=-1;++Me<Q.length;){const Ot=a[Q[Me][0]];ly.call(Ot,Q[Me][1].type)&&Ot[Q[Me][1].type].call(Object.assign({sliceSerialize:Q[Me][2].sliceSerialize},pe),Q[Me][1])}if(pe.tokenStack.length>0){const Ot=pe.tokenStack[pe.tokenStack.length-1];(Ot[1]||Gp).call(pe,void 0,Ot[0])}for($.position={start:hl(Q.length>0?Q[0][1].start:{line:1,column:1,offset:0}),end:hl(Q.length>0?Q[Q.length-2][1].end:{line:1,column:1,offset:0})},Me=-1;++Me<a.transforms.length;)$=a.transforms[Me]($)||$;return $}function o(Q,$,pe){let ke=$-1,Me=-1,Ot=!1,bn,bt,at,kt;for(;++ke<=pe;){const Ye=Q[ke];switch(Ye[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ye[0]==="enter"?Me++:Me--,kt=void 0;break}case"lineEndingBlank":{Ye[0]==="enter"&&(bn&&!kt&&!Me&&!at&&(at=ke),kt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kt=void 0}if(!Me&&Ye[0]==="enter"&&Ye[1].type==="listItemPrefix"||Me===-1&&Ye[0]==="exit"&&(Ye[1].type==="listUnordered"||Ye[1].type==="listOrdered")){if(bn){let Yn=ke;for(bt=void 0;Yn--;){const tn=Q[Yn];if(tn[1].type==="lineEnding"||tn[1].type==="lineEndingBlank"){if(tn[0]==="exit")continue;bt&&(Q[bt][1].type="lineEndingBlank",Ot=!0),tn[1].type="lineEnding",bt=Yn}else if(!(tn[1].type==="linePrefix"||tn[1].type==="blockQuotePrefix"||tn[1].type==="blockQuotePrefixWhitespace"||tn[1].type==="blockQuoteMarker"||tn[1].type==="listItemIndent"))break}at&&(!bt||at<bt)&&(bn._spread=!0),bn.end=Object.assign({},bt?Q[bt][1].start:Ye[1].end),Q.splice(bt||ke,0,["exit",bn,Ye[2]]),ke++,pe++}if(Ye[1].type==="listItemPrefix"){const Yn={type:"listItem",_spread:!1,start:Object.assign({},Ye[1].start),end:void 0};bn=Yn,Q.splice(ke,0,["enter",Yn,Ye[2]]),ke++,pe++,at=void 0,kt=!0}}}return Q[$][1]._spread=Ot,pe}function s(Q,$){return pe;function pe(ke){m.call(this,Q(ke),ke),$&&$.call(this,ke)}}function f(){this.stack.push({type:"fragment",children:[]})}function m(Q,$,pe){this.stack[this.stack.length-1].children.push(Q),this.stack.push(Q),this.tokenStack.push([$,pe||void 0]),Q.position={start:hl($.start),end:void 0}}function d(Q){return $;function $(pe){Q&&Q.call(this,pe),p.call(this,pe)}}function p(Q,$){const pe=this.stack.pop(),ke=this.tokenStack.pop();if(ke)ke[0].type!==Q.type&&($?$.call(this,Q,ke[0]):(ke[1]||Gp).call(this,Q,ke[0]));else throw new Error("Cannot close `"+Q.type+"` ("+Ma({start:Q.start,end:Q.end})+"): it’s not open");pe.position.end=hl(Q.end)}function b(){return Fs(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function S(Q){if(this.data.expectingFirstListItemValue){const $=this.stack[this.stack.length-2];$.start=Number.parseInt(this.sliceSerialize(Q),10),this.data.expectingFirstListItemValue=void 0}}function x(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.lang=Q}function w(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.meta=Q}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function O(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.value=Q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function N(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.value=Q.replace(/(\r?\n|\r)$/g,"")}function H(Q){const $=this.resume(),pe=this.stack[this.stack.length-1];pe.label=$,pe.identifier=rn(this.sliceSerialize(Q)).toLowerCase()}function B(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.title=Q}function ne(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.url=Q}function ie(Q){const $=this.stack[this.stack.length-1];if(!$.depth){const pe=this.sliceSerialize(Q).length;$.depth=pe}}function V(){this.data.setextHeadingSlurpLineEnding=!0}function P(Q){const $=this.stack[this.stack.length-1];$.depth=this.sliceSerialize(Q).codePointAt(0)===61?1:2}function he(){this.data.setextHeadingSlurpLineEnding=void 0}function oe(Q){const pe=this.stack[this.stack.length-1].children;let ke=pe[pe.length-1];(!ke||ke.type!=="text")&&(ke=yt(),ke.position={start:hl(Q.start),end:void 0},pe.push(ke)),this.stack.push(ke)}function U(Q){const $=this.stack.pop();$.value+=this.sliceSerialize(Q),$.position.end=hl(Q.end)}function ee(Q){const $=this.stack[this.stack.length-1];if(this.data.atHardBreak){const pe=$.children[$.children.length-1];pe.position.end=hl(Q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&a.canContainEols.includes($.type)&&(oe.call(this,Q),U.call(this,Q))}function te(){this.data.atHardBreak=!0}function Se(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.value=Q}function ae(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.value=Q}function I(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.value=Q}function L(){const Q=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";Q.type+="Reference",Q.referenceType=$,delete Q.url,delete Q.title}else delete Q.identifier,delete Q.label;this.data.referenceType=void 0}function K(){const Q=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";Q.type+="Reference",Q.referenceType=$,delete Q.url,delete Q.title}else delete Q.identifier,delete Q.label;this.data.referenceType=void 0}function ue(Q){const $=this.sliceSerialize(Q),pe=this.stack[this.stack.length-2];pe.label=uk($),pe.identifier=rn($).toLowerCase()}function ve(){const Q=this.stack[this.stack.length-1],$=this.resume(),pe=this.stack[this.stack.length-1];if(this.data.inReference=!0,pe.type==="link"){const ke=Q.children;pe.children=ke}else pe.alt=$}function T(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.url=Q}function A(){const Q=this.resume(),$=this.stack[this.stack.length-1];$.title=Q}function X(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function W(Q){const $=this.resume(),pe=this.stack[this.stack.length-1];pe.label=$,pe.identifier=rn(this.sliceSerialize(Q)).toLowerCase(),this.data.referenceType="full"}function de(Q){this.data.characterReferenceType=Q.type}function ce(Q){const $=this.sliceSerialize(Q),pe=this.data.characterReferenceType;let ke;pe?(ke=Fg($,pe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ke=Ks($);const Me=this.stack[this.stack.length-1];Me.value+=ke}function Ce(Q){const $=this.stack.pop();$.position.end=hl(Q.end)}function Fe(Q){U.call(this,Q);const $=this.stack[this.stack.length-1];$.url=this.sliceSerialize(Q)}function Ue(Q){U.call(this,Q);const $=this.stack[this.stack.length-1];$.url="mailto:"+this.sliceSerialize(Q)}function Gt(){return{type:"blockquote",children:[]}}function gn(){return{type:"code",lang:null,meta:null,value:""}}function Mi(){return{type:"inlineCode",value:""}}function Za(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function yn(){return{type:"emphasis",children:[]}}function Ll(){return{type:"heading",depth:0,children:[]}}function Ul(){return{type:"break"}}function Fa(){return{type:"html",value:""}}function Ka(){return{type:"image",title:null,url:"",alt:null}}function Bl(){return{type:"link",title:null,url:"",children:[]}}function Hl(Q){return{type:"list",ordered:Q.type==="listOrdered",start:null,spread:Q._spread,children:[]}}function ji(Q){return{type:"listItem",spread:Q._spread,checked:null,children:[]}}function Ru(){return{type:"paragraph",children:[]}}function Mu(){return{type:"strong",children:[]}}function yt(){return{type:"text",value:""}}function ju(){return{type:"thematicBreak"}}}function hl(n){return{line:n.line,column:n.column,offset:n.offset}}function iy(n,a){let i=-1;for(;++i<a.length;){const u=a[i];Array.isArray(u)?iy(n,u):fk(n,u)}}function fk(n,a){let i;for(i in a)if(ly.call(a,i))switch(i){case"canContainEols":{const u=a[i];u&&n[i].push(...u);break}case"transforms":{const u=a[i];u&&n[i].push(...u);break}case"enter":case"exit":{const u=a[i];u&&Object.assign(n[i],u);break}}}function Gp(n,a){throw n?new Error("Cannot close `"+n.type+"` ("+Ma({start:n.start,end:n.end})+"): a different token (`"+a.type+"`, "+Ma({start:a.start,end:a.end})+") is open"):new Error("Cannot close document, a token (`"+a.type+"`, "+Ma({start:a.start,end:a.end})+") is still open")}function hk(n){const a=this;a.parser=i;function i(u){return ck(u,{...a.data("settings"),...n,extensions:a.data("micromarkExtensions")||[],mdastExtensions:a.data("fromMarkdownExtensions")||[]})}}function mk(n,a){const i={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(a),!0)};return n.patch(a,i),n.applyData(a,i)}function dk(n,a){const i={type:"element",tagName:"br",properties:{},children:[]};return n.patch(a,i),[n.applyData(a,i),{type:"text",value:`
`}]}function pk(n,a){const i=a.value?a.value+`
`:"",u={};a.lang&&(u.className=["language-"+a.lang]);let o={type:"element",tagName:"code",properties:u,children:[{type:"text",value:i}]};return a.meta&&(o.data={meta:a.meta}),n.patch(a,o),o=n.applyData(a,o),o={type:"element",tagName:"pre",properties:{},children:[o]},n.patch(a,o),o}function gk(n,a){const i={type:"element",tagName:"del",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function yk(n,a){const i={type:"element",tagName:"em",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function bk(n,a){const i=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",u=String(a.identifier).toUpperCase(),o=Ri(u.toLowerCase()),s=n.footnoteOrder.indexOf(u);let f,m=n.footnoteCounts.get(u);m===void 0?(m=0,n.footnoteOrder.push(u),f=n.footnoteOrder.length):f=s+1,m+=1,n.footnoteCounts.set(u,m);const d={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+o,id:i+"fnref-"+o+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};n.patch(a,d);const p={type:"element",tagName:"sup",properties:{},children:[d]};return n.patch(a,p),n.applyData(a,p)}function xk(n,a){const i={type:"element",tagName:"h"+a.depth,properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function vk(n,a){if(n.options.allowDangerousHtml){const i={type:"raw",value:a.value};return n.patch(a,i),n.applyData(a,i)}}function ay(n,a){const i=a.referenceType;let u="]";if(i==="collapsed"?u+="[]":i==="full"&&(u+="["+(a.label||a.identifier)+"]"),a.type==="imageReference")return[{type:"text",value:"!["+a.alt+u}];const o=n.all(a),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});const f=o[o.length-1];return f&&f.type==="text"?f.value+=u:o.push({type:"text",value:u}),o}function Sk(n,a){const i=String(a.identifier).toUpperCase(),u=n.definitionById.get(i);if(!u)return ay(n,a);const o={src:Ri(u.url||""),alt:a.alt};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"img",properties:o,children:[]};return n.patch(a,s),n.applyData(a,s)}function kk(n,a){const i={src:Ri(a.url)};a.alt!==null&&a.alt!==void 0&&(i.alt=a.alt),a.title!==null&&a.title!==void 0&&(i.title=a.title);const u={type:"element",tagName:"img",properties:i,children:[]};return n.patch(a,u),n.applyData(a,u)}function Ek(n,a){const i={type:"text",value:a.value.replace(/\r?\n|\r/g," ")};n.patch(a,i);const u={type:"element",tagName:"code",properties:{},children:[i]};return n.patch(a,u),n.applyData(a,u)}function wk(n,a){const i=String(a.identifier).toUpperCase(),u=n.definitionById.get(i);if(!u)return ay(n,a);const o={href:Ri(u.url||"")};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"a",properties:o,children:n.all(a)};return n.patch(a,s),n.applyData(a,s)}function Tk(n,a){const i={href:Ri(a.url)};a.title!==null&&a.title!==void 0&&(i.title=a.title);const u={type:"element",tagName:"a",properties:i,children:n.all(a)};return n.patch(a,u),n.applyData(a,u)}function Ck(n,a,i){const u=n.all(a),o=i?Ak(i):ry(a),s={},f=[];if(typeof a.checked=="boolean"){const b=u[0];let g;b&&b.type==="element"&&b.tagName==="p"?g=b:(g={type:"element",tagName:"p",properties:{},children:[]},u.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:a.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let m=-1;for(;++m<u.length;){const b=u[m];(o||m!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!o?f.push(...b.children):f.push(b)}const d=u[u.length-1];d&&(o||d.type!=="element"||d.tagName!=="p")&&f.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:s,children:f};return n.patch(a,p),n.applyData(a,p)}function Ak(n){let a=!1;if(n.type==="list"){a=n.spread||!1;const i=n.children;let u=-1;for(;!a&&++u<i.length;)a=ry(i[u])}return a}function ry(n){const a=n.spread;return a??n.children.length>1}function zk(n,a){const i={},u=n.all(a);let o=-1;for(typeof a.start=="number"&&a.start!==1&&(i.start=a.start);++o<u.length;){const f=u[o];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const s={type:"element",tagName:a.ordered?"ol":"ul",properties:i,children:n.wrap(u,!0)};return n.patch(a,s),n.applyData(a,s)}function Nk(n,a){const i={type:"element",tagName:"p",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function Dk(n,a){const i={type:"root",children:n.wrap(n.all(a))};return n.patch(a,i),n.applyData(a,i)}function _k(n,a){const i={type:"element",tagName:"strong",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}function Ok(n,a){const i=n.all(a),u=i.shift(),o=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:n.wrap([u],!0)};n.patch(a.children[0],f),o.push(f)}if(i.length>0){const f={type:"element",tagName:"tbody",properties:{},children:n.wrap(i,!0)},m=Gs(a.children[1]),d=Hg(a.children[a.children.length-1]);m&&d&&(f.position={start:m,end:d}),o.push(f)}const s={type:"element",tagName:"table",properties:{},children:n.wrap(o,!0)};return n.patch(a,s),n.applyData(a,s)}function Rk(n,a,i){const u=i?i.children:void 0,s=(u?u.indexOf(a):1)===0?"th":"td",f=i&&i.type==="table"?i.align:void 0,m=f?f.length:a.children.length;let d=-1;const p=[];for(;++d<m;){const g=a.children[d],S={},x=f?f[d]:void 0;x&&(S.align=x);let w={type:"element",tagName:s,properties:S,children:[]};g&&(w.children=n.all(g),n.patch(g,w),w=n.applyData(g,w)),p.push(w)}const b={type:"element",tagName:"tr",properties:{},children:n.wrap(p,!0)};return n.patch(a,b),n.applyData(a,b)}function Mk(n,a){const i={type:"element",tagName:"td",properties:{},children:n.all(a)};return n.patch(a,i),n.applyData(a,i)}const Xp=9,Qp=32;function jk(n){const a=String(n),i=/\r?\n|\r/g;let u=i.exec(a),o=0;const s=[];for(;u;)s.push(Zp(a.slice(o,u.index),o>0,!0),u[0]),o=u.index+u[0].length,u=i.exec(a);return s.push(Zp(a.slice(o),o>0,!1)),s.join("")}function Zp(n,a,i){let u=0,o=n.length;if(a){let s=n.codePointAt(u);for(;s===Xp||s===Qp;)u++,s=n.codePointAt(u)}if(i){let s=n.codePointAt(o-1);for(;s===Xp||s===Qp;)o--,s=n.codePointAt(o-1)}return o>u?n.slice(u,o):""}function Lk(n,a){const i={type:"text",value:jk(String(a.value))};return n.patch(a,i),n.applyData(a,i)}function Uk(n,a){const i={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(a,i),n.applyData(a,i)}const Bk={blockquote:mk,break:dk,code:pk,delete:gk,emphasis:yk,footnoteReference:bk,heading:xk,html:vk,imageReference:Sk,image:kk,inlineCode:Ek,linkReference:wk,link:Tk,listItem:Ck,list:zk,paragraph:Nk,root:Dk,strong:_k,table:Ok,tableCell:Mk,tableRow:Rk,text:Lk,thematicBreak:Uk,toml:hu,yaml:hu,definition:hu,footnoteDefinition:hu};function hu(){}const uy=-1,Du=0,La=1,Su=2,Is=3,$s=4,Ps=5,Ws=6,oy=7,cy=8,Fp=typeof self=="object"?self:globalThis,Hk=(n,a)=>{const i=(o,s)=>(n.set(s,o),o),u=o=>{if(n.has(o))return n.get(o);const[s,f]=a[o];switch(s){case Du:case uy:return i(f,o);case La:{const m=i([],o);for(const d of f)m.push(u(d));return m}case Su:{const m=i({},o);for(const[d,p]of f)m[u(d)]=u(p);return m}case Is:return i(new Date(f),o);case $s:{const{source:m,flags:d}=f;return i(new RegExp(m,d),o)}case Ps:{const m=i(new Map,o);for(const[d,p]of f)m.set(u(d),u(p));return m}case Ws:{const m=i(new Set,o);for(const d of f)m.add(u(d));return m}case oy:{const{name:m,message:d}=f;return i(new Fp[m](d),o)}case cy:return i(BigInt(f),o);case"BigInt":return i(Object(BigInt(f)),o);case"ArrayBuffer":return i(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:m}=new Uint8Array(f);return i(new DataView(m),f)}}return i(new Fp[s](f),o)};return u},Kp=n=>Hk(new Map,n)(0),Ti="",{toString:qk}={},{keys:Yk}=Object,Ra=n=>{const a=typeof n;if(a!=="object"||!n)return[Du,a];const i=qk.call(n).slice(8,-1);switch(i){case"Array":return[La,Ti];case"Object":return[Su,Ti];case"Date":return[Is,Ti];case"RegExp":return[$s,Ti];case"Map":return[Ps,Ti];case"Set":return[Ws,Ti];case"DataView":return[La,i]}return i.includes("Array")?[La,i]:i.includes("Error")?[oy,i]:[Su,i]},mu=([n,a])=>n===Du&&(a==="function"||a==="symbol"),Vk=(n,a,i,u)=>{const o=(f,m)=>{const d=u.push(f)-1;return i.set(m,d),d},s=f=>{if(i.has(f))return i.get(f);let[m,d]=Ra(f);switch(m){case Du:{let b=f;switch(d){case"bigint":m=cy,b=f.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+d);b=null;break;case"undefined":return o([uy],f)}return o([m,b],f)}case La:{if(d){let S=f;return d==="DataView"?S=new Uint8Array(f.buffer):d==="ArrayBuffer"&&(S=new Uint8Array(f)),o([d,[...S]],f)}const b=[],g=o([m,b],f);for(const S of f)b.push(s(S));return g}case Su:{if(d)switch(d){case"BigInt":return o([d,f.toString()],f);case"Boolean":case"Number":case"String":return o([d,f.valueOf()],f)}if(a&&"toJSON"in f)return s(f.toJSON());const b=[],g=o([m,b],f);for(const S of Yk(f))(n||!mu(Ra(f[S])))&&b.push([s(S),s(f[S])]);return g}case Is:return o([m,f.toISOString()],f);case $s:{const{source:b,flags:g}=f;return o([m,{source:b,flags:g}],f)}case Ps:{const b=[],g=o([m,b],f);for(const[S,x]of f)(n||!(mu(Ra(S))||mu(Ra(x))))&&b.push([s(S),s(x)]);return g}case Ws:{const b=[],g=o([m,b],f);for(const S of f)(n||!mu(Ra(S)))&&b.push(s(S));return g}}const{message:p}=f;return o([m,{name:d,message:p}],f)};return s},Jp=(n,{json:a,lossy:i}={})=>{const u=[];return Vk(!(a||i),!!a,new Map,u)(n),u},ku=typeof structuredClone=="function"?(n,a)=>a&&("json"in a||"lossy"in a)?Kp(Jp(n,a)):structuredClone(n):(n,a)=>Kp(Jp(n,a));function Gk(n,a){const i=[{type:"text",value:"↩"}];return a>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(a)}]}),i}function Xk(n,a){return"Back to reference "+(n+1)+(a>1?"-"+a:"")}function Qk(n){const a=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",i=n.options.footnoteBackContent||Gk,u=n.options.footnoteBackLabel||Xk,o=n.options.footnoteLabel||"Footnotes",s=n.options.footnoteLabelTagName||"h2",f=n.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let d=-1;for(;++d<n.footnoteOrder.length;){const p=n.footnoteById.get(n.footnoteOrder[d]);if(!p)continue;const b=n.all(p),g=String(p.identifier).toUpperCase(),S=Ri(g.toLowerCase());let x=0;const w=[],_=n.footnoteCounts.get(g);for(;_!==void 0&&++x<=_;){w.length>0&&w.push({type:"text",value:" "});let H=typeof i=="string"?i:i(d,x);typeof H=="string"&&(H={type:"text",value:H}),w.push({type:"element",tagName:"a",properties:{href:"#"+a+"fnref-"+S+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(d,x),className:["data-footnote-backref"]},children:Array.isArray(H)?H:[H]})}const O=b[b.length-1];if(O&&O.type==="element"&&O.tagName==="p"){const H=O.children[O.children.length-1];H&&H.type==="text"?H.value+=" ":O.children.push({type:"text",value:" "}),O.children.push(...w)}else b.push(...w);const N={type:"element",tagName:"li",properties:{id:a+"fn-"+S},children:n.wrap(b,!0)};n.patch(p,N),m.push(N)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...ku(f),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(m,!0)},{type:"text",value:`
`}]}}const _u=(function(n){if(n==null)return Jk;if(typeof n=="function")return Ou(n);if(typeof n=="object")return Array.isArray(n)?Zk(n):Fk(n);if(typeof n=="string")return Kk(n);throw new Error("Expected function, string, or object as test")});function Zk(n){const a=[];let i=-1;for(;++i<n.length;)a[i]=_u(n[i]);return Ou(u);function u(...o){let s=-1;for(;++s<a.length;)if(a[s].apply(this,o))return!0;return!1}}function Fk(n){const a=n;return Ou(i);function i(u){const o=u;let s;for(s in n)if(o[s]!==a[s])return!1;return!0}}function Kk(n){return Ou(a);function a(i){return i&&i.type===n}}function Ou(n){return a;function a(i,u,o){return!!(Ik(i)&&n.call(this,i,typeof u=="number"?u:void 0,o||void 0))}}function Jk(){return!0}function Ik(n){return n!==null&&typeof n=="object"&&"type"in n}const sy=[],$k=!0,Ns=!1,Pk="skip";function fy(n,a,i,u){let o;typeof a=="function"&&typeof i!="function"?(u=i,i=a):o=a;const s=_u(o),f=u?-1:1;m(n,void 0,[])();function m(d,p,b){const g=d&&typeof d=="object"?d:{};if(typeof g.type=="string"){const x=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(d.type+(x?"<"+x+">":""))+")"})}return S;function S(){let x=sy,w,_,O;if((!a||s(d,p,b[b.length-1]||void 0))&&(x=Wk(i(d,b)),x[0]===Ns))return x;if("children"in d&&d.children){const N=d;if(N.children&&x[0]!==Pk)for(_=(u?N.children.length:-1)+f,O=b.concat(N);_>-1&&_<N.children.length;){const H=N.children[_];if(w=m(H,_,O)(),w[0]===Ns)return w;_=typeof w[1]=="number"?w[1]:_+f}}return x}}}function Wk(n){return Array.isArray(n)?n:typeof n=="number"?[$k,n]:n==null?sy:[n]}function ef(n,a,i,u){let o,s,f;typeof a=="function"&&typeof i!="function"?(s=void 0,f=a,o=i):(s=a,f=i,o=u),fy(n,s,m,o);function m(d,p){const b=p[p.length-1],g=b?b.children.indexOf(d):void 0;return f(d,g,b)}}const Ds={}.hasOwnProperty,eE={};function tE(n,a){const i=a||eE,u=new Map,o=new Map,s=new Map,f={...Bk,...i.handlers},m={all:p,applyData:lE,definitionById:u,footnoteById:o,footnoteCounts:s,footnoteOrder:[],handlers:f,one:d,options:i,patch:nE,wrap:aE};return ef(n,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const g=b.type==="definition"?u:o,S=String(b.identifier).toUpperCase();g.has(S)||g.set(S,b)}}),m;function d(b,g){const S=b.type,x=m.handlers[S];if(Ds.call(m.handlers,S)&&x)return x(m,b,g);if(m.options.passThrough&&m.options.passThrough.includes(S)){if("children"in b){const{children:_,...O}=b,N=ku(O);return N.children=m.all(b),N}return ku(b)}return(m.options.unknownHandler||iE)(m,b,g)}function p(b){const g=[];if("children"in b){const S=b.children;let x=-1;for(;++x<S.length;){const w=m.one(S[x],b);if(w){if(x&&S[x-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Ip(w.value)),!Array.isArray(w)&&w.type==="element")){const _=w.children[0];_&&_.type==="text"&&(_.value=Ip(_.value))}Array.isArray(w)?g.push(...w):g.push(w)}}}return g}}function nE(n,a){n.position&&(a.position=Xv(n))}function lE(n,a){let i=a;if(n&&n.data){const u=n.data.hName,o=n.data.hChildren,s=n.data.hProperties;if(typeof u=="string")if(i.type==="element")i.tagName=u;else{const f="children"in i?i.children:[i];i={type:"element",tagName:u,properties:{},children:f}}i.type==="element"&&s&&Object.assign(i.properties,ku(s)),"children"in i&&i.children&&o!==null&&o!==void 0&&(i.children=o)}return i}function iE(n,a){const i=a.data||{},u="value"in a&&!(Ds.call(i,"hProperties")||Ds.call(i,"hChildren"))?{type:"text",value:a.value}:{type:"element",tagName:"div",properties:{},children:n.all(a)};return n.patch(a,u),n.applyData(a,u)}function aE(n,a){const i=[];let u=-1;for(a&&i.push({type:"text",value:`
`});++u<n.length;)u&&i.push({type:"text",value:`
`}),i.push(n[u]);return a&&n.length>0&&i.push({type:"text",value:`
`}),i}function Ip(n){let a=0,i=n.charCodeAt(a);for(;i===9||i===32;)a++,i=n.charCodeAt(a);return n.slice(a)}function $p(n,a){const i=tE(n,a),u=i.one(n,void 0),o=Qk(i),s=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function rE(n,a){return n&&"run"in n?async function(i,u){const o=$p(i,{file:u,...a});await n.run(o,u)}:function(i,u){return $p(i,{file:u,...n||a})}}function Pp(n){if(n)throw n}var os,Wp;function uE(){if(Wp)return os;Wp=1;var n=Object.prototype.hasOwnProperty,a=Object.prototype.toString,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=function(p){return typeof Array.isArray=="function"?Array.isArray(p):a.call(p)==="[object Array]"},s=function(p){if(!p||a.call(p)!=="[object Object]")return!1;var b=n.call(p,"constructor"),g=p.constructor&&p.constructor.prototype&&n.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!b&&!g)return!1;var S;for(S in p);return typeof S>"u"||n.call(p,S)},f=function(p,b){i&&b.name==="__proto__"?i(p,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):p[b.name]=b.newValue},m=function(p,b){if(b==="__proto__")if(n.call(p,b)){if(u)return u(p,b).value}else return;return p[b]};return os=function d(){var p,b,g,S,x,w,_=arguments[0],O=1,N=arguments.length,H=!1;for(typeof _=="boolean"&&(H=_,_=arguments[1]||{},O=2),(_==null||typeof _!="object"&&typeof _!="function")&&(_={});O<N;++O)if(p=arguments[O],p!=null)for(b in p)g=m(_,b),S=m(p,b),_!==S&&(H&&S&&(s(S)||(x=o(S)))?(x?(x=!1,w=g&&o(g)?g:[]):w=g&&s(g)?g:{},f(_,{name:b,newValue:d(H,w,S)})):typeof S<"u"&&f(_,{name:b,newValue:S}));return _},os}var oE=uE();const cs=hg(oE);function _s(n){if(typeof n!="object"||n===null)return!1;const a=Object.getPrototypeOf(n);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function cE(){const n=[],a={run:i,use:u};return a;function i(...o){let s=-1;const f=o.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);m(null,...o);function m(d,...p){const b=n[++s];let g=-1;if(d){f(d);return}for(;++g<o.length;)(p[g]===null||p[g]===void 0)&&(p[g]=o[g]);o=p,b?sE(b,m)(...p):f(null,...p)}}function u(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return n.push(o),a}}function sE(n,a){let i;return u;function u(...f){const m=n.length>f.length;let d;m&&f.push(o);try{d=n.apply(this,f)}catch(p){const b=p;if(m&&i)throw b;return o(b)}m||(d&&d.then&&typeof d.then=="function"?d.then(s,o):d instanceof Error?o(d):s(d))}function o(f,...m){i||(i=!0,a(f,...m))}function s(f){o(null,f)}}const hn={basename:fE,dirname:hE,extname:mE,join:dE,sep:"/"};function fE(n,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');Qa(n);let i=0,u=-1,o=n.length,s;if(a===void 0||a.length===0||a.length>n.length){for(;o--;)if(n.codePointAt(o)===47){if(s){i=o+1;break}}else u<0&&(s=!0,u=o+1);return u<0?"":n.slice(i,u)}if(a===n)return"";let f=-1,m=a.length-1;for(;o--;)if(n.codePointAt(o)===47){if(s){i=o+1;break}}else f<0&&(s=!0,f=o+1),m>-1&&(n.codePointAt(o)===a.codePointAt(m--)?m<0&&(u=o):(m=-1,u=f));return i===u?u=f:u<0&&(u=n.length),n.slice(i,u)}function hE(n){if(Qa(n),n.length===0)return".";let a=-1,i=n.length,u;for(;--i;)if(n.codePointAt(i)===47){if(u){a=i;break}}else u||(u=!0);return a<0?n.codePointAt(0)===47?"/":".":a===1&&n.codePointAt(0)===47?"//":n.slice(0,a)}function mE(n){Qa(n);let a=n.length,i=-1,u=0,o=-1,s=0,f;for(;a--;){const m=n.codePointAt(a);if(m===47){if(f){u=a+1;break}continue}i<0&&(f=!0,i=a+1),m===46?o<0?o=a:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||i<0||s===0||s===1&&o===i-1&&o===u+1?"":n.slice(o,i)}function dE(...n){let a=-1,i;for(;++a<n.length;)Qa(n[a]),n[a]&&(i=i===void 0?n[a]:i+"/"+n[a]);return i===void 0?".":pE(i)}function pE(n){Qa(n);const a=n.codePointAt(0)===47;let i=gE(n,!a);return i.length===0&&!a&&(i="."),i.length>0&&n.codePointAt(n.length-1)===47&&(i+="/"),a?"/"+i:i}function gE(n,a){let i="",u=0,o=-1,s=0,f=-1,m,d;for(;++f<=n.length;){if(f<n.length)m=n.codePointAt(f);else{if(m===47)break;m=47}if(m===47){if(!(o===f-1||s===1))if(o!==f-1&&s===2){if(i.length<2||u!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(d=i.lastIndexOf("/"),d!==i.length-1){d<0?(i="",u=0):(i=i.slice(0,d),u=i.length-1-i.lastIndexOf("/")),o=f,s=0;continue}}else if(i.length>0){i="",u=0,o=f,s=0;continue}}a&&(i=i.length>0?i+"/..":"..",u=2)}else i.length>0?i+="/"+n.slice(o+1,f):i=n.slice(o+1,f),u=f-o-1;o=f,s=0}else m===46&&s>-1?s++:s=-1}return i}function Qa(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const yE={cwd:bE};function bE(){return"/"}function Os(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function xE(n){if(typeof n=="string")n=new URL(n);else if(!Os(n)){const a=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw a.code="ERR_INVALID_ARG_TYPE",a}if(n.protocol!=="file:"){const a=new TypeError("The URL must be of scheme file");throw a.code="ERR_INVALID_URL_SCHEME",a}return vE(n)}function vE(n){if(n.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const a=n.pathname;let i=-1;for(;++i<a.length;)if(a.codePointAt(i)===37&&a.codePointAt(i+1)===50){const u=a.codePointAt(i+2);if(u===70||u===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(a)}const ss=["history","path","basename","stem","extname","dirname"];class hy{constructor(a){let i;a?Os(a)?i={path:a}:typeof a=="string"||SE(a)?i={value:a}:i=a:i={},this.cwd="cwd"in i?"":yE.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<ss.length;){const s=ss[u];s in i&&i[s]!==void 0&&i[s]!==null&&(this[s]=s==="history"?[...i[s]]:i[s])}let o;for(o in i)ss.includes(o)||(this[o]=i[o])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(a){hs(a,"basename"),fs(a,"basename"),this.path=hn.join(this.dirname||"",a)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(a){eg(this.basename,"dirname"),this.path=hn.join(a||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(a){if(fs(a,"extname"),eg(this.dirname,"extname"),a){if(a.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(a.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(a||""))}get path(){return this.history[this.history.length-1]}set path(a){Os(a)&&(a=xE(a)),hs(a,"path"),this.path!==a&&this.history.push(a)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(a){hs(a,"stem"),fs(a,"stem"),this.path=hn.join(this.dirname||"",a+(this.extname||""))}fail(a,i,u){const o=this.message(a,i,u);throw o.fatal=!0,o}info(a,i,u){const o=this.message(a,i,u);return o.fatal=void 0,o}message(a,i,u){const o=new gt(a,i,u);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(a){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(a||void 0).decode(this.value)}}function fs(n,a){if(n&&n.includes(hn.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+hn.sep+"`")}function hs(n,a){if(!n)throw new Error("`"+a+"` cannot be empty")}function eg(n,a){if(!n)throw new Error("Setting `"+a+"` requires `path` to be set too")}function SE(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const kE=(function(n){const u=this.constructor.prototype,o=u[n],s=function(){return o.apply(s,arguments)};return Object.setPrototypeOf(s,u),s}),EE={}.hasOwnProperty;class tf extends kE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=cE()}copy(){const a=new tf;let i=-1;for(;++i<this.attachers.length;){const u=this.attachers[i];a.use(...u)}return a.data(cs(!0,{},this.namespace)),a}data(a,i){return typeof a=="string"?arguments.length===2?(ps("data",this.frozen),this.namespace[a]=i,this):EE.call(this.namespace,a)&&this.namespace[a]||void 0:a?(ps("data",this.frozen),this.namespace=a,this):this.namespace}freeze(){if(this.frozen)return this;const a=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const o=i.call(a,...u);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(a){this.freeze();const i=du(a),u=this.parser||this.Parser;return ms("parse",u),u(String(i),i)}process(a,i){const u=this;return this.freeze(),ms("process",this.parser||this.Parser),ds("process",this.compiler||this.Compiler),i?o(void 0,i):new Promise(o);function o(s,f){const m=du(a),d=u.parse(m);u.run(d,m,function(b,g,S){if(b||!g||!S)return p(b);const x=g,w=u.stringify(x,S);CE(w)?S.value=w:S.result=w,p(b,S)});function p(b,g){b||!g?f(b):s?s(g):i(void 0,g)}}}processSync(a){let i=!1,u;return this.freeze(),ms("processSync",this.parser||this.Parser),ds("processSync",this.compiler||this.Compiler),this.process(a,o),ng("processSync","process",i),u;function o(s,f){i=!0,Pp(s),u=f}}run(a,i,u){tg(a),this.freeze();const o=this.transformers;return!u&&typeof i=="function"&&(u=i,i=void 0),u?s(void 0,u):new Promise(s);function s(f,m){const d=du(i);o.run(a,d,p);function p(b,g,S){const x=g||a;b?m(b):f?f(x):u(void 0,x,S)}}}runSync(a,i){let u=!1,o;return this.run(a,i,s),ng("runSync","run",u),o;function s(f,m){Pp(f),o=m,u=!0}}stringify(a,i){this.freeze();const u=du(i),o=this.compiler||this.Compiler;return ds("stringify",o),tg(a),o(a,u)}use(a,...i){const u=this.attachers,o=this.namespace;if(ps("use",this.frozen),a!=null)if(typeof a=="function")d(a,i);else if(typeof a=="object")Array.isArray(a)?m(a):f(a);else throw new TypeError("Expected usable value, not `"+a+"`");return this;function s(p){if(typeof p=="function")d(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[b,...g]=p;d(b,g)}else f(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function f(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(p.plugins),p.settings&&(o.settings=cs(!0,o.settings,p.settings))}function m(p){let b=-1;if(p!=null)if(Array.isArray(p))for(;++b<p.length;){const g=p[b];s(g)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function d(p,b){let g=-1,S=-1;for(;++g<u.length;)if(u[g][0]===p){S=g;break}if(S===-1)u.push([p,...b]);else if(b.length>0){let[x,...w]=b;const _=u[S][1];_s(_)&&_s(x)&&(x=cs(!0,_,x)),u[S]=[p,x,...w]}}}}const wE=new tf().freeze();function ms(n,a){if(typeof a!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function ds(n,a){if(typeof a!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function ps(n,a){if(a)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function tg(n){if(!_s(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function ng(n,a,i){if(!i)throw new Error("`"+n+"` finished async. Use `"+a+"` instead")}function du(n){return TE(n)?n:new hy(n)}function TE(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function CE(n){return typeof n=="string"||AE(n)}function AE(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const zE="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",lg=[],ig={allowDangerousHtml:!0},NE=/^(https?|ircs?|mailto|xmpp)$/i,DE=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function _E(n){const a=OE(n),i=RE(n);return ME(a.runSync(a.parse(i),i),n)}function OE(n){const a=n.rehypePlugins||lg,i=n.remarkPlugins||lg,u=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...ig}:ig;return wE().use(hk).use(i).use(rE,u).use(a)}function RE(n){const a=n.children||"",i=new hy;return typeof a=="string"&&(i.value=a),i}function ME(n,a){const i=a.allowedElements,u=a.allowElement,o=a.components,s=a.disallowedElements,f=a.skipHtml,m=a.unwrapDisallowed,d=a.urlTransform||jE;for(const b of DE)Object.hasOwn(a,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+zE+b.id,void 0);return ef(n,p),Jv(n,{Fragment:k.Fragment,components:o,ignoreInvalidStyle:!0,jsx:k.jsx,jsxs:k.jsxs,passKeys:!0,passNode:!0});function p(b,g,S){if(b.type==="raw"&&S&&typeof g=="number")return f?S.children.splice(g,1):S.children[g]={type:"text",value:b.value},g;if(b.type==="element"){let x;for(x in as)if(Object.hasOwn(as,x)&&Object.hasOwn(b.properties,x)){const w=b.properties[x],_=as[x];(_===null||_.includes(b.tagName))&&(b.properties[x]=d(String(w||""),x,b))}}if(b.type==="element"){let x=i?!i.includes(b.tagName):s?s.includes(b.tagName):!1;if(!x&&u&&typeof g=="number"&&(x=!u(b,g,S)),x&&S&&typeof g=="number")return m&&b.children?S.children.splice(g,1,...b.children):S.children.splice(g,1),g}}}function jE(n){const a=n.indexOf(":"),i=n.indexOf("?"),u=n.indexOf("#"),o=n.indexOf("/");return a===-1||o!==-1&&a>o||i!==-1&&a>i||u!==-1&&a>u||NE.test(n.slice(0,a))?n:""}function ag(n,a){const i=String(n);if(typeof a!="string")throw new TypeError("Expected character");let u=0,o=i.indexOf(a);for(;o!==-1;)u++,o=i.indexOf(a,o+a.length);return u}function LE(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function UE(n,a,i){const o=_u((i||{}).ignore||[]),s=BE(a);let f=-1;for(;++f<s.length;)fy(n,"text",m);function m(p,b){let g=-1,S;for(;++g<b.length;){const x=b[g],w=S?S.children:void 0;if(o(x,w?w.indexOf(x):void 0,S))return;S=x}if(S)return d(p,b)}function d(p,b){const g=b[b.length-1],S=s[f][0],x=s[f][1];let w=0;const O=g.children.indexOf(p);let N=!1,H=[];S.lastIndex=0;let B=S.exec(p.value);for(;B;){const ne=B.index,ie={index:B.index,input:B.input,stack:[...b,p]};let V=x(...B,ie);if(typeof V=="string"&&(V=V.length>0?{type:"text",value:V}:void 0),V===!1?S.lastIndex=ne+1:(w!==ne&&H.push({type:"text",value:p.value.slice(w,ne)}),Array.isArray(V)?H.push(...V):V&&H.push(V),w=ne+B[0].length,N=!0),!S.global)break;B=S.exec(p.value)}return N?(w<p.value.length&&H.push({type:"text",value:p.value.slice(w)}),g.children.splice(O,1,...H)):H=[p],O+H.length}}function BE(n){const a=[];if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!n[0]||Array.isArray(n[0])?n:[n];let u=-1;for(;++u<i.length;){const o=i[u];a.push([HE(o[0]),qE(o[1])])}return a}function HE(n){return typeof n=="string"?new RegExp(LE(n),"g"):n}function qE(n){return typeof n=="function"?n:function(){return n}}const gs="phrasing",ys=["autolink","link","image","label"];function YE(){return{transforms:[KE],enter:{literalAutolink:GE,literalAutolinkEmail:bs,literalAutolinkHttp:bs,literalAutolinkWww:bs},exit:{literalAutolink:FE,literalAutolinkEmail:ZE,literalAutolinkHttp:XE,literalAutolinkWww:QE}}}function VE(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:gs,notInConstruct:ys},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:gs,notInConstruct:ys},{character:":",before:"[ps]",after:"\\/",inConstruct:gs,notInConstruct:ys}]}}function GE(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function bs(n){this.config.enter.autolinkProtocol.call(this,n)}function XE(n){this.config.exit.autolinkProtocol.call(this,n)}function QE(n){this.config.exit.data.call(this,n);const a=this.stack[this.stack.length-1];a.type,a.url="http://"+this.sliceSerialize(n)}function ZE(n){this.config.exit.autolinkEmail.call(this,n)}function FE(n){this.exit(n)}function KE(n){UE(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,JE],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,IE]],{ignore:["link","linkReference"]})}function JE(n,a,i,u,o){let s="";if(!my(o)||(/^w/i.test(a)&&(i=a+i,a="",s="http://"),!$E(i)))return!1;const f=PE(i+u);if(!f[0])return!1;const m={type:"link",title:null,url:s+a+f[0],children:[{type:"text",value:a+f[0]}]};return f[1]?[m,{type:"text",value:f[1]}]:m}function IE(n,a,i,u){return!my(u,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+a+"@"+i,children:[{type:"text",value:a+"@"+i}]}}function $E(n){const a=n.split(".");return!(a.length<2||a[a.length-1]&&(/_/.test(a[a.length-1])||!/[a-zA-Z\d]/.test(a[a.length-1]))||a[a.length-2]&&(/_/.test(a[a.length-2])||!/[a-zA-Z\d]/.test(a[a.length-2])))}function PE(n){const a=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!a)return[n,void 0];n=n.slice(0,a.index);let i=a[0],u=i.indexOf(")");const o=ag(n,"(");let s=ag(n,")");for(;u!==-1&&o>s;)n+=i.slice(0,u+1),i=i.slice(u+1),u=i.indexOf(")"),s++;return[n,i]}function my(n,a){const i=n.input.charCodeAt(n.index-1);return(n.index===0||Rl(i)||zu(i))&&(!a||i!==47)}dy.peek=uw;function WE(){this.buffer()}function ew(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function tw(){this.buffer()}function nw(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function lw(n){const a=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=rn(this.sliceSerialize(n)).toLowerCase(),i.label=a}function iw(n){this.exit(n)}function aw(n){const a=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=rn(this.sliceSerialize(n)).toLowerCase(),i.label=a}function rw(n){this.exit(n)}function uw(){return"["}function dy(n,a,i,u){const o=i.createTracker(u);let s=o.move("[^");const f=i.enter("footnoteReference"),m=i.enter("reference");return s+=o.move(i.safe(i.associationId(n),{after:"]",before:s})),m(),f(),s+=o.move("]"),s}function ow(){return{enter:{gfmFootnoteCallString:WE,gfmFootnoteCall:ew,gfmFootnoteDefinitionLabelString:tw,gfmFootnoteDefinition:nw},exit:{gfmFootnoteCallString:lw,gfmFootnoteCall:iw,gfmFootnoteDefinitionLabelString:aw,gfmFootnoteDefinition:rw}}}function cw(n){let a=!1;return n&&n.firstLineBlank&&(a=!0),{handlers:{footnoteDefinition:i,footnoteReference:dy},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(u,o,s,f){const m=s.createTracker(f);let d=m.move("[^");const p=s.enter("footnoteDefinition"),b=s.enter("label");return d+=m.move(s.safe(s.associationId(u),{before:d,after:"]"})),b(),d+=m.move("]:"),u.children&&u.children.length>0&&(m.shift(4),d+=m.move((a?`
`:" ")+s.indentLines(s.containerFlow(u,m.current()),a?py:sw))),p(),d}}function sw(n,a,i){return a===0?n:py(n,a,i)}function py(n,a,i){return(i?"":"    ")+n}const fw=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];gy.peek=gw;function hw(){return{canContainEols:["delete"],enter:{strikethrough:dw},exit:{strikethrough:pw}}}function mw(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:fw}],handlers:{delete:gy}}}function dw(n){this.enter({type:"delete",children:[]},n)}function pw(n){this.exit(n)}function gy(n,a,i,u){const o=i.createTracker(u),s=i.enter("strikethrough");let f=o.move("~~");return f+=i.containerPhrasing(n,{...o.current(),before:f,after:"~"}),f+=o.move("~~"),s(),f}function gw(){return"~"}function yw(n){return n.length}function bw(n,a){const i=a||{},u=(i.align||[]).concat(),o=i.stringLength||yw,s=[],f=[],m=[],d=[];let p=0,b=-1;for(;++b<n.length;){const _=[],O=[];let N=-1;for(n[b].length>p&&(p=n[b].length);++N<n[b].length;){const H=xw(n[b][N]);if(i.alignDelimiters!==!1){const B=o(H);O[N]=B,(d[N]===void 0||B>d[N])&&(d[N]=B)}_.push(H)}f[b]=_,m[b]=O}let g=-1;if(typeof u=="object"&&"length"in u)for(;++g<p;)s[g]=rg(u[g]);else{const _=rg(u);for(;++g<p;)s[g]=_}g=-1;const S=[],x=[];for(;++g<p;){const _=s[g];let O="",N="";_===99?(O=":",N=":"):_===108?O=":":_===114&&(N=":");let H=i.alignDelimiters===!1?1:Math.max(1,d[g]-O.length-N.length);const B=O+"-".repeat(H)+N;i.alignDelimiters!==!1&&(H=O.length+H+N.length,H>d[g]&&(d[g]=H),x[g]=H),S[g]=B}f.splice(1,0,S),m.splice(1,0,x),b=-1;const w=[];for(;++b<f.length;){const _=f[b],O=m[b];g=-1;const N=[];for(;++g<p;){const H=_[g]||"";let B="",ne="";if(i.alignDelimiters!==!1){const ie=d[g]-(O[g]||0),V=s[g];V===114?B=" ".repeat(ie):V===99?ie%2?(B=" ".repeat(ie/2+.5),ne=" ".repeat(ie/2-.5)):(B=" ".repeat(ie/2),ne=B):ne=" ".repeat(ie)}i.delimiterStart!==!1&&!g&&N.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&H==="")&&(i.delimiterStart!==!1||g)&&N.push(" "),i.alignDelimiters!==!1&&N.push(B),N.push(H),i.alignDelimiters!==!1&&N.push(ne),i.padding!==!1&&N.push(" "),(i.delimiterEnd!==!1||g!==p-1)&&N.push("|")}w.push(i.delimiterEnd===!1?N.join("").replace(/ +$/,""):N.join(""))}return w.join(`
`)}function xw(n){return n==null?"":String(n)}function rg(n){const a=typeof n=="string"?n.codePointAt(0):0;return a===67||a===99?99:a===76||a===108?108:a===82||a===114?114:0}function vw(n,a,i,u){const o=i.enter("blockquote"),s=i.createTracker(u);s.move("> "),s.shift(2);const f=i.indentLines(i.containerFlow(n,s.current()),Sw);return o(),f}function Sw(n,a,i){return">"+(i?"":" ")+n}function kw(n,a){return ug(n,a.inConstruct,!0)&&!ug(n,a.notInConstruct,!1)}function ug(n,a,i){if(typeof a=="string"&&(a=[a]),!a||a.length===0)return i;let u=-1;for(;++u<a.length;)if(n.includes(a[u]))return!0;return!1}function og(n,a,i,u){let o=-1;for(;++o<i.unsafe.length;)if(i.unsafe[o].character===`
`&&kw(i.stack,i.unsafe[o]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function Ew(n,a){const i=String(n);let u=i.indexOf(a),o=u,s=0,f=0;if(typeof a!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===o?++s>f&&(f=s):s=1,o=u+a.length,u=i.indexOf(a,o);return f}function ww(n,a){return!!(a.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function Tw(n){const a=n.options.fence||"`";if(a!=="`"&&a!=="~")throw new Error("Cannot serialize code with `"+a+"` for `options.fence`, expected `` ` `` or `~`");return a}function Cw(n,a,i,u){const o=Tw(i),s=n.value||"",f=o==="`"?"GraveAccent":"Tilde";if(ww(n,i)){const g=i.enter("codeIndented"),S=i.indentLines(s,Aw);return g(),S}const m=i.createTracker(u),d=o.repeat(Math.max(Ew(s,o)+1,3)),p=i.enter("codeFenced");let b=m.move(d);if(n.lang){const g=i.enter(`codeFencedLang${f}`);b+=m.move(i.safe(n.lang,{before:b,after:" ",encode:["`"],...m.current()})),g()}if(n.lang&&n.meta){const g=i.enter(`codeFencedMeta${f}`);b+=m.move(" "),b+=m.move(i.safe(n.meta,{before:b,after:`
`,encode:["`"],...m.current()})),g()}return b+=m.move(`
`),s&&(b+=m.move(s+`
`)),b+=m.move(d),p(),b}function Aw(n,a,i){return(i?"":"    ")+n}function nf(n){const a=n.options.quote||'"';if(a!=='"'&&a!=="'")throw new Error("Cannot serialize title with `"+a+"` for `options.quote`, expected `\"`, or `'`");return a}function zw(n,a,i,u){const o=nf(i),s=o==='"'?"Quote":"Apostrophe",f=i.enter("definition");let m=i.enter("label");const d=i.createTracker(u);let p=d.move("[");return p+=d.move(i.safe(i.associationId(n),{before:p,after:"]",...d.current()})),p+=d.move("]: "),m(),!n.url||/[\0- \u007F]/.test(n.url)?(m=i.enter("destinationLiteral"),p+=d.move("<"),p+=d.move(i.safe(n.url,{before:p,after:">",...d.current()})),p+=d.move(">")):(m=i.enter("destinationRaw"),p+=d.move(i.safe(n.url,{before:p,after:n.title?" ":`
`,...d.current()}))),m(),n.title&&(m=i.enter(`title${s}`),p+=d.move(" "+o),p+=d.move(i.safe(n.title,{before:p,after:o,...d.current()})),p+=d.move(o),m()),f(),p}function Nw(n){const a=n.options.emphasis||"*";if(a!=="*"&&a!=="_")throw new Error("Cannot serialize emphasis with `"+a+"` for `options.emphasis`, expected `*`, or `_`");return a}function Ha(n){return"&#x"+n.toString(16).toUpperCase()+";"}function Eu(n,a,i){const u=Di(n),o=Di(a);return u===void 0?o===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}yy.peek=Dw;function yy(n,a,i,u){const o=Nw(i),s=i.enter("emphasis"),f=i.createTracker(u),m=f.move(o);let d=f.move(i.containerPhrasing(n,{after:o,before:m,...f.current()}));const p=d.charCodeAt(0),b=Eu(u.before.charCodeAt(u.before.length-1),p,o);b.inside&&(d=Ha(p)+d.slice(1));const g=d.charCodeAt(d.length-1),S=Eu(u.after.charCodeAt(0),g,o);S.inside&&(d=d.slice(0,-1)+Ha(g));const x=f.move(o);return s(),i.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},m+d+x}function Dw(n,a,i){return i.options.emphasis||"*"}function _w(n,a){let i=!1;return ef(n,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return i=!0,Ns}),!!((!n.depth||n.depth<3)&&Fs(n)&&(a.options.setext||i))}function Ow(n,a,i,u){const o=Math.max(Math.min(6,n.depth||1),1),s=i.createTracker(u);if(_w(n,i)){const b=i.enter("headingSetext"),g=i.enter("phrasing"),S=i.containerPhrasing(n,{...s.current(),before:`
`,after:`
`});return g(),b(),S+`
`+(o===1?"=":"-").repeat(S.length-(Math.max(S.lastIndexOf("\r"),S.lastIndexOf(`
`))+1))}const f="#".repeat(o),m=i.enter("headingAtx"),d=i.enter("phrasing");s.move(f+" ");let p=i.containerPhrasing(n,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(p)&&(p=Ha(p.charCodeAt(0))+p.slice(1)),p=p?f+" "+p:f,i.options.closeAtx&&(p+=" "+f),d(),m(),p}by.peek=Rw;function by(n){return n.value||""}function Rw(){return"<"}xy.peek=Mw;function xy(n,a,i,u){const o=nf(i),s=o==='"'?"Quote":"Apostrophe",f=i.enter("image");let m=i.enter("label");const d=i.createTracker(u);let p=d.move("![");return p+=d.move(i.safe(n.alt,{before:p,after:"]",...d.current()})),p+=d.move("]("),m(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(m=i.enter("destinationLiteral"),p+=d.move("<"),p+=d.move(i.safe(n.url,{before:p,after:">",...d.current()})),p+=d.move(">")):(m=i.enter("destinationRaw"),p+=d.move(i.safe(n.url,{before:p,after:n.title?" ":")",...d.current()}))),m(),n.title&&(m=i.enter(`title${s}`),p+=d.move(" "+o),p+=d.move(i.safe(n.title,{before:p,after:o,...d.current()})),p+=d.move(o),m()),p+=d.move(")"),f(),p}function Mw(){return"!"}vy.peek=jw;function vy(n,a,i,u){const o=n.referenceType,s=i.enter("imageReference");let f=i.enter("label");const m=i.createTracker(u);let d=m.move("![");const p=i.safe(n.alt,{before:d,after:"]",...m.current()});d+=m.move(p+"]["),f();const b=i.stack;i.stack=[],f=i.enter("reference");const g=i.safe(i.associationId(n),{before:d,after:"]",...m.current()});return f(),i.stack=b,s(),o==="full"||!p||p!==g?d+=m.move(g+"]"):o==="shortcut"?d=d.slice(0,-1):d+=m.move("]"),d}function jw(){return"!"}Sy.peek=Lw;function Sy(n,a,i){let u=n.value||"",o="`",s=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(u);)o+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++s<i.unsafe.length;){const f=i.unsafe[s],m=i.compilePattern(f);let d;if(f.atBreak)for(;d=m.exec(u);){let p=d.index;u.charCodeAt(p)===10&&u.charCodeAt(p-1)===13&&p--,u=u.slice(0,p)+" "+u.slice(d.index+1)}}return o+u+o}function Lw(){return"`"}function ky(n,a){const i=Fs(n);return!!(!a.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(i===n.url||"mailto:"+i===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}Ey.peek=Uw;function Ey(n,a,i,u){const o=nf(i),s=o==='"'?"Quote":"Apostrophe",f=i.createTracker(u);let m,d;if(ky(n,i)){const b=i.stack;i.stack=[],m=i.enter("autolink");let g=f.move("<");return g+=f.move(i.containerPhrasing(n,{before:g,after:">",...f.current()})),g+=f.move(">"),m(),i.stack=b,g}m=i.enter("link"),d=i.enter("label");let p=f.move("[");return p+=f.move(i.containerPhrasing(n,{before:p,after:"](",...f.current()})),p+=f.move("]("),d(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(d=i.enter("destinationLiteral"),p+=f.move("<"),p+=f.move(i.safe(n.url,{before:p,after:">",...f.current()})),p+=f.move(">")):(d=i.enter("destinationRaw"),p+=f.move(i.safe(n.url,{before:p,after:n.title?" ":")",...f.current()}))),d(),n.title&&(d=i.enter(`title${s}`),p+=f.move(" "+o),p+=f.move(i.safe(n.title,{before:p,after:o,...f.current()})),p+=f.move(o),d()),p+=f.move(")"),m(),p}function Uw(n,a,i){return ky(n,i)?"<":"["}wy.peek=Bw;function wy(n,a,i,u){const o=n.referenceType,s=i.enter("linkReference");let f=i.enter("label");const m=i.createTracker(u);let d=m.move("[");const p=i.containerPhrasing(n,{before:d,after:"]",...m.current()});d+=m.move(p+"]["),f();const b=i.stack;i.stack=[],f=i.enter("reference");const g=i.safe(i.associationId(n),{before:d,after:"]",...m.current()});return f(),i.stack=b,s(),o==="full"||!p||p!==g?d+=m.move(g+"]"):o==="shortcut"?d=d.slice(0,-1):d+=m.move("]"),d}function Bw(){return"["}function lf(n){const a=n.options.bullet||"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bullet`, expected `*`, `+`, or `-`");return a}function Hw(n){const a=lf(n),i=n.options.bulletOther;if(!i)return a==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===a)throw new Error("Expected `bullet` (`"+a+"`) and `bulletOther` (`"+i+"`) to be different");return i}function qw(n){const a=n.options.bulletOrdered||".";if(a!=="."&&a!==")")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOrdered`, expected `.` or `)`");return a}function Ty(n){const a=n.options.rule||"*";if(a!=="*"&&a!=="-"&&a!=="_")throw new Error("Cannot serialize rules with `"+a+"` for `options.rule`, expected `*`, `-`, or `_`");return a}function Yw(n,a,i,u){const o=i.enter("list"),s=i.bulletCurrent;let f=n.ordered?qw(i):lf(i);const m=n.ordered?f==="."?")":".":Hw(i);let d=a&&i.bulletLastUsed?f===i.bulletLastUsed:!1;if(!n.ordered){const b=n.children?n.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(d=!0),Ty(i)===f&&b){let g=-1;for(;++g<n.children.length;){const S=n.children[g];if(S&&S.type==="listItem"&&S.children&&S.children[0]&&S.children[0].type==="thematicBreak"){d=!0;break}}}}d&&(f=m),i.bulletCurrent=f;const p=i.containerFlow(n,u);return i.bulletLastUsed=f,i.bulletCurrent=s,o(),p}function Vw(n){const a=n.options.listItemIndent||"one";if(a!=="tab"&&a!=="one"&&a!=="mixed")throw new Error("Cannot serialize items with `"+a+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return a}function Gw(n,a,i,u){const o=Vw(i);let s=i.bulletCurrent||lf(i);a&&a.type==="list"&&a.ordered&&(s=(typeof a.start=="number"&&a.start>-1?a.start:1)+(i.options.incrementListMarker===!1?0:a.children.indexOf(n))+s);let f=s.length+1;(o==="tab"||o==="mixed"&&(a&&a.type==="list"&&a.spread||n.spread))&&(f=Math.ceil(f/4)*4);const m=i.createTracker(u);m.move(s+" ".repeat(f-s.length)),m.shift(f);const d=i.enter("listItem"),p=i.indentLines(i.containerFlow(n,m.current()),b);return d(),p;function b(g,S,x){return S?(x?"":" ".repeat(f))+g:(x?s:s+" ".repeat(f-s.length))+g}}function Xw(n,a,i,u){const o=i.enter("paragraph"),s=i.enter("phrasing"),f=i.containerPhrasing(n,u);return s(),o(),f}const Qw=_u(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Zw(n,a,i,u){return(n.children.some(function(f){return Qw(f)})?i.containerPhrasing:i.containerFlow).call(i,n,u)}function Fw(n){const a=n.options.strong||"*";if(a!=="*"&&a!=="_")throw new Error("Cannot serialize strong with `"+a+"` for `options.strong`, expected `*`, or `_`");return a}Cy.peek=Kw;function Cy(n,a,i,u){const o=Fw(i),s=i.enter("strong"),f=i.createTracker(u),m=f.move(o+o);let d=f.move(i.containerPhrasing(n,{after:o,before:m,...f.current()}));const p=d.charCodeAt(0),b=Eu(u.before.charCodeAt(u.before.length-1),p,o);b.inside&&(d=Ha(p)+d.slice(1));const g=d.charCodeAt(d.length-1),S=Eu(u.after.charCodeAt(0),g,o);S.inside&&(d=d.slice(0,-1)+Ha(g));const x=f.move(o+o);return s(),i.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},m+d+x}function Kw(n,a,i){return i.options.strong||"*"}function Jw(n,a,i,u){return i.safe(n.value,u)}function Iw(n){const a=n.options.ruleRepetition||3;if(a<3)throw new Error("Cannot serialize rules with repetition `"+a+"` for `options.ruleRepetition`, expected `3` or more");return a}function $w(n,a,i){const u=(Ty(i)+(i.options.ruleSpaces?" ":"")).repeat(Iw(i));return i.options.ruleSpaces?u.slice(0,-1):u}const Ay={blockquote:vw,break:og,code:Cw,definition:zw,emphasis:yy,hardBreak:og,heading:Ow,html:by,image:xy,imageReference:vy,inlineCode:Sy,link:Ey,linkReference:wy,list:Yw,listItem:Gw,paragraph:Xw,root:Zw,strong:Cy,text:Jw,thematicBreak:$w};function Pw(){return{enter:{table:Ww,tableData:cg,tableHeader:cg,tableRow:tT},exit:{codeText:nT,table:eT,tableData:xs,tableHeader:xs,tableRow:xs}}}function Ww(n){const a=n._align;this.enter({type:"table",align:a.map(function(i){return i==="none"?null:i}),children:[]},n),this.data.inTable=!0}function eT(n){this.exit(n),this.data.inTable=void 0}function tT(n){this.enter({type:"tableRow",children:[]},n)}function xs(n){this.exit(n)}function cg(n){this.enter({type:"tableCell",children:[]},n)}function nT(n){let a=this.resume();this.data.inTable&&(a=a.replace(/\\([\\|])/g,lT));const i=this.stack[this.stack.length-1];i.type,i.value=a,this.exit(n)}function lT(n,a){return a==="|"?a:n}function iT(n){const a=n||{},i=a.tableCellPadding,u=a.tablePipeAlign,o=a.stringLength,s=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:S,table:f,tableCell:d,tableRow:m}};function f(x,w,_,O){return p(b(x,_,O),x.align)}function m(x,w,_,O){const N=g(x,_,O),H=p([N]);return H.slice(0,H.indexOf(`
`))}function d(x,w,_,O){const N=_.enter("tableCell"),H=_.enter("phrasing"),B=_.containerPhrasing(x,{...O,before:s,after:s});return H(),N(),B}function p(x,w){return bw(x,{align:w,alignDelimiters:u,padding:i,stringLength:o})}function b(x,w,_){const O=x.children;let N=-1;const H=[],B=w.enter("table");for(;++N<O.length;)H[N]=g(O[N],w,_);return B(),H}function g(x,w,_){const O=x.children;let N=-1;const H=[],B=w.enter("tableRow");for(;++N<O.length;)H[N]=d(O[N],x,w,_);return B(),H}function S(x,w,_){let O=Ay.inlineCode(x,w,_);return _.stack.includes("tableCell")&&(O=O.replace(/\|/g,"\\$&")),O}}function aT(){return{exit:{taskListCheckValueChecked:sg,taskListCheckValueUnchecked:sg,paragraph:uT}}}function rT(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:oT}}}function sg(n){const a=this.stack[this.stack.length-2];a.type,a.checked=n.type==="taskListCheckValueChecked"}function uT(n){const a=this.stack[this.stack.length-2];if(a&&a.type==="listItem"&&typeof a.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const u=i.children[0];if(u&&u.type==="text"){const o=a.children;let s=-1,f;for(;++s<o.length;){const m=o[s];if(m.type==="paragraph"){f=m;break}}f===i&&(u.value=u.value.slice(1),u.value.length===0?i.children.shift():i.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,i.position.start=Object.assign({},u.position.start)))}}this.exit(n)}function oT(n,a,i,u){const o=n.children[0],s=typeof n.checked=="boolean"&&o&&o.type==="paragraph",f="["+(n.checked?"x":" ")+"] ",m=i.createTracker(u);s&&m.move(f);let d=Ay.listItem(n,a,i,{...u,...m.current()});return s&&(d=d.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),d;function p(b){return b+f}}function cT(){return[YE(),ow(),hw(),Pw(),aT()]}function sT(n){return{extensions:[VE(),cw(n),mw(),iT(n),rT()]}}const fT={tokenize:yT,partial:!0},zy={tokenize:bT,partial:!0},Ny={tokenize:xT,partial:!0},Dy={tokenize:vT,partial:!0},hT={tokenize:ST,partial:!0},_y={name:"wwwAutolink",tokenize:pT,previous:Ry},Oy={name:"protocolAutolink",tokenize:gT,previous:My},qn={name:"emailAutolink",tokenize:dT,previous:jy},pn={};function mT(){return{text:pn}}let Ol=48;for(;Ol<123;)pn[Ol]=qn,Ol++,Ol===58?Ol=65:Ol===91&&(Ol=97);pn[43]=qn;pn[45]=qn;pn[46]=qn;pn[95]=qn;pn[72]=[qn,Oy];pn[104]=[qn,Oy];pn[87]=[qn,_y];pn[119]=[qn,_y];function dT(n,a,i){const u=this;let o,s;return f;function f(g){return!Rs(g)||!jy.call(u,u.previous)||af(u.events)?i(g):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),m(g))}function m(g){return Rs(g)?(n.consume(g),m):g===64?(n.consume(g),d):i(g)}function d(g){return g===46?n.check(hT,b,p)(g):g===45||g===95||pt(g)?(s=!0,n.consume(g),d):b(g)}function p(g){return n.consume(g),o=!0,d}function b(g){return s&&o&&vt(u.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),a(g)):i(g)}}function pT(n,a,i){const u=this;return o;function o(f){return f!==87&&f!==119||!Ry.call(u,u.previous)||af(u.events)?i(f):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(fT,n.attempt(zy,n.attempt(Ny,s),i),i)(f))}function s(f){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),a(f)}}function gT(n,a,i){const u=this;let o="",s=!1;return f;function f(g){return(g===72||g===104)&&My.call(u,u.previous)&&!af(u.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),o+=String.fromCodePoint(g),n.consume(g),m):i(g)}function m(g){if(vt(g)&&o.length<5)return o+=String.fromCodePoint(g),n.consume(g),m;if(g===58){const S=o.toLowerCase();if(S==="http"||S==="https")return n.consume(g),d}return i(g)}function d(g){return g===47?(n.consume(g),s?p:(s=!0,d)):i(g)}function p(g){return g===null||vu(g)||Ge(g)||Rl(g)||zu(g)?i(g):n.attempt(zy,n.attempt(Ny,b),i)(g)}function b(g){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),a(g)}}function yT(n,a,i){let u=0;return o;function o(f){return(f===87||f===119)&&u<3?(u++,n.consume(f),o):f===46&&u===3?(n.consume(f),s):i(f)}function s(f){return f===null?i(f):a(f)}}function bT(n,a,i){let u,o,s;return f;function f(p){return p===46||p===95?n.check(Dy,d,m)(p):p===null||Ge(p)||Rl(p)||p!==45&&zu(p)?d(p):(s=!0,n.consume(p),f)}function m(p){return p===95?u=!0:(o=u,u=void 0),n.consume(p),f}function d(p){return o||u||!s?i(p):a(p)}}function xT(n,a){let i=0,u=0;return o;function o(f){return f===40?(i++,n.consume(f),o):f===41&&u<i?s(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?n.check(Dy,a,s)(f):f===null||Ge(f)||Rl(f)?a(f):(n.consume(f),o)}function s(f){return f===41&&u++,n.consume(f),o}}function vT(n,a,i){return u;function u(m){return m===33||m===34||m===39||m===41||m===42||m===44||m===46||m===58||m===59||m===63||m===95||m===126?(n.consume(m),u):m===38?(n.consume(m),s):m===93?(n.consume(m),o):m===60||m===null||Ge(m)||Rl(m)?a(m):i(m)}function o(m){return m===null||m===40||m===91||Ge(m)||Rl(m)?a(m):u(m)}function s(m){return vt(m)?f(m):i(m)}function f(m){return m===59?(n.consume(m),u):vt(m)?(n.consume(m),f):i(m)}}function ST(n,a,i){return u;function u(s){return n.consume(s),o}function o(s){return pt(s)?i(s):a(s)}}function Ry(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||Ge(n)}function My(n){return!vt(n)}function jy(n){return!(n===47||Rs(n))}function Rs(n){return n===43||n===45||n===46||n===95||pt(n)}function af(n){let a=n.length,i=!1;for(;a--;){const u=n[a][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){i=!0;break}if(u._gfmAutolinkLiteralWalkedInto){i=!1;break}}return n.length>0&&!i&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const kT={tokenize:DT,partial:!0};function ET(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:AT,continuation:{tokenize:zT},exit:NT}},text:{91:{name:"gfmFootnoteCall",tokenize:CT},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:wT,resolveTo:TT}}}}function wT(n,a,i){const u=this;let o=u.events.length;const s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;o--;){const d=u.events[o][1];if(d.type==="labelImage"){f=d;break}if(d.type==="gfmFootnoteCall"||d.type==="labelLink"||d.type==="label"||d.type==="image"||d.type==="link")break}return m;function m(d){if(!f||!f._balanced)return i(d);const p=rn(u.sliceSerialize({start:f.end,end:u.now()}));return p.codePointAt(0)!==94||!s.includes(p.slice(1))?i(d):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(d),n.exit("gfmFootnoteCallLabelMarker"),a(d))}}function TT(n,a){let i=n.length;for(;i--;)if(n[i][1].type==="labelImage"&&n[i][0]==="enter"){n[i][1];break}n[i+1][1].type="data",n[i+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},n[i+3][1].start),end:Object.assign({},n[n.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},n[i+3][1].end),end:Object.assign({},n[i+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},n[n.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},m=[n[i+1],n[i+2],["enter",u,a],n[i+3],n[i+4],["enter",o,a],["exit",o,a],["enter",s,a],["enter",f,a],["exit",f,a],["exit",s,a],n[n.length-2],n[n.length-1],["exit",u,a]];return n.splice(i,n.length-i+1,...m),n}function CT(n,a,i){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s=0,f;return m;function m(g){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(g),n.exit("gfmFootnoteCallLabelMarker"),d}function d(g){return g!==94?i(g):(n.enter("gfmFootnoteCallMarker"),n.consume(g),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",p)}function p(g){if(s>999||g===93&&!f||g===null||g===91||Ge(g))return i(g);if(g===93){n.exit("chunkString");const S=n.exit("gfmFootnoteCallString");return o.includes(rn(u.sliceSerialize(S)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(g),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),a):i(g)}return Ge(g)||(f=!0),s++,n.consume(g),g===92?b:p}function b(g){return g===91||g===92||g===93?(n.consume(g),s++,p):p(g)}}function AT(n,a,i){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s,f=0,m;return d;function d(w){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(w),n.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(w){return w===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(w),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",b):i(w)}function b(w){if(f>999||w===93&&!m||w===null||w===91||Ge(w))return i(w);if(w===93){n.exit("chunkString");const _=n.exit("gfmFootnoteDefinitionLabelString");return s=rn(u.sliceSerialize(_)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(w),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),S}return Ge(w)||(m=!0),f++,n.consume(w),w===92?g:b}function g(w){return w===91||w===92||w===93?(n.consume(w),f++,b):b(w)}function S(w){return w===58?(n.enter("definitionMarker"),n.consume(w),n.exit("definitionMarker"),o.includes(s)||o.push(s),De(n,x,"gfmFootnoteDefinitionWhitespace")):i(w)}function x(w){return a(w)}}function zT(n,a,i){return n.check(Xa,a,n.attempt(kT,a,i))}function NT(n){n.exit("gfmFootnoteDefinition")}function DT(n,a,i){const u=this;return De(n,o,"gfmFootnoteDefinitionIndent",5);function o(s){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?a(s):i(s)}}function _T(n){let i=(n||{}).singleTilde;const u={name:"strikethrough",tokenize:s,resolveAll:o};return i==null&&(i=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function o(f,m){let d=-1;for(;++d<f.length;)if(f[d][0]==="enter"&&f[d][1].type==="strikethroughSequenceTemporary"&&f[d][1]._close){let p=d;for(;p--;)if(f[p][0]==="exit"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._open&&f[d][1].end.offset-f[d][1].start.offset===f[p][1].end.offset-f[p][1].start.offset){f[d][1].type="strikethroughSequence",f[p][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[p][1].start),end:Object.assign({},f[d][1].end)},g={type:"strikethroughText",start:Object.assign({},f[p][1].end),end:Object.assign({},f[d][1].start)},S=[["enter",b,m],["enter",f[p][1],m],["exit",f[p][1],m],["enter",g,m]],x=m.parser.constructs.insideSpan.null;x&&Yt(S,S.length,0,Nu(x,f.slice(p+1,d),m)),Yt(S,S.length,0,[["exit",g,m],["enter",f[d][1],m],["exit",f[d][1],m],["exit",b,m]]),Yt(f,p-1,d-p+3,S),d=p+S.length-2;break}}for(d=-1;++d<f.length;)f[d][1].type==="strikethroughSequenceTemporary"&&(f[d][1].type="data");return f}function s(f,m,d){const p=this.previous,b=this.events;let g=0;return S;function S(w){return p===126&&b[b.length-1][1].type!=="characterEscape"?d(w):(f.enter("strikethroughSequenceTemporary"),x(w))}function x(w){const _=Di(p);if(w===126)return g>1?d(w):(f.consume(w),g++,x);if(g<2&&!i)return d(w);const O=f.exit("strikethroughSequenceTemporary"),N=Di(w);return O._open=!N||N===2&&!!_,O._close=!_||_===2&&!!N,m(w)}}}class OT{constructor(){this.map=[]}add(a,i,u){RT(this,a,i,u)}consume(a){if(this.map.sort(function(s,f){return s[0]-f[0]}),this.map.length===0)return;let i=this.map.length;const u=[];for(;i>0;)i-=1,u.push(a.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),a.length=this.map[i][0];u.push(a.slice()),a.length=0;let o=u.pop();for(;o;){for(const s of o)a.push(s);o=u.pop()}this.map.length=0}}function RT(n,a,i,u){let o=0;if(!(i===0&&u.length===0)){for(;o<n.map.length;){if(n.map[o][0]===a){n.map[o][1]+=i,n.map[o][2].push(...u);return}o+=1}n.map.push([a,i,u])}}function MT(n,a){let i=!1;const u=[];for(;a<n.length;){const o=n[a];if(i){if(o[0]==="enter")o[1].type==="tableContent"&&u.push(n[a+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(n[a-1][1].type==="tableDelimiterMarker"){const s=u.length-1;u[s]=u[s]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(i=!0);a+=1}return u}function jT(){return{flow:{null:{name:"table",tokenize:LT,resolveAll:UT}}}}function LT(n,a,i){const u=this;let o=0,s=0,f;return m;function m(U){let ee=u.events.length-1;for(;ee>-1;){const ae=u.events[ee][1].type;if(ae==="lineEnding"||ae==="linePrefix")ee--;else break}const te=ee>-1?u.events[ee][1].type:null,Se=te==="tableHead"||te==="tableRow"?V:d;return Se===V&&u.parser.lazy[u.now().line]?i(U):Se(U)}function d(U){return n.enter("tableHead"),n.enter("tableRow"),p(U)}function p(U){return U===124||(f=!0,s+=1),b(U)}function b(U){return U===null?i(U):fe(U)?s>1?(s=0,u.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(U),n.exit("lineEnding"),x):i(U):Te(U)?De(n,b,"whitespace")(U):(s+=1,f&&(f=!1,o+=1),U===124?(n.enter("tableCellDivider"),n.consume(U),n.exit("tableCellDivider"),f=!0,b):(n.enter("data"),g(U)))}function g(U){return U===null||U===124||Ge(U)?(n.exit("data"),b(U)):(n.consume(U),U===92?S:g)}function S(U){return U===92||U===124?(n.consume(U),g):g(U)}function x(U){return u.interrupt=!1,u.parser.lazy[u.now().line]?i(U):(n.enter("tableDelimiterRow"),f=!1,Te(U)?De(n,w,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):w(U))}function w(U){return U===45||U===58?O(U):U===124?(f=!0,n.enter("tableCellDivider"),n.consume(U),n.exit("tableCellDivider"),_):ie(U)}function _(U){return Te(U)?De(n,O,"whitespace")(U):O(U)}function O(U){return U===58?(s+=1,f=!0,n.enter("tableDelimiterMarker"),n.consume(U),n.exit("tableDelimiterMarker"),N):U===45?(s+=1,N(U)):U===null||fe(U)?ne(U):ie(U)}function N(U){return U===45?(n.enter("tableDelimiterFiller"),H(U)):ie(U)}function H(U){return U===45?(n.consume(U),H):U===58?(f=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(U),n.exit("tableDelimiterMarker"),B):(n.exit("tableDelimiterFiller"),B(U))}function B(U){return Te(U)?De(n,ne,"whitespace")(U):ne(U)}function ne(U){return U===124?w(U):U===null||fe(U)?!f||o!==s?ie(U):(n.exit("tableDelimiterRow"),n.exit("tableHead"),a(U)):ie(U)}function ie(U){return i(U)}function V(U){return n.enter("tableRow"),P(U)}function P(U){return U===124?(n.enter("tableCellDivider"),n.consume(U),n.exit("tableCellDivider"),P):U===null||fe(U)?(n.exit("tableRow"),a(U)):Te(U)?De(n,P,"whitespace")(U):(n.enter("data"),he(U))}function he(U){return U===null||U===124||Ge(U)?(n.exit("data"),P(U)):(n.consume(U),U===92?oe:he)}function oe(U){return U===92||U===124?(n.consume(U),he):he(U)}}function UT(n,a){let i=-1,u=!0,o=0,s=[0,0,0,0],f=[0,0,0,0],m=!1,d=0,p,b,g;const S=new OT;for(;++i<n.length;){const x=n[i],w=x[1];x[0]==="enter"?w.type==="tableHead"?(m=!1,d!==0&&(fg(S,a,d,p,b),b=void 0,d=0),p={type:"table",start:Object.assign({},w.start),end:Object.assign({},w.end)},S.add(i,0,[["enter",p,a]])):w.type==="tableRow"||w.type==="tableDelimiterRow"?(u=!0,g=void 0,s=[0,0,0,0],f=[0,i+1,0,0],m&&(m=!1,b={type:"tableBody",start:Object.assign({},w.start),end:Object.assign({},w.end)},S.add(i,0,[["enter",b,a]])),o=w.type==="tableDelimiterRow"?2:b?3:1):o&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(s[1]!==0&&(f[0]=f[1],g=pu(S,a,s,o,void 0,g),s=[0,0,0,0]),f[2]=i)):w.type==="tableCellDivider"&&(u?u=!1:(s[1]!==0&&(f[0]=f[1],g=pu(S,a,s,o,void 0,g)),s=f,f=[s[1],i,0,0])):w.type==="tableHead"?(m=!0,d=i):w.type==="tableRow"||w.type==="tableDelimiterRow"?(d=i,s[1]!==0?(f[0]=f[1],g=pu(S,a,s,o,i,g)):f[1]!==0&&(g=pu(S,a,f,o,i,g)),o=0):o&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")&&(f[3]=i)}for(d!==0&&fg(S,a,d,p,b),S.consume(a.events),i=-1;++i<a.events.length;){const x=a.events[i];x[0]==="enter"&&x[1].type==="table"&&(x[1]._align=MT(a.events,i))}return n}function pu(n,a,i,u,o,s){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",m="tableContent";i[0]!==0&&(s.end=Object.assign({},Ai(a.events,i[0])),n.add(i[0],0,[["exit",s,a]]));const d=Ai(a.events,i[1]);if(s={type:f,start:Object.assign({},d),end:Object.assign({},d)},n.add(i[1],0,[["enter",s,a]]),i[2]!==0){const p=Ai(a.events,i[2]),b=Ai(a.events,i[3]),g={type:m,start:Object.assign({},p),end:Object.assign({},b)};if(n.add(i[2],0,[["enter",g,a]]),u!==2){const S=a.events[i[2]],x=a.events[i[3]];if(S[1].end=Object.assign({},x[1].end),S[1].type="chunkText",S[1].contentType="text",i[3]>i[2]+1){const w=i[2]+1,_=i[3]-i[2]-1;n.add(w,_,[])}}n.add(i[3]+1,0,[["exit",g,a]])}return o!==void 0&&(s.end=Object.assign({},Ai(a.events,o)),n.add(o,0,[["exit",s,a]]),s=void 0),s}function fg(n,a,i,u,o){const s=[],f=Ai(a.events,i);o&&(o.end=Object.assign({},f),s.push(["exit",o,a])),u.end=Object.assign({},f),s.push(["exit",u,a]),n.add(i+1,0,s)}function Ai(n,a){const i=n[a],u=i[0]==="enter"?"start":"end";return i[1][u]}const BT={name:"tasklistCheck",tokenize:qT};function HT(){return{text:{91:BT}}}function qT(n,a,i){const u=this;return o;function o(d){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?i(d):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(d),n.exit("taskListCheckMarker"),s)}function s(d){return Ge(d)?(n.enter("taskListCheckValueUnchecked"),n.consume(d),n.exit("taskListCheckValueUnchecked"),f):d===88||d===120?(n.enter("taskListCheckValueChecked"),n.consume(d),n.exit("taskListCheckValueChecked"),f):i(d)}function f(d){return d===93?(n.enter("taskListCheckMarker"),n.consume(d),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),m):i(d)}function m(d){return fe(d)?a(d):Te(d)?n.check({tokenize:YT},a,i)(d):i(d)}}function YT(n,a,i){return De(n,u,"whitespace");function u(o){return o===null?i(o):a(o)}}function VT(n){return Zg([mT(),ET(),_T(n),jT(),HT()])}const GT={};function XT(n){const a=this,i=n||GT,u=a.data(),o=u.micromarkExtensions||(u.micromarkExtensions=[]),s=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);o.push(VT(i)),s.push(cT()),f.push(sT(i))}const QT=({href:n,children:a,...i})=>{const u=n?.startsWith("#"),o=n?.startsWith("http"),s=f=>{f.preventDefault();const m=n.slice(1),d=document.getElementById(m);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("highlight-target"),setTimeout(()=>d.classList.remove("highlight-target"),2e3))};return u?k.jsx("a",{...i,href:n,onClick:s,className:"cursor-pointer hover:text-blue-600 transition-colors",children:a}):o?k.jsx("a",{...i,href:n,target:"_blank",rel:"noopener noreferrer",children:a}):k.jsx("a",{...i,href:n,children:a})},ZT=({posts:n=[]})=>{const{id:a}=Lb(),i=n.find(u=>u.id===a);return Y.useEffect(()=>{const u=o=>{(o.key==="Escape"||o.key==="Backspace")&&(window.location.hash="#/")};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[]),Y.useEffect(()=>{if(!i)return;const u=(i.type||"default").toLowerCase(),o="post-type-css";console.log("Loading CSS for type:",u),console.log("Current post:",i);const s=document.getElementById(o);s&&(s.remove(),console.log("Removed existing CSS link"));const f=document.createElement("link");f.id=o,f.rel="stylesheet";const m="/solarist-archive/";return f.href=`${m}src/post-${u}.css`,console.log("Loading CSS from:",f.href),f.onload=()=>{console.log("CSS loaded successfully:",u)},f.onerror=()=>{console.error(`CSS file for type "${u}" not found at ${f.href}`)},document.head.appendChild(f),()=>{const d=document.getElementById(o);d&&(d.remove(),console.log("Cleaned up CSS link"))}},[i]),i?k.jsxs("div",{className:"bg-white text-black min-h-screen flex flex-col relative md:h-[calc(100vh-2rem)] md:overflow-hidden",children:[k.jsxs("div",{className:"w-full border-b border-black/10 bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12 flex-none",children:[k.jsxs(St,{to:"/",className:"group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all",children:[k.jsx(Au,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"})," Back [ESC]"]}),k.jsx("div",{className:"font-mono text-xs text-gray-500",children:"DOC_TYPE: MARKDOWN"})]}),k.jsxs("div",{className:"flex-1 flex flex-col md:flex-row md:overflow-hidden",children:[k.jsxs("div",{className:"w-full md:w-1/3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center bg-gray-50 h-full overflow-hidden relative z-10",children:[k.jsx("h1",{className:"text-5xl md:text-7xl font-black uppercase leading-none break-words tracking-tighter mb-4",children:i.title}),k.jsx("div",{className:"w-12 h-2 bg-black mb-6"}),k.jsxs("p",{className:"font-mono text-xs text-gray-500 space-y-2",children:[k.jsxs("span",{className:"block",children:["ID: ",i.id]}),k.jsxs("span",{className:"block",children:["TAG:"," ",i.tag&&i.tag!=="UNTAGGED"?i.tag.split(",").map((u,o)=>{const s=u.trim();return k.jsx(St,{to:`/archive?tag=${encodeURIComponent(s)}`,className:"inline-block hover:bg-black hover:text-white px-1 transition-all underline",children:s},o)}).reduce((u,o,s)=>u===null?[o]:[...u,k.jsx("span",{children:", "},`sep-${s}`),o],null):i.tag]}),i.date&&k.jsxs("span",{className:"block",children:["PUBLISHED: ",new Date(i.date).toISOString().split("T")[0]]}),i.modified&&k.jsxs("span",{className:"block",children:["MODIFIED: ",new Date(i.modified).toISOString().split("T")[0]]})]})]}),k.jsx("div",{className:"w-full md:w-2/3 h-full md:overflow-y-auto custom-scrollbar",children:k.jsxs("div",{className:"p-6 md:p-16 md:pt-24 pb-48",children:[k.jsx("article",{className:"max-w-3xl mx-auto markdown-body",children:k.jsx(_E,{remarkPlugins:[XT],components:{a:QT},children:i.content})}),k.jsxs("div",{className:"mt-24 pt-8 border-t border-black flex justify-between items-center text-black font-mono text-xs",children:[k.jsx("span",{children:"END OF STREAM"}),k.jsxs("div",{className:"flex gap-1",children:[k.jsx("div",{className:"w-2 h-2 bg-black"}),k.jsx("div",{className:"w-2 h-2 bg-transparent border border-black"}),k.jsx("div",{className:"w-2 h-2 bg-black"})]})]})]})})]})]}):k.jsxs("div",{className:"min-h-screen flex items-center justify-center font-black text-4xl md:text-6xl p-8 text-center",children:["404: POST_NOT_FOUND",k.jsx("br",{}),k.jsxs("span",{className:"text-sm font-mono font-normal mt-4 block text-gray-500",children:["ID: ",a,k.jsx("br",{}),"Check filename casing."]})]})},FT=()=>{const[n,a]=Cx(),i=n.get("tag"),[u,o]=Y.useState(i||null);Y.useEffect(()=>{i&&o(i)},[i]);const s=gv(),f=u?Sp(u):Ni,m=d=>{o(d),a(d?{tag:d}:{})};return k.jsxs("div",{className:"min-h-screen bg-white text-black",children:[k.jsxs("div",{className:"w-full border-b border-black bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12",children:[k.jsxs(St,{to:"/",className:"group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all",children:[k.jsx(Au,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"})," Back Home"]}),k.jsxs("div",{className:"font-mono text-xs text-gray-500",children:[f.length," ARTICLES"]})]}),k.jsxs("div",{className:"p-6 md:p-12 border-b border-black",children:[k.jsx("h1",{className:"text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter",children:"ARCHIVE"}),k.jsx("p",{className:"font-mono text-xs text-gray-500 mt-4",children:"All articles organized by tags"})]}),k.jsx("div",{className:"border-b border-black p-4 md:p-6 bg-gray-50",children:k.jsxs("div",{className:"flex flex-wrap gap-2",children:[k.jsxs("button",{onClick:()=>m(null),className:`font-mono text-xs uppercase px-3 py-1 border-2 border-black transition-all ${u?"bg-white text-black hover:bg-black hover:text-white":"bg-black text-white"}`,children:["ALL (",Ni.length,")"]}),s.map(d=>{const p=Sp(d).length;return k.jsxs("button",{onClick:()=>m(d),className:`font-mono text-xs uppercase px-3 py-1 border-2 border-black transition-all ${u===d?"bg-black text-white":"bg-white text-black hover:bg-black hover:text-white"}`,children:[d," (",p,")"]},d)})]})}),k.jsx("div",{className:"p-6 md:p-12",children:f.length===0?k.jsxs("div",{className:"text-center py-12 font-mono text-gray-500",children:['No articles found with tag "',u,'"']}):k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(d=>k.jsxs(St,{to:`/post/${d.id}`,className:"group border-2 border-black p-4 hover:bg-black hover:text-white transition-all",children:[k.jsx("h2",{className:"font-black text-xl uppercase mb-2 break-words",children:d.title}),k.jsxs("div",{className:"font-mono text-xs space-y-1",children:[k.jsx("div",{className:"opacity-70",children:d.tag}),d.date&&k.jsx("div",{className:"opacity-50",children:new Date(d.date).toISOString().split("T")[0]})]})]},d.id))})})]})},KT=()=>k.jsxs("div",{className:"min-h-screen bg-white text-black",children:[k.jsx("div",{className:"w-full border-b border-black bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12",children:k.jsxs(St,{to:"/",className:"group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all",children:[k.jsx(Au,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"})," Back Home"]})}),k.jsx("div",{className:"p-6 md:p-12 border-b border-black",children:k.jsx("h1",{className:"text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter",children:"ABOUT"})}),k.jsx("div",{className:"p-6 md:p-12 max-w-4xl",children:k.jsxs("div",{className:"space-y-8",children:[k.jsxs("section",{className:"border-2 border-black p-6",children:[k.jsx("h2",{className:"text-3xl font-black uppercase mb-4",children:"SOLARIST ARCHIVE"}),k.jsxs("div",{className:"font-mono text-sm space-y-4",children:[k.jsx("p",{children:"A brutalist blog system built with React, featuring automatic date management, dynamic styling, and tag-based organization."}),k.jsx("p",{children:"This archive follows the principles of brutalist web design: raw, functional, and honest. No unnecessary decoration, just pure content."})]})]}),k.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[k.jsxs(St,{to:"/cv",className:"group border-2 border-black p-6 hover:bg-black hover:text-white transition-all",children:[k.jsx(Px,{className:"w-8 h-8 mb-4"}),k.jsx("h3",{className:"text-2xl font-black uppercase mb-2",children:"VIEW CV"}),k.jsx("p",{className:"font-mono text-xs opacity-70 group-hover:opacity-100",children:"Professional experience and background →"})]}),k.jsxs(St,{to:"/archive",className:"group border-2 border-black p-6 hover:bg-black hover:text-white transition-all",children:[k.jsx(Jx,{className:"w-8 h-8 mb-4"}),k.jsx("h3",{className:"text-2xl font-black uppercase mb-2",children:"BROWSE ARCHIVE"}),k.jsx("p",{className:"font-mono text-xs opacity-70 group-hover:opacity-100",children:"All articles organized by tags →"})]})]}),k.jsxs("section",{className:"border-2 border-black p-6 bg-gray-50",children:[k.jsx("h2",{className:"text-2xl font-black uppercase mb-4",children:"TECH STACK"}),k.jsxs("div",{className:"font-mono text-xs space-y-2",children:[k.jsx("div",{children:"→ React 19 + Vite 7"}),k.jsx("div",{children:"→ React Router for navigation"}),k.jsx("div",{children:"→ Tailwind CSS for styling"}),k.jsx("div",{children:"→ Google Fonts (Noto Sans/Serif SC)"}),k.jsx("div",{children:"→ Markdown rendering with react-markdown"}),k.jsx("div",{children:"→ Automatic file timestamp detection"})]})]}),k.jsxs("section",{className:"border-2 border-black p-6",children:[k.jsx("h2",{className:"text-2xl font-black uppercase mb-4",children:"CONTACT"}),k.jsxs("div",{className:"font-mono text-sm space-y-2",children:[k.jsx("p",{children:"Feel free to reach out for collaboration or inquiries."}),k.jsxs("div",{className:"pt-4 space-y-1 text-xs",children:[k.jsx("div",{children:"EMAIL: your-email@example.com"}),k.jsx("div",{children:"GITHUB: github.com/yourusername"})]})]})]})]})})]}),JT=()=>k.jsxs("div",{className:"min-h-screen bg-white text-black",children:[k.jsxs("div",{className:"w-full border-b border-black bg-white/90 backdrop-blur-sm z-50 flex justify-between items-center p-4 md:px-12",children:[k.jsxs(St,{to:"/about",className:"group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all",children:[k.jsx(Au,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"})," Back to About"]}),k.jsxs("button",{className:"group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-all border-2 border-black",children:[k.jsx(Fx,{className:"w-4 h-4"})," Download PDF"]})]}),k.jsxs("div",{className:"p-6 md:p-12 max-w-4xl mx-auto",children:[k.jsxs("div",{className:"border-b-4 border-black pb-6 mb-8",children:[k.jsx("h1",{className:"text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter",children:"YOUR NAME"}),k.jsxs("div",{className:"font-mono text-sm mt-4 space-y-1",children:[k.jsx("div",{children:"POSITION: Software Engineer / Designer"}),k.jsx("div",{children:"LOCATION: Your City, Country"}),k.jsx("div",{children:"EMAIL: your-email@example.com"}),k.jsx("div",{children:"GITHUB: github.com/yourusername"})]})]}),k.jsxs("section",{className:"mb-8",children:[k.jsx("h2",{className:"text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4",children:"SUMMARY"}),k.jsx("p",{className:"text-lg leading-relaxed",children:"Brief professional summary. Describe your expertise, experience, and what you're passionate about. Keep it concise and impactful."})]}),k.jsxs("section",{className:"mb-8",children:[k.jsx("h2",{className:"text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4",children:"EXPERIENCE"}),k.jsxs("div",{className:"space-y-6",children:[k.jsxs("div",{className:"border-2 border-black p-4",children:[k.jsxs("div",{className:"flex justify-between items-start mb-2",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-xl font-black uppercase",children:"Senior Developer"}),k.jsx("div",{className:"font-mono text-sm",children:"Company Name"})]}),k.jsxs("div",{className:"font-mono text-xs text-right",children:["2022 - Present",k.jsx("br",{}),"City, Country"]})]}),k.jsxs("ul",{className:"font-mono text-sm space-y-1 mt-4",children:[k.jsx("li",{children:"→ Key achievement or responsibility"}),k.jsx("li",{children:"→ Another important accomplishment"}),k.jsx("li",{children:"→ Technical skills utilized"})]})]}),k.jsxs("div",{className:"border-2 border-black p-4",children:[k.jsxs("div",{className:"flex justify-between items-start mb-2",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-xl font-black uppercase",children:"Developer"}),k.jsx("div",{className:"font-mono text-sm",children:"Previous Company"})]}),k.jsxs("div",{className:"font-mono text-xs text-right",children:["2020 - 2022",k.jsx("br",{}),"City, Country"]})]}),k.jsxs("ul",{className:"font-mono text-sm space-y-1 mt-4",children:[k.jsx("li",{children:"→ Key achievement or responsibility"}),k.jsx("li",{children:"→ Another important accomplishment"})]})]})]})]}),k.jsxs("section",{className:"mb-8",children:[k.jsx("h2",{className:"text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4",children:"EDUCATION"}),k.jsx("div",{className:"border-2 border-black p-4",children:k.jsxs("div",{className:"flex justify-between items-start",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-xl font-black uppercase",children:"Degree Name"}),k.jsx("div",{className:"font-mono text-sm",children:"University Name"})]}),k.jsxs("div",{className:"font-mono text-xs text-right",children:["2016 - 2020",k.jsx("br",{}),"City, Country"]})]})})]}),k.jsxs("section",{className:"mb-8",children:[k.jsx("h2",{className:"text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4",children:"SKILLS"}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[k.jsxs("div",{className:"border-2 border-black p-4 bg-gray-50",children:[k.jsx("h3",{className:"font-black uppercase mb-2",children:"TECHNICAL"}),k.jsxs("div",{className:"font-mono text-xs space-y-1",children:[k.jsx("div",{children:"→ JavaScript / TypeScript"}),k.jsx("div",{children:"→ React / Vue / Node.js"}),k.jsx("div",{children:"→ Python / Go"}),k.jsx("div",{children:"→ SQL / MongoDB"})]})]}),k.jsxs("div",{className:"border-2 border-black p-4 bg-gray-50",children:[k.jsx("h3",{className:"font-black uppercase mb-2",children:"TOOLS & OTHERS"}),k.jsxs("div",{className:"font-mono text-xs space-y-1",children:[k.jsx("div",{children:"→ Git / Docker"}),k.jsx("div",{children:"→ AWS / GCP"}),k.jsx("div",{children:"→ Design Systems"}),k.jsx("div",{children:"→ Agile / Scrum"})]})]})]})]}),k.jsxs("section",{className:"mb-8",children:[k.jsx("h2",{className:"text-3xl font-black uppercase mb-4 border-l-4 border-black pl-4",children:"PROJECTS"}),k.jsx("div",{className:"space-y-4",children:k.jsxs("div",{className:"border-2 border-black p-4",children:[k.jsx("h3",{className:"text-xl font-black uppercase mb-2",children:"Project Name"}),k.jsx("p",{className:"font-mono text-sm mb-2",children:"Brief description of the project, your role, and the technologies used."}),k.jsx("div",{className:"font-mono text-xs text-gray-500",children:"Tech: React, Node.js, PostgreSQL"})]})})]})]})]}),IT=()=>k.jsxs(Sx,{children:[k.jsx(Ox,{}),k.jsx(yv,{children:k.jsxs($b,{children:[k.jsx(Ci,{path:"/",element:k.jsx(vv,{posts:Ni})}),k.jsx(Ci,{path:"/archive",element:k.jsx(FT,{})}),k.jsx(Ci,{path:"/about",element:k.jsx(KT,{})}),k.jsx(Ci,{path:"/cv",element:k.jsx(JT,{})}),k.jsx(Ci,{path:"/post/:id",element:k.jsx(ZT,{posts:qs})})]})})]});ab.createRoot(document.getElementById("root")).render(k.jsx(Y.StrictMode,{children:k.jsx(IT,{})}));
