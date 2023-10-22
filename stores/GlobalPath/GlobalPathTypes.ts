export interface GlobalPathCoordinate {
    lat: Number,
    lng: Number
}
export type GlobalPathCoordinates = GlobalPathCoordinate[]
export interface GlobalPathDatabaseCoordinate{
    latitude: Number,
    longitude: Number
}
export interface GlobalPathState {
    globalpath: GlobalPathCoordinates
    error?: any
}
