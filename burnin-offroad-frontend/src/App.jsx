import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Purchase from "./pages/Purchase";
import Footer from "./sharabelComponent/Footer";
import Navbar from "./sharabelComponent/Navbar";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Payment from "./pages/Payment";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductsDetails />} />
        <Route path="/product" element={<Product />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/cancel" element={<PaymentCancel />} />
        <Route path="/payment/:id" element={<Payment />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
