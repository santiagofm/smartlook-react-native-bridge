smartlook-react-native-wrapper

# smartlook-react-native-wrapper

## Table of contents

### Namespaces

- [Smartlook](modules/smartlook.md)

### Variables

- [SmartlookSensitiveComponent](README.md#smartlooksensitivecomponent)

### Functions

- [useSmartlookSensitiveRef](README.md#usesmartlooksensitiveref)

## Variables

### SmartlookSensitiveComponent

• `Const` **SmartlookSensitiveComponent**: *ForwardRefExoticComponent*<SmartlookSensitiveComponentProps & *RefAttributes*<View\>\>

**`summary`** SmartlookSensitiveComponent can be used to wrap the component which should be marked as sensitive or vice versa not sensitive.
 Just be sure that you are not passing functional components as children! Eg. wrap it to React.forwardRef first.

**`example`**
```typescript
<SmartlookSensitiveComponent isSensitive={true}>
	<Button title="Blacklisted button" />
</SmartlookSensitiveComponent>
```

Defined in: [SmartlookSensitiveComponent.tsx:22](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/SmartlookSensitiveComponent.tsx#L22)

## Functions

### useSmartlookSensitiveRef

▸ **useSmartlookSensitiveRef**<T\>(`isSensitive?`: *boolean*): *React.MutableRefObject*<T \| ``null``\>

**`summary`** custom hook designed to replace `useRef`.
Use the `isSensitive` parameter to explicitly control the view sensitivity.

**`example`**
```typescript
import { WebView } from 'react-native-webview';
import { useSmartlookSensitiveRef } from 'smartlook-react-native-wrapper';

function MyScreen({ isWebViewSensitive = false }) {
	const ref = useSmartlookSensitiveRef<WebView>(isWebViewSensitive);

	return <WebView ref={ref} source={{ html: "..." }} />;
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isSensitive` | *boolean* | true |

**Returns:** *React.MutableRefObject*<T \| ``null``\>

Defined in: [hooks/useSmartlookSensitiveRef.ts:21](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/hooks/useSmartlookSensitiveRef.ts#L21)
