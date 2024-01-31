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
        width: 800,
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
                // initial toggled state (optional)
                show: true,
                spanGaps: false,
                // in-legend display
                label: this.props.labelOne,
                value: (self: any, rawValue: any) => {
                  if (!rawValue) {
                    return `${this.props.unit} --`;
                  }
                  return `${this.props.unit} ` + rawValue?.toFixed(2);
                },
                // series style
                stroke: "red",
                width: 1,
                band: true,
            },
            {
              show: true,
              spanGaps: false,
              label: this.props.labelTwo,
              value: (self: any, rawValue: any) => {
                if (!rawValue) {
                  return `${this.props.unit} --`;
                }
                return `${this.props.unit} ` + rawValue?.toFixed(2);
              },
              stroke: "green",
              width: 1,
              band: true,
            },
        ],
    }
  }

  /**
   * Sets the chart reference in the component's state.
   *
   * @param chart - The chart instance to be stored in the component's state.
   *              This instance is used for various chart operations within the component.
   */
  setChartRef = (chart: any) => {
    this.setState((state) => ({ ...state, chart: chart }));
  };

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
