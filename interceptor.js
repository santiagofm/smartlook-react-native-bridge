var { Platform, NativeEventEmitter, NativeModules, findNodeHandle } = require('react-native');
var SmartlookBridge = NativeModules.RNSmartlook;


class Smartlook {

    static EventTrackingMode() {
        return {
            FULL_TRACKING: "FULL_TRACKING",
            IGNORE_USER_INTERACTION: "IGNORE_USER_INTERACTION",
            IGNORE_NAVIGATION_INTERACTION: "IGNORE_NAVIGATION_INTERACTION",
            IGNORE_RAGE_CLICKS: "IGNORE_RAGE_CLICKS",
            NO_TRACKING: "NO_TRACKING"
        };
    }

    // SETUP

    /**
     * @description Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())
     *
     * @param options.smartlookAPIKey        Unique 40 character key identifying your app. You can find in your
     *                                       dashboard. If invalid key is set SDK will not work properly.
     * @param options.fps                    (Optional) Desired FPS for the recording, that must be in range from 1 to 10.
     * @param options.startNewSession        (Optional) If true new session is going to be created
     * @param options.startNewSessionAndUser (Optional) If true new session and visitor is going to be created 
     */
    //@SL_COMPATIBILITY_NAME("name=setup;type=func;params=smartlookAPIKey{string}")
    //@SL_COMPATIBILITY_NAME("name=setup;type=func;params=setupOptions{SetupOptions}")
    //@SL_COMPATIBILITY_NAME("name=SetupOptions;type=builder;members=smartlookAPIKey,fps,startNewSession,startNewSessionAndUser")
    static setup(options) {
        var safeOptions = options;
        if (typeof options === 'string' || options instanceof String) {
            let apiKey = options;
            safeOptions = new Object();
            safeOptions.smartlookAPIKey = options;
        } 
        safeOptions._reactNativeVersion = require('react-native/package.json').version;
        safeOptions._smartlookPluginVersion = require("smartlook-react-native-wrapper/package.json").version;
        SmartlookBridge.setup(safeOptions);
    }

    /**
     * @description Setup and start Smartlook SDK recording.
     *
     * @param options.smartlookAPIKey        Unique 40 character key identifying your app. You can find in your
     *                                       dashboard. If invalid key is set SDK will not work properly.
     * @param options.fps                    (Optional) Desired FPS for the recording, that must be in range from 1 to 10.
     * @param options.startNewSession        (Optional) If true new session is going to be created
     * @param options.startNewSessionAndUser (Optional) If true new session and visitor is going to be created 
     */
    //@SL_COMPATIBILITY_NAME("name=setupAndStartRecording;type=func;params=smartlookAPIKey{string}")
    //@SL_COMPATIBILITY_NAME("name=setupAndStartRecording;type=func;params=setupOptions{SetupOptions}")
    static setupAndStartRecording(options) {
        var safeOptions = options;
        if (typeof options === 'string' || options instanceof String) {
            let apiKey = options;
            safeOptions = new Object();
            safeOptions.smartlookAPIKey = options;
        } 
        safeOptions._reactNativeVersion = require('react-native/package.json').version;
        safeOptions._smartlookPluginVersion = require("smartlook-react-native-wrapper/package.json").version;
        SmartlookBridge.setupAndStartRecording(safeOptions);
    }

    //@SL_COMPATIBILITY_NAME("name=setUserIdentifier;type=func;params=identifier{string}")
    //@SL_COMPATIBILITY_NAME("name=setUserProperties;type=func;params=sessionProperties{JSONObject},immutable{boolean}")
    //@SL_COMPATIBILITY_NAME("name=setUserProperties;type=func;params=sessionProperties{Bundle},immutable{boolean}")
    //@SL_COMPATIBILITY_NAME("name=setUserProperties;type=func;params=sessionProperties{string},immutable{boolean}")
    
    static setUserIdentifier(idKey, map) {
        SmartlookBridge.setUserIdentifier(idKey, (map == null) ? {} : map);
    }

    // START & STOP

    //@SL_COMPATIBILITY_NAME("name=startRecording;type=func")
    static startRecording() {
        SmartlookBridge.startRecording();
    }

    //@SL_COMPATIBILITY_NAME("name=stopRecording;type=func")
    static stopRecording() {
        SmartlookBridge.stopRecording();
    }

