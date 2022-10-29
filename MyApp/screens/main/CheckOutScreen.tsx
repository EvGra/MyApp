import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {COLORS} from '../../src/data';
import TotalPriceElement from '../../components/main/TotalPriceElement';
import CheckOutList from '../../components/main/CheckOutList';

type StackParamList = {
  HomeScreens: {screen: string; params: {}} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const CheckOutScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const route: RouteProp<
    {
      params: {
        cartItems: [];
        subTotalSum: number;
      };
    },
    'params'
  > = useRoute();
  const [{cartItems, subTotalSum}] = useState(route.params);

  const buyNowPressHandler = () => {
    navigation.navigate('HomeScreens', {
      screen: 'SuccessPaymentScreen',
      params: {
        cartItems,
        totalPrice,
      },
    });
  };

  const totalPrice = subTotalSum + 2;

  return (
    <View style={styles.screenWrapper}>
      <CheckOutList />
      <TotalPriceElement
        onPress={buyNowPressHandler}
        textHeader="Total"
        price={totalPrice}
        textBotton="BUY NOW"
      />
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.grayBackground,
  },
});
