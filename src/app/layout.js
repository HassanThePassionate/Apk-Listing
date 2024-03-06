import Navbar from "./Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Apk Listing ",
  description: "The list of apk listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="light-theme">
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
