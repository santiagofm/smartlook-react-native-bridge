import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Div, Text, StatusBar, Button as MGButton, Checkbox, Input } from 'react-native-magnus';
import Smartlook, { SmartlookSensitiveComponent } from 'smartlook-react-native-wrapper';
import { Header, Button } from '../components';
import { useRecordingContext } from '../contexts/recordingContext';
import type { RootStackParamList } from '../types';

const EVENT_ID = 'EVENT';

function HomeScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Home'> }) {
	const { dispatch } = useRecordingContext();
	const [buttonBlacklisted, setButtonBlacklisted] = useState(true);
	const [funcButtonBlacklisted, setFuncButtonBlacklisted] = useState(true);
	const [textFieldWhitelisted, setTextFieldWhitelisted] = useState(false);
	const [whitelistedTextFieldText, setWhitelistedTextFieldText] = useState('');

	useEffect(() => {
		navigation.navigate('TokenInputScreen');
	}, [navigation]);

	return (
		<>
			<StatusBar />
			<SafeAreaView style={{ flex: 1 }}>
				<Div flex={1} bg="screenBg">
					<Header showBackButton={false} />
					<ScrollView>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Recording
							</Text>
							<Div row>
								<Div flex={3}>
									<Button onPress={() => dispatch({ type: 'stopRecording' })}>Stop recording</Button>
									<Button onPress={() => dispatch({ type: 'startRecording' })}>Start recording</Button>
								</Div>
							</Div>
						</Div>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Events1
							</Text>
							<Div row>
								<Div flex={3}>
									<Button onPress={() => Smartlook.trackCustomEvent(EVENT_ID)}>Track event</Button>
								</Div>
							</Div>
						</Div>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Blacklisted component
							</Text>
							<Div row>
								<Div flex={3}>
									<SmartlookSensitiveComponent isSensitive={buttonBlacklisted}>
										<Button
											onPressIn={() => {
												setButtonBlacklisted(false);
											}}
											onPressOut={() => {
												setButtonBlacklisted(true);
											}}
										>
											{buttonBlacklisted ? 'Blacklisted button' : 'Button whitelisted'}
										</Button>
									</SmartlookSensitiveComponent>

									<SmartlookSensitiveComponent isSensitive={funcButtonBlacklisted}>
										<View>
											<MGButton
												onPressIn={() => {
													setFuncButtonBlacklisted(false);
												}}
												onPressOut={() => {
													setFuncButtonBlacklisted(true);
												}}
											>
												Blacklisting functional component
											</MGButton>
										</View>
									</SmartlookSensitiveComponent>
								</Div>
							</Div>
						</Div>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Whitelisted component
							</Text>
							<Div>
								<Div flex={2}>
									<Div flex={1} pb="xl">
										<Checkbox
											value={textFieldWhitelisted}
											onChange={(value) => {
												console.log(`val: ${!value}`);
												setTextFieldWhitelisted(!value);
											}}
											prefix={<Text flex={1}>Sensitive</Text>}
										/>
									</Div>
									<SmartlookSensitiveComponent isSensitive={textFieldWhitelisted}>
										<Input
											focusBorderColor="blue700"
											value={whitelistedTextFieldText}
											onChangeText={setWhitelistedTextFieldText}
											placeholder="Whitelisted input"
										/>
									</SmartlookSensitiveComponent>
								</Div>
							</Div>
						</Div>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Navigation
							</Text>
							<Div row>
								<Div flex={3}>
									<Button onPress={() => navigation.navigate('FirstScreen')}>Push screen</Button>
								</Div>
							</Div>
						</Div>
					</ScrollView>
				</Div>
			</SafeAreaView>
		</>
	);
}

export default HomeScreen;
