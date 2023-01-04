// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlfCmtei_Q9mbvs2iXBM1-NTQy1bkMYS4',
  authDomain: 'socialfacebook-5f9df.firebaseapp.com',
  projectId: 'socialfacebook-5f9df',
  storageBucket: 'socialfacebook-5f9df.appspot.com',
  messagingSenderId: '136673728513',
  appId: '1:136673728513:web:d21aa4b34499c4f4a90800',
  measurementId: 'G-Y87WNV5JWC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};
