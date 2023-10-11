import mongoose from "mongoose";

interface WayPoint extends mongoose.Document {
    latitude: mongoose.Types.Decimal128,
    longitude: mongoose.Types.Decimal128
}

export interface GlobalPath extends mongoose.Document {
    waypoints: WayPoint[]
}

const GlobalPathSchema = new mongoose.Schema<GlobalPath>({
    waypoints: {
        type: [
            {
                latitude: mongoose.Types.Decimal128,
                longitude: mongoose.Types.Decimal128
            }
        ],
        required: [true, "Missing array of objects in GlobalPath interface"]
    }
});

GlobalPathSchema.set('toJSON', {
    transform: (doc, ret) => {
       // @ts-ignore: Expected 3 arguments, but got 1
      decimal2JSON(ret);
      return ret;
    }
  });

export default mongoose.models.GlobalPath || mongoose.model<GlobalPath>("GlobalPath", GlobalPathSchema);
