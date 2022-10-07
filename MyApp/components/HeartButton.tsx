import {StyleSheet, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  color: string;
}

const HeartButton: React.FC<Props> = ({color}) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const onPressHandler = () => {
    setButtonPressed(!buttonPressed);
  };

  return (
    <Pressable onPress={onPressHandler}>
      <View>
        <Ionicons
          name={buttonPressed ? 'heart' : 'heart-outline'}
          size={25}
          color={color}
        />
      </View>
    </Pressable>
  );
};

export default HeartButton;

const styles = StyleSheet.create({});
