import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaossi | Web Engineer",
  description:
    "Chaossiのポートフォリオ。Next.js、TypeScript、Firebaseを用いた実務経験と、React、Bun、Socket.IOを用いた個人開発を掲載しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
