const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OUDS3Hg9Pf38ZgB9V7G0ScNeJU2A42kMBTLCS5PmZSDfwGXy5WYXb51Py0dXnE9wyyKqzoLeqizc9K6TE0gV3OZ00dGtmeQMO"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const description = "Study Purpose";
  const customerName = "Ischit"; // Replace with the actual field name from your client
  const customerAddress = "IIT Roorkee";

  console.log("Payment request recieved >>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: description,
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/my-d467a/us-central1/api
