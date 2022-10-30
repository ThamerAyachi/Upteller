import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function SettingsScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from SettingsScreen</Text>
			</View>
		</TailwindProvider>
	);
}

export default SettingsScreen;
