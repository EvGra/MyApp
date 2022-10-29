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

  const screenOptions = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingPageFirst"
        component={OnboardingPageFirst}
        options={screenOptions}
      />
      <Stack.Screen
        name="OnboardingPageSecond"
        component={OnboardingPageSecond}
        options={screenOptions}
      />
      <Stack.Screen
        name="OnboadingPageThird"
        component={OnboadingPageThird}
        options={screenOptions}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={screenOptions} />
      <Stack.Screen name="SignUp" component={SignUp} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default PreviewScreens;

const styles = StyleSheet.create({});
