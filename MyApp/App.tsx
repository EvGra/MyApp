import React, {useContext, useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import {AuthContext, AuthContextProvider} from './src/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from './src/redux/store';
import Loading from './screens/Loading';
import AuthenticatedScreen from './StackScreens/AuthenticatedScreen';
import HomeScreens from './StackScreens/HomeScreens';
import PreviewScreens from './StackScreens/PreviewScreens';

export type StackParams = {
  OnboardingPageFirst: undefined;
  OnboardingPageSecond: undefined;
  OnboadingPageThird: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Messagies: undefined;
  Profile: undefined;
  AuthenticatedScreen: undefined;
  CategoryScreen: undefined;
  PreviewScreens: undefined;
  HomeScreens: undefined;
  SearchScreen: undefined;
  CartScreen: undefined;
  ItemScreen: undefined;
  PopularItem: undefined;
  FavoriteScreen: undefined;
  Loading: undefined;
  CheckOutScreen: undefined;
  CategoryItemScreen: undefined;
  SuccessPaymentScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const headerSettings = {headerShown: false};

const LoadingScreen = () => {
  return (
    <Stack.Screen name="Loading" component={Loading} options={headerSettings} />
  );
};

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    };
    fetchToken();
  }, []);

  if (isTryingLogin) {
    return LoadingScreen();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {!authCtx.isAuthenticated && (
            <Stack.Screen
              name="PreviewScreens"
              component={PreviewScreens}
              options={headerSettings}
            />
          )}
          {authCtx.isAuthenticated && (
            <>
              <Stack.Screen
                name="AuthenticatedScreen"
                component={AuthenticatedScreen}
                options={headerSettings}
              />
              <Stack.Screen
                name="HomeScreens"
                component={HomeScreens}
                options={headerSettings}
              />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <AuthContextProvider>
        <Provider store={store}>
          <Root />
        </Provider>
      </AuthContextProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
