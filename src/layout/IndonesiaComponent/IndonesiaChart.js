import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 340,
      borderTop: `4px solid #4880FF`
    },
    padding: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(10),
    }
  }));

const data = [
  {
    name: 'DKI Jakarta', confirmed: 500, recovered: 200, death: 10
  },
  {
    name: 'Sulawesi Selatan', confirmed: 500, recovered: 300, death: 5
  },
  {
    name: 'Kalimantan', confirmed: 800, recovered: 500, death: 0
  },
];

export default function Example() {
    const classes = useStyles();
    
    return (
    <div className={classes.padding}>
        <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "left"}}>
            {"Current Indonesia Status Based on Province."}
        </Typography>
        <br/>
        <ResponsiveContainer height={300}>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 20, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="confirmed" stackId="a" fill="#8884d8" />
            <Bar dataKey="recovered" stackId="a" fill="#82ca9d" />
            <Bar dataKey="death" fill="#ffc658" />
        </BarChart>
        </ResponsiveContainer>
    </div>
    );
}
