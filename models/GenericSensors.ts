import mongoose from "mongoose";

interface GenericSensor extends mongoose.Document {
    id: Number,
    data: BigInt
}

export interface GenericSensors extends mongoose.Document {
    genericSensors: GenericSensor[]
}

const GenericSensorsSchema = new mongoose.Schema<GenericSensors>({
    genericSensors: {
        type: GenericSensor[],
        required: [true, "Missing array of objects in GenericSensors interface"]
    }
});

export default mongoose.models.GenericSensors || mongoose.model<GenericSensors>("GenericSensors", GenericSensorsSchema);
