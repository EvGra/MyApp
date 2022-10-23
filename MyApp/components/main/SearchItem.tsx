import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import TitleAndPriceForElement from './TitleAndPriceForElement';
import HeartButton from '../HeartButton';

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
        <View>
          <Image
            style={styles.itemImage}
            source={{
              uri: item.imageUrl[0],
            }}
          />
          <View style={styles.heartButton}>
            <HeartButton name={item.name} color="white" />
          </View>
        </View>
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
  heartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  itemImage: {
    borderRadius: 10,
    height: 200,
  },
});
