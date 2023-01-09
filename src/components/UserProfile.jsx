import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Background from '../image/background.jpg';
import Home from '../image/home.jpg';
import HouseIcon from '../image/house.png';
import WorkIcon from '../image/portfolio.png';
import AccountActivity from './AccountActivity';
import IconTab from './IconTab';
import NameProfile from './NameProfile';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={Home} style={styles.converPhoto} />
      <IconTab style={styles.iconTab} />
      <View style={styles.dpContainer}>
        <View style={styles.dpBlueRound}>
          <Image style={styles.dp} source={Background} />
          <View style={styles.activeNowTick} />
        </View>
      </View>
      <NameProfile style={styles.nameProfiile} />
      <AccountActivity style={styles.accountActivity} />
      <View style={styles.devider}></View>
      <View style={styles.aboutheadingContainer}>
        <Text style={styles.aboutText}>About</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
      <View style={styles.workContainer}>
        <Image style={styles.workIcon} source={WorkIcon} />
        <Text style={{fontSize: 18, marginLeft: 10}}>Founder at</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
          CodeGranted
        </Text>
      </View>
      <View style={styles.workContainer}>
        <Image style={styles.workIcon} source={HouseIcon} />
        <Text style={{fontSize: 18, marginLeft: 10}}>Lives in</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
          Karachi, Pakistan
        </Text>
      </View>
    </View>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  converPhoto: {
    width: '100%',
    height: 230,
  },
  dpContainer: {
    height: 200,
    width: 200,
    borderRadius: 200,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dpBlueRound: {
    height: '95%',
    width: '95%',
    borderRadius: 200,
    borderWidth: 5,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dp: {
    height: 170,
    width: 170,
    borderRadius: 200,
  },
  activeNowTick: {
    height: 30,
    width: 30,
    backgroundColor: 'green',
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    bottom: 20,
    borderWidth: 3,
    borderColor: 'white',
  },
  devider: {
    height: 3,
    width: '95%',
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    marginTop: 5,
  },
  aboutheadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  aboutText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: 'blue',
    fontSize: 18,
  },
  workContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 15,
  },
  workIcon: {
    height: 25,
    width: 25,
    tintColor: 'lightgray',
  },
});
