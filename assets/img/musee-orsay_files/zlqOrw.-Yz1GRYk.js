(this.$WP=this.$WP||[]).push(["zlqOrw",(e,t)=>{"use strict";var o,a,s,i,l,r,n,c,_,p,d,m,v,k,u,C,b,S,y,g,h,w,f,N,M,E,I,T,O,L=({active:e,onClick:t,bookmarkSize:a,animated:s})=>o(v,{active:e,onClick:t,bookmarkSize:a,bookmarkStyle:"outline",decorated:!1,animated:s},e=>o("span",{className:"_1ULmbYr3"},e)),D=(e,t,a,s,i)=>{var l=t;switch(d("saves_hotspot_button")&&(l=()=>{var e=(new Date).getTime();k("saves_click_time_series",e,e-u,3),t()}),a){case"listing":return o(v,{active:e,onClick:l,bookmarkStyle:"stacked",bookmarkSize:"30"});case"responsive_review":case"forum_post":return"DESKTOP"===s?o(L,{active:e,onClick:l,bookmarkSize:"20"}):o(v,{active:e,onClick:l,bookmarkStyle:"outline",bookmarkSize:"24"});case"responsive_review_hotspot":return"DESKTOP"===s?o(L,{active:e,onClick:l,bookmarkSize:"20",animated:i}):o(v,{active:e,onClick:l,bookmarkStyle:"outline",bookmarkSize:"24",animated:i});case"mobile_review":return o(v,{active:e,onClick:l,bookmarkStyle:"outline",bookmarkSize:"24"});case"mobile_restaurant_review":return o(v,{active:e,onClick:l,vertical:!0,bookmarkStyle:"outline",bookmarkSize:"22",decorated:!1},e=>o("span",{className:"_1OX35TKy"},e));case"mobile_attraction_product_detail":return o(v,{active:e,onClick:l,bookmarkStyle:"stacked",bookmarkSize:"24"});default:return m.warn("Widget style not found: "+a),null}},P=({toastContent:e,durationMs:t,active:a,onClick:c})=>{var[_,p]=s(!1),[d,m]=i(M);l(()=>{N("reg_dialog").on("all_dismissed",()=>p(!0))},[]);var u=r(()=>{w({module:"saves_tooltip",action:"saves_tooltip_close"}),p(!1)},[]),C=r(()=>{w({module:"saves_tooltip",action:"saves_tooltip_displayed"}),k("saves_poptoast_trigger_time_series")},[]),b=o("div",{className:"_1K1DNQyM"},o("div",{className:"_1X9PsR1_"},o("div",{className:"rRckfkFc"},o("div",{className:"_38CYubng"},e)),o("div",{className:"_2KpJpoPY"},o("span",{className:"_38pUNpMw"},o(E,{colorVariant:"TA_GRAY_3",onClick:()=>{m(),u()}})))));return o(n,null,_&&o(h,{trigger:()=>{d({node:b,timeout:t}).then(()=>{u()}),C()},interval:2e3}),o("div",{className:"_8YbbDzDD"},o(v,{active:a,onClick:c,bookmarkStyle:"outline",bookmarkSize:"24",animated:!0})))},z=({object:e,widgetStyle:t,viewportCategory:a,tooltipCopy:s,toastCopy:i,toastCopySubhead:l,allowPopStatModal:r})=>o(_,{object:e,allowPopStatModal:r},"MOBILE"===a&&i&&l?(e,s)=>{var r,n=!s&&(r=Date.now(),0===C("saves_poptoast_trigger_time_series",r-b)&&0===C("saves_click_time_series",r-u)),c=()=>{n=!1,e()};return n?o(P,{active:s,onClick:c,toastContent:o("div",{className:"_34nCm2QP"},o("span",{className:"GkP3Ia0m"},o("span",{className:"_2sMMJ-gU"},o(v,{bookmarkStyle:"flat",active:!0,decorated:!1,bookmarkSize:"30"})),o("span",{className:"_10_wM36m"},g(i))),g(l)),durationMs:8e3}):D(s,c,t,a)}:"MOBILE"!==a&&s?(e,i)=>{var l,r=!i&&(l=Date.now(),!(parseInt(I.get("dtSoftPromptSuppressed"),10)>=l-2592e5)&&0===C("saves_tooltip_trigger_time_series",l-S)&&C("saves_tooltip_trigger_time_series",l-b)<2&&C("saves_tooltip_trigger_time_series",l-y)<4&&0===C("saves_click_time_series",l-u)),n=()=>{r=!1,e()};return r?o("div",null,o(T,{tooltipContent:o("div",{className:"_1RliGZZV"},g(s))}),D(i,n,t,a,r)):o("div",null,D(i,n,t,a))}:(e,o)=>D(o,e,t,a)),A=({object:e,widgetStyle:t,tooltipCopy:a,toastCopy:s,toastCopySubhead:i,viewportCategory:l,allowPopStatModal:r})=>{switch(t){case"responsive_review_hotspot":return o(p,null,o(z,{object:e,widgetStyle:t,tooltipCopy:a,toastCopy:s,toastCopySubhead:i,viewportCategory:l,allowPopStatModal:r}));default:return o(_,{object:e,allowPopStatModal:r},(e,o)=>D(o,e,t,l))}},x=()=>[];return[()=>{T=class extends a{constructor(e){super(e),this.onClose=()=>{w({module:"saves_tooltip",action:"saves_tooltip_close"}),this.setState({enable:!1})},this.onOpen=()=>{w({module:"saves_tooltip",action:"saves_tooltip_displayed"}),k("saves_tooltip_trigger_time_series")},this.state={enable:!0,disabledExternally:!1}}componentDidMount(){N("home-location-prompt").on("shown",()=>this.setState({disabledExternally:!0}))}componentWillUnmount(){N("home-location-prompt").off("shown")}render(){var{tooltipContent:e}=this.props,{enable:t}=this.state;return this.state.disabledExternally?null:o(f,{leftOf:!0,shiftX:-10,shiftY:10,contents:t=>o("div",{className:"_1yxTqoG5",onClick:()=>{t(),this.onClose()}},e),onClose:this.onClose,local:!0,overlayType:"popover",closeButtonColorVariant:"TA_GRAY_3"},(e,a)=>o("div",{ref:t=>{e(t)}},o(h,{trigger:()=>{t&&(a(),this.onOpen())},interval:2e3})))}},O=c(e=>({viewportCategory:e.meta.device.viewportCategory}))(A),e("default",O),e("ssrQueries",x)},[e=>(o=e.createElement,a=e.Component,s=e.useState,i=e.useContext,l=e.useEffect,r=e.useCallback,n=e.Fragment),e=>c=e.connect,e=>_=e.QueriedTripFlowSelector,e=>p=e.MountedClientOnly,e=>d=e.featureIsEnabled,e=>m=e.default,e=>v=e.BookmarkIcon,e=>(k=e.logTime,u=e.INTERVAL_MILLI_90_DAYS,C=e.countTimes,b=e.INTERVAL_MILLI_ONE_WEEK,S=e.INTERVAL_MILLI_ONE_DAY,y=e.INTERVAL_MILLI_ONE_MONTH),e=>g=e.unescaped,e=>h=e.default,e=>w=e.default,e=>f=e.default,e=>N=e.default,e=>M=e.Toast,e=>E=e.CloseIcon,e=>I=e.default]]},["cDcdfi","h74DsO","HZtvHO","4Z07E2","-i3PJS","4LU1Ax","vF730k","Yi5BO7","535agn","lmr1u9","Jk5sjx","eDFcUX","l6BSGt","Q7TAd7","xegF5W","jaCyxS"]]);