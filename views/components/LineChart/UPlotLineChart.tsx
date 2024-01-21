import React from 'react';
import uPlot from 'uplot';
import UplotReact from 'uplot-react';
import 'uplot/dist/uPlot.min.css';

export interface IUPlotLineChartProps {
  data: any[];
  label: string;
  unit: string;
}

export interface IUPlotLineChartState {
  chart: uPlot;
  options: uPlot.Options;
}

export default class UPlotLineChartComponent extends React.Component<
  IUPlotLineChartProps,
  IUPlotLineChartState
> {
  readonly state: IUPlotLineChartState = {
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
            show: true,
            spanGaps: false,
            label: this.props.label,
            value: (self, rawValue) => {
              if (!rawValue) {
                return `-- ${this.props.unit}`;
              }
              return rawValue?.toFixed(2) + ` ${this.props.unit}`;
            },
              stroke: "red",
              width: 1,
              band: true,
          }
      ],
    }
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