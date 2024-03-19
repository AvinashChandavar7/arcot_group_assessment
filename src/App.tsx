import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './features/aiDataSlice';
import { AppDispatch, RootState } from './app/store';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.aiData);


  console.log(data)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : data ? (
        <h1>Total Queries: {data.usage_statistics.by_platform.Android}</h1>
      ) : null}
    </div>
  );
};

export default App;

