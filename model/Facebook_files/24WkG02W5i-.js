if (self.CavalryLogger) { CavalryLogger.start_js(["RJ8ez55"]); }

__d("CometPagePostsRootHoistedStoryQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6612533658772228",metadata:{},name:"CometPagePostsRootHoistedStoryQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPagePostsRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2846675535456024",metadata:{},name:"CometPagePostsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometVideosRootQueryVariables",[],(function(a,b,c,d,e,f){"use strict";a=8;f.count=a}),66);
__d("CometPagePostsRoot.entrypoint",["CometPagePostsRootHoistedStoryQuery$Parameters","CometPagePostsRootQuery$Parameters","CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeProps,e=b.pageID;b=b.storyIDs;a=a.routeParams;var f=a.comment_id;a=a.reply_comment_id;a=(a=a)!=null?a:f;f={cometPagePostsRootHoistedStoryQueryReference:{parameters:c("CometPagePostsRootHoistedStoryQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometPagePostsRootHoistedStoryQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE_PERMALINK",feedbackSource:2,focusCommentID:a!=null?String(a):null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),storyIDs:b,useDefaultActor:!1}},cometPagePostsRootQueryReference:{parameters:c("CometPagePostsRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometPagePostsRootPostsQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:22,focusCommentID:a!=null?String(a):null,pageID:e,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}};if(c("gkx")("1692176"))return{queries:babelHelpers["extends"]({loggedOutCTAfooterDataQueryReference:{parameters:c("CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{profileID:e,scale:d("WebPixelRatio").get()}}},f)};else return{queries:f}},root:c("JSResourceForInteraction")("CometPagePostsRoot.react").__setRef("CometPagePostsRoot.entrypoint")};g["default"]=a}),98);