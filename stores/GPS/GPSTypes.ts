export interface GPSCoordinate {
    lat: Number,
    lng: Number,
    speed: Number,
    heading: Number
}
export type GPSCoordinates = GPSCoordinate[]
export interface GPSDatabaseCoordinate {
    latitude: Number,
    longitude: Number,
    speed: Number,
    heading: Number
}
export interface GPSState {
    gps: GPSCoordinates
    error: any 
}
