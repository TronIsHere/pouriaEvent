import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biz Event",
  description: "Rules of success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jura.className}>{children}</body>
    </html>
  );
}
