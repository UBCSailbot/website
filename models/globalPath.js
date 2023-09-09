import mongoose from "mongoose";

const WayPointSchema = new Schema(
    {
        latitude: mongoose.Decimal128,
        longitude: mongoose.Decimal128
    }
);

const GlobalPathSchema = new mongoose.Schema(
  {
    waypoints: [WayPointSchema]
  }
);

const GlobalPathSchema = mongoose.models.GlobalPath || mongoose.model("GlobalPath", GlobalPathSchema);

export default GlobalPath;
