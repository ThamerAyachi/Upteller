import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function MeteorScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from MeteorScreen</Text>
			</View>
		</TailwindProvider>
	);
}

export default MeteorScreen;
