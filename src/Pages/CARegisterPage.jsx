import imgHome from '../assets/Images/Events_BG.webp';
import aerocraft from '../assets/Images/Registration_Rocket.webp';
import planet from '../assets/Images/CAPortal_Globe.webp';
0

const CARegisterPage = () => {
  return (
    <div className='bg-EventBG w-screen h-full bg-cover bg-no-repeat'>
      <div className=''>
        <img
          src={planet}
          className='blur absolute top-36 left-5 -mt-16 -ml-24 lg:-ml-32 xl:ml-56 object-center max-w-none w-52'/>
      </div>
      <div>
        <div class="">
          <div className='p-2'>
            <div className='flex w-[40%]  pt-24 mx-28'>
              <h1 className='font-cuda text-white text-center text-3xl'>
                Registration{' '}
              </h1>
            </div>
            <div className='flex justify-between  px-12 py-10'>
              <div
                className='md:w-fit h-[800px] rounded-3xl bg-cover bg-center bg-no-repeat text-white  b-1 -my-6 '
                style={{
                  backgroundImage: "url('/src/assets/Images/LoginBG.png') ",
                }}
              >
                <div className='p-10 absolute'>
                  <div className='flex flex-col justify-between'>
                    <div>
                      <div className='text-white pb-3'>
                        <h1>Your name</h1>
                      </div>
                      <div className=''>
                        <input
                          type='text'
                          placeholder='Your Name'
                          className='text-white border-white rounded-md py-4 px-4 text-start bg-[#5f43b2] w-80'></input>
                      </div>
                    </div>
                    <div>
                      <div className='text-white pb-3 py-2'>
                        <h1>Email Id</h1>
                      </div>

                      <div className=''>
                        <input
                          type='text'
                          placeholder='Email Id'
                          className='text-white border-white rounded-md py-4 p-4 text-start bg-[#5f43b2] w-80'></input>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col justify-between'>
                    <div>
                      <div className='text-white py-3'>
                        <h1>Your Phone Number</h1>
                      </div>
                      <div className=' '>
                        <input
                          type='text'
                          placeholder='xxxxxxxxxx'
                          className='text-white border-white  rounded-md py-4 p-4  text-start bg-[#5f43b2] w-80'></input>
                      </div>
                    </div>

                    <div className=''>
                      <div className='text-white py-3'>
                        <h1>Choose State</h1>
                      </div>

                      <select
                        name='College City'
                        className='bg-[#5f43b2]  rounded-lg  w-80 py-4 p-4 px-2 text-start'>
                        <option value='xx'>Uttarakhand</option>
                        <option value='xx'>xx</option>
                        <option value='xx'>xx</option>
                        <option value='xx'>xx</option>
                      </select>
                    </div>
                  </div>

                  <div className='flex flex-col justify-between'>
                    <div className='py-3'>
                      <div className='text-white pb-3'>
                        <h1>College City</h1>
                      </div>
                      <select
                        name='College City'
                        className='bg-[#5f43b2] px-3 py-2 rounded-lg  w-80 p-4 text-start'>
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

                      <select
                        placeholder='Choose State'
                        name=''
                        id=''
                        className='bg-[#5f43b2] bg-opacity-[0.8] border text-white  w-80  p-4  rounded-xl text-start'
                      >
                        <option value='' class='bg-[#5f43b2] text-white '>
                          Choose Name
                        </option>
                        <option value='' class='bg-[#5f43b2] text-white'>
                          GBPIET
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='flex justify-center  pt-8'>
                    <button
                      type='button'
                      class='focus:outline-none text-white bg-[#5f43b2] hover:bg-purple-800 focus:ring-4 focus:ring-[#5f43b2] font-medium rounded-lg   py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-80 text-lg'>
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
              <div className=''>
                <img src={planet} className='blur absolute top-36 left-5 -mt-16 -ml-24 lg:-ml-32 xl:ml-56 object-center max-w-none w-52'/>
                </div>

            
            
          
          <div className='sm:h-96 '>
            <img src={aerocraft} className=''></img>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CARegisterPage;
