import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useTheme} from '../../hooks/ThemeContext';

const Title = ({text}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: theme.text}]}>{text}</Text>
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
    fontSize: 18,
    fontFamily: 'Roboto-medium',
  },
  bar: {
    height: 5,
    width: '50%',
    marginTop: 3,
    backgroundColor: '#E21221',
  },
});

export default Title;
