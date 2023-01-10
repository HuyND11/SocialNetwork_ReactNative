import {Text, View, StyleSheet} from 'react-native';
import Comment from '../../components/comment/Comment';
import Header from '../../components/Header';
import Post from '../../components/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Post />
      <Comment />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
