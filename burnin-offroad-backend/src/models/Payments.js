const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    stripeTransactionId: String,
    amountPaid: Number,
  },
  {
    timestamps: true,
  }
);

const Payments = mongoose.model("Payments", PaymentSchema); // Corrected model name

module.exports = Payments;