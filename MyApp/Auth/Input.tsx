import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Params {
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  onUpdateValue: (text: string) => void;
  value: string;
  isInvalid: boolean;
  placeHolder: string;
}

const windowWidth = Dimensions.get('window').width;

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
          secure && styles.secureMargin,
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
  secureMargin: {marginLeft: 20},
  input: {
    height: 60,
    width: windowWidth * 0.8,
  },
  inputInvalid: {
    borderColor: 'red',
  },
});
