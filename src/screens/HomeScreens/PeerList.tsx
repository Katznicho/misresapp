import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import appTheme from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { Button, Colors, ProgressBar } from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PeerList = () => {

    const [searchText, setSearchText] = useState('');

    const navigation = useNavigation<any>()

    const [peerList, setPeerList] = useState([
        {
            name: 'Nicholas Jackson',
            id: "001",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "80"
        },
        {
            name: 'James Bond',
            id: "002",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "90"
        },
        {
            name: 'Nicholas James',
            id: "003",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "50"
        },
        {
            name: 'Nicholas Jackson',
            id: "004",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "80"
        },
        {
            name: 'James Bond',
            id: "005",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "90"
        },
        {
            name: 'Nicholas James',
            id: "006",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "50"
        },
        {
            name: 'Nicholas Jackson',
            id: "007",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "80"
        },
        {
            name: 'James Bond',
            id: "008",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "90"
        },
        {
            name: 'Nicholas James',
            id: "0010",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "50"
        },
        {
            name: 'Nicholas Jackson',
            id: "0011",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "80"
        },
        {
            name: 'James Bond',
            id: "0012",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "90"
        },
        {
            name: 'Nicholas James',
            id: "0013",
            age: 23,
            ageGroup: "GROUP 1",
            progress: "50"
        }
    ])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey70 }}>

            <FlatList
                pagingEnabled={true}
                decelerationRate={"normal"}
                snapToInterval={120}
                snapToAlignment='start'
                style={{
                    paddingBottom: 100
                }}
                ListHeaderComponent={
                    <View>
                        <View style={styles.InputContainerComponent}>
                            <TouchableOpacity
                                onPress={() => {
                                    // searchText(searchText);
                                }}>
                                <AntDesign
                                    style={styles.InputIcon}
                                    name="search1"
                                    size={18}
                                    color={
                                        searchText.length > 0
                                            ? Colors.green20
                                            : Colors.blue30
                                    }
                                />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="find  a peer..."
                                value={searchText}
                                onChangeText={text => {
                                    // setSearchText(text);
                                    // searchCoffee(text);
                                }}
                                placeholderTextColor={Colors.grey40}
                                style={styles.TextInputContainer}
                            />
                            {searchText.length > 0 ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        // resetSearchCoffee();
                                    }}>
                                    <AntDesign
                                        style={styles.InputIcon}
                                        name="close"
                                        size={16}
                                        color={Colors.white}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <></>
                            )}
                        </View>
                    </View>
                }
                data={peerList}
                renderItem={({ item }) => {



                    return (
                        <TouchableOpacity
                            style={[styles.container]}
                            onPress={() => navigation.navigate('PeerDetails', { peer: item })}
                        >
                            <View style={[styles.thinLine]}>
                                <View>
                                    <Text style={[styles.textStyles]}>Name</Text>
                                </View>
                                <View>
                                    <Text style={[styles.textStyles, { fontWeight: "bold", fontSize: 20 }]}>{item.name}</Text>
                                </View>
                            </View>

                            <View style={[styles.flexStyles, styles.thinLine]}>
                                <View>
                                    <Text style={[styles.textStyles]}>ID</Text>
                                </View>
                                <View>
                                    <Text style={[styles.textStyles]}>{item.id}</Text>
                                </View>
                            </View>

                            <View style={[styles.flexStyles, styles.thinLine]}>
                                <View>
                                    <Text style={[styles.textStyles]}>Age Group</Text>
                                </View>
                                <View>
                                    <Text style={[styles.textStyles]}>{item.ageGroup}</Text>
                                </View>
                            </View>

                            <View>
                                <View>

                                    <ProgressBar
                                        progress={parseFloat(item.progress)}
                                        progressColor={Colors.green30}
                                        fullWidth={true}
                                        style={{
                                            backgroundColor: Colors.white,
                                            height: 5
                                        }}

                                    />
                                </View>

                            </View>

                            <View>
                                <Button
                                    label={'View Details'}
                                    onPress={() => navigation.navigate('PeerDetails', { peer: item })}
                                    style={{ marginVertical: 10 }}
                                    labelStyle={{ color: Colors.white }}
                                    size={Button.sizes.medium}
                                    backgroundColor={Colors.blue30} />

                            </View>


                        </TouchableOpacity>
                    )
                }}
                // keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginVertical: 10,
                    marginHorizontal: 5,
                    // elevation: 5,
                    borderRadius: 10,
                }}
            />
        </SafeAreaView>
    )
}

export default PeerList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems: 'center',
    },
    textStyles: {
        color: appTheme.colors.text,
        // fontWeight: "500"
    },
    thinLine: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grey40,
        marginVertical: 10,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems: 'center',

    },
    InputContainerComponent: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 20,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    InputIcon: {
        marginHorizontal: 20,
    },
    TextInputContainer: {
        flex: 1,
        height: 60,
        // fontFamily: FONTFAMILY.poppins_medium,
        fontSize: 14,
        color: Colors.white,
    },
    flexStyles: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        alignItems: "center"
    }
})