import astro from "../assets/Images/CAPortal_Astro3.webp"

const Profile = () => {
    return(
        <div >
            <div className="text-white bg-EventBG w-screen h-screen text-wider">
                <div>
                    <h1 className="text-5xl text-center pt-36 font-cuda ">PROFILE</h1>
                </div>
                <div className="flex justify-center p-12 gap-9 font-cM ">
                    <div>
                        <img src={astro} className="w-72 border-2 border-[#5f43b2] rounded-2xl"/>
                    </div>
                    <div className="flex justify-center md:flex
                    ">
                    <div className="flex justify-between gap-28 pt-4 text-lg px-24">
                        <div className=" gap-20">
                        <h1 className="p-2 text-[#5f43b2] text-lg">s4bbi</h1>
                        <h1 className="p-2">xxxxxxxxxx</h1>
                        <p className="w-80 p-2">Govind Ballabh Pant Institute of Engineering and Technology, Pauri-Garhwal, Uttarakhand</p>
                    </div>
                    <div className="gap-28">
                        <div className="text-white font-cM p-2">GOONJ ID: <span className="text-[#5f43b2]">GNJ6969</span></div>
                        <div className="p-2">s4bbi4596@gmail.com</div>
                    </div>
                    </div>
<<<<<<< HEAD


                    </div>
                    



=======
>>>>>>> 5a47c8224b364c65c14a1d95ba2cbf2ac6efd4e8
                </div>
                <div className="px-60 font-cM">
                        <span className="font-medium text-lg border-b-2 border-[#5f43b2]">REGISTERED EVENTS</span>
                        <div className="py-3">
                        <h1>DRAMA / SKIT</h1>
                        <h1>DANCE BATTLE</h1>
                        </div>
                    </div>



            </div>
           
        </div>
    )
}

export default Profile