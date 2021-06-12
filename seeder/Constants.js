import CoffeeFlavor from "../models/CoffeeFlavor.js";
import MachineType from "../models/MachineType.js";
import PackSize from "../models/PackSize.js";
import PodType from "../models/PodType.js";

export default [
  new MachineType({ name: "COFFEE_MACHINE_LARGE" }),
  new MachineType({ name: "COFFEE_MACHINE_SMALL" }),
  new MachineType({ name: "ESPRESSO_MACHINE" }),
  new PodType({ name: "COFFEE_POD_LARGE" }),
  new PodType({ name: "COFFEE_POD_SMALL" }),
  new PodType({ name: "ESPRESSO_POD" }),
  new CoffeeFlavor({ name: "COFFEE_FLAVOR_VANILLA" }),
  new CoffeeFlavor({ name: "COFFEE_FLAVOR_CARAMEL" }),
  new CoffeeFlavor({ name: "COFFEE_FLAVOR_PSL" }),
  new CoffeeFlavor({ name: "COFFEE_FLAVOR_MOCHA" }),
  new CoffeeFlavor({ name: "COFFEE_FLAVOR_HAZELNUT" }),
  new PackSize({ name: "1 dozen", size: 12 }),
  new PackSize({ name: "3 dozen", size: 36 }),
  new PackSize({ name: "5 dozen", size: 60 }),
  new PackSize({ name: "7 dozen", size: 84 }),
];
