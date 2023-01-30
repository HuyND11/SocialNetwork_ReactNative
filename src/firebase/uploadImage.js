import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export const pickImage = () => {
  return ImageCropPicker.openPicker({
    cropping: true,
  });
};

export const pickMultipleImage = () => {
  return ImageCropPicker.openPicker({
    multiple: true,
  });
};

export const uploadImageToDirectory = async (directory, image) => {
  if (image === undefined || image === null) {
    return;
  }
  let imgUrl;
  const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
  const pathToSave = `${directory}/${imageName}`;
  const pathToFile = image.path;
  const reference = storage().ref(pathToSave);
  await reference.putFile(pathToFile).then(async () => {
    imgUrl = await reference.getDownloadURL();
  });
  return imgUrl;
};
