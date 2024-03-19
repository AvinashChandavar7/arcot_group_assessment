
import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Heading from '../custom/Heading';

interface UsageStatisticsPieChartProps {
  data: { name: string; value: number }[];
}

const UsageStatisticsPieChartComponent: React.FC<UsageStatisticsPieChartProps> = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <Heading size="sm" className="col-start-1 my-4">
        Country Data:
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default UsageStatisticsPieChartComponent;


































//   const renderDataEntries = () => {
//     const entries: { name: string; value: number }[] = [];

//     // Iterate over the keys of the usage_statistics data and extract entries
//     Object.keys(data).forEach(statisticType => {
//       const statisticData = data[statisticType];
//       Object.entries(statisticData).forEach(([key, value]) => {
//         entries.push({ name: key, value });
//       });
//     });

//     return entries;
//   };
