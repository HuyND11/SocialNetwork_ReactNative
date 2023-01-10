import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PNVO</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },

  logo: {
    fontSize: 35,
    fontWeight: '800',
    color: COLORS.likedBtn,
    letterSpacing: 1.5,
  },
});
