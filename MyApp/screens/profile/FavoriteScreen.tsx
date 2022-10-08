import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// import {StackParams} from '../../App';
import {AuthContext} from '../../src/auth-context';
import PopularList from '../../components/PopularList';

// type favouriteScreenProp = StackNavigationProp<StackParams, 'FavoriteScreen'>;

const FavoriteScreen = () => {
  const Context = useContext(AuthContext);
  const items: any[] = Context.items;

  const favoriteItemNames = useSelector(state => state.favoriteItems.names);

  const favoriteItems = items.filter(item =>
    favoriteItemNames.includes(item.name),
  );
  // const navigation = useNavigation<favouriteScreenProp>();

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
