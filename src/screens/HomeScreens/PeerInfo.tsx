import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import { TextField, Picker, Switch, DateTimePicker, Button, Colors } from 'react-native-ui-lib';
import appTheme from '../../theme/theme';

const PeerInfo = ({ peerInfor, setPeerInfo, goToNextStep }: any) => {

    const [gender, setGender] = React.useState([{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]);
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
                    placeholder={'enter peer  eg 1245RY'}
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
                    placeholder={'enter peer  name eg john'}
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

            {/* dob */}
            <View style={styles.viewStyles}>
                <DateTimePicker

                    style={[styles.fieldStyles, {
                        // height: 40
                    }]}
                    labelStyle={{
                        marginHorizontal: 10
                    }}
                    labelColor={appTheme.colors.primary}
                    label='Date of Birth'
                    placeholderTextColor={appTheme.colors.gray}
                    placeholder={'select date of birth'}
                    color={appTheme.colors.primary}
                    mode={'date'}
                    maximumDate={new Date()}
                    onChange={(text) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            dob: text
                        }))
                    }}
                />

            </View>
            {/* dob */}

            {/* gender */}
            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select gender'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'Gender'}
                    items={gender}
                    value={peerInfor.gender}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            gender: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for gender'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />


            </View>
            {/* gender */}

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

export default PeerInfo

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