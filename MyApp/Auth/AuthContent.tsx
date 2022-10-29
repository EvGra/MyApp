import {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import AuthForm from './AuthForm';

interface Params {
  isLogin: boolean;
  onAuthenticate: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
}

interface Props {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

function AuthContent({isLogin, onAuthenticate}: Params) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const submitHandler = ({
    email,
    confirmEmail,
    password,
    confirmPassword,
  }: Props) => {
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.trim().includes('@');
    const passwordIsValid = password.length > 3;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, password});
  };
  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({});
