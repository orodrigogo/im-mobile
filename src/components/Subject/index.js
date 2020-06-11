import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Subject = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ficção</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 7,
    fontSize: 16,
  },
});

export default Subject;
