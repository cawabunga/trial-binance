import React from "react";
import Symbols from "./symbols";
import css from "./menu.module.css";

function Menu({ symbolsByMarket, onSelect }) {
  return (
    <div className={css.menu}>
      <button
        type={"button"}
        onClick={() => onSelect({ type: "symbol", value: "BNB" })}
      >
        BNB
      </button>
      <button
        type={"button"}
        onClick={() => onSelect({ type: "symbol", value: "BTC" })}
      >
        BTC
      </button>

      <div className={css.menuItem}>
        <button
          type={"button"}
          onClick={() => onSelect({ type: "market", value: "ALTS" })}
        >
          ALTS
        </button>

        <div className={css.menuChildren}>
          <Symbols
            symbols={symbolsByMarket["ALTS"] ?? []}
            onSelect={onSelect}
          ></Symbols>
        </div>
      </div>

      <div className={css.menuItem}>
        <button
          type={"button"}
          onClick={() => onSelect({ type: "market", value: "USDⓈ" })}
        >
          USDⓈ
        </button>

        <div className={css.menuChildren}>
          <Symbols
            symbols={symbolsByMarket["USDⓈ"] ?? []}
            onSelect={onSelect}
          ></Symbols>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Menu);
