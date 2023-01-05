import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserInfo from './UserInfo';
import PostContent from './PostContent';
import PostImage from './PostImage';

const Post = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <PostContent> asdjksfskajhsfkjs</PostContent>
      <PostImage />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
