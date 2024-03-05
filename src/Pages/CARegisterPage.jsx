import imgHome from "../assets/Images/Events_BG.webp"
import aerocraft from "../assets/Images/Registration_Rocket.webp"




const CARegisterPage = () => {
    return(
        <div  className="bg-[url('src/assets/Images/Events_BG.webp')] w-full h-screen bg-cover bg-no-repeat">
            CA Register Page
            <div className="py-36 ">
                <div className="flex px-19 w-[2/12] mx-72">
                    <h1 className="font-cuda text-white text-start text-5xl">Registration </h1>
                </div>
                <div className="flex justify-between p-5 ">
                    <div className="bg-violet-400 w-[900px] h-[400px] mx-[45px] my-7 rounded-3xl opacity-[0.2] border-solid bg-blur ">
                    <div className="p-10 absolute ">
                        <div className="flex justify-between gap-20">
                        <div className="text-white">
                                <h1>Your name</h1>
                            </div>
                            <div className="text-white">
                                <h1>Your name</h1>
                            </div>


                        </div>
                           
                        <div className="flex justify-between gap-28">
                            
                            <div className="py-3">
                                <input type="text" placeholder="Your Name" className="text-white border-white  rounded-md py-4 p-4 px-10 text-center bg-[#a023d2d2] w-80"></input>
                            </div>    
                            <div className="py-3">    
                                <input type="text" placeholder="Email ID" className="text-white border-white  rounded-md py-4 p-4 px-10 text-center bg-[#a023d2d2] w-80 border-white text-white"></input>
                             </div>
                        </div>
                       
                            <div className="flex justify-between gap-20">
                                <div className="text-white">
                                    <h1>Your name</h1>
                                </div>
                                <div className="text-white">
                                    <h1>Your name</h1>
                                </div>
                            </div>   
                        <div className="flex justify-between gap-28">
                            <div className="py-3">
                                <input type="text" placeholder="Your Name" className="text-white border-white  rounded-md py-4 p-4 px-10 text-center bg-[#a023d2d2] w-80"></input>
                            </div>
                            <div className="py-3">
                                <select placeholder="Choose State" name="" id="" className="bg-[#a023d2d2] bg-opacity-[0.8] border text-white rounded font-medium w-80 py-4 p-4 px-10 text-center">
                                    <option value="" class="bg-[#a023d2d2] text-white ">Uttarkhand</option>
                                    <option value="" class="bg-[#a023d2d2] text-white"></option>
                                    </select>     
                            </div>      
                           
                        </div>
                        <div className="flex justify-between gap-20">
                        <div className="text-white">
                                <h1>Your name</h1>
                            </div>
                            <div className="text-white">
                                <h1>Your name</h1>
                            </div>


                        </div>
                        <div className="flex justify-between gap-28">
                                <div className="py-3">
                                    <select placeholder="Choose State" name="" id="" className="bg-[#a023d2d2] bg-opacity-[0.8] border text-white rounded font-medium w-80 py-4 p-4 px-10 text-center">
                                        <option value="" class="bg-[#a023d2d2] text-white ">English</option>
                                        <option value="" class="bg-[#a023d2d2] text-white">Hindi</option>
                                    </select>           
                                </div>
                                <div className="py-3">
                                    <select placeholder="Choose State" name="" id="" className="bg-[#a023d2d2] bg-opacity-[0.8] border text-white rounded font-medium w-80 py-4 p-4 px-10 text-center">
                                        <option value="" class="bg-[#a023d2d2] text-white ">Choose Name</option>
                                        <option value="" class="bg-[#a023d2d2] text-white">Hindi</option>
                                    </select> 

                                </div>
                        </div>



                    </div>


                    </div>
                    <div className="">
                        <img src={aerocraft} className=""></img>
                    </div>    
          
                </div>      
                
                  
4
            </div>







        </div>
    )
}

export default CARegisterPage;