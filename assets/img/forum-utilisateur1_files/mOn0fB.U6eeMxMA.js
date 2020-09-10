(this.$WP=this.$WP||[]).push(["mOn0fB",(e,i)=>{"use strict";var t,a,n,s,d,o,l,r,m,u,h,c,v,k=({onAddFile:e,isDragOverOutsideComponent:i,ctaText:a})=>t(r,{addFile:e,allowedFileTypes:u,maxSizeInBytes:m,allowMultipleSelection:!1,isDragOverOutsideComponent:i},t("div",{className:"_2StckDz5"},t("div",null,a)));return[()=>{(c=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PhotoSelector"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photosForUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photoSizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isHorizontal"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":248}}')).__key=0xf20e349553e8,c.loc.source={body:"f20e349553e8"},k.defaultProps={isDragOverOutsideComponent:!1},e("PhotoSelector$1",h=class extends a{constructor(e){super(e),this.allPhotos=[],this.fetchedCurrentPage=!1,this.receivedPageWithZeroPhotos=!1,this.newFileSelected=e=>{this.props.photoSelected(e,void 0)},this.photoClicked=e=>{this.props.photoSelected(void 0,e)},this.render=()=>{var e={width:"100%",height:"100%"};return t("div",{className:"ecOdIcH7"},t("div",{className:"_2G_ruwjw"},t(k,{onAddFile:this.newFileSelected,isDragOverOutsideComponent:this.props.isDragOverOutsideComponent,ctaText:d("upload_profile_photo")})),t(s,{query:c,variables:{userId:this.props.userId,offset:30*this.state.photoPage,limit:30}},({loading:i,data:a})=>(!i&&a&&a.photosForUsers&&(this.fetchedCurrentPage=!0,0===a.photosForUsers.length&&(this.receivedPageWithZeroPhotos=!0),a.photosForUsers.forEach(e=>{this.allPhotos.some(i=>i.id===e.id)||this.allPhotos.push(e)})),this.allPhotos.map(i=>t("div",{className:"_2G_ruwjw",key:i.id,onClick:()=>this.photoClicked(i)},t(l,Object.assign({sources:i.photoSizes},e)))))),t(o,{onChange:e=>{e&&this.fetchedCurrentPage&&!this.receivedPageWithZeroPhotos&&(this.fetchedCurrentPage=!1,this.setState({photoPage:this.state.photoPage+1}))}},e=>t("div",{style:{width:1,height:1},ref:e})))},this.state={photoPage:0}}}),v=n(e=>({userId:e.auth.loggedInUserId}))(h),e({ImageDropzone:k,PhotoSelector:v})},[e=>(t=e.createElement,a=e.Component),e=>n=e.connect,e=>s=e.Query,e=>d=e.localize,e=>o=e.default,e=>l=e.ResponsiveImage,e=>(r=e.DropZone,m=e.maxImageUploadSizeInBytes),e=>u=e.supportedImageTypes]]},["cDcdfi","h74DsO","MGkW-Q","535agn","BLrxBS","KwOV1Z","V_I8wA","oN8Ht7"]]);