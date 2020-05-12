import React, { useMemo } from "react";
import SortedPairs from "./pairs";
import { baseComparator } from "../../data-utils";
import useProductsSelector from "./use-products-selector";

function PairsContainer({ facetFilter }) {
  const products = useProductsSelector(facetFilter);
  const sorted = useMemo(() => Array.from(products).sort(baseComparator), [
    products,
  ]);
  return <SortedPairs products={sorted} />;
}

export default React.memo(PairsContainer);
