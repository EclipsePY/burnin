const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
// const path = require("path");
const cors = require("cors");
const connectDB = require("./src/config/connectDB");
const errorHandler = require("./src/middleware/errorHandler");
const PORT = process.env.PORT || 5000;
const ToysRoute = require("./src/routes/ToysRoute");
const PaymentRoute = require("./src/routes/PaymentROute");
const Payments = require("./src/models/Payments");

const app = express();
const bodyParser = require("body-parser");

// User Middlewares
app.use(cors());
app.use(express.json());
connectDB();
colors.enable();

app.get("/", (req, res) => {
  res.send(
    "<h2 style='color:green;box-sizing:border-box; margin:0; background: #f3f3f9; height: 95vh;'>Server is Running!<h2>"
  );
});
// --------------------
// ---------------
// ----------
// -----
// Routes

app.use("/api/v1/toys", ToysRoute);
app.use("/api/v1/payments", PaymentRoute);
//Webhook for the listen to the  stripe events.
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (request, response) => {
    const event = request.body;
    switch (event.type) {
      case "charge.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent was successful!");
        const data = {
          stripeTransactionId: paymentIntent.id,
          amountPaid: paymentIntent.amount / 100,
        };
        const payment = new Payments(data);
        const newPayment = await payment.save();
        console.log("DEBUG: New Payment Saved -", newPayment);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    response.json({ received: true });
  }
);

// -----
// ----------
// ---------------
// --------------------
// Not Found Or 404 error Page

// Handle Error
app.use(errorHandler);
// -----
// ----------
// ---------------
// -------------------

// Listen Application
mongoose.connection.once("open", () => {
  console.log(
    colors.green.underline(`📗Connected`),
    colors.yellow.underline("to Server!")
  );
  app.listen(PORT, () => console.log(`Server running in port no : ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.log(colors.red("📕", err));
});
