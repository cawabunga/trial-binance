import React, { useMemo } from "react";

function Row({ product }) {
  const change = useMemo(() => calcPercentageDiff(product.o, product.c), [
    product.o,
    product.c,
  ]);
  return (
    <tr>
      <td>
        {product.b} / {product.q}
      </td>
      <td>{formatPrice(product.c)}</td>
      <td style={{ color: change < 0 ? "red" : "green" }}>
        {0 <= change ? "+" : ""}
        {change.toFixed(2)}%
      </td>
    </tr>
  );
}

export default React.memo(Row);

function calcPercentageDiff(first, second) {
  return 100 - (second * 100) / first;
}

const formatter = new Intl.NumberFormat("nu", { maximumFractionDigits: 10 });
function formatPrice(number) {
  return formatter.format(number);
}
