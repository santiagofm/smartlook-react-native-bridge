import type React from 'react';

export type ComponentOrHandle = null | number | React.Component<any, any> | React.ComponentClass<any>;

export interface Dictionary<T> {
	[key: string]: T;
}
