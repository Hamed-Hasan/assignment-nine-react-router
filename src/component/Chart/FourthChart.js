import React from 'react';
import { Bar, BarChart, CartesianGrid, Label, LabelList, Tooltip, XAxis, YAxis } from 'recharts';

const FourthChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
           <BarChart
  width={560}
  height={250}
  data={data}
  margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month">
    <Label value="month" offset={0} position="insideBottom" />
  </XAxis>
  <Tooltip />
  <YAxis label={{ value: 'Investment', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
  <Bar dataKey="investment" fill="#8884d8">
    <LabelList dataKey="revenue" position="insideTop" angle="45"  />
  </Bar>
  <Bar dataKey="sell" fill="#82ca9d">
    <LabelList dataKey="revenue" position="top" />
  </Bar>
</BarChart>
        </div>
    );
};

export default FourthChart;