    //@SL_COMPATIBILITY_NAME("name=isRecording;type=func;returns=boolean")
    static isRecording() {
        return SmartlookBridge.isRecording();
    }

    // EVENTS

    //@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string};returns=string")
    //@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},eventProperties{JSONObject};returns=string")
    //@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},bundle{Bundle};returns=string")
    //@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},eventProperties{string};returns=string")
    static startTimedCustomEvent(key, map) {
        return SmartlookBridge.startTimedCustomEvent(key, (map == null) ? {} : map);
    }

    //@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string}")
    //@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},eventProperties{JSONObject}")
    //@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},bundle{Bundle}")
    //@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},eventProperties{string}")
    static stopTimedCustomEvent(key, map) {
        return SmartlookBridge.stopTimedCustomEvent(key, (map == null) ? {} : map);
    }

    //@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string}")
    //@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},eventProperties{JSONObject}")
    //@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},bundle{Bundle}")
    //@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},eventProperties{string}")
    static cancelTimedCustomEvent(key, reason, map) {
        return SmartlookBridge.cancelTimedCustomEvent(key, reason, (map == null) ? {} : map);
    }

    //@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string}")
    //@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string},eventProperties{JSONObject}")
    //@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string},bundle{Bundle}")
    //@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string},properties{string}")
    static trackCustomEvent(key, map) {
        SmartlookBridge.trackCustomEvent(key, (map == null) ? {} : map);
    }

    //@SL_COMPATIBILITY_NAME("name=trackNavigationEvent;type=func;params=name{string},viewState{string};deprecated=yes")
    static trackNavigationEvent(screenName, direction) {
        SmartlookBridge.trackNavigationEvent(screenName, direction);
    }

    // SENSITIVE 

    //@SL_COMPATIBILITY_NAME("name=startFullscreenSensitiveMode;type=func;deprecated=yes")
    static startFullscreenSensitiveMode() {
        SmartlookBridge.startFullscreenSensitiveMode();
    }

    //@SL_COMPATIBILITY_NAME("name=stopFullscreenSensitiveMode;type=func;deprecated=yes")
    static stopFullscreenSensitiveMode() {
        SmartlookBridge.stopFullscreenSensitiveMode();
    }

    //@SL_COMPATIBILITY_NAME("name=isFullscreenSensitiveModeActive;type=func;returns=boolean;deprecated=yes")
    static isFullscreenSensitiveModeActive() {
        return SmartlookBridge.isFullscreenSensitiveModeActive();
    }

    //@SL_COMPATIBILITY_NAME("name=registerBlacklistedView;type=func;params=blacklistedView{View}")
    static registerBlacklistedView(ref) {

        if (ref == null) {
            return;
        }

        SmartlookBridge.registerBlacklistedView(findNodeHandle(ref));
    }

    //@SL_COMPATIBILITY_NAME("name=unregisterBlacklistedView;type=func;params=blacklistedView{View}")
    static unregisterBlacklistedView(ref) {

        if (ref == null) {
            return;
        }
        
        SmartlookBridge.unregisterBlacklistedView(findNodeHandle(ref));
    }

    // GLOBAL EVENT PROPERTIES

    //@SL_COMPATIBILITY_NAME("name=removeAllGlobalEventProperties;type=func")
    static removeAllGlobalEventProperties() {
        SmartlookBridge.removeAllGlobalEventProperties();
    }

    //@SL_COMPATIBILITY_NAME("name=removeGlobalEventProperty;type=func;params=key{string}")
    static removeGlobalEventProperty(key) {
        SmartlookBridge.removeGlobalEventProperty(key);
    }

    //@SL_COMPATIBILITY_NAME("name=setGlobalEventProperties;type=func;params=globalEventProperties{JSONObject},immutable{boolean}")
    //@SL_COMPATIBILITY_NAME("name=setGlobalEventProperties;type=func;params=globalEventProperties{Bundle},immutable{boolean}")
    //@SL_COMPATIBILITY_NAME("name=setGlobalEventProperties;type=func;params=globalEventProperties{string},immutable{boolean}")
    static setGlobalEventProperties(map, immutable) {
        SmartlookBridge.setGlobalEventProperties(map, immutable || false);
    }

