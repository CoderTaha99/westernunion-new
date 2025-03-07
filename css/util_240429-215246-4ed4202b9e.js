//This config comes from server
const thirdPartyConfig = JSON.parse(window.thirdPartyConfigContent);
const threeDSConfig = JSON.parse(window._3DSConfig);
// Amplitude
var analyticsObject = {};
(function (e, t) {
  var n = e.amplitude || { _q: [], _iq: {} };
  function s(e, t) {
    e.prototype[t] = function () {
      _q.push([t].concat(Array.prototype.slice.call(arguments, 0))); return this
    }
  }
  var o = function () { _q = []; return this }
    ; var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"]
    ; for (var u = 0; u < a.length; u++) { s(o, a[u]) } n.Identify = o; var c = function () {
      _q = []
        ; return this
    }
    ; var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"]
    ; for (var p = 0; p < l.length; p++) { s(c, l[p]) } n.Revenue = c
    ; var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp", "logEventWithGroups", "setSessionId", "resetSessionId"]
    ; function v(e) {
      function t(t) {
        e[t] = function () {
          e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
        }
      }
      for (var n = 0; n < d.length; n++) { t(d[n]) }
    } v(n); n.getInstance = function (e) {
      e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase()
        ; if (!n._iq.hasOwnProperty(e)) { n._iq[e] = { _q: [] }; v(n._iq[e]) } return n._iq[e]
    }
    ; e.amplitude = n
})

// SD
var SDConf = {
  "senderDirect": {
    "senderCountries": ["US", "FR", "IT", "DE", "GB", "AU", "CA", "SE", "ES", "BE", "RU", "NL", "NO"],
    "corridors": ["IN", "PH", "US", "PK", "TR", "TH", "MX", "NG", "CO", "MA", "ID", "CN", "FR", "GB", "JM", "LK", "RU", "BD", "CA", "DE", "ES", "KE", "RO", "VN", "SN", "SV", "UA", "YU"]
  },
  "receiverAssist": {
    "senderCountries": ["US", "FR", "IT", "DE", "GB", "AU", "CA", "SE", "ES", "BE", "NL", "NO"],
    "corridors": ["IN", "PH", "US", "PK", "TR", "TH", "MX", "NG", "CO", "MA", "ID", "CN", "FR", "GB", "JM", "LK", "BD", "CA", "DE", "ES", "KE", "RO", "VN", "SN", "SV", "UA", "YU"]
  },
  "localCurr": {
    "corridors": ["PH", "TR", "CN"]
  }
};

/**
 * Add all countries to this array if you want to enable One Trust to countries.
 * This can be converted into complex object if we want to have seperate features for
 *  - GDPR countries
 *  - CCPA countries
 * This should only be a single SOT for all One trust related configuration.
 * Expand this into complex object if required.
 * @constant
 */
//const enableOneTrustInCountries = ['CA'];
const enableOneTrustInCountries = thirdPartyConfig.OneTrust.enabledCountries;

// Auto login
//sessionStorage.setItem("loginExt", "true");
//sessionStorage.setItem("enableReceiver","true");
// Chat bot
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = 1;

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  var fScript = document.getElementsByTagName("script")[0];
  fScript.parentNode.insertBefore(script, fScript);
}

var pageurl = window.location.href;
console.log(pageurl);
var botalias;
var domainURL;
if ((pageurl.indexOf('westernunion.com') > 0 || pageurl.indexOf('westernunion.ru') > 0) && pageurl.indexOf('-uat') === -1 && pageurl.indexOf('-dev') === -1 && pageurl.indexOf('-qa') === -1 && pageurl.indexOf('ruwudispatcheruat') === -1 && (pageurl.indexOf('www') > 0 || pageurl.indexOf('wudispatcherrs') || pageurl.indexOf('wudispatcherci'))) {
  botalias = 'prod';
  domainURL = 'www.westernunion.com';
} else {
  botalias = 'qa';
  domainURL = 'wubotdev-origin.westernunion.com';
}

