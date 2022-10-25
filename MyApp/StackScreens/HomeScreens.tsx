import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackParams} from '../App';
import CategoryScreen from '../screens/main/CategoryScreen';
import CategoryItemScreen from '../screens/main/CategoryItemScreen';
import CheckOutScreen from '../screens/main/CheckOutScreen';
import SearchScreen from '../screens/main/SearchScreen';
import CartScreen from '../screens/main/CartScreen';
import ItemScreen from '../screens/main/ItemScreen';
import FavoriteScreen from '../screens/profile/FavoriteScreen';

const HomeScreens = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const headerSettings = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={headerSettings}
      />
      <Stack.Screen
        name="CategoryItemScreen"
        component={CategoryItemScreen}
        options={headerSettings}
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

export default HomeScreens;

const styles = StyleSheet.create({});
