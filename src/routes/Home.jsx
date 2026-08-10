import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Destination from "../components/Destination"
import imim from "../assets/12.jpg"
import Trip from "../components/Trip.jsx"
import Footer from "../components/Footer.jsx"


function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={imim}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        url="/"
        btnText="Travel Plan"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}


export default Home