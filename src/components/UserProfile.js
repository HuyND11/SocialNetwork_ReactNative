import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Background from '../image/background.jpg';
import Home from '../image/home.jpg';

export default class UserProfile extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={Home} style={styles.converPhoto} />
        <View style={styles.topHeader}>
          <Icon name="home" style={styles.headerIcons} />
          <Icon name="user" style={styles.headerIcons} />
          <Icon name="bell" style={styles.headerIcons} />
          <Icon name="Drawer" style={styles.headerIcons} />
        </View>
        <View style={styles.dpContainer}>
          <View style={styles.dpBlueRound}>
            <Image style={styles.dp} source={Background} />
            <View style={styles.activeNowTick}></View>
          </View>
        </View>
        <Text style={styles.name}>LapLinhHuy</Text>
        <Text style={styles.shortBio}>Programmer, React Native Developer</Text>

        <View style={styles.profileTabsContainer}>
          <View style={styles.tabContainer}>
            <View style={styles.tabImageContainer}>
              <Icon name="plus" style={styles.tabImage} />
            </View>
            <Text style={styles.tabText}>Add Story</Text>
          </View>
          <View style={styles.tabContainer}>
            <View style={styles.tabImageContainer}>
              <Icon name="edit" style={styles.tabImage} />
            </View>
            <Text style={styles.tabText}>Edit Profile</Text>
          </View>
          <View style={styles.tabContainer}>
            <View style={styles.tabImageContainer}>
              <Icon name="align-justify" style={styles.tabImage} />
            </View>
            <Text style={styles.tabText}>Activity Log</Text>
          </View>
          <View style={styles.tabContainer}>
            <View style={styles.tabImageContainer}>
              <Icon name="more-horizontal" style={styles.tabImage} />
            </View>
            <Text style={styles.tabText}>More</Text>
          </View>
        </View>
        <View style={styles.devider}></View>
        <View style={styles.aboutheadingContainer}>
          <Text style={styles.aboutText}>About</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <View style={styles.workContainer}>
          <Icon name="briefcase" style={styles.workIcon} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Founder at</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
            CodeGranted
          </Text>
        </View>
        <View style={styles.workContainer}>
          <Icon name="home" style={styles.workIcon} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Lives in</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
            Karachi, Pakistan
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
