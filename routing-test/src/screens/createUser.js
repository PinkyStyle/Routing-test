import { useState } from "react";
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, Pressable, Alert} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { firebaseConfig } from "../../firebaseConfig";
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function CreateUser({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');

    const sendPostRequest = async () => {
        auth.currentUser.getIdToken().then(function (token){
            var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/users.json?auth=";
            auth.currentUser.getIdToken().then(function (token){
                fetch(url+token ,{
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        name: name,
                        email: email,
                        phoneNumber: phoneNumber,
                    })
                })
                .then(response =>{
                    if(response.ok){
                        Alert.alert("Usuario creado con exito");
                        navigation.goBack();
                    }              
                });
            } );
        })        
    }

    

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            sendPostRequest();                      
        })
        .catch((error) => {

        });
    }

    return (
        <KeyboardAvoidingView
            behavior= "height"
      		style={{flex:1, backgroundColor:'#f3f6f4'}}
      		enabled>            
            <View style={styles.formContainer}>
            <Text style={styles.title}>Ingresa los datos para el nuevo usuario</Text>
                <Text style={styles.subtitles} >Nombre</Text>
                <TextInput
                    placeholder="Nombre"
                    style={styles.inputs}
                    onChangeText = {newText => setName(newText)}
                ></TextInput>
                <Text style={styles.subtitles}>Correo</Text>
                <TextInput
                    placeholder="Correo Electronico"
                    style={styles.inputs}
                    onChangeText = {newText => setEmail(newText)}
                ></TextInput>
                <Text style={styles.subtitles}>N° Telefono</Text>
                <TextInput
                    placeholder="N° Telefono"
                    style={styles.inputs}
                    onChangeText = {newText => setPhoneNumber(newText)}
                ></TextInput>
                <Text style={styles.subtitles}>Contraseña</Text>
                <TextInput 
                    placeholder="Contraseña"
                    style={styles.inputs}
                    onChangeText = {newText => setPassword(newText)}
                    secureTextEntry
                ></TextInput>
                <Pressable style={styles.button} onPress={handleSignUp} title="Cancelar" >
                    <Text style={styles.buttonText} >Crear Usuario</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
      );
}

const styles = StyleSheet.create({
    formContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    title:{
        marginBottom: 30,
        fontSize: 23,
        fontWeight: "bold",

    },
    subtitles:{
        fontSize: 15,
        marginBottom: 2,        
    },
    inputs:{
        borderColor: '#black',
		borderWidth: 1,
		width: '90%',
		padding: 15,
		marginBottom: 10,
		borderRadius: 10,
    },
    button:{
        width: '90%',
        padding: 15,
        backgroundColor: '#2196f3',        
    },
    buttonText:{
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
    }
});