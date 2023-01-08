import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './Logo';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import {COLORS} from '../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.leftContainer}>
        <Entypo
          style={styles.icon}
          name="magnifying-glass"
          color={COLORS.blackText}
          size={25}
        />
        <Fontisto
          style={styles.icon}
          name="messenger"
          color={COLORS.blackText}
          size={25}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    margin: 5,
  },
});
