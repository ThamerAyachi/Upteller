import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
	return (
		<TailwindProvider>
			<View className="py-10 px-3 ">
				<Text>Hello !</Text>
			</View>
		</TailwindProvider>
	);
}
