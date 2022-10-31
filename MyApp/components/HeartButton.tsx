import {StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useAppDispatch, useAppSelector} from '../src/hook';
import {removeFavorite, addFavorite} from '../src/redux/favorites';

interface Props {
  color: string;
  name: string;
}

const HeartButton: React.FC<Props> = ({name, color}) => {
  const favoriteItemNames = useAppSelector(state => state.favoriteItems.names);

  const dispatch = useAppDispatch();

  const itemIsFavorite = favoriteItemNames.includes(name);

  const onPressHandler = () => {
    if (itemIsFavorite) {
      dispatch(removeFavorite(name));
    } else {
      dispatch(addFavorite(name));
    }
  };

  return (
    <Pressable onPress={onPressHandler}>
      <View>
        <Ionicons
          name={itemIsFavorite ? 'heart' : 'heart-outline'}
          size={25}
          color={color}
        />
      </View>
    </Pressable>
  );
};

export default HeartButton;

const styles = StyleSheet.create({});
