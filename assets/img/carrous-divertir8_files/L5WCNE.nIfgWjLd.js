(this.$WP=this.$WP||[]).push(["L5WCNE",(e,i)=>{"use strict";var a,r,l,o,_,t,d,n,s,p,c,E,I,m,O,R,T,u,N,b=({value:e,selected:i,labelText:r,onSelect:l,children:o})=>a("div",{className:"_32ZufFp4"},a(n,{designSystemStyle:!1,value:e,selected:i,onSelect:l,label:a("span",{className:i?"cX9pI1Xe":"_1ugkkg7h"},r)}),a("div",{className:"BZDCmin_"},i&&o)),v=e=>{var i=e.label;i||(i=e.required?a(c,{id:"social_report_level2_6b"}):a(E,{id:"social_report_level2_5"}));var r,l,o,_=(r=e.required,l=e.minLength,o=e.maxLength,r?a("div",{className:"_29KgpxJJ"},a(c,{id:"ur_rd_0characterminimum",args:{0:l}})," / ",a(c,{id:"ur_rd_0charactermaximum",args:{0:o}})):null);return a("div",{className:e.className},a("div",{className:"_261rmpag"},i),a(p,{className:"_1CnuqPVr",value:e.value,onChange:e.onChange,maxLength:e.maxLength}),_)},L=()=>{throw new Error("This reason does not have a label")},P=e=>u[e],A=e=>u[e].id<0,f=()=>a("div",{className:"_3JyyU5GO"},a("p",{className:"_2cbIEE_M",style:{textAlign:"center"}},a(c,{id:"social_report_ty2"})," "),a("p",{className:"o74-RvSL"},a(c,{id:"social_report_ty2b"})," ")),S=()=>a("div",{className:O("_3QCXkQou","n3QmS_jU")},a(c,{id:"social_report_prof_err"})," "),h=({stage:e,onClose:i,children:r})=>a(I,{header:a(m,{iconName:"flag",displayType:"LEFT_ALIGN_GRAY"},a("div",{id:"ReportIAP"},a(c,{id:"report_problem_ffffff85"}))),onClose:i},"thankyou"===e&&a(f,null),"error"===e&&a(S,null),"panel"===e&&a("div",{className:"_2KwWSEyW"},a(s,{name:"ReportIAP",labelId:"ReportIAP"},r))),g={ForumPost:"FORUMPOST",Review:"USERREVIEW",ManagementResponse:"USERREVIEW",Photo:"MEDIA",Video:"MEDIA",Trip:"2",LinkPost:"1",Repost:"3",Profile:"4",LocationTopic:"LOCATION_TOPIC",LocationPosting:"LOCATION_POSTING"},y=e=>{var[i,a]=o("panel"),t=(({contentType:e,contentId:i,submission:a})=>{var{securityToken:o}=l(R);return r(()=>{if(!a)return Promise.reject(new Error("No submission data!"));var r=g[e],l=new URLSearchParams([["action","reportIAP"],["step","SAVE"],["contentId",i],["voteContentType",r],["comment",a.comment],["reasonId",""+P(a.reason).id]]);if(a.suggestedLocationId&&l.set("suggestedLocationId",""+a.suggestedLocationId),N.has(r))return((e,i)=>fetch(e,{cache:"no-cache",credentials:"same-origin",method:"POST",redirect:"follow",headers:{"X-Requested-By":i}}))("/ReportIAP?"+l.toString(),o);throw new Error("Only legacy inputs are supported through the Lithium-ported iat-reporting! Feel free to add the remaining ones from public.iat-reporting")},[e,i,o,a])})(e);return _(()=>[i,()=>t().then(()=>{a("thankyou")}).catch(()=>{a("error")})],[i,t])},C=(e,i)=>{if("changeReason"===i.type)return{selected:i.payload.reason,validator:i.payload.validator,form:e.form};if("modifyBody"===i.type&&e.selected)return{selected:e.selected,validator:e.validator,form:Object.assign({},e.form,{[e.selected]:i.payload})};throw new Error(`Tried to dispatch action type ${i.type} that does not exist`)},w=e=>{var[i,a]=t(C,{selected:e?e.reason:null,validator:e&&e.validator,form:{}});return _(()=>{var e=i.selected&&i.form[i.selected]||{comment:void 0};return[{selected:i.selected,disabled:!i.selected||i.validator&&!i.validator(e),form:e},a]},[i])},M=(e,i)=>_(()=>e?{reason:e,comment:i.comment||""}:null,[e,i]),F=({onBack:e})=>a(T,{legacyStyled:!0,variant:"secondary",onClick:e,fullWidth:!0},a(c,{id:"com_fyf_p2_011"})," "),D=({disabled:e,onBack:i,onSubmit:r})=>{var o="MOBILE"===l(R).viewportCategory;return a(d,null,o&&a("div",{className:"hlrQZ1JM"},a(T,{legacyStyled:!0,disabled:!0},null)),a("div",{className:O("_3g8GjfUU",o&&"_1OU-RYIJ")},i&&a("div",{className:"vgGkKfJ9"},a(F,{onBack:i})),a("div",{className:"vgGkKfJ9"},a(T,{legacyStyled:!0,variant:"primary",disabled:e,onClick:r,fullWidth:!0},a(c,{id:"common_Submit"})))))},G=(e,i)=>r(a=>{var r=(a.comment||"").trim();return!(r.length>i||r.length<e)},[e,i]),U=({selected:e,reason:i,comment:r="",dispatch:l,minLength:o=0,maxLength:_=250})=>{var t=G(o,_);return a(b,{value:i,selected:e===i,labelText:P(i).label,onSelect:()=>{l({type:"changeReason",payload:{reason:i,validator:t}})}},a(v,{value:r,onChange:e=>{l({type:"modifyBody",payload:{comment:e.currentTarget.value}})},minLength:o,maxLength:_,required:!!o}))},W=({selected:e,reason:i,dispatch:r,children:l})=>a(b,{value:i,selected:e===i,labelText:P(i).label,onSelect:()=>{r({type:"changeReason",payload:{reason:i,validator:()=>!1}})}},l);return[()=>{v.defaultProps={required:!1,label:"",minLength:10,maxLength:250,className:null},u={DUPLICATE_CONTENT:{id:5,label:a(E,{id:"social_report_reason_photos2"})},WRONG_LOCATION:{id:6,label:a(c,{id:"report_review_radio_8"})},CLOSED:{id:8,label:a(c,{id:"report_review_radio_21"})},OTHER:{id:9,label:a(c,{id:"report_review_radio_19"})},WRITTEN_BY_COMPETITOR:{id:19,label:a(c,{id:"report_review_radio_10"})},OWNER_RESPONSE:{id:21,label:a(L,null)},INAPPROPRIATE:{id:22,label:a(c,{id:"report_review_radio_9"})},NOT_ORIGINAL_REVIEW:{id:24,label:a(c,{id:"report_review_radio_16"})},NOT_TRAVELERS_OWN:{id:25,label:a(c,{id:"report_review_radio_13"})},PROMOTIONAL:{id:27,label:a(c,{id:"report_review_radio_24"})},REVIEW_NOT_CONSISTENT_WITH_RATING:{id:30,label:a(c,{id:"report_review_radio_12_ver_2"})},LOW_QUALITY:{id:31,label:a(c,{id:"iap_low_quality_ffffe4e2"})},COPYRIGHT_VIOLATION:{id:32,label:a(E,{id:"social_content_report_copyright_violation"})},BIASED:{id:37,label:a(c,{id:"report_review_radio_20"})},MORE_THAN_1_YEAR_AGO:{id:38,label:a(c,{id:"report_review_radio_11"})},CONTAINS_PRIVATE_INFO:{id:41,label:a(c,{id:"report_review_radio_18"})},PROFANE_EXPLICIT_HATE_SPEECH:{id:42,label:a(c,{id:"iap_profane_explicit_or_hate_speech"})},LINK_INCORRECT_OUTDATED_BROKEN:{id:43,label:a(c,{id:"iap_link_incorrect_outdated_broken"})},NOT_PERSONAL_EXPERIENCE:{id:45,label:a(c,{id:"iap_not_personal_experience"})},FALSE_MISLEADING_INFO:{id:46,label:a(c,{id:"iap_false_misleading_info"})},PROMOTES_ILLEGAL_ACTIVITY:{id:47,label:a(c,{id:"iap_promote_illegal_activity"})},PARTICIPATION_ILLEGAL_ACTIVITY:{id:48,label:a(c,{id:"iap_participate_illegal_activity"})},LINK_ILLEGAL_ACTIVITY:{id:50,label:a(c,{id:"iap_link_illegal_activity"})},SELF_PROMOTION_ADVERTISEMENT_SOLICITATION:{id:51,label:a(c,{id:"iap_forums_self_promotion"})},OFF_TOPIC:{id:52,label:a(c,{id:"iap_forums_off_topic"})},SPAM:{id:53,label:a(c,{id:"iap_forums_spam"})},DUPLICATE_FORUM:{id:54,label:a(c,{id:"iap_forums_duplicate"})},HARASSMENT:{id:55,label:a(c,{id:"iap_forums_harassment"})},PROFANITY_SEX_VIOLENCE_CRIME_HATE:{id:56,label:a(c,{id:"iap_forums_profanity_sex_violence_crime_hate"})},MULTIPLE_ACCOUNTS_OR_IMPERSONATION:{id:57,label:a(c,{id:"iap_forums_multiple_accounts_or_impersonation"})},PERSONAL_INFO:{id:58,label:a(c,{id:"iap_forums_personal_info"})},COPYRIGHTED:{id:59,label:a(c,{id:"iap_forums_copyrighted"})},TRIP_COPYRIGHT:{id:60,label:a(c,{id:"iap_trips_copyrighted"})},TRIP_NOT_TRAVEL_RELATED:{id:61,label:a(c,{id:"iap_trips_not_travel_related"})},TRIP_ERROR_OR_DISAGREE:{id:62,label:a(c,{id:"iap_trips_error_or_disagree"})},PROFILE_PROBLEM_WITH_PHOTO:{id:63,label:a(c,{id:"iap_profile_problem_with_pic"})},PROFILE_PROBLEM_WITH_LINK:{id:64,label:a(c,{id:"iap_profile_problem_with_link"})},PROFILE_IAP_USERNAME:{id:65,label:a(c,{id:"iap_profile_username"})},PROFILE_IAP_CONTRIBUTION:{id:66,label:a(c,{id:"iap_profile_contribution"})},PROFILE_PROBLEM_MY_ACCOUNT:{id:67,label:a(c,{id:"iap_profile_problem_my_account"})},PROFILE_UNWANTED_MESSAGE:{id:68,label:a(c,{id:"iap_profile_unwanted_messages"})},REPORT_THIS_REVIEW:{id:-1,label:a(c,{id:"report_review_radio_1"})},UPDATE_BUSINESS_DETAILS:{id:-2,label:a(c,{id:"report_review_radio_2"})},REPORT_BUSINESS_CLOSED:{id:-3,label:a(c,{id:"report_review_radio_3"})},EDIT_REMOVE_RESPONSE:{id:-4,label:a(c,{id:"report_review_radio_4"})},REPORT_OWNER_CHANGED:{id:-5,label:a(c,{id:"report_review_radio_5"})},REPORT_PHOTO:{id:-6,label:a(c,{id:"report_review_radio_6"})},REMOVE_LISTING:{id:-7,label:a(c,{id:"report_review_radio_7"})},DISAGREE_WITH_INFO:{id:-8,label:a(c,{id:"report_review_radio_17"})}},N=new Set(["USERREVIEW","MEDIA","LOCATION_TOPIC","LOCATION_POSTING"]),e({CommentBox:v,CommentOption:U,RedirectOption:W,ReportIAPRadio:b,ReportModal:h,SubmitVoteButton:D,forLabel:P,isOwnerReason:A,useFormToSubmission:M,useLengthValidator:G,useReportFlow:y,useReportForm:w})},[e=>(a=e.createElement,r=e.useCallback,l=e.useContext,o=e.useState,_=e.useMemo,t=e.useReducer,d=e.Fragment),e=>(n=e.RadioButton,s=e.RadioGroup),e=>p=e.TextArea,e=>(c=e.default,E=e.UnsafeLocalize),e=>I=e.default,e=>m=e.TitleBar,e=>O=e.default,e=>R=e.Device,e=>T=e.default]]},["cDcdfi","da35lQ","9lPTHX","0DsHEV","O8LbtK","6nM-E7","jSLlaY","2R4xv2","eFikmI"]]);