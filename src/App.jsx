import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SupportPage from "./pages/SupportPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
