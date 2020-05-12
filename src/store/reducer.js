import merge from "lodash/merge";

export const reducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_PRODUCTS":
      return {
        ...state,
        productsById: action.byId,
        productIds: action.ids,
      };

    case "UPDATE_PRODUCTS": {
      return {
        ...state,
        productsById: merge({}, state.productsById, action.byId),
      };
    }

    default:
      return state;
  }
};
