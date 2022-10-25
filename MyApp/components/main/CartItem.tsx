import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import {COLORS} from '../../src/data';
import {getTotals, removeCart} from '../../src/redux/cartItems';

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    color?: string;
    size?: string;
    itemParams?: {
      size: number;
      quantity: number;
    };
  };
}

const CartItem: React.FC<Props> = ({item}) => {
  const [agreeCheckBox, setAgreeCheckBox] = useState(false);
  const [quality, setQuality] = useState(
    item.itemParams?.quantity ? item.itemParams.quantity : 1,
  );

  const subTotalPrice = quality * +item.price;

  const dispatch = useDispatch();

  const deleteItemHendler = () => {
    dispatch(removeCart({name: item.name}));
  };

  useEffect(() => {
    dispatch(
      getTotals({
        name: item.name,
        quantity: quality,
        agreeCheckBox: agreeCheckBox,
        price: +item.price,
      }),
    );
  }, [quality, dispatch, agreeCheckBox]);

  const leftSwipe = () => {
    return (
      <Pressable onPress={deleteItemHendler}>
        <View style={styles.deleteBox}>
          <Ionicons name={'trash-outline'} size={25} color="gray" />
        </View>
      </Pressable>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={leftSwipe} overshootRight={false}>
        <View style={styles.itemCart}>
          <View style={styles.mainInfoWrapper}>
            <Pressable onPress={() => setAgreeCheckBox(!agreeCheckBox)}>
              <View>
                <View style={styles.checkBox}></View>
                {agreeCheckBox && (
                  <View style={styles.checkBoxLine}>
                    <Image
                      source={require('../../src/images/cart/Checklis.png')}
                    />
                  </View>
                )}
              </View>
            </Pressable>

            <View>
              <Image
                style={styles.itemImage}
                source={{uri: item.imageUrl[0]}}
              />
            </View>
            <View style={styles.itemAndTrashWrapper}>
              <View>
                <Text>{item.name}</Text>
                <Text>Color: {item.color ? item.color : 'No color'}</Text>
                <Text>
                  Size:{' '}
                  {item.itemParams?.size ? item.itemParams.size : 'No size'}
                </Text>
                <Text style={styles.itemPrice}>
                  {'\u0024'}
                  {item.price}
                </Text>
                <View style={styles.buttonsWrapper}>
                  <View style={styles.buttonQualityElem}>
                    <Pressable
                      onPress={() =>
                        quality > 1 ? setQuality(quality - 1) : null
                      }>
                      <Text>-</Text>
                    </Pressable>
                  </View>
                  <View style={styles.qualityWrapper}>
                    <Text>{quality}</Text>
                  </View>
                  <View style={styles.buttonQualityElem}>
                    <Pressable onPress={() => setQuality(quality + 1)}>
                      <Text>+</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.subTotalWrapper}>
            <Text>Sub Total:</Text>
            <Text style={styles.subTotalPrice}>
              {'\u0024'}
              {subTotalPrice}
            </Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemCart: {
    flex: 1,
    paddingVertical: 10,
    height: 170,
  },
  mainInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    height: 20,
    width: 20,
    marginRight: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLORS.grayLight,
  },
  checkBoxLine: {
    position: 'absolute',
  },
  itemImage: {
    height: 115,
    width: 115,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  itemAndTrashWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemPrice: {
    color: COLORS.blueDark,
    fontSize: 18,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 25,
    width: 100,
    borderRadius: 4,
    borderColor: COLORS.grayLight,
    borderWidth: 0.2,
  },
  qualityWrapper: {
    width: 40,
    paddingHorizontal: 15,
  },
  buttonQualityElemWrapper: {},
  buttonQualityElem: {
    paddingHorizontal: 10,
  },
  deleteBox: {
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 160,
  },
  borderLine: {
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 0.2,
    borderBottomColor: COLORS.grayLight,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subTotalPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.red,
    marginLeft: 40,
    paddingRight: 20,
  },
});
