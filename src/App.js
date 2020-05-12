import React from "react";
import Store from "./store/store";
import Widget from "./components/widget/widget";

function App() {
  const initialState = {
    productsById: {},
    productIds: [],
  };

  return (
    <Store initialState={initialState}>
      <Widget />
    </Store>
  );
}

export default App;
