import type React from 'react';
import { NativeEventEmitter, NativeModules, findNodeHandle } from 'react-native';

import { isString } from './utils';

const SmartlookBridge = NativeModules.RNSmartlook;

const REACT_NATIVE_VERSION = require('react-native/package.json').version;
const SMARTLOOK_VERSION = require('smartlook-react-native-wrapper/package.json').version;

type ComponentOrHandle = null | number | React.Component<any, any> | React.ComponentClass<any>;

class Smartlook {
	public static eventListener: any;

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
	static setup(optionsOrAPIKey: Smartlook.SetupOptions | string) {
		let options = isString(optionsOrAPIKey)
			? { smartlookAPIKey: optionsOrAPIKey as string }
			: (optionsOrAPIKey as Smartlook.SetupOptions);

		options._reactNativeVersion = REACT_NATIVE_VERSION;
		options._smartlookPluginVersion = SMARTLOOK_VERSION;

		SmartlookBridge.setup(options);
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
	static setupAndStartRecording(optionsOrAPIKey: Smartlook.SetupOptions | string) {
		let options = isString(optionsOrAPIKey)
			? { smartlookAPIKey: optionsOrAPIKey as string }
			: (optionsOrAPIKey as Smartlook.SetupOptions);

		options._reactNativeVersion = REACT_NATIVE_VERSION;
		options._smartlookPluginVersion = SMARTLOOK_VERSION;
		SmartlookBridge.setupAndStartRecording(options);
	}

	//@SL_COMPATIBILITY_NAME("name=setUserIdentifier;type=func;params=identifier{string}")
	//@SL_COMPATIBILITY_NAME("name=setUserProperties;type=func;params=sessionProperties{JSONObject},immutable{boolean}")
	//@SL_COMPATIBILITY_NAME("name=setUserProperties;type=func;params=sessionProperties{Bundle},immutable{boolean}")
	//@SL_COMPATIBILITY_NAME("name=setUserProperties;type=func;params=sessionProperties{string},immutable{boolean}")

	static setUserIdentifier(userIdentifier: string, userProperties = {}) {
		SmartlookBridge.setUserIdentifier(userIdentifier, userProperties);
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
	static async isRecording(): Promise<boolean> {
		return SmartlookBridge.isRecording();
	}

	// EVENTS

	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string};returns=string")
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},eventProperties{JSONObject};returns=string")
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},bundle{Bundle};returns=string")
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},eventProperties{string};returns=string")
	static async startTimedCustomEvent(name: string, properties = {}): Promise<string> {
		return SmartlookBridge.startTimedCustomEvent(name, properties);
	}

	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string}")
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},eventProperties{JSONObject}")
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},bundle{Bundle}")
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},eventProperties{string}")
	static stopTimedCustomEvent(name: string, properties = {}) {
		SmartlookBridge.stopTimedCustomEvent(name, properties);
	}

	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string}")
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},eventProperties{JSONObject}")
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},bundle{Bundle}")
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},eventProperties{string}")
	static cancelTimedCustomEvent(name: string, reason: string, properties = {}) {
		SmartlookBridge.cancelTimedCustomEvent(name, reason, properties);
	}

	//@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string}")
	//@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string},eventProperties{JSONObject}")
	//@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string},bundle{Bundle}")
	//@SL_COMPATIBILITY_NAME("name=trackCustomEvent;type=func;params=eventName{string},properties{string}")
	static trackCustomEvent(name: string, properties = {}) {
		SmartlookBridge.trackCustomEvent(name, properties);
	}

	//@SL_COMPATIBILITY_NAME("name=trackNavigationEvent;type=func;params=name{string},viewState{string};deprecated=yes")
	static trackNavigationEvent(screenName: string, viewState: Smartlook.ViewState) {
		SmartlookBridge.trackNavigationEvent(screenName, viewState);
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
	static async isFullscreenSensitiveModeActive(): Promise<boolean> {
		return SmartlookBridge.isFullscreenSensitiveModeActive();
	}

	//@SL_COMPATIBILITY_NAME("name=registerBlacklistedView;type=func;params=blacklistedView{View}")
	static registerBlacklistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			return;
		}

		SmartlookBridge.registerBlacklistedView(findNodeHandle(ref));
	}

	//@SL_COMPATIBILITY_NAME("name=unregisterBlacklistedView;type=func;params=blacklistedView{View}")
	static unregisterBlacklistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			return;
		}

		SmartlookBridge.unregisterBlacklistedView(findNodeHandle(ref));
	}

	//@SL_COMPATIBILITY_NAME("name=registerWhitelistedView;type=func;params=whitelistedView{View}")
	static registerWhitelistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			return;
		}

		SmartlookBridge.registerWhitelistedView(findNodeHandle(ref));
	}

	//@SL_COMPATIBILITY_NAME("name=unregisterWhitelistedView;type=func;params=whitelistedView{View}")
	static unregisterWhitelistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			return;
		}

		SmartlookBridge.unregisterWhitelistedView(findNodeHandle(ref));
	}

	// GLOBAL EVENT PROPERTIES

	//@SL_COMPATIBILITY_NAME("name=removeAllGlobalEventProperties;type=func")
	static removeAllGlobalEventProperties() {
		SmartlookBridge.removeAllGlobalEventProperties();
	}

	//@SL_COMPATIBILITY_NAME("name=removeGlobalEventProperty;type=func;params=key{string}")
	static removeGlobalEventProperty(key: string) {
		SmartlookBridge.removeGlobalEventProperty(key);
	}

	//@SL_COMPATIBILITY_NAME("name=setGlobalEventProperties;type=func;params=globalEventProperties{JSONObject},immutable{boolean}")
	//@SL_COMPATIBILITY_NAME("name=setGlobalEventProperties;type=func;params=globalEventProperties{Bundle},immutable{boolean}")
	//@SL_COMPATIBILITY_NAME("name=setGlobalEventProperties;type=func;params=globalEventProperties{string},immutable{boolean}")
	static setGlobalEventProperties(properties: {}, immutable = false) {
		SmartlookBridge.setGlobalEventProperties(properties, immutable);
	}

	//@SL_COMPATIBILITY_NAME("name=setGlobalEventProperty;type=func;params=key{string},value{string},immutable{boolean}")
	static setGlobalEventProperty(key: string, value: string, immutable = false) {
		SmartlookBridge.setGlobalEventProperty(key, value, immutable);
	}

	// OTHERS

	//@SL_COMPATIBILITY_NAME("name=getDashboardSessionUrl;type=func;params=withCurrentTimestamp{boolean};returns=string")
	static async getDashboardSessionUrl(withCurrentTimestamp = false): Promise<string> {
		return SmartlookBridge.getDashboardSessionUrl(withCurrentTimestamp);
	}

	//@SL_COMPATIBILITY_NAME("name=getDashboardVisitorUrl;type=func;returns=string")
	static async getDashboardVisitorUrl(): Promise<string> {
		return SmartlookBridge.getDashboardVisitorUrl();
	}

	//@SL_COMPATIBILITY_NAME("name=setReferrer;type=func;params=referrer{string},source{string}")
	static setReferrer(referrer: string, source: string) {
		SmartlookBridge.setReferrer(referrer, source);
	}

	//@SL_COMPATIBILITY_NAME("name=enableCrashlytics;type=func;params=enable{boolean}")
	static enableCrashlytics(enabled: boolean) {
		SmartlookBridge.enableCrashlytics(enabled);
	}

	//@SL_COMPATIBILITY_NAME("name=resetSession;type=func;params=resetUser{boolean}")
	static resetSession(resetUser: boolean) {
		SmartlookBridge.resetSession(resetUser);
	}

	//@SL_COMPATIBILITY_NAME("name=setRenderingMode;type=func;params=renderingMode{string};deprecated=yes")
	static setRenderingMode(renderingMode: Smartlook.RenderingMode) {
		SmartlookBridge.setRenderingMode(renderingMode);
	}

	//@SL_COMPATIBILITY_NAME("name=setEventTrackingMode;type=func;params=eventTrackingMode{EventTrackingMode}")
	static setEventTrackingMode(eventTrackingMode: Smartlook.EventTrackingMode) {
		if (Object.values(Smartlook.EventTrackingMode).includes(eventTrackingMode))
			SmartlookBridge.setEventTrackingMode(eventTrackingMode);
	}

	//@SL_COMPATIBILITY_NAME("name=setEventTrackingModes;type=func;params=eventTrackingModes{List[EventTrackingMode]}")
	static setEventTrackingModes(eventTrackingModes: Smartlook.EventTrackingMode[]) {
		if (!(Symbol.iterator in Object(eventTrackingModes))) return;
		for (const value of eventTrackingModes) {
			if (!Object.values(Smartlook.EventTrackingMode).includes(value)) return;
		}

		SmartlookBridge.setEventTrackingModes(eventTrackingModes);
	}

	//@SL_COMPATIBILITY_NAME("name=registerIntegrationListener;type=func;params=integrationListener{IntegrationListener}")
	//@SL_COMPATIBILITY_NAME("name=IntegrationListener;type=callback;members=onSessionReady,onVisitorReady")
	static registerIntegrationListener(
		dashboardSessionUrlCallback: (url: string) => void,
		dashboardVisitorUrlCallback: (url: string) => void,
	) {
		const eventEmitter = new NativeEventEmitter(SmartlookBridge);
		this.eventListener = eventEmitter.addListener(
			'integrationCallback',
			({ dashboardVisitorUrl, dashboardSessionUrl }) => {
				if (dashboardVisitorUrl) {
					dashboardVisitorUrlCallback(dashboardVisitorUrl);
				}

				if (dashboardSessionUrl) {
					dashboardSessionUrlCallback(dashboardSessionUrl);
				}
			},
		);
		SmartlookBridge.registerIntegrationListener();
	}

	//@SL_COMPATIBILITY_NAME("name=unregisterIntegrationListener;type=func")
	static unregisterIntegrationListener() {
		SmartlookBridge.unregisterIntegrationListener();
		this.eventListener.remove();
	}
}

namespace Smartlook {
	export interface SetupOptions {
		smartlookAPIKey: string;
		fps?: number;
		startNewSession?: boolean;
		startNewSessionAndUser?: boolean;
		_reactNativeVersion?: string;
		_smartlookPluginVersion?: string;
	}

	export enum ViewState {
		Enter = 'enter',
		Exit = 'exit',
	}

	export enum RenderingMode {
		Native = 'native',
		NoRendering = 'no_rendering',
		Wireframe = 'wireframe',
	}

	export enum EventTrackingMode {
		FullTracking = 'FULL_TRACKING',
		IgnoreUserInteraction = 'IGNORE_USER_INTERACTION',
		IgnoreNavigationInteraction = 'IGNORE_NAVIGATION_INTERACTION',
		IgnoreRageClicks = 'IGNORE_RAGE_CLICKS',
		NoTracking = 'NO_TRACKING',
	}
}

export default Smartlook;
