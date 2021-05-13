import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { Icon } from 'react-native-magnus';

function FadingView({ children, duration = 800 }: { children: React.ReactChild; duration?: number }) {
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

	React.useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0,
					duration,
					useNativeDriver: true,
				}),
			]),
		).start();
	}, [fadeAnim, duration]);

	return (
		<Animated.View // Special animatable View
			style={{
				opacity: fadeAnim, // Bind opacity to animated value
			}}
		>
			{children}
		</Animated.View>
	);
}

function RecordingIndicator({ isRecording }: { isRecording: boolean }) {
	return isRecording ? (
		<FadingView>
			<Icon name="record-rec" fontFamily="MaterialCommunityIcons" fontSize="6xl" mr="md" color={'#e53e3e'} />
		</FadingView>
	) : (
		<Icon name="record-rec" fontFamily="MaterialCommunityIcons" fontSize="6xl" mr="md" />
	);
}

export default RecordingIndicator;
