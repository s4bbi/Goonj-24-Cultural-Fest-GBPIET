import CAPortalVid from "../assets/videos/CAPortalVid.webm"
import BG from "../assets/images/BG.png"
import CAPortal_Astro1 from "../assets/images/CAPortal_Astro1.webp"
import CAPortal_Astro2 from "../assets/images/CAPortal_Astro2.webp"
import CAPortal_Astro3 from "../assets/images/CAPortal_Astro3.webp"

const CAPortal = () => {
    return (
        <div className="bg-black text-white overflow-hidden">
            <div className="flex flex-col gap-14 items-center justify-center w-screen h-screen absolute">
                <h1 className="font-cuda text-white text-9xl">
                    CA Portal
                </h1>
                <button className="rounded-3xl text-white text-xl font-cR bg-[#5F43B2] py-2 px-4">REGISTER NOW</button>
            </div>

            <div className="w-full h-screen">
                <video className="w-full h-full object-cover" autoPlay loop muted>
                    <source src={CAPortalVid} type="video/webm" />
                </video>
            </div>

            <div>
            <div className="flex justify-between px-10 py-10 items-center gap-16">
                <div className="w-3/12">
                    <img src={CAPortal_Astro1} alt="Astronaut 1 img" />
                </div>
                <div className="w-7/12">
                    <div className="flex flex-col gap-14 font-cM ">
                        <p className="text-4xl">What is <span className="text-[#5F43B2]">CA Portal?</span></p>
                        <p>The  <span className="text-[#5F43B2]">Goonj Campus Ambassador Program</span> is your chance to be a key player in our college’s cultural fest! 
                            As an ambassador, you'll spread the word, boost participation, and create a buzz about Goonj. 
                            Gain exclusive perks, network with fellow students, and be at the forefront of the most anticipated event on campus! 
                            It's a short and sweet opportunity to showcase your leadership and creativity. Join the excitement of Goonj as a Campus Ambassador!
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between px-10 py-10 items-center gap-16">
                <div className="w-7/12">
                    <div className="flex flex-col gap-14 font-cM ">
                        <p className="text-4xl">Why become a <span className="text-[#5F43B2]">Campus Ambassador?</span></p>
                        <p>Elevate your college experience by becoming a <span className="text-[#5F43B2]">Campus Ambassador</span> for our cultural fest! 
                            As an ambassador, you'll be the catalyst for the fest's success, leading promotional efforts and shaping the event's narrative. 
                            This role is not just about leadership and creativity—it's a chance to forge lasting connections within the college community. 
                            Enjoy exclusive perks, gain recognition, and contribute to the vibrant cultural tapestry of our college. 
                            Be part of something extraordinary—join us in creating an unforgettable cultural fest!
                        </p>
                    </div>
                </div>
                <div className="w-3/12">
                    <img src={CAPortal_Astro2} alt="Astronaut 2 img" />
                </div>
            </div>
            <div className="font-cM">
                <div className="w-8/12 mx-auto flex justify-center py-10">
                    <p className="text-4xl">Perks</p>
                </div>
                <div className="flex w-9/12 justify-center mx-auto items-center">
                    <div className="flex flex-col gap-20">
                        <p> <span className="text-[#5F43B2]">Free Entry</span> for the Campus Ambassador on 15+ Participation with the CA referral code. </p>
                        <p>  <span className="text-[#5F43B2]">Free</span> Goonj  <span className="text-[#5F43B2]">T-shirt</span></p>
                    </div>
                    <div className="w-1/2">
                        <img src={CAPortal_Astro3} alt="Astronaut 3 img" className="w-1/2" />
                    </div>
                    <div>
                        <p> <span className="text-[#5F43B2]">Free Entry</span> to the Workshops conducted by our partners.</p>
                    </div>
                </div>
            </div>

            </div>

        </div>
    )
}

export default CAPortal