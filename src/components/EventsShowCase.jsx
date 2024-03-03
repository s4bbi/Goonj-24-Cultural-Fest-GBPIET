import planetImage from "../assets/Images/Dramaflict_planet.webp"
import Event from "./Event";


const EventShowCase = (item) => {
    console.log(item.item.Event)
    return (
        <div className=" border-2 border-[#5F43B2] my-10 bg-[#5F43B2] rounded-[42px] bg-clip-padding backdrop-filter  bg-opacity-[0.2] touch-none ">
            <div className="flex items-center mt-4 mx-5 gap-4">
                <div className="w-16 h-16 "><img src={planetImage}/></div>
               
                <h2 className="text-white text-lg">{item.item.name}</h2> 
            </div>
            <div className="flex overflow-auto gap-8 pl-5">
               {item.item.Event.map((data)=>(
                <div key={data.id}>
                <Event data={data}/>
                </div>
               ))}
              
            </div>
         
        </div>
    )
}

export default EventShowCase;