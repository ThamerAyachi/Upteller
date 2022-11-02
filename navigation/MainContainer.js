import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Astrology from "../screens/Astrology";

// Screens names
const homeName = "Home";
const aboutName = "About";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeTabs = () => {
// 	return (
// 		<NavigationContainer>
// 			<Tab.Navigator
// 				initialRouteName={homeName}
// 				screenOptions={({ route }) => ({
// 					tabBarIcon: ({ focused, color, size }) => {
// 						let iconName;
// 						let routeName = route.name;

// 						if (routeName === homeName)
// 							iconName = focused ? "home" : "home-outline";
// 						else if (routeName === aboutName)
// 							iconName = focused ? "help" : "help-outline";
// 						else if (routeName === settingsName)
// 							iconName = focused ? "settings" : "settings-outline";

// 						return <Ionicons name={iconName} size={size} color={color} />;
// 					},
// 				})}
// 			>
// 				<Tab.Screen name={homeName} component={HomeScreen} />
// 				<Tab.Screen name={aboutName} component={AboutScreen} />
// 				<Tab.Screen name={settingsName} component={SettingsScreen} />
// 			</Tab.Navigator>
// 		</NavigationContainer>
// 	);
// };

const MainContainer = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Welcome"
					options={{ headerShown: false, animationEnabled: false }}
				>
					{() => {
						return (
							<Tab.Navigator
								initialRouteName={homeName}
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused, color, size }) => {
										let iconName;
										let routeName = route.name;

										if (routeName === homeName)
											iconName = focused ? "home" : "home-outline";
										else if (routeName === aboutName)
											iconName = focused ? "help" : "help-outline";
										else if (routeName === settingsName)
											iconName = focused ? "settings" : "settings-outline";

										return (
											<Ionicons name={iconName} size={size} color={color} />
										);
									},
								})}
							>
								<Tab.Screen name={homeName} component={HomeScreen} />
								<Tab.Screen name={aboutName} component={AboutScreen} />
								<Tab.Screen name={settingsName} component={SettingsScreen} />
							</Tab.Navigator>
						);
					}}
				</Stack.Screen>
				<Stack.Screen name="Astrology" component={Astrology} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainContainer;
