(this.$WP=this.$WP||[]).push(["qJkuKi",(e,a)=>{"use strict";var n,i,t,r,l,d,o,s,c,u,m,v,k,g,N,p,_,y,b,f,h,I,S,T,C,L,F,A,O,U,E,R,w,V,M,P,D,B,x,j,G,H,z,Y,K,q,Q,W,J,Z={transit:{typeIcon:"train",travelIcon:"activities"},rentalCars:{typeIcon:"rental-cars"}},$=(e,a)=>("transit"===e||"rentalCars"===e)&&a&&a.length<120,X=e=>n("div",{className:"_1ia-Unyj"},n(T,{name:Z[e.type].typeIcon,className:"aEN-PiYu"}),n("div",null,e.name&&n("span",{className:"_3WTwIb_9"},e.name),e.travel&&n("span",{className:m("_1v-hE6wV",{_30Z3i2ru:$(e.type,e.locationDescription)})},$(e.type,e.locationDescription)&&n("span",{className:"_30Z3i2ru"},e.locationDescription),n(T,{name:Z[e.type].travelIcon,className:"_2Pb9Mug-"}),n("span",{className:"_2RUsFUYc"},e.travel)),e.link&&n(L,{stripNoreferrerNoopener:B,href:e.link.url,target:"_blank",className:"_3KOchqTX",onClick:e.link.onClick},e.link.text))),ee=e=>{var a=20*e;return Math.ceil(a)},ae=(e,a)=>e<0?null:N(p("time_n_min",{0:ee(e)}),a),ne={blue:"K4di_Un0",green:"_2QKGUSLz",red:"_2E0OqmuR",wrapper:"FK7xCcj1",number:"_2SSx3Jmy",mobileHighlight:"_2muxJmwm",arrowIcon:"_2Ijngzv9",icon:"_3uYYZQ7l",collapsible:"_39SaHYeF"},ie=({number:e,children:a,color:r,icon:l="",collapsibleContent:d})=>{var{viewportCategory:o}=i(f),[s,c]=t(!0),u=ne[r];return a&&"MOBILE"===o&&d?n("div",{className:ne.mobileHighlight},n("div",{onClick:()=>c(!s)},n(T,{name:s?"caret-down":"caret-up",className:ne.arrowIcon}),l&&n(T,{name:l,className:m(ne.icon,u)}),a),!s&&d):n("div",{className:"ui_column is-6"},n("div",{className:ne.wrapper},x(e)&&n("span",{className:m(ne.number,u)},e),a))},te=({children:e,title:a})=>n("div",{className:"v6CYB1gR"},n("div",{className:"oyFcKokI"},a),e),re=e=>n(r,null,e.nearbyTransit&&e.nearbyTransit.filter(e=>e.distanceFromCenter).map(e=>n(X,{type:"transit",key:e.locationId,name:e.name,travel:ae(e.distanceFromCenter||0),locationDescription:e.locationDescription}))),le=e=>{var{geoName:a,url:i,cheapestDailyRate:t}=e.rentalCarLocation;return n(X,{type:"rentalCars",name:p("rental_cars"),link:{text:t?N(p("rental_cars_hotel_review_with_price_2",{0:_.formatCurrencyInteger(t)})):p("rental_cars_hotel_review_2",{sGeo:a}),url:i,onClick:I({module:"Attraction_Review",action:"rc_link_clicked",context:`${e.locale},${a}`,value:e.geoId})}})},de=e=>{var{name:a,url:i,attractionProductCode:t}=e.tourProduct;return n(X,{type:"transit",link:{text:a,url:i,onClick:I({module:"Attraction_Review",action:"click_getting_there_option",context:""+t})}})},oe=e=>{var a,{viewportCategory:t}=i(f),r=h(),l=(a=e.hopOnHopOffProducts||[],e=>a.slice(0,e))(Math.min(v("attraction_review_nearby_refresh_hop_on_hop_off")?2:0,e.nearbyTransit&&e.nearbyTransit.length>0?1:2)),d=y(()=>{e.hopOnHopOffProducts&&e.hopOnHopOffProducts.length>0&&r({module:"getting_there_in_view",action:"ExpABTestEligible:339",context:l.map(e=>e.attractionProductCode).join(", ")})});return n("div",{ref:d},((e,a)=>{var n=e.length>0,i=v("attraction_review_nearby_refresh_hop_on_hop_off")&&a.length>0;return n||i})(e.nearbyTransit||[],l)&&n(te,{fillSpace:!0,title:p("hr_location_getting_there")},n(re,{nearbyTransit:e.nearbyTransit}),l.map(e=>n(de,{tourProduct:e,key:e.attractionProductCode})),e.rentalCarLocation&&G&&n(le,{rentalCarLocation:e.rentalCarLocation,locale:e.locale,geoId:e.geoId}),"MOBILE"===t&&n(j,null)))};function se(e,a){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}var ce=({locationId:e,height:a,width:i})=>n(A,{query:H,variables:{locationId:e}},({fetching:t,data:l})=>n(r,null,(e=>n("div",{className:"iVMPXdsB"},n(O,{object:{locationId:e,__typename:"LocationInformation"},bookmarkSize:"20"})))(e),((e,a,i,t)=>{var r,l,d,o,s;if(t)return n("div",{className:"_2Bea5zB-"},n(E,{height:a,width:i}));var c=null==e||null==(r=e.locations)||null==(l=r[0])||null==(d=l.thumbnail)?void 0:d.photoSizes,u="ATTRACTION"===(null==e||null==(o=e.locations)||null==(s=o[0])?void 0:s.placeType)?[{url:"/img2/social/no_photo_attraction.gif",width:60,height:60}]:[{url:"/img2/social/no_photo_restaurant.gif",width:60,height:60}];return n(U,{height:a,width:i,sources:c||u,borderRadius:"5px"})})(l,a,i,t))),ue=e=>{var{location:a}=e;return a&&n("div",{className:"_10WUjn_f"},n(ce,{locationId:a.locationId,height:"77px",width:"82px"}))},me=e=>{var{reviewSummary:a,url:i}=e.location;return i&&a&&a.count?n("div",{className:"_386UUgsd"},a.rating&&a.count>0&&n(F,{rating:a.rating,label:n("span",{className:"_3go7vWmW"},"(",_.formatNumber("integer",a.count),")")})):null},ve=e=>{var{location:a}=e;return n("a",{href:a.url,rel:"noopener noreferrer",target:"_blank",className:"_3RcI6O5f",onClick:e.recorder},n(ue,{location:a}),(({classification:e,priceRange:a,location:i,distanceUnit:t})=>{var r,l=a&&e?"_82UKS_v6":"_2VWGHAM3";return n("div",{className:"_3FElB9CP"},n("div",{className:"_3rZEaIYO","data-nearbylocationid":i.locationId},i.name),n(me,{location:i}),n("div",{className:"_3KT_78RE"},n(T,{name:i.distanceInMiles<1?"activities":"parking",className:"_145fl-74"}),i.distanceInMiles<1?ae(i.distanceInMiles):((e,a,n,i)=>{if(e<0)return null;var t=((e,a)=>Math.round(10*e)/10)(e);return N(p("MILES"===a?"distance_n_mi":"distance_n_km",{0:t}),void 0)})((r=i.distanceInMiles,"MILES"===t?r:1.60934*r),t),(a||e)&&n("div",{className:"_1_h0Kjo8"},a&&n("span",{className:"_2VWGHAM3"},a),e&&n("span",{className:l},e))))})(e))},ke=e=>{var a,{location:i}=e,t=se(e,["location"]),r=I({module:"nearby",action:"click_attraction",context:""+i.locationId});return i.type&&i.type[0]?a=i.type[0].tagNameLocalized:i.category&&i.category[0]&&(a=i.category[0].tagNameLocalized),n(z,Object.assign({location:i},t,{classification:a,recorder:r}))},ge={loading:!0,hasGeoCenter:!1,currentLocation:null,distanceRange:0,restaurants:[],attractions:[],contacts:null,restaurantsCount:0,attractionsCount:0,nearbyAttractionsUrl:null,nearbyRestaurantsUrl:null,nearbyTransit:null,rentalCarLocation:null,mapDistanceRange:0},Ne=({locationId:e,placeType:a,name:n,latitude:i,longitude:t,distanceFromCenter:r,url:l,reviewSummary:d})=>({locationId:e,placeType:a,name:n,latitude:i,longitude:t,distanceInMiles:r,url:l,reviewSummary:d}),pe=e=>{var{locationId:a,geoId:i,isMobile:t,commerceCountryId:r,servlet:l,sponsoredListingLocationIdAttribution:d,distanceUnit:o,locale:s,currency:c}=e,u={distanceUnit:o,locationId:a||0,geoId:i||0,deviceType:t?"MOBILE":"DESKTOP",commerceCountryId:r,servletName:l,trafficSource:d===a?"sp":"ba",hotelTravelInfo:w(),locale:s,currency:c};return n(A,{query:Y,variables:u},({fetching:a,data:i})=>((e,a,i)=>{var t,r,l,d,{children:o}=i;if(e)t=ge;else if(a&&a.currentLocation&&a.currentLocation[0]&&a.nearbyLocations&&a.nearbyLocations[0]){var s=a.currentLocation[0],c=a.nearbyLocations[0];t={loading:e,hasGeoCenter:!(!s.latitude||!s.longitude),currentLocation:Ne(a.currentLocation[0]),restaurants:[],attractions:[],nearbyAttractionsUrl:s.nearbyAttractionsUrl||s.parent.nearbyAttractionsUrl,nearbyRestaurantsUrl:s.nearbyRestaurantsUrl||s.parent.nearbyRestaurantsUrl,nearbyTransit:s.nearbyTransit,rentalCarLocation:(r=a.rentalCarPricing,l=a.parentGeo[0],l&&l.name&&l.rentalCarsUrl?{geoName:l.name,url:l.rentalCarsUrl,cheapestDailyRate:null==r||null==(d=r.cheapestRate)?void 0:d.dailyRate}:null),contacts:s.businessAdvantage&&R(s.businessAdvantage.contactLinks||[]),mapDistanceRange:0,distanceRange:(null==c?void 0:c.distanceRange)||0,restaurantsCount:(null==c?void 0:c.restaurantCount)||0,attractionsCount:(null==c?void 0:c.attractionCount)||0},c&&c.locationList&&c.locationList[0]&&((e,a)=>{(e||[]).forEach(e=>{if(e&&e.location&&e.location.detail)switch(e.location.placeType){case"EATERY":a.restaurants.push((e=>{var a=e.location.detail;return Object.assign({},Ne(Object.assign({},e.location,{distanceFromCenter:e.distanceFromCenter})),{cuisines:a.cuisines||[],prices:a.prices||[]})})(e));break;case"ATTRACTION":a.attractions.push((e=>{var a=e.location&&e.location.detail;return Object.assign({},Ne(Object.assign({},e.location,{distanceFromCenter:e.distanceFromCenter})),{category:a.category||[],type:a.type||[]})})(e))}})})(c.locationList,t)}else t=Object.assign({},ge,{loading:!1});return n(q,{value:t},o)})(a,i,e))},_e=e=>{switch(e){case"EATERY":return"restaurants";case"ATTRACTION":return"attractions"}return""},ye=e=>{var a=I({module:"seeAllNearby",action:"click",context:_e(e.placeType)});return e.url&&n(L,{href:e.url,target:"_blank",className:m("seeNearby","nVqdkRFq"),stripNoreferrerNoopener:!0,onClick:a},p("nearby_see_all"))},be=e=>{switch(e){case 10953:return p("restaurant_filter_price_label.0_fffffb7e");case 10955:return`${p("restaurant_filter_price_label.1_fffffb7e")} - ${p("restaurant_filter_price_label.2_fffffb7e")}`;case 10954:return p("restaurant_filter_price_label.3_fffffb7e");default:return null}},fe=e=>{var{location:a}=e,i=se(e,["location"]),t=I({module:"nearby",action:"click_restaurant",context:""+a.locationId});return n(z,Object.assign({location:a},i,{classification:a.cuisines&&a.cuisines[0]&&a.cuisines[0].tagNameLocalized,priceRange:a.prices&&a.prices[0]&&be(a.prices[0].tagId),recorder:t}))},he=(e,a)=>{var{restaurantsCount:n,distanceRange:i,distanceUnit:t,locale:r}=a,l={titleClass:m("_2p1dCKhl","_1RjVT_Rc"),subtitleClass:"_2Ivw_S9M",count:n,range:_.formatNumber("default",i)};return"MILES"===t?((e,a,n)=>p("MOBILE"===e||"th"===a?"ar_location_infographic_restaurant_miles_v4":"hr_location_infographic_restaurant_miles_v2",n))(e,r,l):((e,a,n)=>p("MOBILE"===e||"th"===a?"ar_location_infographic_restaurant_km_v4":"hr_location_infographic_restaurant_km_v2",n))(e,r,l)},Ie=(e,a)=>{var{attractionsCount:n,distanceRange:i,distanceUnit:t,locale:r}=a,l={titleClass:m("_2p1dCKhl","_1T7zmTMm"),subtitleClass:"_2Ivw_S9M",count:n,range:_.formatNumber("default",i)};return"MILES"===t?((e,a,n)=>p("MOBILE"===e||"th"===a?"ar_location_infographic_attraction_miles_v4":"ar_location_infographic_attraction_miles_v2",n))(e,r,l):((e,a,n)=>p("MOBILE"===e||"th"===a?"ar_location_infographic_attraction_km_v4":"ar_location_infographic_attraction_km_v2",n))(e,r,l)},Se=e=>{var{restaurants:a,restaurantsCount:t,distanceUnit:l,nearbyRestaurantsUrl:d,locale:o}=e,{viewportCategory:s}=i(f);return a.length||"MOBILE"!==s?n(ie,{number:"th"!==o&&t,color:"red",icon:"restaurants",collapsibleContent:n(r,null,n("div",{className:"_3S_Q9gM7"},a.slice(0,3).map(e=>n(fe,{location:e,distanceUnit:l,key:e.locationId}))),d&&n(ye,{url:d,placeType:"EATERY"}))},n("span",{className:m("_7ierGp4l","MOBILE"===s&&"vGPkGGCP"),dangerouslySetInnerHTML:{__html:he(s,e)}})):null},Te=e=>{var{attractions:a,attractionsCount:t,distanceUnit:l,nearbyAttractionsUrl:d,locale:o}=e,{viewportCategory:s}=i(f);return a.length||"MOBILE"!==s?n(ie,{number:"th"!==o&&t,color:"blue",icon:"attractions",collapsibleContent:n(r,null,n("div",{className:"_3S_Q9gM7"},a.slice(0,3).map(e=>n(ke,{location:e,distanceUnit:l,key:e.locationId}))),d&&n(ye,{url:d,placeType:"ATTRACTION"}))},n("span",{className:m("_7ierGp4l","MOBILE"===s&&"vGPkGGCP"),dangerouslySetInnerHTML:{__html:Ie(s,e)}})):null},Ce=e=>n(K,null,({restaurants:a,restaurantsCount:i,attractions:t,attractionsCount:r,distanceRange:l})=>n(k,null,n(Se,Object.assign({restaurants:a,restaurantsCount:i,distanceRange:l},e)),n(Te,Object.assign({attractions:t,attractionsCount:r,distanceRange:l},e)))),Le=[.3,.75,5,25],Fe=[.5,1,10,40],Ae={MOBILE:{height:184,width:765},TABLET:{height:241,width:975},DESKTOP:{height:711,width:1280}},Oe=(e,a)=>{switch(("MILES"===a?Le:Fe).indexOf(e)){case 0:return 15;case 1:return 13;case 2:return 11;default:return 9}},Ue=()=>n("div",{className:"HvMCw04Q"},n("div",{className:"vcFesjOv"},n(T,{name:"expand",className:"a_c-LrtQ"}),p("full_view"))),Ee=e=>{var{viewportCategory:a}=i(f),r=Ae[a]||Ae.MOBILE,[l,d]=t(r),[s,c]=t(1),u=y(()=>{V("ar-map").emit("load-map")}),m=h(),v=()=>{m({module:"nearby",action:"click",context:"open_float_map"}),V("ar-map").emit("open-trigger-clicked")},k=()=>{if(u&&u.current){var e=window.getComputedStyle(u.current);e&&e.width&&e.height&&d({width:parseInt(e.width.replace("px",""),10),height:parseInt(e.height.replace("px",""),10)}),c(1)}};return o(()=>{k()},[]),n(K,null,({loading:a,currentLocation:i,restaurants:t,attractions:r,distanceRange:d,mapDistanceRange:o})=>{if(a)return n("div",{className:"_1_DqcMca",ref:u,onClick:v},n(E,{height:"100%"}),Ue());if(!i||!i.latitude||!i.longitude)return null;var c=[i,...t.slice(0,10),...r.slice(0,10)],m=o?Math.max(d,o):d;return n("div",{className:"_1_DqcMca",ref:u,onClick:v},n(D,{center:{lat:i.latitude,lng:i.longitude},height:l.height,width:l.width,zoom:Oe(m,e.distanceUnit),imgClassName:"_384yV20z",scale:s,markers:c.map(e=>(e=>{if(!e.latitude||!e.longitude)return null;var a;switch(e.placeType){case"ATTRACTION":a=e.distanceInMiles&&0!==e.distanceInMiles?P.miniAttractionPin:P.anchorAttractionPin;break;case"EATERY":a=P.miniRestaurantPin;break;default:return null}return{iconUrl:a,position:{lat:e.latitude,lng:e.longitude}}})(e)).filter(e=>!!e)}),Ue(),n(M,{callback:k,throttle:0}))})},Re=(e,a)=>{if("MOBILE"===e){if(Q.has(a))return"_2uOV5uwm";if(W.has(a))return"TxaUAZ39"}return""},we=e=>n(r,null,n("div",{className:"_24NxEAhR"},p("hotels_nav_location")),n(te,{title:p("tab_detail_contact_fffff9b3")},n(s,{contactIsVisible:e.contactIsVisible})),n(oe,{geoId:e.geoId,nearbyTransit:e.nearbyTransit,hopOnHopOffProducts:e.hopOnHopOffProducts,rentalCarLocation:e.rentalCarLocation,locale:e.locale}),e.appendStaticMap&&e.distanceUnit&&n(Ee,{distanceUnit:e.distanceUnit})),Ve=e=>e.restaurants.length&&n(r,null,e.restaurants.slice(0,3).map(a=>n(fe,{location:a,distanceUnit:e.distanceUnit,key:a.locationId})),e.nearbyRestaurantsUrl&&e.restaurants.length>3&&n(ye,{url:e.nearbyRestaurantsUrl,placeType:"EATERY"})),Me=e=>e.attractions.length&&n(r,null,e.attractions.slice(0,3).map(a=>n(ke,{location:a,distanceUnit:e.distanceUnit,key:a.locationId})),e.nearbyAttractionsUrl&&e.attractions.length>3&&n(ye,{url:e.nearbyAttractionsUrl,placeType:"ATTRACTION"})),Pe=e=>{var{distanceUnit:a}=e,{viewportCategory:r}=i(f),l=h(),d=y(()=>{l({module:"location",action:"in_view"})}),s=y(()=>{var a;l({module:"nearby",action:"impression_product_card",context:null==e||null==(a=e.nearbyProduct)?void 0:a.productCode})}),[u,v]=t(null);return o(()=>{u&&b({module:"nearby",action:u})},[u]),n(pe,{locationId:e.locationId,geoId:e.geoId,commerceCountryId:e.commerceCountryId,isMobile:e.isMobile,servlet:e.servlet,sponsoredListingLocationIdAttribution:e.sponsoredListingLocationIdAttribution,distanceUnit:a,locale:e.locale,currency:e.currency},n(K,null,({currentLocation:i,restaurants:t,restaurantsCount:l,attractions:o,attractionsCount:u,nearbyAttractionsUrl:N,nearbyRestaurantsUrl:_,nearbyTransit:y,rentalCarLocation:b})=>((e,a,n,i,t)=>(e=>{var a=e&&e.locationId;return v(a?"successful_fetch":"failed_fetch"),a})(e)&&(0===n||a&&a.length>0)&&(0===t||i&&i.length>0)&&(null==e?void 0:e.latitude)&&(null==e?void 0:e.longitude))(i,t,l,o,u)?n("div",{className:m("ui_section","block_wrap","_3xo4MS9r"),ref:d,id:"NEARBY_TAB","data-tab":"TABS_LOCATION"},"MOBILE"!==r&&n(Ee,{distanceUnit:a}),n(k,{multiline:"TABLET"===r},n(g,{className:"_2aZV3rXh",width:"TABLET"===r?3:2},n(we,Object.assign({linkLevel:"level_4"},e,{nearbyTransit:y,rentalCarLocation:b,hopOnHopOffProducts:e.hopOnHopOffProducts,appendStaticMap:"MOBILE"===r,distanceUnit:a,contactIsVisible:e.contactIsVisible}))),n(g,{className:"_33rQl_bR",width:"TABLET"===r?9:6},!("MOBILE"===r&&0===t.length&&0===o.length)&&n("div",{className:m("_24NxEAhR",Re(r,e.locale))},p("mw_best_nearby_ffffdfce"),n("span",{className:"_2-OHUpEC"},n(S,{alignEdge:"right",below:!0,message:p("attractions_restaurants_nearby_tooltip"),maxWidth:200},e=>n("span",{ref:e},n(T,{name:"info",className:"ui_icon information-circle"}))))),n(Ce,{distanceUnit:a,nearbyAttractionsUrl:N,nearbyRestaurantsUrl:_,locale:e.locale}),"MOBILE"!==r&&n(k,null,n(g,{width:6},l>0&&n(Ve,{restaurants:t,distanceUnit:a,nearbyRestaurantsUrl:_})),n(g,{width:6},u>0&&n(Me,{attractions:o,distanceUnit:a,nearbyAttractionsUrl:N})))),e.nearbyProduct.productCode&&n(g,{className:"_2rkYsT4i",width:"TABLET"===r?12:4},n("div",{className:"DQ3XE8sN",ref:s},n("div",{className:"D7nTiaJl"},p("attractions_location_product_card_header_get_to_know_the_area")),n(c,Object.assign({},e.nearbyProduct,{cardStyle:"TABLET"===r?"LANDSCAPE":"FULLBLEED",imageProportions:"TABLET"===r?"DEFAULT":"CINEMA",showCategoryTag:!0,trackingModule:"nearby",linkOptions:{target:"_blank"},showMoreInfoButton:!0})))))):null))},De=e=>({attractionProductCode:e.productCode,name:e.productName,url:e.tourProductUrl});return[()=>{B=v("hr_xsell_history_inject"),x=Number.isInteger||(e=>isFinite(e)&&Math.floor(e)===e),j=C.onUsage(()=>a("PgoAle"),"default"),G=v("link_to_cars"),(H=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NearbyThumbnailQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"placeType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photoSizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isHorizontal"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":253}}')).__key=0xa9c32396a13f,H.loc.source={body:"a9c32396a13f"},z=l(ve),(Y=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NearbyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExpPresentationService_DistanceUnitEnum"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BaAggregation_DeviceType"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commerceCountryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"servletName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trafficSource"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BaAggregation_TrafficSource"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hotelTravelInfo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BaAggregation_HotelTravelInfoInput"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currentLocation"},"name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"placeType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"latitude"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"longitude"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"nearbyAttractionsUrl"},"name":{"kind":"Name","value":"attractionOverviewURL"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"nearbyRestaurantsUrl"},"name":{"kind":"Name","value":"restaurantOverviewURL"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"nearbyAttractionsUrl"},"name":{"kind":"Name","value":"locationsNearUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ATTRACTION"}}],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"nearbyRestaurantsUrl"},"name":{"kind":"Name","value":"locationsNearUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"RESTAURANT"}}],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"businessAdvantageData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deviceType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceType"}}},{"kind":"Argument","name":{"kind":"Name","value":"commerceCountryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commerceCountryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"servletName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"servletName"}}},{"kind":"Argument","name":{"kind":"Name","value":"trafficSource"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trafficSource"}}},{"kind":"Argument","name":{"kind":"Name","value":"hotelTravelInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hotelTravelInfo"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBaFields"},"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"nearbyTransit"},"name":{"kind":"Name","value":"nearby"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"radius"},"value":{"kind":"FloatValue","value":"5.0"}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}},{"kind":"ObjectField","name":{"kind":"Name","value":"offset"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locationFilter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"placeType"},"value":{"kind":"EnumValue","value":"METRO_STATION"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locationDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"distanceFromCenter"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rentalCarPricing"},"name":{"kind":"Name","value":"RentalCarsLocation_summaryContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointOfSale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cheapestRate"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyRate"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"parentGeo"},"name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"geoId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rentalCarsUrl"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"nearbyLocations"},"name":{"kind":"Name","value":"ExpPresentationService_getNearbyLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"distanceUnit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distanceUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attractionCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"distanceRange"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"distanceUnit"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"restaurantCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locationList"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NearbyAttractionLocationInfo"},"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaAggregation_LocationProductData"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactLinkType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayPhone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rawPhone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"emailParts"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"clickTrackingUrl"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"encode"},"arguments":[]}]},{"kind":"Field","name":{"kind":"Name","value":"column"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StandardLocationInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"placeType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"latitude"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"longitude"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reviewSummary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"detail"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Restaurant"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cuisines"},"name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tagCategoryTypes"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"CUISINES"}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagNameLocalized"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"prices"},"name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tagCategoryTypes"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"RESTAURANT_PRICE"}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagNameLocalized"},"arguments":[],"directives":[]}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attraction"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"category"},"name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tagCategoryTypes"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"ATTRACTIONS_L2_CATEGORY"}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagNameLocalized"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tagCategoryTypes"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"ATTRACTIONS_L3_TYPE"}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagNameLocalized"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NearbyAttractionLocationInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExpPresentationService_AttractionNearbyLocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distanceFromCenter"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StandardLocationInfo"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationDetail"},"directives":[]}]}}]}}],"loc":{"start":0,"end":2877}}')).__key=0xb6ec56aec602,Y.loc.source={body:"b6ec56aec602"},({Consumer:K,Provider:q}=d(ge)),Q=new Set(["ru"]),W=new Set(["de","da"]),J=u((e,a)=>{var n,i;s.stage(e,a);var t,r,l=(e=>{var a=e.page.detailId,n="MOBILE"===e.meta.device.userAgentCategory,{sponsoredListingLocationIdAttribution:i}=e.route,{commerceCountryId:t}=e.meta,r=e.route.page,{distanceUnit:l,locale:d,currencyCode:o}=e.i18n,{geoId:s}=e.page;return{locationId:a,geoId:s,isMobile:n,sponsoredListingLocationIdAttribution:i,commerceCountryId:t,servlet:r,distanceUnit:l,locale:d,currency:o}})(e),d=v("attraction_review_nearby_refresh_product_card")?a("/data/1.0/attraction/nearby-product/"+e.page.detailId):null,o=a("/data/1.0/attraction/hop-on-hop-off/"+e.page.detailId),c=new URLSearchParams({allowedFields:"subcategory"}).toString(),u=v("hide_supplier_contact_information")?a(`/data/1.0/location/${e.page.detailId}?${c}`):null,m=(t=u&&(null==(n=u.get())||null==(i=n.data)?void 0:i.subcategory)||[],r=["museums"],t.filter(e=>-1!==r.indexOf(e.key)).length>0||!v("hide_supplier_contact_information"));return()=>{var e,a;return Object.assign({contactIsVisible:m,nearbyProduct:d&&d.get().data||{},hopOnHopOffProducts:((null==(e=o.get())||null==(a=e.data)?void 0:a.sortedTourProducts)||[]).map(De)},l)}})(Pe),e("default",J)},[e=>(n=e.createElement,i=e.useContext,t=e.useState,r=e.Fragment,l=e.memo,d=e.createContext,o=e.useEffect),e=>s=e.POIContactCard,e=>c=e.default,e=>u=e.bind,e=>m=e.default,e=>v=e.featureIsEnabled,e=>(k=e.Columns,g=e.Column),e=>(N=e.unescaped,p=e.localize,_=e.globalize),e=>y=e.useOnVisible,e=>b=e.default,e=>f=e.Device,e=>(h=e.useGARecorder,I=e.useGARecordCallback),e=>S=e.default,e=>T=e.Icon,e=>C=e.component,e=>L=e.Link,e=>F=e.BubbleRatingWithLabel,e=>A=e.Query,e=>O=e.default,e=>U=e.ResponsiveImage,e=>E=e.default,e=>R=e.remapContacts,e=>w=e.default,e=>V=e.default,e=>M=e.default,e=>P=e.SnapshotAssetCatalogue,e=>D=e.default]]},["cDcdfi","Lk7fU0","a9jxsC","RiHMo-","jSLlaY","-i3PJS","_AgNiB","535agn","BLrxBS","Jk5sjx","2R4xv2","fsml46","x9N_Dh","_qQcW3","pLbCP4","N4pTU2","QnohJ2","5X2em-","WCfySU","KwOV1Z","Xi-2HZ","GnBs-1","L3NEyz","l6BSGt","_g8cls","_KhVZh","fSRrv3"]]);
