 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { Home } from './src/Screen'
import AppNavigation from './src/AppNavigation'
import { store } from './src/Redux/Store'
import { Provider } from 'react-redux'
 
 const App = () => {
   return (
    <Provider store={store} >

      <AppNavigation/>
    </Provider>
   )
 }
 
 export default App
 
 const styles = StyleSheet.create({})