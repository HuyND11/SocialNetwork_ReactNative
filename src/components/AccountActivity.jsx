import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import aDrawerIcon from '../image/app-drawer.png';
import EditIcon from '../image/edit.png';
import MoreIcon from '../image/more.png';
import PlusIcon from '../image/plus.png';

const AccountActivity = () => {
  return (
    <View style={styles.profileTabsContainer}>
      <View style={styles.tabContainer}>
        <View style={styles.tabImageContainer}>
          <Image style={styles.tabImage} source={PlusIcon} />
        </View>
        <Text style={styles.tabText}>Add Story</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabImageContainer}>
          <Image style={styles.tabImage} source={EditIcon} />
        </View>
        <Text style={styles.tabText}>Edit Profile</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabImageContainer}>
          <Image style={styles.tabImage} source={aDrawerIcon} />
        </View>
        <Text style={styles.tabText}>Activity Log</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabImageContainer}>
          <Image style={styles.tabImage} source={MoreIcon} />
        </View>
        <Text style={styles.tabText}>More</Text>
      </View>
    </View>
  );
};

export default AccountActivity;

const styles = StyleSheet.create({
  profileTabsContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabContainer: {
    height: 90,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabImage: {
    height: 30,
    width: 30,
  },
  tabImageContainer: {
    height: 55,
    width: 55,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
