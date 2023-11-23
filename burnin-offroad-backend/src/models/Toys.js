const mongoose = require("mongoose");
const ToysSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: String,
    //   required: true,
    // },
    title: String,
    date: String,
    Mileage: String,
    type: String,
    amount: String,
    model: String,
    state: String,
    city: String,
    offerId: String,
    description: String,
    images: [String],
    payment: String,
  },
  {
    timestamps: true,
  }
);

const Toys = mongoose.model("Toys", ToysSchema);

module.exports = Toys;
