const Item = require("../models/Item");
const Store = require("../models/Store");

exports.findAll = async (req, res) => {
  try {
    let data = await Item.findAll({
      include: [{
        model: Store
      }]
    });

    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ situation: '😵', err })
  }
}

exports.findOne = async (req, res) => {
  try {
    let data = await Item.findOne({
      where: { id: req.params.id }, include: [{
        model: Store,
      }]
    });

    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ situation: '😵', err })
  }
}
