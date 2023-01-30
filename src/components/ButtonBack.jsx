import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../utils';

const ButtonBack = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backBtn}>
      <Icon name="arrow-left" size={30} color={COLORS.whiteText} />
      <Text style={styles.backBtnText}>Back</Text>
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnText: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 18,
  },
});
