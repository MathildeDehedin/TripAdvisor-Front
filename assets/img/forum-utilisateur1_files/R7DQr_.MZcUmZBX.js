(this.$WP=this.$WP||[]).push(["R7DQr_",(e,t)=>{"use strict";var r,n,c,l,a,s,i,_,o,p,u,d,m,f=({onClick:e})=>{var{localize:t}=i(),{cdnPrefix:c}=n(_);return r.createElement("div",{className:"_2HQqeBmc"},r.createElement("img",{className:"_3GpLJJYo",src:c+"/img2/cx/explicit_preferences/plane-refresh.svg",alt:""}),r.createElement("div",{className:"_2tEoOcaq"},t("cx_explicit_preferences_cta_header")),r.createElement("div",{className:"PGShusGk"},t("cx_explicit_preferences_cta_subheader3")),r.createElement("button",{className:"_2d_nB22G",onClick:e},t("onboarding_social_brand_splash_get_started_cta")))},x=({description:e,onClick:t})=>{var{localize:n}=i();return r.createElement("button",{className:"_4FyT1_AP",onClick:t},r.createElement("div",{className:"_3ckiHX_i"},n("cx_explicit_preferences_edit_cta_header")),r.createElement("div",{className:"_1_-j0_MV"},e),r.createElement("div",null,r.createElement(o,{className:"_3Ka3u3qo",name:"filter"}),r.createElement("span",{className:"_3ZfcyKGZ"},n("cx_explicit_preferences_edit_trip_details"))))},h=(e,t)=>{var{route:{page:a,geo:i}}=n(p),_="Hotels"===a||"HotelsList"===a||"HotelsNear"===a||"Hotel_Review"===a||"HotelHighlight"===a||"MobileHotelHighlight"===a||"ShowUserReviewsHotels"===a||"SmartDeals"===a,o=c(()=>{switch(e){case"ONBOARDING":return s("cx_explicit_preferences_onboarding");case"ONETAP":return s("cx_explicit_preferences_onetap");case"EDITING":return(s("cx_explicit_preferences_scoped_home_cta")||s("cx_explicit_preferences_scoped_home_cta_always_edit"))&&"Home"===a&&null!=i;case"GEOPILL":return s("cx_explicit_preferences_geopill");case"PROFILE_ONLY":return s("account_screen_onb")||s("cx_explicit_preferences_onetap")&&_;default:throw new Error("useExplicitPreferencesModal: invalid mode: "+e)}},[e,a,i,_]),f=d({mode:e,scopedGeoId:+i||null,pause:!o}),x=r.useRef(null),{open:h}=u(({close:n})=>r.createElement(m,{mode:e,state:f,onClose:n,onRefresh:t}),{onClose:()=>{x.current&&x.current()}});return{open:l(()=>{if(o){var e=new Promise(e=>{x.current=e});return h(),e}return Promise.resolve("ep_failure_disabled")},[o,h]),isEnabled:o,state:f}},g=({onRefresh:e})=>{var{open:t,isEnabled:l,state:o}=h("EDITING",e),p=(({interestOptions:e,responses:{startDate:t,endDate:r,startMonth:l,endMonth:a,flexibleDates:s,segment:o,interests:p}})=>{var u=(({startDate:e,endDate:t,startMonth:r,endMonth:l,flexibleDates:a})=>{var{locale:s}=n(_),{localize:o}=i(),p=c(()=>new Intl.DateTimeFormat(s.code,{month:"long"}),[s.code]),u=c(()=>new Intl.DateTimeFormat(s.code,{month:"short",day:"numeric"}),[s.code]);return a&&null!=r&&null!=l?r.getFullYear()===l.getFullYear()&&r.getMonth()===l.getMonth()?o.string("cx_explicit_preferences_cta_month2",{month:p.format(r)}):o.string("cx_explicit_preferences_cta_months2",{month1:p.format(r),month2:p.format(l)}):a||null==e||null==t?null:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()?o.string("cx_explicit_preferences_cta_date2",{date:u.format(e)}):o.string("cx_explicit_preferences_cta_dates2",{date1:u.format(e),date2:u.format(t)})})({startDate:t,endDate:r,startMonth:l,endMonth:a,flexibleDates:s}),d=((e,t)=>{var{localize:r}=i();if(null==e)return null;switch(e){case"PARTNER":return t?r.string("cx_explicit_preferences_cta_traveling_partner"):r.string("cx_explicit_preferences_cta_partner2");case"FAMILY":return t?r.string("cx_explicit_preferences_cta_traveling_family"):r.string("cx_explicit_preferences_cta_family2");case"FRIENDS":return t?r.string("cx_explicit_preferences_cta_traveling_friends"):r.string("cx_explicit_preferences_cta_friends3");case"SOLO":return t?r.string("cx_explicit_preferences_cta_traveling_solo"):r.string("cx_explicit_preferences_cta_solo2");default:throw new Error("Invalid segment: "+e)}})("FAMILY"===o||"FRIENDS"===o||"PARTNER"===o||"SOLO"===o?o:null,null==u),m=((e,t)=>{var{localize:r}=i(),n=[];return e.forEach(({value:e,label:r})=>{t.includes(e)&&n.push(r)}),0===n.length?null:[`${r.string("cx_explicit_preferences_cta_interested_in")} ${n[0]}`,...n.slice(1)]})(e,p),f=[];return null!=u&&f.push(u),null!=d&&f.push(d),null!=m&&f.push(...m),0===f.length?null:f.join(" · ")})(o);return a(()=>{l&&"#onboarding"===window.location.hash.toLowerCase()&&t()},[l,t]),l&&(p||s("cx_explicit_preferences_scoped_home_cta"))?r.createElement(r.Fragment,null,r.createElement("div",{id:"preferences",className:"uL5h_SJG"}),null!=p?r.createElement(x,{description:p,onClick:t}):r.createElement(f,{onClick:t})):null};return[()=>{e({ExplicitPreferencesCta:g,useExplicitPreferencesModal:h})},[e=>(r=e.default,n=e.useContext,c=e.useMemo,l=e.useCallback,a=e.useEffect),e=>s=e.featureIsEnabled,e=>i=e.useLocalize,e=>_=e.Environment,e=>o=e.Icon,e=>p=e.RouteContext,e=>u=e.useVDOMPortal,e=>(d=e.useExplicitPreferencesState,m=e.ExplicitPreferencesUI)]]},["cDcdfi","-i3PJS","0DsHEV","2R4xv2","_qQcW3","N4pTU2","vq6MSq","RA5fcz"]]);