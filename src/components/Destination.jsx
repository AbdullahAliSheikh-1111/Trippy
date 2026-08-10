import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import "../components/DestinationStyles.css"
import DestinationData from "../components/DestinationData"

const Destination = () =>{

return (

<div className="destination">
<h1>Popular Destinations</h1>
<p>Tours give you the oppurtunity to see alot,within a time frame</p>


<DestinationData

className="firstdest"

heading="Taal Volcano, Batangas"
text="Taal Volcano in Batangas is one of Luzon's most striking sights — a volcano sitting inside a lake, which itself sits on an island. The crater hike takes about 45 minutes and is beginner-friendly, especially with a guide. Along the way, you'll pass volcanic rock formations and active steam vents. Since the trail can get hot and dusty, an early start is recommended, and many visitors cap off the hike with a bowl of bulalo afterward."

img1={Mountain1}
img2={Mountain2}
/>



<DestinationData

className="firstdest-reverse"

heading="Mt. Daguldul ,Batangas"
text="Mt. Daguldul in Batangas offers one of the region's standout views. The trek to the summit takes roughly 45 minutes and suits beginner hikers well, especially with guide assistance along the route. The terrain includes distinctive volcanic features — rocky outcrops and active steam vents. Because conditions can get warm and dusty, starting early is a good idea, and a bowl of bulalo afterward makes for a nice way to wrap up the trip."

img1={Mountain3}
img2={Mountain4}
/>



</div>

)


}

export default Destination