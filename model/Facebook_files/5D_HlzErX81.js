if (self.CavalryLogger) { CavalryLogger.start_js(["JVqRTfg"]); }

__d("PublicEventCometRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4583700888358929",metadata:{},name:"PublicEventCometRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometDiscussionCardRendererQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4471904159539855",metadata:{},name:"EventCometDiscussionCardRendererQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometPermalinkHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4250173905068066",metadata:{},name:"EventCometPermalinkHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PublicEventCometAboutRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5956856207722636",metadata:{},name:"PublicEventCometAboutRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PublicEventCometDiscussionRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4197843766977285",metadata:{},name:"PublicEventCometDiscussionRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometFeedUnitVariables.entrypoint",["WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"EVENT",feedbackSource:34,focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"event",scale:d("WebPixelRatio").get(),useDefaultActor:!1};g["default"]=a}),98);
__d("EventCometFeedVariables",["EventCometFeedUnitVariables.entrypoint","orEmptyArray"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e){return babelHelpers["extends"]({},c("EventCometFeedUnitVariables.entrypoint"),{eventID:a,focusCommentID:(a=e)!=null?a:d,hoistedIDs:c("orEmptyArray")(b)})}g.getFeedVariables=a}),98);
__d("buildPublicEventCometRoute.entrypoint",["EventCometPermalinkHeaderQuery$Parameters","JSResourceForInteraction","PublicEventCometRootQuery$Parameters","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("PublicEventCometRoot.react").__setRef("buildPublicEventCometRoute.entrypoint"),function(a){a=a.routeProps;var c=a.arenaID;a=a.eventID;var e=d("WebPixelRatio").get();return{eventPermalinkHeaderQueryReference:{parameters:b("EventCometPermalinkHeaderQuery$Parameters"),variables:{arenaID:c,eventID:a,scale:e}},publicEventCometRootQueryReference:{parameters:b("PublicEventCometRootQuery$Parameters"),variables:{eventID:a,scale:e}}}});g["default"]=a}),98);
__d("PublicEventCometAboutRoot.entrypoint",["JSResourceForInteraction","PublicEventCometAboutRootQuery$Parameters","WebPixelRatio","buildPublicEventCometRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";var h=7771;a=c("buildPublicEventCometRoute.entrypoint")(c("JSResourceForInteraction")("PublicEventCometAboutRoot.react").__setRef("PublicEventCometAboutRoot.entrypoint"),function(a){a=a.routeProps;var c=a.arenaID;a=a.eventID;var e=h,f=d("WebPixelRatio").get();return{queries:{publicEventAboutRootQueryReference:{parameters:b("PublicEventCometAboutRootQuery$Parameters"),variables:{arenaID:c,eventID:a,nuxID:e,scale:f}}}}});g["default"]=a}),98);
__d("PublicEventCometDiscussionRoot.entrypoint",["EventCometDiscussionCardRendererQuery$Parameters","EventCometFeedVariables","JSResourceForInteraction","PublicEventCometDiscussionRootQuery$Parameters","WebPixelRatio","buildPublicEventCometRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPublicEventCometRoute.entrypoint")(c("JSResourceForInteraction")("PublicEventCometDiscussionRoot.react").__setRef("PublicEventCometDiscussionRoot.entrypoint"),function(a){var c=a.routeParams;a=a.routeProps;var e=a.eventID;a=a.postIDs;var f=d("WebPixelRatio").get(),g=c.comment_id;c=c.reply_comment_id;return{queries:{eventDiscussionCardRendererQueryReference:{parameters:b("EventCometDiscussionCardRendererQuery$Parameters"),variables:d("EventCometFeedVariables").getFeedVariables(e,a,g,c)},publicEventDiscussionRootQueryReference:{parameters:b("PublicEventCometDiscussionRootQuery$Parameters"),variables:{eventID:e,scale:f}}}}});g["default"]=a}),98);