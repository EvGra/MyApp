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

const HomeScreens = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryItemScreen"
        component={CategoryItemScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessPaymentScreen"
        component={SuccessPaymentScreen}
        options={{headerShown: false}}
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
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpScreen"
        component={TopUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
