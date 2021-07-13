[smartlook-react-native-wrapper](../README.md) / [Smartlook](../modules/smartlook.md) / EventTrackingMode

# Enumeration: EventTrackingMode

[Smartlook](../modules/smartlook.md).EventTrackingMode

## Table of contents

### Enumeration members

- [FullTracking](smartlook.eventtrackingmode.md#fulltracking)
- [IgnoreNavigationInteraction](smartlook.eventtrackingmode.md#ignorenavigationinteraction)
- [IgnoreRageClicks](smartlook.eventtrackingmode.md#ignorerageclicks)
- [IgnoreUserInteraction](smartlook.eventtrackingmode.md#ignoreuserinteraction)
- [NoTracking](smartlook.eventtrackingmode.md#notracking)

## Enumeration members

### FullTracking

• **FullTracking**: = "FULL\_TRACKING"

Default state. SDK tracks all automatically detected events along with all user defined events.

Defined in: [Smartlook.ts:468](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L468)

___

### IgnoreNavigationInteraction

• **IgnoreNavigationInteraction**: = "IGNORE\_NAVIGATION\_INTERACTION"

Disables automatically detected navigation events. User defined ones are still being sent.

Defined in: [Smartlook.ts:476](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L476)

___

### IgnoreRageClicks

• **IgnoreRageClicks**: = "IGNORE\_RAGE\_CLICKS"

Disables automatic detection and tracking of rage click events.

Defined in: [Smartlook.ts:480](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L480)

___

### IgnoreUserInteraction

• **IgnoreUserInteraction**: = "IGNORE\_USER\_INTERACTION"

Disables automatically detected selector (click on a View), focus, touch, gesture and keyboard events.

Defined in: [Smartlook.ts:472](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L472)

___

### NoTracking

• **NoTracking**: = "NO\_TRACKING"

No automatically detected events are tracked. Only user defined events are still tracked.

Defined in: [Smartlook.ts:484](https://github.com/smartlook/smartlook-react-native-bridge/blob/68bf3ba/src/Smartlook.ts#L484)
