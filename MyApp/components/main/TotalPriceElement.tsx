import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

import {COLORS} from '../../src/data';
import Button from '../sign/Button';

const TotalPriceElement = ({
  onPress,
  price,
  textBotton,
  textHeader,
}: {
  price: number;
  textHeader: string;
  textBotton: string;
  onPress: () => void;
}) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={[styles.checkOutWrapper, {width: width}]}>
      <View style={styles.priceWrapper}>
        <Text style={styles.textSubtotal}>{textHeader}</Text>
        <Text style={styles.textPrice}>
          {'\u0024'}
          {price}
        </Text>
      </View>
      <View style={styles.checkButton}>
        <Button
          onPress={onPress}
          text={textBotton}
          textColorWhite={true}
          colorBg={COLORS.blueDark}
        />
      </View>
    </View>
  );
};

export default TotalPriceElement;

const styles = StyleSheet.create({
  checkOutWrapper: {
    position: 'absolute',
    bottom: 0,
    height: 145,
    borderTopColor: COLORS.grayLight,
    borderLeftColor: COLORS.grayLight,
    borderRightColor: COLORS.grayLight,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: 'white',
    paddingTop: 20,
  },
  textSubtotal: {fontSize: 14},
  textPrice: {
    fontSize: 20,
    color: COLORS.red,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  checkButton: {
    marginTop: 10,
  },
});
