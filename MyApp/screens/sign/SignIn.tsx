import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState, useContext} from 'react';

import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';
import Header from '../../components/sign/Header';
import AuthContent from '../../Auth/AuthContent';
import LoadingOverlay from '../../components/sign/LoadingOverlay';
import {AuthContext} from '../../src/auth-context';
import {login} from '../../src/auth';

const SignIn = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Failed');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Login up..." />;
  }
  return (
    <View>
      <Header header="Sign in" button="SIGN UP" link="SignUp" />
      <View style={styles.inputContainer}>
        <AuthContent isLogin onAuthenticate={loginHandler} />
      </View>
      <View style={styles.buttonsContainer}>
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
    marginTop: 20,
    marginBottom: 30,
    fontSize: 12,
    color: COLORS.grayLight,
  },
});
