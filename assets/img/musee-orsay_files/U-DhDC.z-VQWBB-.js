(this.$WP=this.$WP||[]).push(["U-DhDC",(e,i)=>{"use strict";var s,t,n,o,r,a,c,l,d,u,v,p,m,S,k,w,C,O={tripId:0},g={Home:"HomeFeed",Profile:"ProfileFeed",Attractions:"AttractionList",Attraction_Review:"AttractionDetail",Attraction_Products:"AttractionList",AttractionProductReview:"AttractionProductReview",Hotels:"HotelList",SmartDeals:"HotelList",HotelHighlight:"HotelList",HotelsList:"HotelList",HotelsNear:"HotelList",Vacation_Packages:"HotelList",Hotel_Review:"HotelDetail",Restaurants:"RestaurantList",Restaurant_Review:"RestaurantDetail",ShowUserReviews:"ShowUserReview",ShowUserReviewsHotels:"ShowUserReview",ShowUserReviewsRestaurants:"ShowUserReview",ShowUserReviewsAttractions:"ShowUserReview",Recent:"Recent",Forums:"Forums",ShowTopic:"Forums",ShowForum:"Forums",Trips:"Trips",Map:"Map",MySaves:"MySaves",LastMinute:"HotelList",LocalMaps:"Map",LocalMapsRedesign:"Map",VacationRentalReview:"VacationRentalDetail"},h=e=>e&&g[e]?g[e].toUpperCase():void 0,f=e=>e&&(h(e)||h(e.replace(/^Mobile/,""))),R=({source:e,pageAsContext:i,saveObject:s,trackingContext:r,withSaveSession:a,withOrganizeSession:v})=>{var[{page:p}]=t(d),{sessionUuid:S,sessionOrder:O,incrementOrder:g}=t(m),{sessionUuid:h,sessionOrder:R,incrementOrder:U}=t(k),x=t(u).impressionId||"",H=r||i&&p||void 0,{id:T,type:b}=s||{},{isBoosted:y}=t(l),{tripId:A}=t(w),I=n(()=>({detailId:T?""+T:void 0,saveType:b,isBoosted:y,tripId:A}),[T,b,y,A]),L=n(()=>a?{sessionType:"SAVE",sessionUuid:S,sessionOrder:O}:v?{sessionType:"ORGANIZE",sessionUuid:h,sessionOrder:R}:null,[R,h,O,S,v,a]),[,M]=c(C);return[o((i,s)=>{var t;a?g():v&&U();var n=I;s&&(n={detailId:""+s.id,saveType:s.type});var o,r,c=window.location.pathname,l="Unknown"===H?(null==(t=c.match(/^\/([a-zA-Z0-9_]+)/))?void 0:t[1])||"Home":H,d={elementClick:i.elementClick&&Object.assign({puid:x},n,{context:l},L,{},i.elementClick),filterClick:i.filterClick&&Object.assign({puid:x},i.filterClick),modalSuccess:i.modalSuccess&&Object.assign({puid:x},I,{context:l},L,{},i.modalSuccess),overflowClick:i.overflowClick&&Object.assign({puid:x},i.overflowClick,{},L),overflowSuccess:i.overflowSuccess&&Object.assign({puid:x},L,{},I,{},i.overflowSuccess),linkReferenceClick:i.linkReferenceClick&&Object.assign({puid:x},i.linkReferenceClick)};return M({interaction:{[e]:(o=d,r=o,["elementClick","modalSuccess"].forEach(e=>{r[e]&&r[e].context&&(r[e].context=f(r[e].context)||null),r[e]&&r[e].saveType&&(r[e].saveType=r[e].saveType.toUpperCase()),r[e]&&r[e].action&&(r[e].action=r[e].action.toUpperCase())}),["elementClick","filterClick","modalSuccess","overflowClick","overflowSuccess"].forEach(e=>{r[e]&&r[e].element&&(r[e].element=r[e].element.toUpperCase())}),["modalSuccess"].forEach(e=>{r[e]&&r[e].fields&&(r[e].fields=r[e].fields.map(e=>e.toUpperCase()))}),r)}})},[a,v,x,I,H,L,M,e,g,U]),x]},U=({children:e,source:i,pageAsContext:s,saveObject:t,trackingContext:n,withSaveSession:o,withOrganizeSession:r})=>{var[a,c]=R({source:i,pageAsContext:s,saveObject:t,trackingContext:n,withSaveSession:o,withOrganizeSession:r});return e(a,c)},x=()=>{var[e,i]=r({sessionUuid:v(),sessionOrder:0});return n(()=>({sessionUuid:e.sessionUuid,sessionOrder:e.sessionOrder,incrementOrder:()=>i(e=>({sessionUuid:e.sessionUuid,sessionOrder:e.sessionOrder+1})),resetSession:()=>i({sessionUuid:v(),sessionOrder:0})}),[e])},H=({children:e})=>{var i=x();return a(m.Provider,{value:i},e)},T=({children:e})=>{var i=x();return a(k.Provider,{value:i},e)};return[()=>{p={sessionUuid:v(),sessionOrder:0,incrementOrder:()=>{},resetSession:()=>{}},m=s(p),S={sessionUuid:v(),sessionOrder:0,incrementOrder:()=>{},resetSession:()=>{}},k=s(S),w=s(O),(C=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interaction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InteractionV4Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"logInteraction"},"name":{"kind":"Name","value":"logInteractionV4"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"interaction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interaction"}}}],"directives":[]}]}}],"loc":{"start":0,"end":133}}')).__key=19431441965389,C.loc.source={body:"11ac3c32214d"},U.defaultProps={pageAsContext:!1,saveObject:void 0,trackingContext:void 0},e({LogInteractionMutation:C,OrganizeSessionProvider:T,OrganizeSessionTrackingContext:k,SaveSessionProvider:H,SaveSessionTrackingContext:m,SponsorshipTrackingContext:w,TripInteraction:U,getInteractionsContext:f,useTripInteraction:R})},[e=>(s=e.createContext,t=e.useContext,n=e.useMemo,o=e.useCallback,r=e.useState,a=e.createElement),e=>c=e.useMutation,e=>l=e.default,e=>d=e.Route,e=>u=e.TripTrackingImpression,e=>v=e.uuid]]},["cDcdfi","5X2em-","6KWcSB","2R4xv2","c_rvp5","O-HcBE"]]);