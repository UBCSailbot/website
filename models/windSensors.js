import mongoose from "mongoose";

const WindSensorSchema = new Schema(
    {
        speed: mongoose.Decimal128,
        direction: Number
    }
);

const WindSensorsSchema = new mongoose.Schema(
  {
    windSensors: {
        type: [WindSensorSchema],
        validate: [validateArrayLimit, 'The array length of {PATH} should equal to 2.'
    }
  }
);

function validateArrayLimit(val) {
    return val.length == 2;
  }

const WindSensors = mongoose.models.WindSensors || mongoose.model("WindSensors", WindSensorsSchema);

export default WindSensors;
