import mongoose from "mongoose";

interface WindSensor extends mongoose.Document {
    speed: mongoose.Types.Decimal128,
    direction: Number
}

export interface WindSensors extends mongoose.Document {
    windSensors: WindSensor[]
}

const WindSensorsSchema = new mongoose.Schema<WindSensors>({
    windSensors: {
        type: WindSensor[],
        required: [true, "Missing array of objects in WindSensors interface"],
        validate: [validateArrayLimit, 'The array length of {PATH} should equal to 2.']
    }
});

function validateArrayLimit(val: any) {
    return val.length == 2;
  }

export default mongoose.models.WindSensors || mongoose.model<WindSensors>("WindSensors", WindSensorsSchema);
