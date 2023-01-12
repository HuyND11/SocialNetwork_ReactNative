import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {pickImage, uploadImageToDirectory} from '../../../firebase/uploadImage';
import firestore from '@react-native-firebase/firestore';
import {COLORS, defaultImages, FontSize, notificationAndroid} from '../../../utils';

const UploadImage = ({userInfo, idDoc, refreshData, refRBSIMG, objImage}) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const chooseImage = () => {
    pickImage().then(img => setImage(img));
  };

  const uploadImage = async () => {
    setLoading(true);
    const imgUrl = await uploadImageToDirectory('users', image);
    if (objImage === 'avatar') {
      firestore()
        .collection('users')
        .doc(idDoc)
        .update({avatar: imgUrl})
        .then(() => {
          notificationAndroid('Avatar updated');
          refreshData();
          refRBSIMG.current.close();
        });
    } else {
      firestore()
        .collection('users')
        .doc(idDoc)
        .update({coverImage: imgUrl})
        .then(() => {
          notificationAndroid('Cover image updated');
          refreshData();
          refRBSIMG.current.close();
        });
    }
  };

  const handleDelete = () => {
    if (objImage === 'avatar') {
      if (userInfo.avatar === undefined || userInfo.avatar === '') {
        notificationAndroid('Have no image to delete');
        return;
      }
      setLoading(true);
      firestore()
        .collection('users')
        .doc(idDoc)
        .update({avatar: ''})
        .then(() => {
          notificationAndroid('Avatar deleted');
          refreshData();
          refRBSIMG.current.close();
        });
    } else {
      if (userInfo.coverImage === undefined || userInfo.coverImage === '') {
        notificationAndroid('Have no image to delete');
        return;
      }
      setLoading(true);
      firestore()
        .collection('users')
        .doc(idDoc)
        .update({coverImage: ''})
        .then(() => {
          notificationAndroid('Cover image deleted');
          refreshData();
          refRBSIMG.current.close();
        });
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.bgActiveBtn} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Image</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.btnDelete}>
        <Text
          style={[
            styles.textBtn,
            {color: COLORS.likedBtn, fontSize: FontSize.smallSize},
          ]}>
          Delete {objImage === 'avatar' ? 'Avatar' : 'Cover image'}
        </Text>
      </TouchableOpacity>
      {image ? (
        <Image
          source={{
            uri: image.path,
          }}
          style={styles.imagePreview}
        />
      ) : objImage === 'avatar' ? (
        userInfo.avatar !== undefined && userInfo.avatar !== '' ? (
          <Image
            source={{
              uri: userInfo.avatar,
            }}
            style={styles.imagePreview}
          />
        ) : (
          <Image
            source={{
              uri: defaultImages.DEFAULT_AVATAR,
            }}
            style={styles.imagePreview}
          />
        )
      ) : userInfo.coverImage !== undefined && userInfo.coverImage !== '' ? (
        <Image
          source={{
            uri: userInfo.coverImage,
          }}
          style={styles.imagePreview}
        />
      ) : (
        <Image
          source={{
            uri: defaultImages.DEFAULT_IMAGE_UPLOAD,
          }}
          style={styles.imagePreview}
        />
      )}
      <View style={styles.groupBtn}>
        <TouchableOpacity
          onPress={uploadImage}
          disabled={image ? false : true}
          style={[
            styles.btn,
            {backgroundColor: image ? COLORS.bgActiveBtn : COLORS.greyText},
          ]}>
          <Text style={[styles.textBtn, {color: COLORS.whiteText}]}>
            Update {objImage === 'avatar' ? 'Avatar' : 'Cover image'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={chooseImage}
          style={[styles.btn, styles.btnChooseImage]}>
          <Text style={[styles.textBtn, {color: COLORS.bgActiveBtn}]}>
            Select image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.primaryBg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  groupBtn: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  btnChooseImage: {
    borderWidth: 1,
    borderColor: COLORS.bgActiveBtn,
  },
  textBtn: {
    fontWeight: '600',
  },
  title: {
    fontSize: FontSize.largeSize,
    fontWeight: '600',
    textTransform: 'capitalize',
    position: 'absolute',
    top: 10,
  },
  imagePreview: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  btnDelete: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.likedBtn,
  },
});
