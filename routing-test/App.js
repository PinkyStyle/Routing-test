import { useState } from 'react';
import { LoginScreen } from './src/screens/loginScreen.js';
import { HomeScreen } from './src/screens/homeScreen.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebaseConfig.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function App() {
	const [ logged_in, setLogged_in] = useState(false);
	onAuthStateChanged(auth, (user) => {
		if(user){
			setLogged_in(true);
		}
		else{
			setLogged_in(false);
		}
	});
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{logged_in ? (
				<>
					<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
				</>
				) : (
				<>
					<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}></Stack.Screen>
				</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
 	);
}