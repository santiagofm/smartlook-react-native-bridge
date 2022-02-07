[smartlook-react-native-wrapper](../README.md) / Smartlook

# Namespace: Smartlook

The main Smartlook SDK wrapper.

## Table of contents

### Enumerations

- [EventTrackingMode](../enums/Smartlook.EventTrackingMode.md)
- [RenderingMode](../enums/Smartlook.RenderingMode.md)
- [SensitivityType](../enums/Smartlook.SensitivityType.md)
- [ViewState](../enums/Smartlook.ViewState.md)

### Interfaces

- [SetupOptions](../interfaces/Smartlook.SetupOptions.md)

### 1) Setup Functions

- [setup](Smartlook.md#setup)
- [setupAndStartRecording](Smartlook.md#setupandstartrecording)

### 2) User Functions

- [setReferrer](Smartlook.md#setreferrer)
- [setUserIdentifier](Smartlook.md#setuseridentifier)

### 3) Recording Functions

- [isRecording](Smartlook.md#isrecording)
- [startRecording](Smartlook.md#startrecording)
- [stopRecording](Smartlook.md#stoprecording)

### 4) Timed events Functions

- [cancelTimedCustomEvent](Smartlook.md#canceltimedcustomevent)
- [startTimedCustomEvent](Smartlook.md#starttimedcustomevent)
- [stopTimedCustomEvent](Smartlook.md#stoptimedcustomevent)

### 5) Events Functions

- [removeAllGlobalEventProperties](Smartlook.md#removeallglobaleventproperties)
- [removeGlobalEventProperty](Smartlook.md#removeglobaleventproperty)
- [setEventTrackingMode](Smartlook.md#seteventtrackingmode)
- [setEventTrackingModes](Smartlook.md#seteventtrackingmodes)
- [setGlobalEventProperties](Smartlook.md#setglobaleventproperties)
- [setGlobalEventProperty](Smartlook.md#setglobaleventproperty)
- [trackCustomEvent](Smartlook.md#trackcustomevent)
- [trackNavigationEvent](Smartlook.md#tracknavigationevent)

### 7) Sensitive views Functions

- [registerBlacklistedView](Smartlook.md#registerblacklistedview)
- [registerWhitelistedView](Smartlook.md#registerwhitelistedview)
- [setViewIsSensitive](Smartlook.md#setviewissensitive)
- [unregisterBlacklistedView](Smartlook.md#unregisterblacklistedview)
- [unregisterWhitelistedView](Smartlook.md#unregisterwhitelistedview)

### 8) Dashboard urls Functions

- [enableCrashlytics](Smartlook.md#enablecrashlytics)
- [getDashboardSessionUrl](Smartlook.md#getdashboardsessionurl)
- [getDashboardVisitorUrl](Smartlook.md#getdashboardvisitorurl)
- [registerIntegrationListener](Smartlook.md#registerintegrationlistener)
- [unregisterIntegrationListener](Smartlook.md#unregisterintegrationlistener)

### 9) Other Functions

- [resetSession](Smartlook.md#resetsession)
- [setRenderingMode](Smartlook.md#setrenderingmode)

## 1) Setup Functions

### setup

▸ **setup**(`optionsOrAPIKey`): `void`

Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | `string` \| [`SetupOptions`](../interfaces/Smartlook.SetupOptions.md) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:45](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L45)

___

### setupAndStartRecording

▸ **setupAndStartRecording**(`optionsOrAPIKey`): `void`

Setup and start Smartlook SDK recording.

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | `string` \| [`SetupOptions`](../interfaces/Smartlook.SetupOptions.md) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:61](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L61)

___

## 2) User Functions

### setReferrer

▸ **setReferrer**(`referrer`, `source`): `void`

Set a custom referrer.

**`summary`** When an application is installed from the Google Play Store, Smartlook SDK automatically tracks install referrer.
A custom referrer can also be set by using this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `referrer` | `string` |
| `source` | `string` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:302](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L302)

___

### setUserIdentifier

▸ **setUserIdentifier**(`userIdentifier`, `userProperties?`): `void`

Sets a user identifier with optional dictionary of user properties

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIdentifier` | `string` |
| `userProperties` | `Object` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:74](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L74)

___

## 3) Recording Functions

### isRecording

▸ **isRecording**(): `Promise`<`boolean`\>

Returns current recording state

#### Returns

`Promise`<`boolean`\>

A promise fulfilled by current recording state boolean

#### Defined in

[Smartlook.ts:104](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L104)

___

### startRecording

▸ **startRecording**(): `void`

Starts recording

#### Returns

`void`

#### Defined in

[Smartlook.ts:85](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L85)

___

### stopRecording

▸ **stopRecording**(): `void`

Stops recording

#### Returns

`void`

#### Defined in

[Smartlook.ts:94](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L94)

___

## 4) Timed events Functions

### cancelTimedCustomEvent

▸ **cancelTimedCustomEvent**(`name`, `reason`, `eventProperties?`): `void`

Cancels a timed event.

**`summary`** In case a given action failed this function is called instead of [stopTimedCustomEvent](Smartlook.md#stoptimedcustomevent).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `reason` | `string` | reason of failure |
| `eventProperties` | `Dictionary`<`string`\> | properties are merged with the properties set in the [startTimedCustomEvent](Smartlook.md#starttimedcustomevent) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:150](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L150)

___

### startTimedCustomEvent

▸ **startTimedCustomEvent**(`eventName`, `eventProperties?`): `Promise`<`string`\>

Starts a timed event.

**`summary`** Timed events can be used for measuring duration of any time-sensitive or long-running actions in the application.
This will not send out any events but will return a Promise which will resolve with unique eventId
that needs to be stored, and it is then used to stop/cancel a custom timed event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `eventProperties` | `Dictionary`<`string`\> |

#### Returns

`Promise`<`string`\>

A promise fulfilled by unique eventId

#### Defined in

[Smartlook.ts:122](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L122)

___

### stopTimedCustomEvent

▸ **stopTimedCustomEvent**(`eventId`, `eventProperties?`): `void`

Stops a timed event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `string` | eventId obtained from [startTimedCustomEvent](Smartlook.md#starttimedcustomevent) |
| `eventProperties` | `Dictionary`<`string`\> | properties are merged with the properties set in the [startTimedCustomEvent](Smartlook.md#starttimedcustomevent) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:136](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L136)

___

## 5) Events Functions

### removeAllGlobalEventProperties

▸ **removeAllGlobalEventProperties**(): `void`

#### Returns

`void`

#### Defined in

[Smartlook.ts:243](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L243)

___

### removeGlobalEventProperty

▸ **removeGlobalEventProperty**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:250](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L250)

___

### setEventTrackingMode

▸ **setEventTrackingMode**(`eventTrackingMode`): `void`

Set event tracking mode.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingMode` | [`EventTrackingMode`](../enums/Smartlook.EventTrackingMode.md) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:336](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L336)

___

### setEventTrackingModes

▸ **setEventTrackingModes**(`eventTrackingModes`): `void`

Set event tracking modes.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingModes` | [`EventTrackingMode`](../enums/Smartlook.EventTrackingMode.md)[] |

#### Returns

`void`

#### Defined in

[Smartlook.ts:350](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L350)

___

### setGlobalEventProperties

▸ **setGlobalEventProperties**(`properties`, `immutable?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | `Object` | `undefined` |
| `immutable` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:257](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L257)

___

### setGlobalEventProperty

▸ **setGlobalEventProperty**(`key`, `value`, `immutable?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `string` | `undefined` |
| `immutable` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:264](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L264)

___

### trackCustomEvent

▸ **trackCustomEvent**(`name`, `properties?`): `void`

Tracks custom event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Object` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:161](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L161)

___

### trackNavigationEvent

▸ **trackNavigationEvent**(`screenName`, `viewState`): `void`

Tracks navigation event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `screenName` | `string` |
| `viewState` | [`ViewState`](../enums/Smartlook.ViewState.md) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:172](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L172)

___

## 7) Sensitive views Functions

### registerBlacklistedView

▸ **registerBlacklistedView**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:181](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L181)

___

### registerWhitelistedView

▸ **registerWhitelistedView**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:205](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L205)

___

### setViewIsSensitive

▸ **setViewIsSensitive**(`ref`, `isSensitive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |
| `isSensitive` | `boolean` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:229](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L229)

___

### unregisterBlacklistedView

▸ **unregisterBlacklistedView**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:193](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L193)

___

### unregisterWhitelistedView

▸ **unregisterWhitelistedView**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `ComponentOrHandle` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:217](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L217)

___

## 8) Dashboard urls Functions

### enableCrashlytics

▸ **enableCrashlytics**(`enabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:309](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L309)

___

### getDashboardSessionUrl

▸ **getDashboardSessionUrl**(`withCurrentTimestamp?`): `Promise`<`string`\>

Returns a URL leading to the Smartlook Dashboard for a currently recorded session.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withCurrentTimestamp` | `boolean` | `false` | If withCurrentTimestamp is set to true link it will include information about the current recording timestamp. This will ensure that the player will start playing the session at the moment when getDashboardSessionUrl was called. |

#### Returns

`Promise`<`string`\>

A promise fulfilled by a Smartlook Dashboard URL

#### Defined in

[Smartlook.ts:279](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L279)

___

### getDashboardVisitorUrl

▸ **getDashboardVisitorUrl**(): `Promise`<`string`\>

A URL leading to the Smartlook Dashboard for a currently recorded visitor.

#### Returns

`Promise`<`string`\>

A promise fulfilled by a Smartlook Dashboard URL

#### Defined in

[Smartlook.ts:289](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L289)

___

### registerIntegrationListener

▸ **registerIntegrationListener**(`dashboardSessionUrlCallback`, `dashboardVisitorUrlCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dashboardSessionUrlCallback` | (`url`: `string`) => `void` |
| `dashboardVisitorUrlCallback` | (`url`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:362](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L362)

___

### unregisterIntegrationListener

▸ **unregisterIntegrationListener**(): `void`

#### Returns

`void`

#### Defined in

[Smartlook.ts:382](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L382)

___

## 9) Other Functions

### resetSession

▸ **resetSession**(`resetUser`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resetUser` | `boolean` |

#### Returns

`void`

#### Defined in

[Smartlook.ts:316](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L316)

___

### setRenderingMode

▸ **setRenderingMode**(`renderingMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderingMode` | [`RenderingMode`](../enums/Smartlook.RenderingMode.md) |

#### Returns

`void`

#### Defined in

[Smartlook.ts:323](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L323)
