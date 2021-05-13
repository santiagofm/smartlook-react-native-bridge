import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Div, Icon, Input, StatusBar, Text } from 'react-native-magnus';
import Smartlook from 'smartlook-react-native-wrapper';
import { useRecordingContext } from '../contexts/recordingContext';

function TokenInputScreen() {
	const { dispatch } = useRecordingContext();
	const [token, setToken] = React.useState('API_KEY');
	const [userId, setUserId] = React.useState('');
	const navigation = useNavigation();

	const onSubmit = () => {
		Smartlook.setup({ smartlookAPIKey: token, startNewSessionAndUser: false });
		Smartlook.setUserIdentifier(userId);
		dispatch({ type: 'startRecording' });
		navigation.goBack();
	};

	return (
		<>
			<StatusBar />
			<SafeAreaView style={{ flex: 1 }}>
				<Div flex={1} bg="screenBg">
					<ScrollView>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Smartlook
							</Text>
							<Div row>
								<Div flex={3}>
									<Input
										p={10}
										focusBorderColor="blue700"
										placeholder="API Key"
										value={token}
										onChangeText={setToken}
									/>
									<Text mt="md" color="gray700">
										You can find API key in Smartlook: Settings organisation / Project / your project what you need
									</Text>

									<Input
										p={10}
										focusBorderColor="blue700"
										placeholder="User ID"
										value={userId}
										onChangeText={setUserId}
									/>

									<Text mt="md" color="gray700">
										Under user ID you will find your recordings in the Smartlook application. You can choose any user
										ID.
									</Text>
									<Button
										mt="lg"
										px="xl"
										py="lg"
										bg="green700"
										color="white"
										suffix={<Icon name="arrowright" ml="md" color="white" />}
										onPress={onSubmit}
									>
										Setup with API key
									</Button>
								</Div>
							</Div>
						</Div>
					</ScrollView>
				</Div>
			</SafeAreaView>
		</>
	);
}

export default TokenInputScreen;
