import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
    if (props.data === null) {
      return <Text>Loading...</Text>
    }
  
    if (props.data.cod !== 200) {
      return <Text>An Error has occurred</Text>
    }
  
    const { temp } = props.data.main
    const { description } = props.data.weather[0]
   
    return (
      <View style={styles.container}>
        <Text style={styles.temp}>{temp}˚</Text>
        <Text>{description}</Text>
      </View>
    )
  }

export default DisplayWeather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    temp: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})