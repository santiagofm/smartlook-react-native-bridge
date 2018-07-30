
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

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.smartlook.sdk.RNSmartlookPackage;` to the imports at the top of the file
  - Add `new RNSmartlookPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-smartlook'
  	project(':react-native-smartlook').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-smartlook/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-smartlook')
  	```


## Usage
```javascript
var Smartlook = require('@adamblack/smartlook-react-native-wrapper');

Smartlook.init("KEY");
...
```
  
