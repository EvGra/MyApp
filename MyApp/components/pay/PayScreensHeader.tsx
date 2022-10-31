import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderButton from '../CategoryScreen/HeaderButton';

const PayScreensHeader = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.headerWrapper}>
      <HeaderButton name="arrow-back-outline" onPress={onPress} />
      <Text>Top Up</Text>
      <View style={styles.invisibleElem}></View>
    </View>
  );
};

export default PayScreensHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  invisibleElem: {
    width: 40,
  },
});
