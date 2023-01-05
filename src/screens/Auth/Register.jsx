import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {COLORS} from '../../utils';
import {validateEmail} from '../../shared/validateForm';
import Input from './components/Input';
import {ButtonActive, ButtonService} from './components/Button';

const Register = ({navigation}) => {
  const [secure, setSecure] = useState(true);
  const [params, setParams] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    username: '',
    password: '',
  });

  const validate = () => {
    let check = true;
    let errMess = {
      email: '',
      username: '',
      password: '',
    };
    if (!validateEmail(params.email)) {
      check = false;
      errMess.email = 'Invalid email format!';
    }
    if (params.email === '') {
      check = false;
      errMess.email = 'Required input!';
    }
    if (params.password === '') {
      check = false;
      errMess.password = 'Required input!';
    }
    if (params.username === '') {
      check = false;
      errMess.username = 'Required input!';
    }
    setErrorMessages(errMess);
    return check;
  };

  const handleBlur = () => {
    setErrorMessages({
      email: '',
      username: '',
      password: '',
    });
  };
  const handleRegister = () => {
    if (!validate()) {
      return;
    }
    auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(async () => {
        await auth().currentUser.updateProfile({displayName: params.username});
        navigation.navigate('login');
      })
      .catch(err => {
        if (
          err.message ===
          '[auth/email-already-in-use] The email address is already in use by another account.'
        ) {
          setErrorMessages({
            ...errorMessages,
            ['email']: 'Email address is already existing!',
          });
        }
      });
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
          onChangeText={newText => setParams({...params, ['email']: newText})}
          defaultValue={params.email}
          keyboardType="email-address"
          iconName="mail"
          handleBlur={handleBlur}
        />

        <Input
          label="Username"
          errMess={errorMessages.username}
          onChangeText={newText =>
            setParams({...params, ['username']: newText})
          }
          defaultValue={params.username}
          iconName="user"
          handleBlur={handleBlur}
        />

        <Input
          label="Password"
          errMess={errorMessages.password}
          onChangeText={newText =>
            setParams({...params, ['password']: newText})
          }
          defaultValue={params.password}
          iconName={secure ? 'eye-off' : 'eye'}
          handleBlur={handleBlur}
          secure={secure}
          handlePressIcon={() => {
            setSecure(!secure);
          }}
        />
      </View>

      <ButtonActive text="Register" handlePress={handleRegister} />

      <Text style={{color: COLORS.whiteText}}>OR</Text>

      <View style={styles.groupBtnOther}>
        <ButtonService
          service="google"
          handlePress={() => {
            // TODO: register with google
            alert('register with google');
          }}
        />
        <ButtonService
          service="facebook"
          handlePress={() => {
            // TODO: register with facebook
            alert('register with Facebook');
          }}
        />
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
  forgot: {
    fontSize: 15,
    color: COLORS.likedBtn,
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
  // Error text
  textErr: {
    color: COLORS.likedBtn,
    fontWeight: '500',
    fontSize: 13,
  },
});
export default Register;
