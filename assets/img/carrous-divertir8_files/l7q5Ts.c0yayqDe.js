(this.$WP=this.$WP||[]).push(["l7q5Ts",(e,r)=>{"use strict";var t,s,i,n,a,o,d=(e,r)=>{if(0===r)return 0;var t=e.findIndex(e=>e.id===r);return-1===t?0:t};return[()=>{(o=class extends t{constructor(...e){super(...e),this.onSwipe=e=>{i({module:"map_card",action:"swipe"}),this.props.onSwipe(this.props.locations[e])},this.renderItem=e=>s("div",{style:{width:"310px"}},s(n,{location:e,largeImage:!0,spTrackingHandler:this.props.spTrackingHandler}))}render(){var{props:e}=this;return s(a,{items:e.locations.map(e=>this.renderItem(e)),selectedIndex:d(e.locations,e.selectedMarker),onSwipe:this.onSwipe})}}).defaultProps={selectedMarker:0,spTrackingHandler:null},e("default",o)},[e=>(t=e.PureComponent,s=e.createElement),e=>i=e.default,e=>n=e.LocationCard,e=>a=e.default]]},["cDcdfi","Jk5sjx","CF88Pt","mcogfz"]]);