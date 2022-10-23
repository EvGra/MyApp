import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import {AuthContext} from '../../src/auth-context';
import HeaderButton from '../../components/CategoryScreen/HeaderButton';
import {COLORS} from '../../src/data';
import CartList from '../../components/CartList';
import TotalPriceElement from '../../components/main/TotalPriceElement';

type StackParamList = {
  HomeScreens: {screen: string; params: {}} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const CartScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const Context = useContext(AuthContext);
  const items: any[] = Context.items;

  const cartItemNames = useSelector(state => state.cartItems.names);
  const cartItemNamesQuantity = useSelector(
    state => state.cartItems.cartItemsQuantity,
  );

  const cartItems = items.filter(item => cartItemNames.includes(item.name));

  const totalItems: any[] = [];

  cartItems.map(elem => {
    for (let i = 0; i < cartItemNamesQuantity.length; i++) {
      if (elem.name == cartItemNamesQuantity[i].name) {
        totalItems.push(cartItemNamesQuantity[i]);
        return;
      }
    }
  });

  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].params = totalItems[i];
  }

  const subTotalSum = totalItems.reduce((sum, item) => {
    let sumItem = 0;
    if (item.agreeCheckBox) {
      sumItem = item.price * item.quantity;
    }
    return sum + sumItem;
  }, 0);

  const checkOutPressHandler = () => {
    subTotalSum &&
      navigation.navigate('HomeScreens', {
        screen: 'CheckOutScreen',
        params: {
          subTotalSum,
          cartItems,
          totalItems,
        },
      });
  };

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <HeaderButton
            name="arrow-back-outline"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Text style={styles.headerTitle}> My Cart</Text>
        <Pressable>
          <View>
            <Ionicons name="ellipsis-vertical" size={30} color="gray" />
          </View>
        </Pressable>
      </View>
      {cartItems && <CartList cartList={cartItems} />}
      <TotalPriceElement
        textHeader="Subtotal"
        onPress={checkOutPressHandler}
        price={subTotalSum}
        textBotton="CHECK OUT"
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.grayBackground,
  },
  headerWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
});
