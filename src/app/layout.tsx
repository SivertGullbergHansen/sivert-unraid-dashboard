import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ServerIcon } from "@/config/icon";
import Head from "next/head";
import { info } from "@/config/info";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: info.server_name,
  description: info.description,
  icons: [
    {
      url: ServerIcon.src,
      type: "image/svg+xml",
      sizes: "any",
      rel: "icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-base text-primary" lang="en">
      <Head>
        <link
          rel="icon"
          href={ServerIcon.src}
          sizes="any"
          type="image/svg+xml"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
