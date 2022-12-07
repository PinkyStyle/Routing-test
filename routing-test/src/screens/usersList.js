import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Alert, Divider } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";  

import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const Item = ({ name, phoneNumber, email }) => (
    <View style={styles.itemContainer}>
        <Ionicons name="person-circle-outline" size={30} color="#2196f3"/>
        <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>{name}</Text>
            <Text style={styles.userInfoText}>{phoneNumber}</Text>
            <Text style={styles.userInfoText}>{name}</Text>
        </View>
    </View>
);

export function UsersList({navigation}){
    const [data, setData] = useState('');

    useEffect(()=>{
        async function fetchData(){
            var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/users.json?auth=";
            auth.currentUser.getIdToken().then(function (token){
                fetch(url+token)
                .then(response =>{
                    if(response.ok){
                        return response.json();
                    }                    
                }).then(response => {
                    var aux = [];
                    for(const x in response){
                        aux.push(response[x]);
                        setData(aux);                        
                    }
                }
                );
            } );
            
        }
        fetchData();
    }, []);
    
    const renderItem = ({ item }) => (        
        <Item name={item.nombre} phoneNumber={item.phoneNumber} email={item.id} />
    );

    const Header = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Lista de Usuarios</Text>
                <Pressable style={styles.addUser} onPress={() => navigation.navigate('Crear Usuario')}>
                    <Ionicons name="person-add" size={30} color="#f3f6f4" />
                </Pressable>
            </View>  
        )
    };
    
    return (
        <SafeAreaView style = {styles.container}>
            <Header/>                           
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}                
            >
            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f6f4',
        justifyContent: 'flex-start'
    },
    headerContainer:{
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: "space-between",  
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        backgroundColor: '#2196f3',
    },
    title:{        
        fontSize: 25,
        color: '#f3f6f4',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        width: '90%'
    },    
    addUser: {
        width: '10%',        
    },
    itemContainer: {        
        flexDirection: 'row',
        backgroundColor: '#f3f6f4',
        padding: 20,
        borderColor: 'gray',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 0.9,                
    },
    userInfo:{
        flexDirection: 'column',
        marginLeft: 10,
        width: '80%',

    },
    userInfoText:{
        fontSize: 15,
        textAlign: 'left',
        width: '80%'
    },
});