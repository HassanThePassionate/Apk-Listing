import Cookies from "@/components/CookiesComponents/Cookies";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "../../style/Reset.css";
import "../../style/Variable.css";

const page = () => {
  return (
    <>
      <Navbar />
      <Cookies />
      <Footer />
    </>
  );
};

export default page;
