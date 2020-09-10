(this.$WP=this.$WP||[]).push(["kNh38S",(e,a)=>{"use strict";var i,n,d,t,l,r,s,u,m,o,c,k,v,N,p,_,b,f,g,S,y,O,I,V,T,D,A,F=(e,a,i)=>{switch(e){case"USERNAME_TOO_SHORT":return i.string("profile_update_error_username_too_short",{0:a});case"USERNAME_TOO_LONG":return i.string("profile_update_error_username_too_long",{0:a});case"USERNAME_INVALID_CHARACTERS":return i.string("mobile_profile_update_error_username_invalid_characters");case"USERNAME_ALREADY_EXISTS":return i.string("profile_update_error_username_already_exists",{0:a});case"USERNAME_CONTAINS_PROFANITY":return i.string("profile_update_error_contains_profanity");case"USERNAME_CONTAINS_TA_WORDS":return i.string("profile_update_error_username_contains_ta_words");default:return console.error("Unknown username edit error: "+String(e)),i.string("social_loading_error_1")}},C=({value:e,submitError:a,onChange:i})=>{var s,{localize:u}=k(),[m,o]=d(e),[c,N]=d(null),p=t(()=>({username:m}),[m]),{data:_}=f({query:D,variables:p,pause:!m,wait:500}),b=null==_||null==(s=_.checkUsername)?void 0:s.status;l(()=>{if(b)if("OK"!==b)if("USERNAME_IS_SAME"===b)N(null);else{var e=m||u.string("social_edit_profile_username");N(F(b,e,u))}else N(null)},[m,i,b,u]),l(()=>{i(m)},[i,m]);var g=n(e=>{o(e)},[]);return r(v,{type:"OUTLINED",label:u("social_edit_profile_username"),maxLength:20,value:m,onChange:g,cornersType:"ALL_ROUNDED",placeholder:u.string("onboarding_social_name_screen_username_ghost_text"),helperText:c||a||u.string("onboarding_social_name_screen_username_helper_text_period_814"),hasError:!!c||!!a})},E="ONBOARDING_CONFIRM_USER",h=/^[a-zA-Z]+\d{11}$/,M=e=>e&&"string"==typeof e&&e.match(h),U=e=>{var{onComplete:a}=e,u=function(e,a){if(null==e)return{};var i,n,d={},t=Object.keys(e);for(n=0;n<t.length;n++)i=t[n],a.indexOf(i)>=0||(d[i]=e[i]);return d}(e,["onComplete"]),m=b(),[o,f]=d(M(u.displayName)?"":u.displayName),[T,D]=d(M(u.username)?"":u.username),[A,h]=d(void 0),[U,j]=d(null),{localize:P}=k();l(()=>{var e=M(u.username);m({module:u.trackingModule,action:"namescreen_displayname",context:u.displayName&&!e?"prefilled":"blank"}),m({module:u.trackingModule,action:"namescreen_username",context:u.username&&!e?"prefilled":"blank"})},[u.displayName,u.trackingModule,u.username,m]);var R=n((e,a)=>{j({message:e,field:a,advisory:!1})},[]),x=n(e=>{var a=o||P.string("onboarding_social_name_screen_display_name_field_v2");switch(e){case"DISPLAYNAME_TOO_SHORT":R(P.string("mobile_profile_update_error_display_name_too_short"),"displayname");break;case"DISPLAYNAME_TOO_LONG":R(P.string("profile_update_error_display_name_too_long",{0:a}),"displayname");break;case"DISPLAYNAME_CONTAINS_PROFANITY":R(P.string("profile_update_error_contains_profanity"),"displayname");break;case"DISPLAYNAME_CONTAINS_TA_WORDS":R(P.string("profile_update_error_username_contains_ta_words"),"displayname");break;default:console.error("Unknown username edit error: "+String(e)),R(P.string("social_loading_error_1"),"username")}},[P,o,R]),L=n(e=>{f(e)},[]),w=n(e=>(null==U?void 0:U.field)===e,[U]),q=n(()=>{m({module:u.trackingModule,action:"namescreen_skip_click",context:""}),a&&a()},[a,u.trackingModule,m]),Y=n(e=>"OK"===e?(m({module:u.trackingModule,action:"namescreen_complete_success",context:""}),!0):(x(e),m({module:u.trackingModule,action:"namescreen_submit_error",context:e||""}),!1),[u.trackingModule,x,m]),z=n(e=>{D(e),h(void 0)},[]),H=n(()=>{if(!o)return x("DISPLAYNAME_TOO_SHORT"),!0;if(!T){var e=P.string("social_edit_profile_username");return h(F("USERNAME_TOO_SHORT",e,P)),!0}return h(void 0),!1},[o,x,T,P]),[J]=(()=>{var{userId:e}=i(p),{id:a}=i(_),[,d]=s(g),[,t]=s(S);return[n((i,n)=>{y.has(i)||(y.add(i),d({userId:e,taUnique:a,cardId:i,cardAction:n}))},[d,a,e]),n((i,n)=>{O.has(i)||(O.add(i),t({userId:e,taUnique:a,cardId:i,cardState:n}))},[t,a,e])]})();l(()=>{J(E,"SHOW")},[J]);var Q=t(()=>({userId:u.userId,displayName:o,username:T}),[o,u.userId,T]),W=t(()=>({cardId:E,cardState:"COMPLETED",newlyAccepted:!u.acceptedTou}),[u.acceptedTou]),G=(({trackingModule:e,usernameMutationVars:a,screenCompleteMutationVars:i,onProfileValid:d,screenCompleteCallback:t,textInputIsInvalid:l})=>{var[,r]=s(I),[,u]=s(V),m=b();return n(()=>{m({module:e,action:"namescreen_confirm_click",context:""}),l()||u(a).then(({data:e})=>{var a;d(null==e||null==(a=e.updateMemberProfile)?void 0:a.status)&&(r(i),t&&t())})},[r,d,t,i,l,m,e,a,u])})({trackingModule:u.trackingModule,usernameMutationVars:Q,screenCompleteMutationVars:W,screenCompleteCallback:a,onProfileValid:Y,textInputIsInvalid:H});return r("div",{className:"_3kg_sgPX",onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),G())}},r("div",{className:"_10UZbXXg"},r(c,{id:"onboarding_social_name_screen_returning_header"})),r("div",{className:"_3wOjsxxP"},r(v,{type:"OUTLINED",label:P("onboarding_social_name_screen_display_name_field_v2"),maxLength:40,value:o||"",onChange:L,cornersType:"ALL_ROUNDED",placeholder:P.string("onboarding_social_name_screen_display_name_ghost_text"),helperText:w("displayname")&&U?U.message:P.string("onboarding_social_name_screen_display_name_helper_text_period_814"),hasError:w("displayname")}),r(C,{value:T||"",submitError:A,onChange:z})),r("div",{className:"we7-foQ9"},r(N,{legacyStyled:!0,variant:"primary",size:"large",fullWidth:!0,onClick:G},r(c,{id:"onboarding_social_name_screen_cta"})),u.allowSkip&&r("div",{className:"_2vC9P0IW",onClick:q},r(c,{id:"onboarding_social_skip_link"}))),u.allowSkip&&r("div",{className:"_2P-wepY9"},r(c,{id:"2019_by_skipping_username_step"})))},j=e=>{var a,{userId:n}=i(p),d=b(),[{fetching:t,data:s,error:m},k]=u({query:T,variables:{userId:n||""},requestPolicy:"network-only"});if(l(()=>{m&&(console.error("Error in ConfirmUsername query: "+m.message),d({module:e.trackingModule,action:"confirmusername_query_error_shown",context:n||""}))},[d,e.trackingModule,n,m]),m)return r("div",{className:"_1dyZDZjT"},r(c,{id:"compliment_9bd"}),r("div",{className:"_1I-6vDVq"},r(N,{legacyStyled:!0,variant:"primary",onClick:k},r(c,{id:"link_uploader_refresh"})),r(N,{legacyStyled:!0,variant:"primary",onClick:e.closerForError},r(c,{id:"btn_cancel"}))));if(t)return r("div",{className:"_345YfzMs"},r(o,null));if(s){var v,_=!!s.getTermOfUseAcceptanceInfo&&!!s.getTermOfUseAcceptanceInfo.accepted,f=s.insightProfile?s.insightProfile.uiCardsState:{states:[]};if(f&&(a=f).states&&a.states.find(e=>(null==e?void 0:e.id)===E&&"COMPLETED"===(null==e?void 0:e.state))&&_&&e.onComplete)return e.onComplete(),null;var g=null==(v=s.memberProfiles)?void 0:v[0],S=(null==g?void 0:g.displayName)||"",y=(null==g?void 0:g.username)||"";return r(U,{userId:n||"",displayName:S,username:y,onComplete:e.onComplete,onSkip:e.onSkip,allowSkip:e.allowSkip,trackingModule:e.trackingModule,acceptedTou:_})}return null},P=()=>{},R=({onClose:e,onComplete:a,forceTermsOfUse:i})=>{var[d]=u({query:A}),t=n(()=>{a&&a()},[a]),l=n(()=>{e&&e()},[e]),s=()=>r(m,{fullscreen:"responsive",bodyProps:{isFullBleed:!0},enableCloseIcon:!1},r("div",{className:"_2jAVeUdm"},r("div",{className:"_1Yzw2iGZ"},r(j,{onComplete:t,closerForError:l,onSkip:P,trackingModule:"Social_onboarding_gatedaction",allowSkip:!1}))));if(i)return r(s,null);if(d.fetching)return null;if(d.error&&d.error.message,d.data){var o=d.data.getTermOfUseAcceptanceInfo&&d.data.getTermOfUseAcceptanceInfo.accepted,c=d.data.insightProfile&&d.data.insightProfile.uiCardsState;return o&&c&&c.states.find(e=>"ONBOARDING_CONFIRM_USER"===e.id&&"COMPLETED"===e.state)?(t(),null):r(s,null)}return r(s,null)};return[()=>{(g=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInsightProfileCardAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taUnique"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CardTypeEnumInput"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardAction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionTypeEnumInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInsightProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"taUnique"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taUnique"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uiCardActions"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"cardAction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardAction"}}}]}]}}]}}]}}],"directives":[]}]}}],"loc":{"start":0,"end":341}}')).__key=84143604577967,g.loc.source={body:"4c8735a936af"},(S=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInsightProfileCardState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taUnique"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CardTypeEnumInput"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardStateEnumInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInsightProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"taUnique"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taUnique"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uiCardsState"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardState"}}}]}]}}]}}]}}]}}],"directives":[]}]}}],"loc":{"start":0,"end":338}}')).__key=0xd9cac6b55180,S.loc.source={body:"d9cac6b55180"},y=new Set,O=new Set,(I=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmUsernameComplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardTypeEnumInput"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardStateEnumInput"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newlyAccepted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInsightProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uiCardsState"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardState"}}}]}]}}]}}]}}]}}],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"acceptTermsOfUse"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newlyAccepted"}}}]}]}]}}],"loc":{"start":0,"end":306}}')).__key=91262139175354,I.loc.source={body:"53009f6311ba"},(V=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UsernameValidation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMemberProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"displayName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"memberProfile"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userId"},"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":279}}')).__key=0xee1ac4643d1b,V.loc.source={body:"ee1ac4643d1b"},(T=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ConfirmUsernameQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userIds"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userId"},"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"insightProfile"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uiCardsState"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getTermOfUseAcceptanceInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accepted"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":324}}')).__key=0x91ddabc43dcf,T.loc.source={body:"91ddabc43dcf"},(D=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckUsernameQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkUsername"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":111}}')).__key=0xcf7cb2baf18b,D.loc.source={body:"cf7cb2baf18b"},(A=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TermsOverlay"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insightProfile"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uiCardsState"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getTermOfUseAcceptanceInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accepted"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":175}}')).__key=53646596748677,A.loc.source={body:"30ca9257b585"},R.defaultProps={forceTermsOfUse:!1},e("default",R),e("TermsOverlayQuery",A)},[e=>(i=e.useContext,n=e.useCallback,d=e.useState,t=e.useMemo,l=e.useEffect,r=e.createElement),e=>(s=e.useMutation,u=e.useQuery),e=>m=e.default,e=>o=e.LoadingSpinner,e=>(c=e.default,k=e.useLocalize),e=>v=e.default,e=>N=e.default,e=>(p=e.Visitor,_=e.Device),e=>b=e.useGARecorder,e=>f=e.useDebouncedQuery]]},["cDcdfi","5X2em-","O8LbtK","V08PS7","0DsHEV","XS7t-Q","eFikmI","2R4xv2","fsml46","OnmvvE"]]);
