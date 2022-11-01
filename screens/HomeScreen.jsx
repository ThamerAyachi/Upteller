import { Text, View, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import * as Speech from "expo-speech";
import AppButton from "../components/AppButton";
import { Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";

function HomeScreen() {
	const buttons = [
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 32" viewBox="0 0 64 64"><path d="M51.8 14.6a1 1 0 0 0-1.237-1.5L36.458 20 32.971 5.762a1 1 0 0 0-1.942 0L27.543 20l-14.104-6.9a1 1 0 0 0-1.239 1.5l9.525 12.6-16.164 7.9A1 1 0 0 0 6 37h17.379l-4.35 17.762a1 1 0 0 0 1.771.838L32 40.787 43.2 55.6a1 1 0 0 0 .8.4.987.987 0 0 0 .429-.1 1 1 0 0 0 .542-1.141L40.622 37H58a1 1 0 0 0 .439-1.9l-16.165-7.9Zm-4.122 2.134L40.443 26.3l-2.773-1.352-.726-2.963ZM32 10.2l2.619 10.7L32 22.176 29.382 20.9Zm-15.676 6.538 10.732 5.247-.725 2.963-2.774 1.352ZM10.322 35l12.634-6.176 1.832 2.423L23.869 35Zm11.8 15.533L25.438 37h3.7l1.61 2.129Zm8.31-15.133a1 1 0 0 0-.8-.4h-3.704l.915-3.738a1 1 0 0 0-.173-.842l-1.884-2.491 2.843-1.39a1 1 0 0 0 .533-.66l.733-3 2.666 1.3a1.009 1.009 0 0 0 .878 0l2.666-1.3.734 3a1 1 0 0 0 .532.66l2.843 1.39-1.883 2.491a1 1 0 0 0-.174.842L38.073 35h-3.707a1 1 0 0 0-.8.4L32 37.471Zm11.444 15.133-8.622-11.4L34.864 37h3.7ZM53.678 35H40.132l-.919-3.753 1.832-2.423Z"/><path d="M32 51a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM14.9 39.553a1.042 1.042 0 0 0-1.79 0l-3 6A1 1 0 0 0 11 47h6a1 1 0 0 0 .895-1.447zM12.618 45 14 42.236 15.382 45zm36.531-22.525a1 1 0 0 0-.044.972l3 6a1 1 0 0 0 1.79 0l3-6A1 1 0 0 0 56 22h-6a1 1 0 0 0-.851.475zM54.382 24 53 26.764 51.618 24zM7.958 28.675a1 1 0 0 0 .912.009l5.914-2.958.251 1.757 1.98-.283-.448-3.131a1 1 0 0 0-1.437-.753l-5.914 2.958-.251-1.757-1.98.283.448 3.131a1 1 0 0 0 .525.744zm45.991 11.009-1.9.632.564 1.684H46a1 1 0 0 0-.949 1.316l1 3 1.9-.632L47.387 44H54a1 1 0 0 0 .949-1.316zM36 30a4 4 0 1 0-4 4 4 4 0 0 0 4-4zm-4 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-9.707-17.293a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414zM23 9.414 24.586 11 23 12.586 21.414 11zM42 15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 4 4 0 0 0 0 8zm-1-5.731v3.462a2 2 0 0 1 0-3.462z"/><path d="M32 1a31 31 0 1 0 31 31A31.035 31.035 0 0 0 32 1Zm0 60a29 29 0 1 1 29-29 29.033 29.033 0 0 1-29 29Z"/></svg>`,
			title: "Astrology sign's news",
			color: "#dc2626",
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="17-meteor"><path d="M22,29a8,8,0,1,1,8-8A8,8,0,0,1,22,29Zm0-14a6,6,0,1,0,6,6A6,6,0,0,0,22,15Z"/><path d="M22 19a4 4 0 0 1-4-4h2a2 2 0 0 0 4 0h2A4 4 0 0 1 22 19zM27 27H25a2 2 0 0 0-4 0H19a4 4 0 0 1 8 0z"/><polygon points="12.25 24.66 4.03 15.27 10.31 14.37 3.54 2.76 16.23 8.62 17.15 3.08 26.65 11.24 25.35 12.76 18.54 6.92 17.77 11.53 8.46 7.24 13.54 15.93 7.97 16.73 13.75 23.34 12.25 24.66"/></g></svg>`,
			title: "Daily meteor summary",
			color: "#06b6d4",
		},
	];
	// setTimeout(() => {
	// 	Speech.speak("Hello there !");
	// 	Speech.speak("What you wana do ?");
	// }, 500);

	return (
		<TailwindProvider>
			<View className="">
				<Text className="pt-3 px-3 text-2xl mt-5 text-center text-gray-700">
					Hello there !
				</Text>
				<Text className="px-3 text-2xl mx-5 text-center text-gray-700">
					What you want to do ?
				</Text>
			</View>
			<View className="mt-11">
				{buttons.map((b) => {
					return (
						<AppButton>
							<View style={style.buttonContainer}>
								<SvgXml xml={b.icon} width={50} height={40} fill={b.color} />
								<Text className="text-lg px-3 text-gray-700">{b.title}</Text>
							</View>
						</AppButton>
					);
				})}
			</View>
		</TailwindProvider>
	);
}

const style = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		// justifyContent: "",
		alignItems: "center",
		width: "100%",
	},
});

export default HomeScreen;
