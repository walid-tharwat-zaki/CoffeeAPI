import CoffeeMachine from "../models/CoffeeMachine.js";
import MachineType from "../models/MachineType.js";

async function getData() {
  const machineTypeSmall = await MachineType.findOne({
    name: "COFFEE_MACHINE_SMALL",
  });
  const machineTypeLarge = await MachineType.findOne({
    name: "COFFEE_MACHINE_LARGE",
  });
  const machineTypeEspresso = await MachineType.findOne({
    name: "ESPRESSO_MACHINE",
  });
  const entities = [
    new CoffeeMachine({
      SKU: "CM001",
      name: "small machine, base model",
      productType: machineTypeSmall._id,
      waterLineComptible: false,
    }),
    new CoffeeMachine({
      SKU: "CM002",
      name: "small machine, premium model",
      productType: machineTypeSmall._id,
      waterLineComptible: false,
    }),
    new CoffeeMachine({
      SKU: "CM003",
      name: "small machine, deluxe model, water line compatible",
      productType: machineTypeSmall._id,
      waterLineComptible: true,
    }),
    new CoffeeMachine({
      SKU: "CM101",
      name: "large machine, base model",
      productType: machineTypeLarge._id,
      waterLineComptible: false,
    }),
    new CoffeeMachine({
      SKU: "CM102",
      name: "large machine, premium model, water line compatible",
      productType: machineTypeLarge._id,
      waterLineComptible: true,
    }),
    new CoffeeMachine({
      SKU: "CM103",
      name: "large machine, deluxe model, water line compatible",
      productType: machineTypeLarge._id,
      waterLineComptible: true,
    }),

    new CoffeeMachine({
      SKU: "EM001",
      name: "espresso machine, base model",
      productType: machineTypeEspresso._id,
      waterLineComptible: false,
    }),
    new CoffeeMachine({
      SKU: "EM002",
      name: "espresso machine, premium model",
      productType: machineTypeEspresso._id,
      waterLineComptible: false,
    }),
    new CoffeeMachine({
      SKU: "EM003",
      name: "espresso machine, deluxe model, water line compatible",
      productType: machineTypeEspresso._id,
      waterLineComptible: true,
    }),
  ];
  return entities;
}

export default { getData };
