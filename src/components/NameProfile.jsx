import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NameProfile = () => {
  return (
    <View>
      <Text style={styles.name}>LapLinhHuy</Text>
      <Text style={styles.shortBio}>Programmer, React Native Developer</Text>
    </View>
  );
};

export default NameProfile;
const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: 'bold',
    fontSize: 30,
  },
  shortBio: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'gray',
  },
});
