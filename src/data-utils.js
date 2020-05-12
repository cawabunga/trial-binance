import groupBy from "lodash/groupBy";

const uniq = (arr) => [...new Set(arr)];

export const groupSymbolsByMarket = (products) => {
  return Object.entries(groupBy(products, "pm")).reduce(
    (acc, [market, products]) => {
      return {
        ...acc,
        [market]: uniq(products.map((product) => product.q)),
      };
    },
    {}
  );
};

export const doesFitFilter = (facetFilter) => (product) => {
  if (!facetFilter) {
    return false;
  } else if (facetFilter.type === "symbol") {
    return product.q === facetFilter.value;
  } else {
    return product.pm === facetFilter.value;
  }
};

export const baseComparator = (a, b) => {
  if (a.b < b.b) {
    return -1;
  }
  if (a.b > b.b) {
    return 1;
  }
  return 0;
};
