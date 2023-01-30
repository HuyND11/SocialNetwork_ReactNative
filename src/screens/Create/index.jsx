import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../Auth/components/Input';
import {COLORS, FontSize, notificationAndroid} from '../../utils';
import {ButtonActive} from '../Auth/components/Button';
import {BASE_POST, dateTimeFormat} from '../../firebase/collectionProperties';
import {
  pickMultipleImage,
  uploadImageToDirectory,
} from '../../firebase/uploadImage';
import {getData} from '../../shared/auth';

const Create = ({navigation}) => {
  const [content, setContent] = useState('');

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chooseImage = () => {
    pickMultipleImage().then(images => setImages(images));
  };

  // const handleUploadImage = () => {
  //   let imageArr = [];
  //   if (images.length !== 0) {
  //     images.forEach(async img => {
  //       const imgUrl = await uploadImageToDirectory('tests', img);
  //       await imageArr.push(imgUrl);
  //     });
  //     return imageArr;
  //   } else {
  //     return [];
  //   }
  // };

  const handleCreate = async () => {
    setIsLoading(true);
    let postParams = BASE_POST;
    postParams.UID = await getData('pnvoUid');
    postParams.createdAt = new Date().toLocaleDateString(
      'en-US',
      dateTimeFormat,
    );
    if (images.length !== 0) {
      postParams.image = [await uploadImageToDirectory('posts', images[0])];
    } else {
      imageArr = [''];
    }

    postParams.content = content;

    console.log('postParams', postParams);
    firestore()
      .collection('post')
      .add(postParams)
      .then(() => {
        notificationAndroid('Post has been created');
        setContent('');
        setImages([]);
        setIsLoading(false);
        navigation.navigate('home');
      });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loading} size="large" />
      ) : null}
      <View style={styles.groupForm}>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Content of your post</Text>
          <View style={styles.inputIcon}>
            <TextInput
              style={styles.input}
              onChangeText={newText => setContent(newText)}
              defaultValue={content}
              multiline={true}
              numberOfLines={5}
            />
            <Icon name="edit-2" size={28} style={styles.icon} />
          </View>
        </View>

        <TouchableOpacity style={styles.btnSelect} onPress={chooseImage}>
          <Text style={styles.textSelect}>Select image</Text>
          <Icon name="image" size={28} color={COLORS.bgActiveBtn} />
        </TouchableOpacity>

        <View style={styles.imagesPreviewList}>
          {images.length !== 0
            ? images.map((img, index) => (
                <Image
                  key={index}
                  source={{
                    uri: img.path,
                  }}
                  style={[styles.imagePreview, {flex: index + 1}]}
                />
              ))
            : null}
        </View>

        <ButtonActive handlePress={handleCreate} text="Create post" />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  groupForm: {
    marginTop: 30,
  },
  loading: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    color: COLORS.bgActiveBtn,
  },
  container: {
    backgroundColor: COLORS.primaryBg,
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  groupInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondaryBg,
    width: '100%',
    marginBottom: 20,
  },
  inputIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: COLORS.whiteText,
    fontSize: 18,
    width: '90%',
  },
  inputLabel: {
    color: COLORS.whiteText,
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    color: COLORS.whiteText,
  },
  btnSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '45%',
    borderWidth: 2,
    borderColor: COLORS.bgActiveBtn,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  textSelect: {
    fontWeight: '500',
    fontSize: FontSize.largeSize,
    color: COLORS.bgActiveBtn,
  },
  imagesPreviewList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: 400,
    overflow: 'hidden',
    borderRadius: 10,
  },
  imagePreview: {
    width: '100%',
    maxHeight: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    marginHorizontal: 5,
  },
});
