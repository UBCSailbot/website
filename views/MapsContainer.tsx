import React from "react";
import { connect } from "react-redux";
import { GPSCoordinate, GPSState } from "@/stores/GPS/GPSTypes";
import Maps, { convertToLatLng } from "./components/Maps/Maps";

export interface MapsContainerProps extends GPSState {}

class MapsContainer extends React.PureComponent<MapsContainerProps> {

    render() {
        return (
            <Maps
                gpsLocation={this.props.gps.data.at(-1) || {}}
                gpsPath={this.props.gps.data.map(
                    (gpsCoordinate: GPSCoordinate) => convertToLatLng(gpsCoordinate)
                )}
            />
        );
    }
}

const mapStateToProps = (state: any) => ({
    gps: state.gps,
});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);
