import {StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {addCart} from '../src/redux/cartItems';
import {COLORS} from '../src/data';
import {useAppDispatch, useAppSelector} from '../src/hook';

interface Props {
  name: string;
}

const AddToCartButton: React.FC<Props> = ({name}) => {
  const cartItemNames = useAppSelector(state => state.cartItems.names);

  const dispatch = useAppDispatch();

  const itemCart = cartItemNames.includes(name);

  const onPressHandler = () => {
    if (!itemCart) {
      dispatch(addCart({name: name}));
    }
  };
  return (
    <Pressable
      onPress={onPressHandler}
      style={({pressed}) => [
        styles.cartButton,
        pressed ? styles.buttonPressed : null,
      ]}>
      <View>
        <Ionicons name="cart-outline" size={25} color="white" />
      </View>
    </Pressable>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  cartButton: {
    backgroundColor: COLORS.blueLight,
    marginTop: 30,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonPressed: {
    backgroundColor: COLORS.blueDark,
  },
});
