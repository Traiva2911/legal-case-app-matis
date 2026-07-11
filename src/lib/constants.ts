export const driveFolderUrl = "https://drive.google.com/drive/folders/1cHt8gpq7G0hVBAz4sqKPYYGAhJVf_BDJ";

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(value);
