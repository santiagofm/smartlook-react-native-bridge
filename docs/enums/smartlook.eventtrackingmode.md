[smartlook-react-native-wrapper](../README.md) / [Smartlook](../modules/Smartlook.md) / EventTrackingMode

# Enumeration: EventTrackingMode

[Smartlook](../modules/Smartlook.md).EventTrackingMode

## Table of contents

### Enumeration members

- [FullTracking](Smartlook.EventTrackingMode.md#fulltracking)
- [IgnoreNavigationInteraction](Smartlook.EventTrackingMode.md#ignorenavigationinteraction)
- [IgnoreRageClicks](Smartlook.EventTrackingMode.md#ignorerageclicks)
- [IgnoreUserInteraction](Smartlook.EventTrackingMode.md#ignoreuserinteraction)
- [NoTracking](Smartlook.EventTrackingMode.md#notracking)

## Enumeration members

### FullTracking

• **FullTracking** = `"FULL_TRACKING"`

Default state. SDK tracks all automatically detected events along with all user defined events.

#### Defined in

[Smartlook.ts:427](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L427)

___

### IgnoreNavigationInteraction

• **IgnoreNavigationInteraction** = `"IGNORE_NAVIGATION_INTERACTION"`

Disables automatically detected navigation events. User defined ones are still being sent.

#### Defined in

[Smartlook.ts:435](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L435)

___

### IgnoreRageClicks

• **IgnoreRageClicks** = `"IGNORE_RAGE_CLICKS"`

Disables automatic detection and tracking of rage click events.

#### Defined in

[Smartlook.ts:439](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L439)

___

### IgnoreUserInteraction

• **IgnoreUserInteraction** = `"IGNORE_USER_INTERACTION"`

Disables automatically detected selector (click on a View), focus, touch, gesture and keyboard events.

#### Defined in

[Smartlook.ts:431](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L431)

___

### NoTracking

• **NoTracking** = `"NO_TRACKING"`

No automatically detected events are tracked. Only user defined events are still tracked.

#### Defined in

[Smartlook.ts:443](https://github.com/smartlook/smartlook-react-native-bridge/blob/8ad524b/src/Smartlook.ts#L443)
