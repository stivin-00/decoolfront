import axios from "axios";

export const createPaymentIntent = (authtoken, coupon) =>
  axios.post(
    `https://decool.herokuapp.com/api/create-payment-intent`,
    { couponApplied: coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
