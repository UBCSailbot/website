export type WayPoint = {
    latitude: Number,
    longitude: Number
}

export type GlobalPath = {
    GlobalPath: WayPoint[];
}

export type GlobalPathState = {
    data: GlobalPath;
    error?: any;
}
