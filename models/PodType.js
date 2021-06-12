import mongoose from "mongoose";

const { Schema } = mongoose;

const podTypeSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const PodType = mongoose.model("PodType", podTypeSchema);

export default PodType;
