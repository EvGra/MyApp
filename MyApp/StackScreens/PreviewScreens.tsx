import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackParams} from '../App';
import SignIn from '../screens/sign/SignIn';
import SignUp from '../screens/sign/SignUp';
import OnboardingPageFirst from '../screens/preview/OnboardingPageFirst';
import OnboardingPageSecond from '../screens/preview/OnboardingPageSecond';
import OnboadingPageThird from '../screens/preview/OnboadingPageThird';

const PreviewScreens = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingPageFirst"
        component={OnboardingPageFirst}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingPageSecond"
        component={OnboardingPageSecond}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboadingPageThird"
        component={OnboadingPageThird}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PreviewScreens;

const styles = StyleSheet.create({});
