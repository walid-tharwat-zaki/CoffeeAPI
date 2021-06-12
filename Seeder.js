import connectDB from "./db/Connect.js";
import CoffeeFlavor from "./models/CoffeeFlavor.js";
import CoffeeMachine from "./models/CoffeeMachine.js";
import Pod from "./models/CoffeeMachine.js";
import MachineType from "./models/MachineType.js";
import PackSize from "./models/PackSize.js";
import PodType from "./models/PodType.js";
import Constants from "./seeder/Constants.js";
import machinesData from "./seeder/MachinesData.js";
import podsData from "./seeder/PodsData.js";

connectDB()
  .then(async () => {
    await CoffeeFlavor.deleteMany({});
    await MachineType.deleteMany({});
    await PackSize.deleteMany({});
    await PodType.deleteMany({});
    await CoffeeMachine.deleteMany({});
    await Pod.deleteMany({});

    await Promise.all(Constants.map((entity) => entity.save()));

    const promises = [];
    promises.push(
      ...(await machinesData.getData()).map((entity) => entity.save())
    );
    promises.push(...(await podsData.getData()).map((entity) => entity.save()));
    await Promise.all(promises);
    console.log("Data seeded successfully");
  })
  .catch((err) => {
    console.error("DB Connection failed : ", err);
  });
