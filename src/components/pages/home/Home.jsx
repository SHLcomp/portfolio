import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import Hero from "../../hero/Hero";
import './Home.scss';
import Exp from "../../exp/Exp.jsx";
import Edu from "../../edu/Edu.jsx";
import Contact from "../../contact/Contact.jsx";
// import Proj from "../../proj/Proj.jsx";
const Home = () => {
  return (
    <div className="page-cont">
    <Navbar />
    <div>
      <Hero/>
      <Exp/>
      <Edu/>
      {/* <Proj/> */}
      <Contact/>
    </div>
    <Footer />
    </div>
  )
}

export default Home;
