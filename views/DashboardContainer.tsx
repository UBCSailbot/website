import React from 'react';
import { connect } from 'react-redux';

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
