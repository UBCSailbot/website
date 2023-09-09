import mongoose from "mongoose";

const BatterySchema = new Schema(
    {
        voltage: mongoose.Decimal128,
        current: mongoose.Decimal128
    }
);

const BatteriesSchema = new mongoose.Schema(
  {
    batteries: {
        type: [BatterySchema],
        validate: [validateArrayLimit, 'The array length of {PATH} should equal to 2.'
    }
  }
);

function validateArrayLimit(val) {
    return val.length == 2;
  }

const Batteries = mongoose.models.Batteries || mongoose.model("Batteries", BatteriesSchema);

export default Batteries;
