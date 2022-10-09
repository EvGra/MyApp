import {StyleSheet, Pressable, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {AuthContext} from '../src/auth-context';
import {addCart, removeCart} from '../src/redux/cartItems';
import {COLORS} from '../src/data';

interface Props {
  name: string;
}

const AddToCartButton: React.FC<Props> = ({name}) => {
  const Context = useContext(AuthContext);

  const [buttonPressed, setButtonPressed] = useState(false);

  const items: any[] = Context.items;

  const cartItemNames = useSelector(state => state.cartItems.names);

  const dispatch = useDispatch();

  const itemCart = cartItemNames.includes(name);

  const onPressHandler = () => {
    setButtonPressed(!buttonPressed);
    if (itemCart) {
      dispatch(removeCart({name: name}));
    } else {
      dispatch(addCart({name: name}));
    }
  };
  return (
    <Pressable onPress={onPressHandler}>
      <View style={[styles.cartButton, buttonPressed && styles.buttonPressed]}>
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
