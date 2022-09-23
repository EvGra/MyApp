import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [fetchedMes, setFetchedMes] = useState('');

  useEffect(() => {
    axios
      .get('https://rncourse-13d21-default-rtdb.firebaseio.com/name.json')
      .then(response => {
        setFetchedMes(response.data);
      });
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
