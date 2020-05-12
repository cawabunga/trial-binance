import data from "./data.json";

export async function fetchProducts() {
  return data.data; // skip cors issue

  const response = await fetch(
    "https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products"
  );
  return response.json();
}