var loader = null;
var chatbotUiConfig = null;
var loadedFresh = "true";

/*
window.addEventListener('load', function ()  {
  //insertScripts();
  loadScript('https://' + domainURL + '/wubot/lex-web-ui-loader.m.js', function () {
    var currentUrlHost = window.location.protocol + "//" + window.location.host;
    var loaderOpts = {
      baseUrl: 'https://' + domainURL + '/'
    };
    loader = new ChatBotUiLoader.IframeLoader(loaderOpts);

    var chatBotWindowActiveFlag = sessionStorage.getItem('chatBotWindowActive');
    chatbotUiConfig;

    if (chatBotWindowActiveFlag === undefined || chatBotWindowActiveFlag === null || chatBotWindowActiveFlag === '') {
      chatbotUiConfig = {
        lex: {
          botName: "WU_Virtualassistant",
          botAlias: botalias,
          initialText: "Hi! I am the WU Assistant to help you with general questions so please do not share any personal information.",
          initialSpeechInstruction: "Say 'Help' to get started.",
          reInitSessionAttributesOnRestart: false,
          region: "us-east-1"
        },
        ui: {
          parentOrigin: currentUrlHost
        },
        iframe: {
          iframeOrigin: "https://" + domainURL
        }
      }
    } else {
      chatbotUiConfig = {
        lex: {
          botName: "WU_Virtualassistant",
          botAlias: botalias,
          initialSpeechInstruction: "Say 'Help' to get started.",
          reInitSessionAttributesOnRestart: false,
          region: "us-east-1"
        },
        ui: {
          parentOrigin: currentUrlHost
        },
        iframe: {
          iframeOrigin: "https://" + domainURL
        }
      }
    }

    var chatBotWindowActiveFlag = sessionStorage.getItem('chatBotWindowActive');

    if (chatBotWindowActiveFlag && chatBotWindowActiveFlag == "true") {
      loader.load(chatbotUiConfig).then(function () {
        $(".chat-loading-container").css('display', 'none');
        $("#prime").css('display', 'none');
        loadedFresh = "false";
      }).catch(function (e) { console.error('Chat bot error 1:' + e.message); });
    }

  });

  setupMicroappsCallback();
});


function closeChatIcon() {
 // $("#chat_svg").css('display', 'none');
}

function openSpinnerContainer() {
 // $(".chat-loading-container").css('display', 'block');
}


function openChat() {
  var chatBotPingTrigger = sessionStorage.getItem('chatBotPing');
  closeChatIcon();
  openSpinnerContainer();
  $("#prime").css('background', 'black');
  if (chatBotPingTrigger && chatBotPingTrigger == "true" && loadedFresh == "false") {
    $("#prime").css('display', 'none');
    $(".chat-loading-container").css('display', 'none');
    sessionStorage.setItem("chatBotWindowActive", "true");
    loader.api.closeIFrameUi().then(function () {
      return loader.api.postText('ping');
    }).catch(function (e) { console.error('Chat bot error 2:' + e.message); });
  } else {
    loader.load(chatbotUiConfig).then(function () {
      $(".chat-loading-container").css('display', 'none');
      $("#prime").css('display', 'none');
      if ($(".lex-web-ui-iframe--show").css('display') == 'flex') {
        sessionStorage.setItem("chatBotWindowActive", "true");
      } else if ($(".lex-web-ui-iframe").css('display') == 'none') {
        sessionStorage.setItem("chatBotWindowActive", "false");
      }
      loadedFresh = "false";
      if (chatBotPingTrigger !== "true") {
        sessionStorage.setItem("chatBotPing", "true");
        return loader.api.postText('ping');
      }
    }).catch(function (e) { console.error('Chat bot error 3:' + e.message); });
  }
}

$(document).on('lexWebUiClosed', function onUpdateLexState(evt) {
  $("#prime").css('display', 'block');
  $(".chat-loading-container").css('display', 'none');
  $("#prime").css('background', '#FFDA1A');
  $("#chat_svg").css('display', 'block');
  sessionStorage.setItem("chatBotWindowActive", "false");
});
*/

