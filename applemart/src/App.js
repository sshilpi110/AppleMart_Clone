
import './App.css';
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Home from "./Component/Home"
import About from "./Component/About"
import Product from "./Component/Product"
import Contact from "./Component/Contact"
import {  Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route to="/" Component={Home} />
        <Route to="/about" Component={About} />
        <Route to="/product" Component={Product} />
        <Route to="/contact" Component={Contact} />
        {/* <Redirect to="/" /> */}

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
