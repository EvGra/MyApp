import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PopularItem from './PopularItem';

const RenderPopularItem = (itemData: any, navigation: any) => {
  const pressHandler = () => {};
  return (
    <PopularItem
      title={itemData.item.name}
      price={itemData.item.price}
      image={itemData.item.imageUrl[0]}
      navigation={navigation}
    />
  );
};

export default RenderPopularItem;

const styles = StyleSheet.create({});
