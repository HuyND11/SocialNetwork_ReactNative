import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostImage = ({link}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: link,
        }}
      />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
});
