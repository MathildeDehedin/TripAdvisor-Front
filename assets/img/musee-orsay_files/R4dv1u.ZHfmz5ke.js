(this.$WP=this.$WP||[]).push(["R4dv1u",(e,a)=>{"use strict";var t,o,s,n,h,i,r,c,l,u,d,m=e=>{var[a,h]=o(e.defaultVisible),l=c(),u=s(()=>{h(!0)},[]),{map:d}=e;n(()=>(d.on("centerChange",u),d.on("zoomChange",u),()=>{d.off("centerChange",u),d.off("zoomChange",u)}),[d,u]);var m=s(()=>{l({module:"map_view",action:"redo"}),e.onRedoSearch(),h(!1)},[e,l]);return a&&t("div",{className:"_1S_EkNr2",onClick:m},t("span",{className:"_7rpkRE97"},t(i,{name:"refresh"})),t("span",{className:"_38uOcEb9"},t(r,{id:"map_search_redo_search_button_text"})))},p=e=>t(u,null,({map:a})=>a?t(m,Object.assign({},e,{map:a})):null),C=e=>{var a=l({module:"search_toggle",action:"active"}),o=l({module:"search_toggle",action:"inactive"});return t(d,Object.assign({trackCheckboxClick:e=>e?a():o()},e))},S=e=>t(u,null,({map:a})=>a&&t(C,{defaultChecked:e.defaultChecked,onRedoSearch:e.onRedoSearch,map:a}));return[()=>{p.defaultProps={defaultVisible:!1},(d=class extends h{constructor(...e){super(...e),this.state={autoSearchEnabled:null,mapHasMoved:!1},this.onCheckboxClicked=()=>{var e=null===this.state.autoSearchEnabled?!this.props.defaultChecked:!this.state.autoSearchEnabled;this.props.trackCheckboxClick(e),this.setState({autoSearchEnabled:e})},this.onMapMoved=e=>{this.isAutoSearchEnabled()?this.onAutoSearch(e.userGesture):this.setState({mapHasMoved:!0})},this.onAutoSearch=e=>{this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.props.onRedoSearch(!0,e),this.timeout=null},0),this.setState({mapHasMoved:!1})},this.onManualRedoSearch=()=>{this.props.onRedoSearch(!1,!0),this.setState({mapHasMoved:!1})},this.timeout=void 0}componentDidMount(){var{map:e}=this.props;e.on("centerChange",this.onMapMoved),e.on("zoomChange",this.onMapMoved)}componentWillUnmount(){var{map:e}=this.props;e.off("centerChange",this.onMapMoved),e.off("zoomChange",this.onMapMoved),this.timeout&&clearTimeout(this.timeout)}isAutoSearchEnabled(){return null!==this.state.autoSearchEnabled?this.state.autoSearchEnabled:this.props.defaultChecked}render(){var e=this.isAutoSearchEnabled();return!this.isAutoSearchEnabled()&&this.state.mapHasMoved?t(p,{onRedoSearch:this.onManualRedoSearch,defaultVisible:!0}):t("div",{className:"nN3HHPj7"},t("div",{className:"n05_U_dD",onClick:this.onCheckboxClicked},t("div",{className:"_3_yRUXrk"},e&&t("span",{className:"_2xNL-XoT"},t(i,{name:"checkmark"}))),t("span",{className:"_3BpXZ7GK"},t(r,{id:"map_auto_search_label"}))))}}).defaultProps={defaultChecked:!1},S.defaultProps={defaultChecked:!1},e({AutoSearchToggle:S,RedoSearchButton:p})},[e=>(t=e.createElement,o=e.useState,s=e.useCallback,n=e.useEffect,h=e.PureComponent),e=>i=e.default,e=>r=e.default,e=>(c=e.useGARecorder,l=e.useGARecordCallback),e=>u=e.MapContextConsumer]]},["cDcdfi","OMqGt0","0DsHEV","fsml46","VwUieX"]]);
