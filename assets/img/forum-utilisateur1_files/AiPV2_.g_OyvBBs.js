(this.$WP=this.$WP||[]).push(["AiPV2_",(e,t)=>{"use strict";var a,r,i,s,c,l,I={VIDEO_VISIBLE:"VIDEO_VISIBLE",VIDEO_INVISIBLE:"VIDEO_INVISIBLE"};return[()=>{c=i({activePlayer:void 0,dispatch:void 0}),s=class extends a{constructor(...e){super(...e),this.state={activePlayer:void 0,dispatch:e=>{var t=((e=(()=>Object.freeze({}))(),t)=>{switch(t.type){case I.VIDEO_VISIBLE:return!e.activePlayer||e.activePlayer!==t.player&&e.activePlayer.state.userInteracted||e.activePlayer!==t.player&&t.player.elemPosition+50<e.activePlayer.elemPosition?Object.assign({},e,{activePlayer:t.player}):e;case I.VIDEO_INVISIBLE:return e.activePlayer===t.player?Object.assign({},e,{activePlayer:void 0}):e;default:return e}})(this.state,e);this.setState(t)}}}render(){var{state:e,props:{children:t}}=this;return r(c.Provider,{value:e},t)}},l=c.Consumer,e("default",s),e({ActionTypes:I,VideoPlayerConsumer:l})},[e=>(a=e.PureComponent,r=e.createElement,i=e.createContext)]]},["cDcdfi"]]);