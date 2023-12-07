import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sivert's NAS",
  description: "Welcome to Sivert's NAS!",
  icons: {
    icon: { url: "/icon?<generated>", type: "image/png", sizes: "32x32" },
  },
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
