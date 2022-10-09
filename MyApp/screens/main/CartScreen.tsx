import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import {AuthContext} from '../../src/auth-context';
import {StackParams} from '../../App';
import HeaderButton from '../../components/CategoryScreen/HeaderButton';
import Button from '../../components/sign/Button';
import {COLORS} from '../../src/data';
import CartList from '../../components/CartList';

type favouriteScreenProp = StackNavigationProp<StackParams, 'FavoriteScreen'>;

const CartScreen = () => {
  const navigation = useNavigation<favouriteScreenProp>();
  const Context = useContext(AuthContext);
  const items: any[] = Context.items;

  const cartItemNames = useSelector(state => state.cartItems.names);

  const cartItems = items.filter(item => cartItemNames.includes(item.name));

  if (cartItems.length === 0) {
    return <Text>You have no favorite items yet</Text>;
  }

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <HeaderButton
            name="arrow-back-outline"
            onPress={() => {
              navigation.navigate('Home');
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
      <View style={styles.checkOutWrapper}>
        <View style={styles.priceWrapper}>
          <Text style={styles.textSubtotal}>Subtotal</Text>
          <Text style={styles.textPrice}>{'\u0024'}0</Text>
        </View>
        <View style={styles.checkButton}>
          <Button text="CHECK OUT" textColorWhite={true} colorBg={true} />
        </View>
      </View>
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
  checkOutWrapper: {
    position: 'absolute',
    bottom: 0,
    height: 145,
    borderTopColor: COLORS.grayLight,
    borderLeftColor: COLORS.grayLight,
    borderRightColor: COLORS.grayLight,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: 'white',
    paddingTop: 20,
  },
  textSubtotal: {fontSize: 14},
  textPrice: {
    fontSize: 20,
    color: COLORS.red,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  checkButton: {
    marginTop: 10,
  },
});
