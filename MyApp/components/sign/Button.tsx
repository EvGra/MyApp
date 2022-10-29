import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../../src/data';

interface Params {
  text: string;
  textColorWhite: boolean;
  colorBg?: string;
  logoSrc?: number;
  onPress?: () => void;
}

const Button = ({text, textColorWhite, logoSrc, colorBg, onPress}: Params) => {
  const [imgSrc, setImgSrc] = useState([
    require('../../src/images/preview/googlelogo.png'),
    require('../../src/images/preview/FacebookLogo.png'),
  ]);

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.buttonWrapper,

          colorBg ? {backgroundColor: colorBg} : null,
          pressed ? styles.buttonPressed : null,
        ]}>
        {logoSrc != undefined && (
          <Image source={imgSrc[logoSrc]} style={styles.logo} />
        )}
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
    width: 300,
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  logo: {
    height: 30,
  },
  text: {
    fontSize: 14,
    paddingVertical: 20,
  },
  textColorWhite: {
    color: '#FFF',
  },
  textColorGray: {
    color: COLORS.grayDark,
  },
});
