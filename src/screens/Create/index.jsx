import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/dist/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import storage from '@react-native-firebase/storage';

const Create = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current.open();
  };

  const handleMakeImage = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
      mediaType: 'image',
    }).then(image => {
      setImages(prev => [...prev, image.path]);
    });
  };

  const handleChooseImage = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
      mediaType: 'image',
    }).then(image => {
      setImages(prev => [...prev, image.path]);
    });
  };

  // console.log('images =>', images);

  const handleSavePost = async () => {};

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24}}>ADD NEW POST</Text>
        <TextInput
          placeholder={"What's on your mind"}
          onChangeText={val => {}}
          // value=
        />
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={onOpen}>
          <Feather name={'image'} color={'black'} size={30} />
          <Text>Add image</Text>
        </TouchableOpacity>
        <View style={{width: 350, marginTop: 30, marginBottom: 30}}>
          <Text style={{marginBottom: 20}}>Content:</Text>
        </View>
      </View>
      <View style={styles.spacer} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}>
          <Feather name="x" size={24} color="black" />
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSavePost()}
          style={styles.postButton}>
          <Feather name="corner-left-up" size={24} color="white" />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        modalHeight={200}
        handlePosition={'inside'}
        onClose={() => {}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{width: 300, marginTop: 30}}>
            <Button title={'Choose a image'} onPress={handleChooseImage} />
          </View>
          <View style={{width: 300, marginTop: 10}}>
            <Button title={'Make a image'} onPress={handleMakeImage} />
          </View>
        </View>
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  buttonsContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  cancelButton: {
    alignItems: 'center',
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
  postButton: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ff4040',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
  cancelButtonText: {
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postButtonText: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Create;
