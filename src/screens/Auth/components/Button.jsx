import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../../utils';

const ButtonService = ({service, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnService} onPress={handlePress}>
      {service === 'google' ? (
        <IconAntDesign
          name="google"
          size={28}
          style={styles.icon}
          color={COLORS.whiteText}
        />
      ) : (
        <IconFontisto
          name="facebook"
          size={28}
          style={styles.icon}
          color={COLORS.bgActiveBtn}
        />
      )}
      <Text style={styles.textBtnService}>
        {service === 'google'
          ? 'Continue with Google'
          : 'Continue with Facebook'}
      </Text>
      <Text></Text>
    </TouchableOpacity>
  );
};

const ButtonActive = ({handlePress, text}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    backgroundColor: COLORS.bgActiveBtn,
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.whiteText,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  btnService: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: COLORS.whiteText,
    marginBottom: 20,
  },
  textBtnService: {
    fontWeight: '700',
    color: COLORS.whiteText,
  },
  icon: {},
});
export {ButtonService, ButtonActive};
