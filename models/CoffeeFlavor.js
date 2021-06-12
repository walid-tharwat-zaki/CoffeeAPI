import mongoose from "mongoose";

const { Schema } = mongoose;

const coffeeFlavorSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const CoffeeFlavor = mongoose.model("CoffeeFlavor", coffeeFlavorSchema);

export default CoffeeFlavor;
