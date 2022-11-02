import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function CompatibilityScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from CompatibilityScreen</Text>
			</View>
		</TailwindProvider>
	);
}

export default CompatibilityScreen;
