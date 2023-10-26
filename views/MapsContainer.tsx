import React from "react";
import { connect } from "react-redux";
import { GPSCoordinate, GPSState } from "@/stores/GPS/GPSTypes";
import { AISShipsState } from "@/stores/AISShips/AISShipsTypes";
import Maps, { convertToLatLng } from "./components/Maps/Maps";

export interface MapsContainerProps {
    gps: GPSState,
    aisShips: AISShipsState
}

class MapsContainer extends React.PureComponent<MapsContainerProps> {

    render() {
        return (
            <Maps
                gpsLocation={this.props.gps.data.at(-1) || {}}
                gpsPath={this.props.gps.data.map(
                    (gpsCoordinate: GPSCoordinate) => convertToLatLng(gpsCoordinate)
                )}
                aisShips={this.props.aisShips.data.ships}
            />
        );
    }
}

const mapStateToProps = (state: any) => ({
    gps: state.gps,
    aisShips: state.aisShips,
});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);
