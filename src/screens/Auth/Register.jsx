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
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../utils';

const Register = ({navigation}) => {
  const [params, setParams] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      <View style={styles.form}>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputIcon}>
            <TextInput
              style={styles.input}
              onChangeText={newText =>
                setParams({...params, ['email']: newText})
              }
              defaultValue={params.email}
              keyboardType="email-address"
            />
            <Icon name="user" size={28} style={styles.icon} />
          </View>
        </View>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputIcon}>
            <TextInput
              style={styles.input}
              onChangeText={newText =>
                setParams({...params, ['username']: newText})
              }
              defaultValue={params.username}
            />
            <Icon name="user" size={28} style={styles.icon} />
          </View>
        </View>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputIcon}>
            <TextInput
              style={styles.input}
              onChangeText={newText =>
                setParams({...params, ['password']: newText})
              }
              defaultValue={params.password}
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

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          console.log('params', params);
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'main'}],
          // });
        }}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('Forgot password!');
        }}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <Text style={{color: COLORS.whiteText}}>OR</Text>

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
});
export default Register;
