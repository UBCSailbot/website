import React from 'react';
import { connect } from 'react-redux';
import LineChartComponent from './components/LineChart/LineChart';

export interface DashboardContainerProps {}

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {
  render() {

    const sampleData = [
      { exampleXKey: 1, exampleYKey: 200 },
      { exampleXKey: 2, exampleYKey: 300 },
    ];

    const xAxisKey = 'exampleXKey';
    const yAxisKey = 'exampleYKey';

    return (
      <div>
        <h1>Dashboard Page</h1>
        <LineChartComponent
          data={sampleData}
          xAxisKey={xAxisKey}
          yAxisKey={yAxisKey}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
