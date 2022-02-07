<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [README](#readme)
  - [smartlook-react-native-wrapper](#smartlook-react-native-wrapper)
    - [Table of contents](#table-of-contents)
    - [Variables](#variables)
    - [Functions](#functions)
- [Enums](#enums)
  - [Smartlook Event Tracking Mode](#smartlook-event-tracking-mode)
    - [Enumeration: EventTrackingMode](#enumeration-eventtrackingmode)
  - [Smartlook Rendering Mode](#smartlook-rendering-mode)
    - [Enumeration: RenderingMode](#enumeration-renderingmode)
  - [Smartlook Sensitivity Type](#smartlook-sensitivity-type)
    - [Enumeration: SensitivityType](#enumeration-sensitivitytype)
  - [Smartlook View State](#smartlook-view-state)
    - [Enumeration: ViewState](#enumeration-viewstate)
- [Interfaces](#interfaces)
  - [Smartlook Setup Options](#smartlook-setup-options)
    - [Interface: SetupOptions](#interface-setupoptions)
- [Modules](#modules)
  - [Smartlook](#smartlook)
    - [Namespace: Smartlook](#namespace-smartlook)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# README

smartlook-react-native-wrapper

## smartlook-react-native-wrapper

### Table of contents

#### Namespaces

- [Smartlook](#smartlook)

#### Variables

- [SmartlookSensitiveComponent](#smartlooksensitivecomponent)

#### Functions

- [useSmartlookSensitiveRef](#usesmartlooksensitiveref)

### Variables

#### SmartlookSensitiveComponent

• **SmartlookSensitiveComponent**: `ForwardRefExoticComponent`<`SmartlookSensitiveComponentProps` & `RefAttributes`<`View`\>\>

**`summary`** SmartlookSensitiveComponent can be used to wrap the component which should be marked as sensitive or vice versa not sensitive.
 Just be sure that you are not passing functional components as children! Eg. wrap it to React.forwardRef first.

**`example`**
```typescript
<SmartlookSensitiveComponent isSensitive={true}>
	<Button title="Blacklisted button" />
</SmartlookSensitiveComponent>
```

##### Defined in

[SmartlookSensitiveComponent.tsx:22](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/SmartlookSensitiveComponent.tsx#L22)

### Functions

#### useSmartlookSensitiveRef

▸ **useSmartlookSensitiveRef**<`T`\>(`isSensitive?`): `React.MutableRefObject`<`T` \| ``null``\>

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
| `isSensitive` | `boolean` | `true` |

##### Returns

`React.MutableRefObject`<`T` \| ``null``\>

##### Defined in

[hooks/useSmartlookSensitiveRef.ts:21](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/hooks/useSmartlookSensitiveRef.ts#L21)

# Enums

## Smartlook Event Tracking Mode

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / EventTrackingMode

### Enumeration: EventTrackingMode

[Smartlook](#smartlook).EventTrackingMode

#### Table of contents

##### Enumeration members

- [FullTracking](#fulltracking)
- [IgnoreNavigationInteraction](#ignorenavigationinteraction)
- [IgnoreRageClicks](#ignorerageclicks)
- [IgnoreUserInteraction](#ignoreuserinteraction)
- [NoTracking](#notracking)

#### Enumeration members

##### FullTracking

• **FullTracking** = `"FULL_TRACKING"`

Default state. SDK tracks all automatically detected events along with all user defined events.

###### Defined in

[Smartlook.ts:427](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L427)

___

##### IgnoreNavigationInteraction

• **IgnoreNavigationInteraction** = `"IGNORE_NAVIGATION_INTERACTION"`

Disables automatically detected navigation events. User defined ones are still being sent.

###### Defined in

[Smartlook.ts:435](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L435)

___

##### IgnoreRageClicks

• **IgnoreRageClicks** = `"IGNORE_RAGE_CLICKS"`

Disables automatic detection and tracking of rage click events.

###### Defined in

[Smartlook.ts:439](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L439)

___

##### IgnoreUserInteraction

• **IgnoreUserInteraction** = `"IGNORE_USER_INTERACTION"`

Disables automatically detected selector (click on a View), focus, touch, gesture and keyboard events.

###### Defined in

[Smartlook.ts:431](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L431)

___

##### NoTracking

• **NoTracking** = `"NO_TRACKING"`

No automatically detected events are tracked. Only user defined events are still tracked.

###### Defined in

[Smartlook.ts:443](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L443)

## Smartlook Rendering Mode

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / RenderingMode

### Enumeration: RenderingMode

[Smartlook](#smartlook).RenderingMode

#### Table of contents

##### Enumeration members

- [Native](#native)
- [NoRendering](#norendering)
- [Wireframe](#wireframe)

#### Enumeration members

##### Native

• **Native** = `"native"`

###### Defined in

[Smartlook.ts:418](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L418)

___

##### NoRendering

• **NoRendering** = `"no_rendering"`

###### Defined in

[Smartlook.ts:419](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L419)

___

##### Wireframe

• **Wireframe** = `"wireframe"`

###### Defined in

[Smartlook.ts:420](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L420)

## Smartlook Sensitivity Type

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / SensitivityType

### Enumeration: SensitivityType

[Smartlook](#smartlook).SensitivityType

#### Table of contents

##### Enumeration members

- [Blacklisted](#blacklisted)
- [Whitelisted](#whitelisted)

#### Enumeration members

##### Blacklisted

• **Blacklisted** = `0`

###### Defined in

[Smartlook.ts:447](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L447)

___

##### Whitelisted

• **Whitelisted** = `1`

###### Defined in

[Smartlook.ts:448](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L448)

## Smartlook View State

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / ViewState

### Enumeration: ViewState

[Smartlook](#smartlook).ViewState

#### Table of contents

##### Enumeration members

- [Enter](#enter)
- [Exit](#exit)

#### Enumeration members

##### Enter

• **Enter** = `"enter"`

###### Defined in

[Smartlook.ts:413](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L413)

___

##### Exit

• **Exit** = `"exit"`

###### Defined in

[Smartlook.ts:414](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L414)

# Interfaces

## Smartlook Setup Options

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / SetupOptions

### Interface: SetupOptions

[Smartlook](#smartlook).SetupOptions

#### Table of contents

##### Properties

- [fps](#fps)
- [smartlookAPIKey](#smartlookapikey)
- [startNewSession](#startnewsession)
- [startNewSessionAndUser](#startnewsessionanduser)

#### Properties

##### fps

• `Optional` **fps**: `number`

###### Defined in

[Smartlook.ts:391](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L391)

___

##### smartlookAPIKey

• **smartlookAPIKey**: `string`

###### Defined in

[Smartlook.ts:390](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L390)

___

##### startNewSession

• `Optional` **startNewSession**: `boolean`

###### Defined in

[Smartlook.ts:392](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L392)

___

##### startNewSessionAndUser

• `Optional` **startNewSessionAndUser**: `boolean`

###### Defined in

[Smartlook.ts:393](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L393)

# Modules

## Smartlook

[smartlook-react-native-wrapper](#readme) / Smartlook

### Namespace: Smartlook

The main Smartlook SDK wrapper.

#### Table of contents

##### Enumerations

- [EventTrackingMode](#smartlook-event-tracking-mode)
- [RenderingMode](#smartlook-rendering-mode)
- [SensitivityType](#smartlook-sensitivity-type)
- [ViewState](#smartlook-view-state)

##### Interfaces

- [SetupOptions](#smartlook-setup-options)

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

▸ **setup**(`optionsOrAPIKey`): `void`

Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())

###### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | `string` \| [`SetupOptions`](#smartlook-setup-options) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:45](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L45)

___

##### setupAndStartRecording

▸ **setupAndStartRecording**(`optionsOrAPIKey`): `void`

Setup and start Smartlook SDK recording.

###### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | `string` \| [`SetupOptions`](#smartlook-setup-options) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:61](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L61)

___

#### 2) User Functions

##### setReferrer

▸ **setReferrer**(`referrer`, `source`): `void`

Set a custom referrer.

**`summary`** When an application is installed from the Google Play Store, Smartlook SDK automatically tracks install referrer.
A custom referrer can also be set by using this function.

###### Parameters

| Name | Type |
| :------ | :------ |
| `referrer` | `string` |
| `source` | `string` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:302](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L302)

___

##### setUserIdentifier

▸ **setUserIdentifier**(`userIdentifier`, `userProperties?`): `void`

Sets a user identifier with optional dictionary of user properties

###### Parameters

| Name | Type |
| :------ | :------ |
| `userIdentifier` | `string` |
| `userProperties` | `Object` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:74](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L74)

___

#### 3) Recording Functions

##### isRecording

▸ **isRecording**(): `Promise`<`boolean`\>

Returns current recording state

###### Returns

`Promise`<`boolean`\>

A promise fulfilled by current recording state boolean

###### Defined in

[Smartlook.ts:104](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L104)

___

##### startRecording

▸ **startRecording**(): `void`

Starts recording

###### Returns

`void`

###### Defined in

[Smartlook.ts:85](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L85)

___

##### stopRecording

▸ **stopRecording**(): `void`

Stops recording

###### Returns

`void`

###### Defined in

[Smartlook.ts:94](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L94)

___

#### 4) Timed events Functions

##### cancelTimedCustomEvent

▸ **cancelTimedCustomEvent**(`name`, `reason`, `eventProperties?`): `void`

Cancels a timed event.

**`summary`** In case a given action failed this function is called instead of [stopTimedCustomEvent](#stoptimedcustomevent).

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `reason` | `string` | reason of failure |
| `eventProperties` | `Dictionary`<`string`\> | properties are merged with the properties set in the [startTimedCustomEvent](#starttimedcustomevent) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:150](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L150)

___

##### startTimedCustomEvent

▸ **startTimedCustomEvent**(`eventName`, `eventProperties?`): `Promise`<`string`\>

Starts a timed event.

**`summary`** Timed events can be used for measuring duration of any time-sensitive or long-running actions in the application.
This will not send out any events but will return a Promise which will resolve with unique eventId
that needs to be stored, and it is then used to stop/cancel a custom timed event.

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `eventProperties` | `Dictionary`<`string`\> |

###### Returns

`Promise`<`string`\>

A promise fulfilled by unique eventId

###### Defined in

[Smartlook.ts:122](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L122)

___

##### stopTimedCustomEvent

▸ **stopTimedCustomEvent**(`eventId`, `eventProperties?`): `void`

Stops a timed event.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `string` | eventId obtained from [startTimedCustomEvent](#starttimedcustomevent) |
| `eventProperties` | `Dictionary`<`string`\> | properties are merged with the properties set in the [startTimedCustomEvent](#starttimedcustomevent) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:136](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L136)

___

#### 5) Events Functions

##### removeAllGlobalEventProperties

▸ **removeAllGlobalEventProperties**(): `void`

###### Returns

`void`

###### Defined in

[Smartlook.ts:243](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L243)

___

##### removeGlobalEventProperty

▸ **removeGlobalEventProperty**(`key`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:250](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L250)

___

##### setEventTrackingMode

▸ **setEventTrackingMode**(`eventTrackingMode`): `void`

Set event tracking mode.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingMode` | [`EventTrackingMode`](#smartlook-event-tracking-mode) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:336](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L336)

___

##### setEventTrackingModes

▸ **setEventTrackingModes**(`eventTrackingModes`): `void`

Set event tracking modes.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingModes` | [`EventTrackingMode`](#smartlook-event-tracking-mode)[] |

###### Returns

`void`

###### Defined in

[Smartlook.ts:350](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L350)

___

##### setGlobalEventProperties

▸ **setGlobalEventProperties**(`properties`, `immutable?`): `void`

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | `Object` | `undefined` |
| `immutable` | `boolean` | `false` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:257](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L257)

___

##### setGlobalEventProperty

▸ **setGlobalEventProperty**(`key`, `value`, `immutable?`): `void`

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `string` | `undefined` |
| `immutable` | `boolean` | `false` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:264](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L264)

___

##### trackCustomEvent

▸ **trackCustomEvent**(`name`, `properties?`): `void`

Tracks custom event.

###### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Object` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:161](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L161)

___

##### trackNavigationEvent

▸ **trackNavigationEvent**(`screenName`, `viewState`): `void`

Tracks navigation event.

###### Parameters

| Name | Type |
| :------ | :------ |
| `screenName` | `string` |
| `viewState` | [`ViewState`](#smartlook-view-state) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:172](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L172)

___

#### 7) Sensitive views Functions

##### registerBlacklistedView

▸ **registerBlacklistedView**(`ref`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:181](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L181)

___

##### registerWhitelistedView

▸ **registerWhitelistedView**(`ref`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:205](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L205)

___

##### setViewIsSensitive

▸ **setViewIsSensitive**(`ref`, `isSensitive`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |
| `isSensitive` | `boolean` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:229](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L229)

___

##### unregisterBlacklistedView

▸ **unregisterBlacklistedView**(`ref`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:193](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L193)

___

##### unregisterWhitelistedView

▸ **unregisterWhitelistedView**(`ref`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:217](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L217)

___

#### 8) Dashboard urls Functions

##### enableCrashlytics

▸ **enableCrashlytics**(`enabled`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:309](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L309)

___

##### getDashboardSessionUrl

▸ **getDashboardSessionUrl**(`withCurrentTimestamp?`): `Promise`<`string`\>

Returns a URL leading to the Smartlook Dashboard for a currently recorded session.

###### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withCurrentTimestamp` | `boolean` | `false` | If withCurrentTimestamp is set to true link it will include information about the current recording timestamp. This will ensure that the player will start playing the session at the moment when getDashboardSessionUrl was called. |

###### Returns

`Promise`<`string`\>

A promise fulfilled by a Smartlook Dashboard URL

###### Defined in

[Smartlook.ts:279](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L279)

___

##### getDashboardVisitorUrl

▸ **getDashboardVisitorUrl**(): `Promise`<`string`\>

A URL leading to the Smartlook Dashboard for a currently recorded visitor.

###### Returns

`Promise`<`string`\>

A promise fulfilled by a Smartlook Dashboard URL

###### Defined in

[Smartlook.ts:289](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L289)

___

##### registerIntegrationListener

▸ **registerIntegrationListener**(`dashboardSessionUrlCallback`, `dashboardVisitorUrlCallback`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `dashboardSessionUrlCallback` | (`url`: `string`) => `void` |
| `dashboardVisitorUrlCallback` | (`url`: `string`) => `void` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:362](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L362)

___

##### unregisterIntegrationListener

▸ **unregisterIntegrationListener**(): `void`

###### Returns

`void`

###### Defined in

[Smartlook.ts:382](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L382)

___

#### 9) Other Functions

##### resetSession

▸ **resetSession**(`resetUser`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `resetUser` | `boolean` |

###### Returns

`void`

###### Defined in

[Smartlook.ts:316](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L316)

___

##### setRenderingMode

▸ **setRenderingMode**(`renderingMode`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `renderingMode` | [`RenderingMode`](#smartlook-rendering-mode) |

###### Returns

`void`

###### Defined in

[Smartlook.ts:323](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L323)
