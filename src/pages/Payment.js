import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout";
import "../stripe.css";

// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe("pk_test_51Hm5rDGIY0QxnrJl5XBGPIxWBwpf9mGSOmoG7XG8CA1vz7H9NvXxfcpC1DKGM3AyDe0yiyyGmllsqyGYnxtQAdDq00orl9fmGX");

const Payment = () => {
  return (
    <div className="container p-5 text-center">
      <h2 style={{ marginTop : "8px", justifySelf: "center"}}>Complete your purchase</h2>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <StripeCheckout />
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
