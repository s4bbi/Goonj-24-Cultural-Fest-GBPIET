import LoginAstro from "../assets/Images/LoginAstronaut.png";

const LoginPage = () => {
  return (
    <div className="bg-EventBG h-screen flex">
      <div className="flex flex-col justify-end w-5/12">
        <div className="flex flex-col">
          <img src={LoginAstro} alt="Astronaut" className="w-9/12" />
        </div>
      </div>
      <div className="w-6/12 my-24 mr-20 rounded-3xl bg-cover bg-center bg-no-repeat text-white " style={{ backgroundImage: "url('/src/assets/Images/LoginBG.png')" }}>
        <h1 className="font-cuda text-3xl flex justify-center py-8">USER SIGNUP</h1>
        <div className=" mx-16">
            <form action="">
                <div className="flex justify-between">
                    <div className="flex flex-col mb-6 w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">Your Name</label>
                        <input type="text" placeholder="YourName" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                    <div className="flex flex-col w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">Your Email</label>
                        <input type="text" placeholder="E-Mail ID" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col mb-6 w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">Your Phone Number</label>
                        <input type="text" placeholder="+91" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                    <div className="flex flex-col w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College State</label>
                        
                        <select name="College City"className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full">
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College City </label>
                        
                        <select name="College City"className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full">
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College Name</label>
                        
                        <select name="College City"className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full">
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <div className="flex flex-col mb-6 w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">CA Referral ID</label>
                        <input type="text" placeholder="CA Referral ID" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
