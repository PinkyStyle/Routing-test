import { LoginScreen } from './src/screens/loginScreen.js';
import { HomeScreen } from './src/screens/homeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}></Stack.Screen>
				<Stack.Screen name="Home" component={HomeScreen} options={{headerBackVisible: false, t}}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
 	);
}