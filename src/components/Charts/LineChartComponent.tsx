import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiData } from '../../types/AiData'
import Heading from '../custom/Heading';

interface LineChartProps {
  data: AiData['response_times']['day_wise'];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  return (
    <>
      <Heading size="sm" className="col-start-1 my-4">
        Response Time Data:
      </Heading>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
