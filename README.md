
# react-native-smartlook

## Getting started

`$ npm install @adamblack/smartlook-react-native-wrapper --save`

### Installation

`$ react-native link`


#### iOS

1. `$ pod init` - can be skipped in case you are already using pods
2. Add `pod 'Smartlook'` to your Podfile
3. `$ pod install`
4. Profit

#### Android

1. Open `android/build.gradle`
  - Update gradle version to `classpath 'com.android.tools.build:gradle:3.1.0'`
  - Also add our maven repository:
    ```
    allprojects {
    repositories {
        ...
        maven {
            url "https://sdk.smartlook.com/android/release"
        }
      }
    }
    ```
2. Edit also `gradle-wrapper.properties` so you are using:
    `gradle-4.4-all.zip`
  	
3. New React version should help you to be ready for API 26+ so be sure to update that as well. We are aware that those changes are breaking for many libraries however Google is going to force everybody to newer gradle version very soon and we always want to target most recent stable setting.


## Usage
```javascript
var Smartlook = require('@adamblack/smartlook-react-native-wrapper');

Smartlook.init("KEY");
...
```
  
