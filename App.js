import React from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { AppNavigator } from './src/Navigation/AppNavigator'
import store from './src/Redux/configureStore'

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar />
      <AppNavigator />
    </View>
  </Provider>
)

export default App
