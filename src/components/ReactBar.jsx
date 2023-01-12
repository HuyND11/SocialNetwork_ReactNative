import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {FontSize} from '../utils';
import {COLORS} from './../utils/index';
import {getData} from '../shared/auth';

const ReactBar = ({postItem}) => {
  const [heart, setHeart] = useState(false);
  const [like, setLike] = useState(postItem.like);

  useEffect(() => {
    const checkLike = async () => {
      const currentUid = await getData('pnvoUid');
      if (heart && like.includes(currentUid)){
        setHeart(true);
      }
      if (heart && !like.includes(currentUid)) {
        console.log('heart');
        let likeArr = like;
        likeArr.push(currentUid);
        console.log('likeArr-like', likeArr);
        firestore()
          .collection('post')
          .doc(postItem.id)
          .update({like: likeArr})
          .then(() => {
            setLike(likeArr);
            setHeart(true);
          });
      }
      if (!heart && like.includes(currentUid)) {
        console.log('!heart');
        let likeArr = like;
        likeArr = likeArr.filter(item => item !== currentUid);
        console.log('likeArr-unlike', likeArr);
        firestore()
          .collection('post')
          .doc(postItem.id)
          .update({like: likeArr})
          .then(() => {
            setLike(likeArr);
            setHeart(false);
          });
      }
    };
    checkLike();
  }, [heart, like]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.reactButton}
        onPress={() => setHeart(!heart)}>
        <AntDesign
          name={heart ? 'heart' : 'hearto'}
          color={heart ? COLORS.likedBtn : COLORS.secondaryBg}
          size={25}
        />
        <Text style={styles.text}>{like.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactButton}>
        <FontAwesome name="comments-o" color={COLORS.secondaryBg} size={28} />
        <Text style={styles.text}>{postItem?.comment?.length || '0'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactButton}>
        <FontAwesome name="share" color={COLORS.secondaryBg} size={25} />
        <Text style={styles.text}>{postItem?.share?.length || '0'}</Text>
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
    paddingVertical: 8,
    marginTop: 10,
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
    fontWeight: '500',
    marginLeft: 5,
    color: COLORS.whiteText,
  },
});
