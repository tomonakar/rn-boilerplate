import React from 'react'
import { StyleSheet, View } from 'react-native'

import AuthButton from '../Components/auth/AuthButton'
import LoginStatusMessage from '../Components/auth/LoginStatusMessage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
)

MainScreen.navigationOptions = {
  title: 'Home Screen'
}

export default MainScreen
