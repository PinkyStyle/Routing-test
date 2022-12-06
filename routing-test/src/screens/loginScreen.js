import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { ImageAssets } from '../assets/ImageAssets.js';
import { app } from '../../firebaseConfig.js';

const auth = getAuth(app);

export function LoginScreen({navigation}) {	
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
				></TextInput>
				<TextInput 
					style={styles.input} 
					placeholder="Password" 
					secureTextEntry
				></TextInput>
				<View
					style={styles.buttonContainer}
				>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
