import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../components/sign/Button';
import Input from './Input';

interface Params {
  isLogin: boolean;
  onSubmit: (credentials: {
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }) => void;
  credentialsInvalid: {
    email: boolean;
    confirmEmail: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
}
const AuthForm = ({isLogin, onSubmit, credentialsInvalid}: Params) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const updateInputValueHandler = (inputType: string, enteredValue: string) => {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  };

  const submitHandler = () => {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  };

  return (
    <View style={styles.authWrapper}>
      <View style={styles.inputContainer}>
        <Input
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          placeHolder="Your email"
        />
        {!isLogin && (
          <Input
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
            placeHolder="Confirm email"
          />
        )}
        <Input
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          placeHolder="Your password"
        />
        {!isLogin && (
          <Input
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword',
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            placeHolder="Confirm password"
          />
        )}
      </View>
      <View>
        <Button
          textColorWhite={true}
          colorBg={true}
          onPress={submitHandler}
          text={isLogin ? 'SIGN IN' : 'SIGN UP'}
        />
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  authWrapper: {
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
});
