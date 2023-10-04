import mongoose from "mongoose";

interface Battery extends mongoose.Document {
    voltage: mongoose.Types.Decimal128,
    current: mongoose.Types.Decimal128
}

export interface Batteries extends mongoose.Document {
    batteries: Battery[]
}

const BatteriesSchema = new mongoose.Schema<Batteries>({
    batteries: {
        type: Battery[],
        required: [true, "Missing array of objects in Batteries interface"],
        validate: [validateArrayLimit, 'The array length of {PATH} should equal to 2.']
    }
})

function validateArrayLimit(val: any) {
    return val.length == 2;
}

export default mongoose.models.Batteries || mongoose.model<Batteries>("Batteries", BatteriesSchema)
