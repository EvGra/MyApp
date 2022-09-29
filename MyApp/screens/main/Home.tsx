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
import SaleDiscountElement from '../../components/main/SaleDiscountElement';
import PopularItem from '../../components/main/PopularItem';

export default function Home({navigation}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6332f8cc573c03ab0b551d3e.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
      });
  }, []);

  let saleList = [];
  let popularList = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].sale == 'true') {
      saleList.push(items[i]);
    } else if (items[i].popular == 'true') {
      popularList.push(items[i]);
    }
  }
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('CategoryScreens', {screen: 'CategoryScreen'});
    };

    return <CategoryElement title={itemData.item.id} onPress={pressHandler} />;
  };

  const renderSaleItem = itemData => {
    const pressHandler = () => {};
    return (
      <SaleDiscountElement
        title={itemData.item.name}
        price={itemData.item.price}
        onPress={pressHandler}
      />
    );
  };

  const renderPopularItem = itemData => {
    const pressHandler = () => {
      console.log('popularitem');
    };
    return (
      <PopularItem
        title={itemData.item.name}
        price={itemData.item.price}
        onPress={pressHandler}
      />
    );
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
            <Pressable
              style={({pressed}) => [
                styles.searchButton,
                pressed ? styles.buttonPressed : null,
              ]}
              onPress={() => {
                navigation.navigate('CategoryScreens', {
                  screen: 'SearchScreen',
                });
              }}>
              <Ionicons name="search-outline" size={20} />
            </Pressable>
          </View>
          <Pressable
            style={({pressed}) => [
              styles.cartButton,
              pressed ? styles.buttonPressed : null,
            ]}>
            <Ionicons name="cart-outline" size={25} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.categoryText}>Category</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
          />
        </View>
      </View>
      <View style={styles.userInfoWrapper}>
        <Pressable
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
          <View style={styles.walletButton}>
            <Ionicons name="wallet-outline" size={20} color="white" />
            <Text style={styles.textButtonInUserInfo}>{'\u0024'}</Text>
            <Text style={styles.textButtonInUserInfo}>1.500</Text>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
          <View style={styles.buttonsInUserInfo}>
            <Ionicons name="arrow-up-circle-outline" size={20} color="white" />
            <Text style={styles.textButtonInUserInfo}>Pay</Text>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
          <View style={styles.buttonsInUserInfo}>
            <Ionicons name="add-circle-outline" size={20} color="white" />
            <Text style={styles.textButtonInUserInfo}>Top Up</Text>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
          <View style={styles.buttonsInUserInfo}>
            <Ionicons name="list-circle-outline" size={20} color="white" />
            <Text style={styles.textButtonInUserInfo}>More</Text>
          </View>
        </Pressable>
      </View>
      <View style={{paddingLeft: 20}}>
        <Text style={styles.categoryText}>Sale Discount</Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={saleList}
            keyExtractor={item => item.id}
            renderItem={renderSaleItem}
          />
        </View>
      </View>
      <View style={{paddingLeft: 20}}>
        <Text style={styles.categoryText}>Popular</Text>
        <FlatList
          data={saleList}
          keyExtractor={item => item.id}
          renderItem={renderPopularItem}
        />
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
    fontSize: 20,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: COLORS.orange,
  },
  walletButton: {
    flexDirection: 'row',
  },
  buttonsInUserInfo: {
    alignItems: 'center',
  },
  textButtonInUserInfo: {
    color: 'white',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
