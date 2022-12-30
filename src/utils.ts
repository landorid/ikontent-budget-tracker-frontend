export const formatCurrency = (amount: number) => {
  const newValue = amount.toLocaleString("en-US").replaceAll(",", ".");

  return `${newValue} HUF`;
};
