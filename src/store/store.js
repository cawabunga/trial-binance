import React, { useCallback, useEffect, useReducer, useRef } from "react";
import StoreContext from "./context";
import { reducer } from "./reducer";
import {
  createPopulateProducts,
  createUpdateProducts,
} from "./action-creators";

function Store({ initialState, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchRef = useRef(dispatch);
  useEffect(() => {
    dispatchRef.current = dispatch;
  }, [dispatch]);

  const populateProducts = useCallback((products) => {
    dispatchRef.current(createPopulateProducts(products));
  }, []);

  const updateProducts = useCallback((products) => {
    dispatchRef.current(createUpdateProducts(products));
  }, []);

  return (
    <StoreContext.Provider value={{ state, populateProducts, updateProducts }}>
      {children}
    </StoreContext.Provider>
  );
}

export default React.memo(Store);
