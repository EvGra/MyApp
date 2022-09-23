import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../../src/data';

interface Params {
  text: string;
  textColorWhite: boolean;
  colorBg?: boolean;
}

const Button = ({text, textColorWhite, colorBg}: Params) => {
  return (
    <View>
      <Pressable
        style={({pressed}) => [
          styles.buttonWrapper,
          colorBg ? styles.colorBgblueDark : styles.colorBgBlueLight,
          pressed ? styles.buttonPressed : null,
        ]}>
        <Text
          style={[
            styles.text,
            textColorWhite ? styles.textColorWhite : styles.textColorGray,
          ]}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    marginHorizontal: 30,
    width: 300,
    paddingVertical: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  colorBgblueDark: {
    backgroundColor: COLORS.blueDark,
  },
  colorBgBlueLight: {
    backgroundColor: COLORS.blueLight,
  },
  text: {
    fontSize: 14,
  },
  textColorWhite: {
    color: '#FFF',
  },
  textColorGray: {
    color: COLORS.grayDark,
  },
});
