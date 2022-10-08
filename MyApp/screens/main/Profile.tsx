import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, PROFILEBUTTONS} from '../../src/data';

type StackParamList = {
  HomeScreens: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const Profile = () => {
  const navigation = useNavigation<NavigationProps>();

  const [fetchedMail, setFetchedMail] = useState('mail');

  // useEffect(() => {
  //   axios
  //     .get('')
  //     .then(response => {
  //       setFetchedMail(response.data);
  //     });
  // }, []);

  const ProfileButton = (itemData: {item: {icon: string; text: string}}) => {
    const pressHandler = (name: string) => {
      if (name == 'My Favourites') {
        navigation.navigate('HomeScreens', {
          screen: 'FavoriteScreen',
        });
      }
    };

    return (
      <Pressable
        style={({pressed}) => [
          styles.buttonWrapper,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => pressHandler(itemData.item.text)}>
        <View style={styles.button}>
          <Ionicons
            name={itemData.item.icon}
            size={25}
            color={COLORS.blueDark}
          />
          <Text style={styles.buttonText}>{itemData.item.text}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <View style={styles.personWrapper}>
        <View style={styles.personPhoto} />
        <Text style={styles.personText}>{fetchedMail}</Text>
      </View>
      <FlatList
        data={PROFILEBUTTONS}
        keyExtractor={item => item.id}
        renderItem={ProfileButton}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  personWrapper: {
    alignItems: 'center',
    marginTop: 80,
  },
  personPhoto: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderColor: COLORS.grayLight,
    borderWidth: 5,
  },
  personText: {
    marginTop: 10,
    fontSize: 18,
  },
  buttonWrapper: {
    justifyContent: 'center',
    marginVertical: 5,
    paddingLeft: 25,
    height: 60,
    marginHorizontal: 25,
    borderRadius: 7,
    borderWidth: 0.2,
    borderColor: COLORS.grayLight,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: COLORS.grayLight,
  },
  buttonText: {
    marginLeft: 15,
    color: COLORS.blueDark,
    fontSize: 14,
    fontWeight: 'bold',
  },
  ionicon: {},
});
