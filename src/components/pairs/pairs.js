import React from "react";
import Row from "./row";

function Pairs({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Pair</th>
          <th>Last Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Row key={product.s} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(Pairs);
