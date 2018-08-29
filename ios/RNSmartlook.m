
#import "RNSmartlook.h"
#import "Smartlook.h"

@implementation RNSmartlook

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
	return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(init:(NSString *)key)
{
	dispatch_async(dispatch_get_main_queue(), ^{
		[Smartlook startWithKey:key];
	});
}

RCT_EXPORT_METHOD(flush)
{
	
}

RCT_EXPORT_METHOD(pause)
{
	
}

RCT_EXPORT_METHOD(start)
{
	
}

RCT_EXPORT_METHOD(identify:(NSString*)idKey map:(NSDictionary*)map)
{
	dispatch_async(dispatch_get_main_queue(), ^{
		if (idKey) {
			[Smartlook setUserIdentifier:idKey];
		}
		
		if (map) {
			[Smartlook setUserPropertiesDictionary:map];
		}
	});
}

RCT_EXPORT_METHOD(removeAllSuperProperties)
{
	
}

RCT_EXPORT_METHOD(removeSuperPropertyByKey:(NSString*)key)
{
	
}

RCT_EXPORT_METHOD(setGlobalImmutableProperties:(NSDictionary*)map)
{
	
}

RCT_EXPORT_METHOD(setGlobalProperties:(NSDictionary*)map)
{
	
}

RCT_EXPORT_METHOD(timeEvent:(NSString*)key)
{
	
}

RCT_EXPORT_METHOD(enableCrashlytics:(BOOL*)enabled)
{
	
}

RCT_EXPORT_METHOD(enableWebviewRecording:(BOOL*)enabled)
{
	
}

RCT_EXPORT_METHOD(track:(NSString*)key map:(NSDictionary*)map)
{
	dispatch_async(dispatch_get_main_queue(), ^{
		[Smartlook recordCustomEventWithEventName:key propertiesDictionary:map];
	});
}

RCT_EXPORT_METHOD(markViewAsSensitive:(nonnull NSNumber*)tag)
{
	dispatch_async(dispatch_get_main_queue(), ^{
		UIView* view = [self.bridge.uiManager viewForReactTag:tag];
		[Smartlook markViewAsSensitive:view overlayColor:nil];
	});
}

RCT_EXPORT_METHOD(unmarkViewAsSensitive:(nonnull NSNumber*)tag)
{
	dispatch_async(dispatch_get_main_queue(), ^{
		UIView* view = [self.bridge.uiManager viewForReactTag:tag];
		[Smartlook unmarkViewAsSensitive:view];
	});
}


@end
