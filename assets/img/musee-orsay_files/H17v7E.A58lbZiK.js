(this.$WP=this.$WP||[]).push(["H17v7E",(e,a)=>{"use strict";var i,t,o,n,l,r,s,d,u=({weeklyPageViews:e,totalBookings:a})=>n(l,null,a>=100&&n("div",{className:r("lsRxVtW1")},n(s,{id:"attraction_product_social_proof_total_bookings_v2",args:{nTravelerCount:a,sHtml1:"",sHtml2:"",sHtml3:"",sHtml4:""}})),e>=100&&n("div",{className:r("lsRxVtW1")},n(s,{id:"attraction_product_social_proof_page_views_v3",args:{nTravelerCount:e}}))),c=e=>{var a,n={query:"",pause:!0};e.productCode&&(n={query:d,variables:{productCode:t(e.productCode)}});var[l]=i(n),r=null==(a=l.data)?void 0:a.socialProofData,s=r&&r.length>0&&r[0]||null,c={weeklyPageViews:o("attractions_apd_social_proof_weekly_page_views")&&s&&s.weeklyPageViews||0,totalBookings:o("attractions_apd_social_proof_total_bookings")&&s&&s.totalBookings||0};return u({weeklyPageViews:c.weeklyPageViews,totalBookings:c.totalBookings})};return[()=>{(d=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SocialProofDataQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"socialProofData"},"name":{"kind":"Name","value":"ExpPresentationService_getProductSocialProof"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"attractionProductCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productCode"}}}]}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalBookings"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"weeklyPageViews"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":230}}')).__key=0xee61b7ea9643,d.loc.source={body:"ee61b7ea9643"},e("default",c),e({AttractionProductSocialProof:u,SOCIAL_PROOF_TOTAL_BOOKING_THRESHOLD:100})},[e=>i=e.useQuery,e=>t=e.getDecodedValue,e=>o=e.featureIsEnabled,e=>(n=e.createElement,l=e.Fragment),e=>r=e.default,e=>s=e.UnsafeLocalize]]},["5X2em-","ZrBilN","-i3PJS","cDcdfi","jSLlaY","0DsHEV"]]);
