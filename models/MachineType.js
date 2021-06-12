import mongoose from "mongoose";

const { Schema } = mongoose;

const machineTypeSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const MachineType = mongoose.model("MachineType", machineTypeSchema);

export default MachineType;
