(this.$WP=this.$WP||[]).push(["ptEueE",(e,t)=>{"use strict";var s,n,a,o,i,l,r,c,d,p,u,g,h,_,I,v,m,k,f,x,w=(e,t)=>{e&&fetch("/AnswersAjax",{credentials:"same-origin",method:"POST",body:s(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(t)},T=({locationId:e,topicId:t,text:s,requestValidation:n,onResponse:a})=>{if(s){var o={act:"ap",psttxt:s,tpcid:t,pid:-1,altsessid:n.altSessionId,token:n.csrfToken,lcid:e,"g-recaptcha-response":n.captchaResponse.token,geetest_challenge:n.captchaResponse.challenge,geetest_validate:n.captchaResponse.validate,geetest_seccode:n.captchaResponse.seccode,useJson:!0};w(o,a)}},q=({locationId:e,text:t,optIn:s,redirect:n,requestValidation:a,onResponse:o})=>{if(t){var i={act:s?"ats":"at",topicText:t,detail:e,pid:-1,optIn:s,altsessid:a.altSessionId,token:a.csrfToken,"g-recaptcha-response":a.captchaResponse.token,geetest_challenge:a.captchaResponse.challenge,geetest_validate:a.captchaResponse.validate,geetest_seccode:a.captchaResponse.seccode,redirect:n};w(i,o)}},R=({id:e,token:t,onResponse:s})=>{e&&w({act:"dp",pstid:e,token:t},s)},P=({id:e,token:t,onResponse:s})=>{e&&w({act:"dt",tpcid:e,token:t},s)},N=(e,t,s,n)=>{var o={altsessid:s.altSessionId||"",act:"av",pstid:t,vs:e,pid:-1,token:s.csrfToken,useJson:!0};w(o,n),a({module:"faq",action:"click",context:1===e?"upvote":"downvote"})},S=({postingId:e,requestValidation:t,onResponse:s})=>{N(1,e,t,s)},y=({postingId:e,requestValidation:t,onResponse:s})=>{N(-1,e,t,s)},L=({topic:e,query:t,children:s,expanded:n,newPostingId:a})=>{var i=!(!a||e.topPosting&&e.topPosting.id===a),l=e.topPosting?[e.topPosting]:[];return n||i?o(r,{query:t,variables:{fetchTopic:n,fetchPosting:i,topicId:n?e.id:null,postingId:a},errorPolicy:"all"},({loading:t,data:a})=>{if(t){var o=[e.topPosting];return i&&o.unshift(null),n&&o.push(...Array(e.postCount-1).fill(null)),s(o)}if(!a)return s(l);var r=i&&a.postings&&a.postings[0]?a.postings[0]:null,c=n&&a.topics&&a.topics[0]?a.topics[0].postings:l;return s(r?[r,...c.filter(e=>e&&e.id!==r.id)]:c)}):s(l)},b=({loggedInUserId:e,csrfToken:t,altSessId:s,call:n,isMobile:a,children:o})=>o(()=>{if(e)n({csrfToken:t,altSessId:s});else{var o={flow:"CORE_COMBINED",pid:-1,userRequestedForce:!0,onSuccess:()=>n({csrfToken:t,altSessId:s})};globalThis.require(["trjs!ta/registration/RegOverlay"],e=>e.showRegOverlay(null,null,a,o))}}),E=e=>o("ul",null,o("li",{className:"_310NxL7h"},d("qa_guidelines_relevant_visit",{loc_name:e.location.geoName})),o("li",{className:"_310NxL7h"},p(d("qa_guidelines_forums_new_tab",{forum_link:g({page:"ShowForum",g:e.location.parentGeoId})}))),o("li",{className:"_310NxL7h"},d("qa_guidelines_objective")),o("li",{className:"_310NxL7h"},d("qa_guidelines_links")),o("li",{className:"_310NxL7h"},p(d("qa_guidelines_adhere_new_tab",{help_link:"https://www.tripadvisorsupport.com/hc/articles/201996887"})))),O={guidelinesControl:"_3HUFkpRX",community:"_2UI5XzBF",linkText:"_2gYIFgqx"},A=({locationId:e,topicId:t,postingId:s,contentLanguage:a,pageLanguage:i,children:r})=>{if(a===i)return null;var c,d,p=(c=a)?c.replace(/^zh/,"zh-"):c,u=["toverlay",e,t,s,p,i].join("-");return d=s?`/MachineTranslation?g=0&d=${e}&t=${t}&lp=${s}&page=posting&sl=${p}&tl=${i}`:`/MachineTranslation?g=0&d=${e}&t=${t}&page=topic&sl=${p}&tl=${i}`,o(l,null,o(h,{name:u},r),o(_,{name:u},o(n,{url:d},({loading:e,data:t})=>e?o(I,null):o("div",{className:"h2nqWhkm",dangerouslySetInnerHTML:{__html:t}}))))};return[()=>{k={submitAnswer:T,submitQuestion:q,deleteAnswer:R,deleteQuestion:P,upVote:S,downVote:y},f=c((e,t)=>Object.assign({},t,{loggedInUserId:e.auth.loggedInUserId,csrfToken:e.auth.csrfToken,altSessId:e.auth.altSessId,isMobile:"MOBILE"===e.meta.device.viewportCategory}))(b),e("PostingGuidelinesLink",m=class extends i{constructor(...e){super(...e),this.state={expand:!1},this.openGuidelineOverlay=()=>{var{location:e}=this.props;__non_webpack_require__(["trjs!overlays/widgetoverlays"],t=>t.showLightbox("QA_POSTING_GUIDELINES",{locationId:e},{}))},this.toggleExpansion=()=>{this.setState(e=>({expand:!e.expand}))}}render(){var{theme:e,location:t,inlineExpansion:s}=this.props,{expand:n}=this.state,a=n?"caret-up":"caret-down";return o(l,null,o("div",{className:e&&O[e]||O.guidelinesControl,onClick:s?this.toggleExpansion:this.openGuidelineOverlay},o("span",{className:O.linkText},d("qa_posting_guidelines")),s?o(u,{name:a}):null),n?o(E,{location:t}):null)}}),m.defaultProps={theme:void 0,inlineExpansion:!1},A.defaultProps={postingId:void 0},x=c(e=>({pageLanguage:v(e)}))(A),e({AnswerProvider:L,AuthGated:f,PostingGuidelinesLink:m,TranslateModal:x,answersAjax:k})},[e=>(s=e.formEncode,n=e.AjaxRequest),e=>a=e.default,e=>(o=e.createElement,i=e.Component,l=e.Fragment),e=>r=e.Query,e=>c=e.connect,e=>(d=e.localize,p=e.unescaped),e=>u=e.Icon,e=>g=e.buildUrl,e=>h=e.Opener,e=>_=e.Modal,e=>I=e.LoadingSpinner,e=>v=e.contentLangFromState]]},["kBiZlJ","Jk5sjx","cDcdfi","MGkW-Q","h74DsO","535agn","_qQcW3","N4pTU2","pT-O8u","HKQFPT","V08PS7","QmAjD5"]]);
