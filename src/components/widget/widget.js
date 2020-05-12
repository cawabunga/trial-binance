import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import StoreContext from "../../store/context";
import { fetchProducts } from "../../data-providers/rest";
import { observeRates } from "../../data-providers/ws";
import Menu from "../menu";
import Pairs from "../pairs";

export default function Widget() {
  const { updateProducts, populateProducts } = useContext(StoreContext);
  const [facetFilter, setFacetFilter] = useState(null);
  const disconnRef = useRef(null);

  const disconnect = useCallback(() => {
    if (disconnRef.current) {
      disconnRef.current(true);
    }
  }, [disconnRef]);

  useEffect(() => {
    let unmount = false;
    fetchProducts().then((products) => {
      if (!unmount) {
        populateProducts(products);
        disconnRef.current = observeRates(updateProducts);
      }
    }, console.error);

    return () => {
      unmount = true;
      if (disconnRef.current) {
        disconnRef.current();
      }
    };
  }, [populateProducts, updateProducts]);

  return (
    <>
      <button type={"button"} onClick={disconnect} data-test="disconnect">
        Disconnect
      </button>

      <br />

      <Menu onSelect={setFacetFilter} />

      <Pairs facetFilter={facetFilter} />
    </>
  );
}
