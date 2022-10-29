import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

import SubCategory from '../../components/CategoryScreen/SubCategory';
import PopularList from '../../components/PopularList';
import {COLORS} from '../../src/data';
import Header from '../../components/main/Header';

type StackParamList = {
  HomeScreens: {screen: string; params: {}} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const CategoryScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const route: RouteProp<
    {
      params: {
        items: any[];
        category: string;
      };
    },
    'params'
  > = useRoute();

  const [{items, category}] = useState(route.params);

  const categoryItems: any[] = [];
  const categoryNameItems: any[] = [];
  const categoryItemsPopular: any[] = [];

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
      if (items[i].category == elem) {
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

  const pressHandler = (itemName: string) => {
    navigation.navigate('HomeScreens', {
      screen: 'CategoryItemScreen',
      params: {
        items: categoryItems,
        title: itemName,
      },
    });
  };

  const renderSubCategory = (itemData: {
    item: {category: string; imageUrl: string; id: string};
  }) => {
    return (
      <Pressable onPress={() => pressHandler(itemData.item.category[1])}>
        <SubCategory
          title={itemData.item.category[1]}
          image={itemData.item.imageUrl[0]}
          number={numberOfItems(itemData.item.category).toString()}
        />
      </Pressable>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="#F6F6F7" />
      <View style={styles.categoryWrapper}>
        <Header title={category} />
        <Text style={styles.categoryText}>Category</Text>
        <FlatList
          horizontal={true}
          data={categoryItems}
          keyExtractor={item => item.id}
          renderItem={renderSubCategory}
        />
      </View>
      <View style={styles.popularListWrapper}>
        <Text style={styles.categoryText}>Popular</Text>
        <PopularList popularList={categoryItemsPopular} />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  categoryWrapper: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.grayBackground,
  },
  categoryText: {
    marginVertical: 20,
    fontSize: 20,
  },
  popularListWrapper: {
    paddingLeft: 20,
    marginBottom: 50,
  },
  headerWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
});
