import { View, Text, StyleSheet } from "react-native";


export function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hola perro</Text>
        </View>
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
});