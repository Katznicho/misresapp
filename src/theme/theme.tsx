import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DefaultTheme } from '@react-navigation/native';


const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#005B96',
        background: '#ffffff',
        card: '#ffffff',
        text: '#151723',
        border: '#e0e0e0',
        notification: 'red',
        secondary: '#f5f5f5',
        tertiary: '#f5f5f5',
        white: '#ffffff',
        black: '#000000',
        gray: '#6e6e6e',
        lightGray: '#f5f5f5',
    },
    spaces: {
        horizontal: {
            s: 2 * 8,
            m: 4 * 8,
            l: 6 * 8,
            xl: 8 * 8,
        },
        vertical: {
            s: 2 * 8,
            m: 4 * 8,
            l: 6 * 8,
            xl: 8 * 8,
        },
    },
};

export default appTheme
