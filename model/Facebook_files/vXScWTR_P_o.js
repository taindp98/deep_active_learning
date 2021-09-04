if (self.CavalryLogger) { CavalryLogger.start_js(["7bizJIX"]); }

__d("CometHovercardGroupMemberRenderer_actor$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e={kind:"Variable",name:"scale",variableName:"scale"},f={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},j=[f,g,h,i],k={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[c,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null},l={kind:"Variable",name:"associated_entity_id",variableName:"groupID"},m={kind:"Literal",name:"render_location",value:"WWW_COMET_CONTEXTUAL_PROFILE_HOVERCARD"},n={kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},o={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},p={kind:"Literal",name:"icon_color",value:"fds-black"},q={kind:"Literal",name:"icon_variant",value:"filled"},r={alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},t={alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileActionBlockHandler","ProfileGroupActionBlockUserFromGroupHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFollowingStatusHandler","ProfileActionFriendRequestHandler","ProfileActionContextualProfileFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionAdditionalProfileRollbackUnavailableHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionContextualProfileMessageHandler","ProfileActionMessengerContactHandler","ProfileActionMessengerAudioCallHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionSetContentControlsHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionInviteExpertHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileGroupActionRemoveExpertHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditGroupScopedPersonProfileHandler","ProfileActionEditCampusProfileHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionContextualProfileReportMemberNameHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler","ProfileActionManageFollowerHandler","ProfileActionInviteToFollowHandler","ProfileActionSuggestEditsHandler","ProfileActionBookNowHandler","ProfileActionLockProfileHandler","ProfileActionDonateNowHandler","ProfileActionEditPinnedFeatureHandler","ProfileActionJoinCommunityHandler","ProfileActionTopFanBadgeSettingHandler","ProfileActionFavoriteCommunityHandler","ProfileGroupActionGroupMemberModerationsHandler","ProfileActionViewInboxHandler"]}],concreteType:null,kind:"LinkedField",name:"client_handler",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBlockHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBlockHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionBlockUserFromGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionBlockUserFromGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCreateDetailedReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCreateDetailedReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionDefaultHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionDefaultHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditFriendListHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditFriendListHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFollowingStatusHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFollowingStatusHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFriendRequestHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFriendRequestHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileFriendRequestHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileFriendRequestHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInsightsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInsightsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdditionalProfileRollbackUnavailableHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdditionalProfileRollbackUnavailableHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusOnboardingHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusOnboardingHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerContactHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerContactHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerAudioCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerAudioCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerVideoCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerVideoCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPreferredInteractionHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPreferredInteractionHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportMarketplaceUserHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportMarketplaceHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSeeFirstHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSeeFirstHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionViewProfileTransparencyHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionViewProfileTransparencyHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionRemoveMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionRemoveMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSearchProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSearchProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionSetContentControlsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionSetContentControlsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionMuteMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionMuteMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionTurnOnPostApprovalForMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteModeratorHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteModeratorHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteExpertHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteExpertHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionLeaveGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionLeaveGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionRemoveGroupAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionRemoveGroupAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionRemoveExpertHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionRemoveExpertHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdditionalProfileRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdditionalProfileRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditGroupScopedPersonProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditGroupScopedPersonProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditCampusProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditCampusProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditContextualProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditContextualProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportBioHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportBioHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportMemberNameHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportMemberNameHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPromoteHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPromoteHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdminToolsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdminToolsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionManageFollowerHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionManageFollowerHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInviteToFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInviteToFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSuggestEditsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSuggestEditsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBookNowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBookNowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionLockProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionLockProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionDonateNowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionDonateNowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditPinnedFeatureHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditPinnedFeatureHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionJoinCommunityHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionJoinCommunityHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionTopFanBadgeSettingHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionTopFanBadgeSettingHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFavoriteCommunityHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFavoriteCommunityHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionGroupMemberModerationsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionGroupMemberModerationsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionViewInboxHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionViewInboxHandler",abstractKey:null}],storageKey:'client_handler(supported:["ProfileActionBlockHandler","ProfileGroupActionBlockUserFromGroupHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFollowingStatusHandler","ProfileActionFriendRequestHandler","ProfileActionContextualProfileFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionAdditionalProfileRollbackUnavailableHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionContextualProfileMessageHandler","ProfileActionMessengerContactHandler","ProfileActionMessengerAudioCallHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionSetContentControlsHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionInviteExpertHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileGroupActionRemoveExpertHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditGroupScopedPersonProfileHandler","ProfileActionEditCampusProfileHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionContextualProfileReportMemberNameHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler","ProfileActionManageFollowerHandler","ProfileActionInviteToFollowHandler","ProfileActionSuggestEditsHandler","ProfileActionBookNowHandler","ProfileActionLockProfileHandler","ProfileActionDonateNowHandler","ProfileActionEditPinnedFeatureHandler","ProfileActionJoinCommunityHandler","ProfileActionTopFanBadgeSettingHandler","ProfileActionFavoriteCommunityHandler","ProfileGroupActionGroupMemberModerationsHandler","ProfileActionViewInboxHandler"])'},u={kind:"Literal",name:"icon_size",value:"20"},v=[{kind:"Variable",name:"id",variableName:"groupID"}];return{kind:"SplitOperation",metadata:{},name:"CometHovercardGroupMemberRenderer_actor$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[a,c,{kind:"InlineFragment",selections:[d,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_visibly_memorialized",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username_for_profile",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:2},{kind:"Literal",name:"render_location",value:"WWW_HOVERCARD"}],concreteType:"TimelineContextListItemsConnection",kind:"LinkedField",name:"timeline_context_items",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineContextListItem",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},{alias:null,args:[e,{kind:"Literal",name:"shade",value:"DARK"},{kind:"Literal",name:"size",value:"LARGE"},{kind:"Literal",name:"variant",value:"FILLED"}],concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:j,storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],storageKey:null}],storageKey:'timeline_context_items(first:2,render_location:"WWW_HOVERCARD")'}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:96},e,{kind:"Literal",name:"width",value:96}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[h,i,f,g],storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[a,c,k],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[c,k],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:"primaryActions",args:[l,m,{kind:"Literal",name:"subsurface_type",value:"PRIMARY_SURFACE"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[a,n,o,{alias:"primary_icon",args:[p,{kind:"Literal",name:"icon_size",value:"16"},q,e],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:j,storageKey:null},r,s,{alias:null,args:null,concreteType:"ProfileActionNux",kind:"LinkedField",name:"nux",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_caption",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null}],storageKey:null},t,c,{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:null},{alias:"secondaryActions",args:[l,m,{kind:"Literal",name:"subsurface_type",value:"SECONDARY_SURFACE"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[a,c,n,r,{alias:"secondary_icon",args:[p,u,{kind:"Literal",name:"icon_variant",value:"outline"},e],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:j,storageKey:null},{alias:"active_secondary_icon",args:[p,u,q,e],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:j,storageKey:null},o,s,t],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_vnext_action_bar",storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[a,c,d,{alias:"profile_image",args:[{kind:"Literal",name:"height",value:36},e,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[h],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"XFBProfilePlusContinuityModeInfo",kind:"LinkedField",name:"profile_plus_continuity_mode_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_acting_as_profile_plus",storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{kind:"TypeDiscriminator",abstractKey:"__isNode"}],type:"SupportsScopedActors",abstractKey:"__isSupportsScopedActors"}],type:"User",abstractKey:null}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"}],type:"Profile",abstractKey:"__isProfile"}],storageKey:null},{alias:null,args:v,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[d,c],storageKey:null},{alias:null,args:v,concreteType:null,kind:"LinkedField",name:"reference_type",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercardGroupMemberRenderer_actor",fragmentName:"CometHovercardGroupMemberWeakReferenceString_weakEntityReference",fragmentPropName:"weakEntityReference",kind:"ModuleImport"}],type:"WeakEntityReference",abstractKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometHovercardGroupMemberRenderer_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},b=[{kind:"Variable",name:"id",variableName:"groupID"}];return{argumentDefinitions:[{kind:"RootArgument",name:"groupID"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometHovercardGroupMemberRenderer_actor",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_visibly_memorialized",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username_for_profile",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:2},{kind:"Literal",name:"render_location",value:"WWW_HOVERCARD"}],concreteType:"TimelineContextListItemsConnection",kind:"LinkedField",name:"timeline_context_items",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineContextListItem",kind:"LinkedField",name:"nodes",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometHovercardContextRow_timelineContextListItem"}],storageKey:null}],storageKey:'timeline_context_items(first:2,render_location:"WWW_HOVERCARD")'}],type:"User",abstractKey:null},{args:[{kind:"Literal",name:"height",value:96},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:96}],kind:"FragmentSpread",name:"CometProfilePhotoForActor_actor"},{args:[{kind:"Variable",name:"entityID",variableName:"groupID"},{kind:"Literal",name:"userActionBarRenderLocation",value:"WWW_COMET_CONTEXTUAL_PROFILE_HOVERCARD"}],kind:"FragmentSpread",name:"ProfileCometHeaderActionBar_actor"},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"}],type:"Profile",abstractKey:"__isProfile"}],storageKey:null},action:"THROW",path:"actor"},{kind:"RequiredField",field:{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{kind:"RequiredField",field:a,action:"LOG",path:"group.name"}],storageKey:null},action:"LOG",path:"group"},{kind:"RequiredField",field:{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"reference_type",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercardGroupMemberRenderer_actor",fragmentName:"CometHovercardGroupMemberWeakReferenceString_weakEntityReference",fragmentPropName:"weakEntityReference",kind:"ModuleImport"}],type:"WeakEntityReference",abstractKey:null}],storageKey:null},action:"LOG",path:"reference_type"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null}}();e.exports=a}),null);
__d("CometHovercardGroupMemberRenderer.react",["fbt","Actor","CometHoverCardActionBarWrapper.react","CometHovercardContainer.react","CometHovercardContextRow.react","CometHovercardContextRows.react","CometHovercardGroupContext","CometHovercardGroupMemberRenderer_actor.graphql","CometProfilePhotoForActor.react","CometProfileVerificationBadge.react","CometRelay","ProfileCometContext","ProfileCometHeaderActionBar.react","ProfileCometProfileLink.react","TetraText.react","TetraTextPairing.react","orEmptyArray","react","recoverableViolation","unrecoverableViolation","useRenderLinkedEntity"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useContext,l=e.useMemo;function a(a){var e,f,g=a.actor;a=a.visualStyle;g=d("CometRelay").useFragment(i!==void 0?i:i=b("CometHovercardGroupMemberRenderer_actor.graphql"),g);if(g==null)throw c("unrecoverableViolation")("all data is missing in group member hovercard","groups_comet");var m=g.actor,n=g.group;g=g.reference_type;if(m==null)throw c("unrecoverableViolation")("actor is required in group member hovercard","groups_comet");var o=m.id,p=m.is_verified,q=d("Actor").useActor(),r=q[0];if(o==null)throw c("unrecoverableViolation")("Profile ID cannot be null","groups_comet");q=l(function(){return{isInViewAs:!1,profileID:o,profileVanity:null,viewerID:r}},[r,o]);e=c("orEmptyArray")((e=m.timeline_context_items)==null?void 0:e.nodes);var s=m.name;if(s==null)throw c("unrecoverableViolation")("Name cannot be null","groups_comet");f=(f=m.username_for_profile)!=null?f:s;s=k(c("CometHovercardGroupContext"));if(n==null){s=s==null?void 0:s.groupID;c("recoverableViolation")("You're rendering a Group Member hovercard, but the query failed to fetch\n      the associated group. Check if the correct group ID is supplied from\n      CometHovercardGroupContext.\n      Currently passed in Group ID: "+((s=s)!=null?s:"null"),"groups_comet")}s=(g==null?void 0:g.__typename)==="WeakEntityReference";var t=d("useRenderLinkedEntity").useRenderWeakReferenceEntity(s),u=t==null?void 0:t.colorProp;t=t==null?void 0:t.icon;f=j.jsx(c("ProfileCometProfileLink.react"),babelHelpers["extends"]({},u,{actor:m,children:j.jsx(c("TetraTextPairing.react"),{body:f?h._("\u0040{username}",[h._param("username",f)]):null,bodyColor:"secondary",headline:j.jsxs(j.Fragment,{children:[(f=t)!=null?f:null,m.name]}),headlineColor:(t=u==null?void 0:u.color)!=null?t:"primary",level:2})}));return j.jsx(c("CometHovercardContainer.react"),{actionBar:a==="without_action_bar"?void 0:j.jsx(c("CometHoverCardActionBarWrapper.react"),{children:j.jsx(c("ProfileCometContext").Provider,{value:q,children:j.jsx(c("ProfileCometHeaderActionBar.react"),{actor:m,isInHovercard:!0,source:"WWW_COMET_HOVERCARD"})})}),avatar:j.jsx(c("CometProfilePhotoForActor.react"),{actor:m,noHovercard:!0,shape:"circle",size:96}),contextRows:j.jsx(c("CometHovercardContextRows.react"),{children:e.map(function(a,b){return j.jsx(c("CometHovercardContextRow.react"),{timelineContextListItem:a},b)})}),heading:j.jsxs("div",{children:[m.is_visibly_memorialized===!0?j.jsx("div",{className:"f10w8fjw",children:j.jsx(c("TetraTextPairing.react"),{headline:h._("T\u01b0\u1edfng nh\u1edb"),headlineColor:"secondary",level:4})}):null,j.jsxs("div",{children:[f,p===!0&&j.jsxs(j.Fragment,{children:["\xa0",j.jsx(c("CometProfileVerificationBadge.react"),{profileID:o,size:"large"})]})]})]}),children:s&&n.name!=null&&j.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:j.jsx(d("CometRelay").MatchContainer,{match:g})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/",{tab:{type:"String"},section:{type:"String"},edit_section:{type:"String"},id:{type:"String"},dispute_id:{type:"String"},managed_notif_id:{type:"Int"},qp_id:{type:"Int"},ref:{type:"String"},privacy_source:{type:"Enum",enumType:1},option:{type:"String"},show_modal:{type:"Bool",defaultValue:!1},modal_type:{type:"String"},flow_kind:{type:"String"},referrer:{type:"Enum",enumType:1},protocol:{type:"String"},country:{type:"String"},initial_open_app_id:{type:"FBID"},legacy_contact_delegator_id:{type:"FBID"},group_id:{type:"FBID"},video_crosspost_partner_id:{type:"FBID"},show_add_phone_dialog:{type:"Bool",defaultValue:!1},phone_number:{type:"String"},mark_as_recycle:{type:"Bool",defaultValue:!1},mark_as_shared:{type:"Bool",defaultValue:!1},from_checkup:{type:"Bool",defaultValue:!1}})}),null);