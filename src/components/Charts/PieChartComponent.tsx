import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiData } from '../../types/AiData'
import Heading from '../custom/Heading';

interface PieChartProps {
  data: AiData['user_satisfaction']['ratings'];
}

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  return (
    <>
      <Heading size="sm" className="col-start-1 my-4">
        User Satisfaction Data:
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="count" nameKey="rating" fill="#8884d8" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartComponent;
