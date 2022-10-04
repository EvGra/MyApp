import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../src/data';
import CartButton from './CartButton';

interface Params {
  navigation?: any;
  onPickText?: any;
}
const SearchHeader = ({onPickText, navigation}: Params) => {
  const [inputText, setInputText] = useState('');

  const textInputHandler = (enteredText: string) => {
    setInputText(enteredText);
  };

  const confirmInputHandler = () => {
    onPickText(inputText);
  };

  const onPress = () => {};

  return (
    <View>
      <StatusBar backgroundColor={COLORS.grayBackground} />
      <View style={styles.buttons}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Search"
            style={{
              width: 200,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            value={inputText}
            onChangeText={textInputHandler}
          />
          <Pressable
            style={({pressed}) => [
              styles.searchButton,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={
              navigation
                ? () => {
                    navigation.navigate('HomeScreens', {
                      screen: 'SearchScreen',
                    });
                  }
                : confirmInputHandler
            }>
            <Ionicons name="search-outline" size={20} color="white" />
          </Pressable>
        </View>
        <CartButton
          onPress={() => {
            navigation.navigate('HomeScreens', {
              screen: 'CartScreen',
            });
          }}
        />
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  searchWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    border: 1,
    borderColor: COLORS.blueLight,
    borderRadius: 5,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    width: 50,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blueLight,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
