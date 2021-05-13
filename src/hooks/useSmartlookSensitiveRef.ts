import React, { useEffect, useRef } from 'react';
import Smartlook from '../Smartlook';

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
