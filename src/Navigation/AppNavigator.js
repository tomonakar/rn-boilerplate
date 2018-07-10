import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import demo1 from '../Screens/demo1'
import demo2 from '../Screens/demo2'
import demo3 from '../Screens/demo3'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const RootNavigator = createStackNavigator({
  Login: { screen: demo1 },
  Main: { screen: demo2 },
  Profile: { screen: demo3 }
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => ({
  state: state.nav
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middleware }
