import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

import CheckOutList from '../../components/main/CheckOutList';
import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';
import {useAppDispatch} from '../../src/hook';
import {removeCart} from '../../src/redux/cartItems';
import {StackNavigationProp} from '@react-navigation/stack';

type StackParamList = {
  AuthenticatedScreen: {} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const SuccessPaymentScreen = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<NavigationProps>();

  const route: RouteProp<
    {
      params: {
        cartItems: [];
      };
    },
    'params'
  > = useRoute();
  const [{cartItems}] = useState(route.params);

  const continueShoppingButton = () => {
    navigation.navigate('AuthenticatedScreen', {
      screen: 'Home',
    });

    cartItems.map((elem: {name: string; params: {agreeCheckBox: boolean}}) => {
      elem.params.agreeCheckBox && dispatch(removeCart({name: elem.name}));
    });
  };

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.paymentWrapper}>
        <CheckOutList disabled={true} />
      </View>
      <View style={styles.successBlock}>
        <View style={styles.row} />
        <Image
          style={styles.successImage}
          source={require('../../src/images/cart/Success.png')}
        />
        <Text style={styles.successText}>SUCCESS</Text>
        <View style={styles.mainTextWrapper}>
          <Text style={styles.mainText}>
            Thank you for purchasing. Your order will be shipped 2 - 4 working
            days.
          </Text>
        </View>
        <Button
          onPress={continueShoppingButton}
          text="CONTINUE SHOPPING"
          textColorWhite={true}
          colorBg={COLORS.blueDark}
        />
      </View>
    </View>
  );
};

export default SuccessPaymentScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  paymentWrapper: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.grayLight,
    opacity: 0.5,
  },
  successBlock: {
    position: 'absolute',
    bottom: 0,
    height: 370,
    width: '100%',
    borderTopColor: COLORS.grayLight,
    borderLeftColor: COLORS.grayLight,
    borderRightColor: COLORS.grayLight,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  row: {
    marginTop: 10,
    marginBottom: 35,
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.grayLight,
  },
  successImage: {
    height: 60,
    width: 60,
    marginTop: 25,
    marginBottom: 40,
  },
  successText: {
    fontWeight: '700',
    fontSize: 18,
  },
  mainTextWrapper: {
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 30,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 14,
  },
});