/***************************************************************************************************/
/** THIRD PARTY SCRIPTS LOAD */
/***************************************************************************************************/
// console.log('process.env ',process.env.ENV )
// var isProd = (
//   (pageurl.indexOf('westernunion.com') > 0 || pageurl.indexOf('westernunion.ru') > 0) &&
//   pageurl.indexOf('-uat') === -1 &&
//   pageurl.indexOf('-dev') === -1 &&
//   pageurl.indexOf('-qa') === -1 &&
//   // pageurl.indexOf('www2') === -1 &&
//   pageurl.indexOf('www3') === -1 &&
//   (pageurl.indexOf('www2') > 0 || pageurl.indexOf('www') > 0 || pageurl.indexOf('wudispatcherrs') || pageurl.indexOf('wudispatcherci') || pageurl.indexOf('partners.westernunion.com') || pageurl.indexOf('partners-westernunion.com'))
// );
var isProd = window.ENV === "prod" ? true : false
//includeHtml('/content/wucom/outage-banner/outage-banner.html');
if (!isProd) {
  //includeHtml('/content/wucom/test-environment-banner/banner-message.html');
}

var urlParams = getUrlParams();

var countryIsoCode = "";
if (pageurl.includes("/global-services/")) {
  countryIsoCode = urlParams['WUCountry'] ?? "US";
} else {
  if (pageurl.indexOf("partner") > -1) {
    countryIsoCode = pageurl.split('/')[4];
  } else if (pageurl.indexOf("ntxnl") > -1) {
    countryIsoCode = pageurl.split('/')[4];
  } else {
    countryIsoCode = pageurl.split('/')[3];
  }
}

//bug fix
var disableAnalytics = false;
if (urlParams['disableAnalytics'] && urlParams['disableAnalytics'].toString() == 'true') {
  disableAnalytics = true;
}

var cookieOptIn = getCookie('cookieOptIn');
var userConsent = getCookie('userCookieOptIn');
if (!userConsent && isOneTrustEnabled()) {
  userConsent = ',C0001';
}

function getUrlParams() {
  let urlParamsString = window.location.search;
  const output = {};
  if (urlParamsString) {
    urlParamsString = urlParamsString.substring(1);
    const params = urlParamsString.split('&');
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      const key = param.split('=')[0];
      const value = param.split('=')[1];
      output[key] = value;
    }
  }
  return output;
}

// function isGDPRCountry() {
//   return 'AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,HU,IS,IE,IT,LV,LI,LT,LU,MT,NL,NO,PL,PT,RO,SK,SI,ES,SE,GB'.indexOf(countryIsoCode.toUpperCase()) > -1;
// }

//C0001 - Strictly

function isC0002Accepted() {    //Performance
  return isOneTrustEnabled() ? (!userConsent || userConsent.indexOf('C0002') > -1) : true;
}

function isC0003Accepted() {    //Functional
  return isOneTrustEnabled() ? (!userConsent || userConsent.indexOf('C0003') > -1) : true;
}

function isC0004Accepted() {  //Targeting/Marketing
  return isOneTrustEnabled() ? (!userConsent || userConsent.indexOf('C0004') > -1) : true;
}

