import React from 'react';
import { TouchableOpacity as RNButton, TouchableOpacityProps, StyleSheet, Text } from 'react-native';

const Button = React.forwardRef<RNButton, { children: React.ReactChild } & TouchableOpacityProps>(
	({ children, ...props }, ref) => (
		<RNButton ref={ref} style={styles.button} {...props}>
			{typeof children === 'string' ? <Text>{children}</Text> : children}
		</RNButton>
	),
);

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		marginBottom: 5,
	},
});

export default Button;
