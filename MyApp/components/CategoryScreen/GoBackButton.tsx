import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../src/data';

const GoBackButton = ({onPress}: {onPress: () => void}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.goBackButton,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}>
      <Ionicons name="arrow-back-outline" size={25} color="white" />
    </Pressable>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  goBackButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 60,
    backgroundColor: COLORS.blueLight,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
