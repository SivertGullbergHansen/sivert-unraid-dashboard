import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sivert's NAS",
  description: "Welcome to Sivert's NAS!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-base text-primary" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
