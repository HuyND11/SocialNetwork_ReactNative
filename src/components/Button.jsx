import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from './../utils/index';

const MyButton = ({
  variant = 'outlined',
  children = 'My button',
  handlePress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled || false}
      style={[
        styles.btn,
        variant === 'outlined' ? styles.outlined : styles.contained,
      ]}>
      <Text
        style={[
          styles.btn_text,
          {
            color:
              variant === 'outlined' ? COLORS.bgActiveBtn : COLORS.whiteText,
          },
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },

  btn_text: {
    fontSize: 15,
    fontWeight: '800',
  },

  outlined: {
    borderWidth: 1,
    borderColor: COLORS.bgActiveBtn,
  },

  contained: {
    backgroundColor: COLORS.bgActiveBtn,
  },
});
