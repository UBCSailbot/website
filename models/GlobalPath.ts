import mongoose from "mongoose";

interface WayPoint extends mongoose.Document {
    latitude: mongoose.Decimal128,
    longitude: mongoose.Decimal128
}

export interface GlobalPath extends mongoose.Document {
    waypoints: WayPoint[]
}

const GlobalPathSchema = new mongoose.Schema<>GlobalPath({
    waypoints: {
        type: WayPoint[],
        required: [true, "Missing array of objects in GlobalPath interface"]
    }
});

export default mongoose.models.GlobalPath || mongoose.model<GlobalPath>("GlobalPath", GlobalPathSchema);
