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
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Email</Text>
          {errorMessages.email && (
            <Text style={styles.textErr}>{errorMessages.email}</Text>
          )}
          <View style={styles.inputIcon}>
            <TextInput
              style={styles.input}
              onChangeText={newText => setEmail(newText)}
              defaultValue={email}
              keyboardType="email-address"
            />
            <Icon name="user" size={28} style={styles.icon} />
          </View>
        </View>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Password</Text>
          {errorMessages.password && (
            <Text style={styles.textErr}>{errorMessages.password}</Text>
          )}
          <View style={styles.inputIcon}>
            <TextInput
              style={styles.input}
              onChangeText={newText => setPassword(newText)}
              defaultValue={password}
              secureTextEntry={secure}
            />
            <Icon
              name={secure ? 'eye-off' : 'eye'}
              size={28}
              style={styles.icon}
              onPress={() => {
                setSecure(!secure);
              }}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.fogotAndMore}>
        <TouchableOpacity
          onPress={() => {
            alert('Forgot password!');
          }}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <Text style={{color: COLORS.whiteText}}>OR</Text>
      </View>

      <View style={styles.groupBtnOther}>
        <TouchableOpacity style={styles.btnOther}>
          <IconAntDesign name="google" size={28} style={styles.icon} />
          <Text style={styles.textBtnOther}>Continue with Google</Text>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOther}>
          <IconFontisto name="facebook" size={28} style={styles.icon} />
          <Text style={styles.textBtnOther}>Continue with Facebook</Text>
          <Text></Text>
        </TouchableOpacity>
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
  //Group input
  groupInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondaryBg,
    width: '100%',
    borderRadius: 10,
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
    paddingLeft: 20,
  },
  inputLabel: {
    color: COLORS.whiteText,
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    color: COLORS.whiteText,
  },

  //Button
  loginButton: {
    width: '100%',
    backgroundColor: COLORS.bgActiveBtn,
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.whiteText,
    textAlign: 'center',
    fontSize: 24,
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
  btnOther: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: COLORS.whiteText,
    marginBottom: 20,
  },
  textBtnOther: {
    fontWeight: '700',
    color: COLORS.whiteText,
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
  // Error text
  textErr: {
    color: COLORS.likedBtn,
    fontWeight: '500',
    fontSize: 13,
  },
});
export default Login;
