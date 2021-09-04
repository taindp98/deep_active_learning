if (self.CavalryLogger) { CavalryLogger.start_js(["N5CSSlk"]); }

__d("CometSearchScopedLoggedOutTypeahead.react",["BaseTypeahead.react","CometSearchScopedTypeaheadInputStrategy.react","CometTypeaheadLayoutContextualStrategy.react","react","useCometSearchRoutingQueryString"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState,k={typeaheadInput:{alignItems:"bp9cbjyn",display:"j83agx80"},typeaheadView:{borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",paddingBottom:"sj5x9vvc",paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr"}},l={12:{paddingEnd:"d1544ag0",paddingStart:"tw6a2znq"},16:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var b=a.paddingHorizontal,d=b===void 0?16:b;b=babelHelpers.objectWithoutPropertiesLoose(a,["paddingHorizontal"]);a=j(c("useCometSearchRoutingQueryString")());var e=a[0];a=a[1];var f=i(function(){return{inputXStyle:[k.typeaheadInput,l[d]],viewXStyle_DO_NOT_USE:e.trim()!==""?k.typeaheadView:null}},[d,e]);return h.jsx(c("BaseTypeahead.react"),babelHelpers["extends"]({},b,{inputStrategyRenderer:c("CometSearchScopedTypeaheadInputStrategy.react"),layoutStrategyRenderer:c("CometTypeaheadLayoutContextualStrategy.react"),onChange:a,queryString:e,xstyles:f}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometSearchScopedTypeaheadLoggedOutDataSource",["Promise","cometSearchTypeaheadDecorateMixedPayload","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useMemo,j=1;function a(){var a=h(function(a){var b=a.entries;a=a.params;var d=a.query;return d.trim()===""?{entries:b,params:a}:c("cometSearchTypeaheadDecorateMixedPayload")({entries:b,params:a},{limit:j})},[]),d=h(function(b){return a({entries:[],params:b})},[a]),e=h(function(c){return b("Promise").resolve(a({entries:[],params:c}))},[a]);return i(function(){return{addRecentEntry:c("emptyFunction"),fetchCache:d,fetchNetwork:e,removeRecentEntry:c("emptyFunction")}},[d,e])}g["default"]=a}),98);
__d("XCometWatchSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useCometWatchSearchRouteUrlBuilder",["Base64","XCometWatchSearchControllerRouteBuilder","react","useSearchCometResultsCommonRouteParamBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.watchSerpType;a=babelHelpers.objectWithoutPropertiesLoose(a,["watchSerpType"]);var d=c("useSearchCometResultsCommonRouteParamBuilder")(a);return h(function(a){a=babelHelpers["extends"]({},d.build(a));b!=null&&(a.watch_config=c("Base64").encode(JSON.stringify({watch_serp_type:b})));return c("XCometWatchSearchControllerRouteBuilder").buildURL(a)},[d,b])}g["default"]=a}),98);
__d("CometWatchScopedTypeaheadDialog.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{}},root:c("JSResourceForInteraction")("CometWatchScopedTypeaheadDialog.react").__setRef("CometWatchScopedTypeaheadDialog.entrypoint")};g["default"]=a}),98);
__d("CometWatchScopedTypeaheadDialogTrigger.react",["fbt","ix","TetraCircleButton.react","cometSearchEntityScopedTypeaheadDialogFallback","fbicon","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useCallback;function a(a){a=a.dialogEntryPoint;a=c("useCometEntryPointDialog")(a,Object.freeze({}),"button",c("cometSearchEntityScopedTypeaheadDialogFallback"));var b=a[0],e=a[1],f=a[2],g=a[3];a=a[4];var l=k(function(){b({})},[b]);return j.jsx(c("TetraCircleButton.react"),{icon:d("fbicon")._(i("491283"),20),label:h._("T\u00ecm ki\u1ebfm"),onHoverIn:f,onHoverOut:g,onPress:l,onPressIn:a,ref:e,size:36,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometWatchScopedTypeaheadDialogTriggerDeferred.react",["BaseGlimmer.react","CometPlaceholder.react","CometWatchScopedTypeaheadDialog.entrypoint","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometWatchScopedTypeaheadDialogTrigger.react").__setRef("CometWatchScopedTypeaheadDialogTriggerDeferred.react"));function a(a){return h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("BaseGlimmer.react"),{className:"thwo4zme tv7at329 qmr60zad inkptoze qlfml3jp e72ty7fz",index:0}),children:h.jsx(i,{dialogEntryPoint:c("CometWatchScopedTypeaheadDialog.entrypoint")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometWatchScopedTypeaheadViewItemResolver.react",["fbt","CometSearchTypeaheadBaseSurfaceRecentViewItem.react","CometTypeaheadEchoViewItem.react","CometTypeaheadKeywordViewItem.react","CometTypeaheadSeeAllViewItem.react","CometTypeaheadViewItemResolver.react","cometSearchTypeaheadEchoViewItem.resolver","cometSearchTypeaheadKeywordViewItem.resolver","cometSearchTypeaheadRecentViewItem.resolver","cometSearchTypeaheadSeeAllViewItem.resolver","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useMemo;function a(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);var d=j(function(){return k()},[]);return i.jsx(c("CometTypeaheadViewItemResolver.react"),babelHelpers["extends"]({},a,{entryMappings:d,children:b}))}a.displayName=a.name+" [from "+f.id+"]";function k(){return[{resolver:c("cometSearchTypeaheadEchoViewItem.resolver"),viewItem:c("CometTypeaheadEchoViewItem.react")},{resolver:c("cometSearchTypeaheadSeeAllViewItem.resolver"),viewItem:c("CometTypeaheadSeeAllViewItem.react"),viewItemProps:{placeholderBuilder:l}},{resolver:c("cometSearchTypeaheadRecentViewItem.resolver"),viewItem:c("CometSearchTypeaheadBaseSurfaceRecentViewItem.react")},{resolver:c("cometSearchTypeaheadKeywordViewItem.resolver"),viewItem:c("CometTypeaheadKeywordViewItem.react")}]}function l(a){return h._("T\u00ecm ki\u1ebfm video c\u00f3 ch\u1ee9a {=[query]}",[h._param("=[query]",i.jsx("strong",{children:h._("{query}",[h._param("query",a)])}))])}l.displayName=l.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometWatchScopedTypeaheadViewItem.react",["CometWatchScopedTypeaheadViewItemResolver.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.entry,d=babelHelpers.objectWithoutPropertiesLoose(a,["entry"]);return h.jsx(c("CometWatchScopedTypeaheadViewItemResolver.react"),{entry:b,children:function(a,c){return h.jsx(a,babelHelpers["extends"]({},d,{entry:b,extraViewItemProps:c}))}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("cometWatchScopedTypeahead.config",[],(function(a,b,c,d,e,f){"use strict";a={dataSources:{keywordDataSourceParams:{queryVariables:{fetch_count:8,fetch_mode:"video_home_search_keyword_only"}}},logging:{sessionContext:"WATCH_SCOPED"},view:{renderLimit:8}};f["default"]=a}),66);
__d("CometWatchScopedTypeahead.react",["fbt","BaseTypeahead.react","CometErrorBoundary.react","CometSearchScopedTypeaheadInputStrategy.react","CometSearchScopedTypeaheadStyles","CometSearchTypeaheadBaseViewRecentEmptyState.react","CometTypeaheadErrorFallback.react","CometTypeaheadLayoutContextualStrategy.react","CometWatchScopedTypeaheadViewItem.react","cometWatchScopedTypeahead.config","react","useCometSearchRecentDataSourceContextDecorator","useCometSearchRoutingQueryString","useCometSearchScopedTypeaheadDataSource","useCometSearchScopedTypeaheadPressEntryHandler","useCometSearchScopedTypeaheadSelectFreeformQueryHandler","useCometSearchTypeaheadLoggingProvider","useCometTypeaheadStateQueryString","useCometTypeaheadViewListStrategy","useCometWatchSearchRouteUrlBuilder","useSearchCometRecentSearchDataSource","useStable","withSearchCometTypeaheadBaseNavigationDecorator"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useMemo,k={inputBackground:{backgroundColor:"tdjehn4e"},paddingHorizontal:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},typeaheadViewAllRoundedCorner:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi"}},l=h._("T\u00ecm ki\u1ebfm video");function a(a){var b=a.isInWebwashBackground;b=b===void 0?!1:b;var e=a.placeholder;e=e===void 0?l:e;a=babelHelpers.objectWithoutPropertiesLoose(a,["isInWebwashBackground","placeholder"]);var f=c("useCometWatchSearchRouteUrlBuilder")({entryPointSurface:a.entryPointSurface,watchSerpType:1}),g=c("useCometSearchTypeaheadLoggingProvider")({context:"watch_scoped"}),m=c("useCometTypeaheadStateQueryString")(c("useCometSearchRoutingQueryString")()),n=m[0];m=m[1];var o=c("useCometSearchScopedTypeaheadDataSource")({config:c("cometWatchScopedTypeahead.config"),recentDataSource:c("useSearchCometRecentSearchDataSource")({filter:"video_search"})}),p=c("useCometSearchRecentDataSourceContextDecorator")(o),q=j(function(){return[p]},[p]),r=c("useCometSearchScopedTypeaheadPressEntryHandler")({loggingProvider:g,urlBuilder:f});f=c("useCometSearchScopedTypeaheadSelectFreeformQueryHandler")({loggingProvider:g,urlBuilder:f});var s=c("useCometTypeaheadViewListStrategy")({emptyStateContent:i.jsx(c("CometSearchTypeaheadBaseViewRecentEmptyState.react"),{}),viewItemStrategyRenderer:c("CometWatchScopedTypeaheadViewItem.react"),viewXStyle:[d("CometSearchScopedTypeaheadStyles").typeaheadView,b&&k.typeaheadViewAllRoundedCorner]}),t={inputXStyle:[d("CometSearchScopedTypeaheadStyles").typeaheadInput,k.paddingHorizontal]},u=c("useStable")(function(){return c("withSearchCometTypeaheadBaseNavigationDecorator")(c("BaseTypeahead.react"))});return i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx(c("CometTypeaheadErrorFallback.react"),{})},children:i.jsx(u,{dataSource:o,decorators:q,inputExtraProps:b?{xstyle:k.inputBackground}:{},inputStrategyRenderer:c("CometSearchScopedTypeaheadInputStrategy.react"),label:h._("T\u00ecm ki\u1ebfm video"),layoutStrategyRenderer:c("CometTypeaheadLayoutContextualStrategy.react"),loggingProvider:g,onChange:m,onPressEntry:(u=a==null?void 0:a.onPressEntry)!=null?u:r,onSelectFreeformQuery:(o=a==null?void 0:a.onSelectFreeformQuery)!=null?o:f,placeholder:e,queryString:n,testid:void 0,viewStrategyRenderer:s,xstyles:t})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometWatchScopedTypeaheadDeferred.react",["CometPlaceholder.react","SearchCometScopedTypeaheadPlaceholder.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometWatchScopedTypeahead.react").__setRef("CometWatchScopedTypeaheadDeferred.react"));function a(a){return h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("SearchCometScopedTypeaheadPlaceholder.react"),{}),children:h.jsx(i,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XVideoHomeSearchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/watch/search/",{query:{type:"String"},__eps__:{type:"Enum",enumType:1}})}),null);
__d("CometVideoHomeLOESearchBar.react",["fbt","CometErrorBoundary.react","CometSearchScopedLoggedOutTypeahead.react","CometTypeaheadErrorFallback.react","CometWatchScopedTypeaheadViewItem.react","URI","XVideoHomeSearchController","gkx","react","useCometRouterDispatcher","useCometSearchRoutingQueryString","useCometSearchScopedTypeaheadLoggedOutDataSource","useCometSearchTypeaheadLoggingProvider","useCometTypeaheadViewListStrategy"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState;function a(a){a=a.initialQuery;a=a===void 0?"":a;a=j(c("useCometSearchRoutingQueryString")()||a);var b=a[0];a=a[1];var d=c("useCometSearchScopedTypeaheadLoggedOutDataSource")(),e=c("useCometTypeaheadViewListStrategy")({viewItemStrategyRenderer:c("CometWatchScopedTypeaheadViewItem.react")}),f=c("gkx")("708253"),g=c("useCometRouterDispatcher")(),k=function(a){a=c("XVideoHomeSearchController").getURIBuilder().setString("query",a).getURI();f?g!=null&&g.go(a.toString(),{}):c("URI").go(a)},l=function(a){k(a.getLabel())},m=c("useCometSearchTypeaheadLoggingProvider")({context:"watch_scoped"});return i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx(c("CometTypeaheadErrorFallback.react"),{})},children:i.jsx(c("CometSearchScopedLoggedOutTypeahead.react"),{dataSource:d,label:h._("T\u00ecm ki\u1ebfm video"),loggingProvider:m,onChange:a,onPressEntry:l,onSelectFreeformQuery:k,placeholder:h._("T\u00ecm ki\u1ebfm video"),queryString:b,testid:void 0,viewStrategyRenderer:e})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeNavItemLoggingMap",[],(function(a,b,c,d,e,f){"use strict";a={EXPLORE:"explore",HOME:"home",LATEST:"latest",LIVE:"live",MUSIC:"music",SAVED:"saved",SHOWS:"shows",SPORTS:"sports",WATCHLIST_DROPDOWN:"watchlist_dropdown"};f["default"]=a}),66);
__d("XCometVideoHomeCatalogControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/shows/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVideoHomeGamingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/gaming/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVideoHomeMusicControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/music/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVideoHomeSavedControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/saved/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVideoHomeScheduledLiveControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/live/scheduled/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVideoHomeSportsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/sports/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVideoHomeTopicControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/watch/topic/{?topic}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometVideoHomeNavItemMap",["fbt","ix","XCometLiveProducerControllerRouteBuilder","XCometVideoHomeCatalogControllerRouteBuilder","XCometVideoHomeGamingControllerRouteBuilder","XCometVideoHomeLatestControllerRouteBuilder","XCometVideoHomeLiveControllerRouteBuilder","XCometVideoHomeMusicControllerRouteBuilder","XCometVideoHomeSavedControllerRouteBuilder","XCometVideoHomeScheduledLiveControllerRouteBuilder","XCometVideoHomeSportsControllerRouteBuilder","XCometVideoHomeTopicControllerRouteBuilder","XCometWatchControllerRouteBuilder","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";d("react");a={EXPLORE:{icon:d("fbicon")._(i("485308"),20),iconColor:"gray",selectedIconColor:"grape",title:h._("Kh\u00e1m ph\u00e1"),url:c("XCometVideoHomeTopicControllerRouteBuilder").buildURL({})},GAMING:{icon:d("fbicon")._(i("834284"),20),iconColor:"gray",selectedIconColor:"blue",title:h._("Ch\u01a1i game"),url:c("XCometVideoHomeGamingControllerRouteBuilder").buildURL({})},HOME:{icon:d("fbicon")._(i("607169"),20),iconColor:"gray",selectedIconColor:"blue",title:h._("Trang ch\u1ee7"),url:c("XCometWatchControllerRouteBuilder").buildURL({})},LATEST:{icon:d("fbicon")._(i("484863"),20),iconColor:"seafoam",selectedIconColor:"seafoam",title:h._("Video m\u1edbi nh\u1ea5t"),url:c("XCometVideoHomeLatestControllerRouteBuilder").buildURL({})},LIVE:{icon:d("fbicon")._(i("480530"),20),iconColor:"gray",selectedIconColor:"red",title:h._("Tr\u1ef1c ti\u1ebfp"),url:c("XCometVideoHomeLiveControllerRouteBuilder").buildURL({ref:"watch"})},LIVE_GOLIVE:{icon:d("fbicon")._(i("480530"),20),iconColor:"gray",selectedIconColor:"red",title:h._("Ph\u00e1t tr\u1ef1c ti\u1ebfp"),url:c("XCometLiveProducerControllerRouteBuilder").buildURL({entry_point:"live_destination"})},LIVE_SCHEDULED:{icon:d("fbicon")._(i("481118"),20),iconColor:"gray",selectedIconColor:"red",title:h._("Video tr\u1ef1c ti\u1ebfp s\u1eafp t\u1edbi"),url:c("XCometVideoHomeScheduledLiveControllerRouteBuilder").buildURL({ref:"watch"})},MUSIC:{icon:d("fbicon")._(i("886194"),20),iconColor:"gray",selectedIconColor:"grape",title:h._("Nh\u1ea1c"),url:c("XCometVideoHomeMusicControllerRouteBuilder").buildURL({})},SAVED:{icon:d("fbicon")._(i("495598"),20),iconColor:"gray",selectedIconColor:"lemon",title:h._("Video \u0111\u00e3 l\u01b0u"),url:c("XCometVideoHomeSavedControllerRouteBuilder").buildURL({})},SHOWS:{icon:d("fbicon")._(i("639067"),20),iconColor:"gray",selectedIconColor:"teal",title:h._("Ch\u01b0\u01a1ng tr\u00ecnh"),url:c("XCometVideoHomeCatalogControllerRouteBuilder").buildURL({})},SPORTS:{icon:d("fbicon")._(i("572410"),20),iconColor:"gray",selectedIconColor:"blue",title:h._("Th\u1ec3 thao"),url:c("XCometVideoHomeSportsControllerRouteBuilder").buildURL({})},WATCHLIST_DROPDOWN:{icon:d("fbicon")._(i("484863"),20),iconColor:"gray",selectedIconColor:"blue",title:h._("Danh s\u00e1ch xem c\u1ee7a b\u1ea1n"),url:"#"}};g["default"]=a}),98);
__d("CometVideoHomeTopNavItemUtils",["CometRouteMatch","CometVideoHomeNavItemLoggingMap","CometVideoHomeNavItemMap","VideoHomeTypedLoggerLite","react"],(function(a,b,c,d,e,f,g){"use strict";d("react");function a(a,b){var e=c("CometVideoHomeNavItemMap")[a],f=e.title;e=e.url;var g=function(){b&&b(),c("VideoHomeTypedLoggerLite").log({click_point:"top_nav",event:"click",event_target:c("CometVideoHomeNavItemLoggingMap")[a]})},h=d("CometRouteMatch").useCurrentRouteMatcher(d("CometRouteMatch").MatchFunctions.pathMatchFunction),i=!1;e!=null&&(i=h(e));return{label:f,linkProps:{url:b?"#":e},onPress:g,selected:i}}g.getTopNavConfig=a}),98);
__d("CometVideoHomeWatchlistDialog.entrypoint",["CometVideoHomeLeftRailWatchlistQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{watchlistSettingsQueryReference:{parameters:b("CometVideoHomeLeftRailWatchlistQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometVideoHomeWatchlistDialog.react").__setRef("CometVideoHomeWatchlistDialog.entrypoint")};e=a;g["default"]=e}),98);
__d("CometVideoHomeTopNav.react",["fbt","CometAppNavigationTabBarContainer.react","CometLoggedOutCTAStrings","CometPivotLinkTabs.react","CometResponsiveTopNav.react","CometRouteRenderType","CometVideoHomeLOESearchBar.react","CometVideoHomeLiveTabExperiments","CometVideoHomeTopNavItemUtils","CometVideoHomeWatchlistDialog.entrypoint","CometWatchScopedTypeaheadDeferred.react","CometWatchScopedTypeaheadDialogTriggerDeferred.react","XCometWatchControllerRouteBuilder","gkx","qex","react","unrecoverableViolation","useCometEntryPointDialog","useCometLoggedOutPopupCTA"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=d("CometRouteRenderType").useIsPushView(),e=c("useCometLoggedOutPopupCTA")({title:c("CometLoggedOutCTAStrings").popupTitle}),f=[{enabled:!0,navItemType:"HOME"},{enabled:d("CometVideoHomeLiveTabExperiments").liveEnabled(),navItemType:"LIVE"},{enabled:c("gkx")("1616463"),navItemType:"MUSIC"},{enabled:c("gkx")("969822")||a.isLoggedOutUser===!0,navItemType:"SHOWS"},{enabled:!!c("qex")._("1074782"),navItemType:"SPORTS"},{enabled:c("gkx")("2292")||c("gkx")("2293"),navItemType:"EXPLORE"},{enabled:!0,navItemType:"SAVED"},{enabled:!0,navItemType:"WATCHLIST_DROPDOWN"}],g=c("useCometEntryPointDialog")(c("CometVideoHomeWatchlistDialog.entrypoint"),{}),j=g[0],k=[],l=c("gkx")("976093");f.map(function(a){if(a.enabled){var b=null;a.navItemType==="WATCHLIST_DROPDOWN"?b=function(){l?e():j({})}:a.navItemType==="SAVED"&&l&&(b=e);k.push(babelHelpers["extends"]({},d("CometVideoHomeTopNavItemUtils").getTopNavConfig(a.navItemType,b)))}});g=null;a.isSearchBoxExpanded===!0?g=i.jsx("div",{className:"o36gj0jk tmqn73lw",children:l?i.jsx(c("CometVideoHomeLOESearchBar.react"),{initialQuery:""}):i.jsx(c("CometWatchScopedTypeaheadDeferred.react"),{entryPointSurface:"VIDEO_HOME"})}):g=i.jsx(c("CometWatchScopedTypeaheadDialogTriggerDeferred.react"),{});if(g==null)throw c("unrecoverableViolation")("NPC top nav must be either an icon or search bar","watch_www_bug_rotation");f=c("XCometWatchControllerRouteBuilder").buildURL({});a=b;return i.jsxs(i.Fragment,{children:[a?i.jsx(c("CometAppNavigationTabBarContainer.react"),{}):null,i.jsx("div",{className:"linmgsc8 cddn0xzi osnr6wyh jktsbyx5",children:i.jsx(c("CometResponsiveTopNav.react"),{auxiliary:g,tabs:i.jsx(c("CometPivotLinkTabs.react"),{tabs:k}),title:h._("Watch"),titleURL:f})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeNewPermalinkConstans",[],(function(a,b,c,d,e,f,g){"use strict";a={heightInNewGrid:{maxHeight:"qy8nx24m",minHeight:"asz1e59d"},leftPaneInNewGrid:{maxWidth:"j7s1t5dt",minWidth:"bgqhc3kc"},rightPaneAdjustableWidth:{maxWidth:"qmfd67dx",minWidth:"nnvw5wor"},rightPaneInNewGrid:{maxWidth:"czr60mpb",minWidth:"obvrjdu0"}};b=a.heightInNewGrid;c=a.leftPaneInNewGrid;d=a.rightPaneAdjustableWidth;e=a.rightPaneInNewGrid;f=240;a=56;var h=56,i=740,j=540,k=-1;g.heightInNewGrid=b;g.leftPaneInNewGrid=c;g.rightPaneAdjustableWidth=d;g.rightPaneInNewGrid=e;g.BOTTOM_GAP_HEIGHT=f;g.FB_TOP_NAV_HEIGHT=a;g.WATCH_TOP_NAV_HEIGHT=h;g.MAX_UNIT_HEIGHT_IN_NEW_GRID=i;g.MIN_UNIT_HEIGHT_IN_NEW_GRID=j;g.FEED_UNIT_POSITION=k}),98);