import mongoose from "mongoose";

export interface GPS extends mongoose.Document {
    latitude: mongoose.Decimal128,
    longitude: mongoose.Decimal128,
    speed: mongoose.Decimal128,
    heading: mongoose.Decimal128
}

const GPSSchema = new mongoose.Schema<GPS>({
  latitude: {
    type: mongoose.Decimal128
    required: [true, "Missing 'latitude' field in GPS interface"]
  },
  longitude: {
    type: mongoose.Decimal128
    required: [true, "Missing 'longitude' field in GPS interface"]
  },
  speed: {
    type: mongoose.Decimal128
    required: [true, "Missing 'speed' field in GPS interface"]
  },
  heading: {
    type: mongoose.Decimal128
    required: [true, "Missing 'latitude' field in GPS interface"]
  },
});

export default mongoose.models.GPS || mongoose.model<GPS>("GPS", GPSSchema);
