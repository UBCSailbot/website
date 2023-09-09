import mongoose from "mongoose";

const GenericSensorSchema = new Schema(
    {
        id: Number,
        data: BigInt
    }
);

const GenericSensorsSchema = new mongoose.Schema(
  {
    genericSensors: [GenericSensorSchema]
  }
);

const GenericSensors = mongoose.models.GenericSensors || mongoose.model("GenericSensors", GenericSensorsSchema);

export default GenericSensors;
