(this.$WP=this.$WP||[]).push(["REpc0H",(t,e)=>{"use strict";var i,r,o,s,l,n,c,a,h,p,d,f,v,u,g,m,y,b;function C(t,e){if(null==t)return{};var i,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)i=s[r],e.indexOf(i)>=0||(o[i]=t[i]);return o}var k=t=>"object"==typeof t?t:{left:t,right:t,top:t,bottom:t},S={top:0,left:0},x=({top:t,left:e},{top:i,left:r})=>e*i-t*r,N=({direction:t,onClick:e,isRtl:i})=>{var r="single-chevron-right";return"top"===t&&(r="single-chevron-up"),!i&&"left"===t||i&&"right"===t?r="single-chevron-left":(!i&&"right"===t||i&&"left"===t)&&(r="single-chevron-right"),"bottom"===t&&(r="single-chevron-down"),o("div",{className:"yl2c6lQA",onClick:e},o(d,{name:r,className:"_2j9xx5un"}))},R=(t,e,i,r={top:0,left:0},o,s)=>({direction:{top:t,left:e},focus:r,scalarProjection:!0,behavior:"smooth",minDistance:i,snapToEdge:o,type:s?"scrollToNearestNthChild":"scrollToNearestChild",n:s||void 0});return[()=>{t("Scrollable$1",f=class extends i{constructor(...t){super(...t),this.state={lastScrolled:[],container:null,child:{}},this.setChild=t=>{var{childRefs:e}=this;return e[t]=r(),e[t]},this.scroll=t=>{var{isRtl:e}=this.props,{current:i}=this.containerRef,{behavior:r="auto",snapToEdge:o=0}=t,s=k(o);if(i){var{clientWidth:l,clientHeight:n,scrollTop:c,scrollLeft:a,scrollHeight:h,scrollWidth:p}=i,d=({offsetTop:t,offsetLeft:i},{top:r,left:o})=>({dx:i-(o+a+(e?l-p:0)),dy:t-(r+c)}),f=(t,e,{top:i,left:r,right:o,bottom:s})=>{var d=t,f=e;return t>0&&l+a+t+o>p&&(d=t+o),e>0&&n+c+e+s>h&&(f=e+s),t<0&&a+t-r<0&&(d=t-r),e<0&&c+e-i<0&&(f=e-i),{dx:d,dy:f}};if("scrollBy"===t.type){var{left:v,top:u}=t,g=[...Object.entries(this.childRefs)].map(t=>({key:t[0],current:t[1].current})).filter(t=>t.current).map(({key:t,current:e})=>{var{scrollTop:i,scrollLeft:r}=e,o=i-u,s=r-v;return{key:t,out:o<=0||s<=0||o>=n||s>=l}}).filter(t=>t.out).map(({key:t})=>t);i.scrollBy({top:u,left:v,behavior:r}),this.setState({lastScrolled:g})}else if("scrollToChild"===t.type){var{key:m}=t,{current:y}=this.childRefs[m];if(y){var{dx:b,dy:S}=d(y,t.focus),{dx:N,dy:R}=f(b,S,s);i.scrollBy({top:R,left:N,behavior:r}),this.setState({lastScrolled:[m]})}}else if("scrollToNearestChild"===t.type||"scrollToNearestNthChild"===t.type){var{direction:D,scalarProjection:O=!1,focus:A,scope:_=90,minDistance:j=0}=t,T=null;D&&(T=(({top:t,left:e},i)=>{var r=(i%180+180)%180*Math.PI/180;return{u:{top:e*Math.sin(r)+t*Math.cos(r),left:e*Math.cos(r)-t*Math.sin(r)},v:{top:e*Math.sin(-r)+t*Math.cos(-r),left:e*Math.cos(-r)-t*Math.sin(-r)}}})(D,_));var w=[...Object.entries(this.childRefs)].map(t=>({key:t[0],current:t[1].current})).filter(t=>t.current).filter(({current:t})=>{if(!T)return!0;var{dx:e,dy:i}=d(t,A);return((t,{u:e,v:i})=>x(e,t)*x(e,i)>=0&&x(i,t)*x(i,e)>=0)({top:i,left:e},T)}).map(t=>{var{current:e}=t,i=C(t,["current"]),{dx:r,dy:o}=d(e,A),s=r*r+o*o,l=1/0;if(D){var{top:n,left:c}=D;l=n*o+c*r}return Object.assign({distance:s,product:l,dx:r,dy:o},i)}).filter(({distance:t})=>t>j*j).sort((t,e)=>{var i=t.distance-e.distance;return 0!==i?i:t.product-e.product}),M="scrollToNearestNthChild"===t.type?Math.min(t.n-1,w.length-1):0;if(w[M]){var{dx:I,dy:E,key:P,product:H}=w[M];if(O){if(D){var{top:B,left:W}=D,K=H/(B*B+W*W),L=K*W,q=K*B,{dx:V,dy:$}=f(L,q,s);i.scrollBy({top:$,left:V,behavior:r})}}else{var{dx:Y,dy:Q}=f(I,E,s);i.scrollBy({top:Q,left:Y,behavior:r})}this.setState({lastScrolled:[P]})}}}},this.wasScrolled=t=>this.state.lastScrolled.includes(""+t),this.containerRef=r(),this.childRefs={}}componentDidMount(){var{current:t}=this.containerRef,e=Object.entries(this.childRefs).map(t=>({key:t[0],current:t[1].current})).filter(({current:t})=>t).reduce((t,e)=>(Object.assign(t,{[e.key]:e.current}),t),{});t?this.setState({container:t,child:e}):this.setState({child:e})}render(){var{children:t}=this.props;return t({scroll:this.scroll,setContainer:this.containerRef,container:this.state.container,setChild:this.setChild,child:this.state.child,wasScrolled:this.wasScrolled})}}),g=n(t=>({isRtl:t.i18n.isRtl}))(f),m=n(t=>({isRtl:t.i18n.isRtl}))(N),(v=class t extends i{constructor(...e){super(...e),this.getDirections=()=>{var{top:e,left:i,right:r,bottom:o,container:s,threshold:l}=this.props,{left:n,right:c,top:a,bottom:h}=k(l),p=Object.assign({},t.initialState);if(s){var{clientWidth:d,clientHeight:f,scrollLeft:v,scrollTop:u,scrollWidth:g,scrollHeight:m}=s;return v>n&&i&&(p.left=!0),u>a&&e&&(p.top=!0),d+v+c<g&&r&&(p.right=!0),f+u+h<m&&o&&(p.bottom=!0),p}return p},this.didChange=({top:t,left:e,right:i,bottom:r})=>{var{top:o,left:s,right:l,bottom:n}=this.directions;return o!==t||s!==e||l!==i||n!==r},this.checkArrows=()=>{var t=this.getDirections();this.didChange(t)&&(this.directions=t,this.props.onDirectionChange(this.directions))},this.handleOnScroll=t=>{this.checkArrows(),this.props.onScroll&&this.props.onScroll(t)},this.directions=Object.assign({},t.initialState)}componentDidUpdate({container:t,isActive:e}){if(!this.props.isActive||this.props.container&&(this.props.container.clientWidth||this.props.container.clientHeight)){var i=this.getDirections();(t!==this.props.container||this.props.isActive&&!e||this.didChange(i))&&(this.directions=i,this.props.onDirectionChange(this.directions))}else var r=setInterval(()=>{this.props.isActive||clearInterval(r),this.props.container&&this.props.container.clientWidth&&this.props.container.clientHeight&&(clearInterval(r),this.directions=this.getDirections(),this.props.onDirectionChange(this.directions))},100)}render(){var{forwardedRef:t,children:e,onClick:i,className:r,style:s}=this.props;return o("div",{ref:t,onScroll:this.handleOnScroll,onClick:i,className:r,style:Object.assign({},s,{position:"relative !important"})},e)}}).defaultProps={left:!0,bottom:!0,right:!0,top:!0},v.initialState={top:!1,left:!1,right:!1,bottom:!1},y=s((t,e)=>o(v,Object.assign({},t,{forwardedRef:e}))),t("ScrollAffordance$1",u=class extends i{constructor(...t){super(...t),this.state={top:!1,right:!1,left:!1,bottom:!1},this.onDirectionChange=t=>{this.setState(t)}}render(){var t=this.props,{children:e,minDistance:i,snapToEdge:r,focus:s,shift:n,isRtl:d,viewportCategory:f,viewportCategories:v,isActive:u,scrollStep:b,onArrowClick:x}=t,N=C(t,["children","minDistance","snapToEdge","focus","shift","isRtl","viewportCategory","viewportCategories","isActive","scrollStep","onArrowClick"]),{top:D,left:O,right:A,bottom:_}=this.props,{top:j,left:T,right:w,bottom:M}=(t=>{var{top:e,left:i,bottom:r,right:o}=k(t);return{top:null==e?S:Object.assign({},S,{},e),left:null==i?S:Object.assign({},S,{},i),right:null==o?S:Object.assign({},S,{},o),bottom:null==r?S:Object.assign({},S,{},r)}})(n||0);return o(g,null,({scroll:t,setContainer:n,setChild:g,container:C})=>{var{top:k,left:S,right:I,bottom:E}=this.state,P=[];if(C&&v&&v.includes(f)){var H={appear:"_18HHHrNE",appearActive:"_2RKem81J",enter:"_2iDVStmx",enterActive:"_3Oy4xVdo",exit:"_159Yile1",exitActive:"_1CadqeAg"};if(S&&O){var B=()=>{t(R(0,-1,i,s,r,b)),x&&x("left")},W=p("_36M-K8I0",{"_2-Ds4aEg":!d,_1xPBir2I:d});"boolean"==typeof this.props.left?P.push(o(c,{key:"left",timeout:300,classNames:H},o("div",{className:W},o(h,{x:-12+T.left,y:T.top},o(m,{direction:"left",onClick:B}))))):P.push(o("div",{className:W,key:"left"},o(h,{x:T.left,y:T.top},o("div",{onClick:B},S))))}if(I&&A){var K=()=>{t(R(0,1,i,s,r,b)),x&&x("right")},L=p("_36M-K8I0",{_1xPBir2I:!d,"_2-Ds4aEg":d});"boolean"==typeof this.props.right?P.push(o(c,{key:"right",timeout:300,classNames:H},o("div",{className:L},o(h,{x:12+w.left,y:w.top},o(m,{direction:"right",onClick:K}))))):P.push(o("div",{className:"_36M-K8I0 _1xPBir2I",key:"right"},o(h,{x:w.left,y:w.top},o("div",{onClick:K},I))))}if(k&&D){var q=()=>{t(R(-1,0,i,s,r)),x&&x("top")},V=p("_36M-K8I0","_3q6kMfov");"boolean"==typeof this.props.top?P.push(o(c,{key:"top",timeout:300,classNames:H},o("div",{className:V,key:"top"},o(h,{x:j.left,y:-16+j.top},o(m,{direction:"top",onClick:q}))))):P.push(o("div",{className:V,key:"top"},o(h,{x:j.left,y:j.top},o("div",{onClick:q},k))))}if(E&&_){var $=()=>{t(R(1,0,i,s,r)),x&&x("bottom")},Y=p("_36M-K8I0","_3sVqm_hY");"boolean"==typeof this.props.bottom?P.push(o(c,{key:"bottom",timeout:300,classNames:H},o("div",{className:Y},o(h,{x:M.left,y:16+M.top},o(m,{direction:"bottom",onClick:$}))))):P.push(o("div",{className:Y,key:"bottom"},o(h,{x:M.left,y:M.top},o("div",{onClick:$},E))))}}return o(l,null,o(a,{component:null},P),o(y,Object.assign({},N,{ref:n,container:C,onDirectionChange:this.onDirectionChange,isActive:u}),e(g)))})}}),u.defaultProps={left:!0,bottom:!0,right:!0,top:!0,threshold:0,snapToEdge:0,shift:void 0,focus:{top:0,left:0},className:void 0,onClick:void 0,onScroll:void 0,style:void 0,isActive:!0,viewportCategories:["TABLET","DESKTOP"]},b=n(t=>({viewportCategory:t.meta.device.viewportCategory,isRtl:t.i18n.isRtl}))(u),t({ScrollAffordance:b,ScrollArrow:m,Scrollable:g})},[t=>(i=t.Component,r=t.createRef,o=t.createElement,s=t.forwardRef,l=t.Fragment),t=>n=t.connect,t=>(c=t.CSSTransition,a=t.TransitionGroup),t=>h=t.default,t=>p=t.default,t=>d=t.Icon]]},["cDcdfi","h74DsO","CSOnVf","vd4nty","jSLlaY","_qQcW3"]]);