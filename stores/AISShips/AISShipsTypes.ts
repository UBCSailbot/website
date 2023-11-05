export type AISShip = {
    id: Number,
    latitude: Number,
    longitude: Number,
    cog: Number,
    sog: Number,
    width: Number,
    length: Number
}

export type AISShips = {
    ships: AISShip[];
}

export type AISShipsState = {
    data: AISShips;
    error?: any;
};
