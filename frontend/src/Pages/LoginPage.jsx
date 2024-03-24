import astro from '../assets/Images/LoginAstronaut.png';
import { Link } from 'react-router-dom';

const CARegisterPage = () => {
  return (
    <div className="bg-EventBG h-fit flex justify-center pt-8">
      <div className="hidden sm:flex flex-col justify-end w-5/12">
          <img src={astro} alt="Astronaut" className="w-9/12"/>
      </div>
      <div className="sm:w-6/12 my-24 sm:mr-20 mx-2 rounded-3xl bg-cover bg-center bg-no-repeat text-white bg-LoginBG">
        <h1 className="font-cuda text-2xl sm:text-4xl flex justify-center py-8">USER SIGNUP</h1>
        <div className="sm:px-16 px-10">
            <form action="">
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                    <div className="flex flex-col w-full sm:w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">Your Name</label>
                        <input type="text" placeholder="YourName" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                    <div className="flex flex-col w-full sm:w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">Your Email</label>
                        <input type="text" placeholder="E-Mail ID" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                    <div className="flex flex-col sm:w-5/12">
                        <label className="font-cR mb-2 text-sm">Your Phone Number</label>
                        <input type="text" placeholder="+91" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                    <div className='flex flex-col sm:w-5/12'>
                        <label className="font-cR mb-2 font-light text-sm">College State</label>
                        <select name="College City"className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full">
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>                              <option value="xx">xx</option>
                          </select>
                      </div>              
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                    <div className="flex flex-col sm:w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College City </label>
                        <select name="College City"className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full">
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College Name</label>
                        <select name="College City"className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full">
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                            <option value="xx">xx</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center my-4 pb-2">
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

export default CARegisterPage;
