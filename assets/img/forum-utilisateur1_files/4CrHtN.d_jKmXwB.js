(this.$WP=this.$WP||[]).push(["4CrHtN",(e,n)=>{"use strict";var a,i,t,l,r,d,c,o,s,m,u,k,v,N,g,p,b,E,_,f,y,F,h,L,S,w,A,x,C,O,T,D,z,V,P,I,U,H,M,R=({link:e})=>{var n=g(),i=N(e.isObfuscated?e.url:null),t=e.isObfuscated?i:e.url;return a.createElement("span",{className:"_27sx3LDX"},a.createElement(p,{href:t,theme:"inline",rel:"noopener",target:e.newWindow?"_blank":void 0,onClick:()=>{n({module:"Footer",action:"click",context:e&&e.trackAction||""})}},e.preLocalizedAnchorText||e.localizedAnchorText))},q=({legalLinks:e,showLeonardoMessage:n})=>{var{cdnPrefix:i}=a.useContext(d),[t,l]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("div",{className:"_15sjLtZC"},a.createElement("img",{className:"_3f5P2JG2",src:i+"/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg",alt:""}),a.createElement("div",null,a.createElement("div",{className:"_3h9ac0Dl"},a.createElement(k,{id:"common_26ec",args:{0:O}})," ",a.createElement(k,{id:"common_Allrightsreserved"})),a.createElement("div",{className:"_3U0bjnHA"},(e||[]).map(e=>null!=e&&a.createElement(R,{link:e,key:e.url}))))),a.createElement("div",{className:"_13hQi1z3"},n&&a.createElement(a.Fragment,null,a.createElement(k,{id:"photos_provided_by_2_1bed",args:{0:"VFM Leonardo"}}),a.createElement("br",null)),t?a.createElement(v,{id:"footer_disclaimer_full_text_v3"}):a.createElement(a.Fragment,null,a.createElement(k,{id:"footer_26ed"})," ",a.createElement("button",{className:"_oR-rBXi",onClick:()=>l(!0)},a.createElement(k,{id:"common_more_ffffe87d"}))),a.createElement("br",null),a.createElement(k,{id:"footer_extended_248"})))},W=({link:e})=>{var n,i=g(),t=null==(n=e.preLocalizedLink)?void 0:n.match(/^(.*)<a.*href="([^"]*)".*>(.*)<\/a>(.*)$/);if(null==t)return null;var[,l,r,d,c]=t;return a.createElement("li",{className:"_2SQq2CTV"},l,a.createElement(p,{theme:"standalone",href:r,target:"_blank",rel:"noopener",onClick:()=>{i({module:"Footer",action:"click",context:e.trackAction||""})}},d),c)},j=({partnerLinks:e})=>a.createElement("ul",{className:"_1OhqYaUV"},(e||[]).filter(Boolean).map(e=>a.createElement(W,{key:e.preLocalizedLink,link:e}))),B=({link:e,setIsOpen:n,trackingModule:i,domainName:t})=>{var l=g(),r=N(e.isObfuscated?e.url:null),d=e.isObfuscated?r:e.url;return a.createElement("li",null,a.createElement("span",{className:"_2m4HC-i3"},a.createElement(p,{theme:"standalone",display:"block",href:d,target:e.newWindow?"_blank":void 0,rel:"noopener"+("cookie_consent"===e.trackAction?" nofollow":""),onClick:a=>{l({module:i||"Footer",action:"click",context:e.trackAction||""}),"cookie_consent"===e.trackAction&&E("consent_mgmt_enabled")&&!E("evidon_script_loading_perf_test")&&(f(t),y(),a.preventDefault()),"/help"===d&&(n(!0),a.preventDefault())}},e.preLocalizedAnchorText||e.localizedAnchorText)))},K=({links:e,trackingModule:n})=>{var[i,t]=a.useState(!1),{domainName:l}=a.useContext(d);return"undefined"!=typeof window&&window.document.createElement&&E("consent_mgmt_enabled")&&_(l),a.createElement(a.Fragment,null,a.createElement("ul",null,(e||[]).filter(Boolean).map(e=>a.createElement(B,{link:e,setIsOpen:t,trackingModule:n,domainName:l,key:e.url}))),i&&a.createElement(T,{onClose:()=>t(!1)}))},Q=e=>{switch(e){case"facebook":return"facebook";case"twitter":return"twitter";case"instagram":return"instagram";case"pinterest":return"pinterest";default:return"link"}},G=({socialLinks:e})=>{var n=g();return a.createElement("div",{className:"_2DSNbvAC"},(e||[]).map(e=>e&&e.iconUrl&&a.createElement("a",{key:e.url,href:e.url,rel:"noopener",className:"_23F9-Rgs",onClick:()=>{n({module:"Footer",action:"click",context:e&&e.trackAction||""})},title:e.preLocalizedAnchorText||e.localizedAnchorText,"aria-label":e.preLocalizedAnchorText||e.localizedAnchorText},a.createElement(F,{name:Q(null==e?void 0:e.trackAction)}))))},X=({mobileHeader:e,children:n,onClose:i})=>{var{viewportCategory:t}=a.useContext(c),l=a.useCallback(e=>{e instanceof KeyboardEvent&&("Esc"===e.key||"Escape"===e.key)&&null!=i&&i()},[i]);return S("keydown",l),a.createElement(a.Fragment,null,"MOBILE"===t&&a.createElement(w,null,e),a.createElement("div",{className:"_5Xd2x9E-"},n))},J=({width:e})=>i("div",{style:{width:e},className:"_2tO0rLqL"},i(A,null)),Y=({currencyPreview:e})=>{var{locale:{code:n}}=a.useContext(d),i=g();return a.createElement(L,{position:"above",alignEdge:"right",contents:e=>a.createElement(h,null,a.createElement(X,{mobileHeader:a.createElement(k,{id:"common_9bc"}),onClose:e},a.createElement(V,{whileFetching:z}))),key:e.code},(t,l,r,d)=>a.createElement(D,{ref:t,opened:d,onOpen:()=>{l(),i({module:"CURRENCY_PICKER",action:"Open",context:n})}},a.createElement("span",{className:"WBoKVfDn"},e.symbol),e.code))},Z=({countryName:e,currentPath:n})=>{var i=g(),{locale:{code:t}}=a.useContext(d);return a.createElement(h,{disableFocusOnMount:!0},a.createElement(L,{position:"above",alignEdge:"right",contents:e=>a.createElement(h,null,a.createElement(X,{mobileHeader:a.createElement(k,{id:"footer_region"}),onClose:e},a.createElement(I,{currentPath:n,whileFetching:P})))},(n,l,r,d)=>a.createElement(D,{ref:n,opened:d,onOpen:()=>{l(),i({module:"POS_PICKER",action:"Open",context:t})}},e)))},$=e=>{var n;return"function"==typeof e.formatToParts?null==(n=e.formatToParts().find(({type:e})=>"currency"===e))?void 0:n.value:void 0},ee=({currentPath:e})=>{var n=(()=>{var{currency:e}=t(o),[{data:n}]=r({query:U,variables:{currencyCode:e}}),a=(e=>{var{locale:{code:n}}=t(d);return l(()=>{var a={symbol:new Intl.NumberFormat(n,{style:"currency",currencyDisplay:"symbol",currency:e}),name:new Intl.NumberFormat(n,{style:"currency",currencyDisplay:"symbol",currency:e}),code:new Intl.NumberFormat(n,{style:"currency",currencyDisplay:"code",currency:e})};return{symbol:$(a.symbol)||"",name:$(a.name)||"",code:$(a.code)||e}},[e,n])})(e);return n&&n.currency||a})(),i=(()=>{var e,[{data:n}]=r({query:H});return null==n||null==(e=n.currentLocale)?void 0:e.pointOfSaleName})();return a.createElement("div",{className:"_21Svy2O1"},a.createElement("div",{className:"_1Oa2efjc"},a.createElement(Y,{currencyPreview:n})),a.createElement("div",{className:"_3fQdKyUl"},a.createElement(Z,{countryName:i||"",currentPath:e})))},ne=({id:e,header:n,children:i})=>{var{viewportCategory:t}=a.useContext(c),l="DESKTOP"!==t,[r,d]=a.useState(!1),o=a.useCallback(()=>d(e=>!e),[]),s=a.useCallback(e=>{switch(e.key){case" ":case"Enter":d(e=>!e),e.preventDefault();break;case"ArrowDown":case"ArrowRight":d(!0),e.preventDefault();break;case"ArrowUp":case"ArrowLeft":d(!1),e.preventDefault()}},[]);return a.createElement("div",{className:m("cpzsw9RX",{"wl4v-HO3":r})},a.createElement("div",Object.assign({className:"_1lCnJNHA",id:e+"_header"},l?{role:"button","aria-controls":e+"_contents","aria-expanded":r,onClick:o,onKeyDown:s,tabIndex:0}:{}),a.createElement("div",{className:"_3ZcrmL4g"},a.createElement(F,{name:r?"minus":"plus"})),a.createElement("div",{className:"_17BTGKct"},n)),a.createElement("section",{className:"_3z61QqF2",id:e+"_contents","aria-labelledby":e+"_header"},i))},ae=["Home"],ie=["Hotel_Review","ShowUserReview"],te=({footerLinks:e,currentPath:n})=>{var[{page:i}]=a.useContext(s),t=ae.includes(i);return a.createElement("footer",{className:"wPY_WYJH"},a.createElement(u,null,a.createElement("div",{className:m("_2vbN5yWV",{_1LL4Fllz:t})},t&&a.createElement(a.Fragment,null,a.createElement("div",{className:"fMjWVK3L"},a.createElement(ne,{id:"footer_section_about_ta",header:a.createElement(k,{id:"footer_about_ta_v2"})},a.createElement(K,{links:e&&e.aboutUsLinks}))),a.createElement("div",{className:"_3lYpbc4Z"},a.createElement(ne,{id:"footer_section_explore",header:a.createElement(k,{id:"footer_explore_v2"})},a.createElement(K,{links:e&&e.exploreLinks}))),a.createElement("div",{className:"_1XjeJVqk"},a.createElement(ne,{id:"footer_section_do_business",header:a.createElement(k,{id:"footer_do_business_v2"})},a.createElement(K,{links:e&&e.businessLinks})),null!=(null==e?void 0:e.appLinks)&&e.appLinks.length>0&&a.createElement(ne,{id:"footer_section_get_app",header:a.createElement(k,{id:"footer_get_app_v2"})},a.createElement(K,{links:e&&e.appLinks}))),null!=(null==e?void 0:e.partnerLinks)&&(null==e?void 0:e.partnerLinks.length)>0&&a.createElement("div",{className:"_2hQxpPln"},a.createElement(ne,{id:"footer_section_ta_sites",header:a.createElement(k,{id:"footer_ta_sites_v2"})},a.createElement(j,{partnerLinks:e.partnerLinks})))),a.createElement("div",{className:"_25jLVHj8"},a.createElement(ee,{currentPath:n})),t&&a.createElement("div",{className:"_2FnQU9b3"},a.createElement(G,{socialLinks:e&&e.socialLinks})),a.createElement("div",{className:"_1iSTSr0O"},a.createElement(q,{legalLinks:e&&e.legalLinks,showLeonardoMessage:ie.includes(i)})))))},le=({geoId:e,pageName:n,currentPath:a})=>{var{viewportCategory:l,os:{family:o}}=t(c),{locale:s}=t(d),m=s.code,u="IOS"===o||"ANDROID"===o?o:"UNKNOWN",[{data:k}]=r({query:M,variables:{locale:m,pageName:n||"",geoId:e,isMobile:"MOBILE"===l,osFamily:u}}),v=a||"/",N=n||"";return i(te,{footerLinks:null==k?void 0:k.footerLinks,currentPath:v,pageName:N})},re=()=>{var e=C();return i(u,null,i("div",{className:"_3f0ubBYC"},(null==e?void 0:e.MASTHEAD_H1)&&i("h1",{className:"L0yt6fCq"},e.MASTHEAD_H1),i(x,null)))};return[()=>{O=(new Date).getFullYear(),T=b.onUsage(()=>n("m7h4d5"),"default"),D=a.forwardRef(({children:e,opened:n,onOpen:i},t)=>a.createElement("div",{ref:t,className:m("_1TpoZTn8",{b3izGC56:n}),role:"button",tabIndex:"0",onClick:i,onKeyDown:e=>{["ArrowUp","ArrowDown","Enter"].includes(e.key)&&(i(),e.preventDefault())}},e,a.createElement("span",{className:"RUzCsq-H"},n?a.createElement(F,{name:"caret-up"}):a.createElement(F,{name:"caret-down"})))),z=a.createElement(J,{width:420}),V=b.onUsage(()=>n("4CrHtN/A1SA6X"),"default",z),P=a.createElement(J,{width:328}),I=b.onUsage(()=>n("4CrHtN/6GI-1U"),"default",P),(U=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrencyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currency"},"name":{"kind":"Name","value":"Currency_code"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":151}}')).__key=48056100005907,U.loc.source={body:"2bb4eec52813"},(H=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentCountryQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentLocale"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pointOfSaleName"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":80}}')).__key=80673336009235,H.loc.source={body:"495f39892213"},(M=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FooterLinksQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isMobile"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"osFamily"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalNav_GlobalNavFooterLinksRequestOsFamily"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footerLinks"},"name":{"kind":"Name","value":"GlobalNav_buildFooterLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isMobile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isMobile"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"osFamily"},"value":{"kind":"Variable","name":{"kind":"Name","value":"osFamily"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"geoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutUsLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"businessLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"restaurantLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"exploreLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isObfuscated"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"legalLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isObfuscated"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"appLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"aboutUsLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"partnerLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedLink"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedLink"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":1478}}')).__key=0xc3ddb502286e,M.loc.source={body:"c3ddb502286e"},e("default",le),e("OnPageAssets",re)},[e=>(a=e.default,i=e.createElement,t=e.useContext,l=e.useMemo),e=>r=e.useQuery,e=>(d=e.Environment,c=e.Device,o=e.Preference,s=e.Route),e=>m=e.default,e=>u=e.default,e=>(k=e.default,v=e.UnsafeLocalize),e=>N=e.useObfuscatedUrl,e=>g=e.useGARecorder,e=>p=e.default,e=>b=e.component,e=>E=e.featureIsEnabled,e=>(_=e.ensureEvidonLoaded,f=e.showOptionsDialog,y=e.setTAConsentCookie),e=>F=e.default,e=>h=e.FocusTrap,e=>L=e.default,e=>S=e.useWindow,e=>w=e.TitleBar,e=>A=e.LoadingSpinner,e=>x=e.BreadcrumbsInFooter,e=>C=e.default]]},["cDcdfi","5X2em-","2R4xv2","jSLlaY","mlRREX","0DsHEV","oiya90","fsml46","yfS4GB","pLbCP4","-i3PJS","VXy8g6","OMqGt0","W3_c4H","16tLUw","Dg5_-9","6nM-E7","V08PS7","meOI_T","QZqymc"]]);