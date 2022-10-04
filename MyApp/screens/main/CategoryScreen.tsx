import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import SubCategory from '../../components/CategoryScreen/SubCategory';
import PopularList from '../../components/PopularList';
import {COLORS} from '../../src/data';

const CategoryScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {items, category} = route.params;

  let categoryItems = [];
  let categoryItemsPopular = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].category[0] == category) {
      categoryItems.push(items[i]);
      if (items[i].popular == 'true') {
        categoryItemsPopular.push(items[i]);
      }
    }
  }

  useLayoutEffect(() => {
    const categoryTitle = category;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation]);

  const renderSubCategory = itemData => {
    const pressHandler = () => {};
    return (
      <SubCategory
        title={itemData.item.category[1]}
        image={itemData.item.imageUrl[0]}
        number="0"
        // onPress={pressHandler}
      />
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="#F6F6F7" />
      <View style={{paddingLeft: 20, backgroundColor: COLORS.grayBackground}}>
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
  categoryText: {
    marginVertical: 20,
    fontSize: 20,
  },
});
