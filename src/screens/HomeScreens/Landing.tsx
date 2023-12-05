import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert, StatusBar } from 'react-native'
import React from 'react'
import appTheme from '../../theme/theme'
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useShowGreeting } from '../../hooks/useShowGreetings';
// import PeerDetails from './PeerDetails';


const Landing = () => {
    let greetings = useShowGreeting();
    const navigation = useNavigation<any>();

    const handleSignOut = () => {
        // navigation.navigate('Login');
    };

    const onSignOut = () => {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },

                {
                    text: 'OK',
                    onPress: () => handleSignOut(),
                },
            ],
            { cancelable: false },
        );
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey70 }}>
            <StatusBar backgroundColor={appTheme.colors.primary} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}
                style={styles.containerStyles}
            >
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 15,
                    elevation: 5,
                    borderRadius: 10,
                    paddingBottom: 20,
                    backgroundColor: Colors.white
                }} >
                    <Text style={styles.title}>
                        {greetings} Katende Nicholas !
                    </Text>
                    <Text style={{ alignItems: "center", color: Colors.grey30, alignSelf: "center", fontWeight: "bold" }}>
                        Choose a menu
                    </Text>
                </View>

                <View style={[styles.flexStyles]}>
                    <TouchableOpacity style={[styles.cardStyles]}
                        onPress={() => navigation.navigate('AddPeer')}
                    >
                        <View>
                            <AntDesign name="adduser"
                                style={[styles.iconStyles]}
                                size={50}
                                color={Colors.blue10}
                            />
                        </View>

                        <Text style={[styles.textStyles]}>Add Peer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cardStyles]}
                        onPress={() => navigation.navigate('PeerList')}
                    >

                        <View>
                            <Feather name="users"
                                style={[styles.iconStyles]}
                                size={50}
                                color={Colors.blue10}
                            />
                        </View>

                        <Text style={[styles.textStyles]}>Peer List</Text>
                    </TouchableOpacity>
                </View>

                {/* service encounter */}

                <View style={[styles.flexStyles]}>
                    <TouchableOpacity style={[styles.cardStyles]}
                        onPress={() => navigation.navigate('ServiceEncounter')}
                    >

                        <View>
                            <FontAwesome name="stethoscope"
                                style={[styles.iconStyles]}
                                size={50}
                                color={Colors.blue10}
                            />
                        </View>

                        <Text style={[styles.textStyles]}>Service Encounter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cardStyles]}
                        onPress={onSignOut}
                    >

                        <View>
                            <Feather name="log-out"
                                style={[styles.iconStyles]}
                                size={50}
                                color={Colors.blue10}
                            />
                        </View>

                        <Text style={[styles.textStyles]}>Logout</Text>
                    </TouchableOpacity>
                </View>
                {/* service encounter */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Landing

const styles = StyleSheet.create({
    containerStyles: {
        // marginHorizontal: 20,
        marginVertical: 20

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: appTheme.colors.primary,
        alignContent: 'center',
        alignItems: 'center',
        margin: 10,
        justifyContent: "center"

    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    flexStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    cardStyles: {
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: Colors.white,
        width: 150,
        height: 150,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        elevation: 5,
        color: Colors.white

    },
    textStyles: {
        fontWeight: "bold",
        color: Colors.blue10
        // fontSize: 18
    },
    iconStyles: {
        marginBottom: 10
    }
})