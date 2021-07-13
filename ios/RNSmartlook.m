
#import "RNSmartlook.h"
#import "Smartlook.h"

// Taken from react-native/React/Modules/RCTUIManager.m
typedef void (^react_view_node_block_t)(UIView *);

static void RCTTraverseViewNodes(UIView *view, react_view_node_block_t block)
{
    if (view.reactTag) block(view);
    for (UIView *subview in view.reactSubviews) {
        RCTTraverseViewNodes(subview, block);

        // If the view is react-native-webview WebView, we need this workaround
        // so the block is called for the native WKWebView as well and not only on for wrapper around it.
        if ([subview respondsToSelector:@selector(webView)]) {
            block([subview performSelector:@selector(webView)]);
        }
    }
}

@implementation RNSmartlook

RCT_EXPORT_MODULE()

#ifdef DEBUG
#   define DLog(fmt, ...) NSLog((@"👀Smartlook: [Line %d] " fmt), __LINE__, ##__VA_ARGS__);
//#   define DLog(...)
#else
#   define DLog(...)
#endif


// MARK: - Setup and Run

/*
  there are now two possible ways how this is called
  1. with options being just a string with the pi key, and framerate the framerate
  2. with options being a key/value dict with several options including the api key
 
 see interceptor.js

 * @param options.smartlookAPIKey        Unique 40 character key identifying your app. You can find in your
 *                                       dashboard. If invalid key is set SDK will not work properly.
 * @param options.fps                    (Optional) Desired FPS for the recording, that must be in range from 1 to 10.
 * @param options.startNewSession        (Optional) If true new session is going to be created
 * @param options.startNewSessionAndUser (Optional) If true new session and visitor is going to be created

 */

NSDictionary<NSString *, SLEventTrackingMode> *rnEventTrackingModeToNative;
NSDictionary<SLEventTrackingMode, NSString *> *nativeEventTrackingModeToRN;


- (void)initializeEnumTranslators {
    rnEventTrackingModeToNative = @{
           @"FULL_TRACKING"                 : SLEventTrackingModeFullTracking,
           @"IGNORE_USER_INTERACTION"       : SLEventTrackingModeIgnoreUserInteractionEvents,
           @"IGNORE_NAVIGATION_INTERACTION" : SLEventTrackingModeIgnoreNavigationInteractionEvents,
           @"IGNORE_RAGE_CLICKS"            : SLEventTrackingModeIgnoreRageClickEvents,
           @"NO_TRACKING"                   : SLEventTrackingModeNoTracking
       };
       nativeEventTrackingModeToRN = @{
           SLEventTrackingModeFullTracking                      : @"FULL_TRACKING",
           SLEventTrackingModeIgnoreUserInteractionEvents       : @"IGNORE_USER_INTERACTION",
           SLEventTrackingModeIgnoreNavigationInteractionEvents : @"IGNORE_NAVIGATION_INTERACTION",
           SLEventTrackingModeIgnoreRageClickEvents             : @"IGNORE_RAGE_CLICKS",
           SLEventTrackingModeNoTracking                        : @"NO_TRACKING"
       };
}

- (void)setupSmartlook:(id)rnSetupOptions {
    
    if (![rnSetupOptions isKindOfClass:[NSDictionary class]]) {
        return;
    }
    
    [self initializeEnumTranslators];
    
    NSString *key = [rnSetupOptions valueForKey:@"smartlookAPIKey"];
    
    NSMutableDictionary *setupOptions = [NSMutableDictionary new];
    
    id fps = [rnSetupOptions valueForKey:@"fps"];
    if ([fps isKindOfClass:[NSNumber class]]) {
        [setupOptions setValue:fps forKey:SLSetupOptionFramerateKey];
    }
    id startNewSession = [rnSetupOptions valueForKey:@"startNewSession"];
    if ([startNewSession respondsToSelector:@selector(boolValue)]) {
        [setupOptions setValue:[NSNumber numberWithBool:[startNewSession boolValue]] forKey:SLSetupOptionStartNewSessionKey];
    }
    id startNewSessionAndUser = [rnSetupOptions valueForKey:@"startNewSessionAndUser"];
    if ([startNewSessionAndUser respondsToSelector:@selector(boolValue)]) {
        [setupOptions setValue:[NSNumber numberWithBool:[startNewSessionAndUser boolValue]] forKey:SLSetupOptionStartNewSessionAndResetUserKey];
    }
    
    [setupOptions setValue:@"REACT_NATIVE" forKey:@"__sdk_framework"];
    id reactNativeVersion  = [rnSetupOptions valueForKey:@"_reactNativeVersion"];
    if (reactNativeVersion != nil) {
        [setupOptions setValue:reactNativeVersion forKey:@"__sdk_framework_version"];
    }
    id smartlookPluginVersion  = [rnSetupOptions valueForKey:@"_smartlookPluginVersion"];
    if (smartlookPluginVersion != nil) {
        [setupOptions setValue:smartlookPluginVersion forKey:@"__sdk_framework_plugin_version"];
    }

    [Smartlook setupWithKey:key options:setupOptions];
}

