(this.$WP=this.$WP||[]).push(["AlYTtk",(e,r)=>{"use strict";var t,a,i,n,o,l,u,m,c={obfuscatedViatorCommerceLink:null},s=({numberOfViatorReview:e,viatorCommerceLink:r})=>{var t=n();return e&&r&&e>0?a(l,{target:"_blank",useSpan:!1,className:"_2jiRPQcT",encodedUrl:r},a(i,{id:"attraction.read.more.reviews.on.viator.pluralized",args:{numReviews:t.formatNumber("integer",e)}}),a("span",{className:"_1ZQrFpOO"},a(o,{name:"external-link"}))):null},d=({location:e,reviewList:r,reviewAggregations:t})=>{var i,n,o=(null==(i=r.page)?void 0:i.limit)||0,l=(null==(n=r.page)?void 0:n.offset)||0,m=r.totalCount||0,c=o?(Math.ceil(m/o)-1)*o:0,d=t.ratingCounts.reduce((e,r)=>e+r);return"ACTIVITY"===(null==e?void 0:e.placeType)&&(m<=o||l===c)?a(u,null,({obfuscatedViatorCommerceLink:r})=>a(s,{numberOfViatorReview:(null==e?void 0:e.reviewSummary)&&d?((null==e?void 0:e.reviewSummary.count)||d)-d:null,viatorCommerceLink:r})):null};return[()=>{({Consumer:u,Provider:m}=t(c)),e("default",d),e({AttractionProductInformationProvider:m,SeeMoreOnViatorLink:s})},[e=>(t=e.createContext,a=e.createElement),e=>(i=e.default,n=e.useIntlFormatter),e=>o=e.default,e=>l=e.default]]},["cDcdfi","0DsHEV","OMqGt0","oiya90"]]);