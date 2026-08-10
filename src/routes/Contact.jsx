import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Imgtwo from "../assets/2.jpg"
import Footer from "../components/Footer.jsx"
import ContactForm from "../components/ContactForm.jsx"

function Contact(){
    return(
        <>
             <Navbar/>
                  <Hero
                  cName="hero-mid"
                  heroImg={Imgtwo}
                  title="About"
                  btnClass="hide"/>
                  <ContactForm/>
                   <Footer/>
        </>
    )
}


export default Contact