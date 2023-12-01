import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import Signup from "./scenes/signup/Signup";
import Login from "./scenes/login/Login";
import ContactUs from "./scenes/contactus/ContactUs";
import Services from "./scenes/services/Services";
import Gallery from "./scenes/gallery/Gallery";

const App: React.FC = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <h2>Mimi Brown</h2>
      <ul>
        <li>Name: Mimi Brown</li>
        <li>Favorite Hobby: Gardening, baking, and fitness.</li>
        <li>
          Why: Gardening is a calming and deeply relaxing activity that brings peace to my mind. During the lockdown, I discovered the joy of baking, and it has become a passion ever since. Taking care of my well-being is a priority, so I strive to stay active as much as possible.
        </li>
      </ul>
      <Footer />
      </div>
  );
};

export default App;
