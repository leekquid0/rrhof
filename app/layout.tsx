import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ozzy for First | The Hall",
  description: "Make the case for Ozzy Osbourne as the first inductee into a brand-new Rock & Roll Hall of Fame.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
