(this.$WP=this.$WP||[]).push(["uW7u9D",(e,i)=>{"use strict";var t,a,s,n,r,l,d,u={"1x1":"ad iab_","160x600":"iab_supSky","300x250":"iab_medRec","300x250-8x8":"iab_medRec","300x600":"iab_medRec","728x90":"iab_leaBoa","455x256":"iab_leaBoa","970x250":"iab_bilBrd","320x50":"inline_ad_wrapper",fluid:"iab_fluid"};function o(e){var i=e.toLowerCase().split("-"),t=[];return i.forEach((e,i,a)=>{t.push(a[i].split("x").map(Number))}),1===t.length?JSON.stringify(t[0]):JSON.stringify(t)}function c(e){return"true"===String(e).toLowerCase()}function p(e){var{size:i,position:p="",additionalClass:h="",additionalWrapperClass:_="",pageLoadRender:g=!0,inactive:f=!1,centered:m=!1,withMargin:v=!1,withBottomMargin:b=!1,minWinSize:x="0",reserveHeight:L=!1,startCollapsed:w=!1,slotTargeting:S=""}=e,y=t.useRef(null);function j(){if("0"!==x){var e,i=parseInt(x,10),t=window.innerWidth;y.current&&(e=y.current.querySelector(".gptAd")),e&&e.classList&&(t<i?(e.classList.add("inactive"),e.classList.add("hidden")):e.classList.contains("inactive")&&(e.classList.remove("inactive"),e.classList.remove("hidden")))}}var A,C,R,W,B=(A=i.split("-")[0].toLowerCase(),C=[u[A]||""],p.includes("inline")||p.includes("footer")||!C.includes("iab_medRec")&&!C.includes("iab_supSky")||C.push("_2gmMZHvx"),_&&("whiteBg"===_?C.push("_1-d9nvyD"):"whiteBgWithPadding"===_?C.push("_3aw7usYW"):"grayBg"===_?C.push("_2aw58cfD"):"grayBgWithPadding"===_?C.push("TiGdVljp"):"outerLeft"===_?C.push("_3q9N9FyP"):"outerRight"===_?C.push("l9bTNNDA"):C.push(_)),L&&C.push("RhDK2F7q"),C.join(" ")),$=(R=a("gptAd","_14GYXQ_R"),c(f)&&(R=s(R,null,"inactive").join(" ")),w&&(R=s(R,null,"_2P8VqeMZ").join(" ")),c(g)||(R=s(R,null,"delayAd").join(" ")),m&&(R=s(R,null,"_2kdV5pKa").join(" ")),v&&(R=s(R,null,"_29vJRp9F").join(" ")),b&&(R=s(R,null,"_3bGLsVFC").join(" ")),h&&(R=s(R,null,h).join(" ")),R),E=o(i),F=i.toLowerCase(),M=p?(""+p).toLowerCase():"",N=M?`gpt-ad-${F}-${M}`:"gpt-ad-"+F,P=c(L)?(W=i.split("-").map(e=>{var i=e.split("x")[1];return parseInt(i,10)}),Math.max(...W)+"px"):void 0,{isRendered:D}=r(N);t.useEffect(()=>{c(g)||l(N)},[g,N]),t.useEffect(()=>j()),t.useEffect(()=>{"gpt-ad-728x90-970x66-header"===N&&d("dt_time_to_first_ad",D,!0)},[N,D]);var k=`<div id="${N}" class="${$}" data-size="${E}" ${S} ></div>`;return t.createElement(t.Fragment,null,"0"!==x&&t.createElement(n,{callback:j,throttle:300}),t.createElement("div",{className:B,style:{minHeight:P},ref:y,dangerouslySetInnerHTML:{__html:k}}))}return e("buildSizeAttribute",o),[()=>{e("default",p),e({buildSizeAttribute:o,wrapperClasses:u})},[e=>t=e.default,e=>(a=e.default,s=e.removeAndAdd),e=>n=e.default,e=>(r=e.useAdStatus,l=e.injectAd),e=>d=e.trackAdPerformance]]},["cDcdfi","jSLlaY","_g8cls","FnrCe6","SMVlF-"]]);