import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../utils';
import {COLORS} from './../utils/index';
import SeeMore from 'react-native-see-more-inline';

const PostContent = ({children}) => {
  return (
    <View style={styles.container}>
      <SeeMore
        numberOfLines={2}
        seeMoreText="See more"
        linkColor="#2E75F0"
        style={styles.content}>
        {children} 
      </SeeMore>
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
