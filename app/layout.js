import Header from "./components/Header";
import "./globals.css";

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
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
