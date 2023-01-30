import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PostImage from './PostImage';
import ReactBar from './ReactBar';
import firestore from '@react-native-firebase/firestore';
import {COLORS, defaultImages, FontSize, notificationAndroid} from '../utils';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {getData} from '../shared/auth';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

const Post = ({postItem}) => {
  const [user, setUser] = useState({});
  const [isGovernment, setIsGovernment] = useState(false);
  const refRBSheet = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    if (postItem.UID) {
      firestore()
        .collection('users')
        .where('UID', '==', postItem.UID)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            setUser(documentSnapshot.data());
          });
        });

      const checkIsGovernment = async () => {
        const uid = await getData('pnvoUid');
        if (uid === postItem.UID) {
          setIsGovernment(true);
        }
      };
      checkIsGovernment();
    }
  }, []);

  const handleDelete = () => {
    setIsLoading(true);
    firestore()
      .collection('post')
      .doc(postItem.id)
      .delete()
      .then(() => {
        notificationAndroid('Deleted successfully');
        refRBSheet.current.close();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerPost}>
        <View style={styles.headerInfoLeft}>
          <Image
            source={{
              uri:
                user.avatar !== '' ? user.avatar : defaultImages.DEFAULT_AVATAR,
            }}
            style={styles.avatar}
          />
          <View style={styles.username}>
            <Text style={styles.textHeadder}>{user.userName}</Text>
            <Text style={styles.textHeadderGrey}>{postItem.createdAt}</Text>
          </View>
        </View>
        <View style={styles.headerInfoRight}>
          {isGovernment ? (
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Icon
                name="more-vertical"
                size={34}
                color={COLORS.secondaryBg}
                style={styles.btnMore}
              />
            </TouchableOpacity>
          ) : null}

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            animationType="slide"
            minClosingHeight={20}
            customStyles={{
              container: {
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: Dimensions.get('window').height - 600,
                borderTopLeftRadius: 23,
                borderTopRightRadius: 23,
                backgroundColor: COLORS.bgActiveBtn,
              },
            }}>
            <View style={styles.btnMoreGroup}>
              {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.bgActiveBtn} />
              ) : null}
              <TouchableOpacity>
                <Icon name="x" style={styles.closeBtnRBT} />
              </TouchableOpacity>
              <View style={styles.controlBtnRBT}>
                <TouchableOpacity
                  style={styles.controlBtnRBTUpdate}
                  onPress={() => {}}>
                  <Text style={styles.controlBtnRBTUpdateText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.controlBtnRBTDelete}
                  onPress={handleDelete}>
                  <Text style={styles.controlBtnRBTDeleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>
        </View>
      </View>

      <View style={styles.contentPost}>
        {postItem.image.length > 0 && postItem.image[0] !== '' ? (
          <View style={styles.contentWithImage}>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.contentWithImageText}>
              {postItem.content}
            </Text>
            <Image
              source={{uri: postItem.image[0]}}
              style={styles.contentWithImageImg}
            />
          </View>
        ) : (
          <LinearGradient
            style={styles.contentWithoutImage}
            colors={COLORS.linearBgPost}>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.contentWithoutImageText}>
              {postItem.content}
            </Text>
          </LinearGradient>
        )}
      </View>
      <ReactBar postItem={postItem} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greyText,
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  headerPost: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: COLORS.secondaryBg,
  },
  headerInfoLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  username: {
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },
  textHeadder: {
    fontSize: FontSize.largeSize,
    color: COLORS.whiteText,
    fontWeight: '800',
  },
  textHeadderGrey: {
    fontSize: FontSize.smallSize,
    color: COLORS.secondaryBg,
  },
  contentPost: {
    minHeight: 400,
  },
  btnMore: {},
  // withoutImage
  contentWithoutImage: {
    width: '100%',
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  contentWithoutImageText: {
    fontSize: 32,
    fontWeight: '600',
    color: COLORS.blackText,
  },
  // With image
  contentWithImage: {
    width: '100%',
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  contentWithImageText: {
    fontSize: FontSize.mediumSize,
    fontWeight: '400',
    color: COLORS.whiteText,
  },
  contentWithImageImg: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginTop: 10,
  },
  // Raw bottom sheet
  btnMoreGroup: {
    backgroundColor: COLORS.primaryBg,
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    position: 'relative',
  },
  closeBtnRBT: {
    position: 'absolute',
    top: 0,
    right: 10,
    fontSize: 30,
    color: COLORS.whiteText,
  },
  controlBtnRBT: {
    marginTop: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlBtnRBTDelete: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.likedBtn,
    marginLeft: 30,
  },
  controlBtnRBTDeleteText: {
    color: COLORS.likedBtn,
    fontWeight: '700',
    fontSize: FontSize.largeSize,
  },
  controlBtnRBTUpdate: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: COLORS.bgActiveBtn,
  },
  controlBtnRBTUpdateText: {
    color: COLORS.whiteText,
    fontWeight: '700',
    fontSize: FontSize.largeSize,
  },
});
