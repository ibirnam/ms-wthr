import DisplayWeather from './Components/DisplayWeather'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WEATHER_API_KEY } from 'react-native-dotenv'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      location: null,
      weather: null
    }
  }

  loadWeather() {
    const apikey = WEATHER_API_KEY
    const { latitude, longitude } = this.state.location.coords
    const units = 'Imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({ weather: json }))
    .catch(err => console.log(err.message))
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({ location })
      this.loadWeather()
    }, (err) => {
      console.log(err.message)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <DisplayWeather data={this.state.weather} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
