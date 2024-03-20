import {data } from  "../data/dummydata";
import { useLocation, useParams } from "react-router-dom";
console.log(data[0].Event[1])
const EventDetail = () => {
    const data = useLocation();

  const eventDetail = data.state.event.data;
  console.log(eventDetail)
    return (
        <div className="w-full bg-cover">
            <div className="bg-bg_image bg-cover px-5 md:px-20 md:py-6 h-full">
                <div className="text-white">
                <div className="flex justify-between py-4 pt-24 items-center md:pt-24 md:justify-start md:gap-[500px]">
                    <div className="font-cuda md:text-4xl">
                        {eventDetail.name}
                    </div>
                    <div>
                        <button className="bg-[#5F43B2] font-cM font-medium md:text-2xl  px-6 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]">
                            REGISTER
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-justify font-normal text-sm md:text-2xl font-cR text-white/55 md:py-8">
                   {eventDetail.decription}
                    </p>
                    {eventDetail.topics &&
                    <ul className="list-disc ml-8 md:ml-16">
                 
                  { eventDetail.topics.map((item)=>(
                    <li className="text-justify font-normal text-xs md:text-xl font-cR text-white/55 md:py-1">
                        {item}
                    </li>
                  ))}
                    </ul>}
                    <div className="text-white  leading-7	">
                        <h1 className="text-sm md:text-2xl font-cR font-semibold my-5">GUIDELINES :</h1>
                        <ul className="list-disc ml-8 md:ml-16 font-normal text-sm font-cR md:text-xl  text-white/55 text-justify">
                            {eventDetail.guidelines.map((item)=>(
                                <li>{
                                    item
                                    }</li>
                            ))}
                        </ul>
                    </div>
                    <div className="font-normal font-cR md:text-xl text-sm text-white/55 md:my-10">
                        <p><span className="font-normal text-white ">JUDGING CRITERIA: </span>{eventDetail.judging}</p>
                        <p><span className="font-normal text-white md:my-10">VOTING CRITERIA: </span>60% judges votes + 20% jury votes + 20% audience votes will determine the final winner.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EventDetail;