(this.$WP=this.$WP||[]).push(["3f2bEx",(e,a)=>{"use strict";var r,l,s,t,n,u=({page:e,className:a,children:l,url:s,onClick:t,currentPageNumber:n})=>{var u=(!n||n!==e.pageNumber)&&e.offset>=0&&e.offset<e.total,i={};u&&(s&&(i.href=s(e)),i.onClick=a=>t&&t(e,a));var o=i.href?"a":"span";return r(o,Object.assign({className:`${a} ${u?"":"disabled"}`},i),l)},i=(e,a,r)=>Object.assign({},e,{offset:a,pageNumber:1+(e.total<=0?0:Math.floor(a/e.limit)),buttonType:r}),o=(e,a)=>e.reduce((e,r)=>e||r.pageNumber===a,!1),c=e=>{var a=i(e,e.offset-e.limit,"previous"),c=i(e,e.offset+e.limit,"next"),m=i(e,0,"number"),f=Math.max(Math.ceil(e.total/e.limit)-1,1),p=i(e,f*e.limit,"number"),b=(e=>{var a,{offset:r,limit:l,total:s}=e,t=Math.ceil(s/l),n=1+(s<=0?0:Math.floor(r/l)),u=[],i=a=>{var r=Object.assign({},e,{pageNumber:a,offset:(a-1)*l,buttonType:"number"});u.push(r)};if(t<=7)for(a=1;a*l<s+l;a+=1)i(a);else if(n<=4)for(a=1;a<7;a++)i(a);else if(t-n<=3)for(a=t-5;a<=t;a++)i(a);else for(a=n-2;a<=n+2;a++)i(a);return u})(e),g=o(b,1),N=o(b,f),_=1+(e.total<=0?0:Math.floor(e.offset/e.limit));return r("div",{className:t("ui_pagination is-centered",e.className)},r(u,{onClick:e.onClick,url:e.url,page:a,className:"ui_button nav previous secondary"},s("common_Previous")),r(u,{onClick:e.onClick,url:e.url,page:c,className:"ui_button nav next primary"},s("common_Next")),r("div",{className:"pageNumbers"},!g&&r(l,null,r(u,{onClick:e.onClick,url:e.url,page:m,currentPageNumber:_,className:t("pageNum",{cx_brand_refresh_phase2:n("cx_brand_refresh_degreen")})},m.pageNumber),r("span",{className:"separator"},"…")),b.map(a=>r(u,{onClick:e.onClick,key:a.offset,page:a,url:e.url,currentPageNumber:_,className:t("pageNum",{current:a.pageNumber===_,cx_brand_refresh_phase2:n("cx_brand_refresh_degreen")})},a.pageNumber)),!N&&r(l,null,r("span",{className:"separator"},"…"),r(u,{onClick:e.onClick,url:e.url,page:p,currentPageNumber:_,className:t("pageNum",{cx_brand_refresh_phase2:n("cx_brand_refresh_degreen")})},p.pageNumber))))};return[()=>{u.defaultProps={url:null,onClick:null,currentPageNumber:null},e("Pagination",c)},[e=>(r=e.createElement,l=e.Fragment),e=>s=e.localize,e=>t=e.default,e=>n=e.featureIsEnabled]]},["cDcdfi","535agn","jSLlaY","-i3PJS"]]);