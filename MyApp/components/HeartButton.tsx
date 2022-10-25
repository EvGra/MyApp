import {StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {addFavorite, removeFavorite} from '../src/redux/favorites';

interface Props {
  color: string;
  name: string;
}

interface StateProps {
  favoriteItems: {
    names: string;
  };
}

const HeartButton: React.FC<Props> = ({name, color}) => {
  const favoriteItemNames = useSelector(
    (state: StateProps) => state.favoriteItems.names,
  );

  const dispatch = useDispatch();

  const itemIsFavorite = favoriteItemNames.includes(name);

  const onPressHandler = () => {
    if (itemIsFavorite) {
      dispatch(removeFavorite({name: name}));
    } else {
      dispatch(addFavorite({name: name}));
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
