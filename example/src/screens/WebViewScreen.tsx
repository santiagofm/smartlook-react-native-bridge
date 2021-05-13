import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Div, Text, StatusBar, Button, Icon, Checkbox } from 'react-native-magnus';
import { useSmartlookSensitiveRef } from 'smartlook-react-native-wrapper';
import { WebView } from 'react-native-webview';

import { Header } from '../components';

const HTML = `
<!doctype html>\n\n<html lang="en">\n
<head>\n
	<meta charset="utf-8">\n\n
	<title>Smartlook Test</title>\n
	<meta name="description" content="Smartlook Test">\n
</head>\n\n
<body>\n
	<div class="random">\n <h1>Smartlook testing JS C</h1>\n </div>\n
	<div class="smartlook-hide">\n
		<h1>Smartlook HIDDEN</h1>\n </div>\n
	<div class="random">\n
		<h1>Smartlook testing</h1>\n
	</div>\n
	<div class="smartlook-hide">\n
		<h1>Smartlook HIDDEN</h1>\n
	</div>\n
	<div class="random">\n
		<h1>Smartlook testing</h1>\n
	</div>\n
	<div>\n
		<input type="text" />\n
	</div>\n
	<div>\n
		<input type="button" value="Button" />\n
	</div>\n
	<div>\n
		<input type="password" />\n
	</div>\n
</body>\n
</html>`;

function WebViewScreen() {
	const [isWebViewSensitive, setIsWebViewSensitive] = useState(true);
	const ref = useSmartlookSensitiveRef<WebView>(isWebViewSensitive);

	return (
		<>
			<StatusBar />
			<SafeAreaView style={{ flex: 1 }}>
				<Div flex={1} bg="screenBg">
					<Header showBackButton={true} />
					<Div mt="xl" px="xl">
						<Text pb="lg" fontSize="3xl" color="textDark">
							Webview
						</Text>
						<Div row>
							<Checkbox
								checked={isWebViewSensitive}
								onChecked={setIsWebViewSensitive}
								prefix={<Text flex={1}>Is webview sensitive?</Text>}
							/>
							<Button
								bg="white"
								borderless
								shadow="sm"
								h={40}
								w={40}
								rounded="circle"
								mb="lg"
								alignSelf="flex-end"
								onPress={() => ref.current!.reload()}
							>
								<Icon name="refresh" fontFamily="Ionicons" fontSize="xl" alignSelf="center" />
							</Button>
						</Div>
						<Div row style={{ width: '100%', height: '100%' }}>
							<WebView ref={ref} originWhitelist={['*']} source={{ html: HTML }} javaScriptEnabled />
						</Div>
					</Div>
				</Div>
			</SafeAreaView>
		</>
	);
}

export default WebViewScreen;
