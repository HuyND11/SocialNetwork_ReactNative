import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../Avatar';
import {FontSize} from '../../utils';
import {COLORS} from './../../utils/index';

const UserComment = () => {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.comment}>
        <Text style={styles.userName}>UserComment</Text>
        <Text style={styles.content}>
          UserCommentUserCommentUser UserCommentUserCommentUser
        </Text>
      </View>
    </View>
  );
};

export default UserComment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },

  comment: {
    paddingLeft: 5,
  },

  userName: {
    fontSize: FontSize.mediumSize,
    fontWeight: '700',
    color: COLORS.blackText,
    marginBottom: 5,
  },

  content: {
    fontSize: FontSize.smallSize,
    fontWeight: '400',
    color: COLORS.blackText,
  },
});
