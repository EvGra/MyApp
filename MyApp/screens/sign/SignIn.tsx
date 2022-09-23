import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';
import Header from '../../components/sign/Header';

const SignIn = () => {
  return (
    <View>
      <Header header="Sign in" button="SIGN UP" link="SignUp" />
      <View style={styles.inputContainer}>
        <TextInput placeholder="your name" />
        <TextInput placeholder="your password" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="SIGN IN" textColorWhite={true} colorBg={true} />
        <Text style={styles.textSocial}>Or Sign in with social media</Text>
        <View style={{marginBottom: 20}}>
          <Button
            text="CONTINUE WITH GOOGLE"
            textColorWhite={false}
            colorBg={false}
          />
        </View>
        <Button
          text="CONTINUE WITH FACEBOOK"
          textColorWhite={true}
          colorBg={false}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  buttonsContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 35,
    marginHorizontal: 30,
    marginBottom: 15,
  },
  textSocial: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 12,
    color: COLORS.grayLight,
  },
});
