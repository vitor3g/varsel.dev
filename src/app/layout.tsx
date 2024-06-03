import type { Metadata } from "next";
import "@/styles/globals.css";
import "react-chat-elements/dist/main.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Varsel Agency",
  description:
    "Varsel é uma agencia dedicada a construção e produção de sistemas para web, mobile e desktop.",
  authors: [{ name: "Varsel Team", url: "https://varsel.dev" }],
  category: "agency",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://varsel.dev",
    title: "Varsel Agency",
    description:
      "Varsel é uma agencia dedicada na construção e produção de sistemas para web, mobile e desktop.",
    siteName: "varselagency",
    images: [
      {
        url: "https://varsel.dev/varsel.png",
        width: 1200,
        height: 630,
        alt: "varsel site",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="AW-16530132041" />
    </html>
  );
}
