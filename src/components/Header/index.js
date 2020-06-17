import React, {useMemo, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/logo-im.png';

import {useTheme} from '../../hooks/ThemeContext';

const Header = () => {
  const {theme, changeTheme} = useTheme();
  const navigation = useNavigation();

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

  const iconTheme = useMemo(() => {
    return theme.type === 'dark' ? 'lightbulb-on-outline' : 'lightbulb-off';
  }, [theme.type]);

  return (
    <Animated.View
      style={[
        styles.container,
        [
          {
            transform: [{translateY: offset}],
          },
          {
            opacity,
          },
        ],
      ]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" color={theme.text} size={38} />
      </TouchableOpacity>

      <Image source={logo} style={styles.logo} />
      <TouchableOpacity onPress={changeTheme}>
        <Icon name={iconTheme} color={theme.text} size={32} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});

export default Header;
