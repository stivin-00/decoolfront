import axios from "axios";

export const getSubs = async () =>
  await axios.get(`https://decool.herokuapp.com/api/subs`);

export const getSub = async (slug) =>
  await axios.get(`https://decool.herokuapp.com/api/sub/${slug}`);

export const removeSub = async (slug, authtoken) =>
  await axios.delete(`https://decool.herokuapp.com/api/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateSub = async (slug, sub, authtoken) =>
  await axios.put(`https://decool.herokuapp.com/api/sub/${slug}`, sub, {
    headers: {
      authtoken,
    },
  });

export const createSub = async (sub, authtoken) =>
  await axios.post(`https://decool.herokuapp.com/api/sub`, sub, {
    headers: {
      authtoken,
    },
  });
