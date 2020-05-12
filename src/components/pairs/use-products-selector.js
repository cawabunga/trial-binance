import { useContext, useMemo } from "react";
import StoreContext from "../../store/context";
import { productsSelector } from "../../store/selectors";
import { doesFitFilter } from "../../data-utils";

function useProductIdsSelector(state, facetFilter) {
  return useMemo(() => {
    return productsSelector(state)
      .filter(doesFitFilter(facetFilter))
      .map((product) => product.s);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.productIds, facetFilter]);
}

export default function useProductsSelector(facetFilter) {
  const { state } = useContext(StoreContext);
  const productIds = useProductIdsSelector(state, facetFilter);

  return useMemo(() => productsSelector(state, productIds), [
    state,
    productIds,
  ]);
}
