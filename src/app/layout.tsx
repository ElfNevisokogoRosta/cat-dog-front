import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "normalize.css";
import main from "../styles/main.module.scss";
import {QueryProvider} from "@/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
// const ibm = IBM_Plex_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });
export const metadata: Metadata = {
  title: "CatDog",
  description: "Make your pets happier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <QueryProvider>
    <html lang="en" className={inter.className}>
      <body className="body">{children}</body>
    </html>
      </QueryProvider>
  );
}
