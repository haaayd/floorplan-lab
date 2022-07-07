import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {
  return (  
    <>
    <div className="kitchen"> 
    <Oven />
    <Sink /> 
    <span id="kitch">Kitchen</span>
    </div>

    </>
  )
}

export default Kitchen