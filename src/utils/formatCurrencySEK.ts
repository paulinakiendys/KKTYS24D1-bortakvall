export function formatCurrencySEK(price: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    minimumFractionDigits: 0,
  }).format(Math.round(price));
}
