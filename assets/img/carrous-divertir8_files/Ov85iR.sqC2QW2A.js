(this.$WP=this.$WP||[]).push(["Ov85iR",(e,n)=>{"use strict";var i,t,a,o;function r(e){var n="";if(null!=e.tapCallback){var i=e.tapCallback,t="nativeInterop"+function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+e()+e()+e()+e()+e()+e()}();window[t]=()=>{null!=i&&i()},n=t,e.tapFunction=n,e.tapCallback=null}}function d(){return"undefined"!=typeof window&&window.taBridgeContext?(window.bridge||window.bridge||(window.bridge=(e=[],n=0,i=[],document.addEventListener("PacificDidReceiveNativeCallback",(function(n){if(n.detail){var i=n.detail,t=isNaN(parseInt(i.id))?-1:parseInt(i.id);-1!=t&&(e[t]&&e[t](i.parameters,i.error),delete e[t])}}),!1),document.addEventListener("PacificDidReceiveNativeBroadcast",(function(e){if(e.detail){var n=e.detail,t=n.name;if(void 0!==t&&i[t]){var a=i[t];if(a instanceof Array){var o=n.parameters;a.forEach((function(e){e(o)}))}}}}),!1),{post:function(i,t,a,o,r){var d=n++;e[d]=o,window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.pacific?window.webkit.messageHandlers.pacific.postMessage({action:i,parameters:t,uid:a,callback:d,print:r||0}):window.pacific&&window.pacific.postMessage(JSON.stringify({action:i,parameters:t,uid:a,callback:d,print:r||0}))},on:function(e,n){var t=i[e];return t||(i[e]=t=[]),t.push(n),function(){t[indexOf(t,n)]=null}},off:function(e){delete i[e]}})),window.taBridgeContext.uid):null;var e,n,i}function l(e,n){if("undefined"==typeof window||!window.taBridgeContext||!window.taBridgeContext.actions)return!1;var i=window.taBridgeContext.actions[e];return!(!i||!i.v)&&n===i.v}function c(e,n,i){d()&&(e?window.bridge.on(n,i):window.bridge.off(n))}function s(e){e.items.forEach((function(e,n){r(e)}))}function u(e,n,i){var t=d();return!(!t||!l(e,n)||(window.bridge.post(e,i||{},t),0))}function f(){u("hideSkeleton",1,null)}function w(e){!function(e){null!=e.trailingMenuItems&&e.trailingMenuItems.forEach((function(e,n){var i=e;r(i),null!=i.nestedMenu&&s(i.nestedMenu)}))}(e.navigation),u("onNewOrUpdatedScreen",1,e)}function p(e){s(e),u("overflowMenu",1,e)}function v(){l("map",2)?u("map",2,null):u("map",1,null)}function g(e){u("createTrip",1,{isPublic:e})}function h(e){u("shareTrip",1,e)}var m=e=>{l("presentSavesModal",2)?u("presentSavesModal",2,e):u("presentSavesModal",1,{itemId:e.id})},b=e=>{u("showReg",1,{dismissOnCancellation:e})};function S(){u("close",1,null)}function T(){u("startScreenTransition",1,null)}function M(e){u(e?"overlayShown":"overlayHidden",1,null)}function N(e,n){c(e,"updateHeaderHeight",n)}function C(e,n){c(e,"shrinkMap",n)}function k(e,n){c(e,"navigateToTripDetail",n)}function H(e,n){c(e,"handleTripCollaboration",n)}function I(){return null!=d()}function y(){if("undefined"!=typeof window&&void 0!==window.localStorage&&void 0!==window.localStorage.headerHeight){var{headerHeight:e}=window.localStorage;return"string"==typeof e&&(e=parseInt(e,10)),e}return 0}function O(e,n){c(e,"refetchTrips",n)}function B(e){u("tripUpdate",1,e)}function D(e){u("tripItemDelete",1,e)}function E(e,n){c(e,"refetchTripsWithItems",n)}var R=({className:e,nativeMenu:n})=>i("div",{className:e||""},i(a,{below:!0,alignEdge:"right",shiftX:10,shiftArrow:10,arrowType:"small",contents:()=>null,closeButton:!1,local:!0},e=>i("div",{className:"_9AQg0Vt9",ref:e,onClick:()=>n&&p(n)},i(t,{name:"more-horizontal"}))));return[()=>{o=Object.freeze({__proto__:null,isActionSupported:l,postToBridge:u,hideSkeleton:f,onNewOrUpdatedScreen:w,showNativeOverflowMenu:p,showNativeMap:v,showNativeCreateTrip:g,showNativeShareTrip:h,showSavesModal:m,showRegistration:b,close:S,startScreenTransition:T,onOverlayStateChange:M,onHeaderHeightChange:N,onShrinkMap:C,onNavigateToTripDetail:k,onHandleTripCollaboration:H,isNativeWebview:I,getHeaderHeight:y,onTripsRefetch:O,onTripUpdate:B,onTripItemDelete:D,onRefetchTripsWithItems:E}),R.defaultProps={className:void 0,nativeMenu:void 0},e({NativeBridge:o,NativeOverflowUI:R})},[e=>i=e.createElement,e=>t=e.Icon,e=>a=e.default]]},["cDcdfi","_qQcW3","eDFcUX"]]);