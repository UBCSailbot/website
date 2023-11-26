import React from 'react';
import { connect } from 'react-redux';
import LineChartComponent from './components/LineChart/LineChart';
import { GPS, GPSState } from '@/stores/GPS/GPSTypes';

export interface DashboardContainerProps {
  gpsData: GPS[]
}

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {
  render() {

    const { gpsData } = this.props;
    const chartData = gpsData.map(gpsPoint => ({
      timestamp: gpsPoint.timestamp,
      speed: gpsPoint.speed
    }));

    return (
      <div>
        <h1>Dashboard Page</h1>
        <LineChartComponent
          data={chartData}
          xAxisKey="timestamp"
          yAxisKey="speed"
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gpsData: state.gps.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
