(this.$WP=this.$WP||[]).push(["v1LLMv",(e,i)=>{"use strict";var n,a,t,d,l,o,m,s,r={},c=e=>n(t,{query:m,variables:{geoId:e.geoId,locationId:e.locationId,limit:15}},({loading:e,data:i})=>{if(e||!i||!i.crossSellShoppingList||i.crossSellShoppingList.items.length<4)return null;var a=Object.assign({},i.crossSellShoppingList);if(a.items){var t=a.items.filter(e=>{var i;return null==e||null==(i=e.location)?void 0:i.thumbnail});a.items=t.length>=4?t.slice(0,4):a.items.slice(0,4)}var o=d("other_shops_in_geo",{sGeo:i.crossSellShoppingList.locations[0].name});return n(l,{shelf:a,title:o,shelfType:"shopping_shelf",hasBorder:!0,hasSaveButton:!0,padding:!0,verticalMargin:!0})});return[()=>{(o=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShoppingShelfItemDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShoppingListItem"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isPremium"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShoppingShelfItemLocationInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShoppingShelfLocationName"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShoppingShelfLocationUrl"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShoppingShelfLocationThumbnail"},"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShoppingShelfLocationUrl"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"absoluteUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShoppingShelfLocationThumbnail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoSizes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isHorizontal"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShoppingShelfLocationName"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInformation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"geoName"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":579}}')).__key=0xe729761f1775,o.loc.source={body:"e729761f1775"},(m=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrossSellShoppingShelfQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crossSellShoppingList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"geoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"absoluteUrl"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"locationIds"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShoppingShelfItemDetail"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShoppingShelfItemLocationInfo"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reviewSummary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":500}}')).__key=37862392895288,m.loc.source={body:"226f867a9738"},m.definitions=m.definitions.concat(o.definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var i=e.name.value;return!r[i]&&(r[i]=!0,!0)}))),s=a(e=>({geoId:e.page.geoId,locationId:e.page.detailId}))(c),e("default",s)},[e=>n=e.createElement,e=>a=e.connect,e=>t=e.Query,e=>d=e.localize,e=>l=e.default]]},["cDcdfi","h74DsO","MGkW-Q","535agn","sHvTsL"]]);