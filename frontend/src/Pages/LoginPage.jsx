import astro from '../assets/Images/LoginAstronaut.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CARegisterPage = () => {
    const checkoutFunction = async () => {


        try {
            // Fetch order details from the backend API
            const res = await axios.get('http://127.0.0.1:3000/api/v1/checkout/orderid');
            console.log(res.data);
    
            // Extract necessary data from the response
            const { amount, id } = res.data.order;
    
            // Prepare options for Razorpay payment
            const options = {
                key: import.meta.env.VITE_RAZORPAY_API_KEY,
                amount: amount,
                currency: "INR",
                name: "Goonj 24",
                description: "Test transaction",
                order_id: id,

                // This should ideally be handled server-side for security reasons. It has similar authentication procedure just like JWT
                callback_url: 'http://127.0.0.1:3000/api/v1/checkout/paymentverify',
                theme: {
                    color: '#0000FF'
                }
            };
    
            // Make sure the Razorpay script is loaded before creating a new instance
            if (window.Razorpay) {
                const razor = new window.Razorpay(options);
                razor.open();
            } else {
                console.error('Razorpay script is not loaded');
            }
        } catch (error) {
            console.error('Error occurred while fetching order details:', error);
        }
    };
    
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
                        <input type="text" placeholder="State" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                      </div>              
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
                    <div className="flex flex-col sm:w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College City </label>
                        <input type="text" placeholder="College City" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                    <div className="flex flex-col sm:w-5/12">
                        <label className="font-cR mb-2 font-light text-sm">College Name</label>
                        <input type="text" placeholder="College Name" className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"/>
                    </div>
                </div>
                <div className="flex justify-center my-4 pb-2">
                    <button className="btn" type="submit" onClick={checkoutFunction}>
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
