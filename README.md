<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [README](#readme)
  - [smartlook-react-native-wrapper](#smartlook-react-native-wrapper)
    - [Table of contents](#table-of-contents)
    - [Variables](#variables)
    - [Functions](#functions)
- [Modules](#modules)
  - [Smartlook](#smartlook)
    - [Namespace: Smartlook](#namespace-smartlook)
- [Enums](#enums)
  - [Smartlook Eventtrackingmode](#smartlook-eventtrackingmode)
    - [Enumeration: EventTrackingMode](#enumeration-eventtrackingmode)
  - [Smartlook Renderingmode](#smartlook-renderingmode)
    - [Enumeration: RenderingMode](#enumeration-renderingmode)
  - [Smartlook Sensitivitytype](#smartlook-sensitivitytype)
    - [Enumeration: SensitivityType](#enumeration-sensitivitytype)
  - [Smartlook Viewstate](#smartlook-viewstate)
    - [Enumeration: ViewState](#enumeration-viewstate)
- [Interfaces](#interfaces)
  - [Smartlook Setupoptions](#smartlook-setupoptions)
    - [Interface: SetupOptions](#interface-setupoptions)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# README

For further info visit https://smartlook.github.io/docs/sdk/react-native/.
## smartlook-react-native-wrapper

# Modules

## Smartlook

[smartlook-react-native-wrapper](#readme) / Smartlook

### Namespace: Smartlook

The main Smartlook SDK wrapper.

#### Table of contents

##### Enumerations

- [EventTrackingMode](#smartlook-eventtrackingmode)
- [RenderingMode](#smartlook-renderingmode)
- [SensitivityType](#smartlook-sensitivitytype)
- [ViewState](#smartlook-viewstate)

##### Interfaces

- [SetupOptions](#smartlook-setupoptions)

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

▸ **setup**(`optionsOrAPIKey`: [*SetupOptions*](#smartlook-setupoptions) \| *string*): *void*

Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see Smartlook.startRecording())

###### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | [*SetupOptions*](#smartlook-setupoptions) \| *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:44](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L44)

___

##### setupAndStartRecording

▸ **setupAndStartRecording**(`optionsOrAPIKey`: [*SetupOptions*](#smartlook-setupoptions) \| *string*): *void*

Setup and start Smartlook SDK recording.

###### Parameters

| Name | Type |
| :------ | :------ |
| `optionsOrAPIKey` | [*SetupOptions*](#smartlook-setupoptions) \| *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:67](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L67)

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

Defined in: [Smartlook.ts:349](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L349)

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

Defined in: [Smartlook.ts:88](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L88)

___

#### 3) Recording Functions

##### isRecording

▸ **isRecording**(): *Promise*<boolean\>

Returns current recording state

**Returns:** *Promise*<boolean\>

A promise fulfilled by current recording state boolean

Defined in: [Smartlook.ts:121](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L121)

___

##### startRecording

▸ **startRecording**(): *void*

Starts recording

**Returns:** *void*

Defined in: [Smartlook.ts:100](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L100)

___

##### stopRecording

▸ **stopRecording**(): *void*

Stops recording

**Returns:** *void*

Defined in: [Smartlook.ts:110](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L110)

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

Defined in: [Smartlook.ts:179](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L179)

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

Defined in: [Smartlook.ts:143](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L143)

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

Defined in: [Smartlook.ts:161](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L161)

___

#### 5) Events Functions

##### removeAllGlobalEventProperties

▸ **removeAllGlobalEventProperties**(): *void*

**Returns:** *void*

Defined in: [Smartlook.ts:282](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L282)

___

##### removeGlobalEventProperty

▸ **removeGlobalEventProperty**(`key`: *string*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *void*

Defined in: [Smartlook.ts:290](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L290)

___

##### setEventTrackingMode

▸ **setEventTrackingMode**(`eventTrackingMode`: [*EventTrackingMode*](#smartlook-eventtrackingmode)): *void*

Set event tracking mode.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingMode` | [*EventTrackingMode*](#smartlook-eventtrackingmode) |

**Returns:** *void*

Defined in: [Smartlook.ts:387](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L387)

___

##### setEventTrackingModes

▸ **setEventTrackingModes**(`eventTrackingModes`: [*EventTrackingMode*](#smartlook-eventtrackingmode)[]): *void*

Set event tracking modes.

**`summary`** It can be beneficial to disable some automatically detected events due to security or usability reasons.
This can be done using event tracking modes

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventTrackingModes` | [*EventTrackingMode*](#smartlook-eventtrackingmode)[] |

**Returns:** *void*

Defined in: [Smartlook.ts:402](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L402)

___

##### setGlobalEventProperties

▸ **setGlobalEventProperties**(`properties`: {}, `immutable?`: *boolean*): *void*

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | *object* | - |
| `immutable` | *boolean* | false |

**Returns:** *void*

Defined in: [Smartlook.ts:300](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L300)

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

Defined in: [Smartlook.ts:308](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L308)

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

Defined in: [Smartlook.ts:194](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L194)

___

##### trackNavigationEvent

▸ **trackNavigationEvent**(`screenName`: *string*, `viewState`: [*ViewState*](#smartlook-viewstate)): *void*

Tracks navigation event.

###### Parameters

| Name | Type |
| :------ | :------ |
| `screenName` | *string* |
| `viewState` | [*ViewState*](#smartlook-viewstate) |

**Returns:** *void*

Defined in: [Smartlook.ts:206](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L206)

___

#### 7) Sensitive views Functions

##### registerBlacklistedView

▸ **registerBlacklistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:216](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L216)

___

##### registerWhitelistedView

▸ **registerWhitelistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:242](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L242)

___

##### setViewIsSensitive

▸ **setViewIsSensitive**(`ref`: ComponentOrHandle, `isSensitive`: *boolean*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |
| `isSensitive` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:267](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L267)

___

##### unregisterBlacklistedView

▸ **unregisterBlacklistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:229](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L229)

___

##### unregisterWhitelistedView

▸ **unregisterWhitelistedView**(`ref`: ComponentOrHandle): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ComponentOrHandle |

**Returns:** *void*

Defined in: [Smartlook.ts:255](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L255)

___

#### 8) Dashboard urls Functions

##### enableCrashlytics

▸ **enableCrashlytics**(`enabled`: *boolean*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:357](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L357)

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

Defined in: [Smartlook.ts:324](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L324)

___

##### getDashboardVisitorUrl

▸ **getDashboardVisitorUrl**(): *Promise*<string\>

A URL leading to the Smartlook Dashboard for a currently recorded visitor.

**Returns:** *Promise*<string\>

A promise fulfilled by a Smartlook Dashboard URL

Defined in: [Smartlook.ts:335](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L335)

___

##### registerIntegrationListener

▸ **registerIntegrationListener**(`dashboardSessionUrlCallback`: (`url`: *string*) => *void*, `dashboardVisitorUrlCallback`: (`url`: *string*) => *void*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `dashboardSessionUrlCallback` | (`url`: *string*) => *void* |
| `dashboardVisitorUrlCallback` | (`url`: *string*) => *void* |

**Returns:** *void*

Defined in: [Smartlook.ts:416](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L416)

___

##### unregisterIntegrationListener

▸ **unregisterIntegrationListener**(): *void*

**Returns:** *void*

Defined in: [Smartlook.ts:437](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L437)

___

#### 9) Other Functions

##### resetSession

▸ **resetSession**(`resetUser`: *boolean*): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `resetUser` | *boolean* |

**Returns:** *void*

Defined in: [Smartlook.ts:365](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L365)

___

##### setRenderingMode

▸ **setRenderingMode**(`renderingMode`: [*RenderingMode*](#smartlook-renderingmode)): *void*

###### Parameters

| Name | Type |
| :------ | :------ |
| `renderingMode` | [*RenderingMode*](#smartlook-renderingmode) |

**Returns:** *void*

Defined in: [Smartlook.ts:373](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L373)

### Table of contents

#### Namespaces

- [Smartlook](#smartlook)

#### Variables

- [SmartlookSensitiveComponent](#smartlooksensitivecomponent)

#### Functions

- [useSmartlookSensitiveRef](#usesmartlooksensitiveref)

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

Defined in: [SmartlookSensitiveComponent.tsx:22](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/SmartlookSensitiveComponent.tsx#L22)

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

Defined in: [hooks/useSmartlookSensitiveRef.ts:21](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/hooks/useSmartlookSensitiveRef.ts#L21)

# Enums

## Smartlook Eventtrackingmode

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

• **FullTracking**: = "FULL\_TRACKING"

Default state. SDK tracks all automatically detected events along with all user defined events.

Defined in: [Smartlook.ts:468](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L468)

___

##### IgnoreNavigationInteraction

• **IgnoreNavigationInteraction**: = "IGNORE\_NAVIGATION\_INTERACTION"

Disables automatically detected navigation events. User defined ones are still being sent.

Defined in: [Smartlook.ts:476](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L476)

___

##### IgnoreRageClicks

• **IgnoreRageClicks**: = "IGNORE\_RAGE\_CLICKS"

Disables automatic detection and tracking of rage click events.

Defined in: [Smartlook.ts:480](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L480)

___

##### IgnoreUserInteraction

• **IgnoreUserInteraction**: = "IGNORE\_USER\_INTERACTION"

Disables automatically detected selector (click on a View), focus, touch, gesture and keyboard events.

Defined in: [Smartlook.ts:472](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L472)

___

##### NoTracking

• **NoTracking**: = "NO\_TRACKING"

No automatically detected events are tracked. Only user defined events are still tracked.

Defined in: [Smartlook.ts:484](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L484)

## Smartlook Renderingmode

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

• **Native**: = "native"

Defined in: [Smartlook.ts:459](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L459)

___

##### NoRendering

• **NoRendering**: = "no\_rendering"

Defined in: [Smartlook.ts:460](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L460)

___

##### Wireframe

• **Wireframe**: = "wireframe"

Defined in: [Smartlook.ts:461](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L461)

## Smartlook Sensitivitytype

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / SensitivityType

### Enumeration: SensitivityType

[Smartlook](#smartlook).SensitivityType

#### Table of contents

##### Enumeration members

- [Blacklisted](#blacklisted)
- [Whitelisted](#whitelisted)

#### Enumeration members

##### Blacklisted

• **Blacklisted**: = 0

Defined in: [Smartlook.ts:488](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L488)

___

##### Whitelisted

• **Whitelisted**: = 1

Defined in: [Smartlook.ts:489](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L489)

## Smartlook Viewstate

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / ViewState

### Enumeration: ViewState

[Smartlook](#smartlook).ViewState

#### Table of contents

##### Enumeration members

- [Enter](#enter)
- [Exit](#exit)

#### Enumeration members

##### Enter

• **Enter**: = "enter"

Defined in: [Smartlook.ts:454](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L454)

___

##### Exit

• **Exit**: = "exit"

Defined in: [Smartlook.ts:455](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L455)

# Interfaces

## Smartlook Setupoptions

[smartlook-react-native-wrapper](#readme) / [Smartlook](#smartlook) / SetupOptions

### Interface: SetupOptions

[Smartlook](#smartlook).SetupOptions

#### Table of contents

##### Properties

- [\_reactNativeVersion](#_reactnativeversion)
- [\_smartlookPluginVersion](#_smartlookpluginversion)
- [fps](#fps)
- [smartlookAPIKey](#smartlookapikey)
- [startNewSession](#startnewsession)
- [startNewSessionAndUser](#startnewsessionanduser)

#### Properties

##### \_reactNativeVersion

• `Optional` **\_reactNativeVersion**: *string*

Defined in: [Smartlook.ts:449](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L449)

___

##### \_smartlookPluginVersion

• `Optional` **\_smartlookPluginVersion**: *string*

Defined in: [Smartlook.ts:450](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L450)

___

##### fps

• `Optional` **fps**: *number*

Defined in: [Smartlook.ts:446](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L446)

___

##### smartlookAPIKey

• **smartlookAPIKey**: *string*

Defined in: [Smartlook.ts:445](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L445)

___

##### startNewSession

• `Optional` **startNewSession**: *boolean*

Defined in: [Smartlook.ts:447](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L447)

___

##### startNewSessionAndUser

• `Optional` **startNewSessionAndUser**: *boolean*

Defined in: [Smartlook.ts:448](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L448)