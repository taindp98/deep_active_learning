if (self.CavalryLogger) { CavalryLogger.start_js(["M0hqeeJ"]); }

__d("CometProfileVerificationBadgePopoverQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"profileID"}],b=[{alias:null,args:[{kind:"Variable",name:"id",variableName:"profileID"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometProfileVerificationBadgePopoverQuery",selections:b,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometProfileVerificationBadgePopoverQuery",selections:b},params:{id:"3887981861237282",metadata:{},name:"CometProfileVerificationBadgePopoverQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometProfileVerificationBadgePopover.react",["fbt","CometPopover.react","CometProfileVerificationBadgePopoverQuery.graphql","CometRelay","TetraText.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e,f;a=a.queries;a=d("CometRelay").usePreloadedQuery(i!==void 0?i:i=b("CometProfileVerificationBadgePopoverQuery.graphql"),a.queryReference);e=((e=a.node)==null?void 0:e.__typename)==="Page";f=((f=a.node)==null?void 0:f.__typename)==="User";a=(a=a.node)==null?void 0:a.id;if(a==null)return null;if(!e&&!f){c("recoverableViolation")("Trying to render verification badge popover with unsupported Profile type","pages_integrity");return null}a=null;e?a=h._("Huy hi\u1ec7u \u0111\u00e3 x\u00e1c minh x\u00e1c nh\u1eadn \u0111\u00e2y l\u00e0 Trang x\u00e1c th\u1ef1c c\u1ee7a ng\u01b0\u1eddi c\u1ee7a c\u00f4ng ch\u00fang, c\u00f4ng ty truy\u1ec1n th\u00f4ng ho\u1eb7c th\u01b0\u01a1ng hi\u1ec7u n\u00e0y."):f&&(a=h._("Facebook \u0111\u00e3 x\u00e1c nh\u1eadn \u0111\u00e2y l\u00e0 trang c\u00e1 nh\u00e2n th\u1eadt c\u1ee7a ng\u01b0\u1eddi c\u1ee7a c\u00f4ng ch\u00fang n\u00e0y."));return j.jsx(c("CometPopover.react"),{withArrow:!0,children:j.jsx("div",{className:"cs7azdtd dhix69tm sjgh65i0 wkznzc2l tr9rh885",children:j.jsxs(c("TetraText.react"),{type:"body3",children:[a," "]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);