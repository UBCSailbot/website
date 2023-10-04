import mongoose from "mongoose";

interface AISShip extends mongoose.Document {
  id: number,
  latitude: mongoose.Types.Decimal128,
  longitude: mongoose.Types.Decimal128,
  speed: mongoose.Types.Decimal128,
  heading: mongoose.Types.Decimal128
}

export interface AISShips extends mongoose.Document {
  ships: AISShip[]
}

const AISShipsSchema = new mongoose.Schema<AISShips>({
    ships: {
      type: AISShip[],
      required: [true, "Missing array of objects in AISShips interface"]
    },
});

export default mongoose.models.AISShips || mongoose.model<AISShips>("AISShips", AISShipsSchema);