RCT_EXPORT_METHOD(setup:(id)options)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@' options='%@'" , @"setup", options);
        [self setupSmartlook:options];
    });
}

RCT_EXPORT_METHOD(setupAndStartRecording:(id)options)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@' options='%@'" , @"setupAndStartRecording", options);
        [self setupSmartlook:options];
        [Smartlook startRecording];
    });
}

RCT_EXPORT_METHOD(setUserIdentifier:(NSString*)idKey map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"setUserIdentifier");
        if (idKey) {
            [Smartlook setUserIdentifier:idKey];
        }
        if (map) {
            [map enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
                NSString *keyString = [NSString stringWithFormat:@"%@", key];
                NSString *valueString = [NSString stringWithFormat:@"%@", obj];
                [Smartlook setSessionPropertyValue:valueString forName:keyString];
            }];
        };
    });
}

RCT_EXPORT_METHOD(resetSession:(BOOL)resetUser)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@' resetUser:%@", @"resetSession", @(resetUser));
        [Smartlook resetSessionAndUser:resetUser];
    });
}

//MARK: - START & STOP

RCT_EXPORT_METHOD(startRecording)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"startRecording");
        [Smartlook startRecording];
    });
}

RCT_EXPORT_METHOD(stopRecording)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"stopRecording");
        [Smartlook stopRecording];
    });
}

RCT_EXPORT_METHOD(isRecording:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    DLog(@"'%@'", @"isRecording");
    BOOL isRecording = [Smartlook isRecording];
    NSNumber *boolNumber = [NSNumber numberWithBool:isRecording];
    resolve(boolNumber);
}

// MARK: - RENDERING MODES

RCT_EXPORT_METHOD(setRenderingMode:(NSString*)mode)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"setRenderingMode:'%@'", mode);
        SLRenderingMode renderingMode = SLRenderingModeNative;
        if ([mode isEqualToString:@"wireframe"]) {
            renderingMode = SLRenderingModeWireframe;
        } else if ([mode isEqualToString:@"no_rendering"]) {
            renderingMode = SLRenderingModeNoRendering;
        }
        [Smartlook setRenderingModeTo:renderingMode];
//        SLRenderingModeOption renderingModeOption = SLRenderingModeOptionNone;
//        if ([option isEqualToString:@"smartlook-rendering-mode-option-color"]) {
//            renderingModeOption = SLRenderingModeOptionColorWireframe;
//        } else if ([option isEqualToString:@"smartlook-rendering-mode-option-blueprint"]) {
//            renderingModeOption = SLRenderingModeOptionBlueprintWireframe;
//        } else if ([option isEqualToString:@"smartlook-rendering-mode-option-icon-blueprint"]) {
//            renderingModeOption = SLRenderingModeOptionIconBlueprintWireframe;
//        }
//        [Smartlook setRenderingModeTo:renderingMode withOption:renderingModeOption];
    });
}

RCT_EXPORT_METHOD(currentRenderingMode:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *rval = @"native";
    SLRenderingMode renderignMode = [Smartlook currentRenderingMode];
    if ([renderignMode isEqualToString:SLRenderingModeWireframe]) {
        rval = @"wireframe";
    } else if ([renderignMode isEqualToString:SLRenderingModeNoRendering]) {
        rval = @"no_rendering";
    }
    resolve(rval);
}

RCT_EXPORT_METHOD(currentRenderingModeOption:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *rval = SLRenderingModeOptionNone;
    SLRenderingModeOption renderignModeOption = [Smartlook currentRenderingModeOption];
    if ([renderignModeOption isEqualToString:SLRenderingModeOptionColorWireframe]) {
        rval = @"smartlook-rendering-mode-option-color";
    } else if ([renderignModeOption isEqualToString:SLRenderingModeOptionBlueprintWireframe]) {
        rval = @"smartlook-rendering-mode-option-blueprint";
    } else if ([renderignModeOption isEqualToString:SLRenderingModeOptionIconBlueprintWireframe]) {
        rval = @"smartlook-rendering-mode-option-icon-blueprint";
    }
    resolve(rval);
}

// MARK: - EVENT TRACKING

