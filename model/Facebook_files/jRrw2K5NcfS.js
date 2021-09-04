if (self.CavalryLogger) { CavalryLogger.start_js(["PJn51iR"]); }

__d("MWChatVideoPlayerControls.react",["VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerFullscreenControl.react","VideoPlayerHooks","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubber.react","VideoPlayerVolumeControl.react","react","useVideoPlayerBigPlayButtonOverlay","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){return h.jsx("span",{className:"fi2e5rcv jk2qo03r",children:a.children})}i.displayName=i.name+" [from "+f.id+"]";function a(a){var b=c("useVideoPlayerDefaultControlsVisibility")(),e=b.isControlsVisible;b=b.onUserInteraction;var f=d("VideoPlayerHooks").usePaused();f=c("useVideoPlayerBigPlayButtonOverlay")({forceVisible:f});var g=f.bigPlayButtonElement;f=f.bigPlayButtonIsVisible;var j=d("VideoPlayerHooks").useIsFullscreen();e=e&&!f;f=h.jsx(c("VideoPlayerControlsContainerOverlay.react"),{isVisible:e,children:j?h.jsxs(h.Fragment,{children:[h.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{children:[h.jsx(c("VideoPlayerPlaybackControl.react"),{}),h.jsx(c("VideoPlayerPlaybackTimer.react"),{})]}),h.jsx(d("VideoPlayerControlsGroups.react").Expanded,{children:h.jsx(c("VideoPlayerScrubber.react"),{onUserInteraction:b})}),h.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{children:[h.jsx(c("VideoPlayerFullscreenControl.react"),{onUserInteraction:b}),h.jsx(c("VideoPlayerVolumeControl.react"),{onUserInteraction:b})]})]}):h.jsxs(h.Fragment,{children:[h.jsx(d("VideoPlayerControlsGroups.react").Contracted,{children:h.jsx(i,{children:h.jsx(c("VideoPlayerPlaybackControl.react"),{})})}),h.jsx(d("VideoPlayerControlsGroups.react").Expanded,{children:h.jsx(c("VideoPlayerScrubber.react"),{onUserInteraction:b})}),h.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{children:[a.hideExpandButton?null:h.jsx(i,{children:h.jsx(c("VideoPlayerFullscreenControl.react"),{onUserInteraction:b})}),h.jsx(i,{children:h.jsx(c("VideoPlayerVolumeControl.react"),{onUserInteraction:b})})]})]})});return h.jsxs(h.Fragment,{children:[g,f]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerX.react",["VideoPlayerRetryableErrorBoundary.react","VideoPlayerXImpl.react","defaultErrorBoundaryFallback","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;b=b===void 0?!1:b;var d=a.errorBoundaryFallback;a=babelHelpers.objectWithoutPropertiesLoose(a,["doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn","errorBoundaryFallback"]);a=h.jsx(c("VideoPlayerXImpl.react"),babelHelpers["extends"]({VideoPlayerShakaPerformanceLoggerClass:null},a));return b?a:h.jsx(c("VideoPlayerRetryableErrorBoundary.react"),{description:"VideoPlayerX",fallback:(b=d)!=null?b:c("defaultErrorBoundaryFallback"),children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatVideoPlayer.react",["GraphQLVideoAutoplayGatingResult","MWChatVideoAutoplaySettingContext","MWChatVideoPlayerControls.react","VideoPlayerDefaultControls.react","VideoPlayerProgressiveImplementationData","VideoPlayerProgressiveImplementationV2.react","VideoPlayerSurface.react","VideoPlayerX.react","getVideoPlayerAutoplayProps","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=function(a,b){switch(a){case"mwchat":return h.jsx(c("MWChatVideoPlayerControls.react"),{hideExpandButton:b===!0});case"default":return h.jsx(c("VideoPlayerDefaultControls.react"),{});case"none":return null;default:return null}};function a(a){var b=a.autoPlaySetting,e=a.controls,f=a.fbid,g=a.hdSrc,j=a.hideExpandButton,k=a.initialForceHD,l=a.originalHeight,m=a.originalWidth;a=a.sdSrc;k=d("VideoPlayerProgressiveImplementationData").makeProgressiveImplementationData({hdSrc:g,hdSrcPreferred:(g=k)!=null?g:!1,isExternalMedia:!1,sdSrc:a});g=d("MWChatVideoAutoplaySettingContext").useMWChatVideoAutoplaySetting();if(k==null)return null;a=[{Component:c("VideoPlayerProgressiveImplementationV2.react"),data:k,typename:"VideoPlayerProgressiveImplementation"}];k=c("getVideoPlayerAutoplayProps")(d("GraphQLVideoAutoplayGatingResult").makeGraphQLVideoAutoplayGatingResult("unknown",b!=null?b:g,!0),"respect_user_settings",null);return h.createElement(c("VideoPlayerX.react"),babelHelpers["extends"]({},k,{implementations:a,key:f,loopCount:-1,originalHeight:l,originalWidth:m,playerOriginOverride:"messaging",portalingEnabled:!1,subOrigin:"messenger_thread",videoFBID:f}),h.jsx(c("VideoPlayerSurface.react"),{children:i(e,j)}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);