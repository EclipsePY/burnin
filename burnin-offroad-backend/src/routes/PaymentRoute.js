const {
  createPayment,
} = require("../controllers/PaymentController");
const router = require("express").Router();

router.post("/checkout", createPayment);

module.exports = router;
