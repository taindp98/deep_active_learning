if (self.CavalryLogger) { CavalryLogger.start_js(["3tRF+r8"]); }

__d("RoomsRoomSettingsContextProvider_link.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsRoomSettingsContextProvider_link",selections:[{alias:null,args:null,kind:"ScalarField",name:"expected_call_start_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"emoji",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_surface",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_allow_guests",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lock_status",storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a}),null);
__d("RoomsRoomSettingsContextProvider_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsRoomSettingsContextProvider_user",selections:[{args:[{kind:"Literal",name:"profile_pic_width",value:160}],kind:"FragmentSpread",name:"useRoomsRoomDefaultValues_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("RoomsNullStateCreate_friend.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsNullStateCreate_friend",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("RoomsNullStateCreate_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsNullStateCreate_viewer",selections:[{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[{alias:"create_a_room",args:[{kind:"Literal",name:"type",value:"CREATE_ROOM_TO_INVITE_FRIEND"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:'joinable_video_chats_string(type:"CREATE_ROOM_TO_INVITE_FRIEND")'}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("RoomsNullStateDialogQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"userID"}],b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},e={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null},f=[{kind:"Variable",name:"id",variableName:"userID"}],g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={kind:"Variable",name:"scale",variableName:"scale"},i=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],j={alias:null,args:[h],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:i,storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},m=[{kind:"Literal",name:"first",value:50}],n=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"RoomsNullStateDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"RoomsRoomSettingsContextProvider_user"}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[{alias:"published_self_room_cards",args:null,concreteType:"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",kind:"LinkedField",name:"__RoomsNullStateDialog_published_self_room_cards_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[b,{args:null,kind:"FragmentSpread",name:"RoomsNullStateInvite_room"},c],storageKey:null},d],storageKey:null},e],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsNullStateInvite_fbts"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsNullStateCreate_viewer"}],storageKey:null},{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[b,g,j,{args:null,kind:"FragmentSpread",name:"RoomsNullStateCreate_friend"},{args:null,kind:"FragmentSpread",name:"RoomsNullStateInvite_friend"},{args:null,kind:"FragmentSpread",name:"RoomsNullStateOpenMessenger_friend"}],type:"User",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"RoomsNullStateDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:"profile_pic",args:[h,{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:i,storageKey:null},k,l],type:"User",abstractKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[{alias:null,args:m,concreteType:"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",kind:"LinkedField",name:"published_self_room_cards",plural:!1,selections:[{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,b,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"emoji",storageKey:null},{alias:null,args:null,concreteType:"JoinableVideoChatsAvailabilitySettings",kind:"LinkedField",name:"joinable_video_chat_availability_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"visibility_mode",storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_hash",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_url",storageKey:null},g],type:"MessengerCallInviteLink",abstractKey:null}],storageKey:null},d],storageKey:null},e],storageKey:"published_self_room_cards(first:50)"},{alias:null,args:m,filters:null,handle:"connection",key:"RoomsNullStateDialog_published_self_room_cards",kind:"LinkedHandle",name:"published_self_room_cards"},{alias:"invite_title_specific_friends_privacy",args:[{kind:"Literal",name:"type",value:"INVITE_SPECIFIC_FRIENDS_SCREEN_TITLE"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:n,storageKey:'joinable_video_chats_string(type:"INVITE_SPECIFIC_FRIENDS_SCREEN_TITLE")'},{alias:"invite_title_friends_privacy",args:[{kind:"Literal",name:"type",value:"TELL_YOUR_FRIENDS_TITLE"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:n,storageKey:'joinable_video_chats_string(type:"TELL_YOUR_FRIENDS_TITLE")'},{alias:"create_a_room",args:[{kind:"Literal",name:"type",value:"CREATE_ROOM_TO_INVITE_FRIEND"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:n,storageKey:'joinable_video_chats_string(type:"CREATE_ROOM_TO_INVITE_FRIEND")'}],storageKey:null}],storageKey:null},{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,b,{kind:"InlineFragment",selections:[g,j,l,k],type:"User",abstractKey:null}],storageKey:null}]},params:{id:"5042973005720772",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["viewer","joinable_video_chats","published_self_room_cards"]}]},name:"RoomsNullStateDialogQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("RoomsNullStateInvite_fbts.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsNullStateInvite_fbts",selections:[{alias:"invite_title_specific_friends_privacy",args:[{kind:"Literal",name:"type",value:"INVITE_SPECIFIC_FRIENDS_SCREEN_TITLE"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"INVITE_SPECIFIC_FRIENDS_SCREEN_TITLE")'},{alias:"invite_title_friends_privacy",args:[{kind:"Literal",name:"type",value:"TELL_YOUR_FRIENDS_TITLE"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"TELL_YOUR_FRIENDS_TITLE")'}],type:"JoinableVideoChatsViewerFields",abstractKey:null}}();e.exports=a}),null);
__d("RoomsNullStateInvite_friend.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsNullStateInvite_friend",selections:[{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("RoomsNullStateInvite_room.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsNullStateInvite_room",selections:[{alias:null,args:null,kind:"ScalarField",name:"emoji",storageKey:null},{alias:null,args:null,concreteType:"JoinableVideoChatsAvailabilitySettings",kind:"LinkedField",name:"joinable_video_chat_availability_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"visibility_mode",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_hash",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a}),null);
__d("RoomsEntryPointLoader.react",["CometPlaceholder.react","CometRelay","react","useCometRelayEntrypointContextualEnvironmentProvider","useEffectOnce"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.componentProps,e=a.entryPoint,f=a.fallback,g=a.preloadParams;a=c("useCometRelayEntrypointContextualEnvironmentProvider")();a=d("CometRelay").useEntryPointLoader(a,e);e=a[0];var i=a[1],j=a[2];c("useEffectOnce")(function(){i(g);return function(){return j()}});return h.jsx(c("CometPlaceholder.react"),{fallback:f,children:e!=null?h.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:e,props:b}):f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RoomsListCellPlaceholder.react",["BaseGlimmer.react","TetraListCell.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmer:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",height:"i4qgphn6",marginBottom:"p5pk11vy",marginTop:"n1l5q3vz",width:"pfqjqu37"}};function a(a){var b=a.glimmerXStyle;a=a.index;return h.jsx(c("TetraListCell.react"),{headline:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.glimmer,b),index:(b=a)!=null?b:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RoomsRoomSettingsContextProvider.react",["MessengerCallInviteLinkLockStatus","MessengerCallLinkSurface","RelayHooks","RoomsRoomSettingsContext","RoomsRoomSettingsContextProvider_link.graphql","RoomsRoomSettingsContextProvider_user.graphql","getJSEnumSafe","react","recoverableViolation","useRoomsRoomDefaultValues"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");e=d("react");var k=e.useMemo,l=e.useState,m=h!==void 0?h:h=b("RoomsRoomSettingsContextProvider_link.graphql"),n=i!==void 0?i:i=b("RoomsRoomSettingsContextProvider_user.graphql");function a(a){var b=a.children,e=a.initialRoomData,f=a.linkRef;a=a.userRef;f=d("RelayHooks").useFragment(m,f);a=d("RelayHooks").useFragment(n,a);a=c("useRoomsRoomDefaultValues")(a);var g=a.defaultDate,h=a.defaultEmoji;a=a.defaultRoomName;g=e!=null?e.date:g;h=e!=null?e.emoj:h;e=e!=null?e.roomName:a;var i=(f==null?void 0:f.link_surface)&&c("getJSEnumSafe")(c("MessengerCallLinkSurface"),f==null?void 0:f.link_surface);h=l({date:(f==null?void 0:f.expected_call_start_time)==null||(f==null?void 0:f.expected_call_start_time)===0?g:f==null?void 0:f.expected_call_start_time,lockStatus:(a=c("getJSEnumSafe")(c("MessengerCallInviteLinkLockStatus"),f==null?void 0:f.lock_status))!=null?a:"locked_by_owner_disconnect",roomEmoji:(g=f==null?void 0:f.emoji)!=null?g:h,roomLinkSurface:i,roomName:(a=f==null?void 0:f.name)!=null?a:e,shouldAllowGuests:(g=f==null?void 0:f.should_allow_guests)!=null?g:!1});a=h[0];var o=a.date,p=a.lockStatus,q=a.roomEmoji,r=a.roomName,s=a.shouldAllowGuests,t=h[1];o===0&&c("recoverableViolation")("default date should not be 0","rooms");e=k(function(){return{date:o,lockStatus:p,roomEmoji:q,roomLinkSurface:i,roomName:r,shouldAllowGuests:s,update:function(a){return t(function(b){return a(b)})}}},[o,p,q,i,r,t,s]);return j.jsx(c("RoomsRoomSettingsContext").Provider,{value:e,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RoomsInvitePage.entrypoint",["JSResourceForInteraction","RoomsInviteViewQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.linkHash;return{queries:{inviteQueryReference:{parameters:c("RoomsInviteViewQuery$Parameters"),variables:{linkHash:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("RoomsInvitePage.react").__setRef("RoomsInvitePage.entrypoint")};g["default"]=a}),98);
__d("RoomsNullStateCreate.react",["fbt","ix","CometRelay","GraphQLGender","RoomsEnumType","RoomsGating","RoomsNullStateCreate_friend.graphql","RoomsNullStateCreate_viewer.graphql","RoomsRoomUpdateStatusContext","TetraListCell.react","VideoChatLogging","VideoChatLoggingDataContext","VideoChatLoggingDispatcherContext","fbicon","react","unrecoverableViolation","useMWChatNewVideoChat","useRoomsCreateMutation","uuid"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=d("react"),m=d("react").useContext,n=j!==void 0?j:j=b("RoomsNullStateCreate_viewer.graphql"),o=k!==void 0?k:k=b("RoomsNullStateCreate_friend.graphql");function a(a){var b=a.friendRef,e=a.onClose,f=a.testid;f=a.viewerRef;var g=d("CometRelay").useFragment(o,b);a=d("CometRelay").useFragment(n,f);b=a==null?void 0:a.joinable_video_chats;a=new(c("GraphQLGender"))((f=g==null?void 0:g.gender)!=null?f:"UNKNOWN").toIntlVariationsEnum();f=g==null?void 0:g.short_name;var j=m(c("RoomsRoomUpdateStatusContext"));j=j.isSaving;var k=m(c("VideoChatLoggingDataContext")),p=m(c("VideoChatLoggingDispatcherContext")),q=p.setLoggingData;p=d("VideoChatLogging").useVideoChatLogging();var r=p.logRoomCreationFlowStart,s=p.logRoomEmptyCardButtonTap,t=d("RoomsGating").getCreationVariant()==="post_creation_invite",u=d("RoomsGating").getInitialJoinPermission();p=function(a){a=a.linkHash;e(d("RoomsEnumType").NullStateDialogActions.SELF_LOBBY,a)};var v=c("useRoomsCreateMutation")(p,!1);p=d("RoomsGating").shouldEnableVideoCallForSayHi()||d("RoomsGating").shouldUseVideoCallStirng()?h._("B\u1eaft \u0111\u1ea7u chat video"):b==null?void 0:(p=b.create_a_room)==null?void 0:p.text;f=d("RoomsGating").shouldEnableVideoCallForSayHi()?h._({"*":"{user name} s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c cu\u1ed9c g\u1ecdi c\u1ee7a b\u1ea1n."},[h._param("user name",f,[1,a])]):h._({"*":"{user name} s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\u01b0\u1ee3c m\u1eddi."},[h._param("user name",f,[1,a])]);a=c("useMWChatNewVideoChat")();var w=a[0];a=a[1];if(b==null)throw c("unrecoverableViolation")("Unexpected null","rooms");b=function(){var a=babelHelpers["extends"]({},k,{session_ids:babelHelpers["extends"]({},k==null?void 0:k.session_ids,{funnel_session_id:c("uuid")()})});r(a);s(babelHelpers["extends"]({},a,{button_type:"create"}));q&&q(a);if(d("RoomsGating").shouldEnableVideoCallForSayHi()){a=(g==null?void 0:g.id)!=null?[g==null?void 0:g.id]:[];w("fb_tray",a)}else t?v({joinPermission:u}):e(d("RoomsEnumType").NullStateDialogActions.CREATE)};return l.jsx(c("TetraListCell.react"),{addOnPrimary:j||a?{type:"contained-progress-ring-indeterminate"}:{icon:d("fbicon")._(i("662993"),20),size:40,type:"contained-icon"},addOnSecondary:t?null:{type:"disclosure"},addOnSecondaryVerticalAlign:"center",body:f,disabled:j||a,headline:p,level:3,onPress:b,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RoomsNullStateInvite.react",["fbt","CometRelay","GraphQLGender","RoomsDialogLoadingState.react","RoomsEntryPointLoader.react","RoomsInvitePage.entrypoint","RoomsNullStateInvite_fbts.graphql","RoomsNullStateInvite_friend.graphql","RoomsNullStateInvite_room.graphql","TetraListCell.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=d("react"),m=i!==void 0?i:i=b("RoomsNullStateInvite_room.graphql"),n=j!==void 0?j:j=b("RoomsNullStateInvite_friend.graphql"),o=k!==void 0?k:k=b("RoomsNullStateInvite_fbts.graphql");function a(a){var b=a.fbtsRef,e=a.friendRef,f=a.initialParticipantsToInvite,g=a.onClose,i=a.pushPage,j=a.roomRef;a=a.testid;var k=d("CometRelay").useFragment(m,j);a=d("CometRelay").useFragment(n,e);j=d("CometRelay").useFragment(o,b);b=new(c("GraphQLGender"))((e=a==null?void 0:a.gender)!=null?e:"UNKNOWN").toIntlVariationsEnum();e=a==null?void 0:a.short_name;a=h._({"*":"M\u1eddi {user name} tham gia {room name}"},[h._param("user name",e,[1,b]),h._param("room name",l.jsx("strong",{children:k==null?void 0:k.name}))]);b=k==null?void 0:(e=k.joinable_video_chat_availability_settings)==null?void 0:e.visibility_mode;var p=b==="ALL_FRIENDS"?(b=j==null?void 0:(e=j.invite_title_friends_privacy)==null?void 0:e.text)!=null?b:"Tell Your Friends":(b=j==null?void 0:(e=j.invite_title_specific_friends_privacy)==null?void 0:e.text)!=null?b:"Invite Specific Friends";j=function(){i(function(){return l.jsx(c("RoomsEntryPointLoader.react"),{componentProps:{initialParticipantsToInvite:f,linkUrl:k==null?void 0:k.link_url,onDone:g},entryPoint:c("RoomsInvitePage.entrypoint"),fallback:l.jsx(c("RoomsDialogLoadingState.react"),{}),preloadParams:{linkHash:k==null?void 0:k.link_hash}})},{title:p,withoutBackButton:!0})};return l.jsx(c("TetraListCell.react"),{addOnPrimary:(k==null?void 0:k.emoji)!=null?{emoji:k==null?void 0:k.emoji,size:40,type:"emoji"}:null,addOnSecondary:{type:"disclosure"},addOnSecondaryVerticalAlign:"center",headline:a,level:3,onPress:j,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RoomsNullStateDialog.react",["CometMultiStepDialog.react","CometPlaceholder.react","CometRelay","RoomsDialogHeader.react","RoomsListCellPlaceholder.react","RoomsNullStateCreate.react","RoomsNullStateDialogQuery.graphql","RoomsNullStateInvite.react","RoomsPrivacyMenuContextProviderWrapper.react","RoomsRoomSettingsContextProvider.react","RoomsRoomUpdateStatusContextProvider.react","VideoChatLogging","VideoChatLoggingContextProvider.react","cr:1856451","filterNulls","orEmptyArray","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={dialog:{paddingBottom:"f10w8fjw",width:"oh7imozk"},glimmer1:{width:"pfqjqu37"}};function a(a){var e,f,g=a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("RoomsNullStateDialogQuery.graphql"),a.queryReference);var k=a==null?void 0:a.node,l=a.viewer,m=a==null?void 0:(e=a.viewer)==null?void 0:e.joinable_video_chats;a=(e=a.viewer)==null?void 0:e.actor;var n=k==null?void 0:k.name;e=(e=k==null?void 0:k.id)!=null?e:void 0;var o=k==null?void 0:(f=k.profile_picture)==null?void 0:f.uri;f=g.loggingData;var p=g.onClose;if(m==null||a==null||n==null||l==null||k==null||o==null)throw c("unrecoverableViolation")("Expected non-null:"+(m==null?" jvcRef":"")+(a==null?" userRef":"")+(n==null?" userName":"")+(l==null?" viewerRef":"")+(k==null?" friendRef":"")+(o==null?" profilePic":""),"rooms");var q=c("filterNulls")(c("orEmptyArray")((g=l.joinable_video_chats)==null?void 0:(g=g.published_self_room_cards)==null?void 0:g.edges).map(function(a){return a.node})),r=e!=null?[{id:e,name:n,profilePictureURI:o}]:[];g=d("VideoChatLogging").useVideoChatLogging();e=g.logRoomEmptyCardSheetImpression;g=g.useVideoChatImpressionLogging;var s=g(babelHelpers["extends"]({},f,{sheet_type:"room_say_hi_sheet"}),e);g=function(a){return i.jsxs("div",{className:c("stylex")(j.dialog),ref:s,children:[i.jsx(c("RoomsDialogHeader.react"),{name:n,profileUris:[o]}),i.jsxs(c("CometPlaceholder.react"),{fallback:i.jsx(c("RoomsListCellPlaceholder.react"),{glimmerXStyle:j.glimmer1,index:0}),children:[q.length===0?i.jsx(c("RoomsNullStateCreate.react"),{friendRef:k,onClose:p,testid:void 0,viewerRef:l}):q.map(function(b,d){return i.jsx(c("RoomsNullStateInvite.react"),{fbtsRef:m,friendRef:k,initialParticipantsToInvite:r,onClose:p,pushPage:a,roomRef:b,testid:void 0},b.id)}),b("cr:1856451")!=null&&i.jsx(b("cr:1856451"),{friendRef:k,onClose:p})]})]})};return i.jsx(c("VideoChatLoggingContextProvider.react"),{initialLoggingData:f,children:i.jsx(c("RoomsPrivacyMenuContextProviderWrapper.react"),{defaultPrivacy:{visibilityMode:"WHITELISTED_PARTICIPANTS",whiteListedParticipants:(k==null?void 0:k.id)!=null?[k==null?void 0:k.id]:void 0},didUserSetPrivacy:!0,children:i.jsx(c("RoomsRoomSettingsContextProvider.react"),{linkRef:null,userRef:a,children:i.jsx(c("RoomsRoomUpdateStatusContextProvider.react"),{children:i.jsx(c("CometMultiStepDialog.react"),{labelledBy:"create_room_button",onClose:p,size:"content",withCloseButton:!0,children:g})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);