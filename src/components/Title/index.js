import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

import {useTheme} from '../../hooks/ThemeContext';

const Title = ({text}) => {
  const {theme} = useTheme();

  const offset = useRef(new Animated.Value(-200)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  }, [offset, opacity]);

  return (
    <Animated.View
      style={
        (styles.container,
        [
          {
            transform: [{translateX: offset}],
          },
          {
            opacity,
          },
        ])
      }>
      <Text style={[styles.title, {color: theme.text}]}>{text}</Text>
      <View style={styles.bar} />
    </Animated.View>
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
