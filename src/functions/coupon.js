import axios from "axios";

export const getCoupons = async () =>
  await axios.get(`https://decool.herokuapp.com/api/coupons`);

export const removeCoupon = async (couponId, authtoken) =>
  await axios.delete(`https://decool.herokuapp.com/api/coupon/${couponId}`, {
    headers: {
      authtoken,
    },
  });

export const createCoupon = async (coupon, authtoken) =>
  await axios.post(
    `https://decool.herokuapp.com/api/coupon`,
    { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
