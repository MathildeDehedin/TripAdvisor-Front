(this.$WP=this.$WP||[]).push(["gssTFp",(e,r)=>{"use strict";var t,n,i,o,s,l,u,a=(e,r,s,u,a,c,d=200)=>{var v=t(!1),[h,f]=n(8),[L,b]=n(!1),g=t(s);i(()=>{g.current=s},[s]);var m=o(()=>{if(!e.current)return!1;var t=e.current.getBoundingClientRect();return r&&r.current?r.current.getBoundingClientRect().bottom>=t.bottom-c:window.innerHeight>=t.bottom-c},[r,e,c]);i(()=>{u&&m()&&h>0&&L?g.current().catch(e=>{console.error("infinite loader error: ",e),b(!1)}).then(()=>{f(h-1)}):L&&b(!1)},[L,h,u,m]);var w=o(()=>{u&&v.current&&m()&&!L&&(f(8),b(!0))},[u,m,L]),E=o(d?l(w,d,!1):w,[d]);i(()=>{var e=null==r?void 0:r.current,t=E;return e?(e.addEventListener("scroll",t),e.addEventListener("resize",t)):(window.addEventListener("scroll",t),window.addEventListener("resize",t)),()=>{v.current=!1,e?e&&(e.removeEventListener("scroll",t),e.removeEventListener("resize",t)):(window.removeEventListener("scroll",t),window.removeEventListener("resize",t))}},[r,E]),i(()=>{a&&!v.current?(v.current=!0,w()):!a&&v.current&&(v.current=!1)},[w,a])},c=({hasMore:e,threshold:r,throttle:i,loadMore:o,infiniteLoadOnMount:s,children:l})=>{var u=t(null),c=t(null),[d,v]=n(s);return a(c,u,o,e,d,r,i),l(u,c,()=>v(!0),d)},d=({threshold:e,hasMore:r,loadMore:t,checkVisibilityDelay:l,children:a,triggerNode:c})=>{var[d,v]=n(!1),h=o(()=>{r&&t(),v(!0)},[r,t]);i(()=>{var e=setTimeout(()=>{d&&r&&h()},l);return()=>clearTimeout(e)},[d,r,h,l]);var f=o(()=>v(!1),[]);return s(u,{rootMargin:e+"px",onVisible:h,onInvisible:f,node:c},a)},v={};return[()=>{c.defaultProps={throttle:200},d.defaultProps={checkVisibilityDelay:1e3},e("default",v),e({InfiniteLoader:c,InfiniteLoaderObserver:d,useInfiniteLoader:a})},[e=>(t=e.useRef,n=e.useState,i=e.useEffect,o=e.useCallback,s=e.createElement),e=>l=e.default,e=>u=e.VisibilityObserver]]},["cDcdfi","gsKhh7","BLrxBS"]]);