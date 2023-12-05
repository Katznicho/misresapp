import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, } from '@react-navigation/native';
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserPreferredTheme } from '../hooks/usePrefeerredTheme';
import appTheme from '../theme/theme';
import HomeStack from './HomeScreens/HomeStack';



const Stack = createNativeStackNavigator();

const Base = () => {

    return (
        <NavigationContainer theme={appTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Home"
                    options={{
                        headerShown: false
                    }}
                    component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Base

const styles = StyleSheet.create({})