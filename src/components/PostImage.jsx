import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/vi/2/25/Monkey_D._Luffy%2C_post_time-skip%2C_OP.png',
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
