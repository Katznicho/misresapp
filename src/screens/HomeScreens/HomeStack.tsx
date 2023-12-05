import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'


import AddPeer from './AddPeer'
import PeerList from './PeerList'
import ServiceEncounter from './ServiceEncounter'
import Landing from './Landing';
import appTheme from '../../theme/theme';
import PeerDetails from './PeerDetails';

const Stack = createNativeStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Landing"
        >

            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{
                    headerShown: false
                }}

            />

            <Stack.Screen
                name="PeerList"
                component={PeerList}
                options={{
                    title: 'Peer List',
                    headerStyle: {
                        backgroundColor: appTheme.colors.primary
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: appTheme.colors.background,
                }}
            />

            <Stack.Screen
                name="AddPeer"
                component={AddPeer}
                options={{
                    title: 'Add Peer',
                    headerStyle: {
                        backgroundColor: appTheme.colors.primary
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: appTheme.colors.background,
                }}
            />

            <Stack.Screen
                name="PeerDetails"
                component={PeerDetails}
                options={{
                    title: 'Peer Details',
                    headerStyle: {
                        backgroundColor: appTheme.colors.primary
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: appTheme.colors.background,
                }}
            />

            <Stack.Screen
                name="ServiceEncounter"
                component={ServiceEncounter}
                options={{
                    title: 'Service Encounter',
                    headerStyle: {
                        backgroundColor: appTheme.colors.primary
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: appTheme.colors.background,
                }}

            />


        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})