import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}





export function cleanImageUrl(imageUrl) {
  if (typeof imageUrl !== "string") {
    return "";
  }

  return imageUrl.replace(/["\[\]]/g, "").trim();
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}
