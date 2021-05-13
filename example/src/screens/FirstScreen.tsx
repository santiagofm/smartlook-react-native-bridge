import { useNavigation } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { Linking, SafeAreaView, ScrollView } from 'react-native';
import { Div, Text, StatusBar, Select, SelectRef } from 'react-native-magnus';
import Smartlook from 'smartlook-react-native-wrapper';
import { Header, Button } from '../components';
import useAsync from '../hooks/useAsync';
import { useStopwatch } from '../hooks/useStopwatch';

const TIMED_EVENT_NAME = 'TIMED_EVENT';

function FirstScreen() {
	const navigation = useNavigation();
	const { elapsedTime, startTimer, stopTimer, resetTimer } = useStopwatch();
	const timedEventId = useRef<string | null>(null);

	const [selectValue, setSelectedValue] = useState('native');
	const selectRef = useRef<SelectRef | null>(null);

	const dashboardUrl = useAsync(() => Smartlook.getDashboardSessionUrl());
	const dashboardVisitorUrl = useAsync(() => Smartlook.getDashboardVisitorUrl());

	const handleStartStop = async () => {
		if (timedEventId.current) {
			Smartlook.stopTimedCustomEvent(timedEventId.current!);
			timedEventId.current = null;
			stopTimer();
		} else {
			timedEventId.current = await Smartlook.startTimedCustomEvent(TIMED_EVENT_NAME);
			resetTimer();
			startTimer();
		}
	};
	return (
		<>
			<StatusBar />
			<SafeAreaView style={{ flex: 1 }}>
				<Div flex={1} bg="screenBg">
					<Header />
					<ScrollView>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Timed event
							</Text>
							<Div row>
								<Div flex={3}>
									<Text pb="lg" fontSize="xl" color="textDark">
										{`${elapsedTime}s`}
									</Text>
									<Button onPress={handleStartStop}>{`${timedEventId.current ? 'Stop' : 'Start'} timed event`}</Button>
								</Div>
							</Div>
						</Div>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Rendering
							</Text>
							<Div row>
								<Div flex={3}>
									<Button
										onPress={() => {
											if (selectRef.current) {
												selectRef.current.open();
											}
										}}
									>
										{selectValue.length ? selectValue.toString() : 'Select'}
									</Button>

									<Select
										onSelect={(value) => {
											setSelectedValue(value);
											Smartlook.setRenderingMode(value);
										}}
										ref={selectRef}
										value={selectValue}
										title="Rendering mode"
										mt="md"
										pb="2xl"
										message="Switch Smartlook rendering mode"
										roundedTop="xl"
										data={['native', 'no_rendering', 'wireframe']}
										renderItem={(item) => (
											<Select.Option value={item} py="md" px="xl">
												<Text>{item}</Text>
											</Select.Option>
										)}
									/>
								</Div>
							</Div>
						</Div>
						<Div mt="xl" px="xl">
							<Text pb="lg" fontSize="3xl" color="textDark">
								Dashboards
							</Text>
							<Div row>
								<Div flex={3}>
									<Button onPress={() => Linking.openURL(dashboardUrl!)}>Open dashboard session url</Button>
									<Button onPress={() => Linking.openURL(dashboardVisitorUrl!)}>Open dashboard visitor url</Button>
									<Button onPress={() => navigation.navigate('WebViewScreen')}>Open webview screen</Button>
								</Div>
							</Div>
						</Div>
					</ScrollView>
				</Div>
			</SafeAreaView>
		</>
	);
}

export default FirstScreen;
