if (self.CavalryLogger) { CavalryLogger.start_js(["te1o0rP"]); }

__d("SearchCometInterestsDeepDivePostsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4212914865443244",metadata:{},name:"SearchCometInterestsDeepDivePostsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometInterestsDeepDiveRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4507317979287122",metadata:{},name:"SearchCometInterestsDeepDiveRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometInterestsDeepDiveFeedEntryPointVariables",["WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={UFI2CommentsProvider_commentsKey:"SearchCometInterestsDeepDiveRootQuery",displayCommentsContextEnableComment:!1,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!0,displayCommentsFeedbackContext:null,feedLocation:"SEARCH",feedbackSource:40,focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"search_results_page",scale:d("WebPixelRatio").get(),useDefaultActor:!1};g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveRoot.entrypoint",["JSResourceForInteraction","SearchCometInterestsDeepDiveFeedEntryPointVariables","SearchCometInterestsDeepDivePostsQuery$Parameters","SearchCometInterestsDeepDiveRootContentQuery$Parameters","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams,e=a.routeProps.topic_id;a=a.timeSpentMetaData;var f=b.__eep__,g;b.__gid__!=null&&(g=b.__gid__);var h;b.hashtag!=null&&(h=b.hashtag);var i;b.explore_tab!=null&&(i=b.explore_tab);b=(a=a==null?void 0:(b=a.session_ids)==null?void 0:b.search_sid)!=null?a:c("uuid")();a=i==="latest"?"RECENT":"TOP";var j=g!=null?{container_scope_fbid:g}:null;f={extra_data:f!=null?JSON.stringify({entry_point:f}):null,scope_information:j,session_id:b,topic_id:h!=null?"#"+h:e};return{queries:{postsQuery:{parameters:c("SearchCometInterestsDeepDivePostsQuery$Parameters"),variables:babelHelpers["extends"]({input:babelHelpers["extends"]({},f,{explore_tab:a})},c("SearchCometInterestsDeepDiveFeedEntryPointVariables"))},rootContentQuery:{parameters:c("SearchCometInterestsDeepDiveRootContentQuery$Parameters"),variables:{input:babelHelpers["extends"]({},f),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("SearchCometInterestsDeepDiveRoot.react").__setRef("SearchCometInterestsDeepDiveRoot.entrypoint")};g["default"]=a}),98);