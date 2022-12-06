import { View, Text, StyleSheet, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";  

import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { useEffect, useState } from "react";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.tile}>{title}</Text>
        <Text style={styles.tile}>{title}</Text>
    </View>
);

export function UsersList(){
    const [data, setData] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/users.json?auth=";
            auth.currentUser.getIdToken().then(function (token){
                fetch(url+token)
                .then(response =>{
                    return response.json();
                }).then(response => {
                    console.log(response)
                    var aux = [];
                    for(const x in response){
                        console.log(response[x])
                        aux.push(response[x]);
                        setData(aux);                        
                    }
                }
                );
            } )
        }
        fetchData();
    }, []);
    const renderItem = ({ item }) => (
        <Item title={item.nombre} />
      );
    // const getUsersData = () => {
    //     var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/users.json?auth=";
    //     return (
    //         auth.currentUser.getIdToken().then(function (token){
    //             fetch(url+token)
    //             .then(response =>{
    //                 return response.json();
    //             }).then(response => {
    //                 console.log(response)
    //             }
    //             );
    //         } )
    //     );
    // }
    return (
        <SafeAreaView style = {styles.container}>
            <Text style={styles.title}>Lista de Usuarios</Text>
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
        
    },
    title:{
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 16,
      },
});