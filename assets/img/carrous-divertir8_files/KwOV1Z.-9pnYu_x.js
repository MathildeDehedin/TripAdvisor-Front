(this.$WP=this.$WP||[]).push(["KwOV1Z",(e,t)=>{"use strict";var r,i,n,a,l,o,c,s,h,d,u=({alt:e})=>void 0===e||""===e?null:r.createElement("span",{role:"img","aria-label":e}),g=({renderLoading:e,onLoad:t,onError:i,url:n})=>r.createElement(h,{url:n,delay:0,loadingRenderer:e,onLoad:t,onError:i}),m=(e,t,r)=>{var i=Math.floor(e/t)*t,n=Math.ceil(e/t)*t,a=0===i?0:(e-i)/i;return 0===a||a>r?n:i},f=(e,t)=>{var r=t.split("?")[0],i=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==i){for(var n=i.split("&"),a=n.length-1;a>=0;a-=1)n[a].split("=")[0]===e&&n.splice(a,1);if(n.length>0)return`${r}?${n.join("&")}`}return r},v=(e,t,r,i)=>{if(!r||0===r.length)return console.error("ResponsiveImage sources was empty"),{url:"",width:0,height:0};var n,a=(null==i?void 0:i.allowedStretch)||.25,l=(null==i?void 0:i.fitStrategy)||"cover",o=(n=!i||void 0===i.getImageBasedOnClientInfo||i.getImageBasedOnClientInfo,"undefined"!=typeof window&&window.devicePixelRatio&&n?Math.min(window.devicePixelRatio,1.5):1.5),c=e*o,s=t*o,h=s*c;if(i&&i.dynamicSizingEnabled){var u=i.dynamicSource||(e=>{var t={url:"",width:0,height:0},r=e.find(e=>0===e.width&&0===e.height);return r?(e.forEach(e=>{(!t||e.width*e.height>t.width*t.height)&&(t=e)}),{maxWidth:t.width,maxHeight:t.height,urlTemplate:r.url}):null})(r);if(u)return((e,t,r,i,n)=>{var a=m(e,100,.05),l=m(t,100,.05),o=r.maxWidth/r.maxHeight,c=e/t,s=Math.abs(o-c)/c<.1;if("contain"===n){if(c>o){var h=t,u=Math.ceil(h*o);a=m(u,100,.05)}l=-1}else if(s||"calculated"===n)l=-1;else if(a<=100&&l<=100){if(c<o){var g=t,v=Math.ceil(g*o);a=m(v,100,.05)}l=-1}else{var w=Math.min(o,c),p=a/l;((e,t,r)=>e>=t&&e<=r)(p,w,Math.max(o,c))||(p<w?a+=100:l+=100)}a=Math.min(a,2400),l=Math.min(l,2400);var y="";return(y=r.urlTemplate.indexOf("w={width}")>0&&r.urlTemplate.indexOf("h={height}")>0?r.urlTemplate.replace("w={width}","w="+a).replace("h={height}","h="+l):r.urlTemplate.replace("w=100","w="+a).replace("h=100","h="+l)).indexOf("&pcx=")>0&&y.indexOf("&pcy=")>0&&y.indexOf("&pchk=")>0&&(d("media_preview_focal_point")?(y=f("cx",y),y=f("cy",y),y=(y=f("chk",y)).replace("&pcx=","&cx=").replace("&pcy=","&cy=").replace("&pchk=","&chk=")):(y=f("pcx",y),y=f("pcy",y),y=f("pchk",y))),{url:y,width:a,height:l=l>=0?l:Math.ceil(a*(1/o))}})(c,s,u,0,l)}var g=r.filter(e=>e.width<=2560);if(0===g.length){var v=r[r.length-1],w=r.length>0&&(!v.width||!v.height);return console.error(`ResponsiveImage: no suitable source found. sources.length ${r.length} missingWidthHeight ${w.toString()}`),{url:"",width:0,height:0}}var p=g.map(e=>{var t=(c-e.width)/e.width,r=(s-e.height)/e.height,i=Math.max(t,r),n=e.width*e.height;return{src:e,stretchRatio:i,wastedRatio:(n-h)/n}});p.sort((e,t)=>e.wastedRatio-t.wastedRatio);var y=p.filter(e=>e.src.width*e.src.height<=4e4).filter(e=>e.stretchRatio<=0);if(y.length>0){var{url:S,width:E,height:I}=y[0].src;return{url:S,width:E,height:I}}var R=p.filter(e=>e.stretchRatio<=a);if(R.length>0){var{url:x,width:C,height:b}=R[0].src;return{url:x,width:C,height:b}}p.sort((e,t)=>e.stretchRatio-t.stretchRatio);var{url:k,width:D,height:O}=p[0].src;return{url:k,width:D,height:O}},w=(e,t,r,i)=>{if(0===i||0===r||0===t||0===e)return"cover";var n=e/t,a=r/i;if(0===n||0===a)return"cover";var l=n<a,o=l?n/a:a/n;if(o>.75)return"cover";var c=o/.75;return l?100*c+"% auto":`auto ${100*c}%`},p=["Hotels","Hotel_Review"],y=({allowedStretch:e,alt:t,backgroundColor:l,backgroundPosition:s,borderRadius:h,children:m,backgroundSizeCalculator:f=w,doNotRemoveImage:y=!1,dynamicSource:S,fitStrategy:E="cover",height:I,containerDimensionsOverride:R,notLazy:x,onPhotoClick:C,opacity:b,padding:k,renderLoading:D,onLoad:O,onError:z,sources:_,ssrContainerDimensions:L,threshold:H=200,transform:M,width:N})=>{var W,[P,$]=n(!!L),[B]=r.useContext(c),[T,Z]=n(!1),V=i(null),A=o(()=>$(!0),H);a(()=>{Z(!0)},[]);var j,q=(({containerDimensionsOverride:e,containerRef:t,getImageBasedOnClientInfo:r,ssrContainerDimensions:i})=>{if(e)return e;if(!i&&!r)return null;if(null===t.current||0===t.current.clientHeight||0===t.current.clientWidth)return i||null;var{clientHeight:n,clientWidth:a}=t.current;return{clientHeight:n,clientWidth:a}})({containerDimensionsOverride:R,containerRef:A,getImageBasedOnClientInfo:T,ssrContainerDimensions:L}),G=(({allowedStretch:e,containerDimensions:t,getImageBasedOnClientInfo:r,postponeGettingSource:n,sources:a,fitStrategy:l,dynamicSizingEnabled:o,dynamicSource:c})=>{var s=i({containerDimensions:null,result:null,sources:null}),{current:h}=s;if(n||null===t)return null;var d=h.containerDimensions&&h.containerDimensions.clientWidth||-1,u=h.containerDimensions&&h.containerDimensions.clientHeight||-1,g=t&&t.clientWidth||0,m=t&&t.clientHeight||0;return h.sources===a&&t&&d>=g&&u>=m&&h.result?h.result:(s.current={result:null!==t?v(t.clientWidth,t.clientHeight,a,{allowedStretch:e,getImageBasedOnClientInfo:r,fitStrategy:l,dynamicSizingEnabled:o,dynamicSource:c}):null,sources:a,containerDimensions:t},s.current.result)})({allowedStretch:e,containerDimensions:q,getImageBasedOnClientInfo:T,postponeGettingSource:!1===P&&!0!==x,sources:_,fitStrategy:E,dynamicSizingEnabled:(j=B.page,p.includes(j)?d("media_responsive_image_use_dynamic_size_hotels"):d("media_responsive_image_use_dynamic_size")),dynamicSource:S});y&&!G||(V.current=G);var U={backgroundColor:l,backgroundImage:V.current?`url("${V.current.url}")`:"none",backgroundPosition:s,backgroundSize:(({containerDimensions:e,backgroundSizeCalculator:t,fitStrategy:r,source:i})=>"contain"===r||"cover"===r?r:"calculated"===r&&t&&i&&e?t(i.width,i.height,e.clientWidth,e.clientHeight):"cover")({containerDimensions:q,backgroundSizeCalculator:f,fitStrategy:E,source:V.current}),borderRadius:h,height:I,opacity:b,padding:k,transform:M,width:N};return!1===P&&!0!==x?r.createElement("div",{className:"ZVAUHZqh",ref:A,style:U},r.createElement(u,{alt:t}),m):r.createElement("div",{className:"ZVAUHZqh",onClick:C,ref:A,style:U},r.createElement(u,{alt:t}),r.createElement(g,{renderLoading:D,onLoad:O,onError:z,url:null==(W=V.current)?void 0:W.url}),m)},S=({className:e,loadingElement:t,onLoad:i,threshold:a=200,sizes:l,src:c,alt:s,srcSet:h})=>{var[d,u]=n(!1),g=o(()=>u(!0),a);return!1===d?t?t(g):r.createElement("img",{className:e,onLoad:i,ref:g,sizes:l,alt:s}):r.createElement("img",{className:e,onLoad:i,sizes:l,src:c,srcSet:h,alt:s})},E=({children:e,className:t,onClick:i,src:a,threshold:l=200})=>{var[c,s]=n(!1),h=o(()=>s(!0),l);return!1===c?r.createElement("div",{className:t,onClick:i,ref:h},e):r.createElement("div",{className:t,onClick:i,style:{backgroundImage:`url(${a})`}},e)},I=({url:e,className:t})=>{var{cdnPrefix:i}=l(s),n={url:`${i}${e}`,width:200,height:200};return r.createElement("div",{className:t||"_2iaDjzPN"},r.createElement(y,{sources:[n],width:"100%",height:"100%"}))};return[()=>{e({LazyBackgroundImage:E,LazyImage:S,ResponsiveDefaultImage:I,ResponsiveImage:y,getSource:v})},[e=>(r=e.default,i=e.useRef,n=e.useState,a=e.useEffect,l=e.useContext),e=>o=e.useOnVisible,e=>(c=e.Route,s=e.Environment),e=>h=e.ImagePreloaderRenderer,e=>d=e.featureIsEnabled]]},["cDcdfi","BLrxBS","2R4xv2","AoLEtg","-i3PJS"]]);
