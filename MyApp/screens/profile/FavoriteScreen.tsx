import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {useSelector} from 'react-redux';
import {AuthContext} from '../../src/auth-context';
import PopularList from '../../components/PopularList';

const FavoriteScreen = () => {
  const Context = useContext(AuthContext);
  const items: any[] = Context.items;

  const favoriteItemNames = useSelector(state => state.favoriteItems.names);

  const favoriteItems = items.filter(item =>
    favoriteItemNames.includes(item.name),
  );

  if (favoriteItems.length === 0) {
    return <Text>You have no favorite items yet</Text>;
  }
  return (
    <View>
      <PopularList popularList={favoriteItems} />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
