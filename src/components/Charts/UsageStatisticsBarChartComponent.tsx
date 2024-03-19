import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Heading from '../custom/Heading';

interface UsageStatisticsBarChartProps {
  data: { name: string; value: number }[];
}

const UsageStatisticsBarChartComponent: React.FC<UsageStatisticsBarChartProps> = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <Heading size="sm" className="col-start-1 my-4">
        Platform Data:
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default UsageStatisticsBarChartComponent;
