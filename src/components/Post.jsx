import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserInfo from './UserInfo';
import PostContent from './PostContent';
import PostImage from './PostImage';
import ReactBar from './ReactBar';

const Post = ({UID, content = 'PNVO', listImage, listLike}) => {
  // console.log(listImage);
  return (
    <View style={styles.container}>
      <UserInfo />
      <PostContent>{content}</PostContent>
      <View style={styles.containerImage}>
        {listImage?.map((ele, index) => (
          <PostImage key={index} link={ele} />
        ))}
      </View>

      <ReactBar list={listLike} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  containerImage: {
    // flexDirection: 'row',
  },
});
