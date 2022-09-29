import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../src/data';

const PopularItem = ({
  title,
  price,
  onPress,
}: {
  title: string;
  price: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.popularElementWrapper}>
      <View style={{backgroundColor: COLORS.grayBackground, width: 90}}>
        {/* <Image/> */}
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.infoItem}>
          <Text>{title}</Text>
          <Text>
            {'\u0024'}
            {price}
          </Text>
          <Text>rating</Text>
        </View>
        <View>
          <Pressable>
            <Ionicons name="heart-outline" size={25} color={COLORS.red} />
          </Pressable>
          <Pressable>
            <View>
              <Ionicons name="cart-outline" size={25} color="white" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  popularElementWrapper: {
    flexDirection: 'row',
    marginHorizontal: 30,
    height: 130,
  },
  infoWrapper: {
    marginVertical: 15,
    borderColor: COLORS.grayLight,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoItem: {},
  infoItemName: {
    fontSize: 14,
  },
  infoItemPrice: {
    color: COLORS.blueDark,
    fontSize: 18,
  },
});
