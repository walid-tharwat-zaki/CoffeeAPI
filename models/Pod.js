import mongoose from "mongoose";

const { Schema } = mongoose;

const podSchema = new Schema(
  {
    SKU: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    productType: {
      type: Schema.Types.ObjectId,
      ref: "PodType",
      required: true,
    },
    coffeeFlavor: {
      type: Schema.Types.ObjectId,
      ref: "CoffeeFlavor",
      required: true,
    },
    packSize: {
      type: Schema.Types.ObjectId,
      ref: "PackSize",
      required: true,
    },
  },
  { timestamps: true }
);

const Pod = mongoose.model("Pod", podSchema);

export default Pod;
