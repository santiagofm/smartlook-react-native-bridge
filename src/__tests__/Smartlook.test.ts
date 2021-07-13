import { NativeModules } from 'react-native';
import Smartlook from '..';

const { RNSmartlook } = NativeModules;

const MOCKED_API_KEY = 'AAAAAAAAAAAA';

const REACT_NATIVE_VERSION = require('react-native/package.json').version;
const SMARTLOOK_VERSION = require('smartlook-react-native-wrapper/package.json').version;

const SDK_CONFIG = { smartlookAPIKey: MOCKED_API_KEY };

describe('setup', () => {
	it('should call setup method of the bridge with provided API key string', () => {
		Smartlook.setup(MOCKED_API_KEY);
		expect(RNSmartlook.setup).toBeCalledWith({
			smartlookAPIKey: MOCKED_API_KEY,
			_reactNativeVersion: REACT_NATIVE_VERSION,
			_smartlookPluginVersion: SMARTLOOK_VERSION,
		});
	});

	it('should call setup method of the bridge with dict config param', () => {
		Smartlook.setup(SDK_CONFIG);
		expect(RNSmartlook.setup).toBeCalledTimes(1);
		expect(RNSmartlook.setup).toBeCalledWith({
			...SDK_CONFIG,
			_reactNativeVersion: REACT_NATIVE_VERSION,
			_smartlookPluginVersion: SMARTLOOK_VERSION,
		});
	});
});

describe('setupAndStartRecording', () => {
	it('should call setup method of the bridge with provided API key string', () => {
		Smartlook.setupAndStartRecording(MOCKED_API_KEY);
		expect(RNSmartlook.setupAndStartRecording).toBeCalledWith({
			smartlookAPIKey: MOCKED_API_KEY,
			_reactNativeVersion: REACT_NATIVE_VERSION,
			_smartlookPluginVersion: SMARTLOOK_VERSION,
		});
	});

	it('should call setup method of the bridge with dict config param', () => {
		Smartlook.setupAndStartRecording(SDK_CONFIG);
		expect(RNSmartlook.setupAndStartRecording).toBeCalledWith({
			...SDK_CONFIG,
			_reactNativeVersion: REACT_NATIVE_VERSION,
			_smartlookPluginVersion: SMARTLOOK_VERSION,
		});
	});
});

const USER_ID = '1';
const PROPERTIES = { userName: 'random' };
const EVENT_NAME = 'TIMED_EVENT';
const REASON = 'CANCELLATION_REASON';
const SCREEN_NAME = 'SCREEN';
const NAVIGATION_TYPE = Smartlook.ViewState.Enter;
const KEY = 'KEY';
const VALUE = 'VALUE';
const URL = 'URL';

describe('one line methods', () => {
	it('should call the underlaying native function with right params', () => {
		Smartlook.setUserIdentifier(USER_ID);
		expect(RNSmartlook.setUserIdentifier).toHaveBeenLastCalledWith(USER_ID, {});

		Smartlook.setUserIdentifier(USER_ID, PROPERTIES);
		expect(RNSmartlook.setUserIdentifier).toBeCalledWith(USER_ID, PROPERTIES);

		Smartlook.trackCustomEvent(EVENT_NAME, PROPERTIES);
		expect(RNSmartlook.trackCustomEvent).toBeCalledWith(EVENT_NAME, PROPERTIES);

		Smartlook.trackNavigationEvent(SCREEN_NAME, NAVIGATION_TYPE);
		expect(RNSmartlook.trackNavigationEvent).toBeCalledWith(SCREEN_NAME, NAVIGATION_TYPE);
	});
});

describe('recording control methods', () => {
	it('should call the underlaying native function with right params', () => {
		Smartlook.startRecording();
		expect(RNSmartlook.startRecording).toBeCalledTimes(1);
		Smartlook.stopRecording();
		expect(RNSmartlook.stopRecording).toBeCalledTimes(1);
	});
	it('should resolve with true', async () => {
		const isRecording = await Smartlook.isRecording();
		expect(isRecording).toBe(true);
	});
});

describe('timed custom events methods', () => {
	it('should call the underlaying native function with right params', () => {
		Smartlook.stopTimedCustomEvent(EVENT_NAME, PROPERTIES);
		expect(RNSmartlook.stopTimedCustomEvent).toBeCalledWith(EVENT_NAME, PROPERTIES);
		Smartlook.cancelTimedCustomEvent(EVENT_NAME, REASON, PROPERTIES);
		expect(RNSmartlook.cancelTimedCustomEvent).toBeCalledWith(EVENT_NAME, REASON, PROPERTIES);
	});
	it('should resolve with key string', async () => {
		const key = await Smartlook.startTimedCustomEvent(EVENT_NAME, PROPERTIES);
		expect(RNSmartlook.startTimedCustomEvent).toBeCalledWith(EVENT_NAME, PROPERTIES);
		expect(key).toBe(KEY);
	});
});

