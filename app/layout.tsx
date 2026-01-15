import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neighborhood Video",
  description: "Be kind, please rewind!",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/seymour-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
