import React from 'react';
import { connect } from 'react-redux';
import LineChartComponent from './components/LineChart/LineChart';
import MultiLineChartComponent from './components/LineChart/MultiLineChart';
import { GPS } from '@/stores/GPS/GPSTypes';
import { Batteries } from '@/stores/Batteries/BatteriesTypes';
import { WindSensors } from '@/stores/WindSensors/WindSensorsTypes';

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
        <LineChartComponent
          data={gpsChartData}
          xAxisKey='timestamp'
          yAxisKey='speed'
          unit='km/h'
        />
        <MultiLineChartComponent
          data={batteriesChartDataVoltage}
          xAxisKey='timestamp'
          yAxisKey1='battery1Voltage'
          yAxisKey2='battery2Voltage'
          unit='V'
        />
        <MultiLineChartComponent
          data={batteriesChartDataCurrent}
          xAxisKey='timestamp'
          yAxisKey1='battery1Current'
          yAxisKey2='battery2Current'
          unit='A'
        />
        <MultiLineChartComponent
          data={windSensorsChartData}
          xAxisKey='timestamp'
          yAxisKey1='windSensor1Speed'
          yAxisKey2='windSensor2Speed'
          unit='km/h'
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gps: state.gps,
  batteries: state.batteries,
  windSensors: state.windSensors,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
