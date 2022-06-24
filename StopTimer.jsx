import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Stopwatch } from 'react-native-stopwatch-timer'

export default function StopTimer() {
    return (
        <View style={styles.container}>
            <Text style={{color:"white", fontSize:30}}>StopWatch</Text>
            <Stopwatch style={styles.timer}
                laps
                msecs
            />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#1A1A1A",
        justifyContent:"center",
        height:"100%",
        alignItems:"center",
    }
})