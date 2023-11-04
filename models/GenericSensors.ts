import mongoose from "mongoose";

import {
    decimal2JSON,
  } from './helper/parser';

interface GenericSensor extends mongoose.Document {
    id: Number,
    data: BigInt
}

export interface GenericSensors extends mongoose.Document {
    genericSensors: GenericSensor[]
}

const GenericSensorsSchema = new mongoose.Schema<GenericSensors>({
    genericSensors: {
        type: [
            {
                id: Number,
                data: BigInt
            }
        ],
        required: [true, "Missing array of objects in GenericSensors interface"]
    }
});

GenericSensorsSchema.set('toJSON', {
    transform: (doc, ret) => {
       // @ts-ignore: Expected 3 arguments, but got 1
      decimal2JSON(ret);
      return ret;
    }
  });

export default mongoose.models.GenericSensors || mongoose.model<GenericSensors>("GenericSensors", GenericSensorsSchema);
