import {useEffect, useState} from 'react';

function useFirestoreCollection(collection, pageSize, page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);
  const [queryLoading, setQueryLoading] = useState(false);
  const [queryError, setQueryError] = useState(null);

  useEffect(() => {
    let unsubscribe;
    if (query) {
      setQueryLoading(true);
      unsubscribe = query.onSnapshot(
        querySnapshot => {
          const data = [];
          querySnapshot.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setData(data);
          setQueryLoading(false);
        },
        error => {
          setQueryError(error);
          setQueryLoading(false);
        },
      );
    } else {
      unsubscribe = collection
        .limit(pageSize)
        // .offset(page * pageSize)
        .onSnapshot(
          collectionSnapshot => {
            const data = [];
            collectionSnapshot.forEach(doc => {
              data.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setData(data);
            setLoading(false);
          },
          error => {
            setError(error);
            setLoading(false);
          },
        );
    }
    return () => unsubscribe();
  }, [query]);


  function refresh() {
    if (query) {
      setQueryLoading(true);
      query.get().then(
        querySnapshot => {
          const data = [];
          querySnapshot.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setData(data);
          setQueryLoading(false);
        },
        error => {
          setQueryError(error);
          setQueryLoading(false);
        },
      );
    } else {
      collection
        .limit(pageSize)
        // .offset(page * pageSize)
        .get()
        .then(
          collectionSnapshot => {
            const data = [];
            collectionSnapshot.forEach(doc => {
              data.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setData(data);
            setLoading(false);
          },
          error => {
            setError(error);
            setLoading(false);
          },
        );
    }
  }

  function setCollectionQuery(newQuery) {
    setQuery(newQuery);
  }

  return {
    data,
    loading,
    error,
    queryLoading,
    queryError,
    refresh,
    setCollectionQuery,
  };
}

export default useFirestoreCollection;
