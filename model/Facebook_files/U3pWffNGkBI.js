if (self.CavalryLogger) { CavalryLogger.start_js(["nt\/gZzr"]); }

__d("CometComposerMagicUploadsSprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometComposerMagicUploadsSprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("CometComposerMagicUploadsSprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometComposerMagicUploadsSprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerMagicUploadsSprout",abstractKey:null};e.exports=a}),null);
__d("CometComposerPrivacySelectorButton_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometComposerPrivacySelectorButton_scope",selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacyIcon_scope"},{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorLabel_scope"},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDescriptionLabel_scope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometComposerPrivacySelectorEntryPointButton_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometComposerPrivacySelectorEntryPointButton_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation"},{kind:"Variable",name:"selected_override",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("CometComposerPrivacySelectorEntryPointButton_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometComposerPrivacySelectorEntryPointButton_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorTooltip_scope"},{args:null,kind:"FragmentSpread",name:"CometComposerPrivacySelectorButton_scope"}],storageKey:null}],storageKey:null}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacySelectorDescriptionLabel_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorDescriptionLabel_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorLabel_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPrivacySelectorLabel_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometComposerMagicUploadsSproutButton.react",["fbt","ix","CometComposerAttachmentPluginTypes","CometComposerSproutButton.react","QE2Logger","composerAttachmentAreaChecker","composerAttachmentAreaReducer","composerMediaAttachmentReducer","composerMediaAttachmentStateChecker","react","useComposerViewStateDispatcher","useComposerViewStateReducer","withComposerViewStatePart"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useRef;function a(a){a=a.attachmentArea;var b=k(!1);c("useComposerViewStateReducer")(d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,c("composerAttachmentAreaChecker"));c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"),c("composerMediaAttachmentStateChecker"));var e=c("useComposerViewStateDispatcher")(),f=function(){e({attachmentType:"MEDIA",type:"ACTIVATE_ATTACHMENT_TYPE"})};return j.jsx(c("CometComposerSproutButton.react"),{activeColor:"var(--fds-spectrum-lime-tint-70)",disabledIcon:i("532331"),icon:i("1260669"),isActive:(a==null?void 0:a.activeAttachmentType)===c("CometComposerAttachmentPluginTypes").MEDIA,label:h._("\u1ea2nh\/Video"),loggingName:"media_sprout",onClick:function(){b.current||(d("QE2Logger").logExposureForUser("comet_magic_uploads"),b.current=!0),f()},pluginName:c("CometComposerAttachmentPluginTypes").MEDIA,sproutName:"MEDIA",testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";b=c("withComposerViewStatePart")(a,function(a){return{attachmentArea:a.attachmentArea}});g["default"]=b}),98);
__d("CometComposerMagicUploadsSprout.react",["CometComposerMagicUploadsSproutButton.react","CometComposerMagicUploadsSprout_sprout.graphql","RelayHooks","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.sprout;d("RelayHooks").useFragment(h!==void 0?h:h=b("CometComposerMagicUploadsSprout_sprout.graphql"),a);return i.jsx(c("CometComposerMagicUploadsSproutButton.react"),{},"comet_composer_magic_uploads_button")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorHelpers",["fbt","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return a==null?null:h._("{privacyLabel} (+)",[h._param("privacyLabel",a)])}function b(a,b){return a===!0&&b!=="NONE"}function d(a){if(a==="SPECIFIC_FRIENDS")return h._("Nh\u1eefng b\u1ea1n s\u1ebd nh\u00ecn th\u1ea5y b\u00e0i vi\u1ebft");else if(a==="FRIENDS_EXCEPT")return h._("Nh\u1eefng b\u1ea1n kh\u00f4ng nh\u00ecn th\u1ea5y b\u00e0i vi\u1ebft");else{c("recoverableViolation")("Unsupported saved custom type: "+((a=a)!=null?a:"null"),"comet_privacy_selector");return h._("\u0110\u00e3 ch\u1ecdn")}}g.getTagExpandedLabel=a;g.hasTagExpansion=b;g.getSavedCustomTypeSelectedHeading=d}),98);
__d("CometPrivacySelectorLabel.react",["CometPrivacySelectorHelpers","CometPrivacySelectorLabel_scope.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.scope;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorLabel_scope.graphql"),a);var c=a.label,e=a.selected_option;a=a.show_tag_expansion_options;if(c==null)return null;a=d("CometPrivacySelectorHelpers").hasTagExpansion(a,e==null?void 0:e.current_tag_expansion);return i.jsx("span",{className:"l3itjdph cgat1ltu",children:a?d("CometPrivacySelectorHelpers").getTagExpandedLabel(c):c})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometPrivacySelectorDescriptionLabel.react",["fbt","CometRelay","gkx","useCometPrivacySelectorDescriptionLabel_scope.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i;function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useCometPrivacySelectorDescriptionLabel_scope.graphql"),a);var e=a.description,f=a.extended_description;a=a.label;e=e!=null?e:a;if(e==null)return void 0;a=c("gkx")("1593908")?f:"";return h._("Ch\u1ec9nh s\u1eeda quy\u1ec1n ri\u00eang t\u01b0. \u0110ang chia s\u1ebb v\u1edbi {privacy label}. {extended privacy label}",[h._param("privacy label",e),h._param("extended privacy label",a)])}g["default"]=a}),98);
__d("CometComposerPrivacySelectorButton.react",["ix","BaseFocusRing.react","CometComposerPrivacySelectorButton_scope.graphql","CometPressable.react","CometPrivacyIcon.react","CometPrivacySelectorButtonSavingOverlay.react","CometPrivacySelectorLabel.react","CometRelay","TetraIcon.react","TetraText.react","fbicon","react","stylex","useCometPrivacySelectorDescriptionLabel.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={button:{backgroundColor:"tdjehn4e",borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr",paddingTop:"ecm0bbzt",paddingBottom:"e5nlhep0"},content:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t"},invisible:{visibility:"kr9hpln1"},savingOverlayContainer:{position:"l9j0dhe7"}};function a(a,e){var f=a.isSaving,g=a.scope,l=babelHelpers.objectWithoutPropertiesLoose(a,["isSaving","scope"]),m=d("CometRelay").useFragment(i!==void 0?i:i=b("CometComposerPrivacySelectorButton_scope.graphql"),g),n=c("useCometPrivacySelectorDescriptionLabel.react")(m),o=a.disabled===!0?"secondary":"primary";return j.jsx(c("BaseFocusRing.react"),{children:function(b){return j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},l,{"aria-label":n,overlayDisabled:!0,ref:e,suppressFocusRing:!0,children:j.jsx(c("TetraText.react"),{color:o,type:"bodyLink4",children:j.jsxs("div",{className:c("stylex")(k.savingOverlayContainer),children:[j.jsx(c("CometPrivacySelectorButtonSavingOverlay.react"),{isSaving:f}),j.jsx("div",{className:c("stylex")(k.button,b),children:j.jsxs("div",{className:c("stylex")(f&&k.invisible,k.content),children:[j.jsx(c("CometPrivacyIcon.react"),{"aria-hidden":!0,color:o,marginEnd:4,scope:m}),j.jsx(c("CometPrivacySelectorLabel.react"),{scope:m}),a.disabled!==!0&&j.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(h("481880"),12),size:12})]})})]})})}))}})}a.displayName=a.name+" [from "+f.id+"]";e=j.forwardRef(a);g["default"]=e}),98);
__d("CometComposerPrivacySelectorEntryPointButton.react",["CometComposerPrivacySelectorButton.react","CometComposerPrivacySelectorEntryPointButton_renderer.graphql","CometPrivacySelectorTooltip.react","CometRelay","CometTrackingNodeProvider.react","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.isEnabled,f=a.isSaving,g=a.onPress,j=a.renderer;a=a.triggerRef;j=d("CometRelay").useFragment(h!==void 0?h:h=b("CometComposerPrivacySelectorEntryPointButton_renderer.graphql"),j);j=(j=j.source)==null?void 0:j.scope;if(j==null)throw c("unrecoverableViolation")("Failed to render privacy selector icon entry point. Either source or source.scope were not available.","comet_privacy_selector");return i.jsx(c("CometPrivacySelectorTooltip.react"),{entryPointHasLabel:!0,isLoading:f,scope:j,children:i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:29,children:i.jsx(c("CometComposerPrivacySelectorButton.react"),{disabled:f||!e,isSaving:f,onPress:g,ref:a,scope:j})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);