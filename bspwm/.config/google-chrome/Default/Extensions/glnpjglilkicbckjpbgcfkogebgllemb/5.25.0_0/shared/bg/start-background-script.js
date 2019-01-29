Okta.startBackgroundScript=function(o,n,a,s){var u="CONTENT_SCRIPT",i="LAST_CHECK",e="INJECTION_COUNT",t="DBG_PLUGIN_SETTINGS",c=5,l=1e3,g=Okta.Q.when,p=Okta.fn.storage.unwrapVal,d=Okta.fn.storage.wrapVal,f=Okta.fn.base.timestamp,k=_okta.isNull,r=_okta.compose,y=_okta.isUndefined,T=Okta.Q,v=_okta.partial,S=Okta.fn.base.orDefault;function C(e){return"_lock_"+e}function b(e){n.set(C(e),null);return true}function h(e){var t=f(),r=C(e),o=n.get(r);if(!o||t>o.lockTime+l){n.set(r,{lockTime:t});return true}else{return false}}function m(e,t,r){switch(e){case"getSessionState":return n.get(r.key);case"setSessionState":return n.set(r.key,r.val);case"getPersistentState":return a.get(r.key);case"setPersistentState":return a.set(r.key,r.val);case"clearPersistentState":if(a.clear){r.result=a.clear()}else{r.result=true}r.browserType=o.getType();return r;case"getTabId":return t;case"getBrowserType":return o.getType();case"getBackgroundVersion":return o.getBackgroundVersion();case"unlockSessionKey":return b(r.key);case"lockSessionKey":return h(r.key);case"request":return s.ajax(r);case"openTab":return o.openTab(r.url);case"servePopover":return o.servePopover?o.servePopover():T({errorCode:"servePopover is not supported on "+o.getType()});case"openTabForAccountChooser":if(y(o.openTabForAccountChooser)){return T({errorCode:"not supported by this version of the plugin",url:r.url})}return o.openTabForAccountChooser(r.url);case"closeTab":return o.closeTab(t);case"getCookies":if(y(o.getCookies)){return T({errorCode:"not supported by this version of the plugin"})}return o.getCookies(r.key.hostUrl,r.key.cookieNames);case"getLocalStorageUsage":if(y(o.getLocalStorageUsage)){return T({errorCode:"not supported by this version of the plugin"})}return o.getLocalStorageUsage().fail(function(e){return T({errorCode:"failed to get the local storage usage: "+e})});case"updateBadge":if(y(o.updateBadge)){return T.resolve()}return o.updateBadge(r.key);case"downloadExtensionLogs":if(y(o.downloadExtensionLogs)){return T.resolve()}return o.downloadExtensionLogs(r.key);default:return T({errorCode:"Unknown msg type: "+e})}}var I=r(S(0),p,v(a.get,e));var _=r(v(a.set,e),d);var w=r(S(0),p,v(a.get,t));function O(){var e=w();return e&&e.useLocalJS}function L(e,t){if(o.getType()==="chrome"){if(e.frameId===0){_(t+1)}}else{_(t+1)}}o.on("injectReady",function(e){var t=p(a.get(u)),r=I();if(O()){o.injectScript(e,null);return}if(k(t)){_(0)}else if(r<c){L(e,r)}else{_(0);a.set(u,d(null));a.set(i,d(null));t=null}o.injectScript(e,t)});o.on("messageFromContent",function(t){var r=t.msg,e=m(r.type,t.tabId,r.data);g(e,function(e){o.post({msg:{id:r.id,data:e},tabId:t.tabId,portInfo:t.portInfo})}).done()})};