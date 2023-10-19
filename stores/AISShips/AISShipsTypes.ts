export type AISShipCoordinate = {
    id: Number,
    latitude: Number,
    longitude: Number,
    speed: Number,
    heading: Number
}

export type AISShipsCoordinates = AISShipCoordinate[]

export type AISShipsState = {
    aisships: {
        ships: AISShipsCoordinates
    };
    error: any;
};
