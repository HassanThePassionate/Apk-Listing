import { Roboto } from "next/font/google";
import "../style/global.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Apk Hub",
  description: "The apk Hub is the most popular project in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar />
        <div className='body min-h-screen'>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
