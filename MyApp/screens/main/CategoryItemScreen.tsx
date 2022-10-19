import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

import HeaderButton from '../../components/CategoryScreen/HeaderButton';
import {COLORS} from '../../src/data';
import ItemsList from '../../components/main/ItemsList';

type StackParamList = {
  HomeScreens: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const CategoryItemScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const route = useRoute();
  const [{items, title}] = useState(route.params);

  const subCategoryItems: any = [];

  const windowWidth = Dimensions.get('window').width;

  items.filter((item: {category: []}) => {
    if (item.category.includes(title)) {
      subCategoryItems.push(item);
    }
  });

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <HeaderButton
            name="arrow-back-outline"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Text style={[styles.headerTitle, {marginLeft: windowWidth / 30}]}>
          {title}
        </Text>
        <View>
          <HeaderButton
            name="cart-outline"
            onPress={() => {
              navigation.navigate('HomeScreens', {
                screen: 'CartScreen',
              });
            }}
          />
        </View>
      </View>
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
