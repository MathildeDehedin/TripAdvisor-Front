(this.$WP=this.$WP||[]).push(["xegF5W",(e,t)=>{"use strict";var o,n,l,c,r,d,i,u,a,s,m,y,h,p,f,b,v=({children:e,onClick:t,inline:l,backdropShade:c="dark"})=>o(n,null,o(void 0!==l?l:i,{className:u("_1Hzf3Xci",{_129Qh_F5:"light"===c,_1pEjMuxO:"none"===c}),onClick:t}),e),_={instanceCount:0,scrollY:null,elementStyles:{documentHeight:null},documentStyles:{scrollY:null,position:null,top:null,width:null,documentHeight:null,overflow:null}},w=(e=!0,t=!0)=>{var{os:{family:o}}=l(a),n="IOS"===o,d=c(()=>{var e,t;if("undefined"!=typeof document&&document.body&&document.body.style&&document.documentElement&&(null==(e=document)||null==(t=e.documentElement)?void 0:t.style)){var o=document.body.style,n=document.documentElement.style,l=document.body.classList,{scrollY:c}=_;o.position="fixed",c&&(o.top=-1*c+"px"),o.width="100%",n.height="100vh",l.contains("t-c3ucyU")||l.add("t-c3ucyU")}},[]),[i,u]=Array.isArray(t)?t:[t,void 0],s=c(()=>{if("undefined"==typeof document||!document.body||!document.body.style)return()=>{};if(document.body.style.overflow="hidden",n)if("boolean"!=typeof i)var e=setTimeout(()=>(d(),u&&u(),()=>{clearTimeout(e)}),i);else i&&d();return()=>{}},[n,d,u,i]);r(()=>{if(!e)return()=>{};_.instanceCount++;var t=()=>{};return 1===_.instanceCount&&((e=>{var t,o;if("undefined"!=typeof document&&document.body&&document.body.style&&document.documentElement&&(null==(t=document)||null==(o=t.documentElement)?void 0:o.style)){var n=document.body.style,l=document.documentElement.style;e&&(_.scrollY=window.scrollY,_.documentStyles.position=n.position,_.documentStyles.top=n.top,_.documentStyles.width=n.width,_.elementStyles.documentHeight=l.height),_.documentStyles.overflow=n.overflow}})(n),t=s()),()=>{t(),_.instanceCount--,0===_.instanceCount&&(()=>{var e,t;if("undefined"!=typeof document&&document.body&&document.body.style&&document.documentElement&&(null==(e=document)||null==(t=e.documentElement)?void 0:t.style)){var o=document.body.style,n=document.documentElement.style,{documentStyles:l,elementStyles:c,scrollY:r}=_;l.position?o.position=l.position:o.removeProperty("position"),null!=l.top?o.top=l.top:o.removeProperty("top"),l.width?o.width=l.width:o.removeProperty("width"),l.overflow?o.overflow=l.overflow:o.removeProperty("overflow"),c.documentHeight||""===c.documentHeight?n.height=c.documentHeight:n.removeProperty("height"),null!==r&&window.scrollTo(0,r)}})()}},[e,s,n])},E=e=>(w(!0,(({deferBugFix:e,callback:t,iOS11BugFix:o})=>!1!==o&&(void 0!==e?t?[e,t]:e:o))(e)),null),k=({condition:e,wrap:t,children:o})=>e?t(o):o,g=e=>{switch(e){case"TA_GRAY_2":return"_2_nOHpEh";case"TA_GRAY_3":return"_37DN8XPF";case"SEAT_GURU_BLUE":return"_2dYljsg6";case"WHITE":return"_3shlBLLv";case"TA_GREEN_DARK":return"_3IWKziRc";case"BLACK":return"WhbahBmg";case"TA_GREEN":default:return null}},S=({colorVariant:e="TA_GREEN",onClick:t,onEnterKeyDown:n,testAttribute:l,padding:c})=>o("div",{className:u("_2EFRp_bb",g(e),{_3ptEwvMl:h("cx_brand_refresh_degreen")}),onClick:t,onKeyDown:e=>{"Enter"===e.key&&n&&n(e)},"data-test-attribute":l,role:"button",tabIndex:"0",style:{padding:c}}),C={close:"_2cMt8_9M",black:"_15_IagJV",white:"_1JGhWjrQ"},B=e=>{switch(e){case"GRAY":return C.gray;case"BLACK":return C.black;case"WHITE":return C.white;default:return null}},A=({colorVariant:e="TA_GREEN",onClick:t})=>{var{localize:n}=p();return o("button",{className:u(C.close,B(e)),onClick:t,"aria-label":n.string("common_Close"),type:"button"},o(f,{name:"times"}))},R=[9,10],T=[9,10],x=()=>{var{browser:e,os:t}=l(a);return"SAFARI"===e.family&&R.includes(e.majorVersion)||"IOS"===t.family&&T.includes(t.majorVersion)};return[()=>{(b=d((e,t)=>{var{disableAutoFocus:n,disableBlockScroll:l,enableEventBoundary:c,onClose:r,hideBackdrop:d,backdropShade:u,inline:a,children:h}=e,p=function(e,t){if(null==e)return{};var o,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,["disableAutoFocus","disableBlockScroll","enableEventBoundary","onClose","hideBackdrop","backdropShade","inline","children"]),f=void 0!==a?a:i;return w(!l),o(k,{wrap:e=>o(s,{events:["onClick"],className:"Tuud_tpG"},e),condition:c},o(k,{wrap:e=>o(v,{onClick:r,backdropShade:u,inline:a},e),condition:!d},o(f,Object.assign({},p,{ref:t}),o(k,{wrap:e=>o(y,null,e),condition:!n},h)),r&&o(m,{keyName:"Escape",callback:()=>{r()}})))})).displayName="ModalBase",e({Backdrop:v,BlockScroll:E,CloseButton:A,CloseIcon:S,ModalBase:b,useBlockScroll:w,useBuggyWebkit:x})},[e=>(o=e.createElement,n=e.Fragment,l=e.useContext,c=e.useCallback,r=e.useEffect,d=e.forwardRef),e=>i=e.OverlayPortal,e=>u=e.default,e=>a=e.Device,e=>s=e.default,e=>m=e.default,e=>y=e.FocusTrap,e=>h=e.featureIsEnabled,e=>p=e.useLocalize,e=>f=e.default]]},["cDcdfi","vq6MSq","jSLlaY","2R4xv2","_cZwhS","8xs-IB","W3_c4H","-i3PJS","0DsHEV","OMqGt0"]]);