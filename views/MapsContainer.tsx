import React from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { GPS, GPSState } from "@/stores/GPS/GPSTypes";
import { GlobalPath, GlobalPathState } from "@/stores/GlobalPath/GlobalPathTypes";
import { AISShipsState } from "@/stores/AISShips/AISShipsTypes";
import { LocalPath, LocalPathState } from "@/stores/LocalPath/LocalPathTypes";
=======
import { GPSCoordinate, GPSState } from "@/stores/GPS/GPSTypes";
import { AISShipsState } from "@/stores/AISShips/AISShipsTypes";
>>>>>>> a36fab5 (Added export aisShips)
import Maps, { convertToLatLng } from "./components/Maps/Maps";

export interface MapsContainerProps {
    gps: GPSState,
<<<<<<< HEAD
    globalPath: GlobalPathState,
    aisShips: AISShipsState,
    localPath: LocalPathState
=======
    aisShips: AISShipsState
>>>>>>> a36fab5 (Added export aisShips)
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
                localPath={this.props.localPath.data.waypoints.map(
                    (waypoint: LocalPath) => convertToLatLng(waypoint)
                )}
                aisShips={this.props.aisShips.data.ships}
            />
        );
    }
}

const mapStateToProps = (state: any) => ({
    gps: state.gps,
<<<<<<< HEAD
    globalPath: state.globalPath,
    aisShips: state.aisShips,
    localPath: state.localPath
=======
    aisShips: state.aisShips,
>>>>>>> 38c7b55 (Visualizing AISShips on Maps)
});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);
