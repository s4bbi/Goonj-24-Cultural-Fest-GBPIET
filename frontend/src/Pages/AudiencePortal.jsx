import { Link } from "react-router-dom";
import '../index.css';
import AudPortalVid from "../assets/Videos/AudPortalVid.webm";
import AudAstro1 from "../assets/Images/AudAstro1.webp";
import AudAstro2 from "../assets/Images/AudAstro2.webp";

const AudiencePortal = () => {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-col gap-10 items-center justify-center w-full h-screen absolute z-10">
                <h1 className="text-white z-30 md:text-[100px] font-cuda text-5xl drop-shadow-2xl text-center">Audience Portal</h1>
                <div className="flex gap-4 flex-wrap text-center justify-center">
                    <button className="btn" type="button">
                        <Link to="https://forms.gle/sRWBgxbfoRusQhue9">
                            <strong className="font-cM text-xs px-4">Register as GBPIETian</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </Link>
                    </button>
                    <button className="btn text-center" type="button">
                        <Link to="https://forms.gle/N2sRPXRN78wgk8JcA" target="blank">
                            <strong className="font-cM text-xs px-4">Register as Non-GBPIETian</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </Link>
                    </button>
                    <button className="btn" type="button">
                        <Link to="https://forms.gle/Zgv5PRV5iyc436ui7">
                            <strong className="font-cM text-xs px-4">Register as Faculty and Staff</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>

            <div className="w-full h-screen">
                <video className="w-full h-full object-cover brightness-90" autoPlay loop muted>
                    <source src={AudPortalVid} type="video/webm"/>
                </video>
            </div>

            <div className="bg-cover bg-center bg-no-repeat h-full bg-EventBG px-20">
                <section className="mx-auto py-20">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="w-full md:w-4/12">
                            <img src={AudAstro1} alt="Astronaut 1 img" className="hidden md:block"/>
                        </div>
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-col gap-14 font-cM text-center md:text-left">
                                <h2 className="text-4xl">What is <span className="text-[#5F43B2]">Audience Portal?</span></h2>
                                <p className="font-cR">As an audience member, you will have the opportunity to immerse yourself in a rich tapestry of diverse talents, from mesmerizing dance routines and soulful musical performances to thought-provoking theatrical acts. Goonj is more than just a festival; it is a platform for expression, unity, and shared joy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-col gap-14 font-cM text-center md:text-left">
                                <h2 className="text-4xl">Register <span className="text-[#5F43B2]">Now!</span></h2>
                                <p className="font-cR">Register now to secure your spot and be a part of the cultural extravaganza that promises to ignite your senses and leave you with lasting memories. Connect with fellow enthusiasts, embrace the energy of live performances, and witness the magic of cultural diversity coming together on one stage.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12">
                            <img src={AudAstro2} alt="Astronaut 2 img" className="hidden md:block"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AudiencePortal;
