import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyButton from '../../components/Button';
import {getData, getUid, logOut} from '../../shared/auth';
import {COLORS, FontSize} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';
import Icon from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Account = ({navigation}) => {
  const collection = firestore().collection('users');
  const [userInfo, setUserInfo] = useState({});
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    6,
    2,
  );

  useEffect(() => {
    const getUserInfo = async () => {
      const uid = await getData('pnvoUid');
      if (data.length !== 0) {
        setUserInfo(data.filter(arr => arr.UID === uid)[0]);
      }
    };
    getUserInfo();
  }, [loading]);

  if (loading) {
    return <ActivityIndicator size="large" color={COLORS.bgActiveBtn} />;
  } else {
    console.log('userInfo', userInfo);
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const chooseImage = () => {
    console.log('choose image');
  };

  const ListAvatarFriend = () => {
    let arr = [];
    if (userInfo.friend?.length > 0) {
      userInfo.friend.forEach(friend => {
        if (arr.length <= 6) {
          arr.push(data.filter(user => user.UID === friend)[0]);
        }
      });
    }
    console.log('arr', arr);
    return arr.map(user => (
      <View key={user.UID} style={styles.friendItem}>
        <Image
          source={{
            uri:
              user.avatar !== ''
                ? user.avatar
                : 'https://firebasestorage.googleapis.com/v0/b/socialfacebook-5f9df.appspot.com/o/users%2Fdefault-avatar.png?alt=media&token=7ad2115a-315a-497c-928a-df1c0e41fccc',
          }}
          style={styles.friendImage}
        />
        <Text style={styles.friendText}>{user.userName}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.bgTop} colors={COLORS.linearBg}>
        {userInfo.coverImage && (
          <Image
            source={{
              uri: userInfo.coverImage,
            }}
            style={styles.coverImage}
          />
        )}
        <TouchableOpacity
          style={[styles.btnEditImage, styles.btnEditCoverImage]}
          onPress={() => console.log('edit cover image')}>
          <Icon name="camera" size={20} color={COLORS.bgActiveBtn} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.avatarSection}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/socialfacebook-5f9df.appspot.com/o/users%2F69ed2114-f8a4-4858-91e4-c47928ebcbe4.jpg?alt=media&token=41c2fd11-3728-4458-80de-59ae38c76ea2',
          }}
          style={styles.avatar}
        />
        <TouchableOpacity
          style={[styles.btnEditImage, styles.btnEditAvatarImage]}
          onPress={() => console.log('edit avatar image')}>
          <Icon name="camera" size={20} color={COLORS.bgActiveBtn} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{userInfo.userName}</Text>
      <View style={styles.groupBtn}>
        <TouchableOpacity style={[styles.btn, styles.btnEdit]}>
          <Icon name="edit" size={24} color={COLORS.whiteText} />
          <Text style={styles.btnEditText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.btnLogout]}
          onPress={() => {
            logOut(navigation);
          }}>
          <Icon name="log-out" size={24} color={COLORS.bgActiveBtn} />
          <Text style={styles.btnLogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.personalInfo}>
        <View style={styles.infoSection}>
          <Icon name="book-open" color={COLORS.secondaryBg} size={20} />
          <Text style={styles.infoText}>Studies at {userInfo.education}</Text>
        </View>
        <View style={styles.infoSection}>
          <Icon name="calendar" color={COLORS.secondaryBg} size={20} />
          <Text style={styles.infoText}>{userInfo.birthday}</Text>
        </View>
        <View style={styles.infoSection}>
          <Icon name="users" color={COLORS.secondaryBg} size={20} />
          <Text style={styles.infoText}>
            {userInfo.follower?.length > 1
              ? `Followed by ${userInfo.follower.length}people`
              : `Followed by ${userInfo.follower?.length} person`}
          </Text>
        </View>
        <View style={styles.infoSection}>
          <IconFontAwesome
            name="transgender"
            color={COLORS.secondaryBg}
            size={20}
          />
          <Text style={styles.infoText}>{userInfo.gender}</Text>
        </View>
      </View>

      <View style={styles.friends}>
        <View style={styles.friendTop}>
          <View>
            <Text style={styles.friendTitle}>Friends</Text>
            <Text style={styles.friendCount}>
              {userInfo.friend?.length} friends
            </Text>
          </View>
          <TouchableOpacity style={styles.btnSee}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.friendList}>
          <ListAvatarFriend />
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 90,
    paddingHorizontal: 15,
  },
  bgTop: {
    position: 'absolute',
    width: 700,
    height: 700,
    borderRadius: 500,
    // transform: [{rotate: '18deg'}],
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: -520,
    overflow: 'hidden',
  },
  avatarSection: {
    position: 'relative',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.secondaryBg,
  },
  btnEditAvatarImage: {
    position: 'absolute',
    right: 0,
    bottom: 20,
  },
  btnEditImage: {
    padding: 10,
    backgroundColor: COLORS.secondaryBg,
    borderRadius: 30,
  },
  coverImage: {
    width: Dimensions.get('window').width,
    height: 200,
    position: 'absolute',
    bottom: 0,
  },
  name: {
    color: COLORS.whiteText,
    fontSize: FontSize.largeSize,
    fontWeight: '600',
    marginVertical: 10,
  },
  groupBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greyText,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  btnEdit: {
    backgroundColor: COLORS.bgActiveBtn,
  },
  btnLogout: {
    borderColor: COLORS.bgActiveBtn,
    borderWidth: 2,
  },
  btnEditText: {
    fontWeight: '400',
    paddingLeft: 10,
    color: COLORS.whiteText,
  },
  btnLogoutText: {
    fontWeight: '400',
    paddingLeft: 10,
    color: COLORS.bgActiveBtn,
  },
  btnEditCoverImage: {
    position: 'absolute',
    bottom: 40,
    right: 180,
  },
  personalInfo: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greyText,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
  },
  infoText: {
    paddingLeft: 10,
    fontSize: FontSize.mediumSize,
  },
  // Friend
  friends: {
    width: '100%',
    paddingVertical: 10,
  },
  friendTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll: {
    color: COLORS.bgActiveBtn,
  },
  friendTitle: {
    fontSize: FontSize.largeSize,
    fontWeight: '700',
    color: COLORS.whiteText,
  },
  friendCount: {
    color: COLORS.greyText,
    fontSize: FontSize.smallSize,
    paddingBottom: 10,
  },
  friendList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
  },
  friendItem: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  friendImage: {
    width: '90%',
    height: 100,
    borderRadius: 8,
  },
  friendText: {
    color: COLORS.whiteText,
    fontSize: FontSize.mediumSize,
    fontWeight: '500',
  },
});
