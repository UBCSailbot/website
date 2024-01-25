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
  windSensorsData: WindSensors[]
}

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {

  state = {
    showBattery1Voltage: true,
    showBattery2Voltage: true,
    showBattery1Current: true,
    showBattery2Current: true,
    showWindSensors1Speed: true,
    showWindSensors2Speed: true
  }

  render() {

    const { gps, batteries, windSensors } = this.props;

    const gpsChartData = gps.data.map(gpsPoint => ({
      timestamp: gpsPoint.timestamp,
      speed: gpsPoint.speed
    }));

   const batteriesChartDataVoltage = batteries.data.map((batteriesPoint) => ({
      timestamp: batteriesPoint.timestamp,
      battery1Voltage: batteriesPoint.batteries[0].voltage,
      battery2Voltage: batteriesPoint.batteries[1].voltage
    }));

    const batteriesChartDataCurrent = batteries.data.map((batteriesPoint) => ({
      timestamp: batteriesPoint.timestamp,
      battery1Current: batteriesPoint.batteries[0].current,
      Battery2Current: batteriesPoint.batteries[1].current
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
          xAxisKey="timestamp"
          yAxisKey="speed"
        />

        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.showBattery1Voltage}
              onChange={() => this.setState({ showBattery1Voltage: !this.state.showBattery1Voltage })}
            /> Show Battery 1 Voltage
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.showBattery2Voltage}
              onChange={() => this.setState({ showBattery2Voltage: !this.state.showBattery2Voltage })}
            /> Show Battery 2 Voltage
          </label>
        </div>
        <MultiLineChartComponent
          data={batteriesChartDataVoltage}
          xAxisKey="timestamp"
          yAxisKey1="battery1Voltage"
          yAxisKey2="battery2Voltage"
          showYAxisKey1={this.state.showBattery1Voltage}
          showYAxisKey2={this.state.showBattery2Voltage}
        />

        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.showBattery1Current}
              onChange={() => this.setState({ showBattery1Current: !this.state.showBattery1Current })}
            /> Show Battery 1 Current
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.showBattery2Current}
              onChange={() => this.setState({ showBattery2Current: !this.state.showBattery2Current })}
            /> Show Battery 2 Current
          </label>
        </div>
        <MultiLineChartComponent
          data={batteriesChartDataCurrent}
          xAxisKey="timestamp"
          yAxisKey1="battery1Current"
          yAxisKey2="battery2Current"
          showYAxisKey1={this.state.showBattery1Current}
          showYAxisKey2={this.state.showBattery2Current}
        />
            <div>
      <label>
        <input
          type="checkbox"
          checked={this.state.showWindSensors1Speed}
          onChange={() => this.setState({ showWindSensors1Speed: !this.state.showWindSensors1Speed })}
        /> Show Wind Sensor 1 Speed
      </label>
      <label>
        <input
          type="checkbox"
          checked={this.state.showWindSensors2Speed}
          onChange={() => this.setState({ showWindSensors2Speed: !this.state.showWindSensors2Speed })}
        /> Show Wind Sensor 2 Speed
      </label>
    </div>
        <MultiLineChartComponent
          data={windSensorsChartData}
          xAxisKey="timestamp"
          yAxisKey1="windSensor1Speed"
          yAxisKey2="windSensor2Speed"
          showYAxisKey1={this.state.showWindSensors1Speed}
          showYAxisKey2={this.state.showWindSensors2Speed}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gps: state.gps,
  batteries: state.batteries,
  windSensors: state.windSensors
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
