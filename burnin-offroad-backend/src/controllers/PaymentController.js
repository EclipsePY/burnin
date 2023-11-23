const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const userId = "43654-fh87h8-c383903-d39232";
const Payments = require("../models/Payments");

const createPayment = async (req, res) => {
  try {
    // const orderedItemList = [
    //   {
    //     id: "123456",
    //     name: "product1",
    //     price: 20,
    //     qty: 2,
    //     img: "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/15_00cfb3d3-33f5-4141-973d-44fed0b2b830_271x.progressive.jpg",
    //   },
    //   {
    //     id: "654321",
    //     name: "product2",
    //     price: 10,
    //     qty: 5,
    //     img: "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/15_00cfb3d3-33f5-4141-973d-44fed0b2b830_271x.progressive.jpg",
    //   },
    // ];

    // const productData = orderedItemList.map((item) => ({
    //   price_data: {
    //     currency: "usd",
    //     product_data: {
    //       name: item.name,
    //       images: [item.img],
    //     },
    //     unit_amount: item.price * 100,
    //   },
    //   quantity: item.qty,
    // }));
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: productData,
    //   customer_email: "info.skybirdstudio@gmail.com",
    //   metadata: {
    //     userId: userId,
    //   },
    //   mode: "payment",
    //   success_url: "http://localhost:5173/payment/success",
    //   cancel_url: "http://localhost:5173/payment/cancel",
    // });

    const price = req.body;
    const amount = parseInt(price.price) * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: amount,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
    // res.status(200).json({
    //   message: "Toys found",
    //   data: session,
    //   clientSecret: paymentIntent.client_secret,
    // });
  } catch (err) {
    res.status(403).json({
      errorMessage: "There was a problem getting the single Toys Delete",
      error: err.message,
    });
  }
};

module.exports = { createPayment };
