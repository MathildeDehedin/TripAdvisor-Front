(this.$WP=this.$WP||[]).push(["YL_nOm",(e,a)=>{"use strict";var i,l,t,s,n,o,c,r,d,u,m,_,v,p,g,S,h,f,N,k,O,y,C,w,b,P,L,U,E,B=e=>i("div",{className:"GttmIjvl"},(e=>e.isSpecialOffer?i("div",{className:"_2usFDJsY"},i(b,{type:"default"},m("AAC_SPECIAL_OFFER"))):e.isBestSeller?i("div",{className:"_2usFDJsY"},i(b,{type:"primary"},m("attractions.booking.flag.best_seller"))):e.isLikelyToSellOut?i("div",{className:"_2usFDJsY"},i(b,{type:"default"},m("attractions.booking.flag.likely_to_sell_out"))):null)(e)),D=e=>{var a=e.isLikelyToSellOut||e.isSpecialOffer||e.isBestSeller;return i("div",{className:"_2sg_32-u"},i(C,{multiline:!0,gaplessVertical:!0},i(w,{width:a?8:12},i("div",{className:"ui_header h4"},_(e.viatorGroup)),i("div",{className:d("ui_header h2","_3a2v7uD2")},e.title)),a&&i(w,{width:4},i(B,{isLikelyToSellOut:e.isLikelyToSellOut,isBestSeller:e.isBestSeller,isSpecialOffer:e.isSpecialOffer})),i(w,{width:6},e.reviewCount>0&&i(k,{rating:e.rating,numReviews:e.reviewCount}),e.supplierName&&i("div",{className:"_3OAB4uen"},m("attractions_merchandising_by",{0:""}),i(g,{module:"AR_XSELL_QUICK_VIEW",action:"operator_name_click",dstServlet:"Attraction_review",context:"Attraction_review",useSpan:!0},i(O,{className:"uNuRfRZj",href:e.supplierUrl,target:"_blank"},e.supplierName)))),i(w,{width:6},i("div",{className:"_1DEnC9UZ"},i("div",{className:"_1zFvBOif"},_(m("attractions.merchandising.from.price.with.autoresize.span.2_tax_included",{sPrice:`<br/><div class="ui_header h2">${e.fromPrice}</div>`}))),i(g,{module:"AR_XSELL_QUICK_VIEW",action:"more_info_click",dstServlet:"AttractionProductReview",context:"Attraction_product|"+e.locationId,useSpan:!0},e.encodedDetailUrl?i(y,{useSpan:!1,encodedUrl:e.encodedDetailUrl,target:"_blank"},i(o,{type:"original",size:"large"},m("attractions.cta_more_info"))):i(O,{href:e.detailUrl,target:"_blank"},i(o,{type:"original",size:"large"},m("attractions.cta_more_info"))))))))},I=e=>i("div",{className:"_3lIbD4lf"},e.cancellationPolicy&&i("div",{className:"_326pSYEQ"},i(c,{name:"checkmark",className:"_1fnBqS2O"}),i("div",{className:"_2dj8XXdy"},_(e.cancellationPolicy))),e.languageServices&&i("div",{className:"_326pSYEQ"},i(c,{name:"globe-world",className:"_1fnBqS2O"}),i("div",{className:"_2dj8XXdy"},m("attractions.languages_offered_list",{sLangs:e.languageServices}))),e.voucherOption&&i("div",{className:"_326pSYEQ"},i(c,{name:"mobile-phone",className:"_1fnBqS2O"}),i("div",{className:"_2dj8XXdy"},_(e.voucherOption))),e.instantConfirmation&&i("div",{className:"_326pSYEQ"},i(c,{name:"instant",className:"_1fnBqS2O"}),i("div",{className:"_2dj8XXdy"},_(e.instantConfirmation))),e.duration&&i("div",{className:"_326pSYEQ"},i(c,{name:"clock",className:"_1fnBqS2O"}),i("div",{className:"_2dj8XXdy"},_(e.duration))),e.hotelPickup&&i("div",{className:"_326pSYEQ"},i(c,{name:"parking",className:"_1fnBqS2O"}),i("div",{className:"_2dj8XXdy"},_(e.hotelPickup)))),X=e=>i("div",{className:"_1_JDlvcq"},i(C,null,i(w,{width:6},i("img",{src:e.thumbnailUrl,className:"_2-UDJaD3"}),e.latitude&&e.longitude&&i(L,{height:200,center:{lat:e.latitude,lng:e.longitude},width:400,zoom:11,scale:1,imgClassName:"_2-UDJaD3",markers:[{position:{lat:e.latitude,lng:e.longitude},iconUrl:P.anchorAttractionPin}]})),i(w,{width:6},i("div",{className:"ui_header h3"},m("nav_overview")),i("div",{className:"_3p2XO_cK"},_(e.description)),i(I,{cancellationPolicy:e.cancellationPolicy,duration:e.duration,hotelPickup:e.hotelPickup,instantConfirmation:e.instantConfirmation,languageServices:e.languageServices,voucherOption:e.voucherOption})))),A=e=>e.details?i("div",{className:"_6Wh1QHNs"},i(D,{locationId:e.locationId,supplierName:e.details.supplierName,rating:e.details.ratingNum,reviewCount:e.details.reviewCount,title:e.details.name,viatorGroup:e.details.primaryGroupName,supplierUrl:e.details.supplierUrl,fromPrice:e.details.fromPrice,isBestSeller:e.details.isBestSeller,isLikelyToSellOut:e.details.isLikelyToSellOut,isSpecialOffer:e.details.isSpecialOffer,detailUrl:e.details.detailUrl,encodedDetailUrl:e.details.encodedDetailUrl}),i(X,{thumbnailUrl:e.details.thumbnailUrl,latitude:e.details.latitude,longitude:e.details.longitude,description:e.details.description,cancellationPolicy:e.details.cancellationPolicy,duration:e.details.duration,languageServices:e.details.languageServices,voucherOption:e.details.voucherOption,hotelPickup:e.details.hotelPickup,instantConfirmation:e.details.instantConfirmation})):e.showLoadingSkeleton?i("div",{className:"_2gGnOuY-"},i(N,null)):null,R=e=>{var{viewportCategory:a}=l(f),[r,_]=t(!1),g=e.trackingModule||"AR_XSELL_MERCH",N=s(()=>{U.load(e.locationId),_(!0)},[_,e.locationId]),k=s(()=>{(e=>{p({module:e,action:"close_click"})})(g),_(!1)},[_,g]);return"DESKTOP"===a||e.showOnTablet&&e.isTablet?i(n,null,i("div",{className:"_2T8oW6Fh"},i(S,{click:{module:g,action:"quick_view_click",context:e.locationId?e.locationId.toString():""}},i(v,{onVisible:()=>(e=>{p({module:e,action:"in_view"})})(g)},e=>i("div",{ref:e},i(o,{type:"secondary",size:"small",onClick:N},i(c,{name:"eye",className:d("_1plMUxws",{_2h4TxyEo:u("cx_brand_refresh_degreen")})}),m("MC_Onboard_S3_H1")))))),r&&i(h,{onClose:k},i(U,{locationId:e.locationId,showLoadingSkeleton:e.showDetailLoadingSkeleton}))):null};return[()=>{U=r((e,a,i)=>{var l;return i&&(l=a("/data/1.0/attractions/products/quickview/"+i)),()=>({details:l&&l.get().data})})(A),E=r(()=>()=>({}))(R),e("default",E)},[e=>(i=e.createElement,l=e.useContext,t=e.useState,s=e.useCallback,n=e.Fragment),e=>o=e.default,e=>c=e.Icon,e=>r=e.bind,e=>d=e.default,e=>u=e.featureIsEnabled,e=>(m=e.localize,_=e.unescaped),e=>v=e.HasBeenVisible,e=>(p=e.default,g=e.ClickTracker,S=e.Track),e=>h=e.default,e=>f=e.Device,e=>N=e.LoadingSpinner,e=>k=e.BubbleRatingWithReviewCount,e=>O=e.Link,e=>y=e.default,e=>(C=e.Columns,w=e.Column),e=>b=e.default,e=>P=e.SnapshotAssetCatalogue,e=>L=e.default]]},["cDcdfi","PCbs_l","_qQcW3","RiHMo-","jSLlaY","-i3PJS","535agn","BLrxBS","Jk5sjx","O8LbtK","2R4xv2","V08PS7","QnohJ2","N4pTU2","oiya90","_AgNiB","FJIpE-","_KhVZh","fSRrv3"]]);
