(this.$WP=this.$WP||[]).push(["Ckp-bW",(e,t)=>{"use strict";var r,a,f=e=>{var t=new Date,r=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor(r/864e5)},l=e=>r.formatDate("date_medium",e),n=e=>{var t=f(e);if(t<=0)return a("relative_dates_today_fffff175");if(1===t)return a("relative_dates_yesterday_fffff175");if(t<7)return a("relative_dates_days_fffff175",{0:t});if(t<=35){var r=Math.floor(t/7);return 1===r?a("relative_dates_one_week_fffff175"):a("relative_dates_weeks_fffff175",{0:r})}return l(e)},i=e=>f(e)<=35,u=e=>{var t=e.getFullYear(),r=e.getMonth()+1;r=r<10?"0"+r:r;var a=e.getDate();return`${t}-${r}-${a=a<10?"0"+a:a}`},s=e=>{if(!e)return null;var t=e.split("-");if(3===t.length){var r=parseInt(t[0],10),a=parseInt(t[1],10),f=parseInt(t[2],10);if(r&&a&&f)return new Date(r,a-1,f)}return null};return[()=>{e("default",n),e({dateToISOString:u,isoStringToDate:s,renderAbsoluteDate:l,renderRelativeDate:n,shouldUseRelativeDate:i})},[e=>(r=e.globalize,a=e.localize)]]},["535agn"]]);
