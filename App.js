import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
	return (
		<TailwindProvider>
			<View className="flex-1 justify-center items-center">
				<Text>Hello From My app to your Iphone</Text>
				<StatusBar style="auto" />
			</View>
		</TailwindProvider>
	);
}
