
package com.smartlook.sdk;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIBlock;
import com.facebook.react.uimanager.UIManagerModule;
import com.smartlook.sdk.smartlook.Smartlook;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class RNSmartlookModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNSmartlookModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNSmartlook";
  }

  @ReactMethod
  public void init(String smartLookAPIKey) {
    Smartlook.init(smartLookAPIKey, false);
  }

//  @ReactMethod
//  public void init(String smartLookAPIKey, boolean experimental) {
//    Smartlook.init(smartLookAPIKey, experimental);
//  }

  @ReactMethod
  public void identify(String s, ReadableMap o) {
      try {
          if (o == null) {
              Smartlook.identify(s);
          } else {
              Smartlook.identify(s, convertMapToJson(o));
          }
      } catch (JSONException e) {}
  }

  @ReactMethod
  public void removeAllSuperProperties() {
    Smartlook.removeAllSuperProperties();
  }

  @ReactMethod
  public void removeSuperPropertyByKey(String s) {
    Smartlook.removeSuperPropertyByKey(s);
  }

  @ReactMethod
  public void setGlobalImmutableProperties(ReadableMap o) {
      try {
          Smartlook.setGlobalImmutableProperties(convertMapToJson(o));
      } catch (JSONException e) {}
  }

  @ReactMethod
  public void setGlobalProperties(ReadableMap o) {
      try {
          Smartlook.setGlobalProperties(convertMapToJson(o));
      } catch (JSONException e) {}
  }

  @ReactMethod
  public void timeEvent(String s) {
    Smartlook.timeEvent(s);
  }

  @ReactMethod
  public void track(String s, ReadableMap o) {
      try {
          if (o == null) {
              Smartlook.track(s);
          } else {
              Smartlook.track(s, convertMapToJson(o));
          }
      } catch (JSONException e) {}
  }

    @ReactMethod
    public void markViewAsSensitive(final int id) {
        UIManagerModule uiManager = getReactApplicationContext().getNativeModule(UIManagerModule.class);
        uiManager.addUIBlock(new UIBlock()
        {
            @Override
            public void execute(NativeViewHierarchyManager nativeViewHierarchyManager)
            {
                try
                {
                    View view = nativeViewHierarchyManager.resolveView(id);

                    if (view != null)
                        Smartlook.markViewAsSensitive(view);
                }
                catch(Exception e)
                {
                }
            }
        });
    }


    private static JSONObject convertMapToJson(ReadableMap readableMap) throws JSONException {
        JSONObject object = new JSONObject();
        ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
        while (iterator.hasNextKey()) {
            String key = iterator.nextKey();
            switch (readableMap.getType(key)) {
                case Null:
                    object.put(key, JSONObject.NULL);
                    break;
                case Boolean:
                    object.put(key, readableMap.getBoolean(key));
                    break;
                case Number:
                    object.put(key, readableMap.getDouble(key));
                    break;
                case String:
                    object.put(key, readableMap.getString(key));
                    break;
                case Map:
                    object.put(key, convertMapToJson(readableMap.getMap(key)));
                    break;
                case Array:
                    object.put(key, convertArrayToJson(readableMap.getArray(key)));
                    break;
            }
        }
        return object;
    }

    private static JSONArray convertArrayToJson(ReadableArray readableArray) throws JSONException {
        JSONArray array = new JSONArray();
        for (int i = 0; i < readableArray.size(); i++) {
            switch (readableArray.getType(i)) {
                case Null:
                    break;
                case Boolean:
                    array.put(readableArray.getBoolean(i));
                    break;
                case Number:
                    array.put(readableArray.getDouble(i));
                    break;
                case String:
                    array.put(readableArray.getString(i));
                    break;
                case Map:
                    array.put(convertMapToJson(readableArray.getMap(i)));
                    break;
                case Array:
                    array.put(convertArrayToJson(readableArray.getArray(i)));
                    break;
            }
        }
        return array;
    }
}