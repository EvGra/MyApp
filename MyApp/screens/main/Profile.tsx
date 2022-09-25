import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PROFILEBUTTONS} from '../../src/data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const pressHandler = () => {
    console.log(itemData.item.text);
  };

  const ProfileButton = itemData => {
    return (
      <View style={styles.buttonWrapper}>
        <Pressable>
          <Ionicons name={itemData.item.icon} />
          <Text>{itemData.item.text}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.profileWrapper}>
      <View>
        <Text style={styles.personText}>mail</Text>
      </View>
      <FlatList
        data={PROFILEBUTTONS}
        keyExtractor={item => item.id}
        renderItem={ProfileButton}
        onPress={pressHandler}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileWrapper: {},
  personText: {
    marginTop: 120,
    fontSize: 18,
  },
  buttonWrapper: {},
});
