import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserComment from './UserComment';
import InputComment from './InputComment';

const Comment = () => {
  return (
    <View style={styles.container}>
      <InputComment />
      <View>
        <UserComment />
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {},
});
