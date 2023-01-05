import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../utils';
import {COLORS} from './../utils/index';

const PostContent = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{children} asasjsssajfhfjhsgfjhsa fsdfds dfdsfdf dfdsfjdhskdjhs asdasdha s ajs djas jdsaj djas jsaj dasj jas jdasjd kd dfsdhfkjdhgj dsg lsdgkjdghsdkhgkdkf</Text>
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },

  content: {
    fontSize: FontSize.mediumSize,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: COLORS.blackText,
  },
});
