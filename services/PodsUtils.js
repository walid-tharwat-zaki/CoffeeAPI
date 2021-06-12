import Pod from "../models/Pod.js";
import PodType from "../models/PodType.js";
import CoffeeFlavor from "../models/CoffeeFlavor.js";
import PackSize from "../models/PackSize.js";

async function getPods(productType, coffeeFlavor, packSize) {
  const filters = [];
  if (productType) {
    filters.push({ "productType.name": productType });
  }
  if (coffeeFlavor) {
    filters.push({ "coffeeFlavor.name": coffeeFlavor });
  }
  if (packSize) {
    filters.push({ "packSize.name": packSize });
  }
  const pods = await Pod.aggregate([
    {
      $lookup: {
        from: PodType.collection.name,
        localField: "productType",
        foreignField: "_id",
        as: "productType",
      },
    },
    { $unwind: "$productType" },
    {
      $lookup: {
        from: CoffeeFlavor.collection.name,
        localField: "coffeeFlavor",
        foreignField: "_id",
        as: "coffeeFlavor",
      },
    },
    { $unwind: "$coffeeFlavor" },
    {
      $lookup: {
        from: PackSize.collection.name,
        localField: "packSize",
        foreignField: "_id",
        as: "packSize",
      },
    },
    { $unwind: "$packSize" },
    { $match: filters.length > 0 ? { $and: filters } : {} },
  ]);
  console.log("pods : ", pods);
  const podsData = pods.map((entity) => entity.SKU);
  return podsData;
}

export default { getPods };
