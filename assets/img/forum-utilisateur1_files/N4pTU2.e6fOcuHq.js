(this.$WP=this.$WP||[]).push(["N4pTU2",(e,t)=>{"use strict";var a,r,o,i,n,s,l,u,p,d,c,v,g,h,f,m,b,w,y,P,O,k,j,R,I,C,N,S,T,L,M,x,$,E,U;function B(e){var t,a=t=>r(k,null,({route:a,navigate:o,previousRoute:i,popping:n})=>r(e,{popping:n,route:a,previousRoute:i,navigate:o,props:t}));return a.displayName=`withRouteContext(${t=e,t.displayName||t.name||"UnnamedComponent"})`,a}function H(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}var _=e=>(t,a)=>{var{tripModal:r}=a,o=H(a,["tripModal"]);if("object"==typeof r){var{title:i,id:n,scrollToReference:s}=r;if(n){var l="Trips/"+n;return i&&(l+="/"+encodeURIComponent(i)),s&&s.type&&s.id&&(l+=`?type=${s.type}&id${s.id}`),{path:l}}}return e(t,o)},W=e=>({path:e}),A=e=>{var t={preloadForumPostIds:[],preloadLinkPostIds:[],preloadPhotoIds:[],preloadMediaBatchIds:[],preloadRepostIds:[],preloadReviewIds:[],preloadVideoIds:[]};if(!e)return t;var a=e.split("_"),r=Number(a[1]);if(!isNaN(r))switch(a[0]){case"ForumPost":t.preloadForumPostIds=[r];break;case"LinkPost":t.preloadLinkPostIds=[r];break;case"Photo":t.preloadPhotoIds=[r];break;case"Repost":t.preloadRepostIds=[r];break;case"Review":t.preloadReviewIds=[r];break;case"Video":t.preloadVideoIds=[r];break;case"MediaBatch":t.preloadMediaBatchIds=[r]}return t},V=e=>{var{modal:t,card:a}=e;return t?A(t):a?A(a):{preloadForumPostIds:[],preloadLinkPostIds:[],preloadPhotoIds:[],preloadMediaBatchIds:[],preloadRepostIds:[],preloadReviewIds:[],preloadVideoIds:[]}},D=e=>({username:e}),F=(e,t)=>({tripId:e,tripTitle:t}),G=(e,{tripId:t})=>{var a=e;return t&&(a+="/"+t),{path:a}},z=e=>({tripId:e}),J=/^([^-]+)-(.*)$/,Q=/\.([a-z]*[_|.])?(?:html|xml)$/,Y=(e,...t)=>{var a,r,o=J.exec(e),i={};if(o&&(i={page:o[1]},o[2])){var n=(a=o[2],((r=Q.exec(a))&&r.index?a.substring(0,r.index):a).split("-").filter(e=>null!==e&&""!==e).map(e=>{var t,a=null,r=null;if(e.length>=3&&(e.startsWith("zf")||e.startsWith("zu")||e.startsWith("zr")||e.startsWith("zs")))a=e.substring(0,3),r=e.substring(3);else{if(a=e.substring(0,1),r=e.substring(1),(t=a)&&t===t.toUpperCase()&&t!==t.toLowerCase()||(e=>!isNaN(parseInt(e,10)))(a)||"_"===a)return null;a=(e=>{switch(e){case"g":return"geo";case"d":return"detail";default:return e}})(a)}return{key:a,value:r}}).reduce((e,t)=>{if(t&&null!==t.key&&""!==t.key&&null!==t.value){var a={};return a[t.key]=t.value,Object.assign({},a,{},e)}return e},{}));i=Object.assign({},n,{},i)}var s=t?t.filter(e=>""!==e):void 0;return s&&s.length?Object.assign({page:e},i,{nonEmptyPathParams:s}):Object.assign({page:e},i)},q=/^\/([^?]+)(?:\?(.*))?$/,K=/Tourism-g(\d+)/g,X=e=>{var{page:t}=e,a=H(e,["page"]),r=(C[t]||C.default)(t,a),{path:o}=r,i=H(r,["path"]),n=o;i.nonEmptyPathParams&&i.nonEmptyPathParams.length&&i.nonEmptyPathParams[0].match(K)&&(n=i.nonEmptyPathParams.shift(),i.nonEmptyPathParams.length||(i.nonEmptyPathParams=void 0));var s=Object.keys(i).filter(e=>void 0!==i[e]).reduce((e,t)=>(e[t]=i[t],e),{}),l=new URLSearchParams(s).toString();return`/${n}${l.length?"?":""}${l}`},Z=e=>{var t,a,[,r,o]=q.exec(e)||[null,"",""],[...i]=r.split("/"),n=e.match(K);if("/"===e)a="Home";else if(n&&n.length>0)a=n[0].replace("Tourism","Home");else{if(!r)return null;a=i.shift()}var s=N[a];return t=s?Object.assign({page:a},s(...i)):Object.assign({},N.default(a,...i)),new URLSearchParams(o).forEach((e,a)=>{t[a]=e}),t},ee=["Profile","Trips","Owners","BrandOwners","ManageShopping","SpecialOfferWebview","HotelsManagementCenter","HotelsManageListing","SafetyManagementCenter","FavoriteReviewManagement","OwnerVerification","SpecialOfferManagement","ViewAchAuthorization","Starter_Packages"],te=(e,t=ee)=>t.includes(e.page),ae=(e,t,a=ee)=>e.page===t.page||te(e,a)&&te(t,a),re=({href:e,to:t,target:a,onClick:o,children:i,className:n,activeClassName:s,title:l,label:u,dataAttributes:p,stripNoreferrerNoopener:d,dir:c})=>{var v=t&&void 0===e?X(t):e,g="_blank"!==a||d?null:"noopener noreferrer";return r(k,null,({navigate:e,route:s})=>r("a",Object.assign({rel:g,href:v,target:a,onClick:a=>{o&&o(a),0!==a.button||a.isDefaultPrevented()||e&&t&&ae(s,t)&&e(t)&&a.preventDefault()},className:n,title:l,"aria-label":u},(e=>{var t={};return e&&Object.getOwnPropertyNames(e).forEach(a=>{t["data-"+a]=e[a]}),t})(p),Object.assign({},c?{dir:c}:null)),i))},oe=(e,t)=>Object.keys(t).reduce((a,r)=>{return a&&((o=t[r])===(i=e[r])||"function"==typeof o&&o(i));var o,i},!0),ie=e=>{var{route:t,navigate:a}=o(P),r=Object.assign({},t,{},e),n=oe(t,Object.entries(e).reduce((e,[t,a])=>Object.assign(e,{[t]:e=>p(a,e)}),{})),s=Object.assign({},t);Object.keys(e).forEach(e=>{delete s[e]});var l=i(()=>{a(r)},[a,r]),u=i(()=>{var e,t;null!=(null==(e=window)||null==(t=e.history)?void 0:t.state)?window.history.back():a(s)},[a,s]);return{matches:n,to:r,without:s,open:l,close:u}},ne=e=>{var{mobileTarget:t,viewportCategory:a}=e,o=H(e,["mobileTarget","viewportCategory"]),i="MOBILE"===a&&t?t:o.target;return r(re,Object.assign({},o,{target:i}))},se=e=>{var{route:t,props:{children:a}}=e,r=H(e.props,["children"]);return oe(t,r)&&a||null},le=(e,t)=>Object.keys(t).length===Object.keys(e).length&&Object.keys(t).reduce((a,r)=>a&&e[r]===t[r],!0),ue=e=>{var{route:t,props:{children:a}}=e,r=H(e.props,["children"]);return le(t,r)&&a||null},pe=["Trips","TripsWebview","Owners","BrandOwners","HotelsManagementCenter","DestinationArticle","HotelsManageListing","SafetyManagementCenter"],de={},ce=(e,t)=>t.exact&&le(e,t.exact)||t.match&&oe(e,t.match),ve=(e,t,a)=>d(e=>({currentRoute:e.route}))(((e,t,a)=>{var o=new Map,i=e=>{var t,a;return o.has(e)||o.set(e,(t=e.component,{loadable:a=new h(t),component:()=>r(f,{component:a})})),o.get(e)},n=({currentRoute:t})=>{var o=e.filter(e=>ce(t,e)).map((e,t)=>r(i(e).component,{key:t}));return r(k,null,e=>r(O,{value:Object.assign({},e,{navigate:(t,a={})=>e.navigate(t,Object.assign({},a))})},r(a||s,null,o)))};return n.stage=(...t)=>{e.filter(e=>ce(v().getState().route,e)).forEach(e=>{var a=i(e);a.loadable.isLoaded()&&("function"==typeof a.loadable.stage&&a.loadable.stage(...t),"function"==typeof a.loadable.get().stage&&a.loadable.get().stage(...t))})},n.ssrQueries=t=>{var a=[];return e.filter(e=>ce(t.route,e)).forEach(e=>{var{loadable:t}=i(e);if(t.isLoaded()){var r=t.getSsrQueries();"function"==typeof r&&a.push(r)}}),0!==a.length?a.map(e=>e(t)):null},n})(e,0,a)),ge=()=>{var{route:{detail:e}}=o(P);try{return parseInt(e,10)}catch(e){return m.error("Could not parse detail parameter as a number",e),null}},he=(e=(()=>!0))=>{var{addBeforeNavigationCallback:t,removeBeforeNavigationCallback:a}=o(P),[r,i]=l();if(u(()=>{var r=t=>!!e(t.to)&&(i(t),!0);return t(r),()=>a(r)},[e,t,a]),null!=r){var{to:n,continueNavigation:s}=r;return[n,()=>{i(null),s()},()=>{i(null)}]}return[null,()=>{},()=>{}]};return e("withRouteContext",B),[()=>{P=a({route:{},previousRoute:{},navigate:()=>{},addBeforeNavigationCallback:()=>{},removeBeforeNavigationCallback:()=>{},popping:!1}),({Provider:O,Consumer:k}=P),j=_((e,t)=>{var{modal:a,card:r,username:o,fid:i,geo:n,allowedTypes:s}=t,l=H(t,["modal","card","username","fid","geo","allowedTypes"]),u="",p=["LinkPost","ForumPost","Repost","Review","Photo","Video"],d=l,c=i;if(o&&"string"==typeof o){if(a&&"string"==typeof a){var v=a.split("_");u=p.includes(v[0])?`Profile/${o}/${v.join("/")}`:`Profile/${o}/${a}`,c=void 0}else if(!("tab"in l)&&r&&"string"==typeof r){var g=r.split("_");p.includes(g[0])?u+=`Profile/${o}/${g.join("/")}`:u+=`Profile/${o}/${r}`}}else n&&(u+="Home-g"+n);return c&&(d.fid=i),s&&(d.allowedTypes=s),Object.assign({path:u},d)}),R=_((e,t)=>{var{modal:a,card:r,username:o,fid:i}=t,n=H(t,["modal","card","username","feedIdToRestore","fid"]),s=e;o&&(s+="/"+o);var l=["LinkPost","ForumPost","Repost","Review","Photo","Video","MediaBatch"],u=n,p=i;if(a&&"string"==typeof a){var d=a.split("_");l.includes(d[0])?s+="/"+d.join("/"):s+="/"+a,p=void 0}else if(!("tab"in n)&&r&&"string"==typeof r){var c=r.split("_");l.includes(c[0])?s+="/"+c.join("/"):s+="/"+r}return p&&(u.fid=i),Object.assign({path:s},u)}),I=_((e,t)=>{var{tripId:a,tripTitle:r}=t,o=H(t,["tripId","tripTitle"]),i=e;return a&&(i+="/"+a,r&&(i+="/"+encodeURIComponent(r))),Object.assign({path:i},o)}),C={default:_((e,t)=>Object.assign({path:e},t)),Home:j,Profile:R,Trips:I,Saves:G},N={default:Y,Home:W,Profile:D,Trips:F,Saves:z},re.defaultProps={target:void 0,onClick:void 0,children:null,className:"",activeClassName:"",to:void 0,href:void 0,title:void 0,dataAttributes:void 0,stripNoreferrerNoopener:!1,dir:""},S=d(e=>({viewportCategory:e.meta.device.viewportCategory}))(ne),T=B(se),L=B(ue),M=new Set,e("Router$1",b=class extends n{constructor(...e){super(...e),this.state={previous:null}}record(e,t,a=!1){g({module:e.page,action:"SPA_NAVIGATION"}),"object"==typeof window&&window.history&&(a?this.state.previous?window.history.back():t?(window.history.replaceState(e,"",X(e)),this.setState({previous:Object.assign({},t)})):(window.history.replaceState(e,"",X(e)),this.setState({previous:Object.assign({},e)})):(window.history.pushState(e,"",X(e)),this.setState({previous:Object.assign({},t)})))}render(){var{route:e,navigate:t,children:a}=this.props;return r(O,{value:{popping:!1,previousRoute:null,route:e,addBeforeNavigationCallback:e=>M.add(e),removeBeforeNavigationCallback:e=>M.delete(e),navigate:(a,r)=>{var o,{noHistory:i,reset:n}=r||{},s=Object.assign({},e),l=!1,u=()=>{var r;i||ae(s,a)||(window.location=X(a),r=!0),t(a,X(a)),l&&window.history.back(),i||(pe.includes(a.page)&&pe.includes(e.page)&&a!==e&&window.scrollTo(0,0),r||this.record(a,s,n))};return o={to:a,continueNavigation:u},[...M].some(e=>e(o))?i&&(window.history.pushState(s,"",X(s)),l=!0):u(),!0}}},a)}}),x=d((e,t)=>Object.assign({},t,{route:e.route||{}}),{navigate:c.route.navigate})(b),e("History$1",w=class extends n{constructor(...e){super(...e),this.popState=e=>{var t,{state:a}=e;(null==(t=a)?void 0:t.params)||(a&&a.page||(a=Z(window.location.pathname+window.location.search)),a&&this.props.navigate(a,{noHistory:!0})||window.location.reload())}}componentDidMount(){window.addEventListener("popstate",this.popState);var e=window.location.hash,{lithiumRoute:t}=this.props;if(e&&!t.fragment){var a=Object.assign({},t,{fragment:e.substring(1)});this.props.navigateLithium(a)}}componentWillUnmount(){window.removeEventListener("popstate",this.popState)}render(){return null}}),$=d((e,t)=>{var a;return Object.assign({},t,{lithiumRoute:(null==(a=e.lithiumRoute)?void 0:a[0])||{}})},{navigateLithium:c.lithiumRoute.navigate})(w),E=B($),U={title:void 0,metaTags:[],canonicalUrl:void 0,openGraphInfo:void 0},e("HeadProperties",y=class extends n{constructor(...e){super(...e),this.state={isMounted:!1}}static getCurrent(){return U}componentDidMount(){this.setState({isMounted:!0})}render(){if(this.state.isMounted)this.props.title&&(document.title=this.props.title);else{if(U.title=this.props.title||U.title,this.props.metaTags){var e=U.metaTags||[];this.props.metaTags.forEach(t=>{var a=JSON.stringify(t);a in de||(de[a]=!0,e.push(t),U.metaTags=e)})}U.canonicalUrl=this.props.canonicalUrl||U.canonicalUrl,U.openGraphInfo=this.props.openGraphInfo||U.openGraphInfo}return null}}),y.defaultProps={title:void 0,metaTags:void 0,canonicalUrl:void 0,openGraphInfo:void 0},e({Exact:L,HeadProperties:y,History:E,Link:re,Match:T,ResponsiveTargetLink:S,RouteConsumer:k,RouteContext:P,RouteProvider:O,Router:x,StaticLoadableRoutes:ve,applyPredicates:ce,buildUrl:X,canNavigate:ae,exact:le,getPreloadIds:V,isRoutable:te,match:oe,parseUrl:Z,useBeforeNavigation:he,useLocationDetail:ge,useRouteState:ie,withRouteContext:B})},[e=>(a=e.createContext,r=e.createElement,o=e.useContext,i=e.useCallback,n=e.Component,s=e.Fragment,l=e.useState,u=e.useEffect),e=>p=e.default,e=>d=e.connect,e=>(c=e.actions,v=e.getStore),e=>g=e.default,e=>(h=e.Loadable,f=e.Load),e=>m=e.default]]},["cDcdfi","YwNsO_","h74DsO","aunxON","Jk5sjx","asW43G","4LU1Ax"]]);