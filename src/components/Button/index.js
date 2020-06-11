import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Button = (props) => {
  return (
    <RectButton style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E21221',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default Button;
