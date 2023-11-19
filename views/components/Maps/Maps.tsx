import React from 'react';
/* Leaflet related imports */
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Polyline,
    LayersControl,
    LayerGroup,
    Polygon,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from 'leaflet';
import 'leaflet-geometryutil';
import { GPS } from "@/stores/GPS/GPSTypes";
import { AISShip } from "@/stores/AISShips/AISShipsTypes";

export interface IMapsProps {
    gpsLocation: GPS | undefined,
    gpsPath: L.LatLngExpression[],
    globalPath: L.LatLngExpression[],
    localPath: L.LatLngExpression[],
    aisShips: AISShip[]
}

export interface IMapsState {
    map: L.Map | null
}

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
        ele.push(`${key}: ${obj[key]}`, <br key={i} />)
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
export const convertToLatLng = (obj: any): L.LatLngExpression => {
    return L.latLng(obj.latitude, obj.longitude)
}

export default class Maps extends React.Component<IMapsProps, IMapsState> {
    readonly state: IMapsState = {
        map: null,
    };

    setMapRef = (map: L.Map) => {
        this.setState((state) => ({ ...state, map: map }));
    }

    rotatePoint = (point: L.LatLngExpression, angle: number, axis: L.LatLngExpression) => {
        const map = this.state.map;
        if (map == null) {
            return point;
        }
        return L.GeometryUtil.rotatePoint(
            map,
            point,
            angle,
            axis
        );
    };

    renderShips = () => {
        const r_earth = 6378000; // radius of the Earth in meters
        const pi = Math.PI;
        const scaleFactor = 1; // scale up the box size by 8 times (since the original size of the rectangles were very small and hard to see)

        return this.props.aisShips.map((ship, index) => {
            const { latitude, longitude, width, length, cog } = ship;

            // Assuming that length and width are in meters
            const dy = (length / 2) * scaleFactor; // NOTE: The 2.1 and 1.6 are tentative (they were both = 2 at first), but this change made the rectangles look a bit nicer and proportionate
            const dx = (width / 2) * scaleFactor;

            // Calculate the top left and bottom right coordinates of the rectangle
            const new_latitude_north = latitude + (dy / r_earth) * (180 / pi);
            const new_longitude_west = longitude - (dx / r_earth) * (180 / pi) / Math.cos(latitude * pi / 180);
            const new_latitude_south = latitude - (dy / r_earth) * (180 / pi);
            const new_longitude_east = longitude + (dx / r_earth) * (180 / pi) / Math.cos(latitude * pi / 180);

            const topLeftRotated = this.rotatePoint(L.latLng(new_latitude_north, new_longitude_west), cog, L.latLng(latitude, longitude));
            const topRightRotated= this.rotatePoint(L .latLng(new_latitude_north, new_longitude_east), cog, L.latLng(latitude, longitude));
            const bottomLeftRotated = this.rotatePoint(L.latLng(new_latitude_south, new_longitude_west), cog, L.latLng(latitude, longitude));
            const bottomRightRotated = this.rotatePoint(L.latLng(new_latitude_south, new_longitude_east), cog, L.latLng(latitude, longitude));

            const bounds: L.LatLngExpression[] = [
                topLeftRotated,
                topRightRotated,
                bottomRightRotated,
                bottomLeftRotated
            ]

            // Rectangle options
            const redOptions = { color: 'red' };

            return (
                <Polygon key={index} positions={bounds} pathOptions={redOptions}>
                    <Popup>
                        {printObjectInfo(ship)}
                    </Popup>
                </Polygon>
            );
        });
    };


    render() {
        return (
            <MapContainer
                center={convertToLatLng(this.props.gpsLocation)}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "100vh", width: "100wh" }}
                ref={this.setMapRef}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="bottomleft">
                    <LayersControl.Overlay name="AIS Ships" checked>
                        <LayerGroup>
                            {this.renderShips()}
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Local Path" checked>
                        <Polyline pathOptions={{ color: 'red' }} positions={this.props.localPath} />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Global Path" checked>
                        <Polyline pathOptions={{ color: 'black', opacity: 0.25 }} positions={this.props.globalPath} />
                    </LayersControl.Overlay>
                </LayersControl>
                <Marker position={convertToLatLng(this.props.gpsLocation)}>
                    <Popup>
                        {printObjectInfo(this.props.gpsLocation)}
                    </Popup>
                </Marker>
                <Polyline pathOptions={{ color: 'black' }} positions={this.props.gpsPath} />
            </MapContainer>
        );
    }
}
