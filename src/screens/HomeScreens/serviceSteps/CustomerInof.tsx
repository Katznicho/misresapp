import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'
import { Button, Colors, TextField } from 'react-native-ui-lib'
import appTheme from '../../../theme/theme'

const CustomerInof = ({ goBack, goToNextStep, peerInfor, setPeerInfo }: any) => {
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
                backgroundColor: Colors.grey70
            }}
            keyboardShouldPersistTaps="always"
        >
            <View
                style={styles.viewStyles}
            >
                <TextField
                    style={styles.fieldStyles}
                    placeholder={'enter customer id eg 1245RY'}
                    hint={"enter peer id"}
                    labelStyle={{
                        marginHorizontal: 10
                    }}
                    label='AGYW ID'
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}

                    onChangeText={text =>
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            id: text
                        }))

                    }
                    enableErrors
                    validate={['required']}
                    validationMessage={['peer id is required']}
                    showCharCounter
                    maxLength={30}
                />

            </View>

            {/* name */}
            <View
                style={styles.viewStyles}
            >
                <TextField
                    style={styles.fieldStyles}
                    placeholder={'enter customer name eg john'}
                    hint={"enter peer name"}
                    labelStyle={{
                        marginHorizontal: 10
                    }}
                    label='Name'
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}

                    onChangeText={text =>
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            id: text
                        }))

                    }
                    enableErrors
                    validate={['required']}
                    validationMessage={['name is required']}
                    showCharCounter
                // maxLength={30}
                />

            </View>
            {/* name */}

            {/* next button */}
            <View style={styles.viewStyles}>
                <Button
                    label={'Next'}
                    onPress={goToNextStep}
                    style={{ marginVertical: 10 }}
                    labelStyle={{ color: Colors.white }}
                    size={Button.sizes.medium}
                    backgroundColor={Colors.blue20} />

            </View>
            {/* next button */}


        </ScrollView>

    )
}

export default CustomerInof

// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
    viewStyles: {
        marginHorizontal: 10,
        marginVertical: 2,
        // elevation: 5,
        // borderRadius: 10,
        // backgroundColor: appTheme.colors.background,
        // padding: 10
        // height: 80
    },
    fieldStyles: {
        // borderBottomColor: appTheme.colors.gray,
        borderBottomColor: Colors.grey50,
        borderBottomWidth: 2,
        // height: 45
    },
})