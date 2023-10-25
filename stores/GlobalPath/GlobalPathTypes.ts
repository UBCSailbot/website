export type WayPoint = {
    latitude: Number,
    longitude: Number
}

export type WayPoints = {
    waypoints: WayPoint[];
}

export type GlobalPathState = {
    data: WayPoints;
    error?: any;
}
