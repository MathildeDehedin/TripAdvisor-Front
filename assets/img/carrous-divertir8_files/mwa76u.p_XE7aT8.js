(this.$WP=this.$WP||[]).push(["mwa76u",(e,a)=>{"use strict";var r,t,n,o,i,s,l,d,u,v=({responsiveContainer:e,hasSmartBanner:a})=>{var[i,l]=r(!0);return t(()=>{if(a){var e=()=>{l(!1)};return d.on("smart-banner-did-close",e),()=>d.off("smart-banner-did-close",e)}},[a]),n("div",{className:s({JA_B1d0H:a&&i})},n(o,{responsiveContainer:"true"===e,onBannerLoad:()=>{d.emit("banner-loaded")}}))};return[()=>{d=l("global-nav-component"),u=i((e,a)=>{var{initialServletName:r,device:t}=e.meta,n={servlet:r,viewportCategory:e.meta.forceFullSite?"DESKTOP":t.viewportCategory,geoId:e.route.geo?e.route.geo:null,pageName:e.route.page,isTaReferrer:e.meta.isTaReferrer?"true":"false"},o={};Object.keys(n).forEach(e=>{null!=n[e]&&(o[e]=n[e])});var i=a("/data/1.0/brand/header?"+new URLSearchParams(o).toString());return e=>{var a;return{hasSmartBanner:(null==(a=i.get().data)?void 0:a.adjustForSmartBanner)&&"TABLET"!==e.meta.device.viewportCategory||!1}}})(v),e("default",u)},[e=>(r=e.useState,t=e.useEffect,n=e.createElement),e=>o=e.default,e=>i=e.bind,e=>s=e.default,e=>l=e.default]]},["cDcdfi","NGIiZD","RiHMo-","jSLlaY","l6BSGt"]]);
