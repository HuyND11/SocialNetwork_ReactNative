import {ToastAndroid} from 'react-native';

export const COLORS = {
  primaryBg: '#141316',
  secondaryBg: '#c6c5d5',
  blackText: '#4a4850',
  greyText: '#65676b',
  whiteText: '#fdfdff',
  bgActiveBtn: '#3a73f9',
  likedBtn: '#f14670',
  bgDisabled: '#adc7f7',
  linearBg: ['#ffb7cd', '#adc7f7', '#f14670', '#adc7f7', '#f14670', '#3a73f9'],
  linearBgPost: ['#ffb7cd', '#adc7f7', '#f14670'],
};

export const FontSize = {
  smallSize: 13,
  mediumSize: 15,
  largeSize: 17,
};

export const notificationAndroid = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export const defaultImages = {
  DEFAULT_AVATAR:
    'https://firebasestorage.googleapis.com/v0/b/socialfacebook-5f9df.appspot.com/o/users%2Fdefault-avatar.png?alt=media&token=7ad2115a-315a-497c-928a-df1c0e41fccc',
  DEFAULT_IMAGE_UPLOAD:
    'https://firebasestorage.googleapis.com/v0/b/socialfacebook-5f9df.appspot.com/o/users%2Fdefault_image_cover.png?alt=media&token=a53c983f-69dd-47e2-b2da-1b2cde5f8298',
};
