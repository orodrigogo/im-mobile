import React, {useMemo, useRef, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/logo-im.png';

import {useTheme} from '../../hooks/ThemeContext';
import {useDataPersist} from '../../hooks/DataPersistContext';

const Header = () => {
  const {theme, changeTheme} = useTheme();
  const {isInternetConnection} = useDataPersist();

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
      <Text
        style={[
          {color: isInternetConnection ? '#79d70f' : '#F0A500'},
          styles.connectInfo,
        ]}>
        {isInternetConnection ? 'Conectado à Internet' : 'Sem Internet'}
      </Text>

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
  connectInfo: {
    fontSize: 12,
    width: 65,
    textAlign: 'center',
  },
});

export default Header;
