import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '../../src/data';
import {StackParams} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

interface Params {
  image: number;
  header: string;
  link: string;
}

type StackParamList = {
  SignIn: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

export default function Preview({image, header, link}: Params) {
  const navigation = useNavigation<NavigationProps>();

  const [imageUrl, setImageUrl] = useState([
    require('../../src/images/preview/first.png'),
    require('../../src/images/preview/second.png'),
    require('../../src/images/preview/third.png'),
  ]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.image}>
        <Image source={imageUrl[image]} />
      </View>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.mainText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus
        accumsan erat id facilisis.
      </Text>
      <View></View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text>SKIP</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={() => {
            navigation.navigate(link);
          }}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 89,
  },
  header: {
    marginTop: 79,
    color: COLORS.grayDark,
    fontSize: 18,
  },
  mainText: {
    fontSize: 14,
    color: COLORS.grayLight,
    marginHorizontal: 45,
    marginTop: 39,
    textAlign: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 36,
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: COLORS.blueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 100,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
