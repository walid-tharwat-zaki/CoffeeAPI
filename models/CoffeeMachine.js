import mongoose from "mongoose";

const { Schema } = mongoose;

const coffeeMachineSchema = new Schema(
  {
    SKU: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    productType: {
      type: Schema.Types.ObjectId,
      ref: "MachineType",
      required: true,
    },
    waterLineComptible: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const CoffeeMachine = mongoose.model("CoffeeMachine", coffeeMachineSchema);

export default CoffeeMachine;
