if (self.CavalryLogger) { CavalryLogger.start_js(["vXqKzyW"]); }

__d("EventCometEventFacepile_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:3,kind:"LocalArgument",name:"num_faces"},{kind:"RootArgument",name:"scale"},{defaultValue:"EVENTS_DASHBOARD",kind:"LocalArgument",name:"social_context_render_location"}],kind:"Fragment",metadata:null,name:"EventCometEventFacepile_event",selections:[{alias:null,args:[{kind:"Literal",name:"connection_types",value:["GOING","INTERESTED"]},{kind:"Variable",name:"first",variableName:"num_faces"},{kind:"Literal",name:"is_viewer_friend",value:!0},{kind:"Literal",name:"orderby",value:"viewer_member_coefficient"}],concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"EventConnectedUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"height",value:24},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:24}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"social_context_format",value:"SHORT_RSVP_SHOW_NAMES_ONLY"},{kind:"Variable",name:"social_context_render_location",variableName:"social_context_render_location"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometItemImage_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometItemImage_event",selections:[{alias:"cover_media_renderer",args:[{kind:"Literal",name:"supported",value:["EventCoverPhotoRenderer","EventCoverVideoRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_cover_media_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometItemImage_event",fragmentName:"EventCometItemPhotoRenderer_coverMedia",fragmentPropName:"coverMedia",kind:"ModuleImport"}],type:"EventCoverPhotoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometItemImage_event",fragmentName:"EventCometItemVideoRenderer_coverMedia",fragmentPropName:"coverMedia",kind:"ModuleImport"}],type:"EventCoverVideoRenderer",abstractKey:null}],storageKey:'comet_cover_media_renderer(supported:["EventCoverPhotoRenderer","EventCoverVideoRenderer"])'},{args:null,kind:"FragmentSpread",name:"useEventCometDiscoveryGlyph_event"}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometUpcomingItem_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}];return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"shouldShowGoingInterestedCount"}],kind:"Fragment",metadata:null,name:"EventCometUpcomingItem_event",selections:[{args:null,kind:"FragmentSpread",name:"EventCometName_event"},{args:null,kind:"FragmentSpread",name:"EventCometItemImage_event"},{args:null,kind:"FragmentSpread",name:"EventCometEventFacepile_event"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"start_date",args:[{kind:"Literal",name:"day_time_sentence_format",value:"DATE_ONLY"}],kind:"ScalarField",name:"day_time_sentence",storageKey:'day_time_sentence(day_time_sentence_format:"DATE_ONLY")'},{alias:"start_time",args:[{kind:"Literal",name:"day_time_sentence_format",value:"START_TIME_ONLY"}],kind:"ScalarField",name:"day_time_sentence",storageKey:'day_time_sentence(day_time_sentence_format:"START_TIME_ONLY")'},{condition:"shouldShowGoingInterestedCount",kind:"Condition",passingValue:!0,selections:[{alias:"going_count",args:[{kind:"Literal",name:"connection_types",value:["GOING"]}],concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:a,storageKey:'event_connected_users(connection_types:["GOING"])'},{alias:"interested_count",args:[{kind:"Literal",name:"connection_types",value:["INTERESTED"]}],concreteType:"EventConnectedUsersConnection",kind:"LinkedField",name:"event_connected_users",plural:!1,selections:a,storageKey:'event_connected_users(connection_types:["INTERESTED"])'}]}],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("EventCometDashboardDefaultLeftRailNavigation_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isLoggedOut"}],kind:"Fragment",metadata:null,name:"EventCometDashboardDefaultLeftRailNavigation_viewer",selections:[{condition:"isLoggedOut",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:"upcomingHostingEvents",args:[{kind:"Literal",name:"allowed_states",value:["CANCELED","PUBLISHED"]},{kind:"Literal",name:"connection_types",value:["HOST"]},{kind:"Literal",name:"handle_recurring_events",value:!0},{kind:"Literal",name:"is_viewer_invited",value:!1},{kind:"Literal",name:"past",value:!1},{kind:"Literal",name:"upcoming_include_happening_now",value:!0}],concreteType:"AllEventsConnection",kind:"LinkedField",name:"all_events",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:'all_events(allowed_states:["CANCELED","PUBLISHED"],connection_types:["HOST"],handle_recurring_events:true,is_viewer_invited:false,past:false,upcoming_include_happening_now:true)'}],type:"User",abstractKey:null}],storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"can_see_manage_events_section",storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("EventCometDashboardDefaultLeftRail_query.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isLoggedOut"}],kind:"Fragment",metadata:null,name:"EventCometDashboardDefaultLeftRail_query",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"EventCometDashboardDefaultLeftRailNavigation_viewer"},{args:null,kind:"FragmentSpread",name:"EventCometDashboardLeftRailCategories_viewer"}],storageKey:null},action:"THROW",path:"viewer"},{condition:"isLoggedOut",kind:"Condition",passingValue:!1,selections:[{alias:"loggedInViewer",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Literal",name:"upcomingEventsCount",value:3}],kind:"FragmentSpread",name:"EventCometDashboardLeftRailUpcomingEvents_viewer"},{args:null,kind:"FragmentSpread",name:"EventCometDashboardLeftRailTopEvents_viewer"}],storageKey:null}]}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("EventCometDashboardLeftRailCategories_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometDashboardLeftRailCategories_viewer",selections:[{alias:null,args:null,concreteType:"EventDiscoverCategoryFormatData",kind:"LinkedField",name:"event_category_list",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"category_id",storageKey:null},{alias:"icon",args:[{kind:"Literal",name:"color",value:"fig-light-80"}],concreteType:"Icon",kind:"LinkedField",name:"sutro_icon",plural:!1,selections:a,storageKey:'sutro_icon(color:"fig-light-80")'},{alias:"dark_icon",args:[{kind:"Literal",name:"color",value:"fig-white"}],concreteType:"Icon",kind:"LinkedField",name:"sutro_icon",plural:!1,selections:a,storageKey:'sutro_icon(color:"fig-white")'}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("EventCometDashboardLeftRailUpcomingEvents_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"upcomingEventsCount"}],kind:"Fragment",metadata:{connection:[{count:"upcomingEventsCount",cursor:null,direction:"forward",path:["account_user","upcoming_events"]}]},name:"EventCometDashboardLeftRailUpcomingEvents_viewer",selections:[{alias:"account_user",args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:"upcoming_events",args:null,concreteType:"EventDashboardUpcomingEventsConnection",kind:"LinkedField",name:"__EventCometDashboardLeftRailUpcomingEvents_upcoming_events_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"EventDashboardUpcomingEventsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"EventCometUpcomingItem_event"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("useEventCometDiscoveryGlyph_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventCometDiscoveryGlyph_event",selections:[{alias:null,args:[{kind:"Literal",name:"catkit_category_type",value:"PREDICTED"}],concreteType:"EventDiscoverCategoryFormatData",kind:"LinkedField",name:"discovery_categories",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"glyph_token",storageKey:null}],storageKey:'discovery_categories(catkit_category_type:"PREDICTED")'}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometEventFacepile.react",["CometRelay","EventCometEventFacepile_event.graphql","TetraOverlappingFacepileUnstyled.react","TetraText.react","orEmptyArray","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("EventCometEventFacepile_event.graphql");function a(a){a=d("CometRelay").useFragment(j,a.event);if(a==null)return null;var b=a.event_connected_users;a=a.social_context;var e=b==null?void 0:b.count;a=a==null?void 0:a.text;b=c("orEmptyArray")(b==null?void 0:b.edges);b=b.map(function(a){a=a.node;return a}).filter(Boolean).map(function(a){a=a.profile_picture;if(a==null||a.uri==null)return null;a=a.uri;return{source:{uri:a}}}).filter(Boolean);return a!=null&&a!==""&&e!=null&&e>0?i.jsx(c("TetraOverlappingFacepileUnstyled.react"),{count:e,isTextInline:!0,items:b,size:24,text:i.jsx(c("TetraText.react"),{numberOfLines:2,type:"meta3",children:a})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useEventCometDiscoveryGlyph.react",["ix","CometRelay","fbicon","useEventCometDiscoveryGlyph_event.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i!==void 0?i:i=b("useEventCometDiscoveryGlyph_event.graphql");function a(a){a=d("CometRelay").useFragment(j,a);if(a===null||(a==null?void 0:a.discovery_categories.length)===0)return d("fbicon")._(h("481121"),24);switch(a==null?void 0:a.discovery_categories[0].glyph_token){case"arts":return d("fbicon")._(h("547783"),24);case"babystroller":return d("fbicon")._(h("1198860"),24);case"balloon":return d("fbicon")._(h("1119503"),24);case"beach":return d("fbicon")._(h("1210826"),24);case"book":return d("fbicon")._(h("520626"),24);case"building-city":return d("fbicon")._(h("497090"),24);case"calendar-with-grid":return d("fbicon")._(h("481121"),24);case"calendar-with-star":return d("fbicon")._(h("875294"),24);case"car":return d("fbicon")._(h("485029"),24);case"card":return d("fbicon")._(h("578885"),24);case"clock":return d("fbicon")._(h("478797"),24);case"cocktail":return d("fbicon")._(h("487310"),24);case"cup":return d("fbicon")._(h("968137"),24);case"cupcake":return d("fbicon")._(h("1210832"),24);case"face-laughing":return d("fbicon")._(h("642540"),24);case"face-very-happy":return d("fbicon")._(h("788547"),24);case"film-projector":return d("fbicon")._(h("562487"),24);case"following":return d("fbicon")._(h("602178"),24);case"friend-confirm":return d("fbicon")._(h("562980"),24);case"friends":return d("fbicon")._(h("487559"),24);case"fork-knife":return d("fbicon")._(h("788689"),24);case"games":return d("fbicon")._(h("545941"),24);case"group":return d("fbicon")._(h("485094"),24);case"hands-praying":return d("fbicon")._(h("656744"),24);case"health":return d("fbicon")._(h("549489"),24);case"heart":return d("fbicon")._(h("722861"),24);case"house":return d("fbicon")._(h("481927"),24);case"kids":return d("fbicon")._(h("1210838"),24);case"leaf":return d("fbicon")._(h("1135479"),24);case"magnifying-glass":return d("fbicon")._(h("491284"),24);case"moon":return d("fbicon")._(h("832943"),24);case"music":return d("fbicon")._(h("886195"),24);case"nearby-places":return d("fbicon")._(h("995983"),24);case"network":return d("fbicon")._(h("497901"),24);case"palette":return d("fbicon")._(h("785870"),24);case"ribbon":return d("fbicon")._(h("642552"),24);case"running":return d("fbicon")._(h("572412"),24);case"scissors":return d("fbicon")._(h("534422"),24);case"shopping-bag":return d("fbicon")._(h("556468"),24);case"soccer":return d("fbicon")._(h("585294"),24);case"star":return d("fbicon")._(h("479330"),24);case"sunrise":return d("fbicon")._(h("929095"),24);case"sun-with-clouds":return d("fbicon")._(h("1110199"),24);case"ticket":return d("fbicon")._(h("562222"),24);case"tree":return d("fbicon")._(h("574153"),24);case"trending":return d("fbicon")._(h("549519"),24);case"trowel":return d("fbicon")._(h("1210845"),24);case"truck-shipping":return d("fbicon")._(h("503034"),24);case"walk":return d("fbicon")._(h("854556"),24);case"wireless":return d("fbicon")._(h("485124"),24);default:return d("fbicon")._(h("481121"),24)}}g["default"]=a}),98);
__d("EventCometItemImage.react",["CometRelay","EventCometItemImage_event.graphql","TetraIcon.react","react","useEventCometDiscoveryGlyph.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=56,k=75;function a(a){var e=a.event,f=a.height;f=f===void 0?j:f;a=a.width;a=a===void 0?k:a;e=d("CometRelay").useFragment(h!==void 0?h:h=b("EventCometItemImage_event.graphql"),e);var g=c("useEventCometDiscoveryGlyph.react")(e);return i.jsx("div",{className:"emzexkp1 stjgntxs ni8dbmo4 taijpn5t e5d9fub0 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 g6srhlxm bp9cbjyn",style:{height:f,width:a},children:e.cover_media_renderer?i.jsx(d("CometRelay").MatchContainer,{match:e.cover_media_renderer,props:{imageHeight:f,imageWidth:a}}):i.jsx(c("TetraIcon.react"),{color:"tertiary",icon:g,size:24})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometUpcomingItem.react",["fbt","CometMiddot.react","CometPressable.react","CometRelay","CometRouteMatch","CometRow.react","CometRowItem.react","EventCometEventFacepile.react","EventCometItemImage.react","EventCometName.react","EventCometUpcomingItem_event.graphql","EventCometVerticalSpacer.react","TetraText.react","TetraTextPairing.react","XCometEventPermalinkControllerRouteBuilder","gkx","react","stylex","useEventActionLoggerParams"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useMemo,l=i!==void 0?i:i=b("EventCometUpcomingItem_event.graphql"),m={goingInterestedText:{paddingTop:"ecm0bbzt"},pressable:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",flexDirection:"cbu4d94t",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso",width:"k4urcfbm"},selected:{backgroundColor:"i224opu6"},selectedWashBackground:{backgroundColor:"qsy8amke"}};function a(a){var b,e,f=a.event$key,g=a.hasDisabledInteractivity;g=g===void 0?!1:g;var i=a.routeTarget,n=a.shouldAddHorizontalPadding;n=n===void 0?!0:n;var o=a.shouldShowFacepile;o=o===void 0?!0:o;a=a.shouldShowGoingInterestedCount;a=a===void 0?!1:a;f=d("CometRelay").useFragment(l,f);var p=d("CometRouteMatch").useHostedRouteMatcher(d("CometRouteMatch").MatchFunctions.pathMatchFunction),q=c("useEventActionLoggerParams")({mechanism:"your_upcoming_events_unit",surface:"bookmark"});q[0];var r=q[1];q=k(function(){return JSON.stringify(r)},[r]);if(f==null)return null;var s=f.id,t=f.start_date,u=f.start_time;if(s==null||t==null||u==null)return null;b=(b=f.going_count)==null?void 0:b.count;e=(e=f.interested_count)==null?void 0:e.count;b=j.jsxs(j.Fragment,{children:[h._("{going} ng\u01b0\u1eddi s\u1ebd tham gia",[h._param("going",b)]),j.jsx(c("CometMiddot.react"),{}),h._("{interested} ng\u01b0\u1eddi quan t\u00e2m",[h._param("interested",e)])]});e=j.jsxs(c("CometRow.react"),{paddingHorizontal:n?12:0,paddingVertical:0,children:[j.jsx(c("CometRowItem.react"),{children:j.jsx(c("EventCometItemImage.react"),{event:f})}),j.jsxs(c("CometRowItem.react"),{expanding:!0,children:[j.jsx(c("TetraTextPairing.react"),{headline:j.jsx(c("EventCometName.react"),{event:f,size:18}),headlineLineLimit:2,level:4,meta:j.jsxs(j.Fragment,{children:[t,j.jsx(c("CometMiddot.react"),{}),u]}),metaColor:"negative",metaLocation:"above",testid:void 0}),j.jsx(c("EventCometVerticalSpacer.react"),{height:8}),o&&j.jsx(c("EventCometEventFacepile.react"),{event:f}),a&&j.jsx("div",{className:c("stylex")(m.goingInterestedText),children:j.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:b})})]})]});if(g)return j.jsx(c("CometRow.react"),{paddingHorizontal:8,children:e});n=c("XCometEventPermalinkControllerRouteBuilder").buildURL({acontext:q,event_id:s});u={routeTarget:(t=i)!=null?t:"content",url:n};o=p(n);f=c("gkx")("1535")?m.selectedWashBackground:m.selected;return j.jsx(c("CometPressable.react"),{linkProps:u,overlayDisabled:o,xstyle:[m.pressable,o&&f],children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometEventsCalendarControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/calendar/{?focus}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsDashboardPastControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/past/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsGoingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/going/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsHostingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/hosting/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsInterestedControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/interested/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsInvitesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/invites/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsManageControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/manage/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("EventCometDashboardDefaultLeftRailNavigation.react",["fbt","ix","CometRelay","CometRouteMatch","EventCometActionContext","EventCometDashboardDefaultLeftRailNavigation_viewer.graphql","TetraButton.react","TetraList.react","TetraListCell.react","XCometBirthdayEventControllerRouteBuilder","XCometEventCreateControllerRouteBuilder","XCometEventsCalendarControllerRouteBuilder","XCometEventsDashboardPastControllerRouteBuilder","XCometEventsGoingControllerRouteBuilder","XCometEventsHomeControllerRouteBuilder","XCometEventsHostingControllerRouteBuilder","XCometEventsInterestedControllerRouteBuilder","XCometEventsInvitesControllerRouteBuilder","XCometEventsManageControllerRouteBuilder","XCometEventsNotificationsControllerRouteBuilder","fbicon","gkx","react","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useContext,m=e.useState;function a(a){var e;a=a.viewer$key;a=d("CometRelay").useFragment(j!==void 0?j:j=b("EventCometDashboardDefaultLeftRailNavigation_viewer.graphql"),a);e=a==null?void 0:(e=a.actor)==null?void 0:(e=e.upcomingHostingEvents)==null?void 0:e.count;a=(a=a==null?void 0:a.can_see_manage_events_section)!=null?a:!1;var f=d("CometRouteMatch").useCurrentRouteMatcher(d("CometRouteMatch").MatchFunctions.pathMatchFunction),g=JSON.stringify(l(c("EventCometActionContext"))),n=c("XCometEventsHomeControllerRouteBuilder").buildURL({acontext:g}),o=c("XCometEventsCalendarControllerRouteBuilder").buildURL({acontext:g}),p=c("XCometEventsGoingControllerRouteBuilder").buildURL({acontext:g}),q=c("XCometEventsInvitesControllerRouteBuilder").buildURL({acontext:g}),r=c("XCometEventsInterestedControllerRouteBuilder").buildURL({acontext:g}),s=c("XCometEventsHostingControllerRouteBuilder").buildURL({acontext:g}),t=c("XCometEventsDashboardPastControllerRouteBuilder").buildURL({acontext:g}),u=c("XCometEventCreateControllerRouteBuilder").buildURL({acontext:g,dialog_entry_point:"bookmark"}),v=c("XCometBirthdayEventControllerRouteBuilder").buildURL({acontext:g}),w=c("XCometEventsManageControllerRouteBuilder").buildURL({acontext:g}),x=f(w);g=c("XCometEventsNotificationsControllerRouteBuilder").buildURL({acontext:g});var y=f(n),z=f(o),A=f(p),B=f(q),C=f(r),D=f(s),E=f(t),F=f(v);f=f(g);var G=[z,A,B,B,D,E].some(Boolean);G=m(G);var H=G[0],I=G[1];G=k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:y?"blue":"gray",icon:d("fbicon")._(i("481118"),20),size:36,type:"contained-icon"},headline:h._("Trang ch\u1ee7"),level:4,linkProps:{url:n},selected:y,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0});return c("useIsLoggedOut")()?G:k.jsxs(k.Fragment,{children:[G,a===!0&&k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:x?"blue":"gray",icon:d("fbicon")._(i("481919"),20),size:36,type:"contained-icon"},headline:h._("T\u1ed5 ch\u1ee9c"),level:4,linkProps:{url:w},selected:x,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0}),k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:z?"blue":"gray",icon:a===!0?d("fbicon")._(i("891128"),20):d("fbicon")._(i("481919"),20),size:36,type:"contained-icon"},addOnSecondary:{children:k.jsx("div",{className:"aov4n071 dhix69tm sjgh65i0",children:k.jsxs(c("TetraList.react"),{children:[k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:A?"blue":"gray",icon:d("fbicon")._(i("498146"),20),size:36,type:"contained-icon"},body:h._("S\u1ebd tham gia"),bodyColor:"primary",linkProps:{url:p},selected:A,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0}),k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:B?"blue":"gray",icon:d("fbicon")._(i("495079"),20),size:36,type:"contained-icon"},body:h._("L\u1eddi m\u1eddi"),bodyColor:"primary",linkProps:{url:q},selected:B,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0}),k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:C?"blue":"gray",icon:d("fbicon")._(i("479327"),20),size:36,type:"contained-icon"},body:h._("Quan t\u00e2m"),bodyColor:"primary",linkProps:{url:r},selected:C,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0}),a===!0?null:k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:D?"blue":"gray",icon:d("fbicon")._(i("481926"),20),size:36,type:"contained-icon"},body:e!=null&&e>0?h._("\u0110ang t\u1ed5 ch\u1ee9c \u30fb{count of today's hosting event}",[h._param("count of today's hosting event",e)]):h._("T\u1ed5 ch\u1ee9c"),bodyColor:"primary",linkProps:{url:s},selected:D,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0}),k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:E?"blue":"gray",icon:d("fbicon")._(i("534219"),20),size:36,type:"contained-icon"},body:h._("S\u1ef1 ki\u1ec7n \u0111\u00e3 qua"),bodyColor:"primary",linkProps:{url:t},selected:E,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0})]})}),open:H,type:"expander"},headline:a===!0?h._("Tham d\u1ef1"):h._("S\u1ef1 ki\u1ec7n c\u1ee7a b\u1ea1n"),level:4,linkProps:z?void 0:{url:o},onPress:function(){z?I(function(a){return!a}):I(!0)},selected:z,selectedBackground:c("gkx")("1535")?"wash":"highlight"}),k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:F?"blue":"gray",icon:d("fbicon")._(i("514478"),20),size:36,type:"contained-icon"},headline:h._("Sinh nh\u1eadt"),level:4,linkProps:{url:v},selected:F,selectedBackground:c("gkx")("1535")?"wash":"highlight",testid:void 0}),k.jsx(c("TetraListCell.react"),{addOnPrimary:{color:f?"blue":"gray",icon:d("fbicon")._(i("508241"),20),size:36,type:"contained-icon"},headline:h._("Th\u00f4ng b\u00e1o"),level:4,linkProps:{url:g},selected:f,selectedBackground:c("gkx")("1535")?"wash":"highlight"}),k.jsx("div",{className:"dhix69tm bi6gxh9e wkznzc2l n1l5q3vz",children:k.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("483768"),16),label:h._("T\u1ea1o s\u1ef1 ki\u1ec7n m\u1edbi"),linkProps:{url:u},reduceEmphasis:!0,size:"medium"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometDashboardLeftRailCategories.react",["fbt","CometRelay","EventCometDashboardConfig","EventCometDashboardLeftRailCategories_viewer.graphql","ImageIconSource","TetraListCell.react","TetraText.react","orEmptyArray","react","useCurrentDisplayMode","useEventCometSearchRouteUrlBuilder"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useMemo;function a(a){a=a.viewer$key;var e=c("useCurrentDisplayMode")(),f=e==="dark";e=d("CometRelay").useFragment(i!==void 0?i:i=b("EventCometDashboardLeftRailCategories_viewer.graphql"),a);var g=e.event_category_list,l=c("useEventCometSearchRouteUrlBuilder")({entryPointSurface:"EVENTS_DASHBOARD"});a=k(function(){var a;return c("orEmptyArray")(g==null?void 0:(a=g.slice())==null?void 0:a.sort(function(a,b){return a.label==null||b.label==null?0:a.label.localeCompare(b.label)}))},[g]);return!a.length?null:j.jsxs("div",{children:[j.jsx("div",{className:"dati1w0a sj5x9vvc hv4rvrfc jb3vyjys",children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:h._("H\u1ea1ng m\u1ee5c")})}),a.map(function(a){var b;b=f?a==null?void 0:(b=a.dark_icon)==null?void 0:b.uri:a==null?void 0:(b=a.icon)==null?void 0:b.uri;if((a==null?void 0:a.label)==null||(a==null?void 0:a.category_id)==null||b==null)return null;var e={name:"filter_events_category"};e=JSON.stringify(babelHelpers["extends"]({},e,{args:a.category_id}));return j.jsx(c("TetraListCell.react"),{addOnPrimary:{color:"gray",icon:new(c("ImageIconSource"))(b,20,20),size:36,type:"contained-icon"},headline:a.label,level:4,linkProps:{url:l({encryptedServerDefinedExperience:d("EventCometDashboardConfig").all_events_search_server_defined_experience,entryPointAction:"FILTERS",filters:{"filter_events_category:0":e},query:(b=a.label)!=null?b:""})},testid:void 0},a.category_id)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometDashboardLeftRailUpcomingEvents.react",["fbt","CometErrorBoundary.react","CometRelay","CometUnit.react","CometUnitHeader.react","EventCometDashboardLeftRailUpcomingEvents_viewer.graphql","TetraText.react","XCometEventsCalendarControllerRouteBuilder","deferredLoadComponent","gkx","orEmptyArray","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("EventCometUpcomingItem.react").__setRef("EventCometDashboardLeftRailUpcomingEvents.react")),l=i!==void 0?i:i=b("EventCometDashboardLeftRailUpcomingEvents_viewer.graphql");function m(){return j.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:j.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"body4",children:h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea3i s\u1ef1 ki\u1ec7n. H\u00e3y th\u1eed l\u1ea1i v\u00e0 b\u00e1o c\u00e1o n\u1ebfu b\u1ea1n v\u1eabn g\u1eb7p l\u1ed7i n\u00e0y nh\u00e9.")})})}m.displayName=m.name+" [from "+f.id+"]";function a(a){a=a.viewer$key;a=d("CometRelay").useFragment(l,a);a=c("orEmptyArray")(a==null?void 0:(a=a.account_user)==null?void 0:(a=a.upcoming_events)==null?void 0:a.edges);a=a.map(function(a){a=a==null?void 0:a.node;return a!=null?j.jsx(k,{event$key:a,routeTarget:c("gkx")("2007302")?"self":null},a.id):null}).filter(Boolean);return j.jsx("div",{className:"hcukyx3x b20td4e0 cxmmr5t8 sv5sfqaa",children:j.jsx(c("CometUnit.react"),{header:j.jsx(c("CometUnitHeader.react"),{action:a.length>0?h._("Xem t\u1ea5t c\u1ea3"):null,actionLinkProps:{url:c("XCometEventsCalendarControllerRouteBuilder").buildURL({})},headline:h._("S\u1ef1 ki\u1ec7n s\u1eafp t\u1edbi"),level:3,paddingTop:8}),paddingBottom:8,spacing:4,children:j.jsx(c("CometErrorBoundary.react"),{fallback:function(){return j.jsx(m,{})},children:a.length>0?j.jsx("div",{className:"scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",children:a}):j.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:j.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"body4",children:h._("B\u1ea1n kh\u00f4ng c\u00f3 b\u1ea5t k\u1ef3 s\u1ef1 ki\u1ec7n s\u1eafp di\u1ec5n ra n\u00e0o.")})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometDashboardDefaultLeftRail.react",["fbt","ix","CometLeftRailComponent.react","CometLeftRailHeader.react","CometRelay","CometRoundedTextInput.react","CometRouteMatch","EventCometDashboardConstants","EventCometDashboardDefaultLeftRailNavigation.react","EventCometDashboardDefaultLeftRail_query.graphql","EventCometDashboardLeftRailCategories.react","EventCometDashboardLeftRailUpcomingEvents.react","TetraIcon.react","XCometEventsHomeControllerRouteBuilder","cr:65","deferredLoadComponent","fbicon","react","requireDeferred"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useState,m=c("deferredLoadComponent")(c("requireDeferred")("EventCometDashboardScopedTypeahead.react").__setRef("EventCometDashboardDefaultLeftRail.react"));function a(a){a=a.query$key;a=d("CometRelay").useFragment(j!==void 0?j:j=b("EventCometDashboardDefaultLeftRail_query.graphql"),a);var e=a.loggedInViewer;a=a.viewer;var f=l(!1),g=f[0],n=f[1];f=d("CometRouteMatch").useCurrentRouteMatcher(d("CometRouteMatch").MatchFunctions.pathMatchFunction);f=f(c("XCometEventsHomeControllerRouteBuilder").buildURL({}));return k.jsx(c("CometLeftRailComponent.react"),{header:k.jsx(c("CometLeftRailHeader.react"),{title:h._("S\u1ef1 ki\u1ec7n")}),primaryNav:k.jsxs(k.Fragment,{children:[k.jsx(c("EventCometDashboardDefaultLeftRailNavigation.react"),{viewer$key:a}),k.jsx("div",{className:"dhix69tm sjgh65i0 wkznzc2l tr9rh885 ay7djpcl pwoa4pd7"}),e?k.jsxs(k.Fragment,{children:[k.jsx(c("EventCometDashboardLeftRailUpcomingEvents.react"),{viewer$key:e}),!f&&b("cr:65")&&k.jsx(b("cr:65"),{viewer$key:e}),k.jsx("div",{className:"dhix69tm sjgh65i0 wkznzc2l tr9rh885 ay7djpcl pwoa4pd7"})]}):null,k.jsx(c("EventCometDashboardLeftRailCategories.react"),{viewer$key:a})]}),search:g?k.jsx(m,{}):k.jsx("div",{className:"dati1w0a hv4rvrfc",children:k.jsx(c("CometRoundedTextInput.react"),{icon:k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("491282"),16),size:16}),label:d("EventCometDashboardConstants").SIDEBAR_SEARCH_LABEL,onClick:function(){return n(!0)},onMouseEnter:function(){return n(!0)},placeholder:d("EventCometDashboardConstants").SIDEBAR_SEARCH_LABEL})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometPageVanityEventsAdminToolControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/events/admin/",Object.freeze({ref:""}),void 0);b=a;g["default"]=b}),98);