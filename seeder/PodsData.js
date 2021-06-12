import CoffeeFlavor from "../models/CoffeeFlavor.js";
import PackSize from "../models/PackSize.js";
import Pod from "../models/Pod.js";
import PodType from "../models/PodType.js";

async function getData() {
  const podTypeLarge = await PodType.findOne({ name: "COFFEE_POD_LARGE" });
  const podTypeSmall = await PodType.findOne({ name: "COFFEE_POD_SMALL" });
  const podTypeEsspresso = await PodType.findOne({ name: "ESPRESSO_POD" });

  const flavorVanilla = await CoffeeFlavor.findOne({
    name: "COFFEE_FLAVOR_VANILLA",
  });
  const flavorCaramel = await CoffeeFlavor.findOne({
    name: "COFFEE_FLAVOR_CARAMEL",
  });
  const flavorPSL = await CoffeeFlavor.findOne({
    name: "COFFEE_FLAVOR_PSL",
  });
  const flavorMocha = await CoffeeFlavor.findOne({
    name: "COFFEE_FLAVOR_MOCHA",
  });
  const flavorHazelnut = await CoffeeFlavor.findOne({
    name: "COFFEE_FLAVOR_HAZELNUT",
  });

  const size1Dozen = await PackSize.findOne({ size: 12 });
  const size3Dozen = await PackSize.findOne({ size: 36 });
  const size5Dozen = await PackSize.findOne({ size: 60 });
  const size7Dozen = await PackSize.findOne({ size: 84 });

  const entities = [
    new Pod({
      SKU: "CP001",
      name: "small coffee pod, 1 dozen, vanilla",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP003",
      name: "small coffee pod, 3 dozen, vanilla",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP011",
      name: "small coffee pod, 1 dozen, caramel",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP013",
      name: "small coffee pod, 3 dozen, caramel",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP021",
      name: "small coffee pod, 1 dozen, psl",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorPSL._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP023",
      name: "small coffee pod, 3 dozen, psl",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorPSL._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP031",
      name: "small coffee pod, 1 dozen, mocha",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorMocha._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP033",
      name: "small coffee pod, 3 dozen, mocha",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorMocha._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP041",
      name: "small coffee pod, 1 dozen, hazelnut",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorHazelnut._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP043",
      name: "small coffee pod, 3 dozen, hazelnut",
      productType: podTypeSmall._id,
      coffeeFlavor: flavorHazelnut._id,
      packSize: size3Dozen._id,
    }),

    new Pod({
      SKU: "CP101",
      name: "large coffee pod, 1 dozen, vanilla",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP103",
      name: "large coffee pod, 3 dozen, vanilla",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP111",
      name: "large coffee pod, 1 dozen, caramel",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP113",
      name: "large coffee pod, 3 dozen, caramel",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP121",
      name: "large coffee pod, 1 dozen, psl",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorPSL._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP123",
      name: "large coffee pod, 3 dozen, psl",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorPSL._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP131",
      name: "large coffee pod, 1 dozen, mocha",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorMocha._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP133",
      name: "large coffee pod, 3 dozen, mocha",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorMocha._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "CP141",
      name: "large coffee pod, 1 dozen, hazelnut",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorHazelnut._id,
      packSize: size1Dozen._id,
    }),
    new Pod({
      SKU: "CP143",
      name: "large coffee pod, 3 dozen, hazelnut",
      productType: podTypeLarge._id,
      coffeeFlavor: flavorHazelnut._id,
      packSize: size3Dozen._id,
    }),

    new Pod({
      SKU: "EP003",
      name: "espresso pod, 3 dozen, vanilla",
      productType: podTypeEsspresso._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "EP005",
      name: "espresso pod, 5 dozen, vanilla",
      productType: podTypeEsspresso._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size5Dozen._id,
    }),
    new Pod({
      SKU: "EP007",
      name: "espresso pod, 7 dozen, vanilla",
      productType: podTypeEsspresso._id,
      coffeeFlavor: flavorVanilla._id,
      packSize: size7Dozen._id,
    }),

    new Pod({
      SKU: "EP013",
      name: "espresso pod, 3 dozen, caramel",
      productType: podTypeEsspresso._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size3Dozen._id,
    }),
    new Pod({
      SKU: "EP015",
      name: "espresso pod, 5 dozen, caramel",
      productType: podTypeEsspresso._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size5Dozen._id,
    }),
    new Pod({
      SKU: "EP017",
      name: "espresso pod, 7 dozen, caramel",
      productType: podTypeEsspresso._id,
      coffeeFlavor: flavorCaramel._id,
      packSize: size7Dozen._id,
    }),
  ];
  return entities;
}

export default { getData };
