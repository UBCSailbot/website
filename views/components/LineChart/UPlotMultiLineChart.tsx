import React from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';

export interface IUPlotMultiLineChartProps {
  data: any[];
  labelOne: string;
  labelTwo: string;
  unit: string;
}

export interface IUPlotMultiLineChartState {
  chart: uPlot;
  options: uPlot.Options;
}

export default class UPlotMultiLineChartComponent extends React.Component<
  IUPlotMultiLineChartProps,
  IUPlotMultiLineChartState
> {
  readonly state: IUPlotMultiLineChartState = {
    chart: null,
    options: {
      width: window.innerWidth,
      height: 250,
      scales: {
        x: {
          time: true,
        },
        y: {},
      },
      axes: [{}],
      series: [
        {},
        {
          show: true,
          spanGaps: false,
          label: this.props.labelOne,
          value: (self, rawValue) => {
            if (!rawValue) {
              return `-- ${this.props.unit}`;
            }
            return rawValue?.toFixed(2) + ` ${this.props.unit}`;
          },
          stroke: 'red',
          width: 1,
          band: true,
        },
        {
          show: true,
          spanGaps: false,
          label: this.props.labelTwo,
          value: (self, rawValue) => {
            if (!rawValue) {
              return `-- ${this.props.unit}`;
            }
            return rawValue?.toFixed(2) + ` ${this.props.unit}`;
          },
          stroke: 'green',
          width: 1,
          band: true,
        },
      ],
    },
  };

  /**
   * Sets the chart reference in the component's state.
   *
   * @param chart - The chart instance to be stored in the component's state.
   *              This instance is used for various chart operations within the component.
   */
  setChartRef = (chart: any) => {
    this.setState((state) => ({ ...state, chart: chart }));
  };

  componentDidMount() {
    window.addEventListener('resize', function() {
       this.state.chart.setSize({
            width: window.innerWidth - 100,
            height: window.innerHeight - 200,
       });
    });
  }

  render() {
    return (
      <UplotReact
        options={this.state.options}
        data={this.props.data}
        onCreate={this.setChartRef}
      />
    );
  }
}
