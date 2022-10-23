import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';

import {COLORS} from '../../src/data';

interface Props {
  rating: number;
}

const RatingItem = ({rating}: Props) => {
  return (
    <View style={styles.ratingWrapper}>
      <Rating fractions={1} startingValue={rating} imageSize={12} />
      <Text style={styles.ratingNumber}>{rating}</Text>
    </View>
  );
};

export default RatingItem;

const styles = StyleSheet.create({
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    marginLeft: 5,
    color: COLORS.grayLight,
  },
});
