import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React, {useContext, useState} from 'react';
import SearchHeader from '../../components/SearchHeader';
import {AuthContext} from '../../src/auth-context';
import SearchItem from '../../components/main/SearchItem';

const SearchScreen = ({navigation}: {navigation: any}) => {
  const Context = useContext(AuthContext);
  const [inputText, setInputText] = useState('');

  let items = Context.items;

  const renderItem = itemData => {
    const pressHandler = () => {};
    return (
      <SearchItem
        title={itemData.item.name}
        price={itemData.item.price}
        image={itemData.item.imageUrl[0]}
        onPress={() => {
          navigation.navigate('HomeScreens', {
            screen: 'ItemScreen',
          });
        }}
      />
    );
  };

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

  return (
    <View style={styles.searchPageWrapper}>
      <SearchHeader onPickText={pickedTextHandler} />
      <View>
        <View style={styles.headerWrapper}>
          <Text>
            {newItems.length ? newItems.length : items.length} Items Found
          </Text>
          <Pressable>
            <Text>Filters</Text>
          </Pressable>
        </View>
        <View style={styles.itemsWrapper}>
          <FlatList
            data={inputText ? newItems : items}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchPageWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 120,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  itemsWrapper: {
    marginTop: 15,
  },
});
