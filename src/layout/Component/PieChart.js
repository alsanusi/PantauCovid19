import React from 'react';
import {
  PieChart, Pie, ResponsiveContainer, Cell, Tooltip
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 }, 
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function MapChart() {

return (
    <ResponsiveContainer height={200}>
      <PieChart>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={140} cy={120} fill="#8884d8" label>
        {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
);
}