describe('sensitive views handling methods', () => {
	it('should call the underlaying native function with right params', () => {
		Smartlook.registerBlacklistedView(null);
		expect(RNSmartlook.registerBlacklistedView).toBeCalledTimes(0);

		Smartlook.registerBlacklistedView(1);
		expect(RNSmartlook.registerBlacklistedView).toBeCalledTimes(1);
		expect(RNSmartlook.registerBlacklistedView).toBeCalledWith(1);

		Smartlook.unregisterBlacklistedView(null);
		expect(RNSmartlook.unregisterBlacklistedView).toBeCalledTimes(0);

		Smartlook.unregisterBlacklistedView(1);
		expect(RNSmartlook.unregisterBlacklistedView).toBeCalledTimes(1);
		expect(RNSmartlook.unregisterBlacklistedView).toBeCalledWith(1);

		Smartlook.registerWhitelistedView(null);
		expect(RNSmartlook.registerWhitelistedView).toBeCalledTimes(0);

		Smartlook.registerWhitelistedView(1);
		expect(RNSmartlook.registerWhitelistedView).toBeCalledTimes(1);
		expect(RNSmartlook.registerWhitelistedView).toBeCalledWith(1);

		Smartlook.unregisterWhitelistedView(null);
		expect(RNSmartlook.unregisterWhitelistedView).toBeCalledTimes(0);

		Smartlook.unregisterWhitelistedView(1);
		expect(RNSmartlook.unregisterWhitelistedView).toBeCalledTimes(1);
		expect(RNSmartlook.unregisterWhitelistedView).toBeCalledWith(1);
	});
});

describe('global event properties handling methods', () => {
	it('should call the underlaying native function with right params', () => {
		Smartlook.removeAllGlobalEventProperties();
		expect(RNSmartlook.removeAllGlobalEventProperties).toBeCalledTimes(1);

		Smartlook.removeGlobalEventProperty(KEY);
		expect(RNSmartlook.removeGlobalEventProperty).toBeCalledTimes(1);
		expect(RNSmartlook.removeGlobalEventProperty).toBeCalledWith(KEY);

		Smartlook.setGlobalEventProperties(KEY, true);
		expect(RNSmartlook.setGlobalEventProperties).toBeCalledTimes(1);
		expect(RNSmartlook.setGlobalEventProperties).toBeCalledWith(KEY, true);

		Smartlook.setGlobalEventProperty(KEY, VALUE, true);
		expect(RNSmartlook.setGlobalEventProperty).toBeCalledTimes(1);
		expect(RNSmartlook.setGlobalEventProperty).toBeCalledWith(KEY, VALUE, true);
	});
});

describe('dashboard urls methods', () => {
	describe('getDashboardSessionUrl', () => {
		it('should resolve with URL', async () => {
			const url = await Smartlook.getDashboardSessionUrl(true);
			expect(RNSmartlook.getDashboardSessionUrl).toBeCalledTimes(1);
			expect(RNSmartlook.getDashboardSessionUrl).toBeCalledWith(true);
			expect(url).toBe(URL);
		});
	});

	describe('getDashboardVisitorUrl', () => {
		it('should resolve with URL', async () => {
			const url = await Smartlook.getDashboardVisitorUrl();
			expect(RNSmartlook.getDashboardVisitorUrl).toBeCalledTimes(1);
			expect(url).toBe(URL);
		});
	});
});

describe('other methods', () => {
	it('should call the underlaying native function with right params', () => {
		const REFERRER = 'REFERRER';
		const SOURCE = 'SOURCE';
		Smartlook.setReferrer(REFERRER, SOURCE);
		expect(RNSmartlook.setReferrer).toBeCalledTimes(1);
		expect(RNSmartlook.setReferrer).toBeCalledWith(REFERRER, SOURCE);

		Smartlook.enableCrashlytics(true);
		expect(RNSmartlook.enableCrashlytics).toBeCalledTimes(1);
		expect(RNSmartlook.enableCrashlytics).toBeCalledWith(true);

		Smartlook.resetSession(true);
		expect(RNSmartlook.resetSession).toBeCalledTimes(1);
		expect(RNSmartlook.resetSession).toBeCalledWith(true);

		const MODE = Smartlook.RenderingMode.Wireframe;
		Smartlook.setRenderingMode(MODE);
		expect(RNSmartlook.setRenderingMode).toBeCalledTimes(1);
		expect(RNSmartlook.setRenderingMode).toBeCalledWith(MODE);
	});
});

describe('event tracking methods', () => {
	const MODES = [
		Smartlook.EventTrackingMode.IgnoreUserInteraction,
		Smartlook.EventTrackingMode.IgnoreNavigationInteraction,
	];
	describe('setEventTrackingMode', () => {
		it('should not call native method', () => {
			// @ts-expect-error
			Smartlook.setEventTrackingMode('BAD_PARAM');
			expect(RNSmartlook.setEventTrackingMode).toBeCalledTimes(0);
		});

		it('should call native method with param', () => {
			Smartlook.setEventTrackingMode(MODES[0]);
			expect(RNSmartlook.setEventTrackingMode).toBeCalledTimes(1);
			expect(RNSmartlook.setEventTrackingMode).toBeCalledWith(MODES[0]);
		});
	});
	describe('setEventTrackingModes', () => {
		it('should not call native method', () => {
			// @ts-expect-error
			Smartlook.setEventTrackingModes();
			expect(RNSmartlook.setEventTrackingModes).toBeCalledTimes(0);

			// @ts-expect-error
			Smartlook.setEventTrackingModes(['BAD_PARAM']);
			expect(RNSmartlook.setEventTrackingModes).toBeCalledTimes(0);
		});

		it('should call native method with param', () => {
			Smartlook.setEventTrackingModes(MODES);
			expect(RNSmartlook.setEventTrackingModes).toBeCalledTimes(1);
			expect(RNSmartlook.setEventTrackingModes).toBeCalledWith(MODES);
		});
	});
});
