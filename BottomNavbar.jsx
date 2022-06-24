import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
//import { useNavigation } from '@react-navigation/native';


const BottomNavbar = ({navigation}) => {
    //const navigation = useNavigation();
    return (
        <View style={styles.containers}>
            <TouchableOpacity>
                <View style={styles.navContent}>
                    <Ionicons name="globe-outline" size={24} color="#F27405" />
                    <Text style={styles.text}>World Clock</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Try") }}>
                <View style={styles.navContent}>
                    <Ionicons name="alarm-outline" size={24} color="white" />
                    <Text style={styles.text}>Alarm</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.navContent}>
                <MaterialIcons name="timer" size={24} color="white" />
                <Text style={styles.text}>Stop Watch</Text>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    containers: {
        backgroundColor: "black",
        justifyContent: "space-around",
        height: "10%",
        flexDirection: "row",
        padding: 4,
        alignItems: "center",

    },
    text: {
        //flexDirection: "column",
        color: "white",
    },
    navContent: {
        alignItems: "center",
    }
})

export default BottomNavbar