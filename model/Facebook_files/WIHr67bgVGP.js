if (self.CavalryLogger) { CavalryLogger.start_js(["Ln1kpVv"]); }

__d("LWICometBoostUnavailableButton_boostedComponent.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LWICometBoostUnavailableButton_boostedComponent",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boost_unavailable_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"eligibility_rule",storageKey:null},{alias:null,args:null,concreteType:"Error",kind:"LinkedField",name:"coded_exception",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"summary",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"template_post_spec_override",storageKey:null}],type:"BoostedPostBoostUnavailableInfo",abstractKey:null},{args:null,kind:"FragmentSpread",name:"LWICometBoostUnavailablePopover_boostUnavailableInfo"}],storageKey:null}],type:"BoostedComponentWrapper",abstractKey:null};e.exports=a}),null);
__d("LWICometButtonQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"boostedComponentInput"},{defaultValue:null,kind:"LocalArgument",name:"clientSpecOverride"},{defaultValue:null,kind:"LocalArgument",name:"graphqlEntryPoint"}],b=[{kind:"Variable",name:"input",variableName:"boostedComponentInput"}],c={alias:null,args:[{kind:"Variable",name:"client_spec_override",variableName:"clientSpecOverride"},{kind:"Variable",name:"entry_point",variableName:"graphqlEntryPoint"}],concreteType:"BoostedComponentButtonData",kind:"LinkedField",name:"button_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"button_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_action_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tooltip_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_label_type",storageKey:null}],storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LWICometButtonQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boost_unavailable_info",plural:!1,selections:[d],storageKey:null}],type:"BoostedComponentWrapper",abstractKey:null},{args:null,kind:"FragmentSpread",name:"LWICometBoostUnavailableButton_boostedComponent"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LWICometButtonQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[d,c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boost_unavailable_info",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"eligibility_rule",storageKey:null},{alias:null,args:null,concreteType:"Error",kind:"LinkedField",name:"coded_exception",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"summary",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"template_post_spec_override",storageKey:null}],type:"BoostedPostBoostUnavailableInfo",abstractKey:null},{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentBoostUnavailableInfo"},{alias:null,args:null,kind:"ScalarField",name:"confirm_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"confirm_link",storageKey:null}],storageKey:null}],type:"BoostedComponentWrapper",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3768801546575687",metadata:{},name:"LWICometButtonQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometPageSpotlightCardVideoPlayer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageSpotlightCardVideoPlayer_video",selections:[{args:null,kind:"FragmentSpread",name:"CometFeedVideoPlayerPlaceholder_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoIndicator_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedStoryControls_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedThumbnail_video"},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"if_viewer_can_see_pay_to_access_paywall",plural:!1,selections:[{args:null,documentName:"CometPageSpotlightCardVideoPlayer_video",fragmentName:"CometPayToAccessPaywallConditionalLoader_video",fragmentPropName:"video",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("AdsLWICoBPostCreationDialog.entrypoint",["JSResourceForInteraction","LWICometPostCreationRootContentQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=String(a.pageID);a=String(a.targetID);var e={page_id:c,product:"BOOSTED_POST",target_id:a};return{queries:{postCreationRootQueryRef:{parameters:b("LWICometPostCreationRootContentQuery$Parameters"),variables:{input:e,pageID:c,postID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("AdsLWICoBPostCreationDialog.react").__setRef("AdsLWICoBPostCreationDialog.entrypoint")};g["default"]=a}),98);
__d("LWICometBoostUnavailableButton.react",["fbt","CometLazyPopoverTrigger.react","CometRelay","CometThrottle","CometTooltip.react","JSResourceForInteraction","LWICometBoostUnavailableButton_boostedComponent.graphql","LWIOmniButton.react","XCometLWIProductPickerControllerRouteBuilder","emptyFunction","qex","react","requireDeferred","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useEffect,l=c("requireDeferred")("LWICometFalcoEvent").__setRef("LWICometBoostUnavailableButton.react"),m=c("JSResourceForInteraction")("LWICometBoostUnavailablePopover.react").__setRef("LWICometBoostUnavailableButton.react");function a(a){var e=a.boostedComponent,f=a.entryPoint,g=a.logClickButton,n=a.logHoverButton,o=a.pageID,p=a.product,q=a.size,r=q===void 0?"medium":q,s=a.targetID;q=d("CometRelay").useFragment(i!==void 0?i:i=b("LWICometBoostUnavailableButton_boostedComponent.graphql"),e);a=q.boost_unavailable_info;if(a==null)throw c("unrecoverableViolation")("boost_unavailable_info is null in boost unavailable button","pages_lwi");k(function(){l.onReady(function(a){a.log({action:"render",context:"button",entry_point:f,event:"render_flow_entry_point_error",event_category:"error",flow:"ineligible",page_id:o,post_id:s,product:p,side:"client_side"})})},[]);e=a.template_post_spec_override;q=e!=null&&((q=c("qex")._("1764356"))!=null?q:!1)?c("XCometLWIProductPickerControllerRouteBuilder").buildURL({entry_point:"www_left_nav_promote_button",page_id:o,so:e,use_template_post:!0}):null;var t=(e=a.coded_exception)==null?void 0:e.summary,u=a.eligibility_rule,v=n!=null?c("CometThrottle")(function(){return n(u,{boost_unavailable_reason:t,button:"Boost Unavailable"})},5e3):c("emptyFunction"),w=g!=null?c("CometThrottle")(function(){return g(u,{boost_unavailable_reason:t,button:"Boost Unavailable"})},5e3):c("emptyFunction");return q!==null?j.jsx(c("CometTooltip.react"),{position:"above",tooltip:h._("Kh\u00f4ng th\u1ec3 qu\u1ea3ng c\u00e1o. H\u00e3y t\u1ea1o qu\u1ea3ng c\u00e1o m\u1edbi b\u1eb1ng b\u00e0i vi\u1ebft n\u00e0y."),children:j.jsx(c("LWIOmniButton.react"),{label:h._("T\u1ea1o qu\u1ea3ng c\u00e1o"),linkProps:{url:q},onHoverIn:v,size:r})}):j.jsx(c("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{boostUnavailableInfo:a},popoverResource:m,position:"above",children:function(a,b){return j.jsx(c("LWIOmniButton.react"),{label:h._("Kh\u00f4ng th\u1ec3 qu\u1ea3ng c\u00e1o"),onHoverIn:function(){v()},onPress:function(){w(),b()},ref:a,size:r,type:"secondary"})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LWICometButtonPlaceholder.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("BaseGlimmer.react"),{className:"gjzvkazv orb7ywq3 pq6dq46d kzx2olss aot14ch1 p86d2i9g beltcj47 aypy0576 s1tcr66n maa8sdkg l6v480f0 du4w35lb i1ao9s8h l9j0dhe7 jb3vyjys a8nywdso rz4wbd8a qt6c0cv9 kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab nhd2j8a9 rq0escxv auili1gw ow4ym5g4 g5ia77u1 dwo3fsh8",index:0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LWICometButton.react",["AdsLWICoBPostCreationDialog.entrypoint","CometPlaceholder.react","CometRelay","CometThrottle","CometTooltip.react","LWIBoostedComponentFalcoEvenUtils","LWICometBoostUnavailableButton.react","LWICometButtonActionContext","LWICometButtonPlaceholder.react","LWICometButtonQuery.graphql","LWICometDialogContext","LWICometEntryPointUtils","LWICometProductUtils","LWIOmniButton.react","cr:1637188","react","recoverableViolation","requireDeferred","useCometRelayEntrypointContextualEnvironmentProvider","useFullViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=c("requireDeferred")("LWICometFalcoEvent").__setRef("LWICometButton.react"),m=h!==void 0?h:h=b("LWICometButtonQuery.graphql");function n(a){var e=a.clientSpecOverride,f=a.customButtonLabel;f=f===void 0?null:f;var g=a.deemphasized;g=g===void 0?!1:g;var h=a.entryPoint,n=a.entryPointDetails,o=a.extraDataProps,p=a.icon,q=a.labelIsHidden,r=a.newAd,s=a.onImpression,t=a.onPress,u=a.padding,v=a.product,w=a.profileID,x=a.size;x=x===void 0?"medium":x;var y=a.targetID;a=a.type;a=a===void 0?"primary":a;var z={new_promotion:r,page_id:w,product:v,target_id:y},A=k(c("LWICometButtonActionContext")),B=A.getOpenDialogWithPhase;A=A.getOpenDialogWithTargetID;s=c("useFullViewImpression")({onFullViewStart:(s=s)!=null?s:function(){}});var C=k(c("LWICometDialogContext")),D=c("useCometRelayEntrypointContextualEnvironmentProvider")(),E=d("LWICometEntryPointUtils").jsEnumToGraphQLEnum(h),F=b("cr:1637188")(),G=F==null?void 0:F.navigationCallback;F=d("CometRelay").useLazyLoadQuery(m,{boostedComponentInput:z,clientSpecOverride:e,graphqlEntryPoint:E});var H=d("LWICometProductUtils").productFromGraphQLEnumToJSEnumStrict(v),I=j(function(a,b){var c=r!=null?r?"create":"edit":null;l.onReady(function(e){e.log({action:"hover",context:"button",eligibility_rule:a,entry_point:h,entry_point_details_override:n,event:"enter_flow_hover",extra_data:d("LWIBoostedComponentFalcoEvenUtils").getFalcoExtraData(b),flow:c,page_id:w,post_id:y,product:H,side:"user_action"})})},[h,n,r,w,H,y]),J=function(a,b){var c=r!=null?r?"create":"edit":null;l.onReady(function(d){d.log({action:"enter",context:"flow",eligibility_rule:a,entry_point:h,entry_point_details_override:n,event:"enter_flow_click",extra_data:babelHelpers["extends"]({},o,{old_extra_data:String(b)}),flow:c,page_id:w,post_id:y,product:H,side:"user_action"})})},K=(z=F.lwi)==null?void 0:z.boosted_component;if(K==null)return null;if(K.boost_unavailable_info!=null)return i.jsx(c("LWICometBoostUnavailableButton.react"),{boostedComponent:K,entryPoint:h,logClickButton:J,logHoverButton:I,pageID:w,product:H,size:x,targetID:y});F=(E=K.button_data)==null?void 0:E.button_label;E=(z=K.button_data)==null?void 0:z.button_action_uri;if(E==null)return null;if(F==null||F===""){c("recoverableViolation")("`buttonLabel` passed into LWICometButton.react is empty","pages_lwi");return null}z=c("CometThrottle")(function(){var a;return I(null,{button:(a=K.button_data)==null?void 0:a.button_label_type})},5e3);var L=function(){var a;t!=null&&t();J(null,{button:(a=K.button_data)==null?void 0:a.button_label_type})},M;if(G!=null)M={onPress:function(){G&&G({clientSpecOverride:e,product:v,targetID:y}),J()}};else if(C!=null)M={onPress:function(){L();H!=="boosted_post"&&c("recoverableViolation")("LWI Comet-on-Blue dialog is not implemented for "+H,"pages_lwi");if(y!=null){C.historyPush(C.dialogState);var a=C.pageID;a=d("CometRelay").loadEntryPoint(D,c("AdsLWICoBPostCreationDialog.entrypoint"),{pageID:a,targetID:y});C.setDialogState({boostishID:null,currentEntryPoint:a,routeType:"post_creation",targetID:y})}else c("recoverableViolation")("targetID is invalid for boost post","pages_lwi")}};else if(B!=null&&A!=null){var N=A(h),O=B(h);M={onPress:function(){L(),y!=null?N(w,H,y):O(w,"PRODUCT_SELECTOR")}}}else M={linkProps:{url:E},onPress:function(){L()}};return i.jsx(c("CometTooltip.react"),{position:"above",tooltip:(A=K.button_data)==null?void 0:A.tooltip_label,children:i.jsx(c("LWIOmniButton.react"),babelHelpers["extends"]({icon:p,label:(B=f)!=null?B:F,labelIsHidden:q,onHoverIn:z,padding:u,reduceEmphasis:g,ref:s,size:x,type:a},M))})}n.displayName=n.name+" [from "+f.id+"]";function a(a){if(a.profileID===""){c("recoverableViolation")("Empty pageID is passed to Comet LWI Button","pages_lwi");return null}return i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("LWICometButtonPlaceholder.react"),{}),children:i.jsx(n,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotosCardFiveItemsContainer.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=h.Children.toArray(a.children),d=a.radius,e=a.spacing;if(b.length!==5){c("recoverableViolation")("Invalid number of images. Expected 5, "+b.length+" given.","pages_consumer_experience_www");return null}return h.jsxs("div",{className:"datstx6m rq0escxv",style:{height:a.height},children:[h.jsxs("div",{className:"k4urcfbm soptpqjv btwxx1t3 j83agx80 rq0escxv",style:{paddingBottom:e},children:[h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopLeftRadius:d,marginRight:e},children:b[0]}),h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopRightRadius:d,marginLeft:e},children:b[1]})]}),h.jsxs("div",{className:"k4urcfbm mnmh91ae btwxx1t3 j83agx80 rq0escxv",style:{paddingTop:e},children:[h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomLeftRadius:d,marginRight:e},children:b[2]}),h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{marginLeft:e,marginRight:e},children:b[3]}),h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomRightRadius:d,marginLeft:e},children:b[4]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotosCardFourItemsContainer.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=h.Children.toArray(a.children),d=a.radius,e=a.spacing;if(b.length!==4){c("recoverableViolation")("Invalid number of images. Expected 4, "+b.length+" given.","pages_consumer_experience_www");return null}return h.jsxs("div",{className:"datstx6m rq0escxv",style:{height:a.height},children:[h.jsxs("div",{className:"k4urcfbm me31hnl3 btwxx1t3 j83agx80 rq0escxv",style:{paddingBottom:e},children:[h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopLeftRadius:d,marginRight:e},children:b[0]}),h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopRightRadius:d,marginLeft:e},children:b[1]})]}),h.jsxs("div",{className:"k4urcfbm me31hnl3 btwxx1t3 j83agx80 rq0escxv",style:{paddingTop:e},children:[h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomLeftRadius:d,marginRight:e},children:b[2]}),h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomRightRadius:d,marginLeft:e},children:b[3]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotosCardSingleItemContainer.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=h.Children.toArray(a.children),d=a.radius;if(b.length!==1){c("recoverableViolation")("Invalid number of images. Expected single photo, but "+b.length+" given.","pages_consumer_experience_www");return null}return h.jsx("div",{className:"k4urcfbm stjgntxs ni8dbmo4 rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderRadius:d,height:a.height},children:b[0]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotosCardSixItemsContainer.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=h.Children.toArray(a.children),d=a.radius,e=a.spacing;if(b.length!==6){c("recoverableViolation")("Invalid number of images. Expected 6, "+b.length+" given.","pages_consumer_experience_www");return null}return h.jsxs("div",{className:"datstx6m rq0escxv",style:{height:a.height},children:[h.jsxs("div",{className:"k4urcfbm me31hnl3 btwxx1t3 j83agx80 rq0escxv",style:{paddingBottom:e},children:[h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopLeftRadius:d,marginRight:e},children:b[0]}),h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{marginLeft:e,marginRight:e},children:b[1]}),h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopRightRadius:d,marginLeft:e},children:b[2]})]}),h.jsxs("div",{className:"k4urcfbm me31hnl3 btwxx1t3 j83agx80 rq0escxv",style:{paddingTop:e},children:[h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomLeftRadius:d,marginRight:e},children:b[3]}),h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{marginLeft:e,marginRight:e},children:b[4]}),h.jsx("div",{className:"ffzjwdj3 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomRightRadius:d,marginLeft:e},children:b[5]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotosCardThreeItemsContainer.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=h.Children.toArray(a.children),d=a.radius,e=a.spacing;if(b.length!==3){c("recoverableViolation")("Invalid number of images. Expected 3, "+b.length+" given.","pages_consumer_experience_www");return null}return h.jsxs("div",{className:"datstx6m btwxx1t3 j83agx80 rq0escxv",style:{height:a.height},children:[h.jsx("div",{className:"jico2p30 stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomLeftRadius:d,borderTopLeftRadius:d,marginRight:e},children:b[0]}),h.jsxs("div",{className:"j23y7wrc datstx6m cbu4d94t j83agx80 rq0escxv",style:{paddingLeft:e},children:[h.jsx("div",{className:"k4urcfbm stjgntxs ni8dbmo4 me31hnl3 rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderTopRightRadius:d,paddingBottom:e},children:b[1]}),h.jsx("div",{className:"k4urcfbm stjgntxs ni8dbmo4 me31hnl3 rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomRightRadius:d,paddingTop:e},children:b[2]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotosCardTwoItemsContainer.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=h.Children.toArray(a.children),d=a.radius,e=a.spacing;if(b.length!==2){c("recoverableViolation")("Invalid number of images. Expected 2, "+b.length+" given.","pages_consumer_experience_www");return null}return h.jsxs("div",{className:"datstx6m btwxx1t3 j83agx80 rq0escxv",style:{height:a.height},children:[h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomLeftRadius:d,borderTopLeftRadius:d,marginRight:e},children:b[0]}),h.jsx("div",{className:"n99xedck stjgntxs ni8dbmo4 datstx6m rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06","data-testid":void 0,style:{borderBottomRightRadius:d,borderTopRightRadius:d,marginLeft:e},children:b[1]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometPhotoCardGrid.react",["PagesCometPhotosCardFiveItemsContainer.react","PagesCometPhotosCardFourItemsContainer.react","PagesCometPhotosCardSingleItemContainer.react","PagesCometPhotosCardSixItemsContainer.react","PagesCometPhotosCardThreeItemsContainer.react","PagesCometPhotosCardTwoItemsContainer.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=218,j=8,k=2;function a(a){a=h.Children.toArray(a.children);switch(a.length){case 1:return h.jsx(c("PagesCometPhotosCardSingleItemContainer.react"),{height:i,radius:j,children:a});case 2:return h.jsx(c("PagesCometPhotosCardTwoItemsContainer.react"),{height:i,radius:j,spacing:k,children:a});case 3:return h.jsx(c("PagesCometPhotosCardThreeItemsContainer.react"),{height:i,radius:j,spacing:k,children:a});case 4:return h.jsx(c("PagesCometPhotosCardFourItemsContainer.react"),{height:i,radius:j,spacing:k,children:a});case 5:return h.jsx(c("PagesCometPhotosCardFiveItemsContainer.react"),{height:i,radius:j,spacing:k,children:a});case 6:return h.jsx(c("PagesCometPhotosCardSixItemsContainer.react"),{height:i,radius:j,spacing:k,children:a});default:c("recoverableViolation")("Invalid list of photos","pages_consumer_experience_www");return null}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometWatchAndScrollTriggerOnLoadContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("VideoPlayerWithMuteOnInvisibleBehavior.react",["VideoPlayerHooks","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a){var b=d("VideoPlayerHooks").useController(),c=d("VideoPlayerHooks").useMuted(),e=d("VideoPlayerHooks").useVideoPlayerViewabilityInfo(),f=i(!1);h(function(){var a=b.getCurrentState();(!c||!a.muted)&&(f.current=!1)},[b,c]);h(function(){var d=b.getCurrentState();if(e){var g=e.visiblePercentage;g<=a.visiblePercentage&&!c&&!d.muted?(b.setMuted(!0,"product_initiated"),f.current=!0):g>=a.visiblePercentage&&c&&d.muted&&f.current&&(f.current=!1,b.setMuted(!1,"product_initiated"))}},[b,c,a.visiblePercentage,e]);return null}g["default"]=a}),98);
__d("CometPageSpotlightCardVideoPlayer.react",["CometFeedVideoPlayerPlaceholder.react","CometPageSpotlightCardVideoPlayer_video.graphql","CometRelay","CometSetWatchAndScrollVideoContext","CometWatchAndScrollTriggerContextProvider","CometWatchAndScrollTriggerOnLoadContext","CometWatchAndScrollVideoContext","VideoPlayerCometFeedStoryControls.react","VideoPlayerCometFeedThumbnail.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","VideoPlayerPortalingPlaceInfoProvider.react","VideoPlayerRelay.react","VideoPlayerSurface.react","VideoPlayerWatchAndScrollOverlay.react","VideoPlayerWithLiveVideoEndscreen.react","VideoPlayerWithLiveVideoIndicator.react","VideoPlayerWithMuteOnInvisibleBehavior.react","VideoPlayerWithVideoHomeLogging.react","VideoPlayerWithWatchAndScrollTrigger.react","react","useVideoPlayerClickToTahoeInteraction","useVideoPlayerDefaultClickInteraction","useVideoPlayerDefaultControlsVisibility","useWatchAndScrollTrigger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useEffect;function m(a){var b=a.isWatchAndScrollDisabled,e=a.onClickToTahoe,f=a.shouldHideRewindControls,g=a.subOrigin,h=a.video,j=a.videoID;a=a.videoURI;var m="video_home_spotlight",n=c("useVideoPlayerDefaultControlsVisibility")(),o=n.isControlsVisible;n.onUserInteraction;n=c("useVideoPlayerClickToTahoeInteraction")({onClick:e,reactionVideoChannelType:m,subOrigin:g,videoTahoeUrl:a});e=c("useVideoPlayerDefaultClickInteraction")({onClick:e,reactionVideoChannelType:m,shouldUnmute:!0,subOrigin:g,videoTahoeUrl:a});var p=d("VideoPlayerHooks").usePlaying();p=p?n:e;var q=k(c("CometWatchAndScrollTriggerOnLoadContext")),r=d("useWatchAndScrollTrigger").useWatchAndScrollTrigger(g,d("VideoPlayerWithWatchAndScrollTrigger.react").WatchAndScrollTriggerType.PAGE_SPOTLIGHT_CARD,j);l(function(){(q==null?void 0:q.shouldTrigger)&&(r(),q.setDidTrigger())},[q,r]);n=d("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo();var s=n.previousPlaceMetaData,t=d("VideoPlayerHooks").useController();l(function(){switch(s==null?void 0:s.placeDescription){case"tahoe":t.setMuted(!0,"tahoe_transition_phase_initiated");return;case"watch_and_scroll":t.play("watch_and_scroll_transition_phase_initiated");return}},[s,t]);return i.jsxs(c("VideoPlayerSurface.react"),{children:[i.jsx(c("VideoPlayerWithVideoHomeLogging.react"),{reactionVideoChannelType:m}),i.jsx(c("VideoPlayerCometFeedThumbnail.react"),{video:h}),i.jsx(c("VideoPlayerCometFeedStoryControls.react"),{isAdVideo:!1,isVisible:o,isWatchAndScrollDisabled:b,reactionVideoChannelType:m,shouldHideRewindControls:f,subOrigin:g,video:h,videoTahoeUrl:a}),i.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{pressInteraction:p}),i.jsx(c("VideoPlayerWithMuteOnInvisibleBehavior.react"),{visiblePercentage:.5}),i.jsx(c("VideoPlayerWithLiveVideoIndicator.react"),{hasCometNavOverlay:!1,video:h}),i.jsx(c("VideoPlayerWithLiveVideoEndscreen.react"),{video:h})]})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e=a.subOrigin!=null?a.subOrigin:"video_page_spotlight_unit",f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPageSpotlightCardVideoPlayer_video.graphql"),a.video),g=a.videoURI,l=k(c("CometSetWatchAndScrollVideoContext")),o=k(c("CometWatchAndScrollVideoContext")),p=f==null?void 0:f.if_viewer_can_see_pay_to_access_paywall,q=j(function(){return i.jsx(n,{onPress:function(){l(null)},video:f,watchAndScrollVideo:o})},[l,f,o]);return p!=null?i.jsx(d("CometRelay").MatchContainer,{match:p}):i.jsx(c("CometWatchAndScrollTriggerContextProvider"),{children:i.jsx(c("VideoPlayerRelay.react"),{portalingEnabled:!0,portalingRenderPlaceholder:q,subOrigin:e,video:f,children:i.jsx(m,{isWatchAndScrollDisabled:a.isWatchAndScrollDisabled,onClickToTahoe:a.onClickToTahoe,shouldHideRewindControls:a.shouldHideRewindControls,subOrigin:e,video:f,videoID:f.id,videoURI:g})})})}a.displayName=a.name+" [from "+f.id+"]";function n(a){var b=a.onPress,e=a.video;a=a.watchAndScrollVideo;var f=d("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo();f=f.thisPlaceID;a=(a==null?void 0:a.portalingPlaceID)===f;return a?i.jsx(c("VideoPlayerWatchAndScrollOverlay.react"),{onPress:b}):i.jsx(c("CometFeedVideoPlayerPlaceholder.react"),{video:e})}g["default"]=a}),98);
__d("PagesPagePhotoClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744162");c=b("FalcoLoggerInternal").create("pages_page_photo_click",a);e.exports=c}),null);