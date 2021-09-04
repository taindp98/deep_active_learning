if (self.CavalryLogger) { CavalryLogger.start_js(["TCD5\/uH"]); }

__d("CometPoliticalInfosheetDialogSelector_verifiedVoiceContext.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPoliticalInfosheetDialogSelector_verifiedVoiceContext",selections:[{alias:null,args:null,kind:"ScalarField",name:"client_token",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometPoliticalInfosheetReshareDialog_verifiedVoiceContext"}],type:"VerifiedVoiceContext",abstractKey:null};e.exports=a}),null);
__d("CometPoliticalInfosheetDialogV2Query$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4215923345157771",metadata:{},name:"CometPoliticalInfosheetDialogV2Query",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoryLocationTransparencyDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6620889521270666",metadata:{},name:"StoryLocationTransparencyDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPoliticalInfosheetDialogV2.entrypoint",["CometPoliticalInfosheetDialogV2Query$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.ad_id,d=a.client_token,e=a.feed_object_id;a=a.story_id;return{queries:{politicalInfosheetQueryReference:{parameters:c("CometPoliticalInfosheetDialogV2Query$Parameters"),variables:{ad_id:b,client_token:d,feed_object_id:e,story_id:a}}}}},root:c("JSResourceForInteraction")("CometPoliticalInfosheetDialogV2.react").__setRef("CometPoliticalInfosheetDialogV2.entrypoint")};g["default"]=a}),98);
__d("CometPoliticalInfosheetDialogSelector.react",["CometEntryPointDialogTrigger.react","CometLazyDialogTrigger.react","CometPoliticalInfosheetDialogSelector_verifiedVoiceContext.graphql","CometPoliticalInfosheetDialogV2.entrypoint","CometRelay","JSResourceForInteraction","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=c("JSResourceForInteraction")("CometPoliticalInfosheetReshareDialog.react").__setRef("CometPoliticalInfosheetDialogSelector.react");function a(a){var e=a.adID,f=a.clientToken,g=a.dialogTriggerFunc,k=a.feedObjectID,l=a.storyID;a=a.verifiedVoiceContext;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPoliticalInfosheetDialogSelector_verifiedVoiceContext.graphql"),a);var m=(a==null?void 0:a.client_token)==null;if(!m)return i.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometPoliticalInfosheetDialogV2.entrypoint"),otherProps:{adID:e,onClose:c("emptyFunction"),storyID:l},preloadParams:{ad_id:e,client_token:f,feed_object_id:k,story_id:l},children:function(a){return g(a)}});else return i.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:{adID:e,isReshared:!0,onClose:c("emptyFunction"),verifiedVoiceContext:a},dialogResource:j,children:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoryLocationTransparencyDialog.entrypoint",["JSResourceForInteraction","StoryLocationTransparencyDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{storyLocationTransparencyDialogQueryReference:{parameters:c("StoryLocationTransparencyDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),storyID:a.storyID}}}}},root:c("JSResourceForInteraction")("StoryLocationTransparencyDialog.react").__setRef("StoryLocationTransparencyDialog.entrypoint")};g["default"]=a}),98);