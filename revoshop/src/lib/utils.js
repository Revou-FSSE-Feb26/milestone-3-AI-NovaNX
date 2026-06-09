import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan beberapa nama class Tailwind CSS menjadi satu string.
 * Digunakan oleh komponen UI (shadcn/ui) untuk menggabungkan class kondisional.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Membersihkan URL gambar dari karakter-karakter yang tidak perlu,
 * seperti tanda kutip ("), kurung siku ([, ]), dan spasi di tepi.
 *
 * Contoh: `"https://example.com/img.jpg"` → `https://example.com/img.jpg`
 */
export function cleanImageUrl(imageUrl) {
  if (typeof imageUrl !== "string") {
    return "";
  }

  return imageUrl.replace(/["\[\]]/g, "").trim();
}

/**
 * Memformat angka menjadi format mata uang USD.
 *
 * Contoh: `29.99` → `$29.99`
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
