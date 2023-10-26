import React from "react";
import { connect } from "react-redux";
import { GPS, GPSState } from "@/stores/GPS/GPSTypes";
import { GlobalPath, GlobalPathState } from "@/stores/GlobalPath/GlobalPathTypes";
import Maps, { convertToLatLng } from "./components/Maps/Maps";

export interface MapsContainerProps extends GPSState, GlobalPathState {}

class MapsContainer extends React.PureComponent<MapsContainerProps> {

    render() {
        return (
            <Maps
                gpsLocation={this.props.gps.data.at(-1) || {}}
                gpsPath={this.props.gps.data.map(
                    (gpsCoordinates: GPS) => convertToLatLng(gpsCoordinates)
                )}
                globalPathLocation={this.props.globalPath.data.waypoints.at(-1) || {}}
                globalPathPath={this.props.globalPath.data.waypoints.map(
                    (waypoint: GlobalPath) => convertToLatLng(waypoint)
                )}
            />
        );
    }
}

const mapStateToProps = (state: any) => ({
    gps: state.gps,
    globalPath: state.globalPath
});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);
