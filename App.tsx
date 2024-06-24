import { View, StyleSheet } from 'react-native'
import React from 'react'
import Navigation from './app/(home)/Navigation'

const App = () => {
  return (
    <View style = {styles.container}>
      <Navigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});