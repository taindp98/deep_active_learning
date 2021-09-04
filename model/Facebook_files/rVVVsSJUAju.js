if (self.CavalryLogger) { CavalryLogger.start_js(["5yb1bXr"]); }

__d("PublicEventCometRSVPMenuBase_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"render_location",value:"COMET_EVENTS_RSVP"}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"PublicEventCometRSVPMenuBase_event",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_join",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_watch",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_unwatch",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_watch_status",storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_see_going_button",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:a,concreteType:"PrivacyScope",kind:"LinkedField",name:"event_connection_data_privacy_scope",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:"PrivacyScopeEditableRenderer"}],concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[{alias:null,args:a,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:'privacy_scope_for_location(render_location:"COMET_EVENTS_RSVP")'}],storageKey:'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")'}],storageKey:'event_connection_data_privacy_scope(render_location:"COMET_EVENTS_RSVP")'}],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("PublicEventCometRSVPMutationQuery.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"can_viewer_join",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"can_viewer_set_notification",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"can_viewer_watch",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"can_viewer_unwatch",storageKey:null},i=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],j={alias:null,args:null,kind:"ScalarField",name:"icon",storageKey:null},k={args:null,kind:"FragmentSpread",name:"EventCometOnlineEventButton_event"},l={alias:null,args:null,kind:"ScalarField",name:"can_viewer_create_post",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"viewer_has_pending_invite",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"viewer_watch_status",storageKey:null},o=[{kind:"Literal",name:"render_location",value:"COMET_EVENTS_RSVP"}],p=[{kind:"Literal",name:"supported",value:"PrivacyScopeEditableRenderer"}],q={kind:"Variable",name:"scale",variableName:"scale"},r=[q],s={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},u=[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],v={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"online_cta_renderer",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometOnlineEventButton_event",fragmentName:"EventCometMessengerRoomButton_onlineCTARenderer",fragmentPropName:"onlineCTARenderer",kind:"ModuleImport"}],type:"EventOnlineMessengerRoomCTARenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometOnlineEventButton_event",fragmentName:"EventCometOnlineLinkEventButton_onlineCTARenderer",fragmentPropName:"onlineCTARenderer",kind:"ModuleImport"}],type:"EventOnlineLinkCTARenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometOnlineEventButton_event",fragmentName:"EventCometOnlineLiveVideoButton_onlineCTARenderer",fragmentPropName:"onlineCTARenderer",kind:"ModuleImport"}],type:"EventOnlineLiveCTARenderer",abstractKey:null}],storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},x=[w],y=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],z={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},A={kind:"Literal",name:"first",value:3},B=[A];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PublicEventCometRSVPMutationQuery",selections:[{alias:null,args:c,concreteType:"EventUpdateExtendedViewerWatchStatusResponsePayload",kind:"LinkedField",name:"event_update_extended_viewer_watch_status",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_see_going_button",plural:!1,selections:[d],storageKey:null},e,f,g,h,{args:null,kind:"FragmentSpread",name:"EventCometLearningThreadRegisterButton_event"},{alias:null,args:null,concreteType:"EventPermalinkHeaderInfoBannerContent",kind:"LinkedField",name:"event_permalink_header_info_banner_content",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:i,storageKey:null},j],storageKey:null},k,{alias:null,args:null,concreteType:"EventToChildEventsConnection",kind:"LinkedField",name:"child_events",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"nodes",plural:!0,selections:[k],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_see_learning_thread",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"EventCometLearningThreadEntrypointButton_event"}],storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"parent_if_exists_or_self",plural:!1,selections:[l],storageKey:null},m,n,{args:null,kind:"FragmentSpread",name:"EventCometContextRowMemberAttendance_event"},{args:null,kind:"FragmentSpread",name:"EventCometGoWithFriendsAttendingSummary_event"},{args:null,kind:"FragmentSpread",name:"EventCometHostOnboardingChecklistCard_event"},{alias:null,args:o,concreteType:"PrivacyScope",kind:"LinkedField",name:"event_connection_data_privacy_scope",plural:!1,selections:[{alias:null,args:p,concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[{alias:null,args:o,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{alias:null,args:r,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null},s],storageKey:'privacy_scope_for_location(render_location:"COMET_EVENTS_RSVP")'}],storageKey:'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")'}],storageKey:'event_connection_data_privacy_scope(render_location:"COMET_EVENTS_RSVP")'}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Literal",name:"upcomingEventsCount",value:3}],kind:"FragmentSpread",name:"EventCometDashboardLeftRailUpcomingEvents_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PublicEventCometRSVPMutationQuery",selections:[{alias:null,args:c,concreteType:"EventUpdateExtendedViewerWatchStatusResponsePayload",kind:"LinkedField",name:"event_update_extended_viewer_watch_status",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_see_going_button",plural:!1,selections:[d,t],storageKey:null},e,f,g,h,{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event_if_remote_learning_class",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_join",plural:!1,selections:[{args:null,documentName:"EventCometLearningThreadRegisterButton_event",fragmentName:"EventCometLearningThreadRegisterButtonRenderer_event",fragmentPropName:"event",kind:"ModuleImport"},t],storageKey:null},t],storageKey:null},{alias:null,args:null,concreteType:"EventPermalinkHeaderInfoBannerContent",kind:"LinkedField",name:"event_permalink_header_info_banner_content",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:u,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:u,storageKey:null},j],storageKey:null},v,{alias:null,args:null,concreteType:"EventToChildEventsConnection",kind:"LinkedField",name:"child_events",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"nodes",plural:!0,selections:[v,t],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_see_learning_thread",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["XFBLearningThreadParticipantEntrypointRenderer","XFBLearningThreadInPendingQueueEntrypointRenderer","XFBLearningThreadCanJoinEntrypointRenderer","XFBLearningThreadCanAddPageAdminToChatEntrypointRenderer"]}],concreteType:null,kind:"LinkedField",name:"learning_thread_entrypoint_renderer",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometLearningThreadEntrypointButton_event",fragmentName:"EventCometLearningThreadParticipantEntrypointRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBLearningThreadParticipantEntrypointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometLearningThreadEntrypointButton_event",fragmentName:"EventCometLearningThreadInPendingQueueEntrypointRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBLearningThreadInPendingQueueEntrypointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometLearningThreadEntrypointButton_event",fragmentName:"EventCometLearningThreadCanJoinEntrypointRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBLearningThreadCanJoinEntrypointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometLearningThreadEntrypointButton_event",fragmentName:"EventCometLearningThreadCanAddPageAdminToChatEntrypointRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBLearningThreadCanAddPageAdminToChatEntrypointRenderer",abstractKey:null}],storageKey:'learning_thread_entrypoint_renderer(supported:["XFBLearningThreadParticipantEntrypointRenderer","XFBLearningThreadInPendingQueueEntrypointRenderer","XFBLearningThreadCanJoinEntrypointRenderer","XFBLearningThreadCanAddPageAdminToChatEntrypointRenderer"])'},t],storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"parent_if_exists_or_self",plural:!1,selections:[l,t],storageKey:null},m,n,{alias:"can_view_attendance_context_row",args:null,concreteType:"CanViewMembersRenderer",kind:"LinkedField",name:"can_view_members_renderer",plural:!1,selections:[{args:null,documentName:"EventCometContextRowMemberAttendance_event",fragmentName:"EventCometContextRowContentUniversalAttendance_canViewMembersRenderer",fragmentPropName:"canViewMembersRenderer",kind:"ModuleImport"}],storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"is_past",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_child_events",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_sharing_going_users_with_child_events",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_admin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_learning_course_child_event",storageKey:null},{alias:null,args:null,concreteType:"XFBPaidOnlineEventContext",kind:"LinkedField",name:"paid_online_event_context",plural:!1,selections:[{alias:null,args:null,concreteType:"PayToAccessPackage",kind:"LinkedField",name:"package",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"active_status",value:!0},{kind:"Literal",name:"types",value:["P2A","PAYG_SUBSCRIPTION"]}],kind:"ScalarField",name:"entitlements_count",storageKey:'entitlements_count(active_status:true,types:["P2A","PAYG_SUBSCRIPTION"])'},t],storageKey:null}],storageKey:null},{alias:"event_connected_users_going",args:[{kind:"Literal",name:"connection_types",value:["GOING"]}],concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:x,storageKey:'event_connected_users(connection_types:["GOING"])'},{alias:"event_connected_users_interested",args:[{kind:"Literal",name:"connection_types",value:["INTERESTED"]}],concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:x,storageKey:'event_connected_users(connection_types:["INTERESTED"])'},{alias:null,args:null,concreteType:"EventHostOnboarding",kind:"LinkedField",name:"event_host_onboarding",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"card_header_title",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"card_header_body",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"dismiss_card_title",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"dismiss_card_body",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"EventHostOnboardingAction",kind:"LinkedField",name:"actions_with_metadata",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:y,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_name",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"extra_options",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body_text",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"primary_cta_label",plural:!1,selections:y,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"eventUrl",args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"event_description",plural:!1,selections:y,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"event_kind",storageKey:null},{alias:"is_class_event",args:null,kind:"ScalarField",name:"is_remote_learning_class",storageKey:null},{alias:null,args:null,concreteType:"EventLinkedGroupCard",kind:"LinkedField",name:"linked_group_card",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"linked_group",plural:!1,selections:[t],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EventLinkedGroupLinkActionData",kind:"LinkedField",name:"event_linked_group_link_action_data",plural:!1,selections:[{alias:null,args:null,concreteType:"AdminedGroupsConnection",kind:"LinkedField",name:"linkable_groups",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:o,concreteType:"PrivacyScope",kind:"LinkedField",name:"event_connection_data_privacy_scope",plural:!1,selections:[{alias:null,args:p,concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[d,{alias:null,args:o,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null},{alias:null,args:r,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},z,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},s],storageKey:'privacy_scope_for_location(render_location:"COMET_EVENTS_RSVP")'},t],storageKey:'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")'}],storageKey:'event_connection_data_privacy_scope(render_location:"COMET_EVENTS_RSVP")'}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"account_user",args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{alias:null,args:B,concreteType:"EventDashboardUpcomingEventsConnection",kind:"LinkedField",name:"upcoming_events",plural:!1,selections:[{alias:null,args:null,concreteType:"EventDashboardUpcomingEventsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"node",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_canceled",storageKey:null},{alias:"cover_media_renderer",args:[{kind:"Literal",name:"supported",value:["EventCoverPhotoRenderer","EventCoverVideoRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_cover_media_renderer",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometItemImage_event",fragmentName:"EventCometItemPhotoRenderer_coverMedia",fragmentPropName:"coverMedia",kind:"ModuleImport"}],type:"EventCoverPhotoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometItemImage_event",fragmentName:"EventCometItemVideoRenderer_coverMedia",fragmentPropName:"coverMedia",kind:"ModuleImport"}],type:"EventCoverVideoRenderer",abstractKey:null}],storageKey:'comet_cover_media_renderer(supported:["EventCoverPhotoRenderer","EventCoverVideoRenderer"])'},{alias:null,args:[{kind:"Literal",name:"catkit_category_type",value:"PREDICTED"}],concreteType:"EventDiscoverCategoryFormatData",kind:"LinkedField",name:"discovery_categories",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"glyph_token",storageKey:null}],storageKey:'discovery_categories(catkit_category_type:"PREDICTED")'},{alias:null,args:[{kind:"Literal",name:"connection_types",value:["GOING","INTERESTED"]},A,{kind:"Literal",name:"is_viewer_friend",value:!0},{kind:"Literal",name:"orderby",value:"viewer_member_coefficient"}],concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:[w,{alias:null,args:null,concreteType:"EventConnectedUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{alias:null,args:[{kind:"Literal",name:"height",value:24},q,{kind:"Literal",name:"width",value:24}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[z],storageKey:null},t],storageKey:null}],storageKey:null}],storageKey:'event_connected_users(connection_types:["GOING","INTERESTED"],first:3,is_viewer_friend:true,orderby:"viewer_member_coefficient")'},{alias:null,args:[{kind:"Literal",name:"social_context_format",value:"SHORT_RSVP_SHOW_NAMES_ONLY"},{kind:"Literal",name:"social_context_render_location",value:"EVENTS_DASHBOARD"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:y,storageKey:'social_context(social_context_format:"SHORT_RSVP_SHOW_NAMES_ONLY",social_context_render_location:"EVENTS_DASHBOARD")'},{alias:"start_date",args:[{kind:"Literal",name:"day_time_sentence_format",value:"DATE_ONLY"}],kind:"ScalarField",name:"day_time_sentence",storageKey:'day_time_sentence(day_time_sentence_format:"DATE_ONLY")'},{alias:"start_time",args:[{kind:"Literal",name:"day_time_sentence_format",value:"START_TIME_ONLY"}],kind:"ScalarField",name:"day_time_sentence",storageKey:'day_time_sentence(day_time_sentence_format:"START_TIME_ONLY")'},d],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:"upcoming_events(first:3)"},{alias:null,args:B,filters:null,handle:"connection",key:"EventCometDashboardLeftRailUpcomingEvents_upcoming_events",kind:"LinkedHandle",name:"upcoming_events"}],type:"User",abstractKey:null},t],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4343969675624593",metadata:{},name:"PublicEventCometRSVPMutationQuery",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("EventCometContextRowContentUniversalAttendance_canViewMembersRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"EventCometContextRowContentUniversalAttendance_canViewMembersRenderer$normalization",selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:[{alias:"context_row_attendance_renderer",args:[{kind:"Literal",name:"supported",value:["PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer"]}],concreteType:null,kind:"LinkedField",name:"rsvp_style_renderer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometContextRowContentUniversalAttendance_canViewMembersRenderer",fragmentName:"EventCometContextRowContentAttendancePrivate_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"PrivateRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometContextRowContentUniversalAttendance_canViewMembersRenderer",fragmentName:"EventCometContextRowContentAttendancePublic_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"PublicRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometContextRowContentUniversalAttendance_canViewMembersRenderer",fragmentName:"EventsGeminiContextRowContentAttendancePrivate_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"WorkPrivateRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometContextRowContentUniversalAttendance_canViewMembersRenderer",fragmentName:"EventsGeminiContextRowContentAttendancePublic_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"WorkPublicRsvpStyleRenderer",abstractKey:null}],storageKey:'rsvp_style_renderer(supported:["PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer"])'},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("PublicEventCometRSVPMenuBase.react",["fbt","ix","CometMenu.react","CometMenuItemSelectable.react","CometRelay","CometSeparatorMenuItem.react","PublicEventCometRSVPButtonStrings","PublicEventCometRSVPMenuBase_event.graphql","TetraIcon.react","TetraText.react","emptyFunction","fbicon","gkx","react","stylex","unrecoverableViolation","useCometPrivacyIcon","useCometPrivacySelectorDialog"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){var e=a.event,f=a.onPrivacyChange,g=a.onRSVPChange;a=d("CometRelay").useFragment(j!==void 0?j:j=b("PublicEventCometRSVPMenuBase_event.graphql"),e);if(a==null)throw c("unrecoverableViolation")("event cannot be null","events");e=a.can_viewer_join;var l=a.can_viewer_unwatch,m=a.can_viewer_watch,n=a.event_connection_data_privacy_scope,o=a.if_viewer_can_see_going_button;a=a.viewer_watch_status;var p=a==="WATCHED",q=a==="UNWATCHED",r=a==="GOING",s=c("gkx")("1106435");n=n==null?void 0:(n=n.privacy_scope_renderer)==null?void 0:n.privacy_scope_for_location;var t=d("useCometPrivacyIcon").useCometPrivacyIconForMenuItem(n==null?void 0:n.icon_image);f=c("useCometPrivacySelectorDialog")(n,{onPrivacyChange:f,renderLocation:"COMET_EVENTS_RSVP"});f=f[0];n=n==null?void 0:n.label;if(s){if(f==null)throw c("unrecoverableViolation")("couldn't get showPrivacySelectorDialog","events");if(n==null)throw c("unrecoverableViolation")("couldn't get label for privacy selector option","events")}n=h._("Hi\u1ec3n th\u1ecb v\u1edbi ng\u01b0\u1eddi t\u1ed5 ch\u1ee9c v\u00e0 {=[events_rsvp_audience]}",[h._param("=[events_rsvp_audience]",k.jsx(c("TetraText.react"),{type:"headlineEmphasized4",children:h._("{events_rsvp_audience}",[h._param("events_rsvp_audience",n)])}))]);var u=function(a){return a?k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("621399"),20)}):k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("545511"),20)})};o=o!=null;return k.jsx("div",{className:"b38knevg",children:k.jsxs(c("CometMenu.react"),{size:"full",children:[k.jsx(c("CometMenuItemSelectable.react"),{aux:u,disabled:m!==!0&&!p,iconNode:k.jsx("div",{className:c("stylex").dedupe({"align-items-1":"bp9cbjyn","background-color-1":"tdjehn4e","border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","display-1":"j83agx80","height-1":"tv7at329","justify-content-1":"taijpn5t","margin-end-1":"tvfksri0","min-width-1":"odlk74j0"},p?{"background-color-1":"i224opu6"}:null),children:k.jsx(c("TetraIcon.react"),{color:p?"highlight":"primary",icon:d("fbicon")._(i("479327"),20)})}),iconStyle:"contained",isSelected:p,onClick:function(a){return g("WATCHED")},primaryColor:p?"highlight":"primary",primaryText:d("PublicEventCometRSVPButtonStrings").Interested(a),role:"menuitemradio",testid:void 0}),o?k.jsx(c("CometMenuItemSelectable.react"),{aux:u,disabled:e!==!0&&!r,iconNode:k.jsx("div",{className:c("stylex").dedupe({"align-items-1":"bp9cbjyn","background-color-1":"tdjehn4e","border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","display-1":"j83agx80","height-1":"tv7at329","justify-content-1":"taijpn5t","margin-end-1":"tvfksri0","min-width-1":"odlk74j0"},r?{"background-color-1":"i224opu6"}:null),children:k.jsx(c("TetraIcon.react"),{color:r?"highlight":"primary",icon:d("fbicon")._(i("498146"),20)})}),isSelected:r,onClick:function(a){return g("GOING")},primaryColor:r?"highlight":"primary",primaryText:d("PublicEventCometRSVPButtonStrings").Going(a),role:"menuitemradio",testid:void 0}):null,!s===!0?k.jsx(c("CometSeparatorMenuItem.react"),{}):null,k.jsx(c("CometMenuItemSelectable.react"),{aux:u,disabled:l!==!0&&!q,iconNode:k.jsx("div",{className:"odlk74j0 tvfksri0 taijpn5t tv7at329 j83agx80 spb7xbtv bkmhp75w emlxlaya s45kfl79 tdjehn4e bp9cbjyn",children:k.jsx(c("TetraIcon.react"),{color:"primary",icon:d("fbicon")._(i("491581"),20)})}),isSelected:!1,onClick:function(a){return g("UNWATCHED")},primaryText:d("PublicEventCometRSVPButtonStrings").Remove(a),role:"menuitemradio",testid:void 0}),s===!0?k.jsx(c("CometSeparatorMenuItem.react"),{}):null,s===!0?k.jsx(c("CometMenuItemSelectable.react"),{aux:function(){return k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("492536"),20)})},iconNode:k.jsx("div",{className:"odlk74j0 tvfksri0 taijpn5t tv7at329 j83agx80 spb7xbtv bkmhp75w emlxlaya s45kfl79 tdjehn4e bp9cbjyn",children:k.jsx(c("TetraIcon.react"),{color:"primary",icon:t||d("fbicon")._(i("497570"),20)})}),isSelected:!1,onClick:(m=f)!=null?m:c("emptyFunction"),primaryText:n,role:"menuitemradio"}):null]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PublicEventCometRSVPMutation",["CometRelay","PublicEventCometRSVPMutationQuery.graphql","WebPixelRatio","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("PublicEventCometRSVPMutationQuery.graphql");function a(a,b,e,f,g,h){if(b==null)throw c("unrecoverableViolation")("missing event id for rsvp mutation","events");d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(c){d("CometRelay").commitLocalUpdate(a,function(a){a=a.get(b);a&&a.setValue(!1,"is_rsvp_disabled_for_viewer");c&&(h&&h(e))})},optimisticUpdater:function(a){a=a.get(b);a&&(a.setValue(e,"viewer_watch_status").setValue(e!=="GOING","can_viewer_join").setValue(e!=="WATCHED","can_viewer_watch").setValue(e!=="UNWATCHED","can_viewer_unwatch").setValue(!1,"viewer_has_pending_invite").setValue(!0,"is_rsvp_disabled_for_viewer"),(e==="UNWATCHED"||e==="DECLINED")&&a.setValue(!1,"can_viewer_set_notification"))},variables:{input:{context:f,event_id:b,is_tracking_encrypted:!0,tracking:g.encrypted_tracking,watch_status:e},scale:d("WebPixelRatio").get()}})}g.commit=a}),98);