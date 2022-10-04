import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../src/data';

const SaleDiscountElement = ({
  item,
  navigation,
}: {
  item: any;
  navigation: any;
}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('HomeScreens', {
          screen: 'ItemScreen',
          params: {
            item: item,
          },
        });
      }}>
      <View style={styles.saleElementWrapper}>
        <Image
          source={{
            uri: item.imageUrl[0],
          }}
          style={{height: '100%'}}
        />
        <View style={styles.discountFlag}>
          <Image source={require('../../src/images/home/Discount.png')} />
          <Text style={styles.discountFlagText}>Disc 50%</Text>
        </View>
        <Text style={styles.textName}>{item.name}</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.textPrice}>
            {'\u0024'}
            {item.price}
          </Text>
          <Text style={styles.priceWithoutDiscount}>
            {'\u0024'}
            {+item.price * 2}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SaleDiscountElement;

const styles = StyleSheet.create({
  saleElementWrapper: {
    paddingLeft: 10,
    marginRight: 15,
    justifyContent: 'flex-end',
    height: 170,
    width: 120,
    backgroundColor: COLORS.grayBackground,
  },
  discountFlag: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  discountFlagText: {
    position: 'absolute',
    paddingLeft: 5,
    textAlign: 'center',
    color: 'white',
  },
  textName: {
    fontSize: 12,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrice: {
    color: COLORS.blueDark,
    fontSize: 14,
  },
  priceWithoutDiscount: {
    marginLeft: 10,
    fontSize: 8,
    color: COLORS.grayLight,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
