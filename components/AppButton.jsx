import { TouchableOpacity, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

const AppButton = ({ onPress, children }) => {
	return (
		<TailwindProvider>
			<TouchableOpacity
				onPress={onPress}
				className="bg-white p-3 shadow-sm rounded mx-2 mb-1 border border-gray-200"
			>
				<Text>{children}</Text>
			</TouchableOpacity>
		</TailwindProvider>
	);
};

export default AppButton;
