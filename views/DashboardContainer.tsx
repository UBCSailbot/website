import React from 'react';
import { connect } from 'react-redux';
import LineChartComponent from './components/LineChart/LineChart';
import MultiLineChartComponent from './components/LineChart/MultiLineChart';
import { GPS } from '@/stores/GPS/GPSTypes';
import { Batteries } from '@/stores/Batteries/BatteriesTypes';
import { WindSensors } from '@/stores/WindSensors/WindSensorsTypes';

export interface DashboardContainerProps {
  gpsData: GPS[]
  batteriesData: Batteries[]
  // windSensorsData: WindSensors[]
}

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {
  render() {

    const { gpsData, batteriesData, windSensorsData } = this.props;

    const GPSchartData = gpsData.map(gpsPoint => ({
      timestamp: gpsPoint.timestamp,
      speed: gpsPoint.speed
    }));

   const batteriesChartData_Voltage = batteriesData.map((batteriesPoint) => ({
      timestamp: batteriesPoint.timestamp,
      battery1Voltage: batteriesPoint.batteries[0].voltage,
      battery2Voltage: batteriesPoint.batteries[1].voltage
    }));

    const batteriesChartData_Current = batteriesData.map((batteriesPoint) => ({
      timestamp: batteriesPoint.timestamp,
      battery1Current: batteriesPoint.batteries[0].current,
      Battery2Current: batteriesPoint.batteries[1].current
    }));
/*
    const windSensorsChartData = windSensorsData.map((windSensorsPoint) => ({
      timestamp: windSensorsPoint.timestamp,
      windSensor1Speed: windSensorsPoint.windSensors[0].speed,
      windSensor22Speed: windSensorsPoint.windSensors[1].speed,
    }));
*/
    return (
      <div>
        <h1>Dashboard Page</h1>
        <LineChartComponent
          data={GPSchartData}
          xAxisKey="timestamp"
          yAxisKey="speed"
        />
        <MultiLineChartComponent
          data={batteriesChartData_Voltage}
          xAxisKey="timestamp"
          yAxisKey1="battery1Voltage"
          yAxisKey2="battery2Voltage"
        />
        <MultiLineChartComponent
          data={batteriesChartData_Current}
          xAxisKey="timestamp"
          yAxisKey1="battery1Current"
          yAxisKey2="battery2Current"
        />
        <MultiLineChartComponent
          data={[]}
          xAxisKey="timestamp"
          yAxisKey1="windSensor1Speed"
          yAxisKey2="windSensor2Speed"
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gpsData: state.gps.data,
  batteriesData: state.batteries.data
  // windSensorsData: state.windSensors.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
