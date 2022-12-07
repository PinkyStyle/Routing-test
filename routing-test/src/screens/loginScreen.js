import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import { ImageAssets } from '../assets/ImageAssets.js';
import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../firebaseConfig.js';



export function LoginScreen({}) {	
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth,email,password)
		.then((userCredential) => {	
		})
		.catch(error => {
			const message = error.code;
			var alertText = '';
			switch(message){
				case 'auth/invalid-email':
					alertText = "Email no válido."
					break;
				case 'auth/wrong-password':
					alertText = "Contraseña incorrecta."
					break;
				case 'auth/user-disabled':
					alertText = "Usuario bloqueado. Hablar con Administración."
					break;
				case 'auth/user-not-found':
					alertText = "Usuario no encontrado, compruebe sus datos."
					break;
				default:
					alertText = "Error al iniciar sesion, compruebe sus datos."
			}
			Alert.alert(alertText)
		})
	}

	return (
    	<KeyboardAvoidingView
      		behavior= "padding"
      		style={{flex:1, backgroundColor:'#f3f6f4'}}
      		enabled
    	>
      		<View style={styles.container}>      
        		<StatusBar style="auto" />
        		<Image
          			style={styles.loginLogo}
          			source={ImageAssets.loginLogo}
        		></Image>
				<Text style={styles.title}>Ingresa a Routing</Text>
				<TextInput 
					style={styles.input} 
					placeholder="Email" 
					defaultValue= {email}
					onChangeText = {newText => setEmail(newText)}
				></TextInput>
				<TextInput 
					style={styles.input} 
					placeholder="Password" 
					defaultValue={password}
					onChangeText = {newText => setPassword(newText)}
					secureTextEntry
				></TextInput>
				<View
					style={styles.buttonContainer}
				>
					<TouchableOpacity style={styles.button} onPress={handleSignIn}>
						<Text style={styles.btnText}>Login</Text>
					</TouchableOpacity>
				</View>
      		</View>
    	</KeyboardAvoidingView>
 	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f6f4',
		alignItems: 'center',
		justifyContent: 'center',
		padding:24,
	},
	title: {
		fontSize: 30,
		marginBottom: 15,
		marginTop: -10,
		fontWeight: 'bold'
	},
	input: {
		borderColor: '#black',
		borderWidth: 1,
		width: '90%',
		padding: 15,
		marginBottom: 10,
		borderRadius: 10,
	},
	loginLogo:{
		width: '100%',
		height: 400,
		resizeMode: 'contain'
	},
	buttonContainer:{
		width: '90%',
		borderRadius: 10,
		overflow: 'hidden',
	},
	button:{
		width: '100%',
		padding: 15,
		backgroundColor: '#2196f3',
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF'
	},
});
