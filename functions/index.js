const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPw6kG8WFUDzDDccoGY8coXNrW8QLIdwMDwLHvHAWJJYYtrhFJ9OdD9on8uYQm2LbEfBENSQSa1FZW5L1I03rsb00MgiWkara"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

  // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// sk_test_51HPw6kG8WFUDzDDccoGY8coXNrW8QLIdwMDwLHvHAWJJYYtrhFJ9OdD9on8uYQm2LbEfBENSQSa1FZW5L1I03rsb00MgiWkara
// Example endpoint
// http://localhost:5001/clone-f02cf/us-central1/api