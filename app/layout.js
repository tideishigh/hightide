import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "Hightide",
  description: "A New Era of Water Conservation",
  icons: {
    icon: [{url: '/hightide_icon.ico'}],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header />

        {children}
        <SpeedInsights />
        <Analytics />

        <Footer />
      </body>
    </html>
  );
}
