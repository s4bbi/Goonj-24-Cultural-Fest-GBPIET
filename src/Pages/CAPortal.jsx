import CAPortalVid from "../assets/Videos/CAPortalVid.webm"
import CAPortal_Astro1 from "../assets/Images/CAPortal_Astro1.webp"
import CAPortal_Astro2 from "../assets/Images/CAPortal_Astro2.webp"
import CAPortal_Astro3 from "../assets/Images/CAPortal_Astro3.webp"
import '../index.css'

const CAPortal = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-col gap-10 items-center justify-center w-full h-screen absolute z-10">
                <h1 className="font-cuda text-white text-5xl xl:text-8xl md:text-7xl sm:text-6xl lg:text-8xl 2xl:text-9xl">
                    CA Portal
                </h1>
                <button className="btn" type="button">
                    <strong>REGISTER NOW</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>            
            </div>

            <div className="w-full h-screen">
                <video className="w-full h-full object-cover brightness-90" autoPlay loop muted>
                    <source src={CAPortalVid} type="video/webm" />
                </video>
            </div>

            

            <div className="bg-cover bg-center bg-no-repeat h-full bg-EventBG ">

                <div className="mx-20">
                    <div className="flex justify-between pt-20 pb-10 items-center gap-24">
                        <div className="w-3/12 hidden sm:flex">
                            <img src={CAPortal_Astro1} alt="Astronaut 1 img"/>
                        </div>
                        <div className="sm:w-9/12">
                            <div className="flex flex-col gap-14 font-cM ">
                                <p className="text-4xl">What is <span className="text-[#5F43B2]">CA Portal?</span></p>
                                <p className="font-cR">The  <span className="text-[#5F43B2] font-cM">Goonj Campus Ambassador Program</span> is your chance to be a key player in our college cultural fest! 
                                    As an ambassador, you will spread the word, boost participation, and create a buzz about Goonj. 
                                    Gain exclusive perks, network with fellow students, and be at the forefront of the most anticipated event on campus! 
                                    It is a short and sweet opportunity to showcase your leadership and creativity. Join the excitement of Goonj as a Campus Ambassador!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between py-10 items-center gap-16">
                        <div className="w-7/12">
                            <div className="flex flex-col gap-14 font-cM ">
                                <p className="text-4xl">Why become a <span className="text-[#5F43B2]">Campus Ambassador?</span></p>
                                <p className="font-cR">Elevate your college experience by becoming a <span className="text-[#5F43B2] font-cM">Campus Ambassador</span> for our cultural fest! 
                                    As an ambassador, you will be the catalyst for the fest s success, leading promotional efforts and shaping the events narrative. 
                                    This role is not just about leadership and creativity, it is a chance to forge lasting connections within the college community. 
                                    Enjoy exclusive perks, gain recognition, and contribute to the vibrant cultural tapestry of our college. 
                                    Be part of something extraordinary—join us in creating an unforgettable cultural fest!
                                </p>
                            </div>
                        </div>
                        <div className="w-3/12">
                            <img src={CAPortal_Astro2} alt="Astronaut 2 img" />
                        </div>
                    </div>
                    <div className="font-cM w-10/12 flex flex-col justify-center items-center mx-auto">
                        
                    <p className="text-4xl my-10">Perks</p>
                        
                        <div className="flex justify-center gap-14 mx-auto items-center">
                            <div className="flex flex-col gap-20">
                                <p> <span className="text-[#5F43B2]">Free Entry</span> for the Campus Ambassador on 15+ Participation. </p>
                                <p>  <span className="text-[#5F43B2]">Free</span> Goonj  <span className="text-[#5F43B2]">T-shirt</span></p>
                            </div>

                            <div className="w-1/4">
                                <img src={CAPortal_Astro3} alt="Astronaut 3 img"  />
                            </div>

                            <div className="text-right">
                                <p> <span className="text-[#5F43B2]">Free Entry</span> to the Workshops conducted by our partners.</p>
                            </div>
                        </div>
                    </div>

                    <div className="font-cM text-xl sm:text-2xl lg:text-4xl flex flex-col justify-center py-36 items-center gap-5 text-center">
                        <p>WHAT ARE YOU WAITIN’ FOR?</p>
                        <p className="text-[#5F43B2]">REGISTER NOW!!</p>
                    </div>
                
                </div>

            </div>

        </div>
    )
}

export default CAPortal