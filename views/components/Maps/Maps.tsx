import React from "react";
/* Leaflet related imports */
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Polyline,
    LayersControl,
    LayerGroup,
    Circle
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngExpression, latLng } from "leaflet";
<<<<<<< HEAD
import { GPS } from "@/stores/GPS/GPSTypes";
import { AISShip } from "@/stores/AISShips/AISShipsTypes";

export interface IMapsProps {
    gpsLocation: GPS,
    gpsPath: LatLngExpression[],
    globalPath: LatLngExpression[],
    localPath: LatLngExpression[],
    aisShips: AISShip[]
=======
import { GPSCoordinate } from "@/stores/GPS/GPSTypes";
import { AISShip } from "@/stores/AISShips/AISShipsTypes";

export interface IMapsProps {
    gpsLocation: GPSCoordinate,
    gpsPath: LatLngExpression[]
    aisShips: AISShip[];
>>>>>>> 38c7b55 (Visualizing AISShips on Maps)
}

export interface IMapsState {}

/**
 * Converts an object's properties into digestible text.
 * For example, given an object {a: 1, b: 2}, the function will output the text:
 * """
 *  a: 1
 *  b: 1
 * """
 *
 * @param obj - the object
 * @returns an array of the pretty printed objects
 */
export const printObjectInfo = (obj: any): any[] => {
    let ele: any[] = [];
    Object.keys(obj).forEach((key, i) => {
        ele.push(`${key}: ${obj[key]}`, <br key={i}/>)
    })
    return ele;
}

/**
 * Converts an object with latitude and longitude fields into an array.
 * This is conversion is necessary for Leaflet.
 *
 * @param obj - object with fields latitude and longitude
 * @returns an array containing [latitude, longitude]
 */
export const convertToLatLng = (obj: any): LatLngExpression => {
    return latLng(obj.latitude, obj.longitude)
}

export default class Maps extends React.Component<IMapsProps, IMapsState> {

    renderShips = () => {
        return this.props.aisShips.map((ship, index) => {
            return (
                <Circle
                    key={index}
                    center={[ship.latitude, ship.longitude]}
<<<<<<< HEAD
                    radius={50}
=======
                    radius={500}
>>>>>>> 38c7b55 (Visualizing AISShips on Maps)
                    pathOptions={{ color: 'red' }}>
                    <Popup>
                        {printObjectInfo(ship)}
                    </Popup>
                </Circle>
            );
        });
    }

    render() {
        return (
            <MapContainer center={convertToLatLng(this.props.gpsLocation)} zoom={13} scrollWheelZoom={true} style={{height: "100vh", width: "100wh"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="bottomleft">
                    <LayersControl.Overlay name="AIS Ships" checked>
                        <LayerGroup>
                            {this.renderShips()}
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Local Path" checked>
                        <Polyline pathOptions={{ color: 'red' }} positions={[this.props.localPath]} />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Global Path" checked>
                        <Polyline pathOptions={{ color: 'black', opacity: 0.25  }} positions={[this.props.globalPath]} />
                    </LayersControl.Overlay>
                </LayersControl>
                <Marker position={convertToLatLng(this.props.gpsLocation)}>
                    <Popup>
                        {printObjectInfo(this.props.gpsLocation)}
                    </Popup>
                </Marker>
                <Polyline pathOptions={{ color: 'black' }} positions={this.props.gpsPath} />
        </MapContainer>
        )
    }
}
