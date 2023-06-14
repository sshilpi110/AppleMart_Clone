
import './App.css';
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Home from "./Component/Home"
import About from "./Component/About"
import Product from "./Component/Product"
import Contact from "./Component/Contact"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
