import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../src/data';

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    color?: string;
    size?: string;
  };
}

const CartItem: React.FC<Props> = ({item}) => {
  const [agreeCheckBox, setAgreeCheckBox] = useState(false);
  const [quality, setQuality] = useState(1);

  return (
    <View style={styles.itemCart}>
      <View style={styles.mainInfoWrapper}>
        <Pressable onPress={() => setAgreeCheckBox(!agreeCheckBox)}>
          <View>
            <View style={styles.checkBox}></View>
            {agreeCheckBox && (
              <View style={styles.checkBoxLine}>
                <Image source={require('../../src/images/cart/Checklis.png')} />
              </View>
            )}
          </View>
        </Pressable>
        <View>
          <Image style={styles.itemImage} source={{uri: item.imageUrl[0]}} />
        </View>
        <View style={styles.itemAndTrashWrapper}>
          <View>
            <Text>{item.name}</Text>
            <Text>Color: {item.color ? item.color : 'No color'}</Text>
            <Text>Size: {item.size ? item.size : 'No size'}</Text>
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
          <View style={styles.trashButton}>
            <Pressable>
              <Ionicons name={'trash-outline'} size={25} color="gray" />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.borderLine}></View>
      <View style={styles.subTotalWrapper}>
        <Text>
          Sub Total {'\u0024'}
          {quality * +item.price}
        </Text>
      </View>
    </View>
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
  trashButton: {},
  borderLine: {
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 0.2,
    borderBottomColor: COLORS.grayLight,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
