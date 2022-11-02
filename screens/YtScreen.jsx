import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function YTScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from YTScreen</Text>
			</View>
		</TailwindProvider>
	);
}

export default YTScreen;
