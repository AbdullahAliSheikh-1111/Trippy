import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Img from "../assets/night.jpg"
import Footer from "../components/Footer.jsx"
import AboutUs from "../components/AboutUs.jsx"

function About(){
    return(
        <>
           <Navbar/>
                  <Hero
                  cName="hero-mid"
                  heroImg={Img}
                  title="About"
                  btnClass="hide"/>
                  <About/>
                   <Footer/>
        </>
    )
}


export default About