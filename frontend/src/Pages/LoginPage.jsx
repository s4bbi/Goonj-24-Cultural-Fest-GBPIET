import astro from "../assets/Images/LoginAstronaut.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CARegisterPage = () => {
  const location = useLocation();
  const receivedUserData = location.state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: receivedUserData?.name,
    email: receivedUserData?.email,
    pNum: "",
    state: "",
    city: "",
    college: "",
  });

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/signup",
        formData
      );
      console.log(response);

      if (response.data.status === "success") {
        // navigate("/profile", { state: response.data.userCreated });
      }
    } catch (error) {
      console.log(error);
      setFormData({
        name: receivedUserData?.name,
        email: receivedUserData?.email,
        pNum: "",
        state: "",
        city: "",
        college: "",
      });
    }
  };

  const checkoutFunction = async () => {
    try {
      // Fetch order details from the backend API
      const res = await axios.get(
        "http://127.0.0.1:3000/api/v1/checkout/orderid"
      );
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
        callback_url: "http://127.0.0.1:3000/api/v1/checkout/paymentverify",
        theme: {
          color: "#0000FF",
        },
      };

      // Make sure the Razorpay script is loaded before creating a new instance
      if (window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        console.error("Razorpay script is not loaded");
      }
    } catch (error) {
      console.error("Error occurred while fetching order details:", error);
    }
  };

  return (
    <div className="bg-EventBG h-fit flex justify-center pt-8">
      <div className="hidden sm:flex flex-col justify-end w-5/12">
        <img src={astro} alt="Astronaut" className="w-9/12" />
      </div>
      <div className="sm:w-6/12 my-24 sm:mr-20 mx-2 rounded-3xl bg-cover bg-center bg-no-repeat text-white bg-LoginBG">
        <h1 className="font-cuda text-2xl sm:text-4xl flex justify-center py-8">
          USER SIGNUP
        </h1>
        <div className="sm:px-16 px-10">
          <form action="">
            <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
              <div className="flex flex-col w-full sm:w-5/12">
                <label className="font-cR mb-2 font-light text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="YourName"
                  defaultValue={receivedUserData?.name}
                  disabled
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                />
              </div>
              <div className="flex flex-col w-full sm:w-5/12">
                <label className="font-cR mb-2 font-light text-sm">
                  Your Email
                </label>
                <input
                  type="text"
                  placeholder="E-Mail ID"
                  defaultValue={receivedUserData?.email}
                  disabled
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
              <div className="flex flex-col sm:w-5/12">
                <label className="font-cR mb-2 text-sm">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+91"
                  onChange={(e) => handleChange(e, "pNum")}
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                />
              </div>
              <div className="flex flex-col sm:w-5/12">
                <label className="font-cR mb-2 font-light text-sm">
                  College State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  onChange={(e) => handleChange(e, "state")}
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-6 pb-6">
              <div className="flex flex-col sm:w-5/12">
                <label className="font-cR mb-2 font-light text-sm">
                  College City{" "}
                </label>
                <input
                  type="text"
                  placeholder="College City"
                  onChange={(e) => handleChange(e, "city")}
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                />
              </div>
              <div className="flex flex-col sm:w-5/12">
                <label className="font-cR mb-2 font-light text-sm">
                  College Name
                </label>
                <input
                  type="text"
                  placeholder="College Name"
                  onChange={(e) => handleChange(e, "college")}
                  className="bg-[#5f43b2] px-3 py-2 rounded-lg text-sm w-full"
                />
              </div>
            </div>
            <div className="flex justify-center my-4 pb-2">
              <button className="btn" type="submit" onClick={submitForm}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CARegisterPage;
