import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';
import {COLORS} from '../../utils';
import {getData, navigateAuthorized, storeData} from '../../shared/auth';
import {validateEmail} from '../../shared/validateForm';
import {ButtonActive, ButtonService} from './components/Button';
import Input from './components/Input';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      (async () => {
        const uid = await getData('pnvoUid');
        if (user.uid == uid) {
          console.log('loginnnnnnnnnnnnnnnnnnnnnn');
          // navigateAuthorized(navigation);
        }
      })();
    });
  }, []);

  const validate = () => {
    let check = true;
    let errMess = {
      email: '',
      password: '',
    };
    if (!validateEmail(email)) {
      check = false;
      errMess.email = 'Invalid email format';
    }
    if (email === '') {
      check = false;
      errMess.email = 'Required input';
    }
    if (password === '') {
      check = false;
      errMess.password = 'Required input';
    }
    setErrorMessages(errMess);
    return check;
  };

  const handleBlur = () => {
    setErrorMessages({
      email: '',
      password: '',
    });
  };
  () => {
    setErrorMessages({
      email: '',
      password: '',
    });
  };
  const handleLogin = () => {
    if (!validate()) {
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(users => {
        storeData('pnvoUid', users.user.uid);
      })
      .catch(err => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input
          label="Email"
          errMess={errorMessages.email}
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
          keyboardType="email-address"
          iconName="mail"
          handleBlur={handleBlur}
        />

        <Input
          label="Password"
          errMess={errorMessages.password}
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
          iconName={secure ? 'eye-off' : 'eye'}
          handleBlur={handleBlur}
          secure={secure}
          handlePressIcon={() => {
            setSecure(!secure);
          }}
        />
      </View>

      <ButtonActive text="Login" handlePress={handleLogin} />
      <View style={styles.fogotAndMore}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('forgot');
          }}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <Text style={{color: COLORS.whiteText}}>OR</Text>
      </View>

      <View style={styles.groupBtnOther}>
        <ButtonService
          service="google"
          handlePress={() => {
            // TODO: login with google
            alert('Login with google');
          }}
        />
        <ButtonService
          service="facebook"
          handlePress={() => {
            // TODO: login with facebook
            alert('Login with Facebook');
          }}
        />
      </View>
      <View style={styles.didnAccount}>
        <Text style={{color: COLORS.whiteText}}>Do not have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.btnRegister}>Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBg,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  logo: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
  },
  //Form
  form: {
    width: '100%',
  },
  //Forgot
  fogotAndMore: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot: {
    fontSize: 15,
    color: COLORS.likedBtn,
    marginBottom: 15,
  },
  groupBtnOther: {
    width: '100%',
  },
  // register
  didnAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRegister: {
    marginLeft: 10,
    color: COLORS.bgActiveBtn,
    fontWeight: '700',
  },
});
export default Login;
