import mongoose from "mongoose";

import {
  decimal2JSON,
} from './helper/parser';

export interface DesiredHeading extends mongoose.Document {
    heading: mongoose.Decimal128
}

const DesiredHeadingSchema = new mongoose.Schema<DesiredHeading>({
    heading: {
        type: mongoose.Decimal128,
        required: [true, "Missing 'heading' field in DesiredHeading interface"]
    }
})

DesiredHeadingSchema.set('toJSON', {
  transform: (doc, ret) => {
    decimal2JSON(ret);
    return ret;
  }
});

export default mongoose.models.DesiredHeading || mongoose.model<DesiredHeading("DesiredHeading", DesiredHeadingSchema);
