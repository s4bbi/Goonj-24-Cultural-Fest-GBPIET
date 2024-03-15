import { Link } from "react-router-dom";
import LoginAstro from "../assets/Images/LoginAstronaut.png";

const LoginPage = () => {
  return (
    <div className="bg-EventBG h-fit flex justify-center">
      <div className="hidden sm:flex flex-col justify-end w-5/12">
          <img src={LoginAstro} alt="Astronaut" className="w-9/12"/>
      </div>
      <div className="sm:w-6/12 my-24 sm:mr-20 mx-2 rounded-3xl bg-cover bg-center bg-no-repeat text-white bg-[#5f43b2] " style={{ backgroundImage: "url('/src/assets/Images/LoginBG.png')" }}>
        <h1 className="font-cuda text-3xl flex justify-center py-8">USER SIGNUP</h1>
        <div className=" sm:mx-16 mx-2">
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
                <div className="flex justify-center mb-5">
                    <button className="btn" type="submit">
                        <Link to="/profile">
                            Submit
                            </Link>    
                        </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
