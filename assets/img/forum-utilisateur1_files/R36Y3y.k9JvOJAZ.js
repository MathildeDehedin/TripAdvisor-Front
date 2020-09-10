(this.$WP=this.$WP||[]).push(["R36Y3y",(e,t)=>{"use strict";var i,s,o,a,h,r,n,g,c,p,d,u,l,m;return[()=>{e("Cropper",m=class extends i{constructor(e){super(e),this.setImage=()=>{this.props.url&&(this.image=new Image,this.image.onload=this.imageLoaded,this.image.crossOrigin="Anonymous",this.image.src=this.props.url)},this.canvasRef=s(),this.image=void 0,this.prevTouchPositions=new Map,this.pinchInProgress=!1,this.cropImage=()=>{if(this.image){var{cropCenter:e,cropSize:t,zoomCurrent:i}=this.state,s=Math.round(e.x-t.width/2/i),o=Math.round(e.y-t.height/2/i),a=Math.round(t.width/i),h=Math.round(t.height/i),r={x:s,y:o,cropWidth:a,cropHeight:h,originalImageHeight:this.image.height,originalImageWidth:this.image.width},{url:n,mimeType:g,cropImageCallback:d}=this.props,u=c(this.image,g,s,o,a,h);p(n,u,g,null,e=>{d({dataUrl:e,cropParams:r})})}},this.imageLoaded=()=>{if(!this.canvasRef.current||!this.image)throw new Error("Image loaded, but refs are not set.  Should not be able to get here.");var e=new d(this.image.width,this.image.height);this.setState({imageLoaded:!0,imageSize:e})},this.calculateCropSizeAndZoom=()=>{if(!this.canvasRef.current||!this.image)throw new Error("Image loaded, but refs are not set.  Should not be able to get here.");var e,t=this.canvasRef.current,{cropWidth:i,cropHeight:s,imageFitDirection:o}=this.props,a=0===i?t.clientWidth:i,h=0===s?t.clientHeight:s,r=new d(a,h),n=r.width/this.image.width,g=r.height/this.image.height;e="horizontal"===o?n:"vertical"===o?g:Math.max(n,g),this.image.height*e<r.height&&(e=g);var{imageSize:c}=this.state;return{cropSize:r,zoom:e,cropCenter:new u(c.width/2,c.height/2)}},this.updateCanvas=()=>{var{canvasSize:e,imageSize:t,cropCenter:i,zoomCurrent:s}=this.state;if(this.state.imageLoaded&&this.canvasRef.current&&this.image){var o=this.canvasRef.current,a=new d(o.clientWidth,o.clientHeight);o.width=a.width,o.height=a.height;var h=Math.round(t.width*s),r=Math.round(t.height*s),n=a.width/2,g=a.height/2,c=Math.round(n-i.x*s),p=Math.round(g-i.y*s),u=o.getContext("2d");if(u.clearRect(0,0,a.width,a.height),u.drawImage(this.image,c,p,h,r),!e.equals(a)){var l=this.calculateCropSizeAndZoom();this.setState({canvasSize:a,cropSize:l.cropSize,zoomMin:l.zoom,zoomCurrent:l.zoom,cropCenter:l.cropCenter,zoomSliderValue:0})}}},this.mouseDown=e=>{this.props.enabled&&(e.preventDefault(),this.setState({isDragging:!0,prevPointerPosition:new u(e.pageX,e.pageY)}))},this.stopDragging=()=>{this.setState({isDragging:!1})},this.mouseMove=e=>{if(this.state.isDragging&&this.props.enabled){e.preventDefault();var{prevPointerPosition:t}=this.state,i=e.pageX-t.x,s=e.pageY-t.y;this.dragImage(i,s),this.setState({prevPointerPosition:new u(e.pageX,e.pageY)})}},this.touchStart=e=>{this.props.enabled&&(e.preventDefault(),1===e.touches.length?this.saveSingleTouchPosition(e):2===e.touches.length&&(this.saveTouches(e),this.pinchInProgress=!0))},this.touchMove=e=>{this.props.enabled&&(e.preventDefault(),1===e.touches.length?this.touchDrag(e):2===e.touches.length&&this.props.allowZoom&&this.handlePinch(e))},this.saveSingleTouchPosition=e=>{var t=e.touches[0];this.setState({prevPointerPosition:new u(t.pageX,t.pageY)})},this.touchDrag=e=>{var t=e.touches[0],{prevPointerPosition:i}=this.state,s=t.pageX-i.x,o=t.pageY-i.y;this.dragImage(s,o),this.saveSingleTouchPosition(e)},this.touchEnd=e=>{e.preventDefault(),1===e.touches.length&&this.saveSingleTouchPosition(e),1!==e.touches.length&&this.stopDragging(),2!==e.touches.length&&(this.pinchInProgress=!1)},this.touchCancel=()=>{this.stopDragging(),this.pinchInProgress=!1},this.handlePinch=e=>{var t=e.touches[0],i=e.touches[1],s=new u(t.pageX,t.pageY),o=new u(i.pageX,i.pageY),a=this.prevTouchPositions.get(t.identifier),h=this.prevTouchPositions.get(i.identifier);if(a&&h){var r=s.distanceFrom(o),n=a.distanceFrom(h);if(n>0){var g=(r-n)/n,{zoomCurrent:c,zoomMin:p,zoomMax:d,cropCenter:m}=this.state,v=c+g*c;v=l(v,p,d);var w=this.zoomToSliderValue(v),z=this.adjustPointToKeepCropAreaFilled(m,v);this.setState({zoomCurrent:v,cropCenter:z,zoomSliderValue:w}),this.saveTouches(e)}}},this.saveTouches=e=>{Array.from(e.touches).forEach(e=>this.prevTouchPositions.set(e.identifier,new u(e.pageX,e.pageY)))},this.dragImage=(e,t)=>{var{cropCenter:i,zoomCurrent:s}=this.state,o=e/s,a=t/s,h=new u(i.x-o,i.y-a),r=this.adjustPointToKeepCropAreaFilled(h,s);this.setState({cropCenter:r})},this.adjustPointToKeepCropAreaFilled=(e,t)=>{var{cropSize:i,imageSize:s}=this.state,o=new u(e.x,e.y),a=i.width/2/t,h=s.width-a,r=i.height/2/t,n=s.height-r;return o.x=l(o.x,a,h),o.y=l(o.y,r,n),o},this.zoomIncrement=()=>{var{zoomMin:e,zoomMax:t}=this.state;return(t-e)/100},this.sliderValueToZoom=e=>this.state.zoomMin+this.zoomIncrement()*e,this.zoomToSliderValue=e=>(e-this.state.zoomMin)/this.zoomIncrement(),this.sliderChanged=(e,t)=>{if(!this.pinchInProgress){var i=t,s=this.sliderValueToZoom(i),{cropCenter:o}=this.state,a=this.adjustPointToKeepCropAreaFilled(o,s);this.setState({zoomSliderValue:i,zoomCurrent:s,cropCenter:a})}},this.render=()=>{var{cropShape:e,width:t,height:i}=this.props,{canvasSize:s,cropSize:c}=this.state,p={width:c.width,height:c.height,top:(s.height-c.height)/2,left:(s.width-c.width)/2,borderRadius:"rectangle"===e?"0%":"100%"},d=this.state.imageLoaded?o("div",{style:p,className:"_1oSTmI1M"}):null,u=this.state.imageLoaded?null:o("div",{className:"_25Z54ybw"},o(r,{size:"large"})),l=this.props.allowZoom?o("div",{className:"_1VaP5eyt"},o("span",{className:h("ui_icon","photo","_2Wx5MsFo")}),o("div",{className:"_27gOjc0J"},o(g,{min:0,max:99,minHandleValue:0,maxHandleValue:this.state.zoomSliderValue,step:1,onChange:this.sliderChanged})),o("span",{className:"ui_icon photo _1R8PKPUQ"})):null;return o(a,null,o("div",{style:{width:t,height:i},className:"hT95uqgO"},o("canvas",{className:"_1r3AeMBs",ref:this.canvasRef,onMouseDown:this.mouseDown,onMouseUp:this.stopDragging,onMouseOut:this.stopDragging,onBlur:this.stopDragging,onMouseMove:this.mouseMove}),d,u),l,o(n,{callback:this.updateCanvas}))},this.state={canvasSize:new d(0,0),cropSize:new d(0,0),imageLoaded:!1,imageSize:new d(0,0),cropCenter:new u(0,0),zoomMin:1,zoomMax:1,zoomCurrent:1,isDragging:!1,prevPointerPosition:new u(0,0),zoomSliderValue:0}}componentDidMount(){if(this.setImage(),this.canvasRef.current){var e=this.canvasRef.current;e.addEventListener("touchstart",this.touchStart,{passive:!1}),e.addEventListener("touchmove",this.touchMove,{passive:!1}),e.addEventListener("touchend",this.touchEnd,{passive:!1}),e.addEventListener("touchcancel",this.touchCancel,{passive:!1})}}componentDidUpdate(e){e.url!==this.props.url?this.setImage():(this.updateCanvas(),this.props.cropImageNow&&this.cropImage())}}),e("Cropper",m)},[e=>(i=e.Component,s=e.createRef,o=e.createElement,a=e.Fragment),e=>h=e.default,e=>r=e.LoadingSpinner,e=>n=e.default,e=>g=e.Slider,e=>(c=e.cropImageToJpegUrl,p=e.restoreExifAndRotateIfNeeded,d=e.Dimension,u=e.Point,l=e.boundNumber)]]},["cDcdfi","jSLlaY","V08PS7","_g8cls","RdMDmZ","oN8Ht7"]]);