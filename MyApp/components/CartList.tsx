import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import CartItem from './main/CartItem';

const CartList = ({cartList}: {cartList: []}) => {
  const RenderCartItem = (itemData: {item: {}}) => {
    return <CartItem item={itemData.item} />;
  };
  return (
    <View>
      <FlatList
        data={cartList}
        keyExtractor={(_, index) => 'key' + index}
        renderItem={RenderCartItem}
      />
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({});
