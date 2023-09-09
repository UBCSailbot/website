import mongoose from "mongoose";

const DesiredHeadingSchema = new mongoose.Schema(
  {
    heading: mongoose.Decimal128
  }
);

const DesiredHeading = mongoose.models.DesiredHeading || mongoose.model("DesiredHeading", DesiredHeadingSchema);

export default DesiredHeading;
