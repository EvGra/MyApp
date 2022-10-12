import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import SwipeUpDown from 'react-native-swipe-up-down';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import TitleAndPriceForElement from '../../components/main/TitleAndPriceForElement';
import {StackParams} from '../../App';
import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';
import HeaderButton from '../../components/CategoryScreen/HeaderButton';
import HeartButton from '../../components/HeartButton';
import {addCart} from '../../src/redux/cartItems';

type itemScreenProp = StackNavigationProp<StackParams, 'ItemScreen'>;

const ItemScreen = () => {
  const navigation = useNavigation<itemScreenProp>();

  const route = useRoute();
  const [item] = useState(route.params?.item);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, windowWidth);

  const [quality, setQuality] = useState(1);
  const [imgActive, setImgActive] = useState(0);
  const [sizeActive, setSizeActive] = useState('');

  const Description = () => {
    return (
      <View>
        <Text style={styles.description}>Description</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  const Slider = () => {
    interface Props {
      item: string;
    }
    const ItemSlider: React.FC<Props> = ({item}) => {
      return (
        <View>
          <Image
            source={{uri: item}}
            style={{height: windowHeight * 0.58, width: windowWidth}}
          />
        </View>
      );
    };
    return (
      <View>
        <FlatList
          data={item.imageUrl}
          pagingEnabled
          horizontal
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ItemSlider item={item} />}
        />
        <View style={styles.dotWrapper}>
          {item.imageUrl.map((e: string, index: number) => {
            let opacity = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.2, 1, 0.2],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'white',
                  opacity,
                  marginHorizontal: 4,
                  borderRadius: 10,
                }}></Animated.View>
            );
          })}
        </View>
      </View>
    );
  };

  const Item = ({description}: {description: boolean}) => {
    const cartItemNames = useSelector(state => state.cartItems.names);

    const dispatch = useDispatch();

    const itemCart = cartItemNames.includes(item.name);

    const addToCartHendler = () => {
      if (!itemCart) {
        dispatch(addCart({name: item.name}));
      }
    };

    return (
      <View style={styles.itemInfoWrapper}>
        <View style={styles.swiperButtonWrapper}>
          <Pressable>
            <View style={styles.swiperButton}></View>
          </Pressable>
        </View>
        <View>
          <View style={styles.titleWrapper}>
            <TitleAndPriceForElement title={item.name} price={item.price} />
          </View>
          <View style={styles.sizeInfoWrapper}>
            <Text>Size:</Text>
            <View style={styles.sizesRow}>
              {item.sizes.map((size: string) => (
                <Pressable onPress={() => setSizeActive(size)}>
                  <View
                    style={[
                      styles.sizeItemAndQualityButton,
                      sizeActive == size ? styles.sizeItemPressed : null,
                    ]}>
                    <Text key={size + 'key'}>{size}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.colorInfoWrapper}>
            <Text>Choose a color:</Text>
            <View>
              {item.color.map((color: string) => (
                <Pressable style={[styles.colorItem, {backgroundColor: color}]}>
                  <View></View>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.qualityWrapper}>
            <Text>Select Quality:</Text>
            <View style={styles.qualityButtons}>
              <View style={styles.sizeItemAndQualityButton}>
                <Pressable
                  onPress={() =>
                    quality > 1 ? setQuality(quality - 1) : null
                  }>
                  <Text style={styles.qualityButton}>-</Text>
                </Pressable>
              </View>
              <View style={styles.qualityNumber}>
                <Text>{quality}</Text>
              </View>
              <View style={styles.sizeItemAndQualityButton}>
                <Pressable onPress={() => setQuality(quality + 1)}>
                  <Text style={styles.qualityButton}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
          {description && <Description />}
          <Pressable>
            <View style={styles.addButton}>
              <Button
                onPress={addToCartHendler}
                text="ADD TO CART"
                textColorWhite={true}
                colorBg={true}
              />
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.headerButtons}>
        <HeaderButton
          name="arrow-back-outline"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <HeaderButton
          name="cart-outline"
          onPress={() => {
            navigation.navigate('CartScreen');
          }}
        />
      </View>
      <View>
        <View style={styles.heartButton}>
          <HeartButton name={item.name} color="white" />
        </View>
        <Slider />
      </View>
      <SwipeUpDown
        itemMini={() => <Item description={false} />}
        itemFull={() => <Item description={true} />}
        animation="linear"
        swipeHeight={320}
        extraMarginTop={170}
      />
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    width: '90%',
    top: 20,
    left: '5%',
  },
  itemWrapper: {
    flex: 1,
  },
  heartButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    right: 20,
  },
  image: {
    height: '60%',
  },
  imageContainer: {
    flex: 1,
  },
  dotWrapper: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
  dotActive: {
    margin: 3,
    color: 'gray',
  },
  itemInfoWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopWidth: 0.5,
    borderRightColor: COLORS.grayBackground,
    backgroundColor: 'white',
  },
  swiperButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperButton: {
    marginTop: 10,
    height: 5,
    width: 50,
    backgroundColor: COLORS.grayLight,
    borderRadius: 3,
  },
  titleWrapper: {
    marginHorizontal: -80,
    marginVertical: 20,
  },
  sizeInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sizesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeItemAndQualityButton: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: COLORS.grayBackground,
    borderRadius: 5,
  },
  sizeItemPressed: {
    backgroundColor: COLORS.blueDark,
  },
  colorItem: {
    height: 25,
    width: 25,
    borderRadius: 25,
  },
  colorItemPressed: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  qualityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qualityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  qualityButton: {
    fontSize: 24,
  },
  qualityNumber: {
    height: 30,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: COLORS.grayBackground,
    borderRadius: 5,
  },
  description: {
    marginVertical: 10,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
