import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import PopularItem from './main/PopularItem';

const PopularList = ({popularList}: {popularList: []}) => {
  const RenderPopularItem = (itemData: {
    item: {
      imageUrl: string;
      name: string;
      price: string;
    };
  }) => {
    return <PopularItem item={itemData.item} />;
  };
  return (
    <View style={styles.popularListWrapper}>
      <Text style={styles.categoryText}>Popular</Text>
      <FlatList
        data={popularList}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={RenderPopularItem}
      />
    </View>
  );
};

export default PopularList;

const styles = StyleSheet.create({
  popularListWrapper: {
    paddingLeft: 20,
    marginBottom: 50,
  },
  categoryText: {
    marginVertical: 20,
    fontSize: 20,
  },
});
