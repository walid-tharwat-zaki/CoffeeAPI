import MachinesUtils from "../services/MachinesUtils.js";

async function getMachines(req, res) {
  const { product_type, water_line_compatible } = req.query;
  const result = await MachinesUtils.getMachines(
    product_type,
    water_line_compatible
  );
  return res.status(result.errorCode ?? 200).send(result);
}

export default { getMachines };
