(this.$WP=this.$WP||[]).push(["mHPUmd",(e,t)=>{"use strict";var r,i;return[()=>{(i=class extends r{constructor(e){super(e),this.setTarget=e=>{this.renderTimeTarget=e},this.tapTargetHandler=e=>{e.stopPropagation()},this.tapWindowHandler=()=>{this.mouseOutHandler()},this.mouseOverHandler=()=>{this.renderTimeTarget&&this.renderTimeTarget.addEventListener("touchstart",this.tapTargetHandler),setTimeout(()=>{window.addEventListener("touchstart",this.tapWindowHandler)},0),null!==this.hoverChainNode.timer&&void 0!==this.hoverChainNode.timer&&clearTimeout(this.hoverChainNode.timer),(e=>{for(var t=this.hoverChainNode;t;)null!==t.timer&&void 0!==t.timer&&(clearTimeout(t.timer),t.timer=null),t=t.parent})(),this.hoverChainNode.hovered=!0,this.hoverChainNode.pendingMouseOut=!0,this.props.mouseOverHandler&&this.props.mouseOverHandler(this.hoverChainNode)},this.mouseOutHandler=()=>{this.hoverChainNode.hovered=!1,this.hoverChainNode.timer=setTimeout(()=>{if(this.hoverChainNode.timer=null,!(e=>{for(var t=this.hoverChainNode;t;){if(t.hovered)return!0;t=t.child}return!1})()){this.renderTimeTarget&&this.renderTimeTarget.removeEventListener("touchstart",this.tapTargetHandler),window.removeEventListener("touchstart",this.tapWindowHandler),this.props.mouseOutHandler&&this.props.mouseOutHandler(),this.hoverChainNode.pendingMouseOut=!1;var{parent:e}=this.hoverChainNode;e&&!e.hovered&&e.mouseOutCallback()}},this.props.mouseOutTimeout)},this.hoverChainNode=void 0,this.renderTimeTarget=void 0;var t={parent:void 0,child:void 0,hovered:!1,mouseOutCallback:()=>this.mouseOutHandler(),pendingMouseOut:!1,timer:null};e.hoverChainParent&&(t.parent=e.hoverChainParent,t.parent.child=t),this.hoverChainNode=t}componentDidMount(){this.renderTimeTarget&&(this.renderTimeTarget.addEventListener("mouseenter",this.mouseOverHandler),this.renderTimeTarget.addEventListener("touchstart",this.mouseOverHandler),this.renderTimeTarget.addEventListener("mouseleave",this.mouseOutHandler))}componentWillUnmount(){null!==this.hoverChainNode.timer&&void 0!==this.hoverChainNode.timer&&clearTimeout(this.hoverChainNode.timer),this.hoverChainNode.pendingMouseOut&&this.props.mouseOutHandler&&this.props.mouseOutHandler(),window.removeEventListener("touchstart",this.mouseOutHandler)}render(){return this.props.children(this.setTarget,this.hoverChainNode)}}).defaultProps={mouseOutTimeout:0},e("default",i)},[e=>r=e.Component]]},["cDcdfi"]]);