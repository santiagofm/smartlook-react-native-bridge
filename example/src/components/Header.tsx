import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Div, Text, Button, Header as MGHeader, Toggle, Icon } from 'react-native-magnus';
import { useRecordingContext } from '../contexts/recordingContext';
import RecordingIndicator from './RecordingIndicator';

import useTime from '../hooks/useTime';

function Header({ showBackButton = true }) {
	const navigation = useNavigation();
	// const [isRecording, setIsRecording] = useState(true);
	const { dispatch, state } = useRecordingContext();
	const { time } = useTime();

	return (
		<MGHeader
			prefix={
				showBackButton && (
					<Button
						rounded="circle"
						mr="lg"
						bg="card"
						justifyContent="center"
						alignItems="center"
						onPress={() => navigation.goBack()}
					>
						<Icon name="arrowleft" fontSize="4xl" color="textDark" />
					</Button>
				)
			}
			suffix={
				<Div mr="lg" row>
					<Div row justifyContent="space-between" alignItems="center" mr="lg">
						<Text>{time}</Text>
						<RecordingIndicator isRecording={state.isRecording} />
						<Toggle
							h={25}
							w={40}
							on={state.isRecording}
							onPress={() => {
								if (state.isRecording) {
									dispatch({ type: 'stopRecording' });
								} else {
									dispatch({ type: 'startRecording' });
								}
							}}
						/>
					</Div>
				</Div>
			}
		>
			<Div>
				<Text fontWeight="bold" fontSize="xl" textTransform="uppercase" color="textDark">
					Smartlook
				</Text>
			</Div>
		</MGHeader>
	);
}

export default Header;
