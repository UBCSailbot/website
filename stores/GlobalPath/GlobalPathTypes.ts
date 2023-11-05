export type WayPoint = {
    latitude: Number,
    longitude: Number
}

export type GlobalPath = {
    waypoints: WayPoint[];
}

export type GlobalPathState = {
    data: GlobalPath;
    error?: any;
}
