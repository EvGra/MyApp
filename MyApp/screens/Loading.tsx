import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
