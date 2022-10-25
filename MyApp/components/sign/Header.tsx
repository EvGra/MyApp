import {StyleSheet, Text, View, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '../../src/data';
import {StackNavigationProp} from '@react-navigation/stack';

interface Params {
  button: string;
  header: string;
  link: string;
}
type StackParamList = {
  PreviewScreens: {screen: string} | undefined;
};
type NavigationProps = StackNavigationProp<StackParamList>;

const Header = ({button, header, link}: Params) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor={COLORS.blueLight} />
      <View style={styles.signUpContainer}>
        <Pressable
          style={({pressed}) => (pressed ? {opacity: 0.7} : null)}
          onPress={() => {
            navigation.navigate('PreviewScreens', {
              screen: link,
            });
          }}>
          <Text style={styles.signUpButton}>{button}</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.signInHeader}>{header}</Text>
        <Text style={styles.signInText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus accumsan erat id facilisis.
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.blueLight,
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  signUpButton: {
    fontSize: 14,
    color: '#FFF',
  },
  signInHeader: {
    fontSize: 30,
    color: '#FFF',
    marginBottom: 10,
  },
  signInText: {
    fontSize: 12,
    lineHeight: 25,
    color: '#FFF',
  },
});
