import {useState} from 'react';
import {View, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Params {
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  onUpdateValue: (text: string) => void;
  value: string;
  isInvalid: boolean;
  placeHolder: string;
}

const Input = ({
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeHolder,
}: Params) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          isInvalid && styles.inputInvalid,
          secure && {marginLeft: 20},
        ]}
        keyboardType={keyboardType}
        secureTextEntry={hidePass ? true : false}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeHolder}
      />
      <View style={{marginTop: 20}}>
        {secure && (
          <Icon
            name="eye-slash"
            size={20}
            onPress={() => setHidePass(!hidePass)}
          />
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 60,
  },
  inputInvalid: {
    borderColor: 'red',
  },
});
