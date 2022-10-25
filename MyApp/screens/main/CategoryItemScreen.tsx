import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

import {COLORS} from '../../src/data';
import ItemsList from '../../components/main/ItemsList';
import Header from '../../components/main/Header';

const CategoryItemScreen = () => {
  const route: RouteProp<
    {
      params: {
        items: [];
        title: string;
      };
    },
    'params'
  > = useRoute();
  const [{items, title}] = useState(route.params);

  const subCategoryItems: any = [];

  items.filter((item: {category: [title: string]}) => {
    if (item.category.includes(title)) {
      subCategoryItems.push(item);
    }
  });

  return (
    <View style={styles.screenWrapper}>
      <Header title={title} />
      <ItemsList items={subCategoryItems} />
    </View>
  );
};

export default CategoryItemScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.grayBackground,
  },
});
