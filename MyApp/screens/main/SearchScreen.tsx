import {StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';

import SearchHeader from '../../components/SearchHeader';
import {AuthContext} from '../../src/auth-context';
import ItemsList from '../../components/main/ItemsList';

const SearchScreen = () => {
  const Context = useContext(AuthContext);
  const [inputText, setInputText] = useState('');

  const items: any[] = Context.items;

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
      <ItemsList newItems={newItems} items={items} inputText={inputText} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchPageWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 120,
    backgroundColor: '#FFF',
  },
});
