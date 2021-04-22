jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => {
	return {
		RNSmartlook: {
			setup: jest.fn(),
			setupAndStartRecording: jest.fn(),
			setUserIdentifier: jest.fn(),

			startRecording: jest.fn(),
			stopRecording: jest.fn(),
			isRecording: jest.fn(() => Promise.resolve(true)),

			startTimedCustomEvent: jest.fn(() => Promise.resolve('KEY')),
			stopTimedCustomEvent: jest.fn(),
			cancelTimedCustomEvent: jest.fn(),

			trackCustomEvent: jest.fn(),
			trackNavigationEvent: jest.fn(),

			startFullscreenSensitiveMode: jest.fn(),
			stopFullscreenSensitiveMode: jest.fn(),
			isFullscreenSensitiveModeActive: jest.fn(() => Promise.resolve(false)),

			registerBlacklistedView: jest.fn(),
			unregisterBlacklistedView: jest.fn(),
			registerWhitelistedView: jest.fn(),
			unregisterWhitelistedView: jest.fn(),

			removeAllGlobalEventProperties: jest.fn(),
			removeGlobalEventProperty: jest.fn(),
			setGlobalEventProperties: jest.fn(),
			setGlobalEventProperty: jest.fn(),

			getDashboardSessionUrl: jest.fn(() => Promise.resolve('URL')),
			getDashboardVisitorUrl: jest.fn(() => Promise.resolve('URL')),

			setReferrer: jest.fn(),
			enableCrashlytics: jest.fn(),
			resetSession: jest.fn(),
			setRenderingMode: jest.fn(),
			setEventTrackingMode: jest.fn(),
			setEventTrackingModes: jest.fn(),

			registerIntegrationListener: jest.fn(),
			unregisterIntegrationListener: jest.fn(),
		},
	};
});

jest.mock('react-native', () => {
	const RN = jest.requireActual('react-native');

	RN.UIManager.getViewManagerConfig = (name) => {
		return {};
	};

	Object.defineProperty(RN, 'findNodeHandle', {
		get: jest.fn(() => () => 1),
		set: jest.fn(),
	});

	return RN;
});
