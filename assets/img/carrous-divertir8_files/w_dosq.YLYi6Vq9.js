(this.$WP=this.$WP||[]).push(["w_dosq",(t,e)=>{"use strict";var r,s;return[()=>{(s=class extends r{constructor(...t){super(...t),this.state={loading:!0,data:null,error:null},this.currentRequest=void 0}componentDidMount(){this.doFetch(this.props.url)}componentDidUpdate(t){this.props.url!==t.url&&this.doFetch(this.props.url)}componentWillUnmount(){this.currentRequest=null}parseData(t,e){return this.props.parser?this.props.parser(t,e):t}doFetch(t){var e=fetch(t,{credentials:"same-origin"});this.currentRequest=e,this.currentRequest.then(t=>{if(t.status>=200&&t.status<300)return Promise.resolve(t);var e=new Error(t.statusText||t.status);return Promise.reject(e)}).then(t=>t.json()).then(t=>e===this.currentRequest&&this.setState({loading:!1,data:this.parseData(t,null),error:void 0})).catch(t=>e===this.currentRequest&&this.setState({loading:!1,data:this.parseData(null,t),error:t})),this.setState({loading:!0})}render(){return this.props.children({loading:this.state.loading,data:this.state.data,error:this.state.error})}}).defaultProps={parser:void 0},t("default",s)},[t=>r=t.PureComponent]]},["cDcdfi"]]);