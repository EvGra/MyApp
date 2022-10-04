import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../src/data';
import TitleAndPriceForElement from './TitleAndPriceForElement';

const SearchItem = ({
  title,
  price,
  image,
  onPress,
}: {
  title: string;
  price: string;
  image: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.searchItemWrapper}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.itemImage}
          source={{
            uri: image,
          }}
        />
        <TitleAndPriceForElement title={title} price={price} />
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  searchItemWrapper: {
    flex: 0.5,
    justifyContent: 'space-around',
    marginHorizontal: 5,
    marginVertical: 7,
  },
  itemImage: {
    borderRadius: 10,
    height: 200,
  },
});
