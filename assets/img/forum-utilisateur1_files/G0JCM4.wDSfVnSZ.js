(this.$WP=this.$WP||[]).push(["G0JCM4",(e,r)=>{"use strict";var t,n,o,i,s=e=>{var{onError:r}=e,n=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["onError"]);return t(o,n,e=>t(i,{query:n.query,skip:n.skip,fetchPolicy:n.fetchPolicy,result:e,onError:r},n.children(e)))};return[()=>{i=class extends n{componentDidMount(){var{result:e,onError:r}=this.props;r&&e.error&&r(e.error)}shouldComponentUpdate({result:e,fetchPolicy:r,query:t,skip:n}){var{loading:o,error:i,data:s,refetch:u}=e;return!!(n||"cache-only"===r||o||i||s&&0!==Object.keys(s).length)||(t.definitions&&t.definitions[0]&&t.definitions[0].name&&t.definitions[0].name.value&&console.error(`The query was underfetched:${t.definitions[0].name.value}. If the query is stateful, then this will cause unexpected bugs downstream.`),u(),!1)}componentDidUpdate({result:e}){var{result:r,onError:t}=this.props;t&&!e.error&&r.error&&t(r.error)}render(){return this.props.children}},e("default",s)},[e=>(t=e.createElement,n=e.Component),e=>o=e.Query]]},["cDcdfi","MGkW-Q"]]);
