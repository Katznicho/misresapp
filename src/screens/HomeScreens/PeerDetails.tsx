import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import appTheme from '../../theme/theme'
import { Colors } from 'react-native-ui-lib'
import { useRoute } from '@react-navigation/native'

const PeerDetails = () => {
    const { peer } = useRoute<any>().params;
    console.log(peer)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}
                style={styles.containerStyles}
            >

                <View>
                    <Text style={styles.title}>Peer Details</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PeerDetails

const styles = StyleSheet.create({
    containerStyles: {
        // marginHorizontal: 20,
        marginVertical: 20

    },
    title: {
        fontSize: 25,
        color: appTheme.colors.primary,
        alignContent: 'center',
        alignItems: 'center',
        margin: 10

    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
})