(this.$WP=this.$WP||[]).push(["pZzSdK",(e,n)=>{"use strict";var a,t,i,r,s,l,c,o,u,d,m,k,C,g,v,b,h,p,f,w,T,I,y,x,O,S,j,D,N,R,F,M,E,U,H,P,L,A,V,q=e=>{var n=d.get("interactionData");n&&(e({interactions:n,clientRequestTimestamp:(new Date).getTime()}),d.remove("interactionData"))},G=(e,n,a)=>{(e=>{var n=d.get("interactionData");n||(n=[]);var a={eventTimestampMsClient:(new Date).getTime(),interaction:e};n.push(a),d.set("interactionData",n)})(n),(e=>{if(!e)return!1;var{target:n,currentTarget:a}=e;if(n&&a&&n instanceof HTMLElement){var t=n,i=!1;do{if(t instanceof HTMLElement&&t.dataset.encodedUrl){var r=u(t.dataset.encodedUrl),s=document.createElement("a");s.href=r,t.parentElement instanceof HTMLElement&&(s.style.display="none",t.parentElement.appendChild(s)),t=s}if(t instanceof HTMLAnchorElement){var l=t;if(window&&window.location&&window.location.hostname&&window.location.hostname===l.hostname)return!0}i=t===a||i,t=t.parentElement}while(t&&!i)}return!1})(e)||q(a)},W=({interactionMutationFunction:e,props:n,namespace:a})=>{var{children:r}=n,c=t(x),o=s(c),u=s([]),d=l((e,n,a)=>{u.current.push({event:e,interactionType:n,additionalVariables:a})},[]),m=l((n,t,i,r)=>{var s=i||{},l={};l[t]=Object.assign({},s,{impressionKey:r});var c={};c[a]=l,G(n,c,e)},[e,a]);return i(()=>{if(u.current.length>0&&o.current!==c){var e=o.current;u.current.forEach(({event:n,interactionType:a,additionalVariables:t})=>{m(n,a,t,e)}),u.current=[],o.current=c}},[c,m]),r(d)},B=e=>{var[,n]=o(j),{isBoosted:a,itemType:s,itemId:l}=t(k);return i(()=>{e.isReadonlyMode||q(n)}),e.isReadonlyMode?e.children(()=>{}):a?((e,n,a,t)=>{var{children:i}=n;return i((n,i,r)=>{var s=r||{},l={};switch(i){case"overflowMenuClick":case"linkClicked":l[i]={itemType:a,itemId:t};break;case"linkedPoiClick":l[i]={itemType:a,itemId:t,placement:"HEADER"},Object.assign(l[i],s);break;case"follow":case"unfollow":case"userClick":case"save":l[i]={itemType:a,itemId:t},Object.assign(l[i],s);break;default:var c=i||"undefined";m.error("Unknown boost interaction type: "+c),l[i]={itemType:a,itemId:t},Object.assign(l[i],s)}G(n,{boost:l},e)})})(n,e,s||"",l||""):r(b.Consumer,null,a=>"mixer"===a?((e,n)=>{var{children:a}=n;return r(C.Consumer,null,n=>r(g.Consumer,null,t=>r(v.Consumer,null,i=>a((a,r,s)=>{var l=s||{},c={};switch(r){case"delete":case"linkedPoiScroll":case"overflowMenuClick":case"report":case"seeAll":case"shelfScroll":case"untag":case"untagConfirm":case"untagCancel":c[r]={feedSectionId:t};break;case"linkedPhotoClick":c[r]={feedSectionId:t},Object.assign(c[r],l);break;case"linkedPoiClick":c[r]={feedSectionId:t,placement:"HEADER"},Object.assign(c[r],l);break;case"feedClick":case"helpful":case"repost":case"share":case"unhelpful":case"follow":case"unfollow":case"userClick":case"save":case"trip_save":case"dismiss":case"userReferenceClick":case"linkReferenceClick":case"linkedSnippetClick":case"batchGalleryClick":case"batchGalleryScroll":c[r]={feedSectionId:t,itemId:i.itemId},Object.assign(c[r],l);break;case"showMore":c[r]={mixerImpressionId:n},Object.assign(c[r],l);break;default:var o=r||"undefined";m.error("Unknown mixer interaction type: "+o)}G(a,{mixer:c},e)}))))})(n,e):"home"===a?((e,n)=>{var{children:a}=n;return r(h.Consumer,null,n=>r(T.Consumer,null,t=>a((a,i,r)=>{var s=r||{},l={};l["unfollow"===i?"unFollow":i]=Object.assign({},n,{},s,{},t),G(a,{home:l},e)})))})(n,e):"profile"===a?((e,n)=>{var{children:a}=n;return r(p.Consumer,null,n=>r(T.Consumer,null,t=>a((a,i,r)=>{var s=r||{},l={};l["unfollow"===i?"unFollow":i]=Object.assign({},n,{},s,{},t),G(a,{profile:l},e)})))})(n,e):"onboarding"===a?((e,n)=>{var{children:a}=n;return r(I.Consumer,null,n=>a((a,t,i)=>{var r=i||{},s={};s[t]=Object.assign({},r,{},n),G(a,{onboarding:s},e)}))})(n,e):"inbox"===a?((e,n)=>{var{children:a}=n;return r(S.Consumer,null,n=>a((a,t,i)=>{var r=i||{},s={};switch(t){case"follow":case"unfollow":s[t]={},Object.assign(s[t],r),Object.assign(s[t],n);break;default:var l=t||"undefined";m.error("Unknown or not set up inbox interactionType: "+l)}G(a,{inbox:s},e)}))})(n,e):"search"===a?((e,n)=>{var{children:a}=n;return r(f.Consumer,null,n=>a((a,t,i)=>{var r=i||{},s={};switch(t){case"follow":case"unfollow":s[t]={},Object.assign(s[t],r),Object.assign(s[t],n);break;default:var l=t||"undefined";m.error("Unknown or not set up search interactionType: "+l)}G(a,{search:s},e)}))})(n,e):"ugcDetail"===a?((e,n)=>{var{children:a,loggedInUserId:t}=n;return r(w.Consumer,null,n=>a((a,i,r)=>{var s=r||{},l=t?{actorUserId:t}:{},c={};c["feedClick"===i?"ugcClick":i]=Object.assign({},n,{},s,{},l),G(a,{ugcDetail:c},e)}))})(n,e):"hotelReviewServlet"===a?((e,n,a)=>{var{children:t}=n;return r(y.Consumer,null,n=>t((t,i,r)=>{var s=r||{},l={};l[i]=Object.assign({},s,{},n);var c={};c[a]=l,G(t,c,e)}))})(n,e,a):"hotels"===a||"smartDeals"===a||"hotelHighlight"===a||"hotelsNear"===a||"hotelsList"===a||"lastMinute"===a?r(W,{interactionMutationFunction:n,props:e,namespace:a}):"flightsResults"===a?((e,n,a)=>{var{children:t}=n;return r(M.Consumer,null,n=>r(E.Consumer,null,i=>r(U.Consumer,null,r=>t((t,s,l)=>{var c=l||{},o={};switch(s){case"filter":o[s]=Object.assign({},c,{},n);break;case"clearAllFilters":case"sortDropdown":case"removeFilter":case"newSortResults":case"filterHamburger":case"sort":o[s]=Object.assign({},c,{},n);break;case"staticPhotoClick":o[s]=Object.assign({},c,{searchId:(null==n?void 0:n.searchId)||""});break;case"firstClick":case"viewDealClick":case"viewDealPersistClick":case"viewDealFATableClick":case"viewDealRightRail":case"secondClickBreadCrumb":case"secondClickTabDetails":case"secondClickTabReviews":case"seatMapClick":case"airlineReviewExpand":case"airlineReviewClick":case"viewDealsExpand":case"amenitiesHover":case"segmentFilter":case"flyScoreHover":case"brandedFareHover":case"selfTransferHover":case"comboFareHover":o[s]=Object.assign({},c,{},i,{},n);break;case"savingsTipClick":case"savingsTipExpand":o[s]=Object.assign({},c,{},r,{searchId:(null==n?void 0:n.searchId)||""});break;default:var u=s||"undefined";m.error("Unknown or not set up search interactionType: "+u)}var d={};d[a]=o,G(t,d,e)}))))})(n,e,a):"flights"===a?((e,n,a)=>{var{children:t}=n;return r(H.Consumer,null,n=>r(E.Consumer,null,i=>r(R.Consumer,null,s=>r(F.Consumer,null,l=>r(P.Consumer,null,r=>t((t,c,o)=>{var u=o||{},d={};switch(c){case"fareCardClick":d[c]=Object.assign({},u,{},i);break;case"crossSiteClick":d[c]=Object.assign({},u,{},n);break;case"googleOneTapClick":d[c]=Object.assign({},u,{},r);break;case"cosChange":case"passengerNumberChange":case"childAgeChange":case"airportTypeaheadSelection":case"itineraryTypeTabChange":case"datepickerInteraction":case"checkNonstop":case"checkNearby":case"checkSubscription":case"stickyShown":case"findFlightsClick":d[c]=Object.assign({},u,{},l);break;case"attractionsShelfSeeAllClick":case"attractionsShelfItemClick":case"attractionsShelfScroll":d[c]=Object.assign({},s,{},u);break;default:var k=c||"undefined";m.error("Unknown or not set up search interactionType: "+k)}var C={};C[a]=d,G(t,C,e)}))))))})(n,e,a):"globalNav"===a?((e,n)=>{var{children:a}=n;return r(D.Consumer,null,n=>a((a,t,i)=>{var r=i||{},s={};s[t]=Object.assign({},r,{},n),G(a,{globalNav:s},e)}))})(n,e):"contentUploader"===a?((e,n)=>{var{children:a}=n;return r(N.Consumer,null,n=>a((a,t,i)=>{var r=i||{},s={};s[t]=Object.assign({},r,{},n),G(a,{contentUploader:s},e)}))})(n,e):"ownerNewsFeed"===a?((e,n)=>{var{children:a}=n;return r(C.Consumer,null,n=>r(g.Consumer,null,t=>r(v.Consumer,null,i=>a((a,r,s)=>{var l=s||{},c={};switch(r){case"feedClick":case"howToRespondClick":case"makeFavoriteReviewClick":case"reportReviewClick":case"respondDirectMessageClick":case"respondReviewClick":c[r]={feedSectionId:t,itemId:i.itemId},Object.assign(c[r],l);break;case"listingPerformanceClick":case"adsPerformanceClick":c[r]={feedSectionId:t},Object.assign(c[r],l);break;case"ownersClick":case"managePhotosClick":case"restaurantReviewClick":case"managementCenterClick":case"adsManagerClick":c[r]={},Object.assign(c[r],l);break;case"showMore":c[r]={mixerImpressionId:n},Object.assign(c[r],l);break;default:m.error("Unknown ownerNewsFeed interaction type: "+r)}G(a,{ownerNewsFeed:c},e)}))))})(n,e):"restaurants"===a?((e,n,a)=>{var{children:t}=n;return r(O.Consumer,null,n=>t((t,i,r)=>{var s=r||{},l={};l[i]=Object.assign({},s,{},n);var c={};c[a]=l,G(t,c,e)}))})(n,e,a):e.children(()=>{}))},K=({children:e})=>r(L,null,n=>e((e,a)=>{n(e,a)})),_=({children:e})=>r(b.Provider,{value:"flights"},r(L,null,n=>e((e,a,t,i,r)=>{n(e,a,{fareCardImpressionId:t,pageviewId:i,sessionId:r})})));return[()=>{C=a(null),g=a(null),v=a({itemId:""}),b=a(null),h=a(null),p=a(null),f=a(null),w=a(null),T=a(null),I=a(null),y=a(null),x=a(null),O=a(null),S=a(null),(j=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogInteractions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interactions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InteractionWithTimestampInput"}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientRequestTimestamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logInteractions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"interactions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interactions"}}},{"kind":"Argument","name":{"kind":"Name","value":"clientRequestTimestamp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientRequestTimestamp"}}}],"directives":[]}]}}],"loc":{"start":0,"end":219}}')).__key=0x70febba5d999,j.loc.source={body:"70febba5d999"},D=a(null),N=a(null),R=a(null),F=a(null),M=a(null),E=a(null),U=a(null),H=a(null),P=a(null),L=c(e=>({loggedInUserId:e.auth.loggedInUserId,isReadonlyMode:e.meta.readonlyMode}))(B),A=a(null),V=a(null),e({CrossSiteClickContext:H,CrossSiteClickInteractionLogger:K,FareCardInteractionLogger:_,FeedSectionIdContext:g,FlightsGoogleOneTapClickContext:P,FlightsSearchFormContext:F,FlightsSearchResultsContext:M,FlightsShelfTrackingContext:R,FollowPlacementContext:A,FollowTabTypeContext:V,GlobalNavTrackingContext:D,HomeTrackingContext:h,InboxTrackingContext:S,InteractionLogger:L,ItemIdContext:v,ItineraryContext:E,ListPageTrackingContext:x,MixerImpressionContext:C,OnboardingTrackingContext:I,ProfileTrackingContext:p,RecommendedFolloweesImpressionIdContext:T,SavingsTipsContext:U,SearchTrackingContext:f,SocialHotelsTrackingContext:y,TrackingNamespaceContext:b,UgcDetailTrackingContext:w})},[e=>(a=e.createContext,t=e.useContext,i=e.useEffect,r=e.createElement,s=e.useRef,l=e.useCallback),e=>c=e.connect,e=>o=e.useMutation,e=>u=e.default,e=>d=e.default,e=>m=e.default,e=>k=e.default]]},["cDcdfi","h74DsO","5X2em-","dROhDJ","jaCyxS","4LU1Ax","6KWcSB"]]);