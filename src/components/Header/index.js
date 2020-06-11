import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import logo from '../../assets/logo-im.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});

export default Header;
