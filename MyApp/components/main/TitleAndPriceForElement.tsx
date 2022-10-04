import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../src/data';

const TitleAndPriceForElement = ({
  title,
  price,
}: {
  title: string;
  price: string;
}) => {
  return (
    <View style={styles.itemInfoWrapper}>
      <View>
        <Text>{title}</Text>
        <Text>rating</Text>
      </View>
      <Text style={styles.itemPrice}>
        {'\u0024'}
        {price}
      </Text>
    </View>
  );
};

export default TitleAndPriceForElement;

const styles = StyleSheet.create({
  itemInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.blueDark,
  },
});
