export type AISShip = {
    id: Number,
    latitude: Number,
    longitude: Number,
    speed: Number,
    heading: Number
}

export type AISShips = {
    ships: AISShip[];
}

export type AISShipsState = {
    data: AISShips;
    error?: any;
};
