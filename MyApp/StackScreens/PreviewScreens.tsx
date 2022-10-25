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

  const headerSettings = {headerShown: false};
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingPageFirst"
        component={OnboardingPageFirst}
        options={headerSettings}
      />
      <Stack.Screen
        name="OnboardingPageSecond"
        component={OnboardingPageSecond}
        options={headerSettings}
      />
      <Stack.Screen
        name="OnboadingPageThird"
        component={OnboadingPageThird}
        options={headerSettings}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={headerSettings} />
      <Stack.Screen name="SignUp" component={SignUp} options={headerSettings} />
    </Stack.Navigator>
  );
};

export default PreviewScreens;

const styles = StyleSheet.create({});
