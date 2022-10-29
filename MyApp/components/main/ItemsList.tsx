import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React from 'react';

import SearchItem from './SearchItem';

interface RenderItemProps {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
    rating: number;
  };
}

interface Props {
  newItems?: any[];
  items: any[];
  inputText?: string;
}

const ItemsList: React.FC<Props> = ({newItems, items, inputText}) => {
  const renderItem = (itemData: RenderItemProps) => {
    return <SearchItem item={itemData.item} />;
  };

  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text>
          {newItems?.length ? newItems.length : items.length} Items Found
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
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  itemsWrapper: {
    marginTop: 15,
  },
});
