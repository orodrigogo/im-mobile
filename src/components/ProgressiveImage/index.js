import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ProgressiveImage = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 100,
    marginHorizontal: 5,
    backgroundColor: '#e1e4e8',
  },
  image: {
    height: 150,
    width: 100,
  },
});

export default ProgressiveImage;
