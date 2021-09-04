if (self.CavalryLogger) { CavalryLogger.start_js(["LGMyw4k"]); }

__d("useLiveProducerGameSearchTypeaheadBootstrapDataSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"SearchableGame",kind:"LinkedField",name:"searchable_games",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"unique_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"photo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"keyword",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useLiveProducerGameSearchTypeaheadBootstrapDataSourceQuery",selections:b,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useLiveProducerGameSearchTypeaheadBootstrapDataSourceQuery",selections:b},params:{id:"2807890689335606",metadata:{},name:"useLiveProducerGameSearchTypeaheadBootstrapDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useLiveProducerGameSearchTypeaheadNetworkDataSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"SearchableGame",kind:"LinkedField",name:"searchable_games",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"unique_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"photo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"keyword",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useLiveProducerGameSearchTypeaheadNetworkDataSourceQuery",selections:b,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useLiveProducerGameSearchTypeaheadNetworkDataSourceQuery",selections:b},params:{id:"3879686672114280",metadata:{},name:"useLiveProducerGameSearchTypeaheadNetworkDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("EventCometScopedTypeaheadViewItemResolver.react",["fbt","CometSearchTypeaheadBaseSurfaceRecentViewItem.react","CometTypeaheadEchoViewItem.react","CometTypeaheadKeywordViewItem.react","CometTypeaheadSeeAllViewItem.react","CometTypeaheadViewItemResolver.react","cometSearchTypeaheadEchoViewItem.resolver","cometSearchTypeaheadKeywordViewItem.resolver","cometSearchTypeaheadRecentViewItem.resolver","cometSearchTypeaheadSeeAllViewItem.resolver","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useMemo;function a(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);var d=j(function(){return k()},[]);return i.jsx(c("CometTypeaheadViewItemResolver.react"),babelHelpers["extends"]({},a,{entryMappings:d,children:b}))}a.displayName=a.name+" [from "+f.id+"]";function k(){return[{resolver:c("cometSearchTypeaheadEchoViewItem.resolver"),viewItem:c("CometTypeaheadEchoViewItem.react")},{resolver:c("cometSearchTypeaheadSeeAllViewItem.resolver"),viewItem:c("CometTypeaheadSeeAllViewItem.react"),viewItemProps:{placeholderBuilder:l}},{resolver:c("cometSearchTypeaheadRecentViewItem.resolver"),viewItem:c("CometSearchTypeaheadBaseSurfaceRecentViewItem.react")},{resolver:c("cometSearchTypeaheadKeywordViewItem.resolver"),viewItem:c("CometTypeaheadKeywordViewItem.react")}]}function l(a){return h._("T\u00ecm ki\u1ebfm s\u1ef1 ki\u1ec7n cho {=[query]}",[h._param("=[query]",i.jsx("strong",{children:h._("{query}",[h._param("query",a)])}))])}l.displayName=l.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometScopedTypeaheadViewItem.react",["EventCometScopedTypeaheadViewItemResolver.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.entry,d=babelHelpers.objectWithoutPropertiesLoose(a,["entry"]);return h.jsx(c("EventCometScopedTypeaheadViewItemResolver.react"),{entry:b,children:function(a,c){return h.jsx(a,babelHelpers["extends"]({},d,{entry:b,extraViewItemProps:c}))}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("eventCometScopedTypeahead.config",[],(function(a,b,c,d,e,f){"use strict";a={dataSources:{keywordDataSourceParams:{queryVariables:{fetch_count:8,fetch_mode:"events_dashboard_search"}}},logging:{sessionContext:"EVENT_SCOPED"},view:{renderLimit:8}};f["default"]=a}),66);
__d("EventCometDashboardScopedTypeahead.react",["CometErrorBoundary.react","CometSearchScopedTypeahead.react","CometSearchTypeaheadBaseViewRecentEmptyState.react","CometTypeaheadErrorFallback.react","EventCometDashboardConstants","EventCometScopedTypeaheadViewItem.react","eventCometScopedTypeahead.config","react","useCometSearchRecentDataSourceContextDecorator","useCometSearchRoutingQueryString","useCometSearchScopedTypeaheadDataSource","useCometSearchScopedTypeaheadPressEntryHandler","useCometSearchScopedTypeaheadSelectFreeformQueryHandler","useCometSearchTypeaheadLoggingProvider","useCometTypeaheadViewListStrategy","useEventCometSearchRouteUrlBuilder","useSearchCometRecentSearchDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState;function a(a){a=babelHelpers["extends"]({},a);a=c("useEventCometSearchRouteUrlBuilder")({entryPointSurface:a.entryPointSurface});var b=c("useCometSearchTypeaheadLoggingProvider")({context:"event_scoped"}),e=j(c("useCometSearchRoutingQueryString")()),f=e[0];e=e[1];var g=c("useCometSearchScopedTypeaheadDataSource")({config:c("eventCometScopedTypeahead.config"),recentDataSource:c("useSearchCometRecentSearchDataSource")({filter:"appmark_search"})}),k=c("useCometSearchRecentDataSourceContextDecorator")(g),l=i(function(){return[k]},[k]),m=c("useCometSearchScopedTypeaheadPressEntryHandler")({loggingProvider:b,urlBuilder:a});a=c("useCometSearchScopedTypeaheadSelectFreeformQueryHandler")({loggingProvider:b,urlBuilder:a});var n=c("useCometTypeaheadViewListStrategy")({emptyStateContent:h.jsx(c("CometSearchTypeaheadBaseViewRecentEmptyState.react"),{}),viewItemStrategyRenderer:c("EventCometScopedTypeaheadViewItem.react")});return h.jsx(c("CometErrorBoundary.react"),{fallback:function(){return h.jsx(c("CometTypeaheadErrorFallback.react"),{})},children:h.jsx(c("CometSearchScopedTypeahead.react"),{dataSource:g,decorators:l,label:d("EventCometDashboardConstants").SIDEBAR_SEARCH_LABEL,loggingProvider:b,onChange:e,onPressEntry:m,onSelectFreeformQuery:a,placeholder:d("EventCometDashboardConstants").SIDEBAR_SEARCH_LABEL,queryString:f,viewStrategyRenderer:n})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GamingCometArenaBracketOptions",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=[{label:h._("\u0110\u1ea5u lo\u1ea1i tr\u1ef1c ti\u1ebfp"),secondaryText:h._("Ng\u01b0\u1eddi ch\u01a1i\/\u0111\u1ed9i n\u00e0o thua 1 l\u1ea7n s\u1ebd b\u1ecb lo\u1ea1i kh\u1ecfi cu\u1ed9c thi."),value:"SINGLE_ELIMINATION"},{label:h._("Nh\u00e1nh th\u1eafng nh\u00e1nh thua"),secondaryText:h._("Ng\u01b0\u1eddi ch\u01a1i\/\u0111\u1ed9i n\u00e0o thua 2 l\u1ea7n s\u1ebd b\u1ecb lo\u1ea1i kh\u1ecfi cu\u1ed9c thi."),value:"DOUBLE_ELIMINATION"},{label:h._("\u0110\u1ea5u v\u00f2ng tr\u00f2n"),secondaryText:h._("T\u1ea5t c\u1ea3 ng\u01b0\u1eddi ch\u01a1i\/\u0111\u1ed9i s\u1ebd \u0111\u1ea5u v\u1edbi nhau."),value:"ROUND_ROBIN"},{label:h._("\u0110\u1ea5u t\u1ef1 do"),secondaryText:h._("C\u00e1c ng\u01b0\u1eddi ch\u01a1i\/\u0111\u1ed9i c\u00f3 th\u1ec3 \u0111\u1ea5u bao nhi\u00eau tr\u1eadn t\u00f9y th\u00edch. T\u1ed5ng \u0111i\u1ec3m cu\u1ed1i c\u00f9ng s\u1ebd quy\u1ebft \u0111\u1ecbnh ai l\u00e0 qu\u00e1n qu\u00e2n."),value:"FREE_FOR_ALL"}];g.bracketTypeOptions=a}),98);
__d("GamingCometArenaCreateEditPhaseConfig.react",["fbt","CometFormNumberStepper.react","CometFormSelect.react","GamingCometArenaBracketOptions","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=[1,2,4,8,16],k=function(a){return a==="SINGLE_ELIMINATION"||a==="DOUBLE_ELIMINATION"};function a(a){var b=a.bracket,e=a.disabled,f=a.extraInfo,g=a.onBracketChange;a=b.bracket;var l=function(a){var c=b.advancing_per_pool;k(a)&&(c=j.reduce(function(a,b){return Math.abs(a-c)<Math.abs(b-c)?a:b}));g(babelHelpers["extends"]({},b,{advancing_per_pool:c,bracket:a}))},m=function(a){g(babelHelpers["extends"]({},b,{pools:(a=a)!=null?a:b.pools}))},n=function(a){g(babelHelpers["extends"]({},b,{advancing_per_pool:(a=a)!=null?a:b.advancing_per_pool}))};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"f10w8fjw",children:i.jsx(c("CometFormSelect.react"),{disabled:e,label:h._("S\u01a1 \u0111\u1ed3 thi \u0111\u1ea5u"),onValueChange:l,options:d("GamingCometArenaBracketOptions").bracketTypeOptions,size:"full",value:a})}),f?i.jsxs("div",{children:[i.jsx("div",{className:"f10w8fjw",children:i.jsx(c("CometFormNumberStepper.react"),{disabled:e,label:h._("S\u1ed1 nh\u00f3m"),max:64,min:1,onValueChange:m,value:b.pools})}),i.jsx("div",{className:"f10w8fjw",children:k(a)?i.jsx(c("CometFormSelect.react"),{disabled:e,label:h._("Ng\u01b0\u1eddi ch\u01a1i \u0111i ti\u1ebfp \u1edf m\u1ed7i nh\u00f3m"),onValueChange:n,options:j.map(function(a){return{label:a.toString(),value:a}}),value:b.advancing_per_pool}):i.jsx(c("CometFormNumberStepper.react"),{disabled:e,label:h._("Ng\u01b0\u1eddi ch\u01a1i \u0111i ti\u1ebfp \u1edf m\u1ed7i nh\u00f3m"),max:128,min:1,onValueChange:n,value:b.advancing_per_pool})})]}):i.jsx("div",{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GamingCometArenaBracketsSettings.react",["fbt","ix","EventCometPressableText.react","GamingCometArenaCreateEditPhaseConfig.react","TetraButtonGroup.react","TetraText.react","fbicon","gkx","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("gkx")("1586906");function a(a){var b=a.brackets,e=a.disabled,f=a.error,g=a.onBracketsChange,l=b.length>1;a=function(){var a=b.slice();a.push({advancing_per_pool:1,bracket:"SINGLE_ELIMINATION",pools:1});g(a)};var m=function(){var a=b.map(function(a){return a});a.pop();a[a.length-1]=babelHelpers["extends"]({},a[a.length-1],{advancing_per_pool:1,pools:1});g(a)},n=function(a,c){var d=b.slice();d[a]=c;g(d)},o=function(){g([babelHelpers["extends"]({},b[0],{advancing_per_pool:1,pools:1})])};return j.jsxs("div",{className:"cbu4d94t j83agx80"+(f!=null?" scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 bi6gxh9e jcgfde61 afxsp9o4 ed0hlay0 frvqaej8 mk2mc5f4 s44p3ltw ccm00jje goun2846 a64ryyup ku5f423u hmw3o7ox jw3uvs1e":""),children:[j.jsx("div",{children:b.map(function(a,d){return j.jsxs("div",{children:[l&&(d===b.length-1?j.jsx("div",{className:"ihqw7lf3",children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:h._("Giai \u0111o\u1ea1n {stageNumber} (Giai \u0111o\u1ea1n cu\u1ed1i)",[h._param("stageNumber",d+1)])})}):j.jsx("div",{className:"ihqw7lf3",children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:h._("Giai \u0111o\u1ea1n {stageNumber}",[h._param("stageNumber",d+1)])})})),j.jsx(c("GamingCometArenaCreateEditPhaseConfig.react"),{bracket:a,disabled:e,extraInfo:d<b.length-1,onBracketChange:function(a){return n(d,a)}},d)]},d)})}),e!==!0&&l&&j.jsx("div",{className:"f10w8fjw kkf49tns cgat1ltu l6v480f0",children:j.jsx(c("TetraButtonGroup.react"),{align:"justify",direction:"backward",primary:{label:h._("Th\u00eam giai \u0111o\u1ea1n"),onPress:a,reduceEmphasis:!0},secondary:{label:h._("X\u00f3a giai \u0111o\u1ea1n"),onPress:m}})}),k&&j.jsx(c("EventCometPressableText.react"),{disabled:e,icon:l?d("fbicon")._(i("531489"),12):d("fbicon")._(i("483767"),12),iconColor:"highlight",onPress:l?o:a,text:l?h._("G\u1ee1 giai \u0111o\u1ea1n"):h._("Chuy\u1ec3n th\u00e0nh nhi\u1ec1u giai \u0111o\u1ea1n (beta)"),textColor:"highlight"}),f!=null?j.jsx("div",{className:"aov4n071 tvmbv18p",children:j.jsx(c("TetraText.react"),{color:"negative",type:"body4",children:f})}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LiveProducerTournamentSearchTypeaheadViewItem.react",["CometImageIcon_DEPRECATED.react","CometRow.react","CometRowItem.react","CometTypeaheadViewItem.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.entry,d=a.isActive;a.queryString;a=babelHelpers.objectWithoutPropertiesLoose(a,["entry","isActive","queryString"]);var e=b.getRawData(),f=e==null?void 0:e.photo;return h.jsx(c("CometTypeaheadViewItem.react"),babelHelpers["extends"]({},a,{entry:b,isActive:d,itemStartContent:h.jsx("div",{className:"thwo4zme stjgntxs ni8dbmo4 tv7at329 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 pgeiv1et",children:f!=null&&h.jsx(c("CometImageIcon_DEPRECATED.react"),{size:36,src:f,style:"square"})}),children:h.jsx(c("CometRow.react"),{paddingTop:0,children:h.jsx(c("CometRowItem.react"),{children:h.jsx(c("TetraText.react"),{numberOfLines:1,type:"body3",children:(a=e==null?void 0:e.title)!=null?a:""})})})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useLiveProducerGameSearchTypeaheadBootstrapDataSource",["CometTypeaheadDataEntry","useCometTypeaheadCompositeBootstrapDataSource","useLiveProducerGameSearchTypeaheadBootstrapDataSourceQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useLiveProducerGameSearchTypeaheadBootstrapDataSourceQuery.graphql");function a(){return c("useCometTypeaheadCompositeBootstrapDataSource")({gqlQuery:i,limit:10,normalize:j,queryVariables:{input:{filter_video_tags:!0,include_series:!1,query_only_instant_games:!1,value:null}}})}function j(a){a=a==null?void 0:a.searchable_games;return a==null?[]:a.map(function(a){var b=a==null?void 0:a.uid,d=a==null?void 0:a.unique_id,e=a==null?void 0:a.title,f=a==null?void 0:a.photo;a=a==null?void 0:a.keyword;return b==null||d==null||e==null?null:new(c("CometTypeaheadDataEntry"))({key:d,label:e,rawData:{keyword:a,photo:f,title:e,uid:b,unique_id:d}})}).filter(Boolean)}g["default"]=a}),98);
__d("useLiveProducerGameSearchTypeaheadNetworkDataSource",["CometTypeaheadDataEntry","useCometTypeaheadGraphQLDataSource","useLiveProducerGameSearchTypeaheadNetworkDataSourceQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useLiveProducerGameSearchTypeaheadNetworkDataSourceQuery.graphql");function a(){return c("useCometTypeaheadGraphQLDataSource")({gqlQuery:i,limit:8,normalize:j,queryVariablesBuilderFunction:function(a){a=a.query;return{input:{filter_video_tags:!0,include_series:!1,query_only_instant_games:!1,value:a}}}})}function j(a){a=a==null?void 0:a.searchable_games;return a==null?[]:a.map(function(a){var b=a==null?void 0:a.uid,d=a==null?void 0:a.unique_id,e=a==null?void 0:a.title,f=a==null?void 0:a.photo;a=a==null?void 0:a.keyword;return b==null||d==null||e==null?null:new(c("CometTypeaheadDataEntry"))({key:d,label:e,rawData:{keyword:a,photo:f,title:e,uid:b,unique_id:d}})}).filter(Boolean)}g["default"]=a}),98);
__d("GamingCometArenaGameTypeahead.react",["fbt","ix","BaseTypeahead.react","CometTypeaheadInputRoundedStrategy.react","CometTypeaheadLayoutContextualStrategy.react","CometTypeaheadViewEmptyState.react","LiveProducerTournamentSearchTypeaheadViewItem.react","TetraIcon.react","fbicon","react","stylex","useCometTypeaheadCompositeDataSource","useCometTypeaheadScrollableViewListStrategy","useLiveProducerGameSearchTypeaheadBootstrapDataSource","useLiveProducerGameSearchTypeaheadNetworkDataSource"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useEffect,l=b.useState,m={close:{marginStart:"h676nmdw"},container:{paddingEnd:"d1544ag0"},scrollableContainer:{height:"sgwjjusx"},typeaheadView:{paddingTop:"pybr56ya"}};function a(a){var b=a.disabled,e=a.onGameIDChange,f=a.onGameNameChange;a=a.selectedGameName;a=l((a=a)!=null?a:"");var g=a[0],n=a[1],o=c("useCometTypeaheadCompositeDataSource")({bootstrapDataSource:c("useLiveProducerGameSearchTypeaheadBootstrapDataSource")(),limit:10,networkDataSource:c("useLiveProducerGameSearchTypeaheadNetworkDataSource")()});k(function(){o.bootstrap()},[o]);a=function(){e(null),f(null),n("")};var p=function(a){var b;n((b=(b=a.getRawData())==null?void 0:b.title)!=null?b:"");e((b=a.getRawData())==null?void 0:b.unique_id);f((a=(b=a.getRawData())==null?void 0:b.title)!=null?a:"")},q=function(a){e(null);f(null);n((a=a)!=null?a:"")},r=c("useCometTypeaheadScrollableViewListStrategy")({nullstateContent:j.jsx(c("CometTypeaheadViewEmptyState.react"),{children:h._("Kh\u00f4ng c\u00f3 k\u1ebft qu\u1ea3 n\u00e0o \u0111\u1ec3 hi\u1ec3n th\u1ecb")}),scrollableXStyle:m.scrollableContainer,viewItemStrategyRenderer:c("LiveProducerTournamentSearchTypeaheadViewItem.react"),viewXStyle:m.typeaheadView});return j.jsx("div",{className:c("stylex")(m.container),children:j.jsx(c("BaseTypeahead.react"),{dataSource:o,inputEndContent:j.jsx("div",{className:c("stylex")(m.close),children:j.jsx(c("TetraIcon.react"),{"aria-label":h._("X\u00f3a game \u0111\u00e3 ch\u1ecdn"),color:"tertiary",disabled:b,icon:d("fbicon")._(i("478237"),16),onPress:a})}),inputStrategyRenderer:c("CometTypeaheadInputRoundedStrategy.react"),isDisabled:b,layoutStrategyRenderer:c("CometTypeaheadLayoutContextualStrategy.react"),onChange:q,onPressEntry:p,placeholder:h._("G\u1eafn th\u1ebb game"),queryString:g,shouldQueryStringUpdateFromSelectedEntryOnClick:!1,viewStrategyRenderer:r})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GamingCometArenaRegistrationOptions",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=[{label:h._("M\u1edf"),secondaryText:h._("Ai th\u1ea5y \u0111\u01b0\u1ee3c v\u00f2ng \u0111\u1ea5u th\u00ec c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd tham gia."),value:"OPEN"},{label:h._("Ch\u1ec9 qua li\u00ean k\u1ebft"),secondaryText:h._("Ch\u1ec9 ai c\u00f3 li\u00ean k\u1ebft th\u00ec m\u1edbi c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd tham gia v\u00f2ng \u0111\u1ea5u."),value:"LINK_ONLY"},{label:h._("\u0110\u00f3ng"),secondaryText:h._("S\u1ebd kh\u00f4ng ai c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd tham gia v\u00f2ng \u0111\u1ea5u n\u00e0y."),value:"CLOSED"},{label:h._("D\u00e0nh ri\u00eang cho ng\u01b0\u1eddi \u1ee7ng h\u1ed9"),secondaryText:h._("Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi \u1ee7ng h\u1ed9 m\u1edbi c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd tham gia v\u00f2ng \u0111\u1ea5u."),value:"SUPPORTER_ONLY"}];g.registrationTypeOptions=a}),98);
__d("FundraiserOnboardingApplicationInitializationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743641");c=b("FalcoLoggerInternal").create("fundraiser_onboarding_application_initialization",a);e.exports=c}),null);