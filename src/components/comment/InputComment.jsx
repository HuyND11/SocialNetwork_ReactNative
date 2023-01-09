import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FontSize} from '../../utils';

const InputComment = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Write the comment here" />
    </View>
  );
};

export default InputComment;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },

  input: {
    width: '100%',
    paddingHorizontal: 3,
    color: COLORS.greyText,
    backgroundColor: COLORS.secondaryBg,
    borderRadius: 50,
    paddingLeft: 15,
    FontSize: FontSize.mediumSize,
    fontWeight: '500',
  },
});
