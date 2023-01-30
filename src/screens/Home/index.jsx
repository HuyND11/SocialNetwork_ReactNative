import {Text, View, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from './../../hooks/useFirestoreCollection';
import {useEffect} from 'react';

const Home = () => {
  const collection = firestore().collection('post');

  const pageSize = 10;

  const page = 2;

  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  useEffect(() => {
    refresh();
  }, []);


  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem = ({item}) => {
    return <Post postItem={item} />;
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 60,
  },
});
