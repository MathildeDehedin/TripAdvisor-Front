(this.$WP=this.$WP||[]).push(["Hx8B0p",(e,s)=>{"use strict";var t,r,i={offset:-1,filtersVersion:0,filters:null,prefsVersion:0,prefs:null,expandedReviews:{},reviewToScroll:null},n=e=>{var s=r.getFrom(e);if(s.offset<0){var t=-1;e.route&&e.route.o&&e.route.o.length>1&&(t=parseInt(e.route.o.slice(1),10)),s.offset=t>=0?t:0}return s},f={changePage:e=>r.action({type:"SET_PAGE",paging:e}),gotFilters:e=>r.action({type:"GOT_FILTERS",filters:e}),changeFilters:(e,s=!0)=>r.action({type:"CHANGE_FILTERS",filters:e,resetPage:s}),clearFilters:()=>r.action({type:"CLEAR_FILTERS"}),gotPrefs:e=>r.action({type:"GOT_PREFS",prefs:e}),setPrefs:e=>r.action({type:"SET_PREFS",prefs:e}),expandReviews:(e,s)=>r.action({type:"EXPAND_REVIEWS",ids:e,expand:s}),scrollToReview:(e,s)=>r.action({type:"SCROLL_TO_REVIEW",id:e,offset:s}),clearReviewToScroll:()=>r.action({type:"CLEAR_REVIEW_TO_SCROLL"})},a={};return[()=>{(r=new t("@ta/location-review.review-list-state",i)).setReducer((e,s)=>{switch(s.type){case"SET_PAGE":return Object.assign({},e,{offset:s.paging.offset});case"GOT_FILTERS":return e.filters?e:Object.assign({},e,{filters:s.filters||{}});case"CHANGE_FILTERS":return e.filters?Object.assign({},e,{},s.resetPage?{offset:0}:{},{filtersVersion:e.filtersVersion+1,filters:Object.assign({},e.filters||{},{},s.filters||{})}):e;case"CLEAR_FILTERS":return Object.assign({},e,{offset:0,filtersVersion:e.filtersVersion+1,filters:{}});case"GOT_PREFS":return e.prefs?e:Object.assign({},e,{prefs:s.prefs||{}});case"SET_PREFS":return e.prefs?Object.assign({},e,{offset:0,prefsVersion:e.prefsVersion+1,prefs:Object.assign({},e.prefs||{},{},s.prefs||{})}):e;case"EXPAND_REVIEWS":return Object.assign({},e,{expandedReviews:s.ids.reduce((e,t)=>(e[t]=!!s.expand,e),Object.assign({},e.expandedReviews||{}))});case"SCROLL_TO_REVIEW":return Object.assign({},e,{reviewToScroll:s.id},void 0!==s.offset&&null!==s.offset?{offset:s.offset}:{});case"CLEAR_REVIEW_TO_SCROLL":return Object.assign({},e,{reviewToScroll:null});default:return e}}),e("default",a),e({ACTIONS:f,getState:n})},[e=>t=e.PrivateStateAccessor]]},["aunxON"]]);
