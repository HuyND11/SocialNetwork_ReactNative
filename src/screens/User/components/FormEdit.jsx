import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Input from '../../Auth/components/Input';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../utils';
import {ButtonActive} from '../../Auth/components/Button';

const FormEdit = props => {
  const [params, setParams] = useState({
    education: props.userInfo.education,
    birthday: props.userInfo.birthday,
    gender: props.userInfo.gender,
    userName: props.userInfo.userName,
  });

  const handleUpdate = idDoc => {
    firestore()
      .collection('users')
      .doc(idDoc)
      .update(params)
      .then(() => {
        console.log('user updated');
        props.refreshData();
        props.refBTS.current.close();
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => {
          props.refBTS.current.close();
        }}>
        <Icon name="chevron-down" color={COLORS.whiteText} size={35} />
      </TouchableOpacity>
      <View style={styles.groupForm}>
        <Input
          defaultValue={params.education}
          iconName="book-open"
          label="Education"
          onChangeText={newText =>
            setParams({...params, ['education']: newText})
          }
        />
        <Input
          defaultValue={params.birthday}
          iconName="calendar"
          label="Birthday"
          onChangeText={newText =>
            setParams({...params, ['birthday']: newText})
          }
        />
        <Input
          defaultValue={params.gender}
          iconName="star"
          label="Gender"
          onChangeText={newText => setParams({...params, ['gender']: newText})}
        />
        <Input
          defaultValue={params.userName}
          iconName="user"
          label="User name"
          onChangeText={newText =>
            setParams({...params, ['userName']: newText})
          }
        />
        <ButtonActive
          handlePress={() => handleUpdate(props.idDoc)}
          text="Update"
        />
      </View>
    </View>
  );
};

export default FormEdit;

const styles = StyleSheet.create({
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  groupForm: {
    marginTop: 30,
  },
  container: {
    backgroundColor: COLORS.primaryBg,
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  }
});
