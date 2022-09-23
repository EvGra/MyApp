import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState, useContext} from 'react';

import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';
import Header from '../../components/sign/Header';
import {AuthContext} from '../../src/auth-context';
import {createUser} from '../../src/auth';
import LoadingOverlay from '../../components/sign/LoadingOverlay';
import AuthContent from '../../Auth/AuthContent';

const SignUp = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Failed');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return (
    <ScrollView>
      <View>
        <Header header="Sign up" button="SIGN IN" link="SignIn" />
        <View style={styles.inputContainer}>
          <AuthContent onAuthenticate={signupHandler} />
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
    </ScrollView>
  );
};

export default SignUp;

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
