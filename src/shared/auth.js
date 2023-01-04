import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

export const encodePwd = pwd => {
  return base64.encode(pwd);
};

export const decodePwd = encoded => {
  return base64.decode(encoded);
};

export const storeData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (e) {
    console.log('errStore', e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('error: ' + e);
  }
};

export const navigateAuthorized = navigation => {
  navigation.reset({
    index: 0,
    routes: [{name: 'main'}],
  });
};
