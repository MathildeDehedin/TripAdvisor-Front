(this.$WP=this.$WP||[]).push(["SMVlF-",(e,t)=>{"use strict";var a,n,r,d,i=e=>{var t=window.performance;t&&t.mark&&t.mark(e)};function o(e,t,a=!1){var o=e+"_start",s=e+"_end";if(t){i(s);var g=function(e,t,a){var n=window.performance;if(n&&n.measure){n.measure(e,t,a);var r=n.getEntriesByName(e)[0];if(r)return r.duration}return null}(e,o,s);if(g){d.debug(`[ADS] ${e}: ${g}`);var l={module:"ads_perf",action:e,value:g};a?r(l):n(l)}}else i(o)}var s=(e,t)=>{var a="#tearsheet"===location.hash?"https://"+location.hostname:"https://tpc.googlesyndication.com";window.addEventListener("message",n=>{n.origin===a&&n.data&&n.data.cpmMessageType===e&&t(n.data)})},g=(e,t)=>(t&&t.slot?t.slot.getSlotElementId():null)===e,l=e=>e.isEmpty||55978451===e.advertiserId,p=(e,t,a)=>{"undefined"!=typeof window?(window.googletag=window.googletag||{cmd:[]},window.googletag.cmd.push(()=>{window.googletag.pubads().addEventListener("slotRenderEnded",n=>{if(g(e,n)&&!l(n)&&t.current&&t.current.classList){var r=e+"-loaded";t.current.classList.contains(r)||(t.current.classList.add(r),a(n))}})})):d.error("The function registerRenderEventListenerWithWrapper should not be called during SSR")},u=(e,t)=>{"undefined"!=typeof window?(window.googletag=window.googletag||{cmd:[]},window.googletag.cmd.push(()=>{window.googletag.pubads().addEventListener("slotRenderEnded",a=>{g(e,a)&&t(a)})})):d.error("The function registerRenderEventListener should not be called during SSR")},c=(e,t,n)=>{"undefined"!=typeof window&&e&&e.gptBase&&!a("hr_disable_cpm_ads")&&window.require(["ta/Core/TA.Store"],r=>{var d={"ads.gptBase":e.gptBase,"ads.adStubs":e.adStubs,"ads.gptConfig":e.gptConfig,"ads.ppid":e.ppid,"ads.pageTargeting":e.pageTargeting,"ads.adTracking":e.adTrackingConfig,"ads.enableScrollUpInjection":!!e.enableScrollUpInjection,"ads.deferDisabled":e.deferDisabled};t&&(d[`ads.${t}.adStubs`]=e.adStubs,window.taAdsJSON&&(window.taAdsJSON[t]=e.pageTargeting),d[`ads.${t}.pageTargeting`]=e.pageTargeting),a("timed_refresh_after_15s")&&(d["ads.timed_refresh_min"]=15e3),Object.keys(d).forEach(e=>{var t=d[e];r.store(e,t)}),i("start_load_ads_js"),window.require(["trjs!cpm/DesktopAds"],e=>{e.initDoubleClick(),n&&n()})})},w=(e,t,a)=>{if("undefined"!=typeof window&&e&&e.gptBase){if(t){var{adStubs:n,pageTargeting:r}=e;window.taAdsJSON=Object.assign({},window.taAdsJSON,{[t]:{adStubs:n,pageTargeting:r}})}window.require(["trjs!cpm/MobileWeb"],t=>{t.initDoubleClick(e),a&&a()})}},f=()=>{if("undefined"==typeof window)return!1;var e=!1;return window.require(["ta/Core/TA.Store"],t=>{void 0===t.retrieve("ads.adStubs")&&(e=!0)}),e},m=e=>c(e),b={};return e("trackAdPerformance",o),[()=>{e("default",b),e({AD_PRF_TRACK_MODULE:"ads_perf",COLLAPSER_ADVERTISER_ID:55978451,DBL_CLICK_DOMAIN:"https://tpc.googlesyndication.com",enableCpmContent:c,enableCpmContentAPR:m,enableCpmContentMobile:w,isEmptyOrCollapser:l,listenToCpmMessage:s,registerRenderEventListener:u,registerRenderEventListenerWithWrapper:p,trackAdPerformance:o,willLoadCpmContent:f})},[e=>a=e.featureIsEnabled,e=>(n=e.default,r=e.trackEventAJAXOnPageOnce),e=>d=e.default]]},["-i3PJS","Jk5sjx","4LU1Ax"]]);