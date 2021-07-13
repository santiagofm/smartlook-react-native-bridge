[smartlook-react-native-wrapper](../README.md) / Smartlook

# Namespace: Smartlook

The main Smartlook SDK wrapper.

## Table of contents

### Enumerations

- [EventTrackingMode](../enums/smartlook.eventtrackingmode.md)
- [RenderingMode](../enums/smartlook.renderingmode.md)
- [SensitivityType](../enums/smartlook.sensitivitytype.md)
- [ViewState](../enums/smartlook.viewstate.md)

### Interfaces

- [SetupOptions](../interfaces/smartlook.setupoptions.md)

### 1) Setup Functions

- [setup](smartlook.md#setup)
- [setupAndStartRecording](smartlook.md#setupandstartrecording)

### 2) User Functions

- [setReferrer](smartlook.md#setreferrer)
- [setUserIdentifier](smartlook.md#setuseridentifier)

### 3) Recording Functions

- [isRecording](smartlook.md#isrecording)
- [startRecording](smartlook.md#startrecording)
- [stopRecording](smartlook.md#stoprecording)

### 4) Timed events Functions

- [cancelTimedCustomEvent](smartlook.md#canceltimedcustomevent)
- [startTimedCustomEvent](smartlook.md#starttimedcustomevent)
- [stopTimedCustomEvent](smartlook.md#stoptimedcustomevent)

### 5) Events Functions

- [removeAllGlobalEventProperties](smartlook.md#removeallglobaleventproperties)
- [removeGlobalEventProperty](smartlook.md#removeglobaleventproperty)
- [setEventTrackingMode](smartlook.md#seteventtrackingmode)
- [setEventTrackingModes](smartlook.md#seteventtrackingmodes)
- [setGlobalEventProperties](smartlook.md#setglobaleventproperties)
- [setGlobalEventProperty](smartlook.md#setglobaleventproperty)
- [trackCustomEvent](smartlook.md#trackcustomevent)
- [trackNavigationEvent](smartlook.md#tracknavigationevent)

### 7) Sensitive views Functions

- [registerBlacklistedView](smartlook.md#registerblacklistedview)
- [registerWhitelistedView](smartlook.md#registerwhitelistedview)
- [setViewIsSensitive](smartlook.md#setviewissensitive)
- [unregisterBlacklistedView](smartlook.md#unregisterblacklistedview)
- [unregisterWhitelistedView](smartlook.md#unregisterwhitelistedview)

### 8) Dashboard urls Functions

- [enableCrashlytics](smartlook.md#enablecrashlytics)
- [getDashboardSessionUrl](smartlook.md#getdashboardsessionurl)
- [getDashboardVisitorUrl](smartlook.md#getdashboardvisitorurl)
- [registerIntegrationListener](smartlook.md#registerintegrationlistener)
- [unregisterIntegrationListener](smartlook.md#unregisterintegrationlistener)

### 9) Other Functions

- [resetSession](smartlook.md#resetsession)
- [setRenderingMode](smartlook.md#setrenderingmode)

## 1) Setup Functions

### setup

▸ **setup**(`optionsOrAPIKey`: [*SetupOptions*](../interfaces/smartlook.setupoptions.md) \| *string*): *void*

Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | [*SetupOptions*](../interfaces/smartlook.setupoptions.md) \| *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:44](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L44)

___

### setupAndStartRecording

▸ **setupAndStartRecording**(`optionsOrAPIKey`: [*SetupOptions*](../interfaces/smartlook.setupoptions.md) \| *string*): *void*

Setup and start Smartlook SDK recording.

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | [*SetupOptions*](../interfaces/smartlook.setupoptions.md) \| *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:67](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L67)

___

## 2) User Functions

### setReferrer

▸ **setReferrer**(`referrer`: *string*, `source`: *string*): *void*

Set a custom referrer.

**`summary`** When an application is installed from the Google Play Store, Smartlook SDK automatically tracks install referrer.
A custom referrer can also be set by using this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `referrer` | *string* |
| `source` | *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:349](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L349)

___

### setUserIdentifier

▸ **setUserIdentifier**(`userIdentifier`: *string*, `userProperties?`: {}): *void*

Sets a user identifier with optional dictionary of user properties

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userIdentifier` | *string* | - |
| `userProperties` | *object* | {} |

**Returns:** *void*

Defined in: [Smartlook.ts:88](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L88)

___

## 3) Recording Functions

### isRecording

▸ **isRecording**(): *Promise*<boolean\>

Returns current recording state

**Returns:** *Promise*<boolean\>

A promise fulfilled by current recording state boolean

Defined in: [Smartlook.ts:121](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L121)

___

### startRecording

▸ **startRecording**(): *void*

Starts recording

**Returns:** *void*

Defined in: [Smartlook.ts:100](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L100)

___

### stopRecording

▸ **stopRecording**(): *void*

Stops recording

**Returns:** *void*

Defined in: [Smartlook.ts:110](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L110)

___

## 4) Timed events Functions

### cancelTimedCustomEvent

▸ **cancelTimedCustomEvent**(`name`: *string*, `reason`: *string*, `eventProperties?`: *Dictionary*<string\>): *void*

Cancels a timed event.

**`summary`** In case a given action failed this function is called instead of [stopTimedCustomEvent](smartlook.md#stoptimedcustomevent).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | *string* | - | - |
| `reason` | *string* | - | reason of failure |
| `eventProperties` | *Dictionary*<string\> | {} | properties are merged with the properties set in the [startTimedCustomEvent](smartlook.md#starttimedcustomevent) |

**Returns:** *void*

Defined in: [Smartlook.ts:179](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L179)

___

### startTimedCustomEvent

▸ **startTimedCustomEvent**(`eventName`: *string*, `eventProperties?`: *Dictionary*<string\>): *Promise*<string\>

Starts a timed event.

**`summary`** Timed events can be used for measuring duration of any time-sensitive or long-running actions in the application.
This will not send out any events but will return a Promise which will resolve with unique eventId
that needs to be stored, and it is then used to stop/cancel a custom timed event.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventName` | *string* | - |
| `eventProperties` | *Dictionary*<string\> | {} |

**Returns:** *Promise*<string\>

A promise fulfilled by unique eventId

Defined in: [Smartlook.ts:143](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L143)

___

### stopTimedCustomEvent

▸ **stopTimedCustomEvent**(`eventId`: *string*, `eventProperties?`: *Dictionary*<string\>): *void*

Stops a timed event.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventId` | *string* | - | eventId obtained from [startTimedCustomEvent](smartlook.md#starttimedcustomevent) |
| `eventProperties` | *Dictionary*<string\> | {} | properties are merged with the properties set in the [startTimedCustomEvent](smartlook.md#starttimedcustomevent) |

**Returns:** *void*

Defined in: [Smartlook.ts:161](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L161)

___

## 5) Events Functions

### removeAllGlobalEventProperties

▸ **removeAllGlobalEventProperties**(): *void*

**Returns:** *void*

Defined in: [Smartlook.ts:282](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L282)

___

### removeGlobalEventProperty

▸ **removeGlobalEventProperty**(`key`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:290](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L290)

___

### setEventTrackingMode

▸ **setEventTrackingMode**(`eventTrackingMode`: [*EventTrackingMode*](../enums/smartlook.eventtrackingmode.md)): *void*

Set event tracking mode.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingMode` | [*EventTrackingMode*](../enums/smartlook.eventtrackingmode.md) |

**Returns:** *void*

Defined in: [Smartlook.ts:387](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L387)

___

### setEventTrackingModes

▸ **setEventTrackingModes**(`eventTrackingModes`: [*EventTrackingMode*](../enums/smartlook.eventtrackingmode.md)[]): *void*

Set event tracking modes.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingModes` | [*EventTrackingMode*](../enums/smartlook.eventtrackingmode.md)[] |

**Returns:** *void*

Defined in: [Smartlook.ts:402](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L402)

___

### setGlobalEventProperties

▸ **setGlobalEventProperties**(`properties`: {}, `immutable?`: *boolean*): *void*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | *object* | - |
| `immutable` | *boolean* | false |

**Returns:** *void*

Defined in: [Smartlook.ts:300](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L300)

___

### setGlobalEventProperty

▸ **setGlobalEventProperty**(`key`: *string*, `value`: *string*, `immutable?`: *boolean*): *void*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | *string* | - |
| `value` | *string* | - |
| `immutable` | *boolean* | false |

**Returns:** *void*

Defined in: [Smartlook.ts:308](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L308)

___

### trackCustomEvent

▸ **trackCustomEvent**(`name`: *string*, `properties?`: {}): *void*

Tracks custom event.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | *string* | - |
| `properties` | *object* | {} |

**Returns:** *void*

Defined in: [Smartlook.ts:194](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L194)

___

### trackNavigationEvent

▸ **trackNavigationEvent**(`screenName`: *string*, `viewState`: [*ViewState*](../enums/smartlook.viewstate.md)): *void*

Tracks navigation event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `screenName` | *string* |
| `viewState` | [*ViewState*](../enums/smartlook.viewstate.md) |

**Returns:** *void*

Defined in: [Smartlook.ts:206](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L206)

___

## 7) Sensitive views Functions

### registerBlacklistedView

▸ **registerBlacklistedView**(`ref`: ComponentOrHandle): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:216](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L216)

___

### registerWhitelistedView

▸ **registerWhitelistedView**(`ref`: ComponentOrHandle): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:242](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L242)

___

### setViewIsSensitive

▸ **setViewIsSensitive**(`ref`: ComponentOrHandle, `isSensitive`: *boolean*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |
| `isSensitive` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:267](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L267)

___

### unregisterBlacklistedView

▸ **unregisterBlacklistedView**(`ref`: ComponentOrHandle): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:229](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L229)

___

### unregisterWhitelistedView

▸ **unregisterWhitelistedView**(`ref`: ComponentOrHandle): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:255](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L255)

___

## 8) Dashboard urls Functions

### enableCrashlytics

▸ **enableCrashlytics**(`enabled`: *boolean*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:357](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L357)

___

### getDashboardSessionUrl

▸ **getDashboardSessionUrl**(`withCurrentTimestamp?`: *boolean*): *Promise*<string\>

Returns a URL leading to the Smartlook Dashboard for a currently recorded session.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withCurrentTimestamp` | *boolean* | false | If withCurrentTimestamp is set to true link it will include information about the current recording timestamp. This will ensure that the player will start playing the session at the moment when getDashboardSessionUrl was called. |

**Returns:** *Promise*<string\>

A promise fulfilled by a Smartlook Dashboard URL

Defined in: [Smartlook.ts:324](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L324)

___

### getDashboardVisitorUrl

▸ **getDashboardVisitorUrl**(): *Promise*<string\>

A URL leading to the Smartlook Dashboard for a currently recorded visitor.

**Returns:** *Promise*<string\>

A promise fulfilled by a Smartlook Dashboard URL

Defined in: [Smartlook.ts:335](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L335)

___

### registerIntegrationListener

▸ **registerIntegrationListener**(`dashboardSessionUrlCallback`: (`url`: *string*) => *void*, `dashboardVisitorUrlCallback`: (`url`: *string*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `dashboardSessionUrlCallback` | (`url`: *string*) => *void* |
| `dashboardVisitorUrlCallback` | (`url`: *string*) => *void* |

**Returns:** *void*

Defined in: [Smartlook.ts:416](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L416)

___

### unregisterIntegrationListener

▸ **unregisterIntegrationListener**(): *void*

**Returns:** *void*

Defined in: [Smartlook.ts:437](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L437)

___

## 9) Other Functions

### resetSession

▸ **resetSession**(`resetUser`: *boolean*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `resetUser` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:365](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L365)

___

### setRenderingMode

▸ **setRenderingMode**(`renderingMode`: [*RenderingMode*](../enums/smartlook.renderingmode.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderingMode` | [*RenderingMode*](../enums/smartlook.renderingmode.md) |

**Returns:** *void*

Defined in: [Smartlook.ts:373](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L373)
