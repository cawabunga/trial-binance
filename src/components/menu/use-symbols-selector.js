import { useContext, useMemo } from "react";
import { groupSymbolsByMarket } from "../../data-utils";
import { productsSelector } from "../../store/selectors";
import StoreContext from "../../store/context";

export default function useSymbolsSelector() {
  const { state } = useContext(StoreContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => groupSymbolsByMarket(productsSelector(state)), [
    state.productIds,
  ]);
}
