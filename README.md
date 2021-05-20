<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [README](#readme)
  - [smartlook-react-native-wrapper](#smartlook-react-native-wrapper)
    - [Table of contents](#table-of-contents)
    - [Modules](#modules)
      - [Smartlook](#smartlook)
        - [Namespace: Smartlook](#namespace-smartlook)
    - [Variables](#variables)
    - [Functions](#functions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# README

For further info visit https://smartlook.github.io/docs/sdk/react-native/.
## smartlook-react-native-wrapper

### Table of contents

#### Namespaces

- [Smartlook](#smartlook)

#### Variables

- [SmartlookSensitiveComponent](#smartlooksensitivecomponent)

#### Functions

- [useSmartlookSensitiveRef](#usesmartlooksensitiveref)

# Modules

## Smartlook

[smartlook-react-native-wrapper](#readme) / Smartlook

### Namespace: Smartlook

The main Smartlook SDK wrapper.

#### Table of contents

##### Enumerations

- [EventTrackingMode](docs/enums/smartlook.eventtrackingmode.md)
- [RenderingMode](docs/enums/smartlook.renderingmode.md)
- [SensitivityType](docs/enums/smartlook.sensitivitytype.md)
- [ViewState](docs/enums/smartlook.viewstate.md)

##### Interfaces

- [SetupOptions](docs/interfaces/smartlook.setupoptions.md)

##### 1) Setup Functions

- [setup](#setup)
- [setupAndStartRecording](#setupandstartrecording)

##### 2) User Functions

- [setReferrer](#setreferrer)
- [setUserIdentifier](#setuseridentifier)

##### 3) Recording Functions

- [isRecording](#isrecording)
- [startRecording](#startrecording)
- [stopRecording](#stoprecording)

##### 4) Timed events Functions

- [cancelTimedCustomEvent](#canceltimedcustomevent)
- [startTimedCustomEvent](#starttimedcustomevent)
- [stopTimedCustomEvent](#stoptimedcustomevent)

##### 5) Events Functions

- [removeAllGlobalEventProperties](#removeallglobaleventproperties)
- [removeGlobalEventProperty](#removeglobaleventproperty)
- [setEventTrackingMode](#seteventtrackingmode)
- [setEventTrackingModes](#seteventtrackingmodes)
- [setGlobalEventProperties](#setglobaleventproperties)
- [setGlobalEventProperty](#setglobaleventproperty)
- [trackCustomEvent](#trackcustomevent)
- [trackNavigationEvent](#tracknavigationevent)

##### 6) Fullscreen sensitive mode Functions

- [isFullscreenSensitiveModeActive](#isfullscreensensitivemodeactive)
- [startFullscreenSensitiveMode](#startfullscreensensitivemode)
- [stopFullscreenSensitiveMode](#stopfullscreensensitivemode)

##### 7) Sensitive views Functions

- [registerBlacklistedView](#registerblacklistedview)
- [registerWhitelistedView](#registerwhitelistedview)
- [setViewIsSensitive](#setviewissensitive)
- [unregisterBlacklistedView](#unregisterblacklistedview)
- [unregisterWhitelistedView](#unregisterwhitelistedview)

##### 8) Dashboard urls Functions

- [enableCrashlytics](#enablecrashlytics)
- [getDashboardSessionUrl](#getdashboardsessionurl)
- [getDashboardVisitorUrl](#getdashboardvisitorurl)
- [registerIntegrationListener](#registerintegrationlistener)
- [unregisterIntegrationListener](#unregisterintegrationlistener)

##### 9) Other Functions

- [resetSession](#resetsession)
- [setRenderingMode](#setrenderingmode)

#### 1) Setup Functions

##### setup

▸ **setup**(`optionsOrAPIKey`: [*SetupOptions*](docs/interfaces/smartlook.setupoptions.md) \| *string*): *void*

Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())

###### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | [*SetupOptions*](docs/interfaces/smartlook.setupoptions.md) \| *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:35](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L35)

___

##### setupAndStartRecording

▸ **setupAndStartRecording**(`optionsOrAPIKey`: [*SetupOptions*](docs/interfaces/smartlook.setupoptions.md) \| *string*): *void*

Setup and start Smartlook SDK recording.

###### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | [*SetupOptions*](docs/interfaces/smartlook.setupoptions.md) \| *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:58](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L58)

___

#### 2) User Functions

##### setReferrer

▸ **setReferrer**(`referrer`: *string*, `source`: *string*): *void*

Set a custom referrer.

**`summary`** When an application is installed from the Google Play Store, Smartlook SDK automatically tracks install referrer.
A custom referrer can also be set by using this function.

###### Parameters

| Name | Type |
| :------ | :------ |
| `referrer` | *string* |
| `source` | *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:371](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L371)

___

##### setUserIdentifier

▸ **setUserIdentifier**(`userIdentifier`: *string*, `userProperties?`: {}): *void*

Sets a user identifier with optional dictionary of user properties

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userIdentifier` | *string* | - |
| `userProperties` | *object* | {} |

**Returns:** *void*

Defined in: [Smartlook.ts:79](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L79)

___

#### 3) Recording Functions

##### isRecording

▸ **isRecording**(): *Promise*<boolean\>

Returns current recording state

**Returns:** *Promise*<boolean\>

A promise fulfilled by current recording state boolean

Defined in: [Smartlook.ts:112](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L112)

___

##### startRecording

▸ **startRecording**(): *void*

Starts recording

**Returns:** *void*

Defined in: [Smartlook.ts:91](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L91)

___

##### stopRecording

▸ **stopRecording**(): *void*

Stops recording

**Returns:** *void*

Defined in: [Smartlook.ts:101](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L101)

___

#### 4) Timed events Functions

##### cancelTimedCustomEvent

▸ **cancelTimedCustomEvent**(`name`: *string*, `reason`: *string*, `eventProperties?`: *Dictionary*<string\>): *void*

Cancels a timed event.

**`summary`** In case a given action failed this function is called instead of [stopTimedCustomEvent](#stoptimedcustomevent).

###### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | *string* | - | - |
| `reason` | *string* | - | reason of failure |
| `eventProperties` | *Dictionary*<string\> | {} | properties are merged with the properties set in the [startTimedCustomEvent](#starttimedcustomevent) |

**Returns:** *void*

Defined in: [Smartlook.ts:170](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L170)

___

##### startTimedCustomEvent

▸ **startTimedCustomEvent**(`eventName`: *string*, `eventProperties?`: *Dictionary*<string\>): *Promise*<string\>

Starts a timed event.

**`summary`** Timed events can be used for measuring duration of any time-sensitive or long-running actions in the application.
This will not send out any events but will return a Promise which will resolve with unique eventId
that needs to be stored, and it is then used to stop/cancel a custom timed event.

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventName` | *string* | - |
| `eventProperties` | *Dictionary*<string\> | {} |

**Returns:** *Promise*<string\>

A promise fulfilled by unique eventId

Defined in: [Smartlook.ts:134](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L134)

___

##### stopTimedCustomEvent

▸ **stopTimedCustomEvent**(`eventId`: *string*, `eventProperties?`: *Dictionary*<string\>): *void*

Stops a timed event.

###### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventId` | *string* | - | eventId obtained from [startTimedCustomEvent](#starttimedcustomevent) |
| `eventProperties` | *Dictionary*<string\> | {} | properties are merged with the properties set in the [startTimedCustomEvent](#starttimedcustomevent) |

**Returns:** *void*

Defined in: [Smartlook.ts:152](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L152)

___

#### 5) Events Functions

##### removeAllGlobalEventProperties

▸ **removeAllGlobalEventProperties**(): *void*

**Returns:** *void*

Defined in: [Smartlook.ts:304](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L304)

___

##### removeGlobalEventProperty

▸ **removeGlobalEventProperty**(`key`: *string*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:312](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L312)

___

##### setEventTrackingMode

▸ **setEventTrackingMode**(`eventTrackingMode`: [*EventTrackingMode*](docs/enums/smartlook.eventtrackingmode.md)): *void*

Set event tracking mode.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingMode` | [*EventTrackingMode*](docs/enums/smartlook.eventtrackingmode.md) |

**Returns:** *void*

Defined in: [Smartlook.ts:409](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L409)

___

##### setEventTrackingModes

▸ **setEventTrackingModes**(`eventTrackingModes`: [*EventTrackingMode*](docs/enums/smartlook.eventtrackingmode.md)[]): *void*

Set event tracking modes.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingModes` | [*EventTrackingMode*](docs/enums/smartlook.eventtrackingmode.md)[] |

**Returns:** *void*

Defined in: [Smartlook.ts:424](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L424)

___

##### setGlobalEventProperties

▸ **setGlobalEventProperties**(`properties`: {}, `immutable?`: *boolean*): *void*

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | *object* | - |
| `immutable` | *boolean* | false |

**Returns:** *void*

Defined in: [Smartlook.ts:322](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L322)

___

##### setGlobalEventProperty

▸ **setGlobalEventProperty**(`key`: *string*, `value`: *string*, `immutable?`: *boolean*): *void*

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | *string* | - |
| `value` | *string* | - |
| `immutable` | *boolean* | false |

**Returns:** *void*

Defined in: [Smartlook.ts:330](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L330)

___

##### trackCustomEvent

▸ **trackCustomEvent**(`name`: *string*, `properties?`: {}): *void*

Tracks custom event.

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | *string* | - |
| `properties` | *object* | {} |

**Returns:** *void*

Defined in: [Smartlook.ts:185](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L185)

___

##### trackNavigationEvent

▸ **trackNavigationEvent**(`screenName`: *string*, `viewState`: [*ViewState*](docs/enums/smartlook.viewstate.md)): *void*

Tracks navigation event.

###### Parameters

| Name | Type |
| :------ | :------ |
| `screenName` | *string* |
| `viewState` | [*ViewState*](docs/enums/smartlook.viewstate.md) |

**Returns:** *void*

Defined in: [Smartlook.ts:197](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L197)

___

#### 6) Fullscreen sensitive mode Functions

##### isFullscreenSensitiveModeActive

▸ **isFullscreenSensitiveModeActive**(): *Promise*<boolean\>

Returns true if fullscreen sensitive mode is active

**Returns:** *Promise*<boolean\>

A promise fulfilled by true if fullscreen sensitive mode is active

Defined in: [Smartlook.ts:230](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L230)

___

##### startFullscreenSensitiveMode

▸ **startFullscreenSensitiveMode**(): *void*

Starts fullscreen sensitive mode

**Returns:** *void*

Defined in: [Smartlook.ts:209](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L209)

___

##### stopFullscreenSensitiveMode

▸ **stopFullscreenSensitiveMode**(): *void*

Stops fullscreen sensitive mode

**Returns:** *void*

Defined in: [Smartlook.ts:219](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L219)

___

#### 7) Sensitive views Functions

##### registerBlacklistedView

▸ **registerBlacklistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:238](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L238)

___

##### registerWhitelistedView

▸ **registerWhitelistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:264](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L264)

___

##### setViewIsSensitive

▸ **setViewIsSensitive**(`ref`: ComponentOrHandle, `isSensitive`: *boolean*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |
| `isSensitive` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:289](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L289)

___

##### unregisterBlacklistedView

▸ **unregisterBlacklistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:251](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L251)

___

##### unregisterWhitelistedView

▸ **unregisterWhitelistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:277](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L277)

___

#### 8) Dashboard urls Functions

##### enableCrashlytics

▸ **enableCrashlytics**(`enabled`: *boolean*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:379](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L379)

___

##### getDashboardSessionUrl

▸ **getDashboardSessionUrl**(`withCurrentTimestamp?`: *boolean*): *Promise*<string\>

Returns a URL leading to the Smartlook Dashboard for a currently recorded session.

###### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withCurrentTimestamp` | *boolean* | false | If withCurrentTimestamp is set to true link it will include information about the current recording timestamp. This will ensure that the player will start playing the session at the moment when getDashboardSessionUrl was called. |

**Returns:** *Promise*<string\>

A promise fulfilled by a Smartlook Dashboard URL

Defined in: [Smartlook.ts:346](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L346)

___

##### getDashboardVisitorUrl

▸ **getDashboardVisitorUrl**(): *Promise*<string\>

A URL leading to the Smartlook Dashboard for a currently recorded visitor.

**Returns:** *Promise*<string\>

A promise fulfilled by a Smartlook Dashboard URL

Defined in: [Smartlook.ts:357](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L357)

___

##### registerIntegrationListener

▸ **registerIntegrationListener**(`dashboardSessionUrlCallback`: (`url`: *string*) => *void*, `dashboardVisitorUrlCallback`: (`url`: *string*) => *void*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `dashboardSessionUrlCallback` | (`url`: *string*) => *void* |
| `dashboardVisitorUrlCallback` | (`url`: *string*) => *void* |

**Returns:** *void*

Defined in: [Smartlook.ts:438](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L438)

___

##### unregisterIntegrationListener

▸ **unregisterIntegrationListener**(): *void*

**Returns:** *void*

Defined in: [Smartlook.ts:459](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L459)

___

#### 9) Other Functions

##### resetSession

▸ **resetSession**(`resetUser`: *boolean*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `resetUser` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:387](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L387)

___

##### setRenderingMode

▸ **setRenderingMode**(`renderingMode`: [*RenderingMode*](docs/enums/smartlook.renderingmode.md)): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `renderingMode` | [*RenderingMode*](docs/enums/smartlook.renderingmode.md) |

**Returns:** *void*

Defined in: [Smartlook.ts:395](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/Smartlook.ts#L395)


### Variables

#### SmartlookSensitiveComponent

• `Const` **SmartlookSensitiveComponent**: *ForwardRefExoticComponent*<SmartlookSensitiveComponentProps & *RefAttributes*<View\>\>

**`summary`** SmartlookSensitiveComponent can be used to wrap the component which should be marked as sensitive or vice versa not sensitive.
 Just be sure that you are not passing functional components as children! Eg. wrap it to React.forwardRef first.

**`example`**
```typescript
<SmartlookSensitiveComponent isSensitive={true}>
	<Button title="Blacklisted button" />
</SmartlookSensitiveComponent>
```

Defined in: [SmartlookSensitiveComponent.tsx:22](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/SmartlookSensitiveComponent.tsx#L22)

### Functions

#### useSmartlookSensitiveRef

▸ **useSmartlookSensitiveRef**<T\>(`isSensitive?`: *boolean*): *React.MutableRefObject*<T \| ``null``\>

**`summary`** custom hook designed to replace `useRef`.
Use the `isSensitive` parameter to explicitly control the view sensitivity.

**`example`**
```typescript
import { WebView } from 'react-native-webview';
import { useSmartlookSensitiveRef } from 'smartlook-react-native-wrapper';

function MyScreen({ isWebViewSensitive = false }) {
	const ref = useSmartlookSensitiveRef<WebView>(isWebViewSensitive);

	return <WebView ref={ref} source={{ html: "docs." }} />;
}
```

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isSensitive` | *boolean* | true |

**Returns:** *React.MutableRefObject*<T \| ``null``\>

Defined in: [hooks/useSmartlookSensitiveRef.ts:21](https://github.com/smartlook/smartlook-react-native-bridge/blob/0fc4495/src/hooks/useSmartlookSensitiveRef.ts#L21)

