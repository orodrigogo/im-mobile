import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 5,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bar: {
    height: 5,
    width: '50%',
    marginTop: 3,
    backgroundColor: '#E21221',
  },
});

export default Title;
