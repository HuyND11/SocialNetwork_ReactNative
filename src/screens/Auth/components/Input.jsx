import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../utils';

const Input = props => {
  return (
    <View style={styles.groupInput}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      {props.errMess && <Text style={styles.textErr}>{props.errMess}</Text>}
      <View style={styles.inputIcon}>
        <TextInput
          style={styles.input}
          onChangeText={newText => props.onChangeText(newText)}
          defaultValue={props.defaultValue || ''}
          keyboardType={props.keyboardType || 'default'}
          returnKeyType="next"
          onBlur={props.handleBlur}
          secureTextEntry={props.secure || false}
          selectTextOnFocus={true}
        />
        <Icon name={props.iconName} size={28} style={styles.icon} onPress={props.handlePressIcon} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  groupInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondaryBg,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  inputIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: COLORS.whiteText,
    fontSize: 18,
    width: '90%',
    paddingLeft: 20,
  },
  inputLabel: {
    color: COLORS.whiteText,
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    color: COLORS.whiteText,
  },
  // Error text
  textErr: {
    color: COLORS.likedBtn,
    fontWeight: '500',
    fontSize: 13,
  },
});
