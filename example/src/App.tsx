import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Smartlook from 'smartlook-react-native-wrapper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import { darkTheme, getThemeName, lightTheme } from './themes';
import FirstScreen from './screens/FirstScreen';
import { RecordingProvider } from './contexts/recordingContext';
import type { RootStackParamList } from './types';
import TokenInputScreen from './screens/TokenInputScreen';
import WebViewScreen from './screens/WebViewScreen';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function StackScreen() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="FirstScreen" component={FirstScreen} />
			<Stack.Screen name="WebViewScreen" component={WebViewScreen} />
		</Stack.Navigator>
	);
}

function App() {
	const [themeName, setThemeName] = React.useState('light');

	const navigationRef = useNavigationContainerRef();
	const routeNameRef = useRef<string>();

	React.useEffect(() => {
		async function getTheme() {
			getThemeName()
				.then((theme) => setThemeName(theme))
				.catch((err) => console.error(err));
		}

		getTheme();
	}, []);

	return (
		<RecordingProvider>
			<ThemeProvider theme={themeName === 'dark' ? darkTheme : lightTheme}>
				<NavigationContainer
					ref={navigationRef}
					onReady={() => (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name)}
					onStateChange={async () => {
						const previousRouteName = routeNameRef.current || '';
						const currentRouteName = navigationRef.current?.getCurrentRoute()?.name || '';

						console.log('route name: ', currentRouteName);

						if (previousRouteName !== currentRouteName) {
							Smartlook.trackNavigationEvent(previousRouteName, Smartlook.ViewState.Exit);
							Smartlook.trackNavigationEvent(currentRouteName, Smartlook.ViewState.Enter);
						}

						// Save the current route name for later comparison
						routeNameRef.current = currentRouteName;
					}}
				>
					<RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
						<RootStack.Screen name="Main" component={StackScreen} options={{ headerShown: false }} />
						<RootStack.Screen name="TokenInputScreen" component={TokenInputScreen} />
					</RootStack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</RecordingProvider>
	);
}

export default App;
