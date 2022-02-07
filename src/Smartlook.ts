import { NativeEventEmitter, NativeModules, findNodeHandle } from 'react-native';
import type { ComponentOrHandle, Dictionary } from './types';

import { isString } from './utils';

const SmartlookBridge = NativeModules.RNSmartlook;

const REACT_NATIVE_VERSION = require('react-native/package.json').version;

import SMARTLOOK_PACKAGE_JSON from '../package.json';

const REF_NOT_INITIALIZED_ERROR =
	"The ref hasn't been initialized yet. This might happen if it is not mounted, or if it hasn't finished mounting.";

function prepareSetupOptions(optionsOrAPIKey: Smartlook.SetupOptions | string) {
	let options = isString(optionsOrAPIKey)
		? { smartlookAPIKey: optionsOrAPIKey as string }
		: (optionsOrAPIKey as Smartlook.SetupOptions);

	options.sdk_framework = 'REACT_NATIVE';
	options.sdk_framework_version = REACT_NATIVE_VERSION;
	options.sdk_framework_plugin_version = SMARTLOOK_PACKAGE_JSON.version;

	return options;
}

/**
 * The main Smartlook SDK wrapper.
 */
export namespace Smartlook {
	let eventListener: any;

	// SETUP

	/**
	 * Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())
	 *
	 * @param options.smartlookAPIKey        Unique 40 character key identifying your app. You can find in your
	 *                                       dashboard. If invalid key is set SDK will not work properly.
	 * @param options.fps                    (Optional) Desired FPS for the recording, that must be in range from 1 to 10.
	 * @param options.startNewSession        (Optional) If true new session is going to be created
	 * @param options.startNewSessionAndUser (Optional) If true new session and visitor is going to be created
	 * @category 1) Setup
	 */
	export function setup(optionsOrAPIKey: Smartlook.SetupOptions | string) {
		const options = prepareSetupOptions(optionsOrAPIKey);

		SmartlookBridge.setup(options);
	}

	/**
	 * Setup and start Smartlook SDK recording.
	 *
	 * @param options.smartlookAPIKey        Unique 40 character key identifying your app. You can find in your
	 *                                       dashboard. If invalid key is set SDK will not work properly.
	 * @param options.fps                    (Optional) Desired FPS for the recording, that must be in range from 1 to 10.
	 * @param options.startNewSession        (Optional) If true new session is going to be created
	 * @param options.startNewSessionAndUser (Optional) If true new session and visitor is going to be created
	 * @category 1) Setup
	 */
	export function setupAndStartRecording(optionsOrAPIKey: Smartlook.SetupOptions | string) {
		const options = prepareSetupOptions(optionsOrAPIKey);

		SmartlookBridge.setupAndStartRecording(options);
	}

	/**
	 * Sets a user identifier with optional dictionary of user properties
	 *
	 * @param userIdentifier
	 * @param userProperties
	 * @category 2) User
	 */
	export function setUserIdentifier(userIdentifier: string, userProperties = {}) {
		SmartlookBridge.setUserIdentifier(userIdentifier, userProperties);
	}

	// START & STOP

	/**
	 * Starts recording
	 *
	 * @category 3) Recording
	 */
	export function startRecording() {
		SmartlookBridge.startRecording();
	}

	/**
	 * Stops recording
	 *
	 * @category 3) Recording
	 */
	export function stopRecording() {
		SmartlookBridge.stopRecording();
	}

	/**
	 * Returns current recording state
	 *
	 * @returns A promise fulfilled by current recording state boolean
	 * @category 3) Recording
	 */
	export async function isRecording(): Promise<boolean> {
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
	 * @category 4) Timed events
	 */
	export async function startTimedCustomEvent(
		eventName: string,
		eventProperties: Dictionary<string> = {},
	): Promise<string> {
		return SmartlookBridge.startTimedCustomEvent(eventName, eventProperties);
	}

	/**
	 * Stops a timed event.
	 *
	 * @param  eventId - eventId obtained from {@link startTimedCustomEvent}
	 * @param  eventProperties - properties are merged with the properties set in the {@link startTimedCustomEvent}
	 * @category 4) Timed events
	 */
	export function stopTimedCustomEvent(eventId: string, eventProperties: Dictionary<string> = {}) {
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
	 * @category 4) Timed events
	 */
	export function cancelTimedCustomEvent(name: string, reason: string, eventProperties: Dictionary<string> = {}) {
		SmartlookBridge.cancelTimedCustomEvent(name, reason, eventProperties);
	}

	/**
	 * Tracks custom event.
	 *
	 * @param  name
	 * @param  properties
	 * @category 5) Events
	 */
	export function trackCustomEvent(name: string, properties = {}) {
		SmartlookBridge.trackCustomEvent(name, properties);
	}

	/**
	 * Tracks navigation event.
	 *
	 * @param  screenName
	 * @param  viewState
	 * @category 5) Events
	 */
	export function trackNavigationEvent(screenName: string, viewState: Smartlook.ViewState) {
		SmartlookBridge.trackNavigationEvent(screenName, viewState);
	}

	// SENSITIVE

