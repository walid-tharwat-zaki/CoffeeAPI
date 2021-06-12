import PodsUtils from "../services/PodsUtils.js";

async function getPods(req, res) {
  const { product_type, coffee_flavor, pack_size } = req.query;
  const result = await PodsUtils.getPods(
    product_type,
    coffee_flavor,
    pack_size
  );
  return res.status(result.errorCode ?? 200).send(result);
}

export default { getPods };
