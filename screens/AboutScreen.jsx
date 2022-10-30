import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function AboutScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from AboutScreen</Text>
			</View>
		</TailwindProvider>
	);
}

export default AboutScreen;
