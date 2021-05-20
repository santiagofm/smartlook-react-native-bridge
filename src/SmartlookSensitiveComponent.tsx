import React from 'react';
import type { View } from 'react-native';
import composeRefs from '@seznam/compose-react-refs';
import useSmartlookSensitiveRef from './hooks/useSmartlookSensitiveRef';

export interface SmartlookSensitiveComponentProps {
	children: React.ComponentPropsWithRef<any>;
	isSensitive?: boolean;
}

/**
 * @summary SmartlookSensitiveComponent can be used to wrap the component which should be marked as sensitive or vice versa not sensitive.
 *  Just be sure that you are not passing functional components as children! Eg. wrap it to React.forwardRef first.
 *
 * @example
 * ```typescript
 * <SmartlookSensitiveComponent isSensitive={true}>
 * 	<Button title="Blacklisted button" />
 * </SmartlookSensitiveComponent>
 * ```
 */
const SmartlookSensitiveComponent = React.forwardRef<View, SmartlookSensitiveComponentProps>(
	({ children, isSensitive = true, ...otherProps }: SmartlookSensitiveComponentProps, forwardedRef) => {
		const sensitiveRef = useSmartlookSensitiveRef<typeof children>(isSensitive);
		const ref = composeRefs(sensitiveRef, forwardedRef);

		const onlyChild = React.Children.only(children);

		if (typeof onlyChild.type === 'function') {
			throw Error('Please pass valid non functional component eg. use React.forwardRef(). See URL for examples.'); // TODO: add URL of examples
		}

		return React.cloneElement(onlyChild, { ref, collapsable: false, ...otherProps });
	},
);

SmartlookSensitiveComponent.displayName = 'SmartlookSensitiveComponent';

export default SmartlookSensitiveComponent;
