import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useUserPreferredTheme } from './src/hooks/usePrefeerredTheme';
import Base from './src/screens/Base';


const App = () => {
  const { } = useUserPreferredTheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Base />
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})