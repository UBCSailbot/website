import mongoose from "mongoose";

interface AISShip extends mongoose.Document {
  id: number,
  latitude: mongoose.Decimal128,
  longitude: mongoose.Decimal128,
  speed: mongoose.Decimal128,
  heading: mongoose.Decimal128
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
