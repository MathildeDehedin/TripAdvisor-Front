(this.$WP=this.$WP||[]).push(["Hgrhyo",(e,t)=>{"use strict";var l,a,o,r,i,n,s,d,c,m={"xtra-small":24,small:32,default:42,large:72,"xtra-large":120},g=({photoUrl:e,imgCdnUrl:t,icon:o,alt:r,notLazy:i})=>{return l(a,null,e?((e,t,a)=>l(a?"img":s,{src:e,alt:t}))((c=t,0===(d=e).indexOf("http://")||0===d.indexOf("https://")?d:c?c+d:d),r||"",i):l(n,{name:"member-fill"}),o&&l("div",{className:o}));var d,c},h=e=>l(i,{className:e.className,href:e.href,target:e.target,mobileTarget:e.mobileTarget,onClick:e.onClick},l(g,{photoUrl:e.photoUrl,imgCdnUrl:e.imgCdnUrl,icon:e.icon,alt:e.alt,notLazy:e.notLazy}));function p(e){var{photo:t,photoUrl:a,imgCdnUrl:r,viewportCategory:i,icon:n,size:s,tabletSize:d,desktopSize:c,widescreenSize:p,display:u,href:z,onClick:C,alt:U}=e,f=e.withBorder?"ui_social_avatar":"ui_avatar",v="default"!==e.size&&e.size,y=o("_3x5_awTA",f,v,d?d+"-tablet":null,c?c+"-desktop":null,p?p+"-widescreen":null,u,e.className),w=t?((e,t="default")=>{var l=m[t],a=null;if(e&&e.photoSizes&&e.photoSizes.length>0){var o=e.photoSizes.find(e=>e.width>=l?e.url:null);a=o?o.url:e.photoSizes[e.photoSizes.length-1].url}return a})(t,"DESKTOP"===i?c||d||s:"TABLET"===i&&d||s):a;return z?l(h,{photoUrl:w,imgCdnUrl:e.imgCdnUrl,icon:e.icon,href:e.href,target:e.target,mobileTarget:e.mobileTarget,onClick:e.onClick,alt:e.alt,className:y,withBorder:e.withBorder,notLazy:e.notLazy}):l("span",{className:y,onClick:C},l(g,{photoUrl:w,imgCdnUrl:r,icon:n,alt:U,notLazy:e.notLazy}))}return[()=>{g.defaultProps={photoUrl:(h.defaultProps={photoUrl:null,icon:(d={className:void 0,photo:void 0,icon:null,size:"default",tabletSize:void 0,desktopSize:void 0,widescreenSize:void 0,display:null,href:"",target:"_blank",mobileTarget:void 0,onClick:void 0,imgCdnUrl:"",alt:"",withBorder:!1,notLazy:!1}).icon,className:d.className,href:d.href,target:d.target,onClick:d.onClick,imgCdnUrl:d.imgCdnUrl,alt:d.alt,withBorder:d.withBorder,mobileTarget:d.mobileTarget}).photoUrl,imgCdnUrl:d.imgCdnUrl,icon:d.icon,alt:d.alt,notLazy:d.notLazy},p.defaultProps=d,c=r(e=>({imgCdnUrl:e.meta.imageCdnUrl,viewportCategory:e.meta.device.viewportCategory}))(p),e("Avatar",c)},[e=>(l=e.createElement,a=e.Fragment),e=>o=e.default,e=>r=e.connect,e=>i=e.ResponsiveTargetLink,e=>n=e.Icon,e=>s=e.LazyImage]]},["cDcdfi","jSLlaY","h74DsO","N4pTU2","_qQcW3","KwOV1Z"]]);
