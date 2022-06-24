import { View, Text, StyleSheet } from 'react-native'
import { Switch as Sw } from '@rneui/themed';
 
import React, { useState } from 'react'

export default function Alarm() {
  const [alarm, setAlarm] = useState()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alarm</Text>
      <View style={styles.alarm}>
        <Text style={{ color: "white", fontSize: 40, }}>00:00:00</Text>
        <Sw
          value={true}
          color="#F27405"
        />
      </View>
      {/* <Sw
          value={true}
          color="#F27405"
        /> */}


    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    //marginTop: 1,
    backgroundColor: "#1A1A1A",
    color: "white",
    height: "100%",
    //justifyContent: "center",
    //flexDirection: "column-reverse"
  },
  text: {
    color: "white",
    //justifyContent:"center",
    margin: 30,
    fontSize: 30
  },
  alarm: {
    justifyContent: "space-between",
    //alignItems:"center",
    margin: 30,
  }
})