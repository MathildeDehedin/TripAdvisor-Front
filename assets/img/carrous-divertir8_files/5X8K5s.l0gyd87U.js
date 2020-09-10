(this.$WP=this.$WP||[]).push(["5X8K5s",(e,i)=>{"use strict";var n,t,a,o,s,d,r,c,l,u,m,p,k,v,h,S,g,f,N,_={},y={},D={},F={},b={};return[()=>{(k=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Photo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Photo"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photoSizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PhotoSize"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":124}}')).__key=75276630947528,k.loc.source={body:"4476b4d8f6c8"},(v=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Paragraph"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphData"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"header"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"richText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photocaption"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Photo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":162}}')).__key=0x99da91c30590,v.loc.source={body:"99da91c30590"},v.definitions=v.definitions.concat(k.definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var i=e.name.value;return!_[i]&&(_[i]=!0,!0)}))),(h=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageData"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paragraphs"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Paragraph"},"directives":[]}]}}]}}],"loc":{"start":0,"end":118}}')).__key=23792895561982,h.loc.source={body:"15a3b71690fe"},h.definitions=h.definitions.concat(function(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var i=e.name.value;return!y[i]&&(y[i]=!0,!0)}))}(v.definitions)),(S=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShopOverview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShopOverview"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"},"directives":[]}]}}]}}],"loc":{"start":0,"end":126}}')).__key=78600610593556,S.loc.source={body:"477ca1793b14"},S.definitions=S.definitions.concat(function(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var i=e.name.value;return!D[i]&&(D[i]=!0,!0)}))}(h.definitions)),(g=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShopDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShopDetail"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopOverview"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShopOverview"},"directives":[]}]}}]}}],"loc":{"start":0,"end":126}}')).__key=0xdab22bbc0ae0,g.loc.source={body:"dab22bbc0ae0"},g.definitions=g.definitions.concat(function(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var i=e.name.value;return!F[i]&&(F[i]=!0,!0)}))}(S.definitions)),(f=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShoppingPoi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShopDetail"},"directives":[]}]}}]}}],"loc":{"start":0,"end":146}}')).__key=0x73320a31ef20,f.loc.source={body:"73320a31ef20"},f.definitions=f.definitions.concat(function(e){return e.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var i=e.name.value;return!b[i]&&(b[i]=!0,!0)}))}(g.definitions)),p=class extends n{constructor(...e){super(...e),this.state={hasDescription:!0},this.weatherSection=()=>!this.props.geoId||this.state.hasDescription?null:t("div",{className:"_3Sus5O2S"},t(u,{locationId:this.props.geoId})),this.descriptionSection=()=>t(a,{query:f,variables:{locId:this.props.locationId}},({loading:e,data:i})=>{if(e||!i||!i.shops||!i.shops[0]||!this.state.hasDescription)return null;var{shopOverview:n}=i.shops[0];return n?t("div",{className:"_3Sus5O2S"},t(m,{overview:n,trackingKey:"shopping_description",trackingProps:{module:"shopping_detail_page",context:"shopping_type_premium"}})):(this.setState({hasDescription:!1}),null)}),this.locationHoursSection=()=>this.props.hoursData&&(this.props.hoursData.currentHoursText||this.props.hoursData.hoursTodayText)?t("div",{className:"_3Sus5O2S"},t(l,{name:"clock",className:"_2MAe_UKV"}),t("span",{className:"_328n0Chj"},t(c,{viewportCategory:this.props.viewportCategory,locationName:this.props.attraction&&this.props.attraction.name||"",hoursData:this.props.hoursData,displayMode:"full",popoverPosition:"rightOf",locationId:this.props.locationId,servlet:"Attraction_Review"}))):null,this.recommendedVisitSection=()=>this.props.attraction&&this.props.attraction.recommendedVisit?t("div",{className:"_3Sus5O2S"},t(l,{name:"duration",className:"_2MAe_UKV"}),t("span",{className:"_328n0Chj"},d("attractions.native.suggested.duration",{0:this.props.attraction.recommendedVisit}))):null,this.featuredGuideSection=()=>this.props.attraction&&this.props.attraction.guideInfo&&this.props.attraction.guideInfo.title&&this.props.attraction.guideInfo.url?t("div",{className:"_3Sus5O2S"},t(l,{name:"guides",className:"_2MAe_UKV"}),t("span",{className:"_328n0Chj"},r(d("triplist_featured_in",{0:this.props.attraction.guideInfo.title,1:this.props.attraction.guideInfo.url})))):null}render(){return t("div",{className:"_25JrJXie"},t("div",{className:s("_3Sus5O2S","CGzUaVOa")},d("curated_shopping_detail_store_description")),this.descriptionSection(),this.locationHoursSection(),this.recommendedVisitSection(),this.featuredGuideSection(),this.weatherSection())}},N=o((e,i)=>{u.stage(e,i,e.route.geo);var n=i(`/data/1.0/location/${e.page.detailId}/hours`),t=i("/data/1.0/attraction/about/"+e.page.detailId);return()=>({viewportCategory:e.meta.device.viewportCategory,attraction:t.get().data,hoursData:n.get().data,locationId:e.route.detail,geoId:e.route.geo})})(p),e("default",N)},[e=>(n=e.Component,t=e.createElement),e=>a=e.Query,e=>o=e.bind,e=>s=e.default,e=>(d=e.localize,r=e.unescaped),e=>c=e.LocationHours,e=>l=e.Icon,e=>u=e.default,e=>m=e.default]]},["cDcdfi","MGkW-Q","RiHMo-","jSLlaY","535agn","Kp9O3W","_qQcW3","2HGNy_","AcWXqu"]]);
