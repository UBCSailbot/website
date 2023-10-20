export interface GPSCoordinate {
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
}
export type GPSCoordinates = GPSCoordinate[]
export interface GPSState {
    data: GPSCoordinates;
    error?: any;
}
