import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {FontSize} from '../utils';
import {COLORS} from './../utils/index';

const ReactBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.reactButton}>
        <AntDesign name="like1" color={COLORS.greyText} size={25} />
        <Text style={styles.text}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactButton}>
        <FontAwesome name="comments-o" color={COLORS.greyText} size={28} />
        <Text style={styles.text}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactButton}>
        <FontAwesome name="share" color={COLORS.greyText} size={25} />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReactBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  reactButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  text: {
    fontSize: FontSize.largeSize,
    fontWeight: '600',
    marginLeft: 5,
  },
});
