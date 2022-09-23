import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingPageFirst from './screens/preview/OnboardingPageFirst';
import OnboardingPageSecond from './screens/preview/OnboardingPageSecond';
import OnboadingPageThird from './screens/preview/OnboadingPageThird';
import Home from './screens/main/Home';
import SignIn from './screens/sign/SignIn';
import SignUp from './screens/sign/SignUp';

export type StackParams = {
  OnboardingPageFirst: undefined;
  OnboardingPageSecond: undefined;
  OnboadingPageThird: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const PreviewScreens = () => {
  return (
    <Stack.Group>
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
    </Stack.Group>
  );
};

// const AuthenticatedScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {!isTryingLogin && PreviewScreens({})}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Root />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
