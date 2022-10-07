import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import TitleAndPriceForElement from './TitleAndPriceForElement';

type StackParamList = {
  HomeScreens: {screen: string; params: {}} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
  };
}

const SearchItem: React.FC<Props> = ({item}) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.searchItemWrapper}>
      <Pressable
        onPress={() => {
          navigation.navigate('HomeScreens', {
            screen: 'ItemScreen',
            params: {
              item: item,
            },
          });
        }}>
        <Image
          style={styles.itemImage}
          source={{
            uri: item.imageUrl[0],
          }}
        />
        <TitleAndPriceForElement title={item.name} price={item.price} />
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  searchItemWrapper: {
    flex: 0.5,
    justifyContent: 'space-around',
    marginHorizontal: 5,
    marginVertical: 7,
  },
  itemImage: {
    borderRadius: 10,
    height: 200,
  },
});
