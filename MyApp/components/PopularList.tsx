import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import RenderPopularItem from './main/RenderPopularItem';

const PopularList = ({popularList}: {popularList: []}) => {
  return (
    <View style={{paddingLeft: 20}}>
      <Text style={styles.categoryText}>Popular</Text>
      <FlatList
        data={popularList}
        keyExtractor={item => item.id}
        renderItem={RenderPopularItem}
      />
    </View>
  );
};

export default PopularList;

const styles = StyleSheet.create({
  categoryText: {
    marginVertical: 20,
    fontSize: 20,
  },
});
