import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import PopularItem from './main/PopularItem';

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    rating: number;
  };
}

const PopularList = ({popularList}: {popularList: any[]}) => {
  const RenderPopularItem = (itemData: Props) => {
    return <PopularItem item={itemData.item} />;
  };
  return (
    <FlatList
      data={popularList}
      keyExtractor={(_, index) => 'key' + index}
      renderItem={RenderPopularItem}
    />
  );
};

export default PopularList;

const styles = StyleSheet.create({
  categoryText: {
    marginVertical: 20,
    fontSize: 20,
  },
});
