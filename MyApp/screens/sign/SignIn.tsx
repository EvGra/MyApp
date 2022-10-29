import {StyleSheet, Text, View, Alert, Image} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {COLORS} from '../../src/data';
import Button from '../../components/sign/Button';
import Header from '../../components/sign/Header';
import AuthContent from '../../Auth/AuthContent';
import LoadingOverlay from '../../components/sign/LoadingOverlay';
import {AuthContext} from '../../src/auth-context';
import {login} from '../../src/auth';

const SignIn = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '496971317703-dqi5rj26kqalah6rmsv2u5lss94md1kf.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Failed');
      setIsAuthenticating(false);
    }
  };

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Login up..." />;
  }
  return (
    <View>
      <Header header="Sign in" button="SIGN UP" link="SignUp" />
      <View style={styles.inputContainer}>
        <AuthContent isLogin onAuthenticate={signHandler} />
      </View>
      <View style={styles.buttonsContainer}>
        <Text style={styles.textSocial}>Or Sign in with social media</Text>
        <View style={styles.buttonMargin}>
          <Button
            text="CONTINUE WITH GOOGLE"
            textColorWhite={false}
            colorBg="#ACBAC3"
            logoSrc={0}
            onPress={() =>
              onGoogleButtonPress()
                .then(res => {
                  console.log(res);
                })
                .catch(err => console.log(err))
            }
          />
        </View>
        <Button
          text="CONTINUE WITH FACEBOOK"
          textColorWhite={true}
          colorBg="#1877F2"
          logoSrc={1}
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
  buttonMargin: {
    marginBottom: 20,
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
