import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {COLORS} from '../../utils';
import {
  checkTokenAndNavigate,
  navigateAuthorized,
  storeData,
} from '../../shared/auth';
import {validateEmail} from '../../shared/validateForm';
import {ButtonActive, ButtonService} from './components/Button';
import Input from './components/Input';

const Login = ({navigation}) => {
  const [params, setParams] = useState({email: '', password: ''});
  const [secure, setSecure] = useState(true);
  const [isForgetting, setIsForgetting] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    checkTokenAndNavigate(navigation);
  }, []);

  const validate = () => {
    let check = true;
    let errMess = {
      email: '',
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
    setErrorMessages(errMess);
    return check;
  };

  const handleBlur = () => {
    setErrorMessages({
      email: '',
      password: '',
    });
  };

  const handleLogin = () => {
    if (!validate()) {
      return;
    }

    console.log('login');

    auth()
      .signInWithEmailAndPassword(params.email, params.password)
      .then(async () => {
        const token = await (await auth().currentUser.getIdTokenResult()).token;
        storeData('pnvoToken', token);
        checkTokenAndNavigate(navigation);
      })
      .catch(err => {
        let errMess = {email: '', password: ''};
        if (
          err.message ===
          '[auth/wrong-password] The password is invalid or the user does not have a password.'
        ) {
          setErrorMessages({
            ...errorMessages,
            ['password']: 'Invalid password!',
          });
        }
        if (
          err.message ===
          '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.'
        ) {
          setErrorMessages({
            email: 'Invalid email or password!',
            password: 'Invalid email or password!',
          });
        }
      });
  };

  const handleForgotPassword = () => {
    if (!isForgetting) {
      setIsForgetting(true);
      return;
    }

    let check = true;
    let errMess = {
      email: '',
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

    if (!check) {
      setErrorMessages(errMess);
      return;
    }
    auth()
      .sendPasswordResetEmail(params.email)
      .then(() => {
        ToastAndroid.show('Email sent successfully', ToastAndroid.LONG);
        setIsForgetting(false);
      })
      .catch(e => {
        if (
          e.message ===
          '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.'
        ) {
          setErrorMessages({
            ...errorMessages,
            ['email']: 'Email is not corresponding to any user',
          });
        }
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBg} barStyle="light-content" />
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

        {isForgetting ? (
          <Text style={styles.formGroupText}>
            Please enter your email address, then check your email inbox for
            reset password.
          </Text>
        ) : (
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
        )}
      </View>

      {!isForgetting ? (
        <ButtonActive text="Login" handlePress={handleLogin} />
      ) : null}
      <View style={styles.fogotAndMore}>
        <View
          style={[
            styles.forgotBtnSection,
            {justifyContent: isForgetting ? 'space-between' : 'center'},
          ]}>
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={isForgetting ? styles.forgotBtn : styles.forgotGroup}>
            <Text
              style={[
                styles.forgot,
                {color: isForgetting ? COLORS.whiteText : COLORS.likedBtn},
              ]}>
              {isForgetting ? 'Send me email' : 'Forgot password?'}
            </Text>
          </TouchableOpacity>
          {isForgetting ? (
            <TouchableOpacity
              onPress={() => {
                setIsForgetting(false);
              }}
              style={styles.cancelForgotBtn}>
              <Text style={styles.cancelForgotText}>Cancel</Text>
            </TouchableOpacity>
          ) : null}
        </View>

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
    width: '100%',
  },
  forgotBtn: {
    backgroundColor: COLORS.likedBtn,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  forgotBtnSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  forgot: {
    fontSize: 15,
    fontWeight: '600',
  },
  groupBtnOther: {
    width: '100%',
  },
  cancelForgotBtn: {
    borderWidth: 2,
    borderColor: COLORS.likedBtn,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  cancelForgotText: {
    color: COLORS.likedBtn,
    fontSize: 15,
    fontWeight: '600',
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