RCT_EXPORT_METHOD(setEventTrackingMode:(NSString*)eventTrackingMode)
{
    DLog(@"setEventTrackingMode:'%@'", eventTrackingMode);
    dispatch_async(dispatch_get_main_queue(), ^{
        if ([eventTrackingMode isKindOfClass:[NSString class]]) {
            SLEventTrackingMode nativeEventTrackingMode = rnEventTrackingModeToNative[eventTrackingMode];
            if (nativeEventTrackingMode != nil) {
                DLog(@" --> setEventTrackingMode:'%@'", nativeEventTrackingMode);
                [Smartlook setEventTrackingModeTo:nativeEventTrackingMode];
            }
        }
    });
}

RCT_EXPORT_METHOD(setEventTrackingModes:(NSArray *)eventTrackingModes)
{
    DLog(@"setEventTrackingModes:'%@'", eventTrackingModes);
    dispatch_async(dispatch_get_main_queue(), ^{
        NSMutableArray<NSString *> *nativeEventTrackingModes = [NSMutableArray new];
        if ([eventTrackingModes isKindOfClass:[NSArray class]]) {
            [eventTrackingModes enumerateObjectsUsingBlock:^(NSString *  _Nonnull eventTrackingMode, NSUInteger idx, BOOL * _Nonnull stop) {
                SLEventTrackingMode nativeEventTrackingMode = rnEventTrackingModeToNative[eventTrackingMode];
                if (nativeEventTrackingMode != nil) {
                    [nativeEventTrackingModes addObject:nativeEventTrackingMode];
                }
            }];
        }
        DLog(@" --> setEventTrackingModes:'%@'", nativeEventTrackingModes);
        [Smartlook setEventTrackingModesTo:nativeEventTrackingModes];
    });
}

//MARK: - EVENTS

RCT_EXPORT_METHOD(startTimedCustomEvent:(NSString*)name map:(NSDictionary*)map resolve:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    DLog(@"'%@'", @"startTimedCustomEvent");
    NSUUID * key = [Smartlook startTimedCustomEventWithName:name props:map];
    NSString *keyString = [key UUIDString];
    resolve(keyString);
}

RCT_EXPORT_METHOD(stopTimedCustomEvent:(NSString*)key map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"stopTimedCustomEvent");
        NSUUID *uuidKey = [[NSUUID alloc] initWithUUIDString:key];
        [Smartlook trackTimedCustomEventWithEventId:uuidKey props:map];
    });
}

RCT_EXPORT_METHOD(cancelTimedCustomEvent:(NSString*)key reason:(NSString *)reason map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"cancelTimedCustomEvent");
        NSUUID *uuidKey = [[NSUUID alloc] initWithUUIDString:key];
        [Smartlook trackTimedCustomEventCancelWithEventId:uuidKey reason:reason props:map];
    });
}

RCT_EXPORT_METHOD(trackCustomEvent:(NSString*)key map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"trackCustomEvent");
        [Smartlook trackCustomEventWithName:key props:map];
    });
}

RCT_EXPORT_METHOD(trackNavigationEvent:(nonnull NSString*)controllerId direction:(NSString *)direction)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"trackNavigationEvent");
        NSString *cid = [NSString stringWithFormat:@"%@", controllerId];
        NSString *dir = [[NSString stringWithFormat:@"%@", direction] lowercaseString];
        BOOL isExit = [dir isEqualToString:@"exit"] || [dir isEqualToString:@"stop"];
        SLNavigationType navType = isExit ? SLNavigationTypeExit: SLNavigationTypeEnter;
        [Smartlook trackNavigationEventWithControllerId:cid type:navType];
    });
}

// MARK: - BLACKLIST VIEWS

-(void) traverseReactTagViewNodes: (NSNumber *) reactTag withBlock: (react_view_node_block_t) block {
    dispatch_async(dispatch_get_main_queue(), ^{
        UIView* view = [self.bridge.uiManager viewForReactTag:reactTag];
        RCTTraverseViewNodes(view, block);
    });
}

RCT_EXPORT_METHOD(registerBlacklistedView:(nonnull NSNumber*)reactTag)
{
    DLog(@"'%@'", @"registerBlacklistedView");
    [self traverseReactTagViewNodes:reactTag withBlock:^(UIView *node) {
        [Smartlook registerBlacklistedObject:node];
    }];
}


RCT_EXPORT_METHOD(unregisterBlacklistedView:(nonnull NSNumber*)reactTag)
{
    DLog(@"'%@'", @"unregisterBlacklistedView");
    [self traverseReactTagViewNodes:reactTag withBlock:^(UIView *node) {
        [Smartlook unregisterBlacklistedObject:node];
    }];
}

// MARK: - WHITELIST VIEWS

RCT_EXPORT_METHOD(registerWhitelistedView:(nonnull NSNumber*)reactTag)
{
    DLog(@"'%@'", @"registerWhitelistedView");
    [self traverseReactTagViewNodes:reactTag withBlock:^(UIView *node) {
        [Smartlook registerWhitelistedObject:node];
    }];
}

