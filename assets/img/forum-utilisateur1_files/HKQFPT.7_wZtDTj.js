(this.$WP=this.$WP||[]).push(["HKQFPT",(e,o)=>{"use strict";var r,t,s,n,a,l,i,p,u,d,c,h;function v(e,o){if(null==e)return{};var r,t,s={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(s[r]=e[r]);return s}var m=({isFullBleed:e,header:o,fullscreenAlways:t,disableFullscreenOnMobile:s,noBodyPadding:n,bodyScroll:a,overflowVisible:i,onClose:p,onScroll:u,onDragOver:d,onDragLeave:c,onDrop:h,fixedHeight:v,closeX:m,closeXColorVariant:g,children:O,overlayTop:b,alignToBottom:C,roundedCorners:f,unconstrainedHeight:w,backgroundColor:M})=>{var y,D,j="centered";return C?j={bottom:0,top:b?b+"px":"auto"}:b&&(j={top:b}),!1===a?y="hidden":i&&(y="visible"),t?D="always":s&&(D="never"),r(l,{vertical:j,height:v?"calc(100% - 4rem)":void 0,closeIconColor:g,header:o,onClose:p,enableCloseIcon:m,containerProps:{overflowVisible:a,backgroundColor:M,unconstrainedHeight:w,onScroll:u,roundedCorners:f},bodyProps:{bodyScroll:y,isFullBleed:e||n,onDragOver:d,onDragLeave:c,onDrop:h},fullscreen:D,disableAutoFocus:!0},O)},g=e=>{var{name:o,onClose:t}=e,a=v(e,["name","onClose"]);return r(s,null,e=>r(n,{name:o},r(m,Object.assign({onClose:()=>{e(),t&&t()}},a))))},O=e=>{var{vh:o,vw:t}=e,s=v(e,["vh","vw"]);return r(g,s,r("div",{style:{height:o+"vh",width:t+"vw"}},e.children))},b=e=>{var{children:o}=e,t=v(e,["children"]);return r(a,{name:t.name},(e,n)=>r(s,null,s=>r(i,null,({route:a,navigate:l})=>r(c,Object.assign({},t,{route:a,navigate:l,open:e,isOpen:n,close:s}),o))))},C=e=>{var{name:o,username:t,onClick:s}=e,n=v(e,["name","username","onClick"]);return r(a,{name:o},e=>r(i,null,({route:a})=>r(p,Object.assign({to:Object.assign({},a,{modal:o,username:t}),onClick:o=>{e(),s&&s(o)}},n))))},f=e=>{var{path:o}=e,t=v(e,["path"]);return r(i,null,({route:e,navigate:s})=>r(d,null,r(h,Object.assign({},t,{path:o,route:e,navigate:s}))))};return[()=>{O.defaultProps={vh:70,vw:80},e("RoutedModalWithRouter",c=class extends t{constructor(...e){super(...e),this.resetRoute=e=>{var o=this.props.route,{modal:r}=o,t=v(o,["modal"]);r===this.props.name&&this.props.navigate(t,{reset:e})},this.updateRoute=()=>{var{modal:e}=this.props.route;e!==this.props.name&&this.props.navigate(Object.assign({},this.props.route,{modal:this.props.name}))}}componentDidMount(){var{modal:e}=this.props.route;e!==this.props.name||this.props.isOpen||this.props.open()}componentDidUpdate(e){if(!e.isOpen&&this.props.isOpen)this.updateRoute();else if(e.isOpen&&!this.props.isOpen)this.resetRoute(!0);else{var{modal:o}=this.props.route;o!==this.props.name&&this.props.isOpen&&this.props.close()}}componentWillUnmount(){this.props.isOpen&&this.props.close()}render(){var e=v(this.props,["children","route","navigate","open","isOpen","close"]);return r(g,e,this.props.children)}}),C.defaultProps={children:null,className:"",activeClassName:"",title:void 0},h=class extends t{constructor(...e){super(...e),this.closeModal=()=>{var e,o,{path:r,navigate:t,route:s,onClose:n}=this.props;if(null==(e=window)||null==(o=e.history)?void 0:o.state)t(s,{reset:!0});else{var a=Object.assign({},s);Object.keys(r).forEach(e=>{delete a[e]}),t(a)}n&&n()}}render(){var e=this.props,{path:o}=e,t=v(e,["path","route","navigate","onClose"]);return r(u,o,r(m,Object.assign({onClose:this.closeModal},t)))}},e({DeprecatedModalLink:C,DeprecatedRoutedModal:b,Modal:g,ModalView:m,RoutedModal:f,ViewportRelativeModal:O})},[e=>(r=e.createElement,t=e.Component),e=>(s=e.Closer,n=e.Global,a=e.Opener),e=>l=e.default,e=>(i=e.RouteConsumer,p=e.Link,u=e.Match),e=>d=e.MountedClientOnly]]},["cDcdfi","pT-O8u","O8LbtK","N4pTU2","4Z07E2"]]);
