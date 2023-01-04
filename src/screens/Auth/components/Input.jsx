import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View style={styles.groupInput}>
      <Text style={styles.inputLabel}>{props.text}</Text>
      {props.errMess && (
        <Text style={styles.textErr}>{props.errMess}</Text>
      )}
      <View style={styles.inputIcon}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          defaultValue={props.defaultValue || ''}
          keyboardType={props.keyboardType || 'default'}
        />
        <Icon name={iconName} size={28} style={styles.icon} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
