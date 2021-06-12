import mongoose from "mongoose";

const { Schema } = mongoose;

const packSizeSchema = new Schema(
  {
    name: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { timestamps: true }
);

const PackSize = mongoose.model("PackSize", packSizeSchema);

export default PackSize;
