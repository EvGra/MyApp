import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import TitleAndPriceForElement from '../../components/main/TitleAndPriceForElement';

const ItemScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {item} = route.params;

  return (
    <View style={styles.itemWrapper}>
      <Image source={{uri: item.imageUrl[0]}} style={{height: 100}} />
      <View style={styles.itemInfoWrapper}>
        <View>
          <TitleAndPriceForElement title={item.name} price={item.price} />
          <View>
            <Text>Size:</Text>
            {item.sizes.map(size => {
              <Text>{size}</Text>;
            })}
          </View>
          <View>
            <Text>Choose a color:</Text>
            {item.color.map(size => {
              <Text>{size}</Text>;
            })}
          </View>
          <View>
            <Text>Select Quality:</Text>
            <View></View>
          </View>
          <Pressable>
            <View>
              <Text>ADD TO CART</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  itemWrapper: {},
  itemInfoWrapper: {},
});
