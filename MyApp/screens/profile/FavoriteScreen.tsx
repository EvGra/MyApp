import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {AuthContext} from '../../src/auth-context';
import PopularList from '../../components/PopularList';
import {useAppSelector} from '../../src/hook';

const FavoriteScreen = () => {
  const Context = useContext(AuthContext);
  const items: any[] = Context.items;

  const favoriteItemNames = useAppSelector(state => state.favoriteItems.names);

  const favoriteItems = items.filter(item =>
    favoriteItemNames.includes(item.name),
  );

  if (favoriteItems.length === 0) {
    return (
      <View style={styles.noItemsText}>
        <Text>You have no favorite items yet</Text>
      </View>
    );
  }
  return (
    <View style={styles.popularListWrapper}>
      <PopularList popularList={favoriteItems} />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  noItemsText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularListWrapper: {
    paddingTop: 10,
    paddingLeft: 20,
    marginBottom: 50,
  },
});
