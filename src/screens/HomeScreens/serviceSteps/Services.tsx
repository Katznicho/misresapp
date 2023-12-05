import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Checkbox, Colors } from 'react-native-ui-lib'
import appTheme from '../../../theme/theme'


const Services = ({ goBack, goToNextStep, peerInfor, setPeerInfo, services }: any) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginVertical: 10,
                marginHorizontal: 5,
                // elevation: 5,
                borderRadius: 10,
                // backgroundColor: appTheme.colors.background,
                padding: 10,
                paddingBottom: 100,
                backgroundColor: Colors.white
            }}
            keyboardShouldPersistTaps="always"
        >
            {
                services.map((service: any, index: number) => (
                    <TouchableOpacity style={styles.viewStyles} key={service.id}
                        onPress={() => {
                            setPeerInfo((prevState: any) => ({
                                ...prevState,
                                serviceId: service.id
                            }))
                        }}
                    >
                        <View>
                            <Checkbox value={false}
                                onValueChange={() => console.log('value changed')}
                                labelStyle={{
                                    color: appTheme.colors.primary
                                }}
                                // label={service.name}
                                style={{
                                    marginVertical: 10
                                }}
                                color={appTheme.colors.primary}

                            />
                        </View>
                        <View
                            style={{
                                flex: 0.8
                            }}
                        >
                            <Text style={{
                                // marginVertical: 10,
                                color: appTheme.colors.primary
                            }}>{service.name}</Text>
                            <Text style={{
                                // marginVertical: 10,
                                color: appTheme.colors.primary
                            }}>{service.id}</Text>

                        </View>


                    </TouchableOpacity>
                ))
            }

            <View style={[styles.flexStyles]}>
                <Button
                    label={'GO Back'}
                    onPress={goBack}
                    style={{ marginVertical: 10 }}
                    labelStyle={{ color: Colors.white }}
                    size={Button.sizes.medium}
                    backgroundColor={Colors.red20}
                />
                <Button
                    label={'Next'}
                    onPress={goToNextStep}
                    style={{ marginVertical: 10 }}
                    labelStyle={{ color: Colors.white }}
                    size={Button.sizes.medium}
                    backgroundColor={Colors.green120} />
            </View>

        </ScrollView>
    )
}

export default Services

// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
    viewStyles: {
        marginHorizontal: 5,
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.grey70,
        borderRadius: 10,
        padding: 10
    },
    fieldStyles: {
        // borderBottomColor: appTheme.colors.gray,
        borderBottomColor: Colors.grey50,
        borderBottomWidth: 2,
        // height: 45
    },
    flexStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10
    },
})