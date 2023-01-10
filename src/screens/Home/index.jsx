import {Text, View, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from './../../hooks/useFirestoreCollection';
import {useEffect} from 'react';

const Home = () => {
  const collection = firestore().collection('post');

  const pageSize = 6;

  const page = 2;

  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  useEffect(() => {
    refresh();
  }, []);

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem = ({item}) => {
    return (
      <Post
        content={item?.content}
        UID={item?.UID}
        listImage={item?.image}
        key={item?.id}
        listLike={item?.like}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
});
