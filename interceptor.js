var { Platform, NativeModules, findNodeHandle } = require('react-native');
var SmartlookBridge = NativeModules.RNSmartlook;


class Smartlook {

    static init(API_KEY) { //experimental
        SmartlookBridge.init(API_KEY);
    }

    static flush() {
        SmartlookBridge.flush();
    }

    static identify(idKey, map) {
        SmartlookBridge.identify(idKey, (map == null) ? {} : map);
    }

    static removeAllSuperProperties() {
        SmartlookBridge.removeAllSuperProperties();
    }

    static removeSuperPropertyByKey(key) {
        SmartlookBridge.removeSuperPropertyByKey(key);
    }

    static setGlobalImmutableProperties(map) {
        SmartlookBridge.setGlobalImmutableProperties(map);
    }

    static setGlobalProperties(map) {
        SmartlookBridge.setGlobalImmutableProperties(map);
    }

    static timeEvent(key) {
        SmartlookBridge.timeEvent(key);
    }

    static track(key, map) {
        SmartlookBridge.track(key, (map == null) ? {} : map);
    }

    static markViewAsSensitive(ref) {
        SmartlookBridge.markViewAsSensitive(findNodeHandle(ref));
    }

    static unmarkViewAsSensitive(ref) {
        SmartlookBridge.unmarkViewAsSensitive(findNodeHandle(ref));
    }
}

module.exports = Smartlook;