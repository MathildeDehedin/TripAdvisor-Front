(this.$WP=this.$WP||[]).push(["nrVmZz",(e,t)=>{"use strict";var r,s,c,i,u,a,n=[],o=!0,l=()=>{var{securityToken:e}=r(i),[,{uid:t}]=r(u),l=s(()=>{o=!1;var r=n;if(n=[],r.length){var s="metricsData="+encodeURIComponent(JSON.stringify(r));fetch("/MetricsAjax",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8","X-Requested-By":e,Accept:"text/html, */*","X-Puid":t},body:s,credentials:"same-origin"})}},[e,t]);return c(()=>{a(()=>requestIdleCallback(()=>{n.length?setTimeout(l,3500):o=!1}))},[l]),s(e=>{e&&e.length&&(n.push(...e),o||(o=!0,setTimeout(l,1500)))},[l])};return[()=>{e("default",l),e("useRecordMetrics",l)},[e=>(r=e.useContext,s=e.useCallback,c=e.useEffect),e=>(i=e.Device,u=e.Route),e=>a=e.requestTTICallback]]},["cDcdfi","2R4xv2","6NeHQy"]]);
