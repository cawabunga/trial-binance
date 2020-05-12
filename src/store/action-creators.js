import keyBy from "lodash/keyBy";

export const createPopulateProducts = (products) => {
  return {
    type: "POPULATE_PRODUCTS",
    byId: keyBy(products, "s"),
    ids: products.map((product) => product.s),
  };
};

export const createUpdateProducts = (partialProducts) => {
  return {
    type: "UPDATE_PRODUCTS",
    byId: keyBy(partialProducts, "s"),
  };
};
