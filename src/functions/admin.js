import axios from "axios";

export const getOrders = async (authtoken) =>
  await axios.get(`https://decool.herokuapp.com/api//admin/orders`, {
    headers: {
      authtoken,
    },
  });

export const changeStatus = async (orderId, orderStatus, authtoken) =>
  await axios.put(
    `https://decool.herokuapp.com/api//admin/order-status`,
    { orderId, orderStatus },
    {
      headers: {
        authtoken,
      },
    }
  );
