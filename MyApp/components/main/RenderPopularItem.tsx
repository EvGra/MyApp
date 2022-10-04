import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PopularItem from './PopularItem';

const RenderPopularItem = itemData => {
  const pressHandler = () => {
    console.log('popularitem');
  };
  return (
    <PopularItem
      title={itemData.item.name}
      price={itemData.item.price}
      image={itemData.item.imageUrl[0]}
      onPress={pressHandler}
    />
  );
};

export default RenderPopularItem;

const styles = StyleSheet.create({});
