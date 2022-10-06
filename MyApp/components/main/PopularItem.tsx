import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {COLORS} from '../../src/data';

type StackParamList = {
  HomeScreens: {screen: string; params: {}} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const PopularItem = ({item}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.popularElementWrapper}>
      <Pressable
        onPress={() => {
          navigation.navigate('HomeScreens', {
            screen: 'ItemScreen',
            params: {
              item: item,
            },
          });
        }}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: item.imageUrl[0],
            }}
            style={styles.popularImage}
          />
        </View>
      </Pressable>
      <View style={styles.infoWrapper}>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemName}>{item.name}</Text>
          <Text style={styles.infoItemPrice}>
            {'\u0024'}
            {item.price}
          </Text>
          <Text>rating</Text>
        </View>
        <View style={styles.infoButtons}>
          <Pressable>
            <Ionicons name="heart-outline" size={25} color={COLORS.red} />
          </Pressable>
          <Pressable>
            <View style={styles.cartButton}>
              <Ionicons name="cart-outline" size={25} color="white" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  popularElementWrapper: {
    flexDirection: 'row',
    height: 130,
    marginBottom: 15,
  },
  imageWrapper: {backgroundColor: COLORS.grayBackground, width: 90},
  popularImage: {
    height: '100%',
    borderRadius: 5,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingLeft: 20,
    borderColor: COLORS.grayLight,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoItem: {
    width: '45%',
  },
  infoItemName: {
    fontSize: 14,
  },
  infoItemPrice: {
    color: COLORS.blueDark,
    fontSize: 18,
  },
  infoButtons: {
    alignItems: 'flex-end',
    marginRight: 18,
  },
  cartButton: {
    backgroundColor: COLORS.blueLight,
    marginTop: 30,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
