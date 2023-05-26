import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMS Construction and Remodeling",
  description:
    "SMS Construction and Remodeling. A Local Handyman serving Brownstown Indiana and surrounding counties.",
  keywords: [
    "Handy Man",
    "Brownstown Indiana",
    "Home Improvement",
    "Home Improvement Southern Indiana",
    "Handy Man Indiana",
    "SMS Construction",
    "Construction and Remodeling",
    "SMS Construction and Remodeling",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
