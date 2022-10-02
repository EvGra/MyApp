import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../src/data';

const CartButton = ({onPress}: {onPress: () => void}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.cartButton,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}>
      <Ionicons name="cart-outline" size={25} color="white" />
    </Pressable>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blueLight,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