RCT_EXPORT_METHOD(unregisterWhitelistedView:(nonnull NSNumber*)reactTag)
{
    DLog(@"'%@'", @"unregisterWhitelistedView");
    [self traverseReactTagViewNodes:reactTag withBlock:^(UIView *node) {
        [Smartlook unregisterWhitelistedObject:node];
    }];
}

RCT_EXPORT_METHOD(setViewIsSensitive:(nonnull NSNumber*)reactTag isSensitive:(BOOL)isSensitive)
{
    DLog(@"'%@' isSensitive: %d", @"setViewIsSensitive:", isSensitive);
    [self traverseReactTagViewNodes:reactTag withBlock:^(UIView *node) {
        node.slSensitive = isSensitive;
    }];
}


// MARK: - GLOBAL EVENT PROPERTIES

RCT_EXPORT_METHOD(removeAllGlobalEventProperties)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"removeAllGlobalEventProperties");
        [Smartlook clearGlobalEventProperties];
    });
}

RCT_EXPORT_METHOD(removeGlobalEventProperty:(NSString*)key)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"removeGlobalEventProperty");
        [Smartlook removeGlobalEventPropertyForName:key];
    });
}

RCT_EXPORT_METHOD(setGlobalEventProperties:(NSDictionary*)map immutable:(BOOL)immutable)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"setGlobalEventProperties");
        SLPropertyOption options = immutable ? SLPropertyOptionImmutable : SLPropertyOptionDefaults;
        [map enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
            NSString *keyString = [NSString stringWithFormat:@"%@", key];
            NSString *valueString = [NSString stringWithFormat:@"%@", obj];
            [Smartlook setGlobalEventPropertyValue:valueString forName:keyString withOptions:options];
        }];
    });
}

RCT_EXPORT_METHOD(setGlobalEventProperty:(NSString*)key value:(NSString*)value immutable:(BOOL)immutable)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        DLog(@"'%@'", @"setGlobalEventProperty");
        SLPropertyOption options = immutable ? SLPropertyOptionImmutable : SLPropertyOptionDefaults;
        NSString *keyString = [NSString stringWithFormat:@"%@", key];
        NSString *valueString = [NSString stringWithFormat:@"%@", value];
        [Smartlook setGlobalEventPropertyValue:valueString forName:keyString withOptions:options];
    });
}

// MARK: - INTEGRATIONS

RCT_EXPORT_METHOD(getDashboardSessionUrl:(BOOL)withCurrentTimestamp resolve:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    DLog(@"'%@' withTimestamp:%@", @"getDashboardSessionUrl", @(withCurrentTimestamp));
    resolve([Smartlook getDashboardSessionURLWithCurrentTimestamp:withCurrentTimestamp].absoluteString);
}

RCT_EXPORT_METHOD(getDashboardVisitorUrl:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    DLog(@"'%@'", @"getDashboardVisitorUrl");
    resolve([Smartlook getDashboardVisitorURL].absoluteString);
}

// MARK: callbacks

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"integrationCallback"];
}

- (void)integrationURLDidChange:(NSNotification *)notification {
    DLog(@"'%@' -> %@", @"integrationURLDidChange", notification.name);
    NSDictionary *param;
    if ([notification.name isEqualToString:SLDashboardSessionURLChangedNotification]) {
        param = @{ @"dashboardSessionUrl" : [Smartlook getDashboardSessionURLWithCurrentTimestamp:NO].absoluteString};
    } else if ([notification.name isEqualToString:SLDashboardVisitorURLChangedNotification]) {
        param = @{ @"dashboardVisitorUrl" : [Smartlook getDashboardVisitorURL].absoluteString};
    }
    [self sendEventWithName:@"integrationCallback" body:param];
    DLog(@"'%@' -> %@", @"integrationURLDidChange", [param description]);
}

RCT_EXPORT_METHOD(registerIntegrationListener) {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(integrationURLDidChange:) name:SLDashboardSessionURLChangedNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(integrationURLDidChange:) name:SLDashboardVisitorURLChangedNotification object:nil];
}

RCT_EXPORT_METHOD(unregisterIntegrationListener) {
    [[NSNotificationCenter defaultCenter] removeObserver:self name:SLDashboardSessionURLChangedNotification object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:SLDashboardVisitorURLChangedNotification object:nil];
}

// MARK: - OTHERS

RCT_EXPORT_METHOD(setReferrer:(NSString *)referrer source:(NSString*)source)
{
    DLog(@"'%@'", @"setReferrer");
    // not supported yet
}

RCT_EXPORT_METHOD(enableCrashlytics:(BOOL*)enabled)
{
    DLog(@"'%@'", @"enableCrashlytics");
    // not supported in the current Smartlook version
}

@end
