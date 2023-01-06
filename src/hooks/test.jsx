import useFirestoreCollection from './useFirestoreCollection';

function MyComponent() {
  const collection = firestore().collection('myCollection');
  const {data, loading, error, refresh} = useFirestoreCollection(collection);

  useEffect(() => {
    refresh();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.name}</Text>}
      keyExtractor={item => item.id}
      onRefresh={refresh}
      refreshing={loading}
    />
  );
}
