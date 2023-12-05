import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import appTheme from '../../theme/theme';
import { Colors, Toast, Wizard, WizardStepStates, } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import CustomerInof from './serviceSteps/CustomerInof';
import Services from './serviceSteps/Services';
import Images from './serviceSteps/Images';

interface State {
  activeIndex: number;
  completedStepIndex?: number;
  allTypesIndex: number;
  toastMessage?: string;
}


const ServiceEncounter = () => {

  const navigation = useNavigation<any>();
  const [image, setImage] = useState<any>(null)

  const [services, setServices] = useState(
    [
      {
        id: "001",
        name: "Testing Service 1",
        description: "Description of Testing Service"
      },
      {
        id: "002",
        name: "Testing Service 2",
        description: "Description of Testing Service"
      },
      {
        id: "003",
        name: "Testing Service 3",
        description: "Description of Testing Service"
      },
      {
        id: "004",
        name: "Testing Service 4",
        description: "Description of Testing Service"
      }

    ]
  )

  const [peerInfor, setPeerInfo] = useState({
    name: '',
    id: '',
    services: []
  })
  const [showModal, setShowModal] = useState<boolean>(false);

  const [state, setState] = useState<State>({
    activeIndex: 0,
    completedStepIndex: undefined,
    allTypesIndex: 0,

  })

  const onActiveIndexChanged = (activeIndex: number) => {
    // Update the activeIndex in the state
    setState((prevState) => ({
      ...prevState,
      activeIndex,
    }));
  };

  const onDismiss = () => {
    navigation.navigate("Landing")
  }

  const onAddPeer = () => {
    <Toast
      message={"Peer Added"}
      type={'success'}
      visible={true}
      position={'top'}
      autoDismiss={5000}
      onDismiss={onDismiss}
    ></Toast>

  }



  const goToNextStep = () => {
    const { activeIndex: prevActiveIndex, completedStepIndex: prevCompletedStepIndex } = state;
    const reset = prevActiveIndex === 2;

    if (reset) {
    } else {
      const activeIndex = prevActiveIndex + 1;
      let completedStepIndex: number | undefined = prevCompletedStepIndex;

      if (!prevCompletedStepIndex || prevCompletedStepIndex < prevActiveIndex) {
        completedStepIndex = prevActiveIndex;
      }

      // Check if the activeIndex or completedStepIndex needs updating
      if (activeIndex !== prevActiveIndex || completedStepIndex !== prevCompletedStepIndex) {
        // Update the state to move to the next step
        setState((prevState) => ({
          ...prevState,
          activeIndex,
          completedStepIndex,
        }));
      }
    }
  };


  const goBack = () => {
    const { activeIndex: prevActiveIndex } = state;
    const activeIndex = prevActiveIndex === 0 ? 0 : prevActiveIndex - 1;

    setState((prevState) => ({
      ...prevState,
      activeIndex,
    }));
  };

  const renderCurrentStep = () => {
    switch (state.activeIndex) {
      case 0:
        return <CustomerInof
          peerInfor={peerInfor}
          setPeerInfo={setPeerInfo}
          goToNextStep={goToNextStep}

        />
      case 1:
        return <Services
          goBack={goBack}
          goToNextStep={goToNextStep}
          peerInfor={peerInfor}
          setPeerInfo={setPeerInfo}
          services={services}

        />

      case 2:
        return <Images
          goBack={goBack}
          goToNextStep={goToNextStep}
          peerInfor={peerInfor}
          setPeerInfo={setPeerInfo}
          onAddPeer={onAddPeer}
          image={image}
          setImage={setImage}
          showModal={showModal}
          setShowModal={setShowModal}

        />

      default:
        return null
    }
  };

  const getStepState = (index: number) => {
    const { activeIndex, completedStepIndex } = state;
    let stepState = Wizard.States.DISABLED;

    if (completedStepIndex && completedStepIndex > index - 1) {
      stepState = Wizard.States.COMPLETED;
    } else if (activeIndex === index || completedStepIndex === index - 1) {
      stepState = Wizard.States.ENABLED;
    }

    return stepState;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
        style={styles.containerStyles}
        keyboardShouldPersistTaps="always"

      >
        {/* Wizard for your main steps */}
        <Wizard testID={'uilib.wizard'}
          activeIndex={state.activeIndex}
          onActiveIndexChanged={onActiveIndexChanged}
          containerStyle={{
            marginHorizontal: 0,
            elevation: 5,
            marginVertical: 10,
            borderRadius: 20,
            // backgroundColor: appTheme.colors.background,
            borderColor: Colors.grey70,
            borderWidth: 1,
            // marginHorizontal: 10
          }}
          activeConfig={
            {
              color: Colors.green70,
              labelStyle: { color: appTheme.colors.text },
              state: WizardStepStates.ENABLED,
              circleSize: 30,
              circleBackgroundColor: Colors.green20,
              circleColor: appTheme.colors.background,


            }
          }


        >
          <Wizard.Step
            state={getStepState(0)}
            label={'Customer Information'}
            enabled={true}

          />
          <Wizard.Step state={getStepState(1)} label={'Services'} />
          <Wizard.Step state={getStepState(2)} label={'Images'} />

        </Wizard>

        {/* Render the current step */}
        {renderCurrentStep()}


      </ScrollView>
    </SafeAreaView>
  )
}

export default ServiceEncounter

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