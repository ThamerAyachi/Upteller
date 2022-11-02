import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

function NetflixScreen() {
	return (
		<TailwindProvider>
			<View className="flex-1 items-center justify-center">
				<Text>Hello from NetflixScreen</Text>
			</View>
		</TailwindProvider>
	);
}

export default NetflixScreen;
