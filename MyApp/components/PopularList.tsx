import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import PopularItem from './main/PopularItem';

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
  };
}

const PopularList = ({popularList}: {popularList: any[]}) => {
  const RenderPopularItem = (itemData: Props) => {
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
