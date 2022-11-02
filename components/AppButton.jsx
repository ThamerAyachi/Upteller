import { TouchableOpacity, Text, Animated } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import * as React from "react";

const AppButton = ({ onPress, children, index }) => {
	const translation = React.useRef(new Animated.Value(-50)).current;
	const opacity = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		setTimeout(() => {
			Animated.timing(opacity, {
				toValue: 1,
				useNativeDriver: true,
			}).start();
			Animated.timing(translation, {
				toValue: 0,
				useNativeDriver: true,
			}).start();
		}, 500 * index + 500);
	}, []);

	return (
		<Animated.View
			style={{
				transform: [{ translateY: translation }],
				opacity: opacity,
			}}
		>
			<TailwindProvider>
				<TouchableOpacity
					onPress={onPress}
					className="bg-white p-3 shadow-sm rounded mx-2 mb-1 border border-gray-200"
				>
					<Text>{children}</Text>
				</TouchableOpacity>
			</TailwindProvider>
		</Animated.View>
	);
};

export default AppButton;
