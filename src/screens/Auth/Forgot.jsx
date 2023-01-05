import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
