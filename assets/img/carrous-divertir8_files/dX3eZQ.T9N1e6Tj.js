(this.$WP=this.$WP||[]).push(["dX3eZQ",(e,n)=>{"use strict";var a,l,t,i,r,o,s,d,u,c,m,v,k,p,f,_,g,N,b,h,E,C,S,y,I,x,w,P,O,T,A,R,F,U,D,L,V,z,M,H,W,q,B,G,j,J,X=({href:e,onClick:n,children:l})=>a.createElement("a",{href:e,onClick:n,className:"_2xLNkWys"},l),K=()=>a.createElement("hr",{className:"_2uFkqfmn"}),Q=({profileUrl:e,isOwner:n,onClose:l})=>{var[t]=a.useContext(k),i=encodeURIComponent(t&&"/Unknown"!==t.path?t.path:"/"),r=h(),o=a.useCallback(e=>{r({module:"UtilityNav",action:"click",value:0,context:e})},[r]);return b("keydown",a.useCallback(e=>{e instanceof KeyboardEvent&&27===e.keyCode&&l()},[l]),void 0,!0),b("click",l,void 0,!0),b("touchstart",l,void 0,!0),a.createElement(N,{events:["onClick","onTouchStart"]},a.createElement("div",{className:"_3KcTE7GV"},a.createElement(X,{href:e,onClick:()=>o("UserProfile_viewProfile")},a.createElement(y,{id:"ip_view_profile_1cf1"})),n&&a.createElement(X,{href:"/Owners",onClick:()=>o("UserProfile_ManagementCenter")},a.createElement(y,{id:"global_nav_profile_my_business"})),c("member_profile_bookings")&&a.createElement(X,{href:"/Bookings",onClick:()=>o("UserProfile_bookings")},a.createElement(y,{id:"my_bookings_headtext_fffff9b3"})),a.createElement(X,{href:"/Settings-cp",onClick:()=>o("UserProfile_settings")},a.createElement(y,{id:"mem_account_info"})),a.createElement(X,{href:"/NewsletterSignOut?returnTo="+i,onClick:()=>o("UserProfile_signout")},a.createElement(y,{id:"common_Signout"}))))},Z=()=>{var e,n,l,t,i,{userId:r}=a.useContext(v),[o]=a.useContext(k),s=o&&"/Unknown"!==o.path?o.path:"/",u=h(),m=C(),[{data:p}]=f({query:M,variables:{userId:r||""},pause:null===r}),[N,b]=a.useState(!1),E="/RegistrationController?"+new URLSearchParams({flow:"sign_up_and_save",returnTo:s,fullscreen:"true",flowOrigin:"login",hideNavigation:"true"}).toString(),{open:I,isEnabled:w}=_("PROFILE_ONLY",void 0,"MASTHEAD"),{trackWouldOpenExplicitPreferences:P}=g("ONBOARDING","JOIN_BUTTON"),O=a.useCallback(e=>{e.preventDefault(),m({flowOrigin:"login",flow:"sign_up_and_save",pid:40486}).then(e=>{u({module:"Masthead_signin",action:"signin"}),(null==e?void 0:e.hasCreatedMember)&&(P(),w&&I())})},[m,u,P,I,w]);if(null==r)return c("memx_registration_controller_dw")?null:a.createElement("a",{className:"pnI_yZEP",href:E,onClick:O},a.createElement(S,{legacyStyled:!0,elementType:"span",fullWidth:!0,size:"large",variant:"primary"},a.createElement(y,{id:"common_Signin"})));var T=(null==p||null==(e=p.memberProfile)?void 0:e.displayName)||"",A=(null==p||null==(n=p.memberProfile)||null==(l=n.route)?void 0:l.url)||void 0,R=null==p||null==(t=p.memberProfile)||null==(i=t.avatar)?void 0:i.photoSizes,F=null!=(null==p?void 0:p.allOwnerStatuses)&&(null==p?void 0:p.allOwnerStatuses.length)>0;return a.createElement("div",{className:"i06MAC5x"},a.createElement("a",{className:d("_2Jnt0UHM",{_14qSgvoI:N}),href:A,title:T,onClick:e=>{e.preventDefault(),b(!0)},"aria-expanded":N,"aria-label":T},a.createElement(x,{size:"small",sources:R||void 0,notLazy:!0})),N&&a.createElement(Q,{profileUrl:A,isOwner:F,onClose:()=>b(!1)}))},Y=()=>{var{cdnPrefix:e}=a.useContext(p),[{path:n}]=a.useContext(k),l=e+"/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg";return"/"===n?a.createElement("div",{className:"_1gs4JsPa"},a.createElement("img",{className:"_1AlVlFFs",src:l,alt:"Tripadvisor"})):a.createElement("a",{className:"_1gs4JsPa",href:"/"},a.createElement("img",{className:"_1AlVlFFs",src:l,alt:"Tripadvisor"}))},$=({type:e,text:n,href:l,onClick:t,expandable:i=!1,isExpanded:r=!1})=>a.createElement(a.Fragment,null,"link"===e&&a.createElement("a",{className:"_3H5XNWaW",href:l,onClick:t},a.createElement("span",{className:"s0ARW5Wg"},n)),"button"===e&&a.createElement("button",{type:"button",className:"_3H5XNWaW","aria-label":n,"aria-expanded":r,onClick:t},a.createElement("span",{className:"s0ARW5Wg"},n),i&&a.createElement("span",{className:d("_2gptwP8V",{_3jgi_07u:r})},a.createElement(w,{name:"single-chevron-down"})))),ee=({onClose:e,permissions:n,scope:l})=>{var t,i,r,o,s,d,[u,{uid:m}]=a.useContext(k),{userId:p}=a.useContext(v),_=null!=p,g=c("media_photo_upload_enabled"),{canWriteReview:h,canPostPhoto:C}=n||{},S=!_||h,I=(!_||C)&&g;b("click",e,void 0,!0);var x=E(),w=u.params.detailId||(null==l?void 0:l.detail)||void 0,P=a.useCallback(e=>{x({GlobalNav:{postContentCtaClick:{action:e,entrypoint:"GLOBAL_NAV",locationId:w,uid:m}}})},[w,m,x]),[{data:O}]=f({query:H,variables:{detailId:u.params.detailId||(null==l?void 0:l.detail)||0}}),T=(null==O||null==(t=O.locations)||null==(i=t[0])?void 0:i.writeUserReviewUrl)?null==O?void 0:O.locations[0].writeUserReviewUrl:"/UserReview",A=(null==O||null==(r=O.locations)||null==(o=r[0])?void 0:o.postPhotosUrl)?null==O||null==(s=O.locations)||null==(d=s[0])?void 0:d.postPhotosUrl:"/PostPhotos";return a.createElement(N,{events:["onClick","onTouchStart"]},a.createElement("div",{className:"WywT34S4"},S&&a.createElement(X,{href:T,onClick:()=>P("WRITE_REVIEW")},a.createElement(y,{id:"homepage_war_button"})),I&&a.createElement(X,{href:A,onClick:()=>P("POST_PHOTOS")},a.createElement(y,{id:"ugc_uploader_photo_v3"}))))},ne=({scope:e})=>{var[n,{uid:l}]=a.useContext(k),{userId:t}=a.useContext(v),[i,r]=a.useState(!1),{localize:o}=I(),[{data:s}]=f({query:W,variables:{userId:t||""},pause:null==t}),d=E(),u=a.useCallback(a=>{d({GlobalNav:{postContentCtaClick:{action:"NO_SELECTION",entrypoint:"GLOBAL_NAV",locationId:n.params.detailId||(null==e?void 0:e.detail)||void 0,uid:l}}}),r(!0),a.preventDefault()},[n,e,l,d]);return a.createElement(a.Fragment,null,a.createElement($,{type:"button",text:o.string("global_nav_content_cta_post"),onClick:u,expandable:!0,isExpanded:i}),i&&a.createElement(ee,{permissions:null==s?void 0:s.authzInfo,onClose:()=>r(!1),scope:e}))},ae=({isOwner:e,scope:n})=>{var[,{uid:l}]=a.useContext(k),{localize:t}=I(),i=E(),r=h(),o=a.useCallback(e=>{r({module:"UtilityNav",action:"click",value:0,context:e})},[r]),s=a.useCallback(()=>{i({Trips:{elementClick:{element:"MASTHEADCTA",puid:l}}})},[i,l]);return a.createElement(a.Fragment,null,e&&a.createElement($,{type:"link",href:"/Owners",text:t.string("global_nav_profile_my_business"),onClick:()=>o("UserProfile_ManagementCenter")}),a.createElement(ne,{scope:n}),a.createElement($,{type:"link",href:"/Inbox",text:t.string("dmo_hdr_alerts"),onClick:()=>o("UserProfile_inbox")}),a.createElement($,{type:"link",href:"/Trips",text:t.string("trips_product_name"),onClick:s}),a.createElement($,{type:"link",href:"/Bookings",text:t.string("my_bookings_headtext_fffff9b3"),onClick:()=>o("UserProfile_bookings")}),c("insurance_quicklink")&&a.createElement($,{type:"link",href:"/Insurance",text:t.string("insurance_title"),onClick:()=>o("UserProfile_insurance")}))},le=e=>`/RegistrationController?flow=core_combined&pid=40486&returnTo=${e}&fullscreen=true&flowOrigin=login&hideNavigation=true`,te=({link:e})=>{var n=e.linkId||"more",a="HelpDesk"===n?"/help":e.url||"",{open:l}=P(({close:e})=>r(B,{onClose:e})),[s,d]=t(!1),u=i(e=>{"HelpDesk"===n?(l(),e.preventDefault()):"more"===n&&(d(!0),e.preventDefault())},[n,l]);if(e.linkId&&G.has(e.linkId))return null;if(s&&null!=e.sublinks&&e.sublinks.length>0)return r(o,null,e.sublinks.map(e=>null!=e&&r(te,{key:e.linkId||"",link:e})));var c=e.preLocalizedAnchorText||e.localizedAnchorText;return r(X,{key:n||"more",href:a,onClick:u},null!=c?c:r(o,null,r(y,{id:"common_more_capital_ffffe27f"})," ",r(w,{name:"single-chevron-down",fontSize:14})))},ie=e=>{var{userId:n}=l(v),[a]=l(k),t=encodeURIComponent(a&&"/Unknown"!==a.path?a.path:"/"),{open:o,isEnabled:s}=_("PROFILE_ONLY",void 0,"MASTHEAD"),{trackWouldOpenExplicitPreferences:d}=g("ONBOARDING","JOIN_BUTTON"),{login:u}=e,c=i(e=>{e.preventDefault(),u({flowOrigin:"login",pid:40486,flow:"sign_up_and_save",isFullWidthMobile:!0}).then(e=>{(null==e?void 0:e.hasCreatedMember)&&s&&(d(),o())})},[u,d,o,s]);if(null!==n&&e.fetching)return null;if(null!==n&&e.data&&e.data.memberProfile){var m,p,f,N,b=(null==(m=e.data)||null==(p=m.memberProfile)||null==(f=p.avatar)?void 0:f.photoSizes)||null;return r("a",{href:null==(N=e.data.memberProfile.route)?void 0:N.url,className:"_2jziIT63"},r("div",{className:"_2f2xFqpf"},b&&r(x,{sources:b})),r("div",{className:"_2iVX9v9j"},e.data.memberProfile.displayName))}return null!==n?null:r("a",{className:"_3wlpDk-n",href:le(t)},r(S,{legacyStyled:!0,elementType:"span",fullWidth:!0,size:"large",variant:"primary",onClick:c},r(y,{id:"common_Signin"})))},re=e=>{var{userId:n}=l(v),[a]=l(k),[s,d]=t(!0),{login:u}=e,c=i(()=>{s&&(d(!1),setTimeout(e.close,250))},[s,d,e.close]),[{data:m,fetching:p}]=f({query:M,variables:{userId:n||""},pause:null===n}),{data:_,fetching:g}=O(e.scope),N=_&&_.globalNavLinks&&_.globalNavLinks.sublinks&&_.globalNavLinks.sublinks.map(e=>e&&r(te,{key:e.linkId||"more",link:e}))||null,b=encodeURIComponent(a&&"/Unknown"!==a.path?a.path:"/"),h=null!=(null==m?void 0:m.allOwnerStatuses)&&m.allOwnerStatuses.length>0;return r(q,{isOpen:s,slideFrom:"left",backdropShade:"light",onClose:c},r("div",{className:"_32cpp6LZ"},r(ie,{data:m,fetching:p,login:u}),r("div",{className:"_1Csq3V9R"},r(ae,{isOwner:h})),g?null:r(o,null,r(K,null),N),null!=n&&r(o,null,r(K,null),r(X,{href:"/MobileNativeSettings"},r(y,{id:"mem_settings"})),r(X,{href:`/RegistrationController?flow=sign_out&pid=1&returnTo=${b}&fullscreen=true`},r(y,{id:"common_Signout"})," "))))},oe=({scope:e})=>{var{localize:n}=I(),l=C(),{open:t}=P(({close:n})=>a.createElement(re,{scope:e,close:n,login:l}));return a.createElement("button",{className:"_3tKR4Vlr",onClick:t,title:n.string("mw_common_menu_fffffd37"),"aria-label":n.string("mw_common_menu_fffffd37")},a.createElement(w,{name:"menu-bars"}))},se=({type:e,text:n,href:l,icon:t,onClick:i,notification:r=!1,isExpanded:o=!1})=>a.createElement(a.Fragment,null,"link"===e&&a.createElement("a",{className:"_6zkbCr5n",href:l},a.createElement(w,{name:t,fontSize:24}),r&&a.createElement("div",{className:"_2LrP3Kqe"}),a.createElement("span",{className:"_1aNd_1k8"},n)),"button"===e&&a.createElement("button",{type:"button",className:"_6zkbCr5n","aria-label":n,"aria-expanded":o,onClick:i},a.createElement(w,{name:"plus-circle",fontSize:24}),a.createElement("span",{className:"_1aNd_1k8"},n))),de=({onClose:e,permissions:n,scope:l})=>{var t,i,r,o,s,d,[u,{uid:m}]=a.useContext(k),{userId:p}=a.useContext(v),_=null!=p,g=c("media_photo_upload_enabled"),{canWriteReview:h,canPostPhoto:C}=n||{},S=!_||h,I=(!_||C)&&g;b("keydown",a.useCallback(n=>{n instanceof KeyboardEvent&&27===n.keyCode&&e()},[e]),void 0,!0),b("click",e,void 0,!0),b("touchstart",e,void 0,!0);var x=E(),w=u.params.detailId||(null==l?void 0:l.detail)||void 0,P=a.useCallback(e=>{x({GlobalNav:{postContentCtaClick:{action:e,entrypoint:"GLOBAL_NAV",locationId:w,uid:m}}})},[w,m,x]),[{data:O}]=f({query:H,variables:{detailId:u.params.detailId||(null==l?void 0:l.detail)||0}}),T=(null==O||null==(t=O.locations)||null==(i=t[0])?void 0:i.writeUserReviewUrl)?null==O?void 0:O.locations[0].writeUserReviewUrl:"/UserReview",A=(null==O||null==(r=O.locations)||null==(o=r[0])?void 0:o.postPhotosUrl)?null==O||null==(s=O.locations)||null==(d=s[0])?void 0:d.postPhotosUrl:"/PostPhotos";return a.createElement(N,{events:["onClick","onTouchStart"]},a.createElement("div",{className:"_1b_d7nO_"},S&&a.createElement(X,{href:T,onClick:()=>P("WRITE_REVIEW")},a.createElement(y,{id:"homepage_war_button"})),I&&a.createElement(X,{href:A,onClick:()=>P("POST_PHOTOS")},a.createElement(y,{id:"ugc_uploader_photo_v3"}))))},ue=({scope:e})=>{var[n,{uid:l}]=a.useContext(k),{userId:t}=a.useContext(v),[i,r]=a.useState(!1),{localize:o}=I(),[{data:s}]=f({query:W,variables:{userId:t||""},pause:null==t}),d=E(),u=a.useCallback(a=>{d({GlobalNav:{postContentCtaClick:{action:"NO_SELECTION",entrypoint:"GLOBAL_NAV",locationId:n.params.detailId||(null==e?void 0:e.detail)||void 0,uid:l}}}),r(!0),a.preventDefault()},[n,e,l,d]);return a.createElement(a.Fragment,null,a.createElement(se,{type:"button",text:o.string("global_nav_content_cta_post"),icon:"plus-circle",onClick:u,isExpanded:i}),i&&a.createElement(de,{permissions:null==s?void 0:s.authzInfo,onClose:()=>r(!1),scope:e}))},ce=({scope:e})=>{var[,{uid:n}]=a.useContext(k),{localize:t}=I(),i=E(),r=(()=>{var{userId:e}=l(v),[{data:n}]=f({query:j,variables:{userId:e||""},pause:!e});return!(!n||!n.Inbox_unreadConversations)})(),o=a.useCallback(()=>{i({Trips:{elementClick:{element:"MASTHEADCTA",puid:n}}})},[i,n]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"_1_6Nwle6"},a.createElement(ue,{scope:e})),a.createElement("div",{className:"_1_6Nwle6"},a.createElement(se,{type:"link",href:"/Inbox",icon:"notification-bell",text:t.string("dmo_hdr_alerts"),notification:r})),a.createElement("div",{className:"_1_6Nwle6"},a.createElement(se,{type:"link",href:"/Trips",icon:"heart",text:t.string("trips_product_name"),onClick:o})))},me=({scope:e,isSearchHidden:n=!1})=>{var[{params:l},{uid:t}]=a.useContext(k),i={geoId:1};return null!=e?(null!=e.geo&&e.geo>1&&(i.geoId=e.geo),null!=e.page&&(i.pageType=F[e.page]),null!=e.latitude&&null!=e.longitude&&(i.latitude=e.latitude,i.longitude=e.longitude)):("number"==typeof l.geoId&&(i.geoId=l.geoId),"number"==typeof l.latitude&&"number"==typeof l.longitude&&(i.latitude=l.latitude,i.longitude=l.longitude)),a.createElement("div",{className:d("_3_CFaclw",{Q6ePbErL:n})},a.createElement("div",{className:"WmEK0bU8"},a.createElement(A,{adAreaId:"globalnav"},e=>a.createElement(R,{key:t,source:"SINGLE_SEARCH_NAV",scope:i,styleVariant:"expanding_right",sponsorDataProvider:e}))))},ve=({link:e,forceRenderSublinks:n=!1})=>{var[a,l]=t(void 0),i=P(({close:e})=>r(J,{onClose:e}));return e.sublinks?r(o,null,r("div",{className:"_1rViNeMQ"},e.sublinks.map(e=>{if(!e)return null;var n="HelpDesk"===e.linkId?e=>{i.open(),e.preventDefault()}:void 0,a=e.preLocalizedAnchorText||e.localizedAnchorText;return r("a",{key:a,href:e.url,className:"_3dzhM29n",onMouseEnter:()=>l(a),onClick:n},a,e.sublinks&&e.sublinks.length&&r("span",{className:"_2NUrzJuG"},r(w,{name:"single-chevron-right",color:"grayDottedSeparator",fontSize:16}))||null)})),r("div",{className:"UsrtonZ6"},e.sublinks&&e.sublinks.map(e=>{if(!e||!e.sublinks)return null;var l=e.preLocalizedAnchorText||e.localizedAnchorText;return n||a===l?e.sublinks&&e.sublinks.map(e=>e&&r("a",{key:e.preLocalizedAnchorText||e.localizedAnchorText,href:e.url,className:"_3dzhM29n"},e.preLocalizedAnchorText||e.localizedAnchorText)):null}))):null},ke=({anchorRef:e,parentPtr:n,link:a,active:l,activeDropdown:t})=>{var i=s(),u=a.preLocalizedAnchorText||a.localizedAnchorText;return r(o,null,r("a",{ref:e,className:d("_1T4t-FiN",{_1T2xZ2DX:l&&null!==u}),href:a.url},r("span",{ref:i,className:"_3dv66Lr7"},u||r(w,{fontSize:26,name:"more-horizontal"}))),t&&a.sublinks&&a.sublinks.length&&r(U,{hoverChainParent:n},e=>r(D,{below:!0,fullBleed:!0,anchor:i.current,shiftY:-1,alignEdge:"left",arrowType:"none",closeButton:!1},r("div",{ref:e,className:"_1gJM1GwC"},r(ve,{link:a,forceRenderSublinks:!1}))))||null,!t&&a.sublinks&&a.sublinks.length&&r("div",{className:"_3L6PMWlx"},r(ve,{link:a,forceRenderSublinks:!0}))||null)},pe=({scope:e})=>{var n,a,i,[o]=l(k),{data:s}=O(e),[u,c]=t([]),v=(e=>{switch(e){case"Attractions":case"AttractionProductReview":return"attractions";case"Tourism":return"scoped-home";case"RentalCars":case"RentalCarsAirport":case"RentalCarsGeo":return"cars";case"VacationRentals":case"VRACSearchServlet":case"VacationRentalsNear":case"VacationRentalsOverview":case"VacationRentalsRedesign":case"VRACSearch":return"vr";case"Flights":return"flights";default:return null}})((n=o.page,a=null==e?void 0:e.page,"Unknown"!==n?n:a));return s&&s.globalNavLinks&&s.globalNavLinks.sublinks?i=s.globalNavLinks.sublinks.filter(e=>e).map(e=>{if(!e)return null;var n=e.preLocalizedAnchorText||e.localizedAnchorText;return r(U,{key:n,mouseOverHandler:()=>{c(e=>[n,...e])},mouseOutHandler:()=>{c(e=>e.filter(e=>e!==n))}},(a,l)=>r(ke,{anchorRef:a,parentPtr:l,link:e,active:v===e.linkId,activeDropdown:u.indexOf(n)>=0}))}):(i=Array(8).fill().map((e,n)=>r("div",{key:n,className:d("_3PeMrYNR","_1T4t-FiN")}))).push(null),r("nav",{className:"jOdFitX3","data-test-target":"global-nav"},r(m,null,r("div",{className:"BBb9BS8P"},r("div",{className:"_1dYA0Xt1"},i.slice(0,-1)),i.slice(-1))))},fe=()=>{var e=z();return a.createElement(m,null,a.createElement("div",{className:"_1hdznqHu"},a.createElement("div",{className:"_2DZf9y0p"},a.createElement(V,null)),(null==e?void 0:e.MASTHEAD_H1)&&a.createElement("h1",{"data-test-target":"masthead_h1",className:"_1eh3MeEW"},a.createElement(L,{variant:"supporting-05",display:"inline"},e.MASTHEAD_H1))))},_e=({scope:e})=>{var[n,{uid:l}]=a.useContext(k),[t,i]=a.useState(!1),r=c("cx_brand_refresh_home_tourism")&&"Home"===n.page,o=r||"Search"===(null==e?void 0:e.page),[s,v]=a.useState(o),p=u(e=>{i(!e)}),f=u(r?e=>{v(!!e)}:null,350);return a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("div",{ref:p}),a.createElement("div",{ref:f})),a.createElement("header",{className:d("_3wrX4B4P",{_1capNFED:r,_1gSnQe6k:t&&r})},a.createElement(m,null,a.createElement("nav",{className:"c35hjqC_"},a.createElement(oe,{scope:e}),a.createElement(Y,null),a.createElement(me,{key:l,scope:e,isSearchHidden:o&&s}),a.createElement(ce,{scope:e}),a.createElement(Z,null)))))};return[()=>{(M=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BrandHeaderProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"site"},"value":{"kind":"EnumValue","value":"TRIPADVISOR"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photoSizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allOwnerStatuses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"verifiedOnly"},"value":{"kind":"BooleanValue","value":true}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownerStatus"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":337}}')).__key=37694552873143,M.loc.source={body:"2248726f18b7"},(H=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContributionUrlQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"detailId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"detailId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentGeoId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postPhotosUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"writeUserReviewUrl"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":157}}')).__key=0x7284a57943c2,H.loc.source={body:"7284a57943c2"},(W=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberPermissionsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"authzInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canWriteReview"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"canPostPhoto"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":167}}')).__key=0xf016de217046,W.loc.source={body:"f016de217046"},q=T.onUsage(()=>n("bsx_H5"),"default"),B=T.onUsage(()=>n("m7h4d5"),"default"),G=new Set(["scoped-home"]),(j=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnreadConversations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Inbox_unreadConversations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"directives":[]}]}}],"loc":{"start":0,"end":114}}')).__key=0x69b68242be90,j.loc.source={body:"69b68242be90"},J=T.onUsage(()=>n("m7h4d5"),"default"),e("default",_e),e({NavLinks:pe,OnPageAssets:fe})},[e=>(a=e.default,l=e.useContext,t=e.useState,i=e.useCallback,r=e.createElement,o=e.Fragment,s=e.useRef),e=>d=e.default,e=>u=e.useVisibleEffect,e=>c=e.featureIsEnabled,e=>m=e.default,e=>(v=e.Visitor,k=e.Route,p=e.Environment),e=>f=e.useQuery,e=>_=e.useExplicitPreferencesLithiumModal,e=>g=e.default,e=>N=e.default,e=>b=e.useWindow,e=>(h=e.useGARecorder,E=e.useInteractionLogger),e=>C=e.default,e=>S=e.default,e=>(y=e.default,I=e.useLocalize),e=>x=e.Avatar,e=>w=e.default,e=>P=e.useVDOMPortal,e=>O=e.useNavLinks,e=>T=e.component,e=>A=e.GeoPillSponsor,e=>(R=e.default,F=e.pageToTypeMappings),e=>U=e.default,e=>D=e.Popover,e=>L=e.default,e=>V=e.BreadcrumbsInHeader,e=>z=e.default]]},["cDcdfi","jSLlaY","BLrxBS","-i3PJS","mlRREX","2R4xv2","5X2em-","QRwZD2","2NwMnm","_cZwhS","Dg5_-9","fsml46","mv7yXI","eFikmI","0DsHEV","fAPg3f","OMqGt0","vq6MSq","xsqNye","pLbCP4","thFMrK","Kv5xL1","mHPUmd","eDFcUX","bbtKFR","meOI_T","QZqymc"]]);
