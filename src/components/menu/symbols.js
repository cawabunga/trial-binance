import React from "react";

function Symbols({ symbols, onSelect }) {
  return (
    <ul>
      {symbols.map((symbol) => (
        <li key={symbol}>
          <button
            type={"button"}
            onClick={() => onSelect({ type: "symbol", value: symbol })}
          >
            {symbol}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Symbols);
