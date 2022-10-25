import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import HeaderButton from '../CategoryScreen/HeaderButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type StackParamList = {
  HomeScreens: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  const navigation = useNavigation<NavigationProps>();

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.headerWrapper}>
      <View>
        <HeaderButton
          name="arrow-back-outline"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Text style={[styles.headerTitle, {marginLeft: windowWidth / 30}]}>
        {title}
      </Text>
      <View>
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

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
});
