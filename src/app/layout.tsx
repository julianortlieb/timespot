import type { Metadata } from "next";
import "./globals.css";
import { Consts } from "@/const";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: Consts.appName,
  description: Consts.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}