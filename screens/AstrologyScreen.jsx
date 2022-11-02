import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function AstrologyScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from Astrology</Text>
			</View>
		</TailwindProvider>
	);
}

export default AstrologyScreen;