function insertScripts() {
  // will inlude all necessary scripts
  scriptsToLoad = {
    adobeLaunch: {
      url: getLaunchScript(),
      defer: !0,
      async: !0,
      //enable: Strictly
      callback: function adobeLaunchCallback(param) {
        // console.log('Loaded Adobe');
        // console.log(Date.now());
        param = null;
        const e = param ? param : window;
        // console.log('satellite' + window._satellite);
        // console.log(window._satellite);
        if (typeof window._satellite != "undefined" && window.firstAnalyticsObject) {
          sessionStorage.setItem("analyticsObject", JSON.stringify(window.firstAnalyticsObject));
          //console.log(window.firstAnalyticsObject);
          window.analyticsObject = { ...window.firstAnalyticsObject };
          // window._satellite.track('genericdirectcall-rp');
          window.firstAnalyticsObject = null;
        }
      }
    },
    // amplitude: {
    //   url: 'https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js',
    //   defer: !1,
    //   async: !0,
    //   enable: isC0002Accepted(),
    //   callback: function ampCallback(param) {
    //     param = null;
    //     const e = param ? param : window;
    //     console.log('ampliturerer' + window.amplitude);
    //     if (e.amplitude.runQueuedFunctions) {
    //       e.amplitude.runQueuedFunctions();
    //       amplitude.getInstance().init(getAmpKey(), null, { includeUtm: true, includeReferrer: true, saveParamsReferrerOncePerSession: false });
    //     } else {
    //       console.log('[Amplitude] Error: could not load SDK');
    //     }
    //   }
    // },
    evergage: {
      url: getEvgUrl(),
      head: !0,
      beforeLoad: !0,
      defer: !0,
      async: !0,
      //enable: Strictly
    },
    quantum: {
      url: getQuantumUrl(),
      defer: !0,
      async: !0,
      enable: isC0002Accepted()
    },
    audioEye: {
      url: 'https://ws.audioeye.com/ae.js',
      defer: !0,
      async: !0,
      enable: isAEEnabled(),
      countryList: ['US', 'CA']
    },
    songbirdScript: {
      url: getSongBirdUrl(),
      defer: !0,
      async: !0,
      callback: function songBirdCallback() {
        const Cardinal = window['Cardinal'];
        Cardinal && Cardinal.configure(threeDSConfig.cardinalConfig);
      }
    },
    efrOcrConfig: {
      url: getEfrUrl("efrOcrConfig"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    efrOcrTask: {
      url: getEfrUrl("efrOcrTask"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    efrOcrTfTflite: {
      url: getEfrUrl("efrOcrTfTflite"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    efrOcrSdk: {
      url: getEfrUrl("efrOcrSdk"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    efrPurelive: {
      url: getEfrUrl("efrPurelive"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    efrJsEncrypt: {
      url: getEfrUrl("efrJsEncrypt"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    efrSdk: {
      url: getEfrUrl("efrSdk"),
      defer: !0,
      async: 0,
      enable: isEfrEnabled()
    },
    // wuAdaManifest: {
    //   url: '/etc/clientlibs/westernunion/optimus/vendors/wu-ada-utils/wu-ada-utils-manifest.js',
    //   callback: loadAdaUtils
    // },
    khipu: {
      url: 'https://js.khipu.com/v1/kws.js',
     defer: !0,
     async: 0,
     enable: isKhipuEnabled()
   },
  };

  loadScripts();
  initMParticle();
  //if (isC0002Accepted()) { initMParticle() };
}

function getEfrUrl(module) {
  var url = "";
  var partialPath = "";
  if (typeof window !== undefined && window && window.location && window.location.origin) {
    switch (module) {
      case "efrOcrConfig":
        partialPath = "/exp-static-assets/vendor/config.js";
        break;
      case "efrOcrTask":
        partialPath = "/exp-static-assets/vendor/tasks.js";
        break;
      case "efrOcrTfTflite":
        partialPath = "/exp-static-assets/vendor/tf-tflite.min.js";
        break;
      case "efrOcrSdk":
        partialPath = "/exp-static-assets/vendor/OCRSDK_1.4.9.js";
        break;
      case "efrPurelive":
        partialPath = "/exp-static-assets/vendor/plugin/purelive.js";
        break;
      case "efrJsEncrypt":
        partialPath = "/exp-static-assets/vendor/plugin/jsencrypt.min.js";
        break;
      case "efrSdk":
        partialPath = "/exp-static-assets/vendor/plugin/EfrSDK_1.4.2.js";
        break;
      default:
    }
    url = window.location.origin + partialPath;
  }
  return url;
}

function isEfrEnabled() {
  return ((countryIsoCode && countryIsoCode.toUpperCase() === "AE") || (getCookie("CountryCode") && getCookie("CountryCode").toUpperCase() === "AE") || (window && window.COUNTRY_CODE && window.COUNTRY_CODE.toUpperCase() === "AE"));
}

function isKhipuEnabled() {
  return ((countryIsoCode && countryIsoCode.toUpperCase() === "CL") || (getCookie("CountryCode") && getCookie("CountryCode").toUpperCase() === "CL") || (window && window.COUNTRY_CODE && window.COUNTRY_CODE.toUpperCase() === "CL"));
}

function loadAdaUtils() {
  if (typeof adaVersionObj != 'undefined') {
    var element = document.createElement('script');
    element.type = "text/javascript";
    element.src = '/etc/clientlibs/westernunion/optimus/vendors/wu-ada-utils/' + adaVersionObj["wu-ada-utils.min.js"];
    document.head.appendChild(element);
  }
}

function isQAorLowerEnv() {
  return pageurl.indexOf('-dev') > -1 || pageurl.indexOf('-qa') > -1 || pageurl.indexOf('localhost') > -1;
}

function isOneTrustEnabled() {
  if (isQAorLowerEnv()) return false;// Enabled only in UAT and prod environments
  return countryIsoCode && enableOneTrustInCountries.indexOf(countryIsoCode.toUpperCase()) > -1;
  //return true;
}

function getLaunchScript() {
  const scripts = {
    'prod': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-4547d5af58c0.min.js',
    'uat': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-4a7eea5dcc1a-staging.min.js',
    'www3': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-4a7eea5dcc1a-staging.min.js',//www3 is uat
    'www2': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-4a7eea5dcc1a-staging.min.js',//www2 is STG
    'stage': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-4a7eea5dcc1a-staging.min.js',
    'qa': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-1dfd0aba665e-development.min.js',
    'dev': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-1dfd0aba665e-development.min.js',
    'localhost': 'https://assets.adobedtm.com/a2f2368b1fb5/b3c9e57b2e56/launch-1dfd0aba665e-development.min.js'
  };
  const env = getEnv(scripts);
  return scripts[env];
}

function getEvgUrl() {
  const env = isProd ? 'prod' : 'uat';
  var evergageDSCountryCode = countryIsoCode.toLowerCase() === 'gb' ? 'uk' : countryIsoCode.toLowerCase();
  return 'https://cdn.evergage.com/beacon/westernunion/' + evergageDSCountryCode + '_' + env + '_web_responsive/scripts/evergage.min.js';
}

function getQuantumUrl() {
  if (isProd) {
    return 'http://localhost/westernunion/css/quantum-wu.js'
  }
  return 'http://localhost/westernunion/css/quantum-wutest.js';
}

function getSongBirdUrl(){
   if(isProd) {
     return 'https://songbird.cardinalcommerce.com/edge/v1/songbird.js';
   }
   return 'https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js';
}

function getEnv(envs, def) {
  if (!def) {
    def = null;
  }
  for (let key in envs) {
    if (key !== 'prod' && pageurl.indexOf(key) > -1) {
      return key;
    }
  }
  return def ? def : 'prod';
}

function isAEEnabled() {
  return countryIsoCode && thirdPartyConfig.AudioEye.enabledCountries.indexOf(countryIsoCode.toUpperCase()) > -1;
}

function loadScripts() {
  for (let key in scriptsToLoad) {
    if (scriptsToLoad.hasOwnProperty(key)) {
      loadJS(scriptsToLoad[key]);
    }
  }
}

function loadJS(src) {
  if (src.enable === false) {
    return;
  }

  const scriptLink = document.createElement('link');
  scriptLink.rel = 'preconnect';
  scriptLink.href = src.url;
  document.getElementsByTagName('body')[0].appendChild(scriptLink);

  const scriptElement = document.createElement('script');
  scriptElement.type = src.type || 'text/javascript';
  if (src.defer) {
    scriptElement.defer = true;
  } else if (src.async) {
    scriptElement.async = true;
  }
  scriptElement.src = src.url;
  if (src.attributes) {
    Object.keys(src.attributes).forEach(function (attr) {
      scriptElement.setAttribute(attr, src.attributes[attr]);
    });
  }
  document.getElementsByTagName('body')[0].appendChild(scriptElement);
  if (src.callback && typeof src.callback === 'function') {
    scriptElement.onload = src.callback;
  }
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getAmpKey() {
  const keys = {
    localhost: 'bb504faf9add140a6b6ccdfef2e2d0c3',
    dev: '34d56f5c4cecde6f72a9ea0b4c2e195c',
    qa: 'bb504faf9add140a6b6ccdfef2e2d0c3',
    uat: '6df7e5898faeba52a21c7f38c8858a8e',
    prod: '4aec879ef8bf1823486c4338537ec441',
    'amerigo-uat': '18e9b5efcf52c7ac5fd0b7299029142d',
    'amerigo-prod': '48abc78eb10eb233812f4e4f6e263ed4'
  };
  const env = getEnv(keys);
  return keys[env];
}

function includeHtml(url) {
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      const container = document.createElement('div');
      container.innerHTML = xmlhttp.responseText;
      runInnerHTMLScripts(xmlhttp.responseText);
      document.body.insertBefore(container, document.body.firstChild);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function runInnerHTMLScripts(html) {
  let scripts = html.match(/<script([\S\s]*?)<\/script>/g);
  scripts = scripts ? scripts : [];
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    let src = script.match(/src="([\S\s]*?)"/);
    let scriptContent = script.replace(/<[/]?script.*>/gm, '');
    const head = document.getElementsByTagName("head")[0];
    const newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    if (src && src.length > 1) {
      src = src[1];
      newScript.src = src;
      head.appendChild(newScript);
    } else if (scriptContent && scriptContent.trim()) {
      newScript.text = scriptContent.trim();
      head.appendChild(newScript);
    }
  }
}

function setupMicroappsCallback() {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf('Microapps') === -1 && userAgent.indexOf('GPay') === -1) {
    return;
  }
  document.addEventListener('click', function (el) {
    if (typeof microapps !== 'undefined') {
      if (el.target && el.target.href) {
        microapps.openUrl({ url: el.target.href });
      } else if (el.currentTarget && el.currentTarget.href) {
        microapps.openUrl({ url: el.currentTarget.href })
      }
    }
  });
}

function getUniqueId() {

  const context = window.CONTEXT || '';
  const countryCode = window.COUNTRY_CODE;
  const langCode = window.LANG_CODE;

  const guId = guid();
  const cookie = `wu_device_id=${guId}; path=${context}/${countryCode}/${langCode}`; // TODO: Add SameSite=Strict;
  document.cookie= cookie;
  return guId;
  
  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }
}

function initMParticle() {
  const wu_device_id = getCookie('wu_device_id') ? getCookie('wu_device_id') : getUniqueId();
  window.mParticle = {
    config: {
      isDevelopmentMode: !isProd,
      prod_key: 'us1-d3c3f9d925e81f44bfa4b45141e08492',
      non_prod_key: 'us1-d3c3f9d925e81f44bfa4b45141e08492',
      identifyRequest: {
        userIdentities: {
          customerid: window.sessionStorage.getItem("AccountNumber"),
          email: '',
          other3: wu_device_id
        }
      },
      identityCallback: function (result) {
        if (result.getUser()) {
          //result.getUser().setUserAttribute('Amplitude.device_id', getCookie('wu_device_id'));
        } else {
        }
      }
    }
  };

  if (countryIsoCode && thirdPartyConfig && thirdPartyConfig.mParticle && thirdPartyConfig.mParticle.setDeviceIdEnabledCountries && thirdPartyConfig.mParticle.setDeviceIdEnabledCountries.indexOf(countryIsoCode.toUpperCase()) > -1) {
    window.mParticle.config.deviceId = wu_device_id;
  }

  if (isProd) {
    loadMParticle(window.mParticle.config.prod_key);
  } else {
    loadMParticle(window.mParticle.config.non_prod_key);

  }
}


function loadMParticle(t) {
  window.mParticle = window.mParticle || {};
  window.mParticle.EventType = {
    Unknown: 0,
    Navigation: 1,
    Location: 2,
    Search: 3,
    Transaction: 4,
    UserContent: 5,
    UserPreference: 6,
    Social: 7,
    Other: 8
  };
  window.mParticle.eCommerce = {
    Cart: {}
  };
  window.mParticle.Identity = {};
  window.mParticle.config = window.mParticle.config || {};
  window.mParticle.config.rq = [];
  window.mParticle.config.snippetVersion = 2.2;
  window.mParticle.ready = function (t) {
    window.mParticle.config.rq.push(t)
  };
  var e = ["endSession", "logError", "logBaseEvent", "logEvent", "logForm", "logLink", "logPageView", "setSessionAttribute", "setAppName", "setAppVersion", "setOptOut", "setPosition", "startNewSession", "startTrackingLocation", "stopTrackingLocation"];
  var o = ["setCurrencyCode", "logCheckout"];
  var i = ["identify", "login", "logout", "modify"];
  e.forEach(function (t) {
    window.mParticle[t] = n(t)
  });
  o.forEach(function (t) {
    window.mParticle.eCommerce[t] = n(t, "eCommerce")
  });
  i.forEach(function (t) {
    window.mParticle.Identity[t] = n(t, "Identity")
  });

  function n(e, o) {
    return function () {
      if (o) {
        e = o + "." + e
      }
      var t = Array.prototype.slice.call(arguments);
      t.unshift(e);
      window.mParticle.config.rq.push(t)
    }
  }
  var mp = document.createElement("script");
  mp.type = "text/javascript";
  mp.async = true;
  mp.src = ("https:" == document.location.protocol ? "https://jssdkcdns" : "http://jssdkcdn") + ".mparticle.com/js/v2/" + t + "/mparticle.js";
  var c = document.getElementsByTagName("script")[0];
  c.parentNode.insertBefore(mp, c)
}

function fireTag(tagsrc, bAsync) {
  if (bAsync === undefined) bAsync = true;
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.async = bAsync;
  e.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + tagsrc;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.appendChild(e);
}
var _tags = [];
function fireTags() {
  for (_tag in _tags) {
    fireTag(_tags[_tag]);
  }
}

/** DEEP LINKS */

function branchKey() {
  if (isProd) {
    return 'key_live_doxio2UKJ7Y9nVhGL3WKRmgiBvcC5P30'
  } else {
    return 'key_test_peb7TqvC8DB8xsaFaEATMbdnFxfzneuK'
  }
}

const urlMapping = {
  AutoStageLanding: ["/mywy-lookup/", "/us-r/"],
  SMEstimate: ["send-money", "/account/sendmoney/", "sendmoney", "smo", "smoWithParams", "/send-money/estimate/:quickSend"],
  Login: ["login", "/account/login/"],
  Profile: ["profile", "/account/register/profile", "/account/register/profile/progressive"],
  Help: ["help", "/help"],
  TAT: ["tat", "/account/track-a-transfer/", "/track/track-a-transfer", "/track/track-a-transfer/TAT", "/track/track-a-transfer/:page"],
  FindLocations: ["find-agent", "/account/findagent/", "/find-agents/list/"],
  MyWU: ["mywu", "/account/mywu/", "paybills", "/my-wu-rewards"],
  Registration: ["R3Registration"],
  HistoryNew: ["/account/dashboard"],
  Settings: ["/settings", "Settings",],
  Resend: ["/send-money/quick-resend"],
  CommunicationPreference: ['/account/contact-preferences'],
};

const queryParamMapping = {
  sendamount: ["sendamount", "sendamt", "sendamout", "sendAmount", "SendAmount"],
  sendercountry: ["sendercountry", "senderCountry", "SenderCountry"],
  recievercountry: ["receivercountry", "ReceiveCountry", "receiveCountry", "receivecountry", "receiverCountry", "ReceiverCountry"],
  recievercurrency: ["recievercurrency", "recieverCurrency", "RecieverCurrency", "receivercurrency", "receiverCurrency", "ReceiverCurrency", "ISOCurrency", "isocurrency", "isoCurrency"],
  fundsin: ["fundsin", "payment", "FundsIn", "fundsIn", "funds-in", "payIn", "payin", "PayIn"],
  fundsout: ["fundsout", "delivery", "FundsOut", "fundsOut", "funds-out", "payOut", "payout", "PayOut"],
  mtcn: ["mtcn"],
  PromoCode: ["PromoCode", "promoCode", "promocode", "Coupon", "coupon"],
  receiveamount: ["receiveAmount", "receiveamount", "ReceiveAmount"],
};

const valueMapping = {
  fundsin: {
    CreditCard: ["CC", "creditcard"],
    ACH: ["ACH", "Bank", "bank"],
    ApplePay: ["ApplePay", "applePay", "applepay"],
    DebitCard: ["DebitCard", "debitcard"],
  },
}


const getScreenNameForUrl = (url) => {
  if (url) {
    for (const key in urlMapping) {
      if (urlMapping.hasOwnProperty(key)) {
        const element = urlMapping[key];
        if (element && element.indexOf(url) > -1) {
          return key;
        }
        else if (url.search("/mywy-lookup/") > -1) {
          return key;
        }
      }
    }
  }
  return WUScreenComponents.Home.id
};

const getQueryParamMapping = (queryParams) => {
  const data = {};
  for (const key in queryParamMapping) {
    if (queryParamMapping.hasOwnProperty(key)) {
      const qpElements = queryParamMapping[key];
      qpElements.forEach((qpElement) => {
        if (queryParams[qpElement]) {
          data[key] = queryParams[qpElement];
          if (valueMapping[key]) {
            for (const valueMap in valueMapping[key]) {
              if (valueMapping[key].hasOwnProperty(valueMap)) {
                const valElement = valueMapping[key][valueMap];
                valElement.forEach((el) => {
                  if (queryParams[qpElement] == el) {
                    data[key] = valueMap;
                  }
                })
              }
            }
          }
        }
      });
    }
  }
  let query = ""
  for (const property in data) {
    if (query == "") query = `?${property}=${data[property]}`
    else query += `&${property}=${data[property]}`

  }
  return query;
};


function deeplink(data) {
  if (data && data.data_parsed && data.data_parsed.$desktop_url) {
    let parts = new URL(data.data_parsed.$desktop_url).pathname.split("/")
    parts.pop();
    const origin = window.location.origin;
    const base = origin + parts.join("/")

    const url = data.data_parsed.R3AppUrl || data.data_parsed.openInflow

    switch (getScreenNameForUrl(url)) {
      case "Profile":
        window.location.replace(base + '/user/register');
        break;
      case "TAT": {
        const param = getQueryParamMapping(data.data_parsed)
        window.location.replace(base + '/global-service/track-transfer' + param);
      }
        break;
      case "HistoryNew":
        window.location.replace(base + '/account/history');
        break;
      case "MyWU":
        window.location.replace(base + '/mywu');
        break;
      case "FindLocations":
        window.location.replace(base + '/find-locations.html');
        break;
      case "Profile":
        window.location.replace(base + '/account/app/profile');
        break;
      case "Login":
        window.location.replace(base + '/user/login');
        break;
      case "Resend":
        window.location.replace(base + '/send-money/quick-resend/receiver-list');
        break;
      case "SMEstimate":
        const param = getQueryParamMapping(data.data_parsed)
        window.location.replace(base + '/send-money/start' + param);
        break;
      case "CommunicationPreference":
        window.location.replace(base + '/account/app/communication-prefernces');
        break;
      case "Settings":
        window.location.replace(base + '/settings');
        break;
      case "Home":
        window.location.replace(base + '/home')
        break;
    }
  }

}
