import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "RevoShop - Modern Online Shopping",
  description:
  "RevoShop is a Next.js e-commerce demo built with shadcn/ui and the Platzi Fake Store API."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning>
      
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </CartProvider>
      </body>
    </html>);

}
