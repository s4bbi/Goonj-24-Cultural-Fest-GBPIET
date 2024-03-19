import aerocraft from '../assets/Images/Registration_Rocket.webp';

const CARegisterPage = () => {
  return (
    <div className='bg-EventBG w-screen h-full bg-cover bg-no-repeat'>
      <div className='p-2'>
        <div className='flex w-[40%] pt-24 mx-28'>
          <h1 className='font-cuda text-white text-center text-3xl md:text-center md:w-50% -mx-10 md:text-4xl md:ml-56'>
            Registration
          </h1>
        </div>
        <div className='flex justify-between px-12 py-10'>
          <div className="w-[500px] md:w-[770px] h-[800px] md:h-[500px] rounded-3xl bg-cover bg-center bg-no-repeat text-white b-1 -my-6 md:mx-10 bg-LoginBG">
            <div className='p-12 absolute'>
              <div className='flex flex-col justify-between md:flex-row md:gap-12'>
                <div>
                  <div className='text-white pb-3'>
                    <h1>Your name</h1>
                  </div>
                  <div>
                    <input type='text' placeholder='Your Name' className='text-white border-white rounded-md py-4 px-4 text-start bg-[#5f43b2] w-56 md:w-[320px]'></input>
                  </div>
                </div>
                <div>
                  <div className='text-white pb-3'>
                    <h1>Email Id</h1>
                  </div>
                  <div>
                    <input type='text' placeholder='Email Id' className='text-white border-white rounded-md py-4 p-4 text-start bg-[#5f43b2] w-56 md:w-[320px]'></input>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between md:flex-row md:gap-12 md:py-2'>
                <div>
                  <div className='text-white py-3'>
                    <h1>Your Phone Number</h1>
                  </div>
                  <div>
                    <input type='text' placeholder='xxxxxxxxxx' className='text-white border-white rounded-md py-4 p-4 text-start bg-[#5f43b2] w-56 md:w-[320px]'></input>
                  </div>
                </div>
                <div>
                  <div className='text-white py-3'>
                    <h1>Choose State</h1>
                  </div>
                  <select name='College City' className='bg-[#5f43b2]  rounded-lg  w-56 md:w-[320px] py-4 p-4 px-2 text-start'>
                    <option value='xx'>Uttarakhand</option>
                    <option value='xx'>xx</option>
                    <option value='xx'>xx</option>
                    <option value='xx'>xx</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col justify-between md:flex-row md:gap-12 md:py-2'>
                <div className='py-3'>
                  <div className='text-white pb-3'>
                    <h1>College City</h1>
                  </div>
                  <select name='College City' className='bg-[#5f43b2] px-3 rounded-lg  w-56 md:w-[320px] py-4 text-start'>
                    <option value='xx'> Choose City</option>
                    <option value='xx'>xx</option>
                    <option value='xx'>xx</option>
                    <option value='xx'>xx</option>
                  </select>
                </div>
                <div className='py-3'>
                  <div className='text-white text-start pb-3'>
                    <h1>College Name</h1>
                  </div>
                  <select placeholder='Choose State' name='' id='' className='bg-[#5f43b2] bg-opacity-[0.8] border text-white w-56 md:w-[320px]  p-4  rounded-xl text-start'>
                    <option value='' className='bg-[#5f43b2] text-white '>
                      Choose Name
                    </option>
                    <option value='' className='bg-[#5f43b2] text-white'>
                      GBPIET
                    </option>
                  </select>
                </div>
              </div>
              <div className='flex justify-center  pt-8'>
                <button type='button' className='btn'>
                  REGISTER
                </button>
              </div>
            </div>
          </div>
       
      
      <div className='sm:h-96 hidden lg:block lg:-my-32 lg:-mx-10'>
        <img src={aerocraft} className=''></img>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CARegisterPage;
