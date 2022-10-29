import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../src/data';
import CoinButton from '../../components/pay/СoinButton';
import Button from '../../components/sign/Button';
import PayScreensHeader from '../../components/pay/PayScreensHeader';

type StackParamList = {
  HomeScreens: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const TopUpScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const [text, setText] = useState('0');

  const goBackButtonPress = () => {
    navigation.goBack();
  };

  const onPressCoin = (price: string) => {
    setText(price);
  };

  return (
    <>
      <View style={styles.topUpWrapper}>
        <PayScreensHeader onPress={goBackButtonPress} />
        <View style={styles.inputWrapper}>
          <Text style={styles.text}>Nominal input</Text>
          <View>
            <Text style={styles.currency}>{'\u0024'}</Text>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonsWrapper}>
            <CoinButton
              price="10"
              onPress={() => {
                onPressCoin('10');
              }}
            />
            <CoinButton
              price="50"
              onPress={() => {
                onPressCoin('50');
              }}
            />
            <CoinButton
              price="100"
              onPress={() => {
                onPressCoin('100');
              }}
            />
            <CoinButton
              price="200"
              onPress={() => {
                onPressCoin('200');
              }}
            />
          </View>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('HomeScreens', {
              screen: 'AddCardScreen',
            });
          }}
          style={({pressed}) => [pressed ? styles.addCardPressed : null]}>
          <View style={styles.addCard}>
            <View style={styles.cardWrapper}>
              <Ionicons name="card-outline" size={25} color={COLORS.blueDark} />
              <View style={styles.addCardTextWrapper}>
                <Text style={styles.addCardHeader}>Add a debit card</Text>
                <Text style={styles.addCardText}>
                  Can this balance directly from here
                </Text>
              </View>
            </View>
            <View style={styles.arrow}>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="white"
              />
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Button text="CONTINUE" textColorWhite={true} colorBg="#ACBAC3" />
      </View>
    </>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({
  topUpWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    height: 220,
    width: '100%',
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: COLORS.grayBackground,
  },
  text: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 14,
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
    color: COLORS.grayLight,
  },
  currency: {
    position: 'absolute',
    zIndex: 100,
    left: 10,
    top: 10,
    fontSize: 18,
    color: COLORS.grayLight,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: COLORS.grayBackground,
  },
  addCardPressed: {
    opacity: 0.7,
  },
  addCardTextWrapper: {
    marginLeft: 20,
  },
  addCardHeader: {
    color: '#57636F',
    fontWeight: '700',
  },
  addCardText: {
    fontSize: 10,
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blueDark,
    borderRadius: 15,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 10,
  },
});
