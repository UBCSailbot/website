import React from "react";
import { connect } from "react-redux";
import { GPS, GPSState } from "@/stores/GPS/GPSTypes";
import { GlobalPath, GlobalPathState } from "@/stores/GlobalPath/GlobalPathTypes";
import { AISShipsState } from "@/stores/AISShips/AISShipsTypes";
import Maps, { convertToLatLng } from "./components/Maps/Maps";

export interface MapsContainerProps {
    gps: GPSState,
    aisShips: AISShipsState,
    globalpath: GlobalPathState
}

class MapsContainer extends React.PureComponent<MapsContainerProps> {

    render() {
        return (
            <Maps
                gpsLocation={this.props.gps.data.at(-1) || {}}
                gpsPath={this.props.gps.data.map(
                    (gpsPoint: GPS) => convertToLatLng(gpsPoint)
                )}
                globalPath={this.props.globalPath.data.waypoints.map(
                    (waypoint: GlobalPath) => convertToLatLng(waypoint)
                )}
                aisShips={this.props.aisShips.data.ships}
            />
        );
    }
}

const mapStateToProps = (state: any) => ({
    gps: state.gps,
    globalPath: state.globalPath,
    aisShips: state.aisShips,
});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);
