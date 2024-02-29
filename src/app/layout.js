import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Apk Listing ",
  description: "The list of apk listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titillium_Web.className}>
        {children}
        <script
          src="https://kit.fontawesome.com/191f0bfef4.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
