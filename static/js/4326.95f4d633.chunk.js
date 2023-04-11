"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[4326],{4326:function(e,s,c){c.r(s),c.d(s,{default:function(){return o}});var a=c(8258),t=c(5319),l=c(7747),r=c(7107),n=c(184);function o(e){var s=e.displayInfo,c=void 0!==s&&s,o=e.displayMessage,i=void 0===o||o,d=e.displayRequiredFields,p=void 0!==d&&d,u=e.displayWide,f=void 0!==u&&u,m=e.showAnotherWayIfPresent,k=void 0===m||m,h=e.headerNode,C=e.showUsernameNode,v=void 0===C?null:C,g=e.infoNode,y=void 0===g?null:g,x=e.kcContext,j=e.i18n,b=e.doUseDefaultCss,N=e.classes,w=e.children,F=(0,r.v)({doUseDefaultCss:b,classes:N}).getClassName,A=j.msg,I=j.changeLocale,L=j.labelBySupportedLanguageTag,W=j.currentLanguageTag,S=x.realm,T=x.locale,H=x.auth,E=x.url,_=x.message,P=x.isAppInitiatedAction;return(0,l.M)({doFetchDefaultThemeResources:b,url:E,stylesCommon:["node_modules/patternfly/dist/css/patternfly.min.css","node_modules/patternfly/dist/css/patternfly-additions.min.css","lib/zocial/zocial.css"],styles:["css/login.css"],htmlClassName:F("kcHtmlClass"),bodyClassName:void 0}).isReady?(0,n.jsxs)("div",{className:F("kcLoginClass"),children:[(0,n.jsx)("div",{id:"kc-header",className:F("kcHeaderClass"),children:(0,n.jsx)("div",{id:"kc-header-wrapper",className:F("kcHeaderWrapperClass"),children:A("loginTitleHtml",S.displayNameHtml)})}),(0,n.jsxs)("div",{className:(0,t.W)(F("kcFormCardClass"),f&&F("kcFormCardAccountClass")),children:[(0,n.jsxs)("header",{className:F("kcFormHeaderClass"),children:[S.internationalizationEnabled&&((0,a.h)(void 0!==T),!0)&&T.supported.length>1&&(0,n.jsx)("div",{id:"kc-locale",children:(0,n.jsx)("div",{id:"kc-locale-wrapper",className:F("kcLocaleWrapperClass"),children:(0,n.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,n.jsx)("a",{href:"#",id:"kc-current-locale-link",children:L[W]}),(0,n.jsx)("ul",{children:T.supported.map((function(e){var s=e.languageTag;return(0,n.jsx)("li",{className:"kc-dropdown-item",children:(0,n.jsx)("a",{href:"#",onClick:function(){return I(s)},children:L[s]})},s)}))})]})})}),void 0===H||!H.showUsername||H.showResetCredentials?p?(0,n.jsxs)("div",{className:F("kcContentWrapperClass"),children:[(0,n.jsx)("div",{className:(0,t.W)(F("kcLabelWrapperClass"),"subtitle"),children:(0,n.jsxs)("span",{className:"subtitle",children:[(0,n.jsx)("span",{className:"required",children:"*"}),A("requiredFields")]})}),(0,n.jsx)("div",{className:"col-md-10",children:(0,n.jsx)("h1",{id:"kc-page-title",children:h})})]}):(0,n.jsx)("h1",{id:"kc-page-title",children:h}):p?(0,n.jsxs)("div",{className:F("kcContentWrapperClass"),children:[(0,n.jsx)("div",{className:(0,t.W)(F("kcLabelWrapperClass"),"subtitle"),children:(0,n.jsxs)("span",{className:"subtitle",children:[(0,n.jsx)("span",{className:"required",children:"*"})," ",A("requiredFields")]})}),(0,n.jsxs)("div",{className:"col-md-10",children:[v,(0,n.jsx)("div",{className:F("kcFormGroupClass"),children:(0,n.jsxs)("div",{id:"kc-username",children:[(0,n.jsx)("label",{id:"kc-attempted-username",children:null===H||void 0===H?void 0:H.attemptedUsername}),(0,n.jsx)("a",{id:"reset-login",href:E.loginRestartFlowUrl,children:(0,n.jsxs)("div",{className:"kc-login-tooltip",children:[(0,n.jsx)("i",{className:F("kcResetFlowIcon")}),(0,n.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}):(0,n.jsxs)(n.Fragment,{children:[v,(0,n.jsx)("div",{className:F("kcFormGroupClass"),children:(0,n.jsxs)("div",{id:"kc-username",children:[(0,n.jsx)("label",{id:"kc-attempted-username",children:null===H||void 0===H?void 0:H.attemptedUsername}),(0,n.jsx)("a",{id:"reset-login",href:E.loginRestartFlowUrl,children:(0,n.jsxs)("div",{className:"kc-login-tooltip",children:[(0,n.jsx)("i",{className:F("kcResetFlowIcon")}),(0,n.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}),(0,n.jsx)("div",{id:"kc-content",children:(0,n.jsxs)("div",{id:"kc-content-wrapper",children:[i&&void 0!==_&&("warning"!==_.type||!P)&&(0,n.jsxs)("div",{className:(0,t.W)("alert","alert-".concat(_.type)),children:["success"===_.type&&(0,n.jsx)("span",{className:F("kcFeedbackSuccessIcon")}),"warning"===_.type&&(0,n.jsx)("span",{className:F("kcFeedbackWarningIcon")}),"error"===_.type&&(0,n.jsx)("span",{className:F("kcFeedbackErrorIcon")}),"info"===_.type&&(0,n.jsx)("span",{className:F("kcFeedbackInfoIcon")}),(0,n.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:_.summary}})]}),w,void 0!==H&&H.showTryAnotherWayLink&&k&&(0,n.jsx)("form",{id:"kc-select-try-another-way-form",action:E.loginAction,method:"post",className:(0,t.W)(f&&F("kcContentWrapperClass")),children:(0,n.jsx)("div",{className:(0,t.W)(f&&[F("kcFormSocialAccountContentClass"),F("kcFormSocialAccountClass")]),children:(0,n.jsxs)("div",{className:F("kcFormGroupClass"),children:[(0,n.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,n.jsx)("a",{href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1},children:A("doTryAnotherWay")})]})})}),c&&(0,n.jsx)("div",{id:"kc-info",className:F("kcSignUpClass"),children:(0,n.jsx)("div",{id:"kc-info-wrapper",className:F("kcInfoAreaWrapperClass"),children:y})})]})})]})]}):null}},2889:function(e,s,c){c.d(s,{a:function(){return l}});var a=c(5319),t=c(969);function l(e){var s=e.defaultClasses;return{useGetClassName:function(e){var c=e.classes;return{getClassName:(0,t.O)((function(e){return(0,a.W)(e,s[e],null===c||void 0===c?void 0:c[e])}))}}}}},7747:function(e,s,c){c.d(s,{M:function(){return i}});var a=c(2982),t=c(885),l=c(2791),r=c(1630),n=c(6196),o=c(5319);function i(e){var s=e.doFetchDefaultThemeResources,c=e.stylesCommon,o=e.styles,i=e.url,p=e.scripts,u=e.htmlClassName,f=e.bodyClassName,m=(0,l.useReducer)((function(){return!0}),!s),k=(0,t.Z)(m,2),h=k[0],C=k[1];return(0,l.useEffect)((function(){if(s){var e=!1;return Promise.all([].concat((0,a.Z)((null!==c&&void 0!==c?c:[]).map((function(e){return(0,n.pathJoin)(i.resourcesCommonPath,e)}))),(0,a.Z)((null!==o&&void 0!==o?o:[]).map((function(e){return(0,n.pathJoin)(i.resourcesPath,e)})))).reverse().map((function(e){return(0,r.t)({type:"css",href:e,position:"prepend"})}))).then((function(){e||C()})),(null!==p&&void 0!==p?p:[]).forEach((function(e){return(0,r.t)({type:"javascript",src:(0,n.pathJoin)(i.resourcesPath,e)})})),function(){e=!0}}}),[]),d({target:"html",className:u}),d({target:"body",className:f}),{isReady:h}}function d(e){var s=e.target,c=e.className;(0,l.useEffect)((function(){if(void 0!==c){var e=document.getElementsByTagName(s)[0].classList,t=(0,o.W)(c).split(" ");return e.add.apply(e,(0,a.Z)(t)),function(){e.remove.apply(e,(0,a.Z)(t))}}}),[c])}},7107:function(e,s,c){c.d(s,{v:function(){return a}});var a=(0,c(2889).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},8258:function(e,s,c){c.d(s,{h:function(){return a.h}});var a=c(9883)},5319:function(e,s,c){c.d(s,{W:function(){return l}});var a=c(2982),t=c(9883);var l=function e(){for(var s=arguments.length,c=0,l="";c<s;c++){var r=c<0||arguments.length<=c?void 0:arguments[c];if(null!=r){var n=void 0;switch(typeof r){case"boolean":break;case"object":if(Array.isArray(r))n=e.apply(void 0,(0,a.Z)(r));else for(var o in(0,t.h)(!!1),n="",r)r[o]&&o&&(n&&(n+=" "),n+=o);break;default:n=r}n&&(l&&(l+=" "),l+=n)}}return l}},1630:function(e,s,c){c.d(s,{t:function(){return t}});c(4943);var a=c(3172);function t(e){var s=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),c=new a.Deferred;return s.addEventListener("load",(function(){return c.resolve()})),Object.assign(s,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](s),c.pr}}}]);
//# sourceMappingURL=4326.95f4d633.chunk.js.map