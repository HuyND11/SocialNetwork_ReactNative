import firestore from '@react-native-firebase/firestore';
import {getData} from '../shared/auth';

export const getUserInfo = async () => {
  const uid = await getData('pnvoUid');
  const users = await firestore().collection('users').get();
  console.log(uid);
  console.log('users', users);
};
