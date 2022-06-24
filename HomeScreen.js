import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import BottomNavbar from './BottomNavbar'
//import { Icon } from "@rneui/themed";
//import { Switch as Sw } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer'
import Alarm from './Alarm';
import StopTimer from './StopTimer';



export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <BottomNavbar /> */}
            <View style={styles.homecontent}>
                <View style={styles.plus}>
                    <AntDesign name="plus" size={30} color="#F27405" onPress={() => { navigation.navigate("Modal") }} />
                </View>
                <Text style={styles.text}>World Clock</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //marginTop: 1,
        backgroundColor: "#1A1A1A",
        color: "white",
        height: "100%",
        //justifyContent: "flex-end"
        //flexDirection: "column-reverse"
    },
    homecontent: {
        //height: "auto",
        marginRight: 30,
        marginLeft: 30,
    },
    plus: {
        flexDirection: "row-reverse",
        marginTop: 30,
        //marginRight: 200,
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        //marginTop: 10,
        fontFamily: "Roboto"
    },

})