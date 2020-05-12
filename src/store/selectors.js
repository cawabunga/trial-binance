export const productsSelector = (state, ids = state.productIds) => {
  return ids.map((id) => state.productsById[id]);
};
