import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {CATEGORIES, COLORS} from '../../src/data';
import CategoryElement from '../../components/main/CategoryElement';
import SaleDiscountElement from '../../components/main/SaleDiscountElement';
import PopularList from '../../components/PopularList';
import SearchHeader from '../../components/SearchHeader';
import {AuthContext} from '../../src/auth-context';

type StackParamList = {
  HomeScreens: {screen: string; params: {}} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

interface renderSaleItemProps {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
  };
}

interface renderCategoryItemProps {
  item: {id: string};
}

const Home = () => {
  const navigation = useNavigation<NavigationProps>();
  const Context = useContext(AuthContext);
  const [inputText, setInputText] = useState('');

  const items: [] = Context.items;

  let saleList: [] = [];
  let popularList: [] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].sale == 'true') {
      saleList.push(items[i]);
    }
    if (items[i].popular == 'true') {
      popularList.push(items[i]);
    }
  }
  const pickedTextHandler = (pickedText: string) => {
    setInputText(pickedText);
  };

  const newItems: [] = [];

  if (inputText) {
    items.filter(item => {
      if (item.name.toLowerCase().includes(inputText.toLowerCase())) {
        newItems.push(item);
      }
    });
  }

  const renderCategoryItem: React.FC<renderCategoryItemProps> = itemData => {
    const pressHandler = () => {
      navigation.navigate('HomeScreens', {
        screen: 'CategoryScreen',
        params: {
          items: items,
          category: itemData.item.id,
        },
      });
    };

    return <CategoryElement title={itemData.item.id} onPress={pressHandler} />;
  };

  const renderSaleItem: React.FC<renderSaleItemProps> = itemData => {
    const item = itemData.item;
    return <SaleDiscountElement item={item} />;
  };

  const pressHandlerToSearchScreen = () => {
    navigation.navigate('HomeScreens', {
      screen: 'SearchScreen',
      params: {},
    });
  };

  return (
    <ScrollView directionalLockEnabled={false}>
      <View style={styles.homeWrapper}>
        <View style={styles.header}>
          <SearchHeader
            onPickText={pickedTextHandler}
            onPress={pressHandlerToSearchScreen}
          />
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
              <Ionicons
                name="arrow-up-circle-outline"
                size={20}
                color="white"
              />
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
        <View style={styles.popularListWrapper}>
          <Text style={styles.categoryText}>Popular</Text>
          <PopularList popularList={popularList} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

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
  popularListWrapper: {
    paddingLeft: 20,
    marginBottom: 50,
  },
});
