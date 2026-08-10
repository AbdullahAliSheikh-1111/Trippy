import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Img from "../assets/night.jpg"
import Footer from "../components/Footer.jsx"
import Trip from "../components/Trip.jsx"

function Service(){
    return(
        <>
                    <Navbar/>
                  <Hero
                  cName="hero-mid"
                  heroImg={Img}
                  title="Service"
                  btnClass="hide"/>
                   
                   <Trip/>
                   <Footer/>
        </>
    )
}


export default Service