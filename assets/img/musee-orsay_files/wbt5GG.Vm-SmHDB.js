(this.$WP=this.$WP||[]).push(["wbt5GG",(t,e)=>{"use strict";var i,a,s,n,o,r,c,h,l,p,d,L,m,u={icon:"/img2/maps/icons/my_location_dot.png",width:30,height:30,anchor:{x:15,y:15}},k=()=>{var t=l(),{map:e}=i(p),{localize:s}=h();return e&&a(m,{map:e,tracker:t,deniedText:s.string("mw_js_positionPermissionDenied")})};return[()=>{m=class extends s{constructor(...t){super(...t),this.state={trackingLocation:!1,active:!1},this.setInactive=()=>{this.setState({active:!1})},this.setMapInteractionListeners=()=>{var{map:t}=this.props;t&&t.once("panStart",this.setInactive)},this.clearMapInteractionListeners=()=>{var{map:t}=this.props;t&&t.off("panStart",this.setInactive)},this.moveMapToNewLocation=t=>{var{map:e}=this.props;e&&e.setCenter(t,16,!0)},this.isLatLngValid=t=>0!==t.lat||0!==t.lng,this.trackClick=()=>{this.props.tracker({module:"find_me",action:"find_me_click"})},this.askForLocation=()=>{if(this.trackClick(),this.setState({active:!0}),this.state.trackingHandler)this.state.userLocation&&(this.moveMapToNewLocation(this.state.userLocation),this.setMapInteractionListeners());else{var t=r((t,e)=>{var i=new d(t,e);this.isLatLngValid(i)&&(this.state.trackingLocation||(this.moveMapToNewLocation(i),this.setMapInteractionListeners()),this.setState({userLocation:i,trackingLocation:!0}))},()=>{window.alert(this.props.deniedText),this.setState({active:!1,trackingHandler:null})});this.setState({trackingHandler:t})}}}componentWillUnmount(){this.state.trackingHandler&&(c(this.state.trackingHandler),this.clearMapInteractionListeners())}render(){return a("div",null,a("div",{className:"_2XMGxXHz",onClick:this.askForLocation},a("span",{className:o("ocTOXHET",this.state.active?"_3pZryCkw":"")},a(n,{name:"nearby"}))),this.state.userLocation?a(L,{position:this.state.userLocation,width:u.width,height:u.height,src:u.icon,anchor:u.anchor}):null)}},t("default",k)},[t=>(i=t.useContext,a=t.createElement,s=t.Component),t=>n=t.default,t=>o=t.default,t=>(r=t.watchLocation,c=t.clearWatch),t=>h=t.useLocalize,t=>l=t.useGARecorder,t=>(p=t.MapContext,d=t.LatLng,L=t.IconMarker)]]},["cDcdfi","OMqGt0","jSLlaY","fiorRT","0DsHEV","fsml46","VwUieX"]]);