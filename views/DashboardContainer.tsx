import React from 'react';
import { connect } from 'react-redux';
import LineChartComponent from './components/LineChart/LineChart';
import MultiLineChartComponent from './components/LineChart/MultiLineChart';
import { GPS } from '@/stores/GPS/GPSTypes';
import { Batteries } from '@/stores/Batteries/BatteriesTypes';
import { WindSensors } from '@/stores/WindSensors/WindSensorsTypes';

export interface DashboardContainerProps {}

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {
  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
