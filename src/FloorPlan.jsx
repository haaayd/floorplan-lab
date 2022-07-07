import Kitchen from "./Kitchen"
import LivingRoom from "./Livingroom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"


const FloorPlan = () => {
  return ( 
    <div id="floorp">
    <Bedroom bedNum={1} />
    <Kitchen />
    <LivingRoom />
    <Bath size="Full"/>
    <Bedroom bedNum={2} />
    <Bath size="Half"/>
    <Bedroom bedNum={3} />
  
    </div>

  );
}

export default FloorPlan