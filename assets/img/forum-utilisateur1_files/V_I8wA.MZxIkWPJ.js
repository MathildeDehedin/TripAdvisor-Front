(this.$WP=this.$WP||[]).push(["V_I8wA",(e,t)=>{"use strict";var i,r,s,a=e=>{var t=e.lastIndexOf(".");if(!(t<0))return e.substring(t).toLowerCase()},n=(e,t,i,r,s,n)=>{var o=((e,t,i)=>{if(i&&e.size>i)return"file_too_large";if(t){var r=a(e.name);if(!r)return"wrong_file_type";if(!t.includes(r))return"wrong_file_type"}})(e,i,r);o?s&&s(e,o):t(e,n)},o=(e,t,i,r,s)=>{if(e.dataTransfer.items)for(var a=0;a<e.dataTransfer.items.length;a++){var o=e.dataTransfer.items[a].getAsFile();n(o,t,i,r,s,"drag_drop")}else for(var l=0;l<e.dataTransfer.files.length;l++){var p=e.dataTransfer.files[l];n(p,t,i,r,s,"drag_drop")}};return[()=>{e("DropZone",s=class extends i{constructor(e){super(e),this.fileInputRef=void 0,this.eventPreventDefault=e=>{e.preventDefault()},this.handleDragOver=e=>{e.preventDefault(),this.setState({isDragOver:!0})},this.handleDragLeave=e=>{e.preventDefault(),this.setState({isDragOver:!1})},this.handleDrop=e=>{e.preventDefault(),o(e,this.props.addFile,this.props.allowedFileTypes,this.props.maxSizeInBytes,this.props.fileRejected),this.setState({isDragOver:!1})},this.fileSelectionChanged=e=>{var t=e.target.files;Array.from(t).forEach(e=>n(e,this.props.addFile,this.props.allowedFileTypes,this.props.maxSizeInBytes,this.props.fileRejected,"file_picker")),this.fileInputRef.value=""},this.render=()=>{var e=this.props.allowMultipleSelection?{multiple:!0}:{};return r("div",{style:{width:this.props.width,height:this.props.height},className:"_2DMlz86r "+(this.props.isDragOverOutsideComponent||this.state.isDragOver?"g59pfI1F":""),onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,onClick:()=>this.fileInputRef.click()},r("input",Object.assign({style:{display:"none"},type:"file",name:"media",accept:this.props.allowedFileTypes.join(",")},e,{onChange:this.fileSelectionChanged,onClick:e=>e.stopPropagation(),ref:e=>{this.fileInputRef=e}})),this.props.children)},this.state={isDragOver:!1}}componentDidMount(){this.props.disableOnDropForPage&&(window.addEventListener("dragover",this.eventPreventDefault),window.addEventListener("drop",this.eventPreventDefault))}componentWillUnmount(){this.props.disableOnDropForPage&&(window.removeEventListener("dragover",this.eventPreventDefault),window.removeEventListener("drop",this.eventPreventDefault))}}),s.defaultProps={allowedFileTypes:["*"],allowMultipleSelection:!0,disableOnDropForPage:!0,isDragOverOutsideComponent:!1,width:"100%",height:"100%"},e({DropZone:s,fileExtentsion:a,maxImageUploadSizeInBytes:15728640,maxImageUploadSizeInMB:15,maxVideoUploadSizeInBytes:524288e3,processFile:n,processFilesFromDrop:o})},[e=>(i=e.Component,r=e.createElement)]]},["cDcdfi"]]);
