import "./TripStyles.css";
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique
      destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading = "Trip in Indonesia"
          text="Indonesia is a Southeast Asian and Oceanian nation made up of more than 17,000 islands, situated between the Indian and Pacific oceans. Its major islands include Sumatra, Java, Sulawesi, and portions of Borneo and New Guinea."
        />


    <TripData
          image={Trip2}
          heading = "Trip in Malaysia"
  text="Malaysia sits in Southeast Asia, spanning part of the Malay Peninsula and the island of Borneo. The country draws visitors for its coastline, tropical rainforests, and a cultural blend shaped by Malay, Chinese, Indian, and European influences."
        />


    <TripData
          image={Trip3}
          heading = "Trip in France"
  text="France, located in Western Europe, is home to a mix of medieval towns, alpine scenery, and coastal areas along the Mediterranean. Its capital, Paris, is well known for haute couture fashion, renowned art museums like the Louvre, and landmarks such as the Eiffel Tower."
        />



      </div>
    </div>


     


  );
}






export default Trip