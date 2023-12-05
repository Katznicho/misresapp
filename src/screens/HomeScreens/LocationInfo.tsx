import { StyleSheet, ScrollView, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import { TextField, Picker, Switch, DateTimePicker, Button, Colors, Text } from 'react-native-ui-lib';
import appTheme from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadComponent from '../../components/UploadComponent';

const LocationInfo = ({ peerInfor, setPeerInfo, goToNextStep, goBack, onAddPeer, image, setImage, showModal, setShowModal }: any) => {



    const [districts, setDistricts] = useState([
        { label: 'Kampala', value: 'kampala' },
        { label: 'Jinja', value: 'jinja' },
        { label: 'Mbarara', value: 'mbarara' },
        { label: 'Masaka', value: 'masaka' },
        { label: 'Mukono', value: 'mukono' },])

    const [subCounty, setSubCounties] = useState([
        { label: 'Kampala', value: 'kampala' },
        { label: 'Jinja', value: 'jinja' },
        { label: 'Mbarara', value: 'mbarara' },
        { label: 'Masaka', value: 'masaka' },
        { label: 'Mukono', value: 'mukono' },])

    const [subSpaceType, setSubSpaceType] = useState([
        { label: 'Kampala', value: 'kampala' },
        { label: 'Jinja', value: 'jinja' },
        { label: 'Mbarara', value: 'mbarara' },
        { label: 'Masaka', value: 'masaka' },
        { label: 'Mukono', value: 'mukono' },])

    const [subSpaceName, setSubSpaceName] = useState([
        { label: 'name 1', value: 'name 1' },
        { label: 'name 2', value: 'name 2' },
        { label: 'name 3', value: 'name 3' },
        { label: 'name 4', value: 'name 4' },
        { label: 'nam3 5', value: 'nam3 5' },])

    const [educationStatus, setEducationStatus] = useState([
        { label: 'in-school', value: 'in-school' },
        { label: 'completed', value: 'completed' },
        { label: 'out-of-school', value: 'out-of-school' },
        { label: 'dropped-out', value: 'dropped-out' },
    ])

    const [school, setSchool] = useState([
        { label: 'Midland', value: 'Midland' },
        { label: 'Jinja', value: 'jinja' },
        { label: 'Mbarara', value: 'mbarara' },
        { label: 'Masaka', value: 'masaka' },
        { label: 'Mukono High', value: 'mukono High' },])


    return (<SafeAreaView style={{ flex: 1, backgroundColor: appTheme.colors.background }}>
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
            {/* district */}
            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select peer district'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'District'}
                    items={districts}
                    value={peerInfor.district}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            district: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for district'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />


            </View>
            {/* district */}

            {/* sub county */}

            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select peer sub county'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'Sub County'}
                    items={subCounty}
                    value={peerInfor.subCounty}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            subCounty: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for sub county'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />

            </View>
            {/* sub county */}

            {/* sub space */}

            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select peer sub space'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'Sub Space'}
                    items={subSpaceName}
                    value={peerInfor.subSpace}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            subSpace: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for sub space'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />

            </View>
            {/* sub space */}

            {/* sub space name */}

            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select peer sub space name'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'Sub Space Name'}
                    items={subSpaceName}
                    value={peerInfor.subSpaceName}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            subSpaceName: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for sub space name'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />

            </View>
            {/* sub space name */}

            <View
                style={styles.viewStyles}
            >
                <TextField
                    style={styles.fieldStyles}
                    placeholder={'enter peer  group name'}
                    hint={"enter peer id"}
                    labelStyle={{
                        marginHorizontal: 10
                    }}
                    label='Group Name'
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}

                    onChangeText={text =>
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            groupName: text
                        }))

                    }
                    enableErrors
                    validate={['required']}
                    validationMessage={['peer group name is required']}
                    showCharCounter
                    maxLength={30}
                />

            </View>

            {/* education status */}

            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select peer education status'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'Education Status'}
                    items={educationStatus}
                    value={peerInfor.educationStatus}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            educationStatus: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for education status'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />

            </View>
            {/* education status */}

            {/* select school */}

            <View style={styles.viewStyles}>

                <Picker
                    style={styles.fieldStyles}
                    placeholder={'select peer school'}
                    labelStyle={{
                        marginHorizontal: 10,

                    }}
                    labelColor={appTheme.colors.primary}
                    placeholderTextColor={appTheme.colors.gray}
                    color={appTheme.colors.primary}
                    label={'School'}
                    items={school}
                    value={peerInfor.school}
                    onChange={(value) => {
                        setPeerInfo((prevState: any) => ({
                            ...prevState,
                            school: value
                        }))
                    }}
                    showSearch
                    searchPlaceholder={'Search for school'}
                    searchStyle={{ color: appTheme.colors.primary, placeholderTextColor: appTheme.colors.secondary }}
                // searchIconColor={reuseTheme.colors.preference.primaryForeground}
                />

            </View>
            {/* select school */}

            {/* peer photo */}
            <View style={styles.viewStyles}>

                <Text style={{
                    marginVertical: 10,
                    color: appTheme.colors.primary
                }}> Add Peer Photo</Text>

                <TouchableOpacity
                    style={[styles.imageStyles, styles.centerContent]}
                    onPress={() => {
                        // pickImage()
                        setShowModal(true)
                    }}

                >
                    {
                        image ? (<Image
                            source={{ uri: image?.imagePath }}
                            style={[styles.imageStyles]}
                        />) : (<AntDesign
                            name={'plus'}
                            color={appTheme.colors.text}
                            size={20}
                            style={[{
                                borderRadius: 10,
                                padding: 10,
                                borderStyle: "dotted",

                            }]}
                        />)
                    }


                </TouchableOpacity>

            </View>
            {/* peer photo */}

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
                    label={'Add Peer'}
                    onPress={onAddPeer}
                    style={{ marginVertical: 10 }}
                    labelStyle={{ color: Colors.white }}
                    size={Button.sizes.medium}
                    backgroundColor={Colors.green120} />
            </View>

            {/* modal section */}
            {showModal && (
                <UploadComponent
                    image={image}
                    setImage={setImage}
                    setModal={setShowModal}
                    showModal={showModal}
                    selectDocument={false}
                />
            )}

            {/* modal section */}


        </ScrollView>
    </SafeAreaView>
    )
}

export default LocationInfo

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
    imageStyles: {
        borderWidth: 1,
        borderColor: Colors.grey30,
        width: 80,
        marginHorizontal: 5,
        marginVertical: 10,
        height: 80,
        borderRadius: 10
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})