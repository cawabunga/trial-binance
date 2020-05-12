import React from "react";
import useSymbolsSelector from "./use-symbols-selector";
import Menu from "./menu";

function MenuContainer({ onSelect }) {
  const symbolsByMarket = useSymbolsSelector();
  return <Menu symbolsByMarket={symbolsByMarket} onSelect={onSelect} />;
}

export default React.memo(MenuContainer);
