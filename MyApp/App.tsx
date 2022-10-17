import React, {useContext, useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Provider} from 'react-redux';

import OnboardingPageFirst from './screens/preview/OnboardingPageFirst';
import OnboardingPageSecond from './screens/preview/OnboardingPageSecond';
import OnboadingPageThird from './screens/preview/OnboadingPageThird';
import Home from './screens/main/Home';
import SignIn from './screens/sign/SignIn';
import SignUp from './screens/sign/SignUp';
import {AuthContext, AuthContextProvider} from './src/auth-context';
import Profile from './screens/main/Profile';
import Messagies from './screens/main/Messagies';
import {COLORS} from './src/data';
import CategoryScreen from './screens/main/CategoryScreen';
import SearchScreen from './screens/main/SearchScreen';
import CartScreen from './screens/main/CartScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemScreen from './screens/main/ItemScreen';
import HeaderButton from './components/CategoryScreen/HeaderButton';
import FavoriteScreen from './screens/profile/FavoriteScreen';
import CheckOutScreen from './screens/main/CheckOutScreen';
import {store} from './src/redux/store';
import Loading from './screens/Loading';

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
  HomeScreens: undefined;
  SearchScreen: undefined;
  CartScreen: undefined;
  ItemScreen: undefined;
  PopularItem: undefined;
  FavoriteScreen: undefined;
  Loading: undefined;
  CheckOutScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator<StackParams>();

const headerSettings = {headerShown: false};

const LoadingScreen = () => {
  return (
    <Stack.Screen name="Loading" component={Loading} options={headerSettings} />
  );
};

const PreviewScreens = () => {
  return (
    <Stack.Group>
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
    </Stack.Group>
  );
};

const HomeScreens = () => {
  const navigation = useNavigation();

  const categoryScreenOptions = {
    headerRight: () => (
      <HeaderButton
        name="cart-outline"
        onPress={() => {
          navigation.navigate('CartScreen');
        }}
      />
    ),
    headerLeft: () => (
      <HeaderButton
        name="arrow-back-outline"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    ),
    headerStyle: {
      backgroundColor: '#transparent',
    },
    headerTitleStyle: {
      color: COLORS.grayDark,
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={categoryScreenOptions}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={headerSettings}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={headerSettings}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={headerSettings}
      />
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={headerSettings}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={headerSettings}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedScreen = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: COLORS.grayLight,
          tabBarActiveTintColor: COLORS.blueDark,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            marginHorizontal: 30,
            borderRadius: 50,
            borderColor: COLORS.grayDark,
            height: 60,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Messagies"
          component={Messagies}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="ellipse-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
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
          {!authCtx.isAuthenticated && PreviewScreens()}
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
