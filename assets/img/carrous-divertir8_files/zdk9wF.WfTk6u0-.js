(this.$WP=this.$WP||[]).push(["zdk9wF",(e,t)=>{"use strict";var r,i,s,a={},u={},m=null,o=(e,t,o,n)=>{var T=r(()=>((e,t,r)=>`${e}-${t}${r?"-s":""}`)(e,o,!!n),[e,o,n]),c=s(),l=r(()=>r=>T&&e&&t&&((e,t,r,i,s)=>{e in u||(a[e]={name:"media_primary_photo_status",labels:[t,r,i,"","",""]},u[e]=!0,clearTimeout(m),m=setTimeout(()=>{var e=Object.keys(a).map(e=>a[e]);a={},!e||!e.length||e.length<1||s(e)},1e3))})(T,e,t,r,c),[T,e,t,c]);return i(()=>{var e=setTimeout(()=>{l("Timeout")},3e3);return()=>clearTimeout(e)},[l,T]),l};return[()=>{e({ERROR_MSG:"Error",EXCEPTION:"Exception",NO_PHOTO:"No-Photos",PRIMARY_MISSING:"Primary-Missing",PRIMARY_OK:"Primary-OK",TIMEOUT:"Timeout",useMediaTracking:o})},[e=>(r=e.useMemo,i=e.useEffect),e=>s=e.default]]},["cDcdfi","nrVmZz"]]);