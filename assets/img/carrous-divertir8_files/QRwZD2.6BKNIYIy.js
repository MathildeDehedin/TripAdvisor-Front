(this.$WP=this.$WP||[]).push(["QRwZD2",(e,i)=>{"use strict";var n,a,t,l,d,s,r,o,u,m,c,k,N,v,p,S,E,I,_,f,b,O,D,T,g,y,h,x,F,A,P,G,L,R,V,C,w,j,M,B=({titleText:e,subtitleText:i,withBackground:a=!1})=>n.createElement(n.Fragment,null,n.createElement("div",{className:F("zsCNJbxY",{_1dZje_Hf:a})},e),i&&n.createElement("div",{className:F("_13Yq1ztW",{_1dZje_Hf:a})},i)),H=({responses:e,setters:i,homeGeoName:n,setHideControls:l})=>{var{localize:d}=x(),[,s]=D(G),r=g(()=>s({cardId:"ONBOARDING_HOMETOWN",cardState:"SHOWN"}));return a(t,null,a(B,{titleText:a(h,{id:"cx_explicit_preferences_profile_header3"})}),a("div",{className:"_2rwiMAFq",ref:r},a(y,{type:"OUTLINED",label:a(h,{id:"my_name_is"}),maxLength:40,value:e.firstName,onChange:i.setFirstName,cornersType:"ALL_ROUNDED",placeholder:d.string("explicit_preferences_account_screen_name"),helperText:d.string("cx_explicit_preferences_profile_name_help")}),a(S,{placeholder:d.string("cx_explicit_preferences_profile_hometown"),closeOnSelection:!0,geoName:n,onChange:i.setHomeGeo,onShowHide:l,clearGeo:()=>{i.setHomeGeo(void 0)}},e=>a(y,Object.assign({},e,{type:"OUTLINED",label:d("cx_explicit_preferences_profile_hometown"),cornersType:"ALL_ROUNDED",helperText:d.string("cx_explicit_preferences_profile_hometown_help2")})))))},Q=(e,i,n,a)=>{var[,{uid:t}]=l(k),[,o]=D(L),u=d(((e,i)=>"EDITING"===e?i?"EDITING":"ADDING":"GEOPILL"===e?"GEOPILL":"ONBOARDING")(a,n)).current,m=(e=>{switch(e){case"HAS_DESTINATION":return"WELCOME_SCREEN";case"DESTINATION":return"DESTINATION";case"DATES":return"DATES";case"SEGMENT":return"COMPANION";case"INTERESTS":return"INTERESTS";case"PROFILE":return"ACCOUNT_SCREEN";case"END_SCREEN":return"END_SCREEN";default:throw new Error("Unknown step: "+e)}})(e),c=((e,i)=>{switch(e){case"HAS_DESTINATION":return i.hasDestination?"HAS_DESTINATION":"HAS_NO_DESTINATION";case"DESTINATION":return i.isInDestination?"NEARBY":"GEO_SELECTION";case"DATES":return i.flexibleDates?"FUZZY_DATES":"HARD_DATES";case"SEGMENT":var n=i.segment;return"FAMILY"===n||"FRIENDS"===n||"PARTNER"===n||"SOLO"===n?n:null;case"INTERESTS":return"INTERESTS_SELECTED";case"PROFILE":if(i.firstName&&i.homeGeoId)return"NAME_AND_HOMETOWN_INPUT";if(i.firstName)return"NAME_INPUT";if(i.homeGeoId)return"HOMETOWN_INPUT";break;case"END_SCREEN":return null;default:throw new Error("Unknown step: "+e)}return null})(e,i),N=i.interests;return s(()=>{o({interaction:{explicitPreferences:{showQuestion:{context:u,question:m,uid:t}}}})},[u,t,m,o]),{trackRespondQuestion:r(()=>{o({interaction:{explicitPreferences:{respondQuestion:{context:u,question:m,response:c,uid:t,interestIds:"INTERESTS_SELECTED"===c?N:null}}}})},[t,m,c,N,u,o]),trackSkipQuestion:r(()=>{o({interaction:{explicitPreferences:{navigatesQuestion:{context:u,question:m,action:"SKIP",uid:t}}}})},[t,m,u,o]),trackGoBackQuestion:r(()=>{o({interaction:{explicitPreferences:{navigatesQuestion:{context:u,question:m,action:"BACK",uid:t}}}})},[t,m,u,o]),trackCloseModal:r(()=>{o({interaction:{explicitPreferences:{navigatesQuestion:{context:u,question:m,action:"CLOSE",uid:t}}}})},[t,m,u,o])}},q=({children:e,onClose:i=(()=>{})})=>{var a=A();o(()=>{var{body:e}=document;if(null!=e){var i=e.style.overflow;return e.style.overflow="hidden",()=>{e.style.overflow=i}}},[]);var t=d(null),l=r(()=>{if(null!=t.current){var e=t.current.querySelectorAll(R);e.length>0&&e[e.length-1].focus()}},[]),u=r(()=>{if(null!=t.current){var e=t.current.querySelector(R);null!=e&&e.focus()}},[]);return s(()=>{var e=e=>{27===e.keyCode&&null!=i&&i()};return document.addEventListener("keyup",e),()=>document.removeEventListener("keyup",e)},[i]),s(u,[]),n.createElement("div",{className:"wLDnacAL"},n.createElement("div",{className:"_278i5vs1",onClick:i}),n.createElement("div",{className:"sGal_Dx5"},n.createElement("div",{className:F("_9DIRjhAx",{_16IzsRdJ:a}),ref:t},n.createElement("div",{tabIndex:0,onFocus:l,"data-skip-focus":!0}),e,n.createElement("div",{tabIndex:0,onFocus:u,"data-skip-focus":!0}))))},z=({displayName:e})=>{var i;return i=e?n.createElement(h,{id:"cx_explicit_preferences_profile_end_screen2",args:{displayName:e}}):n.createElement(h,{id:"cx_explicit_preferences_profile_end_screen_no_name"}),n.createElement("div",{className:"_3xtzGcHe"},n.createElement("div",{className:"GJO5eBVn"},n.createElement(B,{titleText:i}),n.createElement(E,null)))},Y=e=>new Promise(i=>setTimeout(i,e)),U=({mode:e,state:{steps:i,currentStepIndex:a,nextStep:t,canGoBack:l,canGoForward:o,canSkip:m,goBack:N,goForward:v,reset:S,save:b,triggerEmail:D,hasExistingResponses:T,homeGeoName:g,modified:y,responses:h,setters:x},onClose:F,onRefresh:A})=>{var[P]=n.useContext(k),G=P.params.geoId||void 0,L=P.params.detailId||void 0,[R,V]=u(!1),C="GEOPILL"===e,[w,j]=u(C),[M,B]=u(!1),U=i[a],J=h.firstName.trim()||null,W=null==L&&!0===h.hasDestination&&!h.isInDestination&&null!=h.destinationGeoId&&h.destinationGeoId!==G,Z=null==L&&!0===h.hasDestination&&!0===h.isInDestination,$=!T||W||Z,K=c("post_signup_attr_promo_explicit_preferences_control")||c("post_signup_attr_promo_explicit_preferences")||c("post_signup_attr_promo_masthead_join")||"PROFILE_ONLY"===e,X=c("post_signup_attr_promo_explicit_preferences")||c("post_signup_attr_promo_masthead_join"),ee=p(),ie=O(),ne=n.useCallback(()=>{ie({module:"signup_promo_prompt",action:"eligible_promo_test_explicit_preferences"})},[ie]),ae=n.useCallback(()=>{"ONETAP"!==e&&"PROFILE_ONLY"!==e||(K&&ne(),X&&ee())},[X,ee,K,ne,e]),te=c("ep_has_command_screen")&&("ONBOARDING"===e||"ONETAP"===e),le=("ONBOARDING"===e||"ONETAP"===e)&&(te||c("ep_has_command_screen_control")),de=r(()=>{le&&ie({module:"EP_ONB_COPY",action:"ONB_COMPLETE"})},[ie,le]),{trackRespondQuestion:se,trackSkipQuestion:re,trackGoBackQuestion:oe,trackCloseModal:ue}=Q(U,h,T,e),me=r(()=>{B(!1),D(),S(),F(),window.location.hash="#preferences",ae()},[S,D,F,ae]),ce=r(()=>{if(!M)if(y)if("ONBOARDING"!==e&&"ONETAP"!==e||"PROFILE"!==U){B(!0);var i=[b().then(e=>W||Z||!A?e:A())];$?i.push(Y(7e3)):!$||W||Z||i.push(Y(2e3));var n=me;Promise.all(i).then(n,me)}else me();else me()},[y,me,A,b,M,W,Z,$,U,e]),ke=r(()=>{ue(),ce()},[ce,ue]),Ne=r(()=>{"END_SCREEN"!==t||$?v():ce()},[$,t,ce,v]),ve=r(()=>{se(),Ne()},[Ne,se]),pe=r(()=>{re(),Ne()},[Ne,re]),Se=r(()=>{oe(),N()},[oe,N]),Ee=d(U);s(()=>{M||"END_SCREEN"!==U||U===Ee.current||ce(),Ee.current=U},[M,U,ce]);var Ie=r(e=>{V(e>=12)},[]);return n.createElement(q,{onClose:ke},!w&&n.createElement(I,{isFirstStep:0===a,canGoBack:l,canSkip:m,isScrolled:R,onClose:ke,onBack:Se,onSkip:pe}),n.createElement(_,{steps:i,currentStepIndex:a,onScroll:Ie},({step:e})=>{switch(e){case"PROFILE":return n.createElement(H,{setHideControls:j,homeGeoName:g,responses:h,setters:x});case"END_SCREEN":return n.createElement(z,{displayName:J});case"HAS_DESTINATION":case"DESTINATION":case"DATES":case"SEGMENT":case"INTERESTS":default:throw new Error("Invalid step: "+e)}}),n.createElement(f,{iconName:"END_SCREEN"===t?"checkmark":"arrow-right",disabled:!o||w,onClick:r(()=>{"END_SCREEN"===t&&de(),ve()},[t,de,ve])}),M&&"END_SCREEN"!==U&&n.createElement("div",{className:"_3BSuIr7x"},n.createElement(E,null)))},J=e=>{var i=(e||"").match(/([0-9]{4})-([0-9]{2})-([0-9]{2})/);return null==i?null:new Date(+i[1],+i[2]-1,+i[3])},W=e=>null==e?null:e.toISOString().substr(0,10),Z=e=>`${(null==e?void 0:e.type)||""}|${(null==e?void 0:e.value)||""}`,$=e=>{var[i,n]=e.split("|");return{type:i,value:n}},K=e=>{var i,n,a,t,l,d,s,r,o,u,m,c,k,N,v,p,S,E={},I=J(null==e||null==(i=e.explicitPreferences)||null==(n=i.dates)||null==(a=n.value)?void 0:a.startDate),_=J(null==e||null==(t=e.explicitPreferences)||null==(l=t.dates)||null==(d=l.value)?void 0:d.endDate),f=null==e||null==(s=e.explicitPreferences)||null==(r=s.dates)||null==(o=r.value)?void 0:o.flexibleDates,b=null==e||null==(u=e.explicitPreferences)||null==(m=u.segment)?void 0:m.value,O=null==e||null==(c=e.explicitPreferences)||null==(k=c.interests)?void 0:k.value,D=null==e||null==(N=e.memberProfile)?void 0:N.displayName,T=null==e||null==(v=e.memberProfile)||null==(p=v.hometown)||null==(S=p.location)?void 0:S.locationId;null!=I&&(f?E.startMonth=I:E.startDate=I),null!=_&&(f?E.endMonth=_:E.endDate=_),null!=I&&null!=_&&null!=f&&(E.flexibleDates=f),null!=b&&(E.segment=b),null!=D&&(E.firstName=D),null!=T&&(E.homeGeoId=T);var g=(O||[]).filter(e=>null==e?void 0:e.selected).map(Z);return g.length>0&&(E.interests=g),E},X=(e,i,a)=>{var[t]=n.useContext(k),[{page:d}]=n.useContext(k),o=t.params.geoId||void 0,p=m(()=>{switch(e){case"ONBOARDING":return c("cx_explicit_preferences_onboarding");case"ONETAP":return c("cx_explicit_preferences_onetap");case"EDITING":return(c("cx_explicit_preferences_scoped_home_cta")||c("cx_explicit_preferences_scoped_home_cta_always_edit"))&&"Home"===d&&null!=o;case"GEOPILL":return c("cx_explicit_preferences_geopill");case"PROFILE_ONLY":return c("account_screen_onb")||"MASTHEAD"===a;default:throw new Error("useExplicitPreferencesModal: invalid mode: "+e)}},[e,d,o,a]),S=(({mode:e,scopedGeoId:i,pause:n})=>{var a,t,d,o,p,S,E,I,{userId:_}=l(N),[{data:f}]=T({query:V,variables:{userId:_,destinationGeoIds:null!=i?[i]:[],destinationGeoId:i},pause:n}),g=null==f||null==(a=f.memberProfile)||null==(t=a.hometown)||null==(d=t.location)?void 0:d.name,y=null==f||null==(o=f.explicitPreferences)||null==(p=o.where)?void 0:p.value,h="PROFILE_ONLY"===e||"ONBOARDING"===e||"ONETAP"===e,[{data:x}]=T({query:j,variables:{homeGeoIds:[y||-1]},pause:n||!h}),F=O(),A=r(e=>{h&&F({module:"autopop_home_location",action:e?"submitting_home_location":"no_home_location"})},[F,h]),[{page:P}]=l(k),G=m(()=>"ONBOARDING"===e||"GEOPILL"===e||"ONETAP"===e||c("t11209_mip_variant_b")||c("t11208_variant_a_curated_broad_interest_categories")?["DATES","SEGMENT","INTERESTS"]:"PROFILE_ONLY"===e?[]:c("t11210_mip_variant_c")?["SEGMENT","DATES","INTERESTS"]:["INTERESTS","SEGMENT","DATES"],[e]),L=r((i,{hasDestination:n,destinationGeoId:a})=>{switch(i){case"PROFILE":return"PROFILE_ONLY"===e||"ONETAP"===e||c("t11216_mip_2_traditional_sign_up_ll")&&"ONBOARDING"===e&&"Home"!==P?"END_SCREEN":"HAS_DESTINATION";case"HAS_DESTINATION":return null!=n?n?"DESTINATION":"END_SCREEN":null;case"DESTINATION":return null!=a?"DATES":"END_SCREEN";case"DATES":case"SEGMENT":case"INTERESTS":var t=G.indexOf(i);return G[t+1]||"END_SCREEN";case"END_SCREEN":return null;default:throw new Error("Invalid step: "+i)}},[G,P,e]),R="MOBILE"===l(v).viewportCategory;"ONBOARDING"===e||"ONETAP"===e&&!R||"PROFILE_ONLY"===e?I="PROFILE":"ONETAP"===e&&R?I="HAS_DESTINATION":"GEOPILL"===e?I="DESTINATION":[I]=G;var B=m(()=>{var n={hasDestination:"ONBOARDING"!==e&&"ONETAP"!==e&&null!=i||"GEOPILL"===e||null,isInDestination:!1,destinationGeoId:i,flexibleDates:!1,startDate:null,endDate:null,startMonth:null,endMonth:null,segment:null,interests:[],firstName:"",homeGeoId:null};return Object.assign(n,K(f)),n},[e,i,f]),H=b({initialStep:I,initialResponses:B,getNextStep:L}),{steps:Q,currentStepIndex:q,nextStep:z,responses:Y,setResponses:U,goForward:J}=H,[{data:Z}]=T({query:C,variables:{destinationGeoId:Y.destinationGeoId},pause:n}),X=m(()=>K(Z),[Z]);s(()=>{U(X,!1)},[U,X]);var[ee,ie]=u(!1),ne=ee||Object.keys(X).length>0,ae=Q[q],te=m(()=>{switch(ae){case"PROFILE":return""!==Y.firstName||null!=Y.homeGeoId;case"HAS_DESTINATION":return!1;case"DESTINATION":return null!=Y.destinationGeoId;case"DATES":return Y.flexibleDates?null!=Y.startMonth&&null!=Y.endMonth:null!=Y.startDate&&null!=Y.endDate;case"SEGMENT":return null!=Y.segment;case"INTERESTS":return Y.interests.length>0;case"END_SCREEN":return!0;default:throw new Error("Invalid step: "+ae)}},[ae,Y]),le=m(()=>G.includes(ae)?{stepNumber:G.indexOf(ae)+1,stepCount:G.length}:null,[ae,G]),[,de]=D(M),[,se]=D(w),re=r(()=>{var i=[];if("ONBOARDING"!==e&&"ONETAP"!==e&&"PROFILE_ONLY"!==e||null==_||(A(Y.homeGeoId),i.push(de({userId:_,homeGeoId:Y.homeGeoId,firstName:Y.firstName?Y.firstName:void 0}))),Y.hasDestination){var n=Y.flexibleDates?Y.startMonth:Y.startDate,a=Y.flexibleDates?Y.endMonth:Y.endDate;i.push(se({userId:_,destinationGeoId:Y.destinationGeoId,flexibleDates:Y.flexibleDates,startDate:W(n),endDate:W(a),segment:Y.segment,source:"ONBOARDING",interests:Y.interests.map($)}))}return ie(!0),Promise.all(i)},[_,e,Y,de,se,A]),[oe,ue]=((e,i,n)=>{var[a,t]=u(i),l=r((e,i)=>{n(e),t(i)},[n]);return s(()=>{t(i)},[i]),[a,l]})(h&&y||Y.homeGeoId,h&&y?null==x||null==(S=x.locations)||null==(E=S[0])?void 0:E.localizedName:g,r(e=>U({homeGeoId:e}),[U]));s(()=>{h&&y&&ue(y)},[h,y,ue]);var me=r(()=>{"ONBOARDING"!==e&&"ONETAP"!==e||null==_||fetch("/data/1.0/memberEngagement/onboarding/explicit-preferences",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:_,homeGeoId:Y.homeGeoId,firstName:Y.firstName,destinationGeoId:Y.destinationGeoId,segment:Y.segment})})},[e,_,Y]);return Object.assign({},H,{progress:le,canGoBack:"END_SCREEN"!==ae&&!("PROFILE_ONLY"===e&&"PROFILE"===ae),canGoForward:null!=z&&te&&"HAS_DESTINATION"!==ae,canSkip:"PROFILE_ONLY"===e&&"PROFILE"===ae||null!=z&&(("ONBOARDING"===e||"ONETAP"===e)&&"PROFILE"===ae||!te)&&"HAS_DESTINATION"!==ae,goForward:J,save:re,triggerEmail:me,homeGeoName:oe,hasExistingResponses:ne,setters:{setFirstName:r(e=>U({firstName:e}),[U]),setHomeGeo:ue}})})({mode:e,scopedGeoId:+o||null,pause:!p}),{open:E}=P(({close:a})=>n.createElement(U,{mode:e,state:S,onClose:a,onRefresh:i}));return{open:r(()=>{p&&E()},[p,E]),isEnabled:p,state:S}};return[()=>{(G=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HometownShownMutationLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardTypeEnumInput"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardStateEnumInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInsightProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uiCardsState"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardState"}}}]}]}}]}}]}}]}}],"directives":[]}]}}],"loc":{"start":0,"end":231}}')).__key=86937422431709,G.loc.source={body:"4f11b22e85dd"},(L=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InteractionMutationLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interaction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InteractionV4Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logInteractionV4"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"interaction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interaction"}}}],"directives":[]}]}}],"loc":{"start":0,"end":129}}')).__key=0xdc637872e883,L.loc.source={body:"dc637872e883"},R=["a[href]","button:not(:disabled)","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex="0"]:not([data-skip-focus])'].join(),(V=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialExplicitPreferencesQueryLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoIds"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"memberProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hometown"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"explicitPreferences"},"name":{"kind":"Name","value":"ExplicitPreferences_personalizationQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"where"},"name":{"kind":"Name","value":"whereFromQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"defaultLocation"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"segment"},"name":{"kind":"Name","value":"companionsQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"selected"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"dates"},"name":{"kind":"Name","value":"datesQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"defaultDates"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startDate"},"name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"endDate"},"name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"flexibleDates"},"name":{"kind":"Name","value":"fuzzyDates"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"interests"},"name":{"kind":"Name","value":"interestsQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"interests"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"selected"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"display"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExplicitPreferences_InterestText"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayText"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExplicitPreferences_InterestTextLocalizationObject"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayText"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":1086}}')).__key=52852438624267,V.loc.source={body:"3011aad4680b"},(C=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExplicitPreferencesQueryLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"explicitPreferences"},"name":{"kind":"Name","value":"ExplicitPreferences_personalizationQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"where"},"name":{"kind":"Name","value":"whereFromQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"defaultLocation"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"segment"},"name":{"kind":"Name","value":"companionsQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"selected"},"arguments":[],"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"dates"},"name":{"kind":"Name","value":"datesQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"defaultDates"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startDate"},"name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"endDate"},"name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"flexibleDates"},"name":{"kind":"Name","value":"fuzzyDates"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"interests"},"name":{"kind":"Name","value":"interestsQuestion"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"interests"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"selected"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"display"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExplicitPreferences_InterestText"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayText"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExplicitPreferences_InterestTextLocalizationObject"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayText"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":819}}')).__key=0x68818cda1bf2,C.loc.source={body:"68818cda1bf2"},(w=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ExplicitPreferencesMutationLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flexibleDates"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"segment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interests"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExplicitPreferencesInterestsInterestsInput"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInsightProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"explicitPreferencesTripSetup"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"checkIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"checkOut"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"companions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"segment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fuzzyDates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flexibleDates"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"explicitPreferencesInterests"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destinationGeoId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interests"}}}]}]}}]}}]}}],"directives":[]}]}}],"loc":{"start":0,"end":675}}')).__key=29297496192846,w.loc.source={body:"1aa55ada774e"},(j=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PopulateGeoInformationLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"homeGeoIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"homeGeoIds"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localizedName"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":132}}')).__key=0xdbd4b6075fd3,j.loc.source={body:"dbd4b6075fd3"},(M=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProfileMutationLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"homeGeoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMemberProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"displayName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"hometown"},"value":{"kind":"Variable","name":{"kind":"Name","value":"homeGeoId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":202}}')).__key=0xd5998315e55c,M.loc.source={body:"d5998315e55c"},e({ExplicitPreferencesLithiumUI:U,useExplicitPreferencesLithiumInteraction:Q,useExplicitPreferencesLithiumModal:X})},[e=>(n=e.default,a=e.createElement,t=e.Fragment,l=e.useContext,d=e.useRef,s=e.useEffect,r=e.useCallback,o=e.useLayoutEffect,u=e.useState,m=e.useMemo),e=>c=e.featureIsEnabled,e=>(k=e.Route,N=e.Visitor,v=e.Device),e=>p=e.useAttrPromoScreen,e=>(S=e.GeoPicker,E=e.LoadingSpinner,I=e.NavBar,_=e.StepsContainer,f=e.NextButton,b=e.useQuestionFlow),e=>O=e.useGARecorder,e=>(D=e.useMutation,T=e.useQuery),e=>g=e.useOnVisible,e=>y=e.default,e=>(h=e.default,x=e.useLocalize),e=>F=e.default,e=>A=e.useKeyboardNavigationMode,e=>P=e.useVDOMPortal]]},["cDcdfi","-i3PJS","2R4xv2","Z7U8sN","G9idyf","fsml46","5X2em-","BLrxBS","XS7t-Q","0DsHEV","jSLlaY","W3_c4H","vq6MSq"]]);