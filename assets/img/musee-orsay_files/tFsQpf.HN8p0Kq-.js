(this.$WP=this.$WP||[]).push(["tFsQpf",(e,a)=>{"use strict";var i,t,n,l,o,s,r,c,d,m,v,u,_,p=e=>{var a,l,{locale:{code:c}}=i(m),d="MOBILE"===i(v).viewportCategory,p=new Date(e.publishedDate).toLocaleDateString(c,{year:"numeric",month:"long",day:"numeric"}),g=e.locationName&&e.countryName?o("attractions_review_highlights_user_location",{0:e.username,1:e.locationName,2:e.countryName}):e.username,h=d?"small":"default";return t("div",{className:"cOu9LoMN"},t("div",{className:"_3Pmv5YNQ"},e.avatar?t(u,{size:h,photo:e.avatar}):t(u,{size:h})),t("div",{className:"_34xv3ODK"},t("div",{className:"_2s4btP95"},t(r,{onClick:e.onTitleClick,className:"P7OsWZid"},`"${e.snippetTitle}"`),t("div",null,(a=e.snippetText,l=e.onReadMoreClick,a.length>100?t(n,null,o("common_ellipsis",{0:""+a.substr(0,Math.min(a.length,100))}),t(r,{onClick:l,className:"_2Mmnxr49"},o("common_Read_more"))):s(a)))),t("div",{className:"_1wxungur"},t("div",{className:"_1g-HGylT"},t(_,{rating:e.rating})),t("div",{className:"_2NIA5WpD"},o("attraction_review_highlights_reviewed_date",{0:p}))),t("div",{className:"_3nHhXVMB"},g)))},g=(e,a,i,t)=>{c({module:"Highlight_Review",action:"Recent_snippet_more"});var n=document.getElementById("review_"+i)||document.querySelector(`[data-reviewid="${i}"]`);if(n){l(n,d,"smooth");var o=window&&window.require;if(!o)return;t&&o.defined("api-mod")&&o("api-mod").fireEvent(n,"review:expand",[n,i])}else window.location.href=`/ShowUserReviews-g${e}-d${a}-r${i}#REVIEWS`},h=e=>e.reviewSnippets?t("div",null,t("div",{className:"_1DF2iMar"},t("h2",null,o("mw_what_travelers_are_saying_ffffe27f"))),t("div",null,t("div",{className:"_2UmpOcoD"},t("div",{className:"_1gX8TgAy"},e.reviewSnippets.map(a=>t(p,{key:a.snippetText,snippetTitle:a.snippetTitle,snippetText:a.snippetText,url:a.url,avatar:a.avatar,rating:a.rating,username:a.username,locationName:a.locationName,countryName:a.countryName,publishedDate:a.publishedDate,onTitleClick:()=>g(e.geoId,e.locationId,a.reviewId,!1),onReadMoreClick:()=>g(e.geoId,e.locationId,a.reviewId,!0)})))),t("div",{className:"nLrfkeL_"})),t(r,{className:"BUbhnq1I",onClick:()=>((e,a)=>{c({module:"Highlight_Review",action:"Recent_snippet_title"});var i=document.getElementById("REVIEWS");i?l(i,d,"smooth"):window.location.href=`/ShowUserReviews-g${e}-d${a}#REVIEWS`})(e.geoId,e.locationId)},o("mw_see_all_reviews_ffffe27f"))):null;return[()=>{e("default",h)},[e=>(i=e.useContext,t=e.createElement,n=e.Fragment),e=>l=e.default,e=>(o=e.localize,s=e.unescaped),e=>r=e.Link,e=>c=e.default,e=>d=e.TAB_COMMERCE_NAV_OFFSET,e=>(m=e.Environment,v=e.Device),e=>u=e.Avatar,e=>_=e.BubbleRating]]},["cDcdfi","tnBMzW","535agn","N4pTU2","Jk5sjx","NbJixN","2R4xv2","Hgrhyo","QnohJ2"]]);
