import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginVertical: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 7,
    color: '#221F1F',
  },
});

export default Input;
