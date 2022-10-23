import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../src/data';
import RatingItem from './RatingItem';

const TitleAndPriceForElement = ({
  title,
  price,
  rating,
}: {
  title: string;
  price: string;
  rating: number;
}) => {
  return (
    <View style={styles.itemInfoWrapper}>
      <View>
        <Text style={styles.itemName}>{title}</Text>
        <RatingItem rating={rating} />
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
  itemName: {
    fontSize: 14,
    color: COLORS.grayDark,
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.blueDark,
  },
});
