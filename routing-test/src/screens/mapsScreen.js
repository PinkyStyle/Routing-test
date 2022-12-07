import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from "react-native-maps";

import { firebaseConfig } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";
import { initializeApp } from '@firebase/app';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function MapsScreen(){

    const setRoute1 = ( ) => {
        async function fetchData(){
            var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/maps/route1.json?auth=";
            auth.currentUser.getIdToken().then(function (token){
                fetch(url+token)
                .then(response =>{
                    if(response.ok){                        
                        return response.json();
                    }                
                    else{
                        console.log('error?')
                    }    
                }).then(response => {
                    console.log(response["point1"]["lat"]);
                    setMarker1({
                        latitude: response["point1"]["lat"],
                        longitude: response["point1"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setMarker2({
                        latitude: response["point2"]["lat"],
                        longitude: response["point2"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setMarker3({
                        latitude: response["point3"]["lat"],
                        longitude: response["point3"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }
                );
            } );
            
        }
        fetchData();
    }
    const setRoute2 = ( ) => {
        async function fetchData(){
            var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/maps/route2.json?auth=";
            auth.currentUser.getIdToken().then(function (token){
                fetch(url+token)
                .then(response =>{
                    if(response.ok){                        
                        return response.json();
                    }                
                    else{
                        console.log('error?')
                    }    
                }).then(response => {
                    console.log(response["point1"]["lat"]);
                    setMarker1({
                        latitude: response["point1"]["lat"],
                        longitude: response["point1"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setMarker2({
                        latitude: response["point2"]["lat"],
                        longitude: response["point2"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setMarker3({
                        latitude: response["point3"]["lat"],
                        longitude: response["point3"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }
                );
            } );
            
        }
        fetchData();
    }
    const setRoute3 = ( ) => {
        async function fetchData(){
            var url = "https://routingtest-648b4-default-rtdb.firebaseio.com/maps/route3.json?auth=";
            auth.currentUser.getIdToken().then(function (token){
                fetch(url+token)
                .then(response =>{
                    if(response.ok){                        
                        return response.json();
                    }                
                    else{
                        console.log('error?')
                    }    
                }).then(response => {
                    console.log(response["point1"]["lat"]);
                    setMarker1({
                        latitude: response["point1"]["lat"],
                        longitude: response["point1"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setMarker2({
                        latitude: response["point2"]["lat"],
                        longitude: response["point2"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    setMarker3({
                        latitude: response["point3"]["lat"],
                        longitude: response["point3"]["long"],
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }
                );
            } );
            
        }
        fetchData();
    }
    const [mapRegion, setMapRegion] = useState({
        latitude: -33.422534574077666,
        longitude: -70.61529625035264,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [marker1, setMarker1] = useState({
        latitude: -33.422534574077666,
        longitude: -70.61529625035264,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [marker2, setMarker2] = useState({
        latitude: -33.435065663438586,
        longitude: -70.62283325747325,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });  
    const [marker3, setMarker3] = useState({
        latitude: -33.43973022280469,
        longitude: -70.62944222041715,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    return (
        <View style={styles.container}>
            <MapView
            style={styles.map}
            initialRegion={mapRegion}
            provider={PROVIDER_GOOGLE}
            >
                <Marker coordinate={marker1} title="Punto 1" ></Marker>
                <Marker coordinate={marker2} title="Punto 2" ></Marker>
                <Marker coordinate={marker3} title="Punto 3" ></Marker>
            </MapView>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={setRoute1}>
                    <Text style={styles.buttonText}>Ruta 1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={setRoute2}>
                    <Text style={styles.buttonText}>Ruta 2</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={setRoute3}>
                    <Text style={styles.buttonText}>Ruta 3</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
        width: '100%',
        height: '90%',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#2196f3',
        alignItems: "center",
        justifyContent: 'center'
    },
    button:{
        width: '33%',
        borderColor: '#f3f6f4',
        borderWidth: 0.5,
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        textAlign: 'center',
        color: '#f3f6f4',
        fontWeight: "bold",
    }
});