import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../src/data';

const CategoryElement = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  const getImage = (title: string) => {
    if (title === 'Women Fashion') {
      return require('../../src/images/home/HighHeels_Icon.png');
    } else if (title === 'Men Fashion') {
      return require('../../src/images/home/Shirt_Icon.png');
    } else if (title === 'Child Fashion') {
      return require('../../src/images/home/ChildClothes.png');
    } else if (title === 'Food & Drink') {
      return require('../../src/images/home/foodAndВrink_Icon.png');
    } else if (title === 'Kitchen Tools') {
      return require('../../src/images/home/KitchenTools_Icon.png');
    } else if (title === 'Furniture') {
      return require('../../src/images/home/Furniture_Icon.png');
    } else if (title === 'Hobby') {
      return require('../../src/images/home/Guitar_Icon.png');
    } else if (title === 'Electronic') {
      return require('../../src/images/home/Handphone_Icon.png');
    }
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.elementWrapper}>
        <Image source={getImage(title)} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryElement;

const styles = StyleSheet.create({
  elementWrapper: {
    alignItems: 'center',
    marginHorizontal: 5,
    width: 60,
  },
  text: {
    textAlign: 'center',
    color: COLORS.blueDark,
    fontWeight: '500',
  },
});
