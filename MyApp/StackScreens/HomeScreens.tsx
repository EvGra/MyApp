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
import SuccessPaymentScreen from '../screens/main/SuccessPaymentScreen';
import TopUpScreen from '../screens/pay/TopUpScreen';
import AddCardScreen from '../screens/pay/AddCardScreen';

const HomeScreens = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const screenOptions = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="CategoryItemScreen"
        component={CategoryItemScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="SuccessPaymentScreen"
        component={SuccessPaymentScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="TopUpScreen"
        component={TopUpScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
