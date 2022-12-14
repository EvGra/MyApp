import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

interface Props {
  image: string;
  title: string;
  number: string;
}

const SubCategory: React.FC<Props> = ({image, title, number}) => {
  return (
    <View style={styles.subCategoryItem}>
      <Image
        source={{
          uri: image,
        }}
        style={{height: '100%', width: '100%'}}
      />
      <Text>{title}</Text>
      <Text>{number} Items</Text>
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  subCategoryItem: {
    height: 110,
    width: 90,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
  },
});
