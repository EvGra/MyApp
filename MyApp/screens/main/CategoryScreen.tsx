import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

import {StackParams} from '../../App';
import SubCategory from '../../components/CategoryScreen/SubCategory';
import PopularList from '../../components/PopularList';
import {COLORS} from '../../src/data';

type categoryScreenProp = StackNavigationProp<StackParams, 'CategoryScreen'>;

const CategoryScreen = () => {
  const navigation = useNavigation<categoryScreenProp>();

  const route = useRoute();
  const [items] = useState(route.params?.items);
  const [category] = useState(route.params?.category);

  const categoryItems = [];
  const categoryNameItems: any[] = [];
  const categoryItemsPopular = [];

  for (let i = 0; i < items.length; i++) {
    if (
      items[i].category[0] == category &&
      !categoryNameItems.includes(items[i].category[1])
    ) {
      categoryItems.push(items[i]);
      categoryNameItems.push(items[i].category[1]);
      if (items[i].popular == 'true') {
        categoryItemsPopular.push(items[i]);
      }
    }
  }

  const numberOfItems = (elem: string) => {
    let number = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].category[1] == elem) {
        number++;
      }
    }
    return number;
  };

  useLayoutEffect(() => {
    const categoryTitle = category;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation]);

  const renderSubCategory = (itemData: {
    item: {category: string; imageUrl: string; id: string};
  }) => {
    return (
      <SubCategory
        title={itemData.item.category[1]}
        image={itemData.item.imageUrl[0]}
        number={numberOfItems(itemData.item.category[1]).toString()}
      />
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="#F6F6F7" />
      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryText}>Category</Text>
        <FlatList
          horizontal={true}
          data={categoryItems}
          keyExtractor={item => item.id}
          renderItem={renderSubCategory}
        />
      </View>
      <PopularList popularList={categoryItemsPopular} />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  categoryWrapper: {
    paddingLeft: 20,
    backgroundColor: COLORS.grayBackground,
  },
  categoryText: {
    marginVertical: 20,
    fontSize: 20,
  },
});
