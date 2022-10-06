import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../src/data';

const HeaderButton = ({name, onPress}: {name: string; onPress: () => void}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.HeaderButton,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}>
      <Ionicons name={name} size={25} color="white" />
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  HeaderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blueLight,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
