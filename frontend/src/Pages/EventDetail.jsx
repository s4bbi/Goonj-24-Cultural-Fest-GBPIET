import { Link, useLocation, useNavigate } from "react-router-dom"; // Add this import statement at the beginning of your file
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
// import { data } from "../data/dummydata";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaRocket } from "react-icons/fa6";
import { VKYRequest } from "../utils/requests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoggedContext from "../main";
import { UserContext } from "../main";
import { deleteCookie } from "../utils/Cookies";

const EventDetail = () => {
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const location = useLocation(); // Corrected variable name to 'location'
  const [paymentType, setPaymentType] = useState(1);
  const eventDetail = location.state.event.data;
  const [caId, setCaId] = useState("");

  const {setIsLogin} = useContext(LoggedContext);
  const {setUserData} = useContext(UserContext);

  const handleRegister = async () => {
    try {
      const response = await VKYRequest("post", "/events", {
        eventCode: 1920,
      });
    } catch (error) {
      if (error.response.status === 402) {
        setShowPaymentDialog(true);
      }else{
        deleteCookie('jwt');
          setIsLogin(false);
          setUserData({
            name: undefined,
            email: undefined,
            googleSubjectId: undefined,
            img: undefined,
            pNum: undefined,
            state: undefined,
            city: undefined,
            college: undefined
          });
        }
      }
    }
  

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // used to check ca id validity
  useEffect(() => {
    async function checkCaId() {
      if (caId.length === 5) {
        try {
          const response = await VKYRequest("post", "/auth/caidcheck", {
            ca_id: "GNJ-CA-" + caId,
          });

          if (response.data.status === "success") {
            console.log("CA ID is valid"); // here write the code to display that ca id is invalid
          }
        } catch (error) {
          console.log(error);
          // will show error only when ca id is invalid so display error here
        }
      }
    }
    checkCaId();
  }, [caId]);

  const checkoutFunction = async () => {
    toast.info(
      "Registration Begins from 25th April to 5th May!, Contact the event coordinator for more info.",
      {
        position: "top-center",
        style: {
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "1rem",
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          width: "30rem",
          maxWidth: "90vw",
        },
      }
    );
    // try {
    //   const res = await VKYRequest("get", `/checkout/orderid/${paymentType}`);
    //   console.log(res.data);

    //   // Extract necessary data from the response
    //   const { amount, id } = res.data.order;

    //   // Prepare options for Razorpay payment
    //   const options = {
    //     key: import.meta.env.VITE_RAZORPAY_API_KEY,
    //     amount: amount,
    //     currency: "INR",
    //     name: "Goonj '24",
    //     description: "Test transaction",
    //     order_id: id,

    //     // Include the Authorization header with the JWT

    //     handler: async function (response) {

    //       try {

    //         const responses = await VKYRequest(
    //           "post",
    //           "/checkout/paymentverify",
    //           response
    //         );
    //         if (responses.data.status === "success") {
    //           console.log("We have verified you");
    //         } else {
    //           alert(
    //             "Your razorpay credential is invalid"
    //           );
    //         }
    //       }catch (error) {
    //         console.log(error);
    //       }},

    //     theme: {
    //       color: "#0000FF",
    //     },
    // };

    // Make sure the Razorpay script is loaded before creating a new instance
    //     if (window.Razorpay) {
    //       const razor = new window.Razorpay(options);
    //       razor.open();
    //     } else {
    //       console.error("Razorpay script is not loaded");
    //     }
    //   } catch (error) {
    //     console.error("Error occurred while fetching order details:", error);
    //   }
  };

  useEffect(() => {}, [paymentType]);
  const withAccomodation = 1699;
  const withOutAccomodation = 999;


  return (
    <div className="w-full bg-cover">
      <div className="bg-EventBG bg-cover py-20 px-5 md:px-20 md:pt-32 h-full hover:none">
        {!showPaymentDialog && (
          <div className="text-white">
            <div className="w-full flex justify-between items-center">
              <div className="font-cuda md:text-4xl text-yellow-600 ">
                {eventDetail.name}
              </div>
              <div className="flex gap-2 sm:gap-5 text-sm">
                {eventDetail.interCollege && (
                  <button
                    onClick={() => {
                      if (eventDetail.registerLink) {
                        window.open(eventDetail.registerLink, "_blank");
                      } else {
                        handleRegister();
                      }
                    }}
                    className="bg-[#5F43B2] font-cM md:text-xl px-4 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]"
                  >
                    REGISTER
                  </button>
                )}
                {eventDetail.Rulebook && (
                  <Link to={eventDetail.Rulebook}>
                    <button className="w-full bg-[#5F43B2] font-cM md:text-xl px-4 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]">
                      RULE BOOK
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div>
              <div className="text-white leading-7">
                {eventDetail.entryfees && (
                  <p className="text-xs md:text-xl font-cR text-justify my-8 uppercase font-extrabold">
                    <span className="text-yellow-500">
                      {eventDetail.entryfees}
                    </span>
                  </p>
                )}
                <p className="text-xs md:text-xl font-cR text-justify my-8 uppercase font-extrabold">
                  {eventDetail.description}
                </p>
                <h1 className="text-sm md:text-2xl font-cSB my-5">
                  GUIDELINES:
                </h1>
                <ul className="list-disc ml-8 md:ml-16 font-cR text-justify mb-8">
                  {eventDetail.guidelines.map((item) => (
                    <li key={item} className="text-xs  md:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
                {eventDetail.coordinator && (
                  <div className="flex flex-col gap-4 font-cM text-sm md:text-xl">
                    {" "}
                    Event Coordinator:
                    <div className="flex flex-col gap-1 text-yellow-500 text-sm md:text-lg">
                      <span> {eventDetail.coordinator} </span>
                      <span> {eventDetail.email} </span>
                      <span> {eventDetail.phone} </span>
                    </div>
                  </div>
                )}

                {eventDetail.type &&
                  eventDetail.type.map((item) => (
                    <div key={item.name} className="flex justify-between my-5">
                      <div className="gap-1">
                        <p className="md:text-2xl font-cuda">{item.name}</p>
                        <p>{item.coordinator}</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex flex-col sm:flex-row  items-start gap-2">
                          <button className="bg-[#5F43B2] text-xs font-cM md:text-lg px-4 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]">
                            <Link to={item.formlink} target="_blank">
                              REGISTER
                            </Link>
                          </button>

                          <button className="w-full text-xs bg-[#5F43B2] font-cM md:text-lg px-4 py-1 rounded-full shadow-md shadow-[#5F43B2] hover:bg-[#5c2ee3]">
                            <Link to={item.subRuleBook} target="_blank">
                              RULE BOOK
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        {showPaymentDialog && (
          <div className="h-fit ">
            <div
              className="h-fit w-fit sm:w-96 mx-auto mt-24 border-2 border-[#4a338e] bg-[#5F43B2] rounded-[32px] bg-clip-padding backdrop-filter bg-opacity-[0.2] px-5 py-5 text-white flex flex-col justify-evenly"
              data-aos="zoom-in"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-cSB">Select accordingly</h2>
                <div onClick={() => setShowPaymentDialog(!showPaymentDialog)}>
                  <ImCross className="cursor-pointer" />
                </div>
              </div>
              <div className="text-lg py-5">
                <input
                  type="radio"
                  id="accomodation"
                  name="optionChoice"
                  value="withAccomodation"
                  checked
                  onClick={() => {
                    setPaymentType(1);
                  }}
                />{" "}
                <label for="accomodation">
                  <span className="font-cM">
                    <large className="text-xl font-semibold">
                      ₹ {withAccomodation}{" "}
                      <span className="font-cR"> (with Accomodation)</span>
                    </large>
                  </span>
                  <p className="font-cR">
                    Event Participation + Accomodation + Food (2 Meals) + I'd
                    Card + Dj Night Pass
                  </p>
                </label>
                <input
                  type="radio"
                  id="withoutAccomodation"
                  name="optionChoice"
                  value="with Out Accomodation"
                  className="mt-4"
                  onClick={() => {
                    setPaymentType(2);
                  }}
                />
                <label for="withoutAccomodation">
                  {" "}
                  <span className="font-cM">
                    <large className="text-xl font-semibold">
                      ₹ {withOutAccomodation}{" "}
                      <span className="font-cR"> (Non Accomodation)</span>
                    </large>
                  </span>
                  <p className="font-cR">
                    Event Participation + I'd Card + Dj Night Pass
                  </p>
                </label>
                <div className="flex flex-col gap-2 py-2">
                  <label for="caRefferalId" className=" text-xl font-cM pt-2">
                    CA Referral ID
                  </label>
                  <input
                    type="text"
                    id="caRefferId"
                    name="caReffer"
                    placeholder="Enter CA Id last 5 digits"
                    className="text-black p-2 rounded-xl"
                    onChange={(e) => {
                      setCaId(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button className="w-full py-2 bg-[#5F43B2] rounded-xl font-cR flex justify-center">
                {" "}
                <span className="flex gap-2" onClick={checkoutFunction}>
                  Proceed to Pay <FaRocket className="mt-[6px]" />
                </span>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EventDetail;
