import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
  };
}

const CartItem: React.FC<Props> = ({item}) => {
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.itemCart}>
      <View style={styles.mainInfoWrapper}>
        <CheckBox
          value={agree}
          tintColors={{true: 'red', false: 'black'}}
          onChange={() => setAgree(!agree)}
        />
        <View>
          <Image style={styles.itemImage} source={{uri: item.imageUrl[0]}} />
        </View>
        <View style={styles.itemAndTrashWrapper}>
          <View>
            <Text>{item.name}</Text>
            <Text>color</Text>
            <Text>size</Text>
            <Text>{item.price}</Text>
            <View>
              <Text>buttons</Text>
            </View>
          </View>
          <View style={styles.trashButton}>
            <Pressable>
              <Ionicons name={'trash-outline'} size={25} color="gray" />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.subTotalWrapper}>
        <Text>Sub Total</Text>
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
  trashButton: {},
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
