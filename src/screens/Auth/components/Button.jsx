import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const ButtonService = ({service, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnOther} onPress={handlePress}>
      {service === 'google' ? (
        <IconAntDesign name="google" size={28} style={styles.icon} />
      ) : (
        <IconFontisto name="facebook" size={28} style={styles.icon} />
      )}
      <Text style={styles.textBtnOther}>
        {service === 'google'
          ? 'Continue with Google'
          : 'Continue with Facebook'}
      </Text>
      <Text></Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
