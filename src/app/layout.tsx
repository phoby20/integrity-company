import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // 원하는 굵기
  display: 'swap',
});


export const metadata: Metadata = {
  title: "独自のサイト制作はIntegrity",
  description: "ランティングページから利益を狙うビジネスサイトまでの制作をします。 お問い合わせはお気軽に！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
