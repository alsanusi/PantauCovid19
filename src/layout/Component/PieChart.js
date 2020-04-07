import React from 'react';
import {
  PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend
} from 'recharts';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const COLORS = ['#E74C3C', '#28B463', '#17202A'];

export default function MapChart({...props}) {
    const {t} = useTranslation();

return (
    <div>
        <ResponsiveContainer height={200}>
        <PieChart>
            <Pie dataKey="value" startAngle={180} endAngle={0} data={props.data} cx={140} cy={120} fill="#8884d8" label>
            {
                props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <Tooltip />
            <Legend height={40}/>
        </PieChart>
        </ResponsiveContainer>
        <Typography variant="caption">
            {t("mapNote")}
        </Typography>
    </div>
);
}