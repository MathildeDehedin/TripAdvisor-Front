(this.$WP=this.$WP||[]).push(["h179JP",(l,i)=>{"use strict";var e,o=l=>{var i,e,o,t,r,d,n=l.find(l=>l.width>=2560),u=l.find(l=>l.width>=1280&&l.width<2560),s=l.find(l=>l.width>=1024&&l.width<1280);return n||u?(!n&&u&&(n=u),!u&&n&&(u=n),s||(s=u||n),(null==(i=n)?void 0:i.url)&&(null==(e=u)?void 0:e.url)&&(null==(o=s)?void 0:o.url)?{desktop:(null==(t=n)?void 0:t.url)||"",mobile:(null==(r=u)?void 0:r.url)||"",preview:(null==(d=s)?void 0:d.url)||""}:(console.error("At least one of the photo 360 sizes is missing the CDN URL."),null)):(console.error("Unable to find suitable cuts for desktop and mobile."),null)},t=()=>e("hr_mediaviewer_display_360_photos");return[()=>{l("default",null),l({photos360Enabled:t,pickPhoto360Sizes:o})},[l=>e=l.featureIsEnabled]]},["-i3PJS"]]);
