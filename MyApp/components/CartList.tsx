import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';

import CartItem from './main/CartItem';

const CartList = ({cartList}: {cartList: any[]}) => {
  const RenderCartItem = (itemData: {item: {}}) => {
    return <CartItem item={itemData.item} />;
  };
  return (
    <View style={styles.cartItemsWrapper}>
      <FlatList
        data={cartList}
        keyExtractor={(_, index) => 'key' + index}
        renderItem={RenderCartItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  cartItemsWrapper: {
    marginBottom: 205,
  },
});
