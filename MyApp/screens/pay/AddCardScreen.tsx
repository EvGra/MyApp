import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import PayScreensHeader from '../../components/pay/PayScreensHeader';
import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';

type StackParamList = {
  HomeScreens: {screen: string} | undefined;
};

type NavigationProps = StackNavigationProp<StackParamList>;

const AddCardScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const goBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.addCardWrapper}>
      <PayScreensHeader onPress={goBackButtonPress} />
      <Text style={styles.headerText}>Add a debit card</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Account name"
          placeholderTextColor={COLORS.grayLight}
        />
        <TextInput
          style={styles.input}
          placeholder="Bank"
          placeholderTextColor={COLORS.grayLight}
        />
        <TextInput
          style={styles.input}
          placeholder="Account number"
          placeholderTextColor={COLORS.grayLight}
        />
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.inputRowElem]}
            placeholder="Expire"
            placeholderTextColor={COLORS.grayLight}
          />
          <TextInput
            style={[styles.input, styles.inputRowElem]}
            placeholder="Security code"
            placeholderTextColor={COLORS.grayLight}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button text="ADD DEBIT CARD" textColorWhite={true} colorBg="#ACBAC3" />
      </View>
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  addCardWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    marginVertical: 30,
  },
  input: {
    height: 60,
    marginBottom: 15,
    paddingLeft: 20,
    borderRadius: 30,
    backgroundColor: COLORS.grayBackground,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputRowElem: {
    width: '48%',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 10,
  },
});
