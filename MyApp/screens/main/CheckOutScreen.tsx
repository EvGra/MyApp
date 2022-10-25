import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RouteProp} from '@react-navigation/native';

import {StackParams} from '../../App';
import HeaderButton from '../../components/CategoryScreen/HeaderButton';
import {COLORS} from '../../src/data';
import TotalPriceElement from '../../components/main/TotalPriceElement';

type checkOutScreenScreenProp = StackNavigationProp<
  StackParams,
  'CheckOutScreen'
>;

interface Props {
  item: {
    imageUrl: string;
    name: string;
    price: string;
    color: [];
    params: {
      agreeCheckBox: boolean;
      quantity: number;
    };
  };
}

const CheckOutScreen = () => {
  const navigation = useNavigation<checkOutScreenScreenProp>();

  const route: RouteProp<
    {
      params: {
        cartItems: [];
        subTotalSum: number;
      };
    },
    'params'
  > = useRoute();
  const [{cartItems, subTotalSum}] = useState(route.params);

  const [droppshipperButton, setDroppshipperButton] = useState(false);

  const windowWidth = Dimensions.get('window').width;

  const buyNowPressHandler = () => {};

  const droppshipperButtonHandler = () => {
    setDroppshipperButton(!droppshipperButton);
  };

  const RenderItem = (itemData: Props) => {
    const item = itemData.item;

    return (
      item.params.agreeCheckBox && (
        <View style={styles.paymentElemWrapper}>
          <Image style={styles.paymentImage} source={{uri: item.imageUrl[0]}} />
          <View style={styles.paymentInfoWrapper}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>
              Color: {item.color} | Size: {}
            </Text>
            <View style={styles.priceQuantityWrapper}>
              <Text style={styles.itemPrice}>
                {'\u0024'}
                {item.price}
              </Text>
              <Text>x{item.params.quantity}</Text>
            </View>
          </View>
        </View>
      )
    );
  };

  const totalPrice = subTotalSum + 2;
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <HeaderButton
            name="arrow-back-outline"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Text style={[styles.headerTitle, {marginLeft: windowWidth / 4}]}>
          Payment
        </Text>
      </View>
      <ScrollView
        style={styles.infoWrapper}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.addressWrapper}>
            <View style={styles.addressHeaderWrapper}>
              <View style={styles.locationPinWrapper}>
                <Ionicons
                  name="location-outline"
                  size={15}
                  color={COLORS.blueDark}
                />
                <Text>Shipping Address</Text>
              </View>
              <View>
                <Pressable>
                  <Text>Edit</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.row} />
            <View style={styles.infoProfileWrapper}>
              <Text style={styles.name}>Kylie</Text>
              <Text>California Street, Blok 4F No.9</Text>
              <Text>San Fransisco</Text>
              <Text>California</Text>
              <Text>0214-0000-0000</Text>
            </View>
          </View>
          <View>
            <FlatList
              data={cartItems}
              keyExtractor={(_, i) => 'key' + i}
              renderItem={RenderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.deliveryWrapper}>
            <View style={styles.deliveryServiceRow}>
              <Text>Delivery Service</Text>
              <Pressable>
                <Text>Edit</Text>
              </Pressable>
            </View>
            <View style={styles.row} />
            <View style={styles.expressDeliveryRow}>
              <Text style={styles.boldText}>Express Delivery</Text>
              <Text style={styles.boldText}>{'\u0024'}2</Text>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text>Add Description</Text>
              <View style={styles.descriptionArea}>
                <TextInput maxLength={40} />
              </View>
            </View>
            <View>
              <View style={styles.methodWrapper}>
                <View>
                  <Text>Payment Method</Text>
                </View>
                <View style={styles.walletWrapper}>
                  <Ionicons
                    name="wallet-outline"
                    size={20}
                    color={COLORS.red}
                  />
                  <Text style={styles.myPayText}>My Pay</Text>
                  <Pressable>
                    <View style={styles.walletButton}>
                      <Ionicons
                        name="chevron-forward-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={styles.row} />
              <View style={styles.methodTextWrapper}>
                <View style={styles.methodText}>
                  <Text style={styles.textColor}>Subtotals for products</Text>
                  <Text style={styles.textColor}>
                    {'\u0024'}
                    {subTotalSum}
                  </Text>
                </View>
                <View style={styles.methodText}>
                  <Text style={styles.textColor}>Subtotals for shipping</Text>
                  <Text style={styles.textColor}>{'\u0024'}2</Text>
                </View>
                <View style={styles.methodText}>
                  <Text>Total Payment</Text>
                  <Text>
                    {'\u0024'}
                    {totalPrice}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.droppshipperWrapper}>
              <Text>Send As a Dropshipper</Text>
              <Pressable onPress={droppshipperButtonHandler}>
                <View>
                  <View style={styles.checkButtonEllepsis} />
                  {!droppshipperButton && (
                    <View style={styles.checkButtonNotActive} />
                  )}
                  {droppshipperButton && (
                    <View style={styles.checkButtonActive} />
                  )}
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <TotalPriceElement
        onPress={buyNowPressHandler}
        textHeader="Total"
        price={totalPrice}
        textBotton="BUY NOW"
      />
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.grayBackground,
  },
  headerWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  infoWrapper: {
    marginBottom: 145,
  },
  addressWrapper: {},
  addressHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationPinWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    borderBottomColor: COLORS.grayLight,
    marginTop: 10,
    borderBottomWidth: 0.4,
  },
  infoProfileWrapper: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  paymentElemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  paymentImage: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  paymentInfoWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  priceQuantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 14,
    color: COLORS.grayDark,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 14,
    color: COLORS.blueDark,
  },
  deliveryWrapper: {
    paddingVertical: 10,
  },
  deliveryServiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expressDeliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  boldText: {
    fontWeight: '700',
  },
  descriptionWrapper: {
    paddingVertical: 15,
  },
  descriptionArea: {
    marginTop: 10,
    borderColor: COLORS.grayLight,
    borderWidth: 0.4,
    borderRadius: 5,
  },
  methodWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walletWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletButton: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.blueDark,
  },
  myPayText: {
    color: COLORS.red,
    marginLeft: 5,
    marginRight: 10,
  },
  methodText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  methodTextWrapper: {
    paddingTop: 10,
  },
  textColor: {
    color: COLORS.grayLight,
  },
  checkButtonEllepsis: {
    width: 40,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#E9F1F1',
  },
  checkButtonNotActive: {
    position: 'absolute',
    top: -5,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.grayDark,
  },
  checkButtonActive: {
    position: 'absolute',
    top: -5,
    left: 20,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.blueDark,
  },
  droppshipperWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 5,
  },
});
