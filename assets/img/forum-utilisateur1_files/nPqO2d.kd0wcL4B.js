(this.$WP=this.$WP||[]).push(["nPqO2d",(e,t)=>{"use strict";var r,i,n,a,s,o,p=({aggregateOfferData:e})=>{return r("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify((t=e,{"@context":"http://schema.org","@type":"AggregateOffer",lowPrice:t.lowPrice,highPrice:t.highPrice,offerCount:t.offerCount,priceCurrency:a(t.priceCurrency)}))}});var t},l=({breadcrumbList:e})=>{return e.length>0?r("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify((t=e,{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:t.map((e,t)=>({"@type":"ListItem",position:(t+1).toString(),item:{"@id":a(e.href),name:a(e.name)}}))}))}}):null;var t},c=({questions:e})=>e.length>0?r("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"FAQPage",mainEntity:e.map(e=>({"@type":"Question",name:a(e.name),acceptedAnswer:{"@type":"Answer",text:a(e.acceptedAnswer.text)}}))})}}):null,g=e=>r("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"ItemList",name:e.name,description:e.description||void 0,ItemListOrder:"http://schema.org/ItemListOrderAscending",itemListElement:e.listItemData.map((e,t)=>({"@type":"ListItem",position:(t+1).toString(),name:e.name,url:e.url}))})}}),m=(e,t,r)=>{var i,n=e,a=new URLSearchParams;return a.append("m","63287"),r.servlet&&a.append("faqts",r.servlet),r.urlParameters&&a.append("faqtup",(i=r.urlParameters,Object.entries(i).map(e=>`${e[0]}:${e[1]}`).join(";"))),void 0!==r.templateId&&null!==r.templateId&&a.append("faqtt",""+r.templateId),void 0!==r.questionPosition&&null!==r.questionPosition&&a.append("faqtqr",""+r.questionPosition),n=`${n}?${a.toString()}`,t&&(n=`${n}#${t}`),n},d=({includeWebSiteSchema:e})=>{var{domainName:t,cdnPrefix:a,locale:p}=i(o),{language:l}=p,{localize:c}=s(),g=n(()=>((e,t,r,i,n)=>{var a=`https://${e}/`,s="en"===t,o=r+"/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",p=[{"@context":"http://schema.org","@type":"Organization",name:i.string("common_TripAdvisor"),url:a,logo:o,sameAs:["https://www.facebook.com/TripAdvisor","https://twitter.com/TripAdvisor","https://plus.google.com/+TripAdvisor","https://instagram.com/TripAdvisor/","https://www.linkedin.com/company/tripadvisor"]}];return s&&n&&p.push({"@context":"http://schema.org","@type":"WebSite",url:a,potentialAction:{"@type":"SearchAction",target:a+"Search?q={search_term_string}","query-input":"required name=search_term_string"}}),{__html:JSON.stringify(p)}})(t,l,a,c,e),[t,l,a,c,e]);return r("script",{type:"application/ld+json",dangerouslySetInnerHTML:g})},u=({productTitle:e,productText:t,productUrl:i,image:n,reviewRatingValue:s,reviewCount:o,offerPrice:p,offerPriceCurrency:l,supplierName:c,reviews:g})=>{if(!e)return null;var m={"@context":"http://schema.org","@type":"Product",name:a(e)};return null!==n&&Object.assign(m,{image:n}),null!==t&&Object.assign(m,{description:a(t)}),void 0!==o&&Number(o)>0&&Object.assign(m,{aggregateRating:{"@type":"AggregateRating",ratingValue:s,reviewCount:o}}),Number(p)>0&&null!==i&&Object.assign(m,{offers:{"@type":"Offer",url:i,price:p,priceCurrency:l,availability:"http://schema.org/InStock"}}),g&&g.length&&Object.assign(m,{review:g.map(e=>e?{"@type":"Review",name:e.name,datePublished:e.datePublished,author:e.author,reviewBody:e.reviewBody,reviewRating:{"@type":"Rating",ratingValue:e.reviewRating.ratingValue}}:null)}),null!==c&&Object.assign(m,{brand:{"@type":"Organization",name:c}}),r("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m)}})},h=({heading:e,image:t,datePublished:i,dateModified:n,articleCanonicalUrl:s,authorName:o})=>{var p={"@context":"https://schema.org","@type":"Article",headline:a(e),mainEntityOfPage:{"@type":"WebPage","@id":s},image:[t],datePublished:i,publisher:{"@type":"Organization",name:"Tripadvisor",logo:{"@type":"ImageObject",url:"https://static.tacdn.com/img2/brand_refresh/application_icons/post-image-550x370.png"}},author:{"@type":o?"Person":"Organization",name:o||"Tripadvisor"}};return null!==n&&Object.assign(p,{dateModified:n}),r("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(p)}})};return[()=>{e({AggregateOfferJsonLd:p,ArticleJsonLd:h,BreadcrumbsJsonLd:l,FaqPageJsonLd:c,ListItemJsonLd:g,OrganizationJsonLd:d,ProductJsonLd:u,buildUrlWithTracking:m})},[e=>(r=e.createElement,i=e.useContext,n=e.useMemo),e=>a=e.escapeHtml,e=>s=e.useLocalize,e=>o=e.Environment]]},["cDcdfi","WkP2XE","0DsHEV","2R4xv2"]]);