import React from 'react';
import { connect } from 'react-redux';
import UPlotLineChartComponent from './components/LineChart/UPlotLineChart';
import { GPS } from '@/stores/GPS/GPSTypes';
import { Batteries } from '@/stores/Batteries/BatteriesTypes';
import { WindSensors } from '@/stores/WindSensors/WindSensorsTypes';
import UPlotMultiLineChartComponent from './components/LineChart/UPlotMultiLineChart';
import SingleValueChart from './components/SingleValueChart/SingleValueChart';
import { Grid } from '@mui/material';

export interface DashboardContainerProps {
  gps: GPS[];
  batteries: Batteries[];
  windSensors: WindSensors[];
}

/*{
  to-do:
  1. react-hyrdation error https://nextjs.org/docs/messages/react-hydration-error
  2. double check totalTripDistance function and haversineDistance function
  3. double check haversineDistance calcuation with a source online
  4. modify heading font to be slightly smaller
  5. change font to match UPlot font
}*/

class DashboardContainer extends React.PureComponent<DashboardContainerProps> {
  render() {
    const { gps, batteries, windSensors } = this.props;

    const gpsChartData = [
      gps.data.map((data) => this._parseISOString(data.timestamp)),
      gps.data.map((data) => data.speed),
    ];

    const gpsDistanceData = [
      gps.data.map((data) => data.latitude),
      gps.data.map((data) => data.longitude),
      gps.data.map((data) => data.heading)
    ];

    const batteriesVoltageData = [
      batteries.data.map((data) => this._parseISOString(data.timestamp)),
      batteries.data.map((data) => data.batteries[0].voltage),
      batteries.data.map((data) => data.batteries[1].voltage),
    ];

    const batteriesCurrentData = [
      batteries.data.map((data) => this._parseISOString(data.timestamp)),
      batteries.data.map((data) => data.batteries[0].current),
      batteries.data.map((data) => data.batteries[1].current),
    ];

    const windSensorsSpeedData = [
      windSensors.data.map((data) => this._parseISOString(data.timestamp)),
      windSensors.data.map((data) => data.windSensors[0].speed),
      windSensors.data.map((data) => data.windSensors[1].speed),
    ];

    const totalTripDistance = this.computeTotalTripDistance(gpsDistanceData[0], gpsDistanceData[1]);

    return (
      <div>
        <Grid
          container spacing={0}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          >
          <Grid container justifyContent="center" item xs={6}>
            <SingleValueChart title="Distance" data={totalTripDistance} unit="km" />
          </Grid>
          <Grid container justifyContent="center" item xs={6}>
            <SingleValueChart title="Heading" data={gpsDistanceData[2][gpsDistanceData[2].length-1]} unit="°"/>
          </Grid>
        </Grid>
        <UPlotLineChartComponent
          data={gpsChartData}
          label='Boat Speed'
          unit='km/hr'
        />
        <UPlotMultiLineChartComponent
          data={batteriesVoltageData}
          labelOne='Battery 1 Voltage'
          labelTwo='Battery 2 Voltage'
          unit='V'
        />
        <UPlotMultiLineChartComponent
          data={batteriesCurrentData}
          labelOne='Battery 1 Current'
          labelTwo='Battery 2 Current'
          unit='A'
        />
        <UPlotMultiLineChartComponent
          data={windSensorsSpeedData}
          labelOne='Wind Sensor 1 Speed'
          labelTwo='Wind Sensor 2 Speed'
          unit='m/s'
        />
      </div>
    );
  }

  _parseISOString(s: string) {
    return Math.floor(Date.parse(s) / 1000); // Converts to seconds
  }

  haversineDistance(lat1: number, long1: number, lat2: number, long2: number) {

    function toRadians(angle: number): number{
      return angle * Math.PI / 180
    }

    const earthRadius = 6571 // in km

    var delta_lat = lat2-lat1
    var delta_lat_rad = toRadians(delta_lat)
    var delta_long = long2-long1
    var delta_long_rad = toRadians(delta_long)

    var a = (Math.sin(delta_lat_rad/2) * Math.sin(delta_lat_rad/2))
    + (Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2))
    * Math.sin(delta_long_rad/2)
    * Math.sin(delta_long_rad/2))
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var distance = earthRadius * c;

    return distance
  }

  computeTotalTripDistance(latitude: number[], longitude: number[]) {
    if(latitude.length != longitude.length){
      return console.error;
    }

    var totalDistance = 0;

    for(let i = 0; i < --latitude.length; i++){
        totalDistance += this.haversineDistance(latitude[i], longitude[i], latitude[i++], longitude[i++])
    }

    return totalDistance.toFixed(2);
  }
}

const mapStateToProps = (state: any) => ({
  gps: state.gps,
  batteries: state.batteries,
  windSensors: state.windSensors,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
