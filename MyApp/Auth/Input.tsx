import {View, Text, TextInput, StyleSheet} from 'react-native';

interface Params {
  keyboardType?: any;
  secure: boolean;
  onUpdateValue?: () => void;
  value: string;
  label: string;
  isInvalid: boolean;
  placeHolder: string;
}

const Input = ({
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  label,
  placeHolder,
}: Params) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {},
  input: {
    width: 300,
    height: 60,
  },
  inputInvalid: {
    backgroundColor: 'white',
  },
});
