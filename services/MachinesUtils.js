import CoffeeMachine from "../models/CoffeeMachine.js";
import MachineType from "../models/MachineType.js";

async function getMachines(productType, waterLineComptible) {
  const filters = [];
  if (productType) {
    filters.push({ "productType.name": productType });
  }
  if (waterLineComptible) {
    filters.push({ waterLineComptible });
  }
  const machines = await CoffeeMachine.aggregate([
    {
      $lookup: {
        from: MachineType.collection.name,
        localField: "productType",
        foreignField: "_id",
        as: "productType",
      },
    },
    { $unwind: "$productType" },
    { $match: filters.length > 0 ? { $and: filters } : {} },
  ]);
  const machinesData = machines.map((entity) => entity.SKU);
  return machinesData;
}

export default { getMachines };
