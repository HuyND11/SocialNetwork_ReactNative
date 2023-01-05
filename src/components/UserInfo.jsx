import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {COLORS, FontSize} from './../utils/index';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.containerInfo}>
        <Text style={styles.name}>Huynd</Text>
        <View style={styles.containerTime}>
          <Text style={styles.time}>19 giờ</Text>
          <AntDesign
            name="clockcircleo"
            size={FontSize.smallSize}
            color={COLORS.blackText}
          />
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  containerInfo: {
    paddingHorizontal: 5,
  },

  name: {
    fontSize: FontSize.largeSize,
    fontWeight: '700',
    color: COLORS.blackText,
  },

  containerTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  time: {
    fontSize: FontSize.smallSize,
    fontWeight: '400',
    color: COLORS.greyText,
    paddingRight: 8,
  },
});
