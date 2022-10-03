import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../src/data';

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
