const Toys = require("../models/Toys");

const CreateToys = async (req, res) => {
  const body = req.body;

  try {
    // if (body?.userId) {
    const toys = new Toys(body);
    const newToys = await toys.save();
    res.status(200).json({
      message: "Toys created successfully",
      data: newToys,
    });
    // }

    // else {
    //   res.status(404).json({
    //     message: "user id require",
    //   });
    // }
  } catch (err) {
    res.status(403).json({
      errorMessage: "There was a problem creating the toys",
      error: err.message,
    });
  }
};

const getAllToys = async (req, res) => {
  try {
    const toys = await Toys.find();
    const total = await Toys.countDocuments();

    res.status(200).json({
      message: "All Toys",
      total,
      data: toys,
    });
  } catch (err) {
    res.status(403).json({
      errorMessage: "There was a problem getting the all Toys",
      error: err.message,
    });
  }
};

const getSingleToys = async (req, res) => {
  try {
    if (req.params.id) {
      const toys = await Toys.findById(req.params.id);
      res.status(200).json({
        message: "Toys found",
        data: toys,
      });
    } else {
      res.status(404).json({
        message: "toys user id is require",
      });
    }
  } catch (err) {
    res.status(403).json({
      errorMessage: "There was a problem getting the Toys",
      error: err.message,
    });
  }
};

const updateToy = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = req.body;
    const filter = { _id: id };
    const updateDoc = {
      $set: {
        payment: payment.payment,
      },
    };
    const result = await Toys.findByIdAndUpdate(id, updateDoc, {
      new: true,
    });
    res.send(result);
  } catch (error) {
    console.log(error.message, error.dir);
  }
};

const deleteSingleToy = async (req, res) => {
  try {
    if (req.params.id) {
      const toys = await Toys.findByIdAndRemove(req.params.id);
      res.status(200).json({
        message: "Toys found",
        data: toys,
      });
    } else {
      res.status(404).json({
        message: "toys user id is require",
      });
    }
  } catch (err) {
    res.status(403).json({
      errorMessage: "There was a problem getting the single Toys Delete",
      error: err.message,
    });
  }
};

module.exports = {
  CreateToys,
  getSingleToys,
  getAllToys,
  deleteSingleToy,
  updateToy,
};
