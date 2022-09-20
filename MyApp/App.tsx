import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingPageFirst from './screens/preview/OnboardingPageFirst';
import OnboardingPageSecond from './screens/preview/OnboardingPageSecond';
import OnboadingPageThird from './screens/preview/OnboadingPageThird';
import Home from './screens/main/Home';

export type StackParams = {
  OnboardingPageFirst;
  OnboardingPageSecond;
  OnboadingPageThird;
  Home;
};

const Stack = createNativeStackNavigator<StackParams>();

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnboardingPageFirst">
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
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
