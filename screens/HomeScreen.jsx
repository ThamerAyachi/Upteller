import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import * as Speech from "expo-speech";

function HomeScreen() {
	Speech.speak("Hello there ! What you want to do today ?");

	return (
		<TailwindProvider>
			<View className="">
				<Text
					className="p-3 text-2xl my-5 text-center text-gray-700"
					onPress={() =>
						Speech.speak("Hello there ! What you want to do today ?")
					}
				>
					Hello there ! What you want to do today ?
				</Text>
			</View>
		</TailwindProvider>
	);
}

export default HomeScreen;
