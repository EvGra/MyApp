import React, {useContext} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
import CartButton from './components/CartButton';
import GoBackButton from './components/CategoryScreen/GoBackButton';

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
};

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator<StackParams>();

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

const HomeScreens = ({navigation}) => {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerRight: () => (
            <CartButton
              onPress={() => {
                navigation.navigate('CartScreen');
              }}
            />
          ),
          headerLeft: () => (
            <GoBackButton
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
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedScreen = () => {
  const authCtx = useContext(AuthContext);
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
  const authCtx = useContext(AuthContext);

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
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeScreens"
                component={HomeScreens}
                options={{headerShown: false}}
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
        <Root />
      </AuthContextProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
