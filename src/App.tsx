import { useEffect } from 'react';
import { AppDispatch, RootState } from './app/store';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from './features/aiDataSlice';

import NavBar from './components/NavBar';
import Bounded from './components/custom/Bounded';

import BarChartComponent from './components/Charts/BarChartComponent';
import LineChartComponent from './components/Charts/LineChartComponent';
import PieChartComponent from './components/Charts/PieChartComponent';
import UsageStatisticsBarChartComponent from './components/Charts/UsageStatisticsBarChartComponent';
import UsageStatisticsPieChartComponent from './components/Charts/UsageStatisticsPieChartComponent';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.aiData);

  const categoryData = data ? Object.entries(data.category_distribution).map(([name, value]) => ({ name, value })) : [];
  const responseTimeData = data ? data.response_times.day_wise : [];
  const userSatisfactionData = data ? data.user_satisfaction.ratings : [];
  const usageStatisticsPlatformData = data ? Object.entries(data.usage_statistics.by_platform).map(([name, value]) => ({ name, value })) : [];
  const usageStatisticsCountryData = data ? Object.entries(data.usage_statistics.by_country).map(([name, value]) => ({ name, value })) : [];

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <NavBar />

      <Bounded>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-10 border border-blue-500 rounded-md md:col-span-1">
            <BarChartComponent data={categoryData} />
          </div>
          <div className="col-span-1 p-10 border border-blue-500 rounded-md">
            <LineChartComponent data={responseTimeData} />
          </div>
          <div className="p-10 border border-blue-500 rounded-md md:col-span-2">
            <PieChartComponent data={userSatisfactionData} />
          </div>
          <div className="col-span-1 p-10 border border-blue-500 rounded-md">
            <UsageStatisticsBarChartComponent data={usageStatisticsPlatformData} />
          </div>
          <div className="col-span-1 p-10 border border-blue-500 rounded-md">
            <UsageStatisticsPieChartComponent data={usageStatisticsCountryData} />
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default App;

