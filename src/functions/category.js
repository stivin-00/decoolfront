import axios from "axios";

export const getCategories = async () =>
  await axios.get(`https://decool.herokuapp.com/api/categories`);

export const getCategory = async (slug) =>
  await axios.get(`https://decool.herokuapp.com/api/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`https://decool.herokuapp.com/api/category/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(`https://decool.herokuapp.com/api/category/${slug}`, category, {
    headers: {
      authtoken,
    },
  });

export const createCategory = async (category, authtoken) =>
  await axios.post(`https://decool.herokuapp.com/api/category`, category, {
    headers: {
      authtoken,
    },
  });

  //subs
  export const getCategorySubs = async (_id) =>
  await axios.get(`https://decool.herokuapp.com/api/category/subs/${_id}`);


  //to cret a categ we need to send the category itself
  // put for update
  // post for cret


  // STEPS CREATING A SEARCH QUERRY

  // 1  CONST [KEYWORD, SETK]

  // 1 input field