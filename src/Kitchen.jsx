import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {
  return (  
    <>
    <div className="kitchen"> 
    <span>Kitchen</span>
    <Oven />
    <Sink /> 
    </div>

    </>
  );
}

export default Kitchen;