    //@SL_COMPATIBILITY_NAME("name=setGlobalEventProperty;type=func;params=key{string},value{string},immutable{boolean}")
    static setGlobalEventProperty(key, value, immutable) {
        SmartlookBridge.setGlobalEventProperty(key, value, immutable || false);
    }

    // OTHERS

    //@SL_COMPATIBILITY_NAME("name=getDashboardSessionUrl;type=func;params=withCurrentTimestamp{boolean};returns=string")
    static getDashboardSessionUrl(withCurrentTimestamp) {
        return SmartlookBridge.getDashboardSessionUrl(withCurrentTimestamp || false);
    }

    //@SL_COMPATIBILITY_NAME("name=getDashboardVisitorUrl;type=func;returns=string")
    static getDashboardVisitorUrl() {
        return SmartlookBridge.getDashboardVisitorUrl();
    }

    //@SL_COMPATIBILITY_NAME("name=setReferrer;type=func;params=referrer{string},source{string}")
    static setReferrer(referrer, source) {
        SmartlookBridge.setReferrer(referrer, source);
    }

    //@SL_COMPATIBILITY_NAME("name=enableCrashlytics;type=func;params=enable{boolean}")
    static enableCrashlytics(enabled) {
        SmartlookBridge.enableCrashlytics(enabled);
    }

    //@SL_COMPATIBILITY_NAME("name=resetSession;type=func;params=resetUser{boolean}")
    static resetSession(resetUser) {
        SmartlookBridge.resetSession(resetUser);
    }

    //@SL_COMPATIBILITY_NAME("name=setRenderingMode;type=func;params=renderingMode{string};deprecated=yes")
    static setRenderingMode(renderingMode) {
        SmartlookBridge.setRenderingMode(renderingMode);
    }

    //@SL_COMPATIBILITY_NAME("name=setEventTrackingMode;type=func;params=eventTrackingMode{EventTrackingMode}")
    static setEventTrackingMode(eventTrackingMode) {
        var paramOk = false;
        var definedModes = Smartlook.EventTrackingMode();
        for (const property in definedModes) {
            if (definedModes[property] === eventTrackingMode) {
                paramOk = true;
                break;
            }
        }

        if (paramOk) {
            SmartlookBridge.setEventTrackingMode(eventTrackingMode);
        }
    }

    //@SL_COMPATIBILITY_NAME("name=setEventTrackingModes;type=func;params=eventTrackingModes{List[EventTrackingMode]}")
    static setEventTrackingModes(eventTrackingModes) {
        var paramOk = true;
        var definedModes = Smartlook.EventTrackingMode();

        if (eventTrackingModes.constructor === Array && eventTrackingModes.length > 0) {

            for (const mode in eventTrackingModes) {
                var modeOk = false;
                for (const property in definedModes) {
                    if (property === eventTrackingModes[mode]) {
                        modeOk = true;
                        break;
                    }
                }

                if (modeOk === false) {
                    paramOk = false;
                    break;
                }
            }

            if (paramOk) {
                SmartlookBridge.setEventTrackingModes(eventTrackingModes);
            }
        }
    }

    //@SL_COMPATIBILITY_NAME("name=registerIntegrationListener;type=func;params=integrationListener{IntegrationListener}")
    //@SL_COMPATIBILITY_NAME("name=IntegrationListener;type=callback;members=onSessionReady,onVisitorReady")
    static registerIntegrationListener(dashboardSessionUrlCallback, dashboardVisitorUrlCallback) {
        const eventEmitter = new NativeEventEmitter(SmartlookBridge);
        this.eventListener = eventEmitter.addListener('integrationCallback', (event) => {
            if (event.dashboardVisitorUrl) {
                dashboardVisitorUrlCallback(event.dashboardVisitorUrl);
            }

            if (event.dashboardSessionUrl) {
                dashboardSessionUrlCallback(event.dashboardSessionUrl);
            }
    });
        SmartlookBridge.registerIntegrationListener();
    }

    //@SL_COMPATIBILITY_NAME("name=unregisterIntegrationListener;type=func")
    static unregisterIntegrationListener() {
        SmartlookBridge.unregisterIntegrationListener();
        this.eventListener.remove();
    }

}

module.exports = Smartlook;
