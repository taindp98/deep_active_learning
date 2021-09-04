if (self.CavalryLogger) { CavalryLogger.start_js(["m2h3E8I"]); }

__d("useEventsRSVPPrivacyToast_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventsRSVPPrivacyToast_scope",selections:[{args:null,kind:"FragmentSpread",name:"useEventsRSVPPrivacyToast_toastScope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useEventsRSVPPrivacyToast_toastScope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useEventsRSVPPrivacyToast_toastScope",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useEventsRSVPPrivacyToast",["fbt","CometRelay","TetraIcon.react","TetraText.react","cometPushToast","gkx","react","useCometPrivacyIcon","useCometPrivacySelectorDialog","useCurrentDisplayMode","useEventsRSVPPrivacyToast_scope.graphql","useEventsRSVPPrivacyToast_toastScope.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useEffect,m=e.useRef,n=e.useState;function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useEventsRSVPPrivacyToast_scope.graphql"),a);var e=m(!1),f=n(!1),g=f[0],h=f[1];f=function(a){e.current=!0,h(a.withAction)};return a==null||!c("gkx")("1106435")?[null,f]:[k.jsx(o,{hasAction:g,isVisibleRef:e,scope:a}),f]}function o(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("useEventsRSVPPrivacyToast_toastScope.graphql"),a.scope),f=c("useCometPrivacySelectorDialog")(e,{renderLocation:"COMET_EVENTS_RSVP"}),g=f[0],i=d("useCometPrivacyIcon").useCometPrivacyIconForMenuItem(e.icon_image),m=a.hasAction,n=a.isVisibleRef;f=c("useCurrentDisplayMode")();var o=f==="dark";l(function(){n.current===!0&&(d("cometPushToast").cometPushToast({action:m?{label:k.jsx(c("TetraText.react"),{color:"white",type:"body3",children:k.jsx("span",{className:"btwxx1t3 j83agx80 gs1a9yip",children:h._("Thay \u0111\u1ed5i")})}),onPress:function(){g&&g()}}:void 0,message:k.jsx(c("TetraText.react"),{type:"body3",children:k.jsx("span",{className:"btwxx1t3 j83agx80 gs1a9yip",children:h._("C\u00e2u tr\u1ea3 l\u1eddi c\u1ee7a b\u1ea1n s\u1ebd hi\u1ec3n th\u1ecb v\u1edbi ng\u01b0\u1eddi t\u1ed5 ch\u1ee9c v\u00e0 {privacy_group}",[h._param("privacy_group",k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"h676nmdw cgat1ltu",children:i!=null?k.jsx(c("TetraIcon.react"),{color:o?"black":"white",icon:i}):null}),e.label]}))])})}),testid:"event-privacy-toast"}),n.current=!1)},[m,i,o,n,n.current,e,g]);return null}g["default"]=a}),98);
__d("OnlineEventSetupType",[],(function(a,b,c,d,e,f){a=Object.freeze({MESSENGER_ROOM:"messenger_room",THIRD_PARTY:"third_party",FB_LIVE:"fb_live",OTHER:"other",NONE:"none"});f["default"]=a}),66);