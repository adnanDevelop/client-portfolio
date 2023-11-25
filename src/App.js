import React , {useEffect} from "react";
import Home from './component/pages/Home';
import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "./component/NavFooter/Navbar";
import Footer from "./component/NavFooter/Footer";
import TopBtn from "./component/utilis/TopBtn";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  } , []);

  return (
    <>
    <TopBtn/>
    <Navbar/>
     <Home />
     <Footer/>
    </>
  );
}

export default App;
