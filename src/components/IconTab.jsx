import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import BellIcon from '../image/bell.png';
import DrawerIcon from '../image/drawer.png';
import HomeIcon from '../image/home.png';
import UserIcon from '../image/user.png';

const IconTab = () => {
  return (
    <View style={styles.topHeader}>
      <Image style={styles.headerIcons} source={HomeIcon} />
      <Image style={styles.headerIcons} source={UserIcon} />
      <Image style={styles.headerIcons} source={BellIcon} />
      <Image style={styles.headerIcons} source={DrawerIcon} />
    </View>
  );
};

export default IconTab;
const styles = StyleSheet.create({
  topHeader: {
    height: 65,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  headerIcons: {
    height: 35,
    width: 35,
    tintColor: 'white',
  },
});
