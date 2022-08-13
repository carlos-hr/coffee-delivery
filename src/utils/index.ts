export function formatPrice(price: number) {
  return price.toFixed(2).toString().replace(".", ",").padEnd(4, "0");
}
