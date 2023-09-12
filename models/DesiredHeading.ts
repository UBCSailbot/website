import mongoose from "mongoose";

export interface DesiredHeading extends mongoose.Document {
    heading: mongoose.Decimal128
}

const DesiredHeadingSchema = new mongoose.Schema<DesiredHeading>({
    heading: {
        type: mongoose.Decimal128,
        required: [true, "Missing 'heading' field in DesiredHeading interface"]
    }
})

export default mongoose.models.DesiredHeading || mongoose.model<DesiredHeading("DesiredHeading", DesiredHeadingSchema);
