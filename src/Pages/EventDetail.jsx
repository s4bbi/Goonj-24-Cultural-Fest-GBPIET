const EventDetail = () => {
    return (
        <div className="w-full bg-cover h-screen">
            <div className="bg-bg_image bg-cover px-5 md:px-20 md:py-6 h-full">
                <div className="text-white">
                <div className="flex justify-between py-4 items-center md:justify-start md:gap-[500px]   ">
                    <div className="font-cuda md:text-4xl">
                        DRAMA/SKIT
                    </div>
                    <div>
                        <button className="bg-[#5F43B2] font-cR font-medium md:text-2xl  px-6 py-1 rounded-full shadow-md shadow-[#5F43B2]">
                            REGISTER
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-justify font-normal text-sm md:text-2xl font-cR text-white/55 md:w-[700px] md:py-8">
                    A type of drama conflict in which members of each branch will showcasetheir play based on the theme.
                    </p>
                    <div className="text-white  leading-7	">
                        <h1 className="text-sm md:text-2xl font-cR font-semibold my-5">GUIDELINES :</h1>
                        <ul className="list-disc ml-8 md:ml-16 font-normal text-sm font-cR md:text-xl  text-white/55 text-justify">
                            <li>6 to 8 members are allowed for each team. If members less or exceeds points deduction will be there.</li>
                            <li>
                            The content should be socially relevant and suitable for performance. No vulgarity or obscene should be there else it can lead to disqualification.</li>
                            <li>Use of props are allowed.</li>
                            <li>Arrangement of props and outfits will be done by the team itself.</li>
                            <li>To enhance or highlight the drama use of music (instruments, singing)is allowed.</li>
                            <li>The drama should not exceed more than 7 minutes and 1 minute for stage clearance will be given. If time exceeds, points deduction will be there.(if there is technical fault , extra time will be given accordingly.)</li>
                        </ul>
                    </div>
                    <div className="font-normal font-cR md:text-xl text-sm text-white/55 md:my-10">
                        <p><span className="font-normal text-white ">JUDGING CRITERIA: </span>Audience impact + representation + expressions + theme& dialogue execution + costume.</p>
                        <p><span className="font-normal text-white md:my-10">VOTING CRITERIA: </span>60% judges votes + 20% jury votes + 20% audience votes will determine the final winner.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EventDetail;