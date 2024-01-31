import React from 'react';
import { connect } from 'react-redux';
import LineChartComponent from './components/LineChart/LineChart';
import MultiLineChartComponent from './components/LineChart/MultiLineChart';
import UPlotLineChartComponent from './components/LineChart/UPlotLineChart';
import { GPS } from '@/stores/GPS/GPSTypes';
import { Batteries } from '@/stores/Batteries/BatteriesTypes';
import { WindSensors } from '@/stores/WindSensors/WindSensorsTypes';
import UPlotMultiLineChartComponent from './components/LineChart/UPlotMultiLineChart';

export interface DashboardContainerProps {
  gps: GPS[];
  batteries: Batteries[];
  windSensors: WindSensors[];
}

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {
  render() {
    const { gps, batteries, windSensors } = this.props;

    const gpsChartData = gps.data.map((gpsPoint) => ({
      timestamp: gpsPoint.timestamp,
      speed: gpsPoint.speed,
    }));

    const batteriesChartDataVoltage = batteries.data.map((batteriesPoint) => ({
      timestamp: batteriesPoint.timestamp,
      battery1Voltage: batteriesPoint.batteries[0].voltage,
      battery2Voltage: batteriesPoint.batteries[1].voltage,
    }));

    const batteriesChartDataCurrent = batteries.data.map((batteriesPoint) => ({
      timestamp: batteriesPoint.timestamp,
      battery1Current: batteriesPoint.batteries[0].current,
      Battery2Current: batteriesPoint.batteries[1].current,
    }));

    const windSensorsChartData = windSensors.data.map((windSensorsPoint) => ({
      timestamp: windSensorsPoint.timestamp,
      windSensor1Speed: windSensorsPoint.windSensors[0].speed,
      windSensor22Speed: windSensorsPoint.windSensors[1].speed,
    }));

    return (
      <div>
        <h1>Dashboard Page</h1>
        { /* [[x-axis], [y-axis 1], [y-axis 2] ...] */}
        <UPlotLineChartComponent data={[this.props.gps.data.map((data: any) => this._parseISOString(data.timestamp)), this.props.gps.data.map((data: any) => data.speed)]} label='GPS' unit='km/hr'/>
        <UPlotMultiLineChartComponent data={[[1,2,3,4,5], [2,1,2,5,6], [1,2,3,4,5]]} labelOne='label1' labelTwo='label2' unit='km/hr'/>
        <LineChartComponent
          data={gpsChartData}
          xAxisKey='timestamp'
          yAxisKey='speed'
        />
        <MultiLineChartComponent
          data={batteriesChartDataVoltage}
          xAxisKey='timestamp'
          yAxisKey1='battery1Voltage'
          yAxisKey2='battery2Voltage'
        />
        <MultiLineChartComponent
          data={batteriesChartDataCurrent}
          xAxisKey='timestamp'
          yAxisKey1='battery1Current'
          yAxisKey2='battery2Current'
        />
        <MultiLineChartComponent
          data={windSensorsChartData}
          xAxisKey='timestamp'
          yAxisKey1='windSensor1Speed'
          yAxisKey2='windSensor2Speed'
        />
      </div>
    );
  }

  _parseISOString(s: string) {
    return Math.floor(Date.parse(s) / 1000) // Converts to seconds
  }
}

const mapStateToProps = (state: any) => ({
  gps: state.gps,
  batteries: state.batteries,
  windSensors: state.windSensors,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
