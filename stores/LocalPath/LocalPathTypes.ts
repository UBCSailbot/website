export type WayPoint = {
    latitude: Number,
    longitude: Number
}

export type LocalPath = {
    waypoints: WayPoint[];
}

export type LocalPathState = {
    data: LocalPath;
    error?: any;
}