	/**
	 * @category 7) Sensitive views
	 */
	export function registerBlacklistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.registerBlacklistedView(findNodeHandle(ref));
	}

	/**
	 * @category 7) Sensitive views
	 */
	export function unregisterBlacklistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.unregisterBlacklistedView(findNodeHandle(ref));
	}

	/**
	 * @category 7) Sensitive views
	 */
	export function registerWhitelistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.registerWhitelistedView(findNodeHandle(ref));
	}

	/**
	 * @category 7) Sensitive views
	 */
	export function unregisterWhitelistedView(ref: ComponentOrHandle) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.unregisterWhitelistedView(findNodeHandle(ref));
	}

	/**
	 * @category 7) Sensitive views
	 */
	export function setViewIsSensitive(ref: ComponentOrHandle, isSensitive: boolean) {
		if (ref == null) {
			console.error(REF_NOT_INITIALIZED_ERROR);
			return;
		}

		SmartlookBridge.setViewIsSensitive(findNodeHandle(ref), isSensitive);
	}

	// GLOBAL EVENT PROPERTIES

	/**
	 * @category 5) Events
	 */
	export function removeAllGlobalEventProperties() {
		SmartlookBridge.removeAllGlobalEventProperties();
	}

	/**
	 * @category 5) Events
	 */
	export function removeGlobalEventProperty(key: string) {
		SmartlookBridge.removeGlobalEventProperty(key);
	}

	/**
	 * @category 5) Events
	 */
	export function setGlobalEventProperties(properties: {}, immutable = false) {
		SmartlookBridge.setGlobalEventProperties(properties, immutable);
	}

	/**
	 * @category 5) Events
	 */
	export function setGlobalEventProperty(key: string, value: string, immutable = false) {
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
	 * @category 8) Dashboard urls
	 */
	export async function getDashboardSessionUrl(withCurrentTimestamp = false): Promise<string> {
		return SmartlookBridge.getDashboardSessionUrl(withCurrentTimestamp);
	}

	/**
	 * A URL leading to the Smartlook Dashboard for a currently recorded visitor.
	 *
	 * @returns A promise fulfilled by a Smartlook Dashboard URL
	 * @category 8) Dashboard urls
	 */
	export async function getDashboardVisitorUrl(): Promise<string> {
		return SmartlookBridge.getDashboardVisitorUrl();
	}

	/**
	 * Set a custom referrer.
	 *
	 * @summary When an application is installed from the Google Play Store, Smartlook SDK automatically tracks install referrer.
	 * A custom referrer can also be set by using this function.
	 *
	 * @param  referrer
	 * @category 2) User
	 */
	export function setReferrer(referrer: string, source: string) {
		SmartlookBridge.setReferrer(referrer, source);
	}

	/**
	 * @category 8) Dashboard urls
	 */
	export function enableCrashlytics(enabled: boolean) {
		SmartlookBridge.enableCrashlytics(enabled);
	}

	/**
	 * @category 9) Other
	 */
	export function resetSession(resetUser: boolean) {
		SmartlookBridge.resetSession(resetUser);
	}

	/**
	 * @category 9) Other
	 */
	export function setRenderingMode(renderingMode: Smartlook.RenderingMode) {
		SmartlookBridge.setRenderingMode(renderingMode);
	}

	/**
	 * Set event tracking mode.
	 *
	 * @summary It can be beneficial to disable some automatically detected events due to security or usability reasons.
	 * This can be done using event tracking modes
	 *
	 * @param  eventTrackingMode
	 * @category 5) Events
	 */
	export function setEventTrackingMode(eventTrackingMode: Smartlook.EventTrackingMode) {
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
	 * @category 5) Events
	 */
	export function setEventTrackingModes(eventTrackingModes: Smartlook.EventTrackingMode[]) {
		if (!(Symbol.iterator in Object(eventTrackingModes))) return;
		for (const value of eventTrackingModes) {
			if (!Object.values(Smartlook.EventTrackingMode).includes(value)) return;
		}

		SmartlookBridge.setEventTrackingModes(eventTrackingModes);
	}

	/**
	 * @category 8) Dashboard urls
	 */
	export function registerIntegrationListener(
		dashboardSessionUrlCallback: (url: string) => void,
		dashboardVisitorUrlCallback: (url: string) => void,
	) {
		const eventEmitter = new NativeEventEmitter(SmartlookBridge);
		eventListener = eventEmitter.addListener('integrationCallback', ({ dashboardVisitorUrl, dashboardSessionUrl }) => {
			if (dashboardVisitorUrl) {
				dashboardVisitorUrlCallback(dashboardVisitorUrl);
			}

			if (dashboardSessionUrl) {
				dashboardSessionUrlCallback(dashboardSessionUrl);
			}
		});
		SmartlookBridge.registerIntegrationListener();
	}

	/**
	 * @category 8) Dashboard urls
	 */
	export function unregisterIntegrationListener() {
		SmartlookBridge.unregisterIntegrationListener();
		eventListener.remove();
	}
}

export namespace Smartlook {
	export interface SetupOptions {
		smartlookAPIKey: string;
		fps?: number;
		startNewSession?: boolean;
		startNewSessionAndUser?: boolean;
		/**
		 * @ignore
		 */
		sdk_framework?: string;
		/**
		 * @ignore
		 */
		sdk_framework_version?: string;
		/**
		 * @ignore
		 */
		sdk_framework_plugin_version?: string;
		/**
		 * @ignore
		 */
		_exampleApp?: boolean;
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
