
# react-native-smartlook

## Getting started

`$ npm install react-native-smartlook --save`

### Mostly automatic installation

`$ react-native link react-native-smartlook`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-smartlook` and add `RNSmartlook.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSmartlook.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

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
  