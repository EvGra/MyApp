import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {COLORS} from '../src/data';
import HeaderButton from './CategoryScreen/HeaderButton';

interface Params {
  onPickText: (inputText: string) => void;
  onPress: string;
}

type StackParamList = {
  HomeScreens: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const SearchHeader = ({onPickText, onPress}: Params) => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation<NavigationProps>();

  const windowHeight = Dimensions.get('window').height;

  const onPressHandler = () => {
    switch (onPress) {
      case 'search':
        onPickText(inputText);
        break;
      case 'navigationSearchScreen':
        navigation.navigate('HomeScreens', {
          screen: 'SearchScreen',
        });
        break;
    }
  };

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
            onChangeText={setInputText}
          />
          <Pressable
            style={({pressed}) => [
              styles.searchButton,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={onPressHandler}>
            <Ionicons name="search-outline" size={20} color="white" />
          </Pressable>
        </View>
        <HeaderButton
          name="cart-outline"
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
