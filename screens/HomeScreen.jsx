import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function HomeScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from home screen</Text>
			</View>
		</TailwindProvider>
	);
}

export default HomeScreen;
