import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import SearchHeader from '../../components/SearchHeader';
import {AuthContext} from '../../src/auth-context';
import SearchItem from '../../components/main/SearchItem';
import {StackParams} from '../../App';

type searchScreenProp = StackNavigationProp<StackParams, 'SearchScreen'>;

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
  };
}

const SearchScreen = () => {
  const navigation = useNavigation<searchScreenProp>();

  const Context = useContext(AuthContext);
  const [inputText, setInputText] = useState('');

  let items = Context.items;

  const renderItem = (itemData: Props) => {
    return <SearchItem item={itemData.item} />;
  };

  const pickedTextHandler = (pickedText: string) => {
    setInputText(pickedText);
  };

  const newItems: any[] = [];

  if (inputText) {
    items.filter((item: {name: string}) => {
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
