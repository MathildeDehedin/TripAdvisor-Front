(this.$WP=this.$WP||[]).push(["ui0Mdg",(e,i)=>{"use strict";var t,n,a,r,s,o,l,d,c,m,u,p,k,_,v,h,f,b,y,N,g,S,T,I,P={sms:19907,email:55593,clipboard:19905},C=({url:e,itemType:i,itemId:n,action:a,type:r,children:s})=>t(c,{useSpan:!0,module:"ShareCta",action:a,context:`${i}|${n}|${e}`,once:!1,value:r&&"repost_action"!==r?P[r]:void 0},s(r&&"repost_action"!==r?(t=>{if("LinkPost"===i)return e;var n=`${-1!==e.indexOf("?")?"&":"?"}m=${t}`;return-1!==e.indexOf("#")?e.replace("#",n+"#"):`${e}${n}`})(P[r]):e)),x=({iconName:e,localizedText:i,onClickFunction:n,imgCdnUrl:o,size:l})=>t("li",{onClick:n,className:a("ui_link","_2FTn-icv",{_3PFFOrqN:"small"===l,_3tDj7x7I:"large"===l,_37rH9U91:r("cx_brand_refresh_degreen")})},e.startsWith("/")?t("img",{src:`${o}${e}`,className:a("_3O4AtFn4",{_3PFFOrqN:"small"===l,_3tDj7x7I:"large"===l})}):t(s,{name:e,className:a("_1ojsbMfB",{_3PFFOrqN:"small"===l,_3tDj7x7I:"large"===l,"_3hXFMk-w":r("cx_brand_refresh_degreen")})}),t("span",null,i)),D=({url:e,itemType:i,size:n})=>{var a;return a=o("LinkPost"===i?"share_sms_link":"ReadTrip"===i?"trips_share_email_subject":"WriteTrip"===i?"trips_collaborate_invite_email_subject":"link_share_sms_checkthisout"),t(b,{iconName:"text-message-fill",localizedText:o("link_share_option_sms"),size:n,onClickFunction:()=>((e,i)=>{var t=`${i} ${e}`;t.length>140&&(t=e),window.location.href="sms:?&body="+encodeURIComponent(t)})(e,a)})},w=["Restaurant_Review","Attraction_Review","MobileAttraction_Review","AttractionProductReview","MobileAttractionProductReview","Hotel_Review","MobileHotel_Review"],A=({url:e,subject:i,firstSentence:n,textBeforeLink:a,textAfterLink:r,size:s})=>t(b,{iconName:"email",localizedText:o("link_share_option_email"),size:s,onClickFunction:()=>((e,i,t,n,a)=>{var r=encodeURIComponent(e),s=encodeURIComponent(n),l=encodeURIComponent(a),d=encodeURIComponent(i||o("share_email_subject")),c=`${t||o("link_share_sms_checkthisout")}%0D%0A%0D%0A${s?s+"%0D%0A":""}${r}%0D%0A${l?l+"%0D%0A":""}%0D%0A${o("ib_share_booking_download_app")}%0D%0A${o("app_download_url_secure")}`;window.location.href=`mailto:?subject=${d}&body=${c}`})(e,i,n,a,r)}),F=e=>{if(w.indexOf(e.itemType)>-1)return t(u,{query:y,variables:{locationId:e.itemId}},({fetching:i,data:n})=>{if(i||!n)return t(A,e);var a=n.locations[0]&&n.locations[0].name||"";return t(A,Object.assign({},e,{subject:o("link_share_email_subject",{0:a}),firstSentence:o("mobile_here_is_a_place_i_found_8e0"),textBeforeLink:a}))});if("Review"===e.itemType)return t(u,{query:N,variables:{reviewId:e.itemId}},({fetching:i,data:n})=>t(A,i||!n?e:Object.assign({},e,{firstSentence:o("share_email_reviews"),textBeforeLink:n.reviews[0]&&n.reviews[0].title||""})));if("Photo"===e.itemType)return t(u,{query:g,variables:{id:e.itemId}},({fetching:i,data:n})=>t(A,i||!n?e:Object.assign({},e,{firstSentence:o("share_email_photos"),textBeforeLink:n.photos[0]&&n.photos[0].caption||""})));if("Video"===e.itemType)return t(u,{query:S,variables:{id:e.itemId}},({fetching:i,data:n})=>t(A,i||!n?e:Object.assign({},e,{firstSentence:o("share_email_videos"),textBeforeLink:n.videos[0]&&n.videos[0].caption||""})));if("LinkPost"===e.itemType)return t(A,Object.assign({},e,{subject:o("share_email_link_subject"),firstSentence:o("share_email_link"),textAfterLink:o("share_email_link_attribution")}));if("ForumPost"===e.itemType)return t(A,Object.assign({},e,{firstSentence:o("share_email_forumtopic")}));if("ForumResponse"===e.itemType)return t(A,Object.assign({},e,{firstSentence:o("share_email_forumreply")}));if("WriteTrip"===e.itemType||"ReadTrip"===e.itemType){var i="WriteTrip"===e.itemType;return t(u,{query:T,variables:{id:e.itemId}},({fetching:n,data:a})=>{var r=e;if(!n&&a){var s=a.trips&&a.trips.find(i=>i.id===e.itemId),l={tripName:s&&s.title||""},d=p(s);r=Object.assign({},e,{firstSentence:o("trips_share_email_hey"),subject:o("trips_share_email_subject"),textBeforeLink:o("trips_share_email_body_v2",l)}),i?(r.subject=o("trips_collaborate_invite_email_subject"),r.textBeforeLink=o(d?"trips_collaborate_invite_email_body_v2":"trips_collaborate_invite_email_body_collaborator_version",l)):d||(r.subject=o("trips_share_email_subject"),r.textBeforeLink=o("trips_email_share_collaborator_version",l))}return t(A,r)})}return t(A,e)},j=({itemType:e,repostProps:i})=>"Repost"===e?t(v,{modalName:i.modalName,repostPreviewProps:i.repostPreviewProps,originalRepostReference:i.originalRepostReference,actor:i.actor,socialStatistics:i.socialStatistics,onClick:i.onClick,styleAsShareListItem:!0,openRepostModalAsLocal:!0}):"Video"===e||"Photo"===e||"Review"===e||"LinkPost"===e||"MediaBatch"===e||"ForumPost"===e||"ForumResponse"===e||"NotMyTrip"===e||"ReadTrip"===e||"WriteTrip"===e?t(v,{modalName:i.modalName,repostPreviewProps:i.repostPreviewProps,actor:i.actor,socialStatistics:i.socialStatistics,onClick:i.onClick,styleAsShareListItem:!0,openRepostModalAsLocal:!0}):null,O=({url:e,itemType:i,itemId:n,viewportCategory:s,headerComponent:o,repostProps:l})=>t("div",{className:a("_1_PP_-vo",r("hr_dark_green_icons")?"_1qri0FFf":"")},o,"MOBILE"===s&&t(f,{action:"share_select",itemType:i,itemId:n,url:e,type:"sms"},e=>t(D,{url:e,itemType:i,size:"small"})),t(f,{url:e,itemType:i,itemId:n,action:"share_select",type:"email"},e=>t(F,{url:e,itemType:i,itemId:Number(n),size:"small"})),t(f,{action:"share_select",itemType:i,itemId:n,url:e,type:"clipboard"},e=>t(h,{url:e,size:"small"})),l&&t(j,{itemType:i,repostProps:l})),L=({fixed:e,url:i,itemType:n,itemId:a,shiftX:r,shiftY:s,children:o,headerComponent:l,alignEdge:d,repostProps:c,above:u})=>t(m,{local:!0,closeButton:!1,fixed:e,above:u,below:!0,alignEdge:d,shiftX:r,shiftY:s,shiftArrow:r,arrowType:"small",contents:()=>t(I,{url:i,itemType:n,itemId:a,headerComponent:l,repostProps:c})},o),R=({url:e,itemType:i,itemId:n,styleAsSocialAction:a,headerComponent:r,onClick:s,alignEdge:o,repostProps:d,above:c,shiftX:m,shiftY:u,hideText:p})=>t("div",null,t(L,{url:e,itemType:i,itemId:n,shiftX:m,shiftY:u,headerComponent:r,alignEdge:o,repostProps:d,above:c},(r,o)=>t(f,{itemType:i,itemId:n,url:e,action:"share_button_click"},()=>t(l,null,e=>t(V,{onClick:i=>{s&&s(i),e(i,"share"),o()},target:r,styleAsSocialAction:a,hideText:p}))))),V=({onClick:e,target:i,styleAsSocialAction:n,hideText:l})=>t("div",{onClick:e,className:a(n?"_1k12Q93K":"VamCTwf0",r("hr_dark_green_icons")?"_1k54sSqX":"")},t("span",{ref:i},t(s,{name:"share",className:a(n?"_3g9oGli4":"_3Mt7BKtu",{hu8pNNlN:r("cx_brand_refresh_degreen")})}),!l&&t("span",{className:n?a("ui_link","_3p1vOjv8","socialCTA"):"_128qlD0J"},o("link_share_share")," ")));return[()=>{C.defaultProps={type:null},f=d((e,i)=>({url:i.url.startsWith("/")?e.meta.baseUrl+i.url:i.url}))(C),x.defaultProps={onClickFunction:()=>!1},b=d(e=>({imgCdnUrl:e.meta.imageCdnUrl}))(x),(y=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoiDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":103}}')).__key=30493395597162,y.loc.source={body:"1bbbcc03376a"},(N=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ReviewDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":99}}')).__key=8049210694612,N.loc.source={body:"07521a581bd4"},(g=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PhotoDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"photoIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"id"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":86}}')).__key=0xf892e2b2908,g.loc.source={body:"0f892e2b2908"},(S=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VideoDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"videoIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"id"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":86}}')).__key=0x71275c1e8de7,S.loc.source={body:"71275c1e8de7"},(T=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TripDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trips"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tripIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"id"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isMe"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":117}}')).__key=0x7db41de4facd,T.loc.source={body:"7db41de4facd"},A.defaultProps={firstSentence:"",subject:"",textBeforeLink:"",textAfterLink:""},h=class extends n{constructor(...e){super(...e),this.state={copied:!1},this.copyAndClose=(e,i)=>{var t=_.copy(e);return t&&(this.setState({copied:!0}),setTimeout(()=>i(),3e3)),t}}render(){return t(k,null,e=>t(b,{iconName:"link",size:this.props.size,localizedText:this.state.copied?o("link_share_link_copied"):o("link_share_option_clipboard"),onClickFunction:this.state.copied?void 0:()=>this.copyAndClose(this.props.url,e)}))}},I=d((e,i)=>Object.assign({},i,{url:i.url.startsWith("/")?e.meta.baseUrl+i.url:i.url,viewportCategory:e.meta.device.viewportCategory}))(O),L.defaultProps={fixed:!1,shiftX:0,shiftY:0,headerComponent:null,alignEdge:"right"},R.defaultProps={styleAsSocialAction:!1,headerComponent:null,onClick:void 0,above:!1,shiftX:6,shiftY:4,hideText:!1},V.defaultProps={styleAsSocialAction:!1,hideText:!1},e({ShareCta:R,ShareDropdownMenu:I,SharePopover:L,ShareTarget:V,ShareTracker:f})},[e=>(t=e.createElement,n=e.Component),e=>a=e.default,e=>r=e.featureIsEnabled,e=>s=e.Icon,e=>o=e.localize,e=>l=e.InteractionLogger,e=>d=e.connect,e=>c=e.ClickTracker,e=>m=e.default,e=>u=e.Query,e=>p=e.isOwner,e=>k=e.Closer,e=>_=e.default,e=>v=e.RepostAction]]},["cDcdfi","jSLlaY","-i3PJS","_qQcW3","535agn","pZzSdK","h74DsO","Jk5sjx","eDFcUX","5X2em-","eFKnUp","pT-O8u","vLhQxP","5miaKe"]]);
