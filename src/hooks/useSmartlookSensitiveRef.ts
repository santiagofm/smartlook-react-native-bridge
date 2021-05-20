import React, { useEffect, useRef } from 'react';
import { Smartlook } from '../Smartlook';

/**
 * @summary custom hook designed to replace `useRef`.
 * Use the `isSensitive` parameter to explicitly control the view sensitivity.
 *
 * @example
 * ```typescript
 * import { WebView } from 'react-native-webview';
 * import { useSmartlookSensitiveRef } from 'smartlook-react-native-wrapper';
 *
 * function MyScreen({ isWebViewSensitive = false }) {
 *	const ref = useSmartlookSensitiveRef<WebView>(isWebViewSensitive);
 *
 *	return <WebView ref={ref} source={{ html: "..." }} />;
 * }
 * ```
 */

function useSmartlookSensitiveRef<T>(isSensitive = true): React.MutableRefObject<T | null> {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			Smartlook.setViewIsSensitive(ref.current, isSensitive);
		}
	}, [isSensitive, ref]);

	return ref;
}

export default useSmartlookSensitiveRef;
