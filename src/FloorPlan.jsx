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
    <Bedroom bedNum={1} />
    <Bedroom bedNum={2} />
    <Bedroom bedNum={3} />
    <Bath size="Full"/>
    <Bath size="Half"/>
    </div>

  );
}

export default FloorPlan