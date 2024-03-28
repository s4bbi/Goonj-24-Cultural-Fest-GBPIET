import { Link, useLocation } from "react-router-dom"; // Add this import statement at the beginning of your file

import { data } from "../data/dummydata";

console.log(data[0].Event[1]);

const EventDetail = () => {
    const location = useLocation(); // Corrected variable name to 'location'

    const eventDetail = location.state.event.data;

    return (
        <div className="w-full bg-cover">
            <div className="bg-bg_image bg-cover py-20 px-5 md:px-20 md:py-36 h-full hover:none">
                <div className="text-white">
                    <div className="w-full flex justify-between items-center">
                        <div className="font-cuda md:text-4xl">
                            {eventDetail.name}
                        </div>
                        <div className="flex gap-2 sm:gap-5 text-sm">
                            <button className="bg-[#5F43B2] font-cM md:text-xl px-4 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]">
                                REGISTER
                            </button>
                            <Link to="">
                                <button className="w-full bg-[#5F43B2] font-cM md:text-xl px-4 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]">
                                    RULE BOOK
                                </button>
                            </Link>    
                        </div>
                    </div>
                    <div>
                        <div className="text-white leading-7">
                            <h1 className="text-sm md:text-2xl font-cSB my-5">GUIDELINES:</h1>
                            <ul className="list-disc ml-8 md:ml-16 font-cR text-justify mb-8">
                                {eventDetail.guidelines.map((item) => (
                                    <li key={item} className="text-xs  md:text-lg">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="font-normal font-cR md:text-xl text-sm text-white md:my-10">
                            <p><span className="font-cM">JUDGING CRITERIA: </span>{eventDetail.judging}</p>
                            <p><span className="font-cM md:my-10">VOTING CRITERIA: </span>60% judges votes + 20% jury votes + 20% audience votes will determine the final winner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;