if (self.CavalryLogger) { CavalryLogger.start_js(["goviBNe"]); }

__d("CometPageInlineComposer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometPageInlineComposer_renderer$normalization",selections:[a,{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[a,b,{alias:null,args:[{kind:"Literal",name:"gk_name",value:"lbp_messenger_page_composer_upsell_gk"}],concreteType:"EntGKCheck",kind:"LinkedField",name:"gk_check",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"passes_gk",storageKey:null}],storageKey:'gk_check(gk_name:"lbp_messenger_page_composer_upsell_gk")'},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isActor"},b,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageCallToAction",kind:"LinkedField",name:"page_call_to_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"cta_type",storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_composer_interruption_to_show_on_comet",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_composer_platform_tool_buttons_to_show_on_comet",storageKey:null},{alias:null,args:null,concreteType:"CometPageAdminComposerRenderer",kind:"LinkedField",name:"comet_page_composer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometComposerUploadMediaSprout","CometComposerMagicUploadsSprout","PagesCometComposerGetMessagesSprout","PagesCometComposerGetWhatsAppMessagesSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","CometComposerWithTaggingSprout"]}],concreteType:null,kind:"LinkedField",name:"inline_sprouts",plural:!0,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerUploadMediaSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerMagicUploadsMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMagicUploadsSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerGetMessagesSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"PagesCometComposerGetMessagesSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerGetWhatsAppMessagesSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"PagesCometComposerGetWhatsAppMessagesSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerLocationTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerLocationTaggingSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerMinutiaeSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMinutiaeSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerWithTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerWithTaggingSprout",abstractKey:null}],storageKey:'inline_sprouts(supported:["CometComposerUploadMediaSprout","CometComposerMagicUploadsSprout","PagesCometComposerGetMessagesSprout","PagesCometComposerGetWhatsAppMessagesSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","CometComposerWithTaggingSprout"])'}],storageKey:null},{alias:null,args:null,concreteType:"PagesComposerPostPrompts",kind:"LinkedField",name:"pages_composer_post_prompts",plural:!1,selections:[{args:null,documentName:"CometPageInlineComposer_renderer",fragmentName:"PagesCometInlineComposerGhostTextsRoot_postPrompts",fragmentPropName:"postPrompts",kind:"ModuleImport"}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometPageInlineComposer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometPageInlineComposer_renderer",selections:[a,{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"gk_name",value:"lbp_messenger_page_composer_upsell_gk"}],concreteType:"EntGKCheck",kind:"LinkedField",name:"gk_check",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"passes_gk",storageKey:null}],storageKey:'gk_check(gk_name:"lbp_messenger_page_composer_upsell_gk")'},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{args:[{kind:"Literal",name:"height",value:40},{kind:"Literal",name:"linkToUnseenStory",value:!1},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],kind:"FragmentSpread",name:"CometProfilePhotoForActor_actor"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageCallToAction",kind:"LinkedField",name:"page_call_to_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"cta_type",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_composer_interruption_to_show_on_comet",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_composer_platform_tool_buttons_to_show_on_comet",storageKey:null},{args:null,kind:"FragmentSpread",name:"PagesCometInlineComposerSproutsList_page"},{alias:null,args:null,concreteType:"PagesComposerPostPrompts",kind:"LinkedField",name:"pages_composer_post_prompts",plural:!1,selections:[{args:null,documentName:"CometPageInlineComposer_renderer",fragmentName:"PagesCometInlineComposerGhostTextsRoot_postPrompts",fragmentPropName:"postPrompts",kind:"ModuleImport"}],storageKey:null}],storageKey:null}],type:"CometPageAdminComposerRenderer",abstractKey:null}}();e.exports=a}),null);
__d("PagesCometInlineComposerSproutsList_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometInlineComposerSproutsList_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"CometPageAdminComposerRenderer",kind:"LinkedField",name:"comet_page_composer",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometComposerUploadMediaSprout","CometComposerMagicUploadsSprout","PagesCometComposerGetMessagesSprout","PagesCometComposerGetWhatsAppMessagesSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","CometComposerWithTaggingSprout"]}],concreteType:null,kind:"LinkedField",name:"inline_sprouts",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerUploadMediaSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerMagicUploadsMediaSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMagicUploadsSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerGetMessagesSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"PagesCometComposerGetMessagesSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerGetWhatsAppMessagesSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"PagesCometComposerGetWhatsAppMessagesSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerLocationTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerLocationTaggingSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerMinutiaeSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerMinutiaeSprout",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"PagesCometInlineComposerSproutsList_page",fragmentName:"PagesInlineComposerWithTaggingSprout_sprout",fragmentPropName:"sprout",kind:"ModuleImport"}],type:"CometComposerWithTaggingSprout",abstractKey:null}],storageKey:'inline_sprouts(supported:["CometComposerUploadMediaSprout","CometComposerMagicUploadsSprout","PagesCometComposerGetMessagesSprout","PagesCometComposerGetWhatsAppMessagesSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","CometComposerWithTaggingSprout"])'}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesInlineComposerLocationTaggingSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesInlineComposerLocationTaggingSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("PagesInlineComposerLocationTaggingSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesInlineComposerLocationTaggingSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerLocationTaggingSprout",abstractKey:null};e.exports=a}),null);
__d("PagesInlineComposerMediaSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesInlineComposerMediaSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("PagesInlineComposerMediaSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesInlineComposerMediaSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerUploadMediaSprout",abstractKey:null};e.exports=a}),null);
__d("PagesInlineComposerWithTaggingSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesInlineComposerWithTaggingSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("PagesInlineComposerWithTaggingSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesInlineComposerWithTaggingSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerWithTaggingSprout",abstractKey:null};e.exports=a}),null);
__d("CometPageInlineComposerButton.react",["fbt","JSResourceForInteraction","TetraButton.react","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("JSResourceForInteraction")("PagesCometBusinessSuiteIntroductionDialog.react").__setRef("CometPageInlineComposerButton.react"),k=c("JSResourceForInteraction")("PagesCometBusinessSuiteIntroductionDialogV2.react").__setRef("CometPageInlineComposerButton.react"),l=c("JSResourceForInteraction")("PagesCometCreatorStudioIntroductionDialog.react").__setRef("CometPageInlineComposerButton.react");function a(a){var b=a.handleTrigger,d=a.interruptionToShow,e=a.pageID;a=a.triggerRef;var f=c("useCometLazyDialog")(j),g=f[0];f=c("useCometLazyDialog")(l);var m=f[0];f=c("useCometLazyDialog")(k);var n=f[0];f=function(){d==="BUSINESS_SUITE"?g({pageID:e}):d==="BUSINESS_SUITE_V2"?n({pageID:e}):d==="CREATOR_STUDIO"&&m({pageID:e})};return i.jsx("div",{className:"buofh1pr",children:i.jsx(c("TetraButton.react"),{label:h._("T\u1ea1o b\u00e0i vi\u1ebft"),onPress:d!=null?f:b,ref:a,size:"large",testid:void 0,type:"secondary"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometComposerStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("T\u1ea1o b\u00e0i vi\u1ebft");g.PAGE_COMPOSER_TITLE=a}),98);
__d("useCometPageComposerTrigger",["CometComposerAttachmentPluginTypes","JSResourceForInteraction","qpl","react","useCometInteractionTracing","useCometPageComposerDialog","useResumableComposerViewState","useVideoComposerDialog"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useMemo,j=c("JSResourceForInteraction")("PagesCometComposerDialog.react").__setRef("useCometPageComposerTrigger");function a(a,b,d,e,f,g,k,l){var m=c("useResumableComposerViewState")(a),n=m.clearResumableViewState,o=m.getResumableViewState,p=m.saveResumableViewState;m=h(function(a){p(a)},[p]);var q=h(function(){f!=null&&f(),n()},[n,f]),r=c("useVideoComposerDialog")({composerEntryPointRef:e,targetID:b}),s=i(function(){return{launchBlueVideoComposer:r,shouldOpenVideoSpecificComposer:!0,targetID:b}},[r,b]);k=c("useCometPageComposerDialog")({actorID:a,composerEntryPointRef:e,composerType:(a=k)!=null?a:"page",onBeforeClose:m,onSave:q,pageID:b,title:d});var t=k[0];a=k[1];var u=c("useCometInteractionTracing")(c("qpl")._(30605333,"2037"),"responsive","INTERACTION");m=h(function(a){var b,d=a==null?void 0:a.resumableViewStateOverrideConfig,f=(b=a==null?void 0:a.beginningViewState)!=null?b:babelHelpers["extends"]({},o(),d);g!=null&&(f=babelHelpers["extends"]({},f,{placeholderTextOverride:g}));e==="pages_social_learning"&&(f=babelHelpers["extends"]({},f,{socialLearningModule:{moduleName:"",unitID:null}}));f=babelHelpers["extends"]({},f,{videoComposerData:s});(a==null?void 0:a.pushedPageOnLoad)==="get_whatsapp_messages"&&(f=babelHelpers["extends"]({},f,{attachmentArea:babelHelpers["extends"]({},f.attachmentArea,{activeAttachmentType:c("CometComposerAttachmentPluginTypes").GET_WHATSAPP_MESSAGES}),isGetWhatsAppMessagePost:!0}));b=(a==null?void 0:a.pushedPageOnLoad)==null&&((b=f)==null?void 0:(d=b.attachmentArea)==null?void 0:d.activeAttachmentType)===c("CometComposerAttachmentPluginTypes").MEDIA&&l===!0;b&&(f=babelHelpers["extends"]({},f,{attachmentArea:babelHelpers["extends"]({},f.attachmentArea,{activeAttachmentType:c("CometComposerAttachmentPluginTypes").GET_MESSAGES,previousAttachmentType:c("CometComposerAttachmentPluginTypes").MEDIA}),isGetMessagesPost:!0}));(a==null?void 0:a.pushedPageOnLoad)==="get_messages"&&(f=babelHelpers["extends"]({},f,{attachmentArea:babelHelpers["extends"]({},f.attachmentArea,{activeAttachmentType:c("CometComposerAttachmentPluginTypes").GET_MESSAGES}),isGetMessagesPost:!0}));var h=j.getModuleIfRequireable()!=null;u(function(b){b.onComplete(function(a){h&&b.addMetadata("revisit",1)}),t({beginningViewState:f,pushedPageOnLoad:a==null?void 0:a.pushedPageOnLoad})})},[o,g,e,s,u,t,l]);return[m,a]}g["default"]=a}),98);
__d("useCometPageInlineComposer",["CometRouteParams","PagesCometComposerStrings","react","useCometPageComposerTrigger"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.startTransition,i=b.useEffect,j=b.useRef;function a(a){var b=a.actorID,e=a.composerEntryPointRef,f=a.onSave,g=a.pageID,k=a.placeholderTextOverride;a=a.upsellMessenger;b=c("useCometPageComposerTrigger")(b,g,d("PagesCometComposerStrings").PAGE_COMPOSER_TITLE,e,f,k,void 0,a);var l=b[0];e=b[1];f=d("CometRouteParams").useRouteParams();var m=j(null),n=String(f==null?void 0:f.modal);i(function(){if(m.current===g)return;n!=="null"&&(m.current=g);n==="media_composer"||n==="composer"?h(function(){return l()}):n==="local_alerts_onboarding"?h(function(){return l({pushedPageOnLoad:"local_alert_tagger"})}):n==="voting_alerts_onboarding"?h(function(){return l({pushedPageOnLoad:"voting_alert_tagger"})}):n==="product_tagging"?h(function(){return l({pushedPageOnLoad:"product_tagger"})}):n==="composer_message"?h(function(){return l({pushedPageOnLoad:"get_messages"})}):n==="composer_whatsapp_message"&&h(function(){return l({pushedPageOnLoad:"get_whatsapp_messages"})})});return[l,e]}g["default"]=a}),98);
__d("CometPageInlineComposerButtonBusinessSuite.react",["fbt","Actor","TetraButton.react","XBizSuiteControllerRouteBuilder","react","useCometPageInlineComposer","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.composerEntryPointRef;a=a.pageID;var e=d("Actor").useActor();e=e[0];var f=c("useCometRouterDispatcher")(),g=c("XBizSuiteControllerRouteBuilder").buildURL({asset_id:a,nav_ref:"page_composer_interruption",rest:"home"}),j=function(){f!=null&&g!=null&&f.go(g,{})};e=c("useCometPageInlineComposer")({actorID:e,composerEntryPointRef:b,pageID:a});b=e[0];a=e[1];return i.jsxs("div",{className:"tvfksri0 taijpn5t cbu4d94t j83agx80",children:[i.jsx("div",{className:"tw6a2znq ae35evdt d1544ag0 pybr56ya",children:i.jsx(c("TetraButton.react"),{label:h._("T\u1ea1o b\u00e0i vi\u1ebft trong Business Suite"),onPress:j,reduceEmphasis:!0,size:"large",type:"primary"})}),i.jsx("div",{className:"tw6a2znq sj5x9vvc d1544ag0 fdg1wqfs",children:i.jsx(c("TetraButton.react"),{label:h._("T\u1ea1o b\u00e0i vi\u1ebft tr\u00ean Facebook"),onPress:b,ref:a,size:"large",type:"secondary"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPageInlineComposerButtonCreatorStudio.react",["fbt","Actor","TetraButton.react","XMediaManagerControllerRouteBuilder","gkx","react","useCometPageInlineComposer","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.composerEntryPointRef;a=a.pageID;var e=d("Actor").useActor();e=e[0];var f=c("useCometRouterDispatcher")(),g=c("XMediaManagerControllerRouteBuilder").buildURL({open_basic_post_composer:!0,reference:"pages_composer_interruption_create_post_creator_studio_button",selected_single_page_id:a,tab:c("gkx")("1921215")?"published":"content_posts_timeline"}),j=function(){f!=null&&g!=null&&f.go(g,{})};e=c("useCometPageInlineComposer")({actorID:e,composerEntryPointRef:b,pageID:a});b=e[0];a=e[1];return i.jsxs("div",{className:"tvfksri0 taijpn5t cbu4d94t j83agx80",children:[i.jsx("div",{className:"tw6a2znq ae35evdt d1544ag0 pybr56ya",children:i.jsx(c("TetraButton.react"),{label:h._("T\u1ea1o b\u00e0i vi\u1ebft trong Studio s\u00e1ng t\u1ea1o"),onPress:j,reduceEmphasis:!0,size:"large",type:"primary"})}),i.jsx("div",{className:"tw6a2znq sj5x9vvc d1544ag0 fdg1wqfs",children:i.jsx(c("TetraButton.react"),{label:h._("T\u1ea1o b\u00e0i vi\u1ebft tr\u00ean Facebook"),onPress:b,ref:a,size:"large",type:"secondary"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometInlineComposerSproutListMatcher.react",["CometRelay","orEmptyArray","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.sprouts;a=babelHelpers.objectWithoutPropertiesLoose(a,["sprouts"]);return h.jsx(h.Fragment,{children:i(b,a)})}a.displayName=a.name+" [from "+f.id+"]";function i(a,b){a==null&&c("recoverableViolation")("Server failed to provide a valid inline sprouts object for the composer.","comet_composer");return c("orEmptyArray")(a).map(function(a,c){return h.jsx(d("CometRelay").MatchContainer,{match:a,props:b},c)})}a.useMatcher=i;g["default"]=a}),98);
__d("PagesCometInlineComposerSproutsList.react",["CometRelay","PagesCometInlineComposerSproutListMatcher.react","PagesCometInlineComposerSproutsList_page.graphql","react","useNullthrowsViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.page$key,f=a.showPageComposerDialog,g=a.showVideoComposerDialog;a=a.triggerRef;e=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometInlineComposerSproutsList_page.graphql"),e);var j=c("useNullthrowsViolation")(e.id,"Target Page ID for page composer cannot be null");return i.jsx("div",{className:"k4urcfbm stjgntxs ni8dbmo4 n851cfcs kwzhilbh qypqp5cg lhclo0ds j83agx80",children:i.jsx(c("PagesCometInlineComposerSproutListMatcher.react"),{pageID:j,showPageComposerDialog:f,showVideoComposerDialog:g,sprouts:e==null?void 0:(j=e.comet_page_composer)==null?void 0:j.inline_sprouts,triggerRef:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPageInlineComposer.react",["Actor","CometCard.react","CometPageInlineComposerButton.react","CometPageInlineComposerButtonBusinessSuite.react","CometPageInlineComposerButtonCreatorStudio.react","CometPageInlineComposer_renderer.graphql","CometProfilePhotoForActor.react","CometRelay","PagesCometInlineComposerSproutsList.react","react","unrecoverableViolation","useCometPageInlineComposer","useVideoComposerDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f,g,j,k,l=a.composerEntryPointRef;l=l===void 0?"pages_feed":l;a=a.renderer;var m=d("Actor").useActor();m=m[0];a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPageInlineComposer_renderer.graphql"),a);a=a.page;var n=a==null?void 0:a.id;if(a==null||n==null)throw c("unrecoverableViolation")("Target Page for page composer cannot be null","pages_consumer_experience_www");e=(e=a.viewer)==null?void 0:e.actor;var o=c("useVideoComposerDialog")({composerEntryPointRef:"pages_feed_video_composer",targetID:n});f=(a==null?void 0:(f=a.page_call_to_action)==null?void 0:f.cta_type)==="MESSAGE";g=(a==null?void 0:(g=a.gk_check)==null?void 0:g.passes_gk)===!0&&f;f=c("useCometPageInlineComposer")({actorID:m,composerEntryPointRef:l,pageID:n,upsellMessenger:g});g=f[0];f=f[1];j=(j=a==null?void 0:a.page_composer_interruption_to_show_on_comet)!=null?j:null;k=(k=a==null?void 0:a.page_composer_platform_tool_buttons_to_show_on_comet)!=null?k:null;var p=a.pages_composer_post_prompts;j=i.jsx(c("CometPageInlineComposerButton.react"),{handleTrigger:g,interruptionToShow:j,pageID:n,triggerRef:f});var q=j,r=null;p!=null&&(q=i.jsx(d("CometRelay").MatchContainer,{match:p,props:{actorID:m,composerEntryPointRef:l,pageID:n}}),r=i.jsxs("div",{className:"ozuftl9m n851cfcs tvfksri0 kvgmc6g5",children:[" ",j]}));return i.jsx("div",{className:"sjgh65i0",children:i.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[k==="BUSINESS_SUITE"?i.jsx(c("CometPageInlineComposerButtonBusinessSuite.react"),{composerEntryPointRef:l,pageID:n}):k==="CREATOR_STUDIO"?i.jsx(c("CometPageInlineComposerButtonCreatorStudio.react"),{composerEntryPointRef:l,pageID:n}):i.jsxs("div",{className:"n851cfcs n1l5q3vz tvfksri0 btwxx1t3 j83agx80 bp9cbjyn",children:[e!=null?i.jsx("div",{className:"ozuftl9m tvfksri0",children:i.jsx(c("CometProfilePhotoForActor.react"),{actor:e,shape:"circle",size:40})}):null,q]}),i.jsx("div",{className:"dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys",children:i.jsx(c("PagesCometInlineComposerSproutsList.react"),{page$key:a,showPageComposerDialog:g,showVideoComposerDialog:o,triggerRef:f})}),r]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometComposerMediaFileSelector.react",["CometFileSelector.react","cometIsMimeTypeForMedia","cometUniqueID","cr:1772245","cr:1772246","fileInputAcceptValues","gkx","react","useResumableComposerViewState"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var e=a.children,f=a.isActorAdmin,g=a.mediaTypes,j=a.multiple,k=a.pageID,l=a.showPageComposerDialog,m=a.showVideoComposerDialog,n=b("cr:1772246")();a=c("useResumableComposerViewState")();var o=a.getResumableViewState;a=i(function(a){if(a==null)return;a=Array.from(a);var e=a.map(function(a){var b=c("cometUniqueID")();a.uploadID=b;if(g.photo&&d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a.type))return{data:{id:b},file:a,fileObjectURL:URL.createObjectURL(a),fileType:"PHOTO",state:"NEW"};if(g.video&&d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a.type))return{data:{id:b},file:a,fileObjectURL:URL.createObjectURL(a),fileType:"VIDEO",state:"NEW"}}).filter(Boolean);e=o(e);if(f&&g.video&&a.length===1&&d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a[0].type)&&m)if(c("gkx")("1584413")){if(n&&b("cr:1772245")){var h=n.logEvent;h(b("cr:1772245").DIALOG_REQUESTED,{pageID:k},e)}}else{m(a[0]);return}l({beginningViewState:e})},[f,o,g.video,g.photo,k,l,m,n]);var p=[];g.photo&&(p=d("fileInputAcceptValues").PHOTO);g.video&&(p=p.concat(d("fileInputAcceptValues").VIDEO));return h.jsx(c("CometFileSelector.react"),{accept:p,multiple:j||!1,onFilesSelected:a,children:function(a){return e(a)}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesInlineComposerLocationTaggingSprout.react",["fbt","ix","CometFeedInlineComposerSprout.react","CometRelay","PagesInlineComposerLocationTaggingSprout_sprout.graphql","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){var e=a.showPageComposerDialog,f=a.sprout$key;a=a.triggerRef;d("CometRelay").useFragment(j!==void 0?j:j=b("PagesInlineComposerLocationTaggingSprout_sprout.graphql"),f);return k.jsx(c("CometFeedInlineComposerSprout.react"),{imageSrc:i("860078"),label:h._("Check in"),onPress:function(){return e({pushedPageOnLoad:"location_tagger"})},testid:void 0,triggerRef:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesInlineComposerMediaSprout.react",["fbt","ix","Actor","CometFeedInlineComposerSprout.react","CometRelay","PagesCometComposerMediaFileSelector.react","PagesInlineComposerMediaSprout_sprout.graphql","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){var e=a.pageID,f=a.showPageComposerDialog,g=a.showVideoComposerDialog,l=a.sprout$key,m=a.triggerRef;a=d("Actor").useActor();a=a[0];d("CometRelay").useFragment(j!==void 0?j:j=b("PagesInlineComposerMediaSprout_sprout.graphql"),l);l=a===e;return k.jsx(c("PagesCometComposerMediaFileSelector.react"),{composerEntryPointRef:"pages_feed",isActorAdmin:l,mediaTypes:{photo:!0,video:!0},multiple:!0,pageID:e,showPageComposerDialog:f,showVideoComposerDialog:g,children:function(a){return k.jsx(c("CometFeedInlineComposerSprout.react"),{imageSrc:i("1260668"),label:h._("\u1ea2nh\/Video"),onPress:a,testid:void 0,triggerRef:m})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesInlineComposerWithTaggingSprout.react",["fbt","ix","CometFeedInlineComposerSprout.react","CometRelay","PagesInlineComposerWithTaggingSprout_sprout.graphql","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){var e=a.showPageComposerDialog,f=a.sprout$key;a=a.triggerRef;d("CometRelay").useFragment(j!==void 0?j:j=b("PagesInlineComposerWithTaggingSprout_sprout.graphql"),f);return k.jsx(c("CometFeedInlineComposerSprout.react"),{imageSrc:i("1260654"),label:h._("G\u1eafn th\u1ebb b\u1ea1n b\u00e8"),onPress:function(){return e({pushedPageOnLoad:"with_tagger"})},testid:void 0,triggerRef:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);