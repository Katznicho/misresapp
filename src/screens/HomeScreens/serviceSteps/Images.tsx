import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button, Colors } from 'react-native-ui-lib'
import appTheme from '../../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadComponent from '../../../components/UploadComponent';

const Images = ({ goBack, goToNextStep, peerInfor, setPeerInfo, showModal, setShowModal, image, setImage }: any) => {
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
            {/* peer photo */}
            <View style={styles.viewStyles}>

                <Text style={{
                    marginVertical: 10,
                    color: appTheme.colors.primary
                }}> Take Photo</Text>

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
                    label={'Next'}
                    onPress={goToNextStep}
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
    )
}

export default Images

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