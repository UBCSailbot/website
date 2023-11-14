import mongoose from 'mongoose';

import { decimal2JSON } from './helper/parser';

interface AISShip extends mongoose.Document {
  id: Number;
  latitude: mongoose.Types.Decimal128;
  longitude: mongoose.Types.Decimal128;
  speed: mongoose.Types.Decimal128;
  heading: mongoose.Types.Decimal128;
}

export interface AISShips extends mongoose.Document {
  ships: AISShip[];
}

const AISShipsSchema = new mongoose.Schema<AISShips>({
  ships: {
    type: [
      {
        id: Number,
        latitude: mongoose.Types.Decimal128,
        longitude: mongoose.Types.Decimal128,
        cog: mongoose.Types.Decimal128,
        sog: mongoose.Types.Decimal128,
        width: mongoose.Types.Decimal128,
        length: mongoose.Types.Decimal128,
      },
    ],
    required: [true, 'Missing array of objects in AISShips interface'],
  },
});

AISShipsSchema.set('toJSON', {
  transform: (doc, ret) => {
    // @ts-ignore: Expected 3 arguments, but got 1
    decimal2JSON(ret);
    return ret;
  },
});

export default mongoose.models.AISShips ||
  mongoose.model<AISShips>('AISShips', AISShipsSchema);
