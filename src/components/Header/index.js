import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/logo-im.png';

import {useTheme} from '../../hooks/ThemeContext';

const Header = () => {
  const {theme, changeTheme} = useTheme();

  const navigation = useNavigation();

  const iconTheme = useMemo(() => {
    return theme.type === 'dark' ? 'lightbulb-on-outline' : 'lightbulb-off';
  }, [theme.type]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" color={theme.text} size={38} />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity onPress={changeTheme}>
        <Icon name={iconTheme} color={theme.text} size={32} />
      </TouchableOpacity>
    </View>
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
