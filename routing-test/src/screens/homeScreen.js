import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import { MapsScreen } from "./mapsScreen";
import { UsersList } from "./usersList";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from '@firebase/app';

const Tab = createBottomTabNavigator();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function HomeScreen(){

    const handleLogout = () => {
        
        

        // signOut(auth).then(() => {
            
        // }).catch((error) => {
        //     // An error happened.
        //     Alert.alert(error)
        // });
    }
    
    return(
        <Tab.Navigator  
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Usuarios') {
                    iconName = focused
                    ? 'people'
                    : 'people-outline';
                } else if (route.name === 'Maps') {
                    iconName = focused ? 'navigate-circle' : 'navigate-circle-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2196f3',
                tabBarInactiveTintColor: 'gray',
             })}
            >
            <Tab.Screen name="Usuarios" component={UsersList} 
            options={{headerRight: () => (
                <Pressable style={styles.button} onPress={handleLogout}>
                    <AntDesign name="logout" size={24} color="black" />
                </Pressable>
              ),
            }} />
            <Tab.Screen name="Maps" component={MapsScreen}
            options={{headerRight: () => (
                <Pressable style={styles.button} onPress={handleLogout}>
                    <AntDesign name="logout" size={24} color="black" />
                </Pressable>
              ),
            }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f6f4',
		alignItems: 'center',
		justifyContent: 'center',
    },
    text:{
        fontSize: 30,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 1,
        borderColor: 'black',
    },
});