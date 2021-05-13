import { NativeEventEmitter, NativeModules, findNodeHandle } from 'react-native';
import type { ComponentOrHandle, Dictionary } from './types';

import { isString } from './utils';

const SmartlookBridge = NativeModules.RNSmartlook;

const REACT_NATIVE_VERSION = require('react-native/package.json').version;
const SMARTLOOK_VERSION = require('../package.json').version;

const REF_NOT_INITIALIZED_ERROR =
	"The ref hasn't been initialized yet. This might happen if it is not mounted, or if it hasn't finished mounting.";

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

	/**
	 * Starts a timed event.
	 *
	 * @summary Timed events can be used for measuring duration of any time-sensitive or long-running actions in the application.
	 * This will not send out any events but will return a Promise which will resolve with unique eventId
	 * that needs to be stored, and it is then used to stop/cancel a custom timed event.
	 *
	 * @param  eventName
	 * @param  eventProperties
	 * @returns A promise fulfilled by unique eventId
	 */
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string};returns=string")
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},eventProperties{JSONObject};returns=string")
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},bundle{Bundle};returns=string")
	//@SL_COMPATIBILITY_NAME("name=startTimedCustomEvent;type=func;params=eventName{string},eventProperties{string};returns=string")
	static async startTimedCustomEvent(eventName: string, eventProperties: Dictionary<string> = {}): Promise<string> {
		return SmartlookBridge.startTimedCustomEvent(eventName, eventProperties);
	}

	/**
	 * Stops a timed event.
	 *
	 * @param  eventId - eventId obtained from {@link startTimedCustomEvent}
	 * @param  eventProperties - properties are merged with the properties set in the {@link startTimedCustomEvent}
	 */
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string}")
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},eventProperties{JSONObject}")
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},bundle{Bundle}")
	//@SL_COMPATIBILITY_NAME("name=stopTimedCustomEvent;type=func;params=eventId{string},eventProperties{string}")
	static stopTimedCustomEvent(eventId: string, eventProperties: Dictionary<string> = {}) {
		SmartlookBridge.stopTimedCustomEvent(eventId, eventProperties);
	}

	/**
	 * Cancels a timed event.
	 *
	 * @summary In case a given action failed this function is called instead of {@link stopTimedCustomEvent}.
	 *
	 * @param  eventId - eventId obtained from {@link startTimedCustomEvent}
	 * @param  reason - reason of failure
	 * @param  eventProperties - properties are merged with the properties set in the {@link startTimedCustomEvent}
	 */
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string}")
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},eventProperties{JSONObject}")
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},bundle{Bundle}")
	//@SL_COMPATIBILITY_NAME("name=cancelTimedCustomEvent;type=func;params=eventId{string},reason{string},eventProperties{string}")
	static cancelTimedCustomEvent(name: string, reason: string, eventProperties: Dictionary<string> = {}) {
		SmartlookBridge.cancelTimedCustomEvent(name, reason, eventProperties);
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
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.registerBlacklistedView(findNodeHandle(ref));
	}

	//@SL_COMPATIBILITY_NAME("name=unregisterBlacklistedView;type=func;params=blacklistedView{View}")
	static unregisterBlacklistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.unregisterBlacklistedView(findNodeHandle(ref));
	}

	//@SL_COMPATIBILITY_NAME("name=registerWhitelistedView;type=func;params=whitelistedView{View}")
	static registerWhitelistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.registerWhitelistedView(findNodeHandle(ref));
	}

	//@SL_COMPATIBILITY_NAME("name=unregisterWhitelistedView;type=func;params=whitelistedView{View}")
	static unregisterWhitelistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.unregisterWhitelistedView(findNodeHandle(ref));
	}

	static setViewIsSensitive(ref: ComponentOrHandle, isSensitive: boolean) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.setViewIsSensitive(findNodeHandle(ref), isSensitive);
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

	/**
	 * Returns a URL leading to the Smartlook Dashboard for a currently recorded session.
	 *
	 * @param  withCurrentTimestamp - If withCurrentTimestamp is set to true link it will include information about the current recording timestamp.
	 * This will ensure that the player will start playing the session at the moment when getDashboardSessionUrl was called.
	 *
	 * @returns A promise fulfilled by a Smartlook Dashboard URL
	 */
	//@SL_COMPATIBILITY_NAME("name=getDashboardSessionUrl;type=func;params=withCurrentTimestamp{boolean};returns=string")
	static async getDashboardSessionUrl(withCurrentTimestamp = false): Promise<string> {
		return SmartlookBridge.getDashboardSessionUrl(withCurrentTimestamp);
	}

	/**
	 * A URL leading to the Smartlook Dashboard for a currently recorded visitor.
	 *
	 * @returns A promise fulfilled by a Smartlook Dashboard URL
	 */
	//@SL_COMPATIBILITY_NAME("name=getDashboardVisitorUrl;type=func;returns=string")
	static async getDashboardVisitorUrl(): Promise<string> {
		return SmartlookBridge.getDashboardVisitorUrl();
	}

	/**
	 * Set a custom referrer.
	 *
	 * @summary When an application is installed from the Google Play Store, Smartlook SDK automatically tracks install referrer.
	 * A custom referrer can also be set by using this function.
	 *
	 * @param  referrer
	 */
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

	/**
	 * Set event tracking mode.
	 *
	 * @summary It can be beneficial to disable some automatically detected events due to security or usability reasons.
	 * This can be done using event tracking modes
	 *
	 * @param  eventTrackingMode
	 */
	//@SL_COMPATIBILITY_NAME("name=setEventTrackingMode;type=func;params=eventTrackingMode{EventTrackingMode}")
	static setEventTrackingMode(eventTrackingMode: Smartlook.EventTrackingMode) {
		if (Object.values(Smartlook.EventTrackingMode).includes(eventTrackingMode))
			SmartlookBridge.setEventTrackingMode(eventTrackingMode);
	}

	/**
	 * Set event tracking modes.
	 *
	 * @summary It can be beneficial to disable some automatically detected events due to security or usability reasons.
	 * This can be done using event tracking modes
	 *
	 * @param  eventTrackingModes
	 */
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
		/**
		 * Default state. SDK tracks all automatically detected events along with all user defined events.
		 */
		FullTracking = 'FULL_TRACKING',
		/**
		 * Disables automatically detected selector (click on a View), focus, touch, gesture and keyboard events.
		 */
		IgnoreUserInteraction = 'IGNORE_USER_INTERACTION',
		/**
		 * Disables automatically detected navigation events. User defined ones are still being sent.
		 */
		IgnoreNavigationInteraction = 'IGNORE_NAVIGATION_INTERACTION',
		/**
		 * Disables automatic detection and tracking of rage click events.
		 */
		IgnoreRageClicks = 'IGNORE_RAGE_CLICKS',
		/**
		 * No automatically detected events are tracked. Only user defined events are still tracked.
		 */
		NoTracking = 'NO_TRACKING',
	}

	export enum SensitivityType {
		Blacklisted,
		Whitelisted,
	}
}

export default Smartlook;
