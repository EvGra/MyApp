import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {StackParams} from '../App';
import {COLORS} from '../src/data';
import Home from '../screens/main/Home';
import Messagies from '../screens/main/Messagies';
import Profile from '../screens/main/Profile';

const AuthenticatedScreen = () => {
  const Tab = createBottomTabNavigator<StackParams>();

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

export default AuthenticatedScreen;

const styles = StyleSheet.create({});
