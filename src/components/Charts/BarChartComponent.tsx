import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import Heading from '../custom/Heading';

interface BarChartProps {
  data: { name: string; value: number }[];
}

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  return (
    <>
      <Heading size="sm" className="col-start-1 my-4">
        Category Data:
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

export default BarChartComponent;
