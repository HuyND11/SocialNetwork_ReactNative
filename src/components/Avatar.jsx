import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from './../utils/index';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderColor: COLORS.blackText,
    borderWidth: 1,
    borderRadius: 99,
  },
});
