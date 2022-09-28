import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {CATEGORIES, COLORS} from '../../src/data';
import CategoryElement from '../../components/main/CategoryElement';

export default function Home({navigation}) {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://6332f8cc573c03ab0b551d3e.mockapi.io/items')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(arr => {
  //       setItems(arr);
  //     });
  // }, []);

  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('CategoryScreens', {screen: 'CategoryScreen'});
      console.log('cate');
    };

    return <CategoryElement title={itemData.item.id} onPress={pressHandler} />;
  };

  return (
    <View style={styles.homeWrapper}>
      <View style={styles.header}>
        <StatusBar backgroundColor={COLORS.grayBackground} />
        <View style={styles.buttons}>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Search"
              style={{
                width: 200,
              }}
            />
            <Pressable style={styles.searchButton}>
              <Ionicons name="search-outline" size={20} />
            </Pressable>
          </View>
          <Pressable style={styles.cartButton}>
            <Ionicons name="cart-outline" size={25} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.categoryText}>Category</Text>
          <FlatList
            horizontal={true}
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
          />
        </View>
      </View>
      <View>
        {/* <View>
          <Pressable>
            <Ionicons />
            <Ionicons />
            <Text>1.500</Text>
          </Pressable>
          <Pressable>
            <Ionicons />
            <Text>Pay</Text>
          </Pressable>
          <Pressable>
            <Ionicons />
            <Text>Top Up</Text>
          </Pressable>
          <Pressable>
            <Ionicons />
            <Text>More</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text>Sale Discount</Text>
        <View>
          <FlatList />
        </View>
      </View>
      <View>
        <Text>Popular</Text>
        <FlatList /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeWrapper: {},
  header: {
    backgroundColor: COLORS.grayBackground,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  searchWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    border: 1,
    borderColor: COLORS.blueLight,
    borderRadius: 5,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blueLight,
  },
  cartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blueLight,
  },
  categoryText: {
    marginVertical: 20,
  },
});
