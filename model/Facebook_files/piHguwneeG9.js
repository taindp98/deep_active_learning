if (self.CavalryLogger) { CavalryLogger.start_js(["DYkKezh"]); }

__d("MarketplacePDPRightColumnAdsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5800075963395777",metadata:{},name:"MarketplacePDPRightColumnAdsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplacePDPContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4951050828255251",metadata:{},name:"MarketplacePDPContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplacePermalinkRoot.entrypoint",["JSResourceForInteraction","MarketplacePDPContainerQuery$Parameters","MarketplacePDPRightColumnAdsQuery$Parameters","ReactFlightGating.hybrid","WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e,f=a.passthroughProps;f=(f=f==null?void 0:f.trackingData)!=null?f:null;e={rootQueryReference:{parameters:c("MarketplacePDPContainerQuery$Parameters"),variables:{canViewCustomizedProfile:c("gkx")("1781610")||((e=c("qex")._("1874488"))!=null?e:!1),location_latitude:a.routeProps.location.latitude,location_longitude:a.routeProps.location.longitude,location_radius:a.routeProps.location.radius,location_vanity_page_id:a.routeProps.location.vanityPageId,pdpContext_isHoisted:!1,pdpContext_trackingData:f,prefetchPDPImage:c("gkx")("1940477"),referralCode:a.routeParams.referral_code,relay_enable_react_flight:c("ReactFlightGating.hybrid").isReactFlightEnabled(),scale:d("WebPixelRatio").get(),targetId:a.routeParams.listing_id}}};c("gkx")("1250838")&&(e=babelHelpers["extends"]({},e,{pdpAdsQueryReference:{parameters:b("MarketplacePDPRightColumnAdsQuery$Parameters"),variables:{adsRelatedTo:a.routeParams.listing_id,browseContext:"PDP_RELATED_ADS_FEED",count:1,cursor:""}}}));return{queries:e}},root:c("JSResourceForInteraction")("CometMarketplacePermalinkRoot.react").__setRef("MarketplacePermalinkRoot.entrypoint")};g["default"]=a}),98);