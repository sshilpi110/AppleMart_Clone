
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
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
