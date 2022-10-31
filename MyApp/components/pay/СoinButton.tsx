import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../src/data';

const СoinButton = ({price, onPress}: {price: string; onPress: () => void}) => {
  const getImage = (price: string) => {
    if (price === '10') {
      return require('../../src/images/pay/coinFirst.png');
    } else if (price === '50') {
      return require('../../src/images/pay/CoinSecond.png');
    } else if (price === '100') {
      return require('../../src/images/pay/CoinThird.png');
    } else if (price === '200') {
      return require('../../src/images/pay/CoinFourth.png');
    }
  };
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed ? styles.pressed : null]}>
      <View style={styles.buttonWrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={getImage(price)} />
        </View>
        <Text style={styles.text}>
          {'\u0024'}
          {price}
        </Text>
      </View>
    </Pressable>
  );
};

export default СoinButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  imageWrapper: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {},
  text: {
    color: COLORS.blueDark,
    marginTop: 2,
  },
});
