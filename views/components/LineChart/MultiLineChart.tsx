import React from 'react';
<<<<<<< HEAD
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
=======
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
>>>>>>> 5275ad8 (LineCharts for GPS, Batteries, and WindSensor Data)

export interface MultiLineChartProps {
  data: any[];
  xAxisKey: string;
  yAxisKey1: string;
  yAxisKey2: string;
}

export interface MultiLineChartState {}

<<<<<<< HEAD
export default class MultiLineChartComponent extends React.Component<
  MultiLineChartProps,
  MultiLineChartState
> {
  render() {
    const { data, xAxisKey, yAxisKey1, yAxisKey2 } = this.props;
    return (
      <ResponsiveContainer width='100%' height={250}>
=======
export default class MultiLineChartComponent extends React.Component<MultiLineChartProps, MultiLineChartState> {
  render() {
    const { data, xAxisKey, yAxisKey1, yAxisKey2 } = this.props;
    return (
      <ResponsiveContainer width="100%" height={250}>
>>>>>>> 5275ad8 (LineCharts for GPS, Batteries, and WindSensor Data)
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
<<<<<<< HEAD
          <CartesianGrid strokeDasharray='3 3' />
=======
          <CartesianGrid strokeDasharray="3 3" />
>>>>>>> 5275ad8 (LineCharts for GPS, Batteries, and WindSensor Data)
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
<<<<<<< HEAD
          <Line type='monotone' dataKey={yAxisKey1} stroke='#8884d8' />
          <Line type='monotone' dataKey={yAxisKey2} stroke='#82ca9d' />
=======
          <Line type="monotone" dataKey={yAxisKey1} stroke="#8884d8" />
          <Line type="monotone" dataKey={yAxisKey2} stroke="#82ca9d" />
>>>>>>> 5275ad8 (LineCharts for GPS, Batteries, and WindSensor Data)